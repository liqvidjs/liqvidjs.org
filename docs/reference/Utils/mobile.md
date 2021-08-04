Utilities for ensuring compatibility with mobile devices.

```tsx
import {Utils} from "liqvid";
const {onClick} = Utils.mobile;
```

## `anyHover` {#anyHover}
Whether any available input mechanism can hover over elements. This is often used as a standin for desktop/mobile.

```typescript
anyHover: boolean;
```

## `onClick()` {#onClick}

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

## `attachClickHandler()` {#attachClickHandler}

Replacement for addEventListener("click") which works better on mobile.

Returns a function to remove the event listener.

```typescript
attachClickHandler(node: Node, callback: (e: MouseEvent| TouchEvent) => void): () => void;
```
