Helpers for adding interactivity.

```tsx
import {Utils} from "liqvid";
const {dragHelperReact} = Utils.interactivity;
```

## `dragHelper()` {#dragHelper}

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

## `dragHelperReact()` {#dragHelperReact}

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
