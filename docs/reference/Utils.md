<p>You will probably only need animation, authoring, interactivity, misc, mobile.</p>

## `Utils.animation`

### `animate()`
<!-- <pre class="language-typescript" id="animation.animate"><code> -->
```typescript
animate(options: {
  startValue?: number,
  endValue?: number,
  startTime: number,
  duration: number,
  easing?: (x: number) => number
}): (t: number) => number;
```

### `replay()`

```typescript
replay<K>({data, start, end, active, inactive, compressed}: ReplayArgs<K>): (t: number) => void;
```

## `Utils.authoring`

### `during()`

Returns a CSS block to show the element only when marker name begins with `prefix`.

```typescript
during: (prefix: string) => {"data-during": string;};
```

### `from()`

Returns a CSS block to show the element when marker is in [first, last).

```typescript
from: (first: string, last?: string) => {"data-from-first": string; "data-from-last"?: string;};
```

### `showIf()`

```typescript
showIf(cond: boolean): {style?: React.CSSProperties;};
```

## Utils.interactivity

### `dragHelper()`

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

### `dragHelperReact()`

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

## `Utils.media`

### `awaitMediaCanPlay()`

```typescript
awaitMediaCanPlay(media: HTMLMediaElement): Promise<Event>;
```

### `awaitMediaCanPlayThrough()`
```typescript
awaitMediaCanPlayThrough(media: HTMLMediaElement): Promise<Event>;
```

## `Utils.misc`

### `between()`

Equivalent to `(min <= val) && (val < max)`.

```typescript
between(min: number, val: number, max: number): boolean;
```

### `bind()`

```typescript
/** Bind methods on o. */
bind<T extends {[P in K]: Function}, K extends keyof T>(o: T, methods: K[]): void;
```


### `constrain ()`

Equivalent to `Math.min(max, Math.max(min, val))`

```typescript
constrain: (min: number, val: number, max: number) => number;    
```

### `range ()`

Returns [0, ..., n-1]

```typescript
range: (n: number) => number[];
```


### `wait()`

Returns a Promise that resolves in `time` milliseconds.

```typescript
wait(time: number): Promise<void>;
```

### `waitFor()`

Returns a Promise that resolves once `callback` returns true.

```typescript
waitFor(callback: () => boolean, interval?: number): Promise<void>;
```

## `Utils.mobile`

### `anyHover`
Whether any available input mechanism can hover over elements. This is often used as a standin for desktop/mobile.

```typescript
anyHover: boolean;
```

### `onClick()`

Drop-in replacement for onClick handlers which works better on mobile.

```typescript
/**  */
onClick: <T extends Node>(
  callback: (e: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>) => void,
  innerRef?: React.Ref<T>
) => {
  onClick: (e: React.MouseEvent<T, MouseEvent> | React.TouchEvent<T>) => void;
} | {
  ref: (_: T) => void;
};
```

### `attachClickHandler()`

Replacement for addEventListener("click") which works better on mobile.

Returns a function to remove the event listener.

```typescript
attachClickHandler(node: Node, callback: (e: MouseEvent| TouchEvent) => void): () => void;
```

## `Utils.react`

### `useForceUpdate()`
```typescript
useForceUpdate(): React.DispatchWithoutAction;
```
A forceUpdate() function.

### `recursiveMap()`

Used internally by [IdMap](/docs/reference/IdMap); you probably shouldn't use it.

```typescript
recursiveMap
  (children: React.ReactNode, fn: (child: React.ReactElement<any>) => React.ReactElement<any>)
  : React.ReactChild[];
```

### `Utils.replayData`

### `concat()`

```typescript
concat<T>(...args: [ReplayData<T>, number][]): ReplayData<T>;
```

### `length()`

```typescript
  length<T>(data: ReplayData<T>): number;
```

## `Utils.time`

### `timeRegexp`

```typescript
timeRegexp: RegExp;
```

### `parseTime()`
```typescript
parseTime(str: string): number;
```

### `formatTime()`
```typescript
formatTime(time: number): string;
```

### `formatTimeMs()`
```typescript
formatTimeMs(time: number): string;    
```
