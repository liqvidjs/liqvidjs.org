Some helpers for converting between screen and SVG coordinate systems.

```tsx
// access like this
import {Utils} from "liqvid";
const {screenToSVG} = Utils.svg;

// or like this
import {screenToSVG} from "@liqvid/utils/svg";
```

## `screenToSVG()` {#screenToSVG}
Convert screen coordinates to SVG coordinates. Takes the following arguments:

* `elt: SVGElement`  
SVG Element

* `x: number`  
Screen x coordinate

* `y: number`  
Screen y coordinate

Returns `[x, y]` in SVG coordinates.

```typescript
screenToSVG(elt: SVGElement, x: number, y: number): [number, number]
```

## `screenToSVGVector()` {#screenToSVGVector}
Convert screen vector coordinates to SVG vector coordinates. Takes one argument with the following properties:

* `elt: SVGSVGElement`  
SVG Element

* `dx: number`  
Relative screen x coordinate

* `dy: number`  
Relative screen y coordinate

Returns `[dx, dy]` in SVG coordinates.

```typescript
screenToSVGVector(svg: SVGSVGElement, dx: number, dy: number): [number, number]
```
