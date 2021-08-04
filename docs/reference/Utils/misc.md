A bunch of little functions that should be part of core Javascript, but aren't.

```tsx
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

## `constrain()` {#constrain}

Equivalent to `Math.min(max, Math.max(min, val))`.

```typescript
constrain: (min: number, val: number, max: number) => number;    
```

## `range()` {#range}

Returns `[0, ..., n-1]`.

```typescript
range: (n: number) => number[];
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
