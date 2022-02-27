Helpers for adding interactivity. See the [Interactivity](../../guide/interactivity.md) section of the guide for examples.

```tsx
import {Utils} from "liqvid";
const {dragHelperReact} = Utils.interactivity;
```

## `dragHelper()` {#dragHelper}

Helper for implementing drag functionality, abstracting over mouse vs touch events. Returns an event listener which should be added to both `mousedown` and `touchstart` events.

* `move: (e, hit) => void`  
  Callback for dragging (pointer is moved while down). Receives the following arguments:
  * `e: MouseEvent | TouchEvent`  
    The underlying `mousemove` or `touchmove` event
  * `hit: {x, y, dx, dy}`  
    Object containing information about the pointer location:
    * `x: number` Horizontal coordinate of pointer
    * `y: number` Vertical coordinate of pointer
    * `dx: number` Horizontal displacement since last call
    * `dy: number` Vertical displacement since last call
* `down?: (e, hit, upHandler, moveHandler) => void`  
  Callback for when dragging begins. Receives the following arguments:
  * `e: MouseEvent | TouchEvent`  
    The underlying `mousedown` or `touchstart` event
  * `hit: {x, y}`  
    Object containing information about the pointer location:
    * `x: number` Horizontal coordinate of pointer
    * `y: number` Vertical coordinate of pointer
    * `upHandler: (e: MouseEvent | TouchEvent) => void` Up handler used internally by this method (in case you need to cancel it)
    * `moveHandler: (e: MouseEvent | TouchEvent) => void` Move handler used internally by this method (in case you need to cancel it)
* `up?: (e, hit) => void`  
  Callback for when dragging ends (pointer is lifted). Receives the following arguments:
  * `e: MouseEvent | TouchEvent`  
    The underlying `mouseup` or `touchcancel`/`touchend` event
  * `hit: {x, y, dx, dy}`  
    Object containing information about the pointer location:
    * `x: number` Horizontal coordinate of pointer
    * `y: number` Vertical coordinate of pointer
    * `dx: number` Horizontal displacement since last call
    * `dy: number` Vertical displacement since last call

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

React version of the previous method. Returns an of event handlers which should be added to a React element with `{...}`.
 
Parameters:

* `move: (e, hit) => void`  
  same as above
* `down?: (e, hit) => void`  
  same as above
* `up?: (e, hit) => void`  
  same as above
* `innerRef?: React.Ref`  
  Any `ref` that you want attached to the element, since this method attaches its own `ref` attribute. This is a hack around https://github.com/facebook/react/issues/2043.


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
