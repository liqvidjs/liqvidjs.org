This is a big hodge-podge of helper functions. Several of these arguably do not belong in this library, but we have chosen author convenience over library slimness. You will probably only need animation, authoring, interactivity, misc, and mobile.

```tsx
import {Utils} from "ractive-player";
```

## `Utils.animation` {#animation}

### `animate()` {#animate}

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

#### Example

Here is code for a duck that spins in an elliptical motion. The animation will start at the marker named `"duck"`, lasting 1 second with sinusoidal ease-in. This example uses the [bezier-easing](https://www.npmjs.com/package/bezier-easing) package. You can get parameters for Bezier curves from https://easings.net or https://cubic-bezier.com.

```tsx
import {Utils, usePlayer, useTimeUpdate} from "ractive-player";
const {animate} = Utils.animation;

import * as BezierEasing from "bezier-easing";
const easeInSine = [0.47, 0, 0.745, 0.715] as const;

function AnimatedDuck() {
  // reference to the element to animate
  const duck = React.useRef<HTMLImageElement>();

  // create the animation function
  const {script} = usePlayer();
  const rotate = React.useMemo(() => animate({
    endValue: 2 * Math.PI,
    startTime: script.parseStart("duck"),
    duration: 1000,
    easing: BezierEasing(...easeInSine)
  }), []);

  // schedule animation
  useTimeUpdate(t => {
    const p = rotate(t);
    duck.current.style.left = `${35 + 15 * Math.cos(p)}%`;
    duck.current.style.top = `${15 - 12.5 * Math.sin(p)}%`;
  }, []);

  return (
    <img src={"/img/duck.svg"} ref={duck}/>
  );
}
```

### `replay()` {#replay}

```typescript
replay<K>({data, start, end, active, inactive, compressed}: ReplayArgs<K>): (t: number) => void;
```

## `Utils.authoring` {#authoring}

### `during()` {#during}

Returns a CSS block to show the element only when marker name begins with `prefix`.

```typescript
during: (prefix: string) => {"data-during": string;};
```

#### Example {#example}
```tsx
import {Utils} from "ractive-player";
const {during} = Utils.authoring;

function IntroSlide() {
  return (
    <section {...during("intro/")}>
      {/* Content will only be visible when marker name starts with "intro/" */}
    </section>
  );
}
```

### `from()` {#from}

Returns a CSS block to show the element when marker is in [first, last).

```typescript
from: (first: string, last?: string) => {"data-from-first": string; "data-from-last"?: string;};
```

### `showIf()` {#showif}

```typescript
showIf(cond: boolean): {style?: React.CSSProperties;};
```

## `Utils.interactivity` {#interactivity}

### `dragHelper()` {#dragHelper}

```typescript
dragHelper<T extends Node, E extends MouseEvent | React.MouseEvent<T> | TouchEvent | React.TouchEvent<T>>(
  move: (e: MouseEvent | TouchEvent, o: {x: number; y: number; dx: number; dy: number}) => void,
  down?: (
    e: E,
    o: {x: number; y: number},
    upHandler: (e: MouseEvent | TouchEvent) => void,
    moveHandler: (e: MouseEvent | TouchEvent) => void
  ) => void,
  up?: (e: MouseEvent | TouchEvent) => void
): (e: E) => void;
```

### `dragHelperReact()` {#dragHelperReact}

```typescript
dragHelperReact<T extends Node>(
  move: (e: MouseEvent | TouchEvent, o: {x: number; y: number; dx: number; dy: number}) => void,
  down?: (
    e: React.MouseEvent<T> | React.TouchEvent<T>,
    o: {x: number; y: number},
    upHandler: (e: MouseEvent | TouchEvent) => void,
    moveHandler: (e: MouseEvent | TouchEvent) => void
  ) => void,
  up?: (e: MouseEvent | TouchEvent) => void,
  innerRef?: React.Ref<T>
): {
  onMouseDown: (e: React.MouseEvent<T>) => void;
  onMouseUp: (e: React.MouseEvent<T>) => void;
  ref: (_: T) => void;
};
```

## `Utils.media` {#media}

### `awaitMediaCanPlay()` {#awaitMediaCanPlay}

```typescript
awaitMediaCanPlay(media: HTMLMediaElement): Promise<Event>;
```

### `awaitMediaCanPlayThrough()` {#awaitMediaCanPlayThrough}
```typescript
awaitMediaCanPlayThrough(media: HTMLMediaElement): Promise<Event>;
```

## `Utils.misc` {#misc}

A bunch of little functions that should be part of core Javascript, but aren't.

### `between()` {#between}

Equivalent to `(min <= val) && (val < max)`.

```typescript
between(min: number, val: number, max: number): boolean;
```

### `bind()` {#bind}

Bind methods of an object to the object, so that `this` behaves as expected. This is mainly for code using class components rather than Hooks.

```typescript
bind<T extends {[P in K]: Function}, K extends keyof T>(o: T, methods: K[]): void;
```

### `constrain()` {#constrain}

Equivalent to `Math.min(max, Math.max(min, val))`.

```typescript
constrain: (min: number, val: number, max: number) => number;    
```

### `range()` {#range}

Returns `[0, ..., n-1]`

```typescript
range: (n: number) => number[];
```

### `wait()` {#wait}

Returns a Promise that resolves in `time` milliseconds.

```typescript
wait(time: number): Promise<void>;
```

### `waitFor()` {#waitFor}

Returns a Promise that resolves once `callback` returns true.

```typescript
waitFor(callback: () => boolean, interval?: number): Promise<void>;
```

## `Utils.mobile` {#mobile}

Utilities for ensuring compatibility with mobile devices.

### `anyHover` {#anyHover}
Whether any available input mechanism can hover over elements. This is often used as a standin for desktop/mobile.

```typescript
anyHover: boolean;
```

### `onClick()` {#onClick}

Drop-in replacement for onClick handlers which works better on mobile.

```typescript
onClick: <T extends Node>(
  callback: (e: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>) => void,
  innerRef?: React.Ref<T>
) => {
  onClick: (e: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>) => void;
} | {
  ref: (_: T) => void;
};
```

### `attachClickHandler()` {#attachClickHandler}

Replacement for addEventListener("click") which works better on mobile.

Returns a function to remove the event listener.

```typescript
attachClickHandler(node: Node, callback: (e: MouseEvent| TouchEvent) => void): () => void;
```

## `Utils.react` {#react}

### `useForceUpdate()` {#useForceUpdate}

A forceUpdate() function.

```typescript
useForceUpdate(): React.DispatchWithoutAction;
```

### `recursiveMap()` {#recursiveMap}

Used internally by [IdMap](/docs/reference/IdMap); you probably shouldn't use it.

```typescript
recursiveMap
  (children: React.ReactNode, fn: (child: React.ReactElement<any>) => React.ReactElement<any>)
  : React.ReactChild[];
```

## `Utils.replayData` {#replayData}

### `concat()` {#concat}

```typescript
concat<T>(...args: [ReplayData<T>, number][]): ReplayData<T>;
```

### `length()` {#length}

```typescript
  length<T>(data: ReplayData<T>): number;
```

## `Utils.time` {#time}

Utilities for manipulating time strings, e.g. `1:44.23`.

### `timeRegexp` {#timeRegexp}

The regular expression used internally by `parseTime()`. Equal to `/^(?:(?:(\d+):)?(\d+):)?(\d+)(?:\.(\d+))?$/`.

```typescript
timeRegexp: RegExp;
```

### `parseTime()` {#parseTime}

Parses a time in `hh:mm:ss.ms` format to milliseconds. Hours, minutes, and milliseconds can be omitted if 0.

```typescript
parseTime(str: string): number;
```

### `formatTime()` {#formatTime}

Format a time (given in milliseconds) as `hh:mm:ss`.

```typescript
formatTime(time: number): string;
```

### `formatTimeMs()` {#formatTimeMs}

Format a time (given in milliseconds) as `hh:mm:ss.ms`.

```typescript
formatTimeMs(time: number): string;    
```
