---
title: MathJax
---

The `@liqvid/mathjax` package helps with using [MathJax](https://www.mathjax.org/) in Liqvid videos.

## Usage

```tsx
import {MJX} from "@liqvid/mathjax";

function Quadratic() {
  return (
    <div>
      The value of <MJX>x</MJX> is given by the quadratic formula
      <MJX display>{String.raw`x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}`}</MJX>
    </div>
  );
}
```

## Exports

### `<MJX>` {#MJX}

This component accepts the following props:

* `display?: boolean = false`  
  Whether to render in displaystyle.

* `reparse?: boolean = false`  
  Whether to reparse the tree.

#### Properties

Refs attached to this component have the following properties:

* `domElement: HTMLSpanElement`  
  Underlying `<span>` element.

* `ready: Promise<void>`  
  A Promise that will resolve once the element has finished typesetting.

### `<RenderGroup>` {#RenderGroup}

#### Props

This component accepts the following props:

* `reparse?: boolean = false`  
  Whether to reparse the tree.

#### Properties

Refs attached to this component have the following properties:

* `ready: Promise<void>`  
  A Promise that resolves once all `<KTX>` descendants are ready.

<!-- 
## Example

```tsx liqvid module
// @css
.lv-canvas {
  background: #3C352A;
}
// @/css
import React, {useRef} from "react";
import ReactDOM from "react-dom";

import {Playback, Player, useTime} from "liqvid"
import {MJX} from "@liqvid/mathjax?deps=liqvid@2.1.0-beta.4";

const playback = new Playback({duration: 10000});

function Lesson() {
  return (
    <Player playback={playback}>
      <Derivation/>
    </Player>
  );
}

function Derivation() {
  return (
    <MJX>x^2 + y^2 = 1</MJX>
  );
}

ReactDOM.render(<Lesson/>, document.querySelector("main"));
``` -->

<!-- 
# XyJax integration

`@liqvid/xyjax` [XyJax](https://github.com/sonoisa/XyJax-v3/).

```tsx
export declare function a$opacity(u: number, nodes: SVGElement[]): void;
export declare function useAnimateArrows(o: {
    head: string;
    tail: string;
    label?: string;
    ref: React.MutableRefObject<MJX>;
    headFn: (t: number) => void;
    tailFn: (t: number) => void;
    labelFn: (t: number) => void;
}, deps?: React.DependencyList): void;
export declare function useMathAnimation(o: {
    ref: React.MutableRefObject<MJX>;
    selector: string;
    fn: (t: number) => number;
    cb: (u: number, nodes: SVGElement[]) => void;
}, deps?: React.DependencyList): void;
export declare function useAnimation(opts: Opts, cb: (t: number) => void): void;
export declare function useLazy(anim: (t: number) => number, cb: (t: number) => void, deps?: React.DependencyList): void;
export declare function extendXY(): void;
export declare function xyEncodeColor(color: string): string;
export declare function xyDecodeColor(color: string): string;
export declare function tob52(str: string): string;
export declare function fromb52(str: string): string;
export {};
``` -->