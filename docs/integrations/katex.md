---
title: KaTeX
---

The `@liqvid/katex` package helps with using [KaTeX](https://katex.org/) in Liqvid videos.

## Usage

```tsx
import {KTX} from "@liqvid/katex";

function Quadratic() {
  return (
    <div>
      The value of <KTX>x</KTX> is given by the quadratic formula
      <KTX display>{String.raw`x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}`}</KTX>
    </div>
  );
}
```

## Exports

### `<KTX/>` {#KTX}

#### Props

This component accepts the following props:

* `display?: boolean = false`  
  Whether to render in displaystyle.

* `reparse?: boolean = false`  
  Whether to reparse the tree.

#### Properties

Refs attached to this component have the following properties:

* `domElement: HTMLSpanElement`  
  Underlying `<span>` element.

* `ready: Promise<void>`  
  A Promise that will resolve once the element has finished typesetting.

### `<RenderGroup/>` {#RenderGroup}

#### Props

This component accepts the following props:

* `reparse?: boolean = false`  
  Whether to reparse the tree.

#### Properties

Refs attached to this component have the following properties:

* `ready: Promise<void>`  
  A Promise that resolves once all `<KTX>` descendants are ready.

## Macros

For convenience, this module supports loading macro definitions from a file. Simply include a `<script type="math/tex">` tag in the `<head>` of your html, pointing to a tex file containing `\newcommand`s.

```html
<!-- this has to go in <head> -->
<script src="./macros.tex" type="math/tex"></script>
```
```tex
% macros.tex
\newcommand{\C}{\mathbb C}
```
