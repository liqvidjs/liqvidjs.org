<p>You will probably only need animation, authoring, interactivity, misc, mobile.</p>

## Utils.animation

<!-- <!-- <pre class="language-typescript" id="animation.animate"><code> -->
```typescript
animate(options: {
  startValue?: number,
  endValue?: number,
  startTime: number,
  duration: number,
  easing?: (x: number) => number
}): (t: number) => number;
```

```typescript
replay<K>({data, start, end, active, inactive, compressed}: ReplayArgs<K>): (t: number) => void;
```

## Utils.authoring

<!-- <!-- <pre class="language-typescript" id="authoring.during"><code> -->
```typescript
/** Returns a CSS block to show the element only when marker name begins with `prefix` */
during: (prefix: string) => {"data-during": string;};
```

```typescript
/** Returns a CSS block to show the element when marker is in [first, last) */
from: (first: string, last?: string) => {"data-from-first": string; "data-from-last"?: string;};
```

```typescript
showIf(cond: boolean): {style?: React.CSSProperties;};
```

## Utils.interactivity

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

## Utils.media

```typescript
awaitMediaCanPlay(media: HTMLMediaElement): Promise<Event>;
```

```typescript
awaitMediaCanPlayThrough(media: HTMLMediaElement): Promise<Event>;
```

## Utils.misc

```typescript
/** Equivalent to `(min <= val) && (val < max)`. */
between(min: number, val: number, max: number): boolean;
```

```typescript
/** Bind methods on o. */
bind<T extends {[P in K]: Function}, K extends keyof T>(o: T, methods: K[]): void;
```

```typescript
/** Equivalent to `Math.min(max, Math.max(min, val))` */
constrain: (min: number, val: number, max: number) => number;    
```

```typescript
/** Returns [0, ..., n-1] */
range: (n: number) => number[];
```

```typescript
/** Returns a Promise that resolves in `time` milliseconds. */
wait(time: number): Promise<void>;
```

```typescript
/** Returns a Promise that resolves once `callback` returns true. */
waitFor(callback: () => boolean, interval?: number): Promise<void>;
```

## Utils.mobile

```typescript
/** Whether any available input mechanism can hover over elements. This is used as a standin for desktop/mobile. */
anyHover: boolean;
```

```typescript
/** Drop-in replacement for onClick handlers which works better on mobile. */
onClick: <T extends Node>(
  callback: (e: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>) => void,
  innerRef?: React.Ref<T>
) => {
  onClick: (e: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>) => void;
} | {
  ref: (_: T) => void;
};
```

```typescript
/**
  Replacement for addEventListener("click") which works better on mobile.
  Returns a function to remove the event listener.
*/
attachClickHandler(node: Node, callback: (e: MouseEvent| TouchEvent) => void): () => void;
```

<h2 id="react">Utils.react</h2>

```typescript
useForceUpdate(): React.DispatchWithoutAction;
```
A forceUpdate() function.

```typescript
recursiveMap
  (children: React.ReactNode, fn: (child: React.ReactElement<any>) => React.ReactElement<any>)
  : React.ReactChild[];
```

Don't use this.

<h2 id="replayData">Utils.replayData</h2>

```typescript
concat<T>(...args: [ReplayData<T>, number][]): ReplayData<T>;
```

```typescript
  length<T>(data: ReplayData<T>): number;
```

## Utils.time

```typescript
timeRegexp: RegExp;
```

```typescript
parseTime(str: string): number;
```

```typescript
formatTime(time: number): string;
```

```typescript
formatTimeMs(time: number): string;    
```
