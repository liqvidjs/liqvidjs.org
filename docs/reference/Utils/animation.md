
Helpers for animating content.

```tsx
import {Utils} from "liqvid";
const {animate} = Utils.animation;
```

## `animate()` {#animate}

This helper returns a function `f: (t: number) => number;` that takes in a time in milliseconds and returns a numeric value. The numeric value represents the position, opacity, etc. of an object you wish to animate. The function `f` will return `startValue` whenever `t` is less than `startTime`, and similarly will return `endValue` whenever `t` is greater than `startTime + duration`.

Takes a single object with the following keys:

* `startValue` The value of `f` at the beginning of the animation. Optional, defaults to 0.

* `endValue` The value of `f` at the end of the animation. Optional, defaults to 1.

* `startTime` The time to start the animation. This will usually be specified with [`script.parseStart`](/docs/reference/Script#parseStart).

* `duration` How long (in milliseconds) the animation should last.

* `easing` A function [0, 1] &rarr; [0, 1] to use instead of linear easing. (The notation [0, 1] means numbers between 0 and 1 inclusive, not a JavaScript array.) This makes motion more natural-looking and is recommended in almost every situation. Optional, defaults to identity function `(x: number) => x`, i.e. linear easing.

```typescript
animate(options: {
  startValue?: number,
  endValue?: number,
  startTime: number,
  duration: number,
  easing?: (x: number) => number
}): (t: number) => number;
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

```typescript
replay<K>({data, start, end, active, inactive, compressed}: ReplayArgs<K>): (t: number) => void;
```
