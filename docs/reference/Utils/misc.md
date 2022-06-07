A bunch of little functions that should be part of core Javascript, but aren't.

```tsx
// access like this (preferred)
import {constrain, range} from "@liqvid/utils/misc";

// or like this (legacy)
import {Utils} from "liqvid";
const {constrain, range} = Utils.misc;
```

## `between()` {#between}

Equivalent to `(min <= val) && (val < max)`.

```typescript
between(min: number, val: number, max: number): boolean;
```

## `bind()` {#bind}

Bind methods of an object to the object, so that `this` behaves as expected. This is mainly for code using class components rather than Hooks.

```typescript
bind<T extends {[P in K]: Function}, K extends keyof T>(o: T, methods: K[]): void;
```

## `clamp()` {#clamp}

Clamps a value between a lower and upper bound.

```typescript
clamp: (min: number, val: number, max: number) => number;
```

## `constrain()` {#constrain}

Alias for [`clamp()`](#clamp).

## `lerp()` {#lerp}

Linear interpolation between `a` and `b`.

```typescript
lerp: (a: number, b: number, t: number) => number;
```

## `range()` {#range}

Returns integers from `a` (inclusive) to `b` (exclusive). If called with one argument, `range(n)` is equivalent to `range(0, n)`.

```typescript
range: (a: number, b?: number) => number[];
```

## `wait()` {#wait}

Returns a Promise that resolves in `time` milliseconds.

```typescript
wait(time: number): Promise<void>;
```

## `waitFor()` {#waitFor}

Returns a Promise that resolves once `callback` returns true.

```typescript
waitFor(callback: () => boolean, interval?: number): Promise<void>;
```
