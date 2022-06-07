---
title: THREE.js
---

The `@liqvid/react-three` package allows you to use [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) in Liqvid videos. It exports a single component, `<Canvas/>`, which should be used in place of the [`<Canvas/>`](https://docs.pmnd.rs/react-three-fiber/api/canvas) component from React Three Fiber. This does three things:

- [passes the Liqvid context through](https://docs.pmnd.rs/react-three-fiber/advanced/gotchas#consuming-context-from-a-foreign-provider) so that [`usePlayer()`](../reference/Hooks.md#usePlayer), [`useTime()`](../reference/Hooks.md#useTime) etc. still work

- adds `touch-action: "none"` to the container div styles (necessary for mobile interactions to work)

- adds `data-affords="click"` to the container div so that canvas clicks will not pause the video

For everything else, see the [React Three Fiber docs](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) and [THREE.js docs](https://threejs.org/docs/).


## Example

```tsx liqvid
// @css
.lv-canvas {
  background: #3C352A;
}
// @/css
import React, {useRef} from "react";
import {createRoot} from "react-dom/client";

import {OrbitControls} from "@react-three/drei/core/OrbitControls";
import {Canvas} from "@liqvid/react-three";
import {Playback, Player, useTime} from "liqvid";

const playback = new Playback({duration: 10000});

function Demo() {
  return (
    <Player playback={playback}>
      <Canvas camera={{position: [6, 4.5, 2.5], up: [0, 0, 1]}}>
        <OrbitControls enableDamping={false}/>
        <ambientLight/>
        <pointLight color={0xFFFFFF} position={[2,2,2]}/>
        <axesHelper args={[5]}/>
        <Sphere/>
      </Canvas>
    </Player>
  );
}

const grow = t => Math.sin(t / 1000 * 1.5) + 2;

function Sphere() {
  const ref = useRef<THREE.Mesh>();
  
  useTime(size => {
    ref.current.scale.set(size, size, size);
  }, grow, []);
  
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, , 32]} />
      <meshPhongMaterial color={0x3388FF} />
    </mesh>
  );
}

createRoot(document.querySelector("main")).render(<Demo/>);
```

## Example: Alexander horned sphere

Here is an example (with very messy code) illustrating the [Alexander horned sphere](https://en.wikipedia.org/wiki/Alexander_horned_sphere).

```tsx liqvid
// @css
.lv-canvas {
  background-color: #3C352A;
  /* faint grid for texture */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 10 10"><line x1="-5" x2="5" y1="0" y2="0" stroke="%23331" stroke-width=".5"/><line x1="0" x2="0" y1="-5" y2="5" stroke="%233333" stroke-width=".5"/></svg>');
  background-repeat: repeat;
  background-size: 1%;
}

// @/css
import React, {useMemo, useRef} from "react";
import {createRoot} from "react-dom/client";

import {useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei/core/OrbitControls";
import {Canvas} from "@liqvid/react-three";
import {Playback, Player, useTime} from "liqvid";
import * as THREE from "three";
import {constrain} from "@liqvid/utils/misc";

import {Euler, Matrix4, Quaternion, Vector3} from "three";

/** Toroidal coordinates */
function toroidal(R: number, r: number, theta: number, phi: number) {
  return [
    (R + r * cos(theta)) * cos(phi),
    (R + r * cos(theta)) * sin(phi),
    r * sin(theta)
  ] as const;
}

const {cos, sin} = Math;
const TWOPI = 2 * Math.PI;

const playback = new Playback({duration: 10000});

function Demo() {
  return (
    <Player playback={playback}>
      <Canvas camera={{position: [4.2, -9.2, 7.5], up: [0, 0, 1]}}>
        <OrbitControls enableDamping={false}/>
        <ambientLight/>
        <pointLight color={0xFFFFFF} position={[2,2,2]}/>
        <axesHelper args={[5]}/>
        <Horned/>
      </Canvas>
    </Player>
  );
}

const R = 6;
const r = 0.8;
const angle = 0.75;
const epsilon = 0.15;
const sR = 0.34;
const sr = 0.3;
const numIter = 7;
const rotLeft = [
  new THREE.Euler(0, TWOPI/4, -TWOPI/4),
  new THREE.Euler(0, TWOPI/4, -TWOPI/4)
].map(_ => new THREE.Quaternion().setFromEuler(_));

const rotRight = [
  new Euler(0, 0, TWOPI/4),
  new Euler(0, 0, TWOPI/4)
].map(_ => new Quaternion().setFromEuler(_));
const colors =
  [0x3366FF, 0xFF4444, 0x33FF33, 0xFFFF55, 0xFF33BB, 0xFFAA00, 0xFFFFFF]
  .map(color => new THREE.Color(color).convertSRGBToLinear()); // need to fix color-space

function Horned() {
  const {camera, scene} = useThree();

  useTime(t => {
    for (let iter = 0; iter < numIter; ++iter) {
      if (t <= iter * 1000) {
        scene.getObjectByName(`torus-${iter}`).visible = false;
        scene.getObjectByName(`capleft-${iter}`).visible = false;
        scene.getObjectByName(`capright-${iter}`).visible = false;
      }
      if (true) {
        const torus = scene.getObjectByName(`torus-${iter}`) as Mesh;

        const capLeft = scene.getObjectByName(`capleft-${iter}`) as THREE.InstancedMesh;
        const capRight = scene.getObjectByName(`capright-${iter}`) as THREE.InstancedMesh;

        const u = constrain(0, t / 1000 - iter, 1);
        if (u === 0)
          continue;

        // make visible
        torus.visible = true;
        capLeft.visible = true;
        capRight.visible = true;

        // animate torus
        const theta = u * angle + (1-u) * TWOPI;
        torus.geometry = new THREE.TorusGeometry(R * sR ** iter, r * sr ** iter, 32, 32, TWOPI - theta);
        torus.geometry.applyMatrix4(new THREE.Matrix4().makeRotationZ(theta/2));

        capLeft.geometry = new THREE.CircleGeometry(r * sr ** iter, 32);
        capLeft.geometry.applyMatrix4(new Matrix4().makeRotationFromEuler(new Euler(TWOPI/4, theta/2, 0)));

        capRight.geometry = new THREE.CircleGeometry(r * sr ** iter, 32);
        capRight.geometry.applyMatrix4(new Matrix4().makeRotationFromEuler(new Euler(TWOPI/4, -theta/2, 0)));

        // caps
        function place(p, q, stop=0, n=0) {
          const q0 = q.clone();
          const lR = R * sR ** stop;
          
          const dummy = new THREE.Object3D();
          dummy.rotation.setFromQuaternion(q0);

          // target point: opposite midpoint of empty space in torus
          const target = new THREE.Vector3(-lR, 0, 0);
          target.applyQuaternion(q0);

          // position torus
          const diff = new THREE.Vector3().subVectors(target, p);
          dummy.position.sub(diff);

          if (stop === iter) {
            dummy.updateMatrix();
            
            // left cap
            const dummyLeft = new THREE.Object3D();
            dummyLeft.position.set(...toroidal(lR, 0, 0, theta/2));
            dummyLeft.position.applyQuaternion(q0);
            dummyLeft.position.add(dummy.position);
            dummyLeft.quaternion.premultiply(q0);
            dummyLeft.updateMatrix();
            capLeft.setMatrixAt(n, dummyLeft.matrix);
            
            // right cap
            const dummyRight = new THREE.Object3D();
            dummyRight.quaternion.premultiply(q0);
            dummyRight.position.set(...toroidal(lR, 0, 0, -theta/2));
            dummyRight.position.applyQuaternion(q0);
            dummyRight.position.add(dummy.position);
            dummyRight.updateMatrix();
            capRight.setMatrixAt(n, dummyRight.matrix);
            return;
          }
          // left child
          const leftQ = q.clone();
          leftQ.multiply(rotLeft[iter % rotLeft.length]);

          const leftPos = new Vector3(...toroidal(lR, 0, 0, angle/2+epsilon));
          leftPos.applyQuaternion(q0);
          leftPos.add(dummy.position);

          place(leftPos, leftQ, stop+1, n);
          
          // right child
          const rightQ = q.clone();
          rightQ.multiply(rotRight[iter % rotRight.length]);

          const rightPos = new Vector3(...toroidal(lR, 0, 0, -angle/2-epsilon));
          rightPos.applyQuaternion(q0);
          rightPos.add(dummy.position);
          
          place(rightPos, rightQ, stop+1, n + 2 ** stop);
        }
        const p = new THREE.Vector3(0, 0, -R);
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(TWOPI/4, 0, TWOPI/4));
        place(p, q);
        capLeft.instanceMatrix.needsUpdate = true;
        capRight.instanceMatrix.needsUpdate = true;
      }
    }
  }, []);

  const children = useMemo(() => {
    const children = [];

    for (let iter = 0; iter < numIter; ++iter) {
      const torusGeometry = new THREE.TorusGeometry(R * sR ** iter, r * sr ** iter, 32, 32, TWOPI - angle);
      torusGeometry.applyMatrix4(new THREE.Matrix4().makeRotationZ(angle/2));
      const material = new THREE.MeshPhongMaterial({color: colors[iter % colors.length], side: THREE.DoubleSide});
      const torusMesh = new THREE.InstancedMesh(torusGeometry, material, 2 ** iter);
      torusMesh.name = `torus-${iter}`;
      
      // left cap
      const capLeft = new THREE.InstancedMesh(
        new THREE.CircleGeometry(r * sr ** iter, 32),
        material.clone(),
        2 ** iter
      );
      capLeft.geometry.applyMatrix4(new Matrix4().makeRotationFromEuler(new Euler(TWOPI/4, angle/2, 0)));
      capLeft.name = `capleft-${iter}`;

      // right cap
      const capRight = new THREE.InstancedMesh(
        new THREE.CircleGeometry(r * sr ** iter, 32),
        material.clone(),
        2 ** iter
      );
      capRight.geometry.applyMatrix4(new Matrix4().makeRotationFromEuler(new Euler(TWOPI/4, -angle/2, 0)));
      capRight.name = `capright-${iter}`;

      // children
      children.push(torusMesh, capLeft, capRight);
      
      function place(p, q, stop=0, n=0) {
        const q0 = q.clone();
        const lR = R * sR ** stop;
        
        const dummy = new THREE.Object3D();
        dummy.rotation.setFromQuaternion(q0);

        // target point: opposite midpoint of empty space in torus
        const target = new THREE.Vector3(-lR, 0, 0);
        target.applyQuaternion(q0);

        // position torus
        const diff = new THREE.Vector3().subVectors(target, p);
        dummy.position.sub(diff);

        if (stop === iter) {
          dummy.updateMatrix();
          torusMesh.setMatrixAt(n, dummy.matrix);
          
          // left cap
          const dummyLeft = new THREE.Object3D();
          dummyLeft.position.set(...toroidal(lR, 0, 0, angle/2));
          dummyLeft.position.applyQuaternion(q0);
          dummyLeft.position.add(dummy.position);
          dummyLeft.quaternion.premultiply(q0);
          dummyLeft.updateMatrix();
          capLeft.setMatrixAt(n, dummyLeft.matrix);
          
          // right cap
          const dummyRight = new THREE.Object3D();
          dummyRight.quaternion.premultiply(q0);
          dummyRight.position.set(...toroidal(lR, 0, 0, -angle/2));
          dummyRight.position.applyQuaternion(q0);
          dummyRight.position.add(dummy.position);
          dummyRight.updateMatrix();
          capRight.setMatrixAt(n, dummyRight.matrix);
          return;
        }
        // left child
        const leftQ = q.clone();
        leftQ.multiply(rotLeft[iter % rotLeft.length]);

        const leftPos = new Vector3(...toroidal(lR, 0, 0, angle/2+epsilon));
        leftPos.applyQuaternion(q0);
        leftPos.add(dummy.position);

        place(leftPos, leftQ, stop+1, n);
        
        // right child
        const rightQ = q.clone();
        rightQ.multiply(rotRight[iter % rotRight.length]);

        const rightPos = new Vector3(...toroidal(lR, 0, 0, -angle/2-epsilon));
        rightPos.applyQuaternion(q0);
        rightPos.add(dummy.position);
        
        place(rightPos, rightQ, stop+1, n + 2 ** stop);
      }
      const p = new THREE.Vector3(0, 0, -R);
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(TWOPI/4, 0, TWOPI/4));
      place(p, q);
    }

    return children;
  }, []);

  return children.map((_, n) => <primitive key={n} object={_}/>);
}

createRoot(document.querySelector("main")).render(<Demo/>);
```