
Helpers for animating content. See the [Animation](../../guide/animation.md) section of the guide for examples.

```tsx
// access like this
import {Utils} from "liqvid";
const {animate} = Utils.animation;

// or like this
import {animate} from "@liqvid/utils/animation";
```

## `animate()` {#animate}

This helper returns a function `f: (t: number) => number;` that takes in a time in milliseconds and returns a numeric value. The numeric value represents the position, opacity, etc. of an object you wish to animate. The function `f` will return `startValue` whenever `t` is less than `startTime`, and similarly will return `endValue` whenever `t` is greater than `startTime + duration`.

Takes a single object with the following keys:

* `startValue?: number`  
  The value of `f` at the beginning of the animation. Optional, defaults to 0.

* `endValue?: number`  
  The value of `f` at the end of the animation. Optional, defaults to 1.

* `startTime: number`  
  The time to start the animation. This will usually be specified with [`script.parseStart`](/docs/reference/Script#parseStart).

* `duration: number`  
  How long (in milliseconds) the animation should last.

* `easing?: (x: number) => number`  
  Easing function. Defaults to the identity function, i.e. linear easing.

```typescript
animate({startValue?, endValue?, startTime, duration, easing?}): (t: number) => number;
```
<!-- 
### Example

Here is code for a duck that spins in an elliptical motion. The animation will start at the marker named `"duck"`, lasting 1 second with sinusoidal ease-in. This example uses the [bezier-easing](https://www.npmjs.com/package/bezier-easing) package. You can get parameters for Bezier curves from https://easings.net or https://cubic-bezier.com.

```tsx liqvid
import {Player, Script, Utils, usePlayer, useTimeUpdate} from "liqvid";
const {animate} = Utils.animation;

//import * as BezierEasing from "bezier-easing";
//const easeInSine = [0.47, 0, 0.745, 0.715] as const;

const script = new Script([
  ["intro/", "1:00"],
  ["duck", "1:00"]
]);

function AnimatedDuck() {
  // reference to the element to animate
  const duck = React.useRef<HTMLImageElement>();

  // create the animation function
  const {script} = usePlayer();
  const rotate = React.useMemo(() => animate({
    endValue: 2 * Math.PI,
    startTime: 0,
    duration: 1000,
    //easing: BezierEasing(...easeInSine)
  }), []);

  // schedule animation
  useTimeUpdate(t => {
    const p = rotate(t);
    duck.current.style.left = `${35 + 15 * Math.cos(p)}%`;
    duck.current.style.top = `${15 - 12.5 * Math.sin(p)}%`;
  }, []);

  const style = {
    position: "absolute"
  };

  return (
    <h1 ref={duck} src={"/img/duck.svg"} style={style}>duck</h1>
  );
}

ReactDOM.render(
  <Player script={script}>
    <AnimatedDuck/>
  </Player>,
  document.querySelector("main")
);
``` -->

## `replay()` {#replay}

Returns a function that takes in a time (in milliseconds) and returns the "active" replay datum. Useful for writing replay plugins.

Takes a single object with the following keys:

* `data: ReplayData<K>`  
  Recording data to iterate through.

* `start?: number`  
  Start time. Defaults to 0.

* `end?: number`  
  End time. If not specified, defaults to `start` + total duration of `data`.

* `compressed?: boolean`  
  If `true`, times are interpreted as relative (this reduces filesize of recording data). Otherwise, they are interpreted as absolute times. Defaults to `false`.

* `active: (current: K, index: number) => void`  
  Callback receiving active value and index of active value.

* `inactive: () => void`  
  Callback called when replay becomes inactive. Doesn't get called repeatedly.

```typescript
replay<K>({data, start, end, active, inactive, compressed}): (t: number) => void;
```
