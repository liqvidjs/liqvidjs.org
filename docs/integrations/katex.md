---
title: KaTeX
---

The `@liqvid/katex` package helps with using [KaTeX](https://katex.org/) in Liqvid videos.

## Examples

### Revealing equations

```tsx liqvid module
// @head
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">

<script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.js" integrity="sha384-VQ8d8WVFw0yHhCk5E8I86oOhv48xLpnDZx5T9GogA/Y84DcCKWXDmSDfn13bzFZY" crossorigin="anonymous"></script>
// @/head
// @css
.lv-canvas > section {
  font-size: 1.8rem;
  padding: 1rem;
  position: absolute;
  height: 100%;
  width: 100%;
}
// @/css
import React from "react";
import ReactDOM from "react-dom";

import {KTX} from "@liqvid/katex";
import {Player, Script} from "liqvid";

const script = new Script([
  ["proof/", "0:02"],
  ["proof/1", "0:02"],
  ["proof/2", "0:02"],
  ["proof/3", "0:02"],
  ["proof/4", "0:02"],
  ["proof/5", "0:02"]
]);
const {raw} = String;

function Demo() {
  const step = (n: number) => raw`\htmlData{from-first=proof/${n}}`;
  return (
    <Player script={script}>
      <section data-during="proof/">
        <p>We can solve for <KTX>x</KTX> using the quadratic formula; here's how to derive that:</p>
        <KTX display reparse>{raw`
          \begin{aligned}
          ax^2 + bx + c &= 0\\[1em]
          ${step(1)}{x^2 + \frac ba x + \frac ca} &${step(1)}{= 0}\\[1em]
          ${step(2)}{x^2 + \frac ba x + \frac{b^2}{4a^2}} &${step(2)}{= -\frac ca + \frac{b^2}{4a^2}}\\[1em]
          ${step(3)}{\left(x+\frac b{2a}\right)^2} &${step(3)}{= \frac{b^2-4ac}{4a^2}}\\[1em]
          ${step(4)}{x+\frac b{2a}} &${step(4)}{= \sqrt{b^2-4ac}{2a}}\\[1em]
          ${step(5)}{x} &${step(5)}{= \frac{-b \pm \sqrt{b^2-4ac}}{2a}}
          \end{aligned}
        `}</KTX>
      </section>
    </Player>
  );
}

ReactDOM.render(<Demo/>, document.querySelector("main"));
```

### Fading equations

```tsx liqvid module
// @head
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">

<script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.js" integrity="sha384-VQ8d8WVFw0yHhCk5E8I86oOhv48xLpnDZx5T9GogA/Y84DcCKWXDmSDfn13bzFZY" crossorigin="anonymous"></script>
// @/head
// @css
.lv-canvas > section {
  font-size: 1.8rem;
  padding: 1rem;
  position: absolute;
  height: 100%;
  width: 100%;
}
// @/css
import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";

import {Handle, KTX} from "@liqvid/katex";
import {Player, Script} from "liqvid";

const script = new Script([
  ["proof/", "0:02"],
  ["proof/1", "0:02"],
  ["proof/2", "0:02"],
  ["proof/3", "0:02"],
  ["proof/4", "0:02"],
  ["proof/5", "0:02"]
]);
const {raw} = String;

const fadeIn = (delay: number, duration: number = 500) => script.playback.newAnimation(
  [{opacity: 0}, {opacity: 1}],
  {delay, duration: 500, easing: "ease-in-out", fill: "both"}
)

function Demo() {
  const ref = useRef<Handle>();
  const step = (n: number) => raw`\htmlData{from-first=proof/${n}}`;

  useEffect(() => {
    ref.current.ready.then(() => {
      const nodes = ref.current.domElement.querySelectorAll("*[data-from-first]");
      for (const node of nodes) {
        const delay = script.parseStart(node.dataset.fromFirst);
        fadeIn(delay)(node);
      }
    });
  }, []);
  return (
    <Player script={script}>
      <section data-during="proof/">
        <p>We can solve for <KTX>x</KTX> using the quadratic formula; here's how to derive that:</p>
        <KTX display ref={ref}>{raw`
          \begin{aligned}
          ax^2 + bx + c &= 0\\[1em]
          ${step(1)}{x^2 + \frac ba x + \frac ca} &${step(1)}{= 0}\\[1em]
          ${step(2)}{x^2 + \frac ba x + \frac{b^2}{4a^2}} &${step(2)}{= -\frac ca + \frac{b^2}{4a^2}}\\[1em]
          ${step(3)}{\left(x+\frac b{2a}\right)^2} &${step(3)}{= \frac{b^2-4ac}{4a^2}}\\[1em]
          ${step(4)}{x+\frac b{2a}} &${step(4)}{= \sqrt{b^2-4ac}{2a}}\\[1em]
          ${step(5)}{x} &${step(5)}{= \frac{-b \pm \sqrt{b^2-4ac}}{2a}}
          \end{aligned}
        `}</KTX>
      </section>
    </Player>
  );
}

ReactDOM.render(<Demo/>, document.querySelector("main"));
```


## Exports

### `<KTX>` {#KTX}

Component for including math; contents will be rendered using KaTeX.

#### Props

This component accepts the following props. Any additional attributes will be forwarded to the underlying `<span>` element.

* `display?: boolean = false`  
  Whether to render in displaystyle.

* `obstruct?: string = "canplay canplaythrough"`  
Player events to obstruct.

* `reparse?: boolean = false`  
  Whether to reparse the tree.

#### Properties

Refs attached to this component have the following properties:

* `domElement: HTMLSpanElement`  
  Underlying `<span>` element.

* `ready: Promise<void>`  
  A Promise that will resolve once the element has finished typesetting.

### `<RenderGroup>` {#RenderGroup}

Container for if you need to use `.ready` or `.reparse` on multiple `<KTX>` elements at once.

#### Props

This component accepts the following props:

* `reparse?: boolean = false`  
  Whether to reparse the tree once all `<KTX>` descendants are ready.

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
