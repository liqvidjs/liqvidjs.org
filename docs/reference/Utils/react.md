Some helpers for dealing with React.

```tsx
import {Utils} from "liqvid";
const {useForceUpdate} = Utils.react;
```

## `useForceUpdate()` {#useForceUpdate}

A forceUpdate() function.

```typescript
useForceUpdate(): React.DispatchWithoutAction;
```

## `recursiveMap()` {#recursiveMap}

Used internally by [IdMap](../IdMap.md); you probably shouldn't use it.

```typescript
recursiveMap
  (children: React.ReactNode, fn: (child: React.ReactElement<any>) => React.ReactElement<any>)
  : React.ReactChild[];
```
