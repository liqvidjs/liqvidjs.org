---
title: MathJax
---

The `@liqvid/mathjax` package helps with using [MathJax](https://mathjax.org/) in Liqvid videos.

## Examples

### Revealing equations

```tsx liqvid module
// @head
<script>
  window.MathJax = {
    loader: {
      load: [
        "[custom]/annotations.js"
      ],
      paths: {
        custom: "https://cdn.jsdelivr.net/gh/ysulyma/mathjax-extensions/"
      }
    },
    options: {
      enableMenu: false
    },
    startup: {
      typeset: false // don't perform initial typeset
    },
    tex: {
      packages: {"[+]": ["annotate"]}
    }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
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

import {MJX} from "@liqvid/mathjax";
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
  const step = (n: number) => raw`\data{from-first="proof/${n}"}`;
  return (
    <Player script={script}>
      <section data-during="proof/">
        <p>We can solve for <MJX>x</MJX> using the quadratic formula; here's how to derive that:</p>
        <MJX display reparse>{raw`
          \begin{aligned}
          ax^2 + bx + c &= 0\\[1em]
          ${step(1)}{x^2 + \frac ba x + \frac ca} &${step(1)}{= 0}\\[1em]
          ${step(2)}{x^2 + \frac ba x + \frac{b^2}{4a^2}} &${step(2)}{= -\frac ca + \frac{b^2}{4a^2}}\\[1em]
          ${step(3)}{\left(x+\frac b{2a}\right)^2} &${step(3)}{= \frac{b^2-4ac}{4a^2}}\\[1em]
          ${step(4)}{x+\frac b{2a}} &${step(4)}{= \frac{\sqrt{b^2-4ac}}{2a}}\\[1em]
          ${step(5)}{x} &${step(5)}{= \frac{-b \pm \sqrt{b^2-4ac}}{2a}}
          \end{aligned}
        `}</MJX>
      </section>
    </Player>
  );
}

ReactDOM.render(<Demo/>, document.querySelector("main"));
```

### Fading equations

```tsx liqvid module
// @head
<script>
  window.MathJax = {
    loader: {
      load: [
        "[custom]/annotations.js"
      ],
      paths: {
        custom: "https://cdn.jsdelivr.net/gh/ysulyma/mathjax-extensions/"
      }
    },
    options: {
      enableMenu: false
    },
    startup: {
      typeset: false // don't perform initial typeset
    },
    tex: {
      packages: {"[+]": ["annotate"]}
    }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
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

import {Handle, MJX} from "@liqvid/mathjax";
import {Player, Script} from "liqvid";

const script = new Script([
  ["proof/", "0:02"],
  ["proof/1", "0:02"],
  ["proof/2", "0:02"],
  ["proof/3", "0:02"],
  ["proof/4", "0:02"],
  ["proof/5", "0:02"]
]);
const {playback} = script;
const {raw} = String;

const fadeIn = (delay: number, duration: number = 500) => playback.newAnimation(
  [{opacity: 0}, {opacity: 1}],
  {delay, duration: 500, easing: "ease-in-out", fill: "both"}
)

function Demo() {
  const ref = useRef<Handle>();
  const step = (n: number) => raw`\data{from-first="proof/${n}"}`;

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
        <p>We can solve for <MJX>x</MJX> using the quadratic formula; here's how to derive that:</p>
        <MJX display reparse ref={ref}>{raw`
          \begin{aligned}
          ax^2 + bx + c &= 0\\[1em]
          ${step(1)}{x^2 + \frac ba x + \frac ca} &${step(1)}{= 0}\\[1em]
          ${step(2)}{x^2 + \frac ba x + \frac{b^2}{4a^2}} &${step(2)}{= -\frac ca + \frac{b^2}{4a^2}}\\[1em]
          ${step(3)}{\left(x+\frac b{2a}\right)^2} &${step(3)}{= \frac{b^2-4ac}{4a^2}}\\[1em]
          ${step(4)}{x+\frac b{2a}} &${step(4)}{= \frac{\sqrt{b^2-4ac}}{2a}}\\[1em]
          ${step(5)}{x} &${step(5)}{= \frac{-b \pm \sqrt{b^2-4ac}}{2a}}
          \end{aligned}
        `}</MJX>
      </section>
    </Player>
  );
}

ReactDOM.render(<Demo/>, document.querySelector("main"));
```


## Exports

### `Handle` {#Handle}

Type of refs attached to [`<MJX>`](#MJX) components.

* `domElement: HTMLSpanElement`  
  Underlying `<span>` element.

* `ready: Promise<void>`  
  A Promise that will resolve once the element has finished typesetting.

### `<MJX>` {#MJX}

Component for including math; contents will be rendered using MathJax.

#### Props {#MJX-props}

This component accepts the following props. Any additional attributes will be forwarded to the underlying `<span>` element.

* `display?: boolean = false`  
  Whether to render in displaystyle.

* `obstruct?: string = "canplay canplaythrough"`  
Player events to obstruct.

* `reparse?: boolean = false`  
  Whether to reparse the tree.

### `<MJXText>` {#MJXText}

Element which will render any MathJax contained inside.

#### Props {#MJXText-props}

This component accepts the following props. Any additional attributes will be forwarded to the underlying element.

* `tagName?: keyof (HTMLElementTagNameMap & JSX.IntrinsicElements) = "p"`  
  HTML tag to insert.

### `<RenderGroup>` {#RenderGroup}

Container for if you need to use `.ready` or `.reparse` on multiple `<MJX>` elements at once.

#### Props {#RenderGroup-props}

This component accepts the following props:

* `reparse?: boolean = false`  
  Whether to reparse the tree once all `<MJX>` descendants are ready.

#### Properties

Refs attached to this component have the following properties:

* `ready: Promise<void>`  
  A Promise that resolves once all `<MJX>` descendants are ready.
