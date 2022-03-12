Some helpers for dealing with React.

```tsx
// access like this
import {Utils} from "liqvid";
const {useForceUpdate} = Utils.react;

// or like this
import {useForceUpdate} from "@liqvid/utils/react";
```

## `combineRefs()` {#combineRefs}
Combine multiple [refs](https://beta.reactjs.org/learn/referencing-values-with-refs) into one. Parameters:

#### Parameters

* `...args: React.Ref[]`  
Refs to combine.

#### Return value
Returns a ref which applies all the passed refs.

```typescript
combineRefs<T>(...args: React.Ref<T>[]): (ref: T) => void
```

## `recursiveMap()` {#recursiveMap}

Recursive version of [`React.Children.map`](https://reactjs.org/docs/react-api.html#reactchildrenmap). Used internally by [IdMap](../IdMap.md) and some integrations; you probably don't need it.

```typescript
recursiveMap
  (children: React.ReactNode, fn: (child: React.ReactElement<any>) => React.ReactElement<any>)
  : React.ReactChild[];
```

## `useForceUpdate()` {#useForceUpdate}

A `forceUpdate()` function.

```typescript
useForceUpdate(): React.DispatchWithoutAction;
```

## `usePromise()` {#usePromise}

Returns an array `[promise, resolve, reject]` where `promise` is a Promise, `resolve` is a function to resolve `promise`, and `reject` is a function to reject `promise`.

```typescript
usePromise(): [Promise, resolve: () => void, reject: () => void];
```
