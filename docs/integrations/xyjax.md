---
title: XyJax
---

The `@liqvid/xyjax` package provides a few helpers for animating [XyJax](https://sonoisa.github.io/xyjax-v3/xyjax-v3.html) diagrams in Liqvid videos. It depends on [`@liqvid/mathjax`](./mathjax.md).

At this time, you need to use a mildly modified version of XyJax in order for us to be able to hook into it: you should load https://cdn.jsdelivr.net/gh/ysulyma/mathjax-extensions/xypic.js instead of https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/ (see the examples below).

## Examples

### Colored arrows

```tsx liqvid module
// @head
<script>
  window.MathJax = {
    loader: {
      load: [
        "[custom]/annotations.js", "[custom]/xypic.js",
        "[tex]/color.js", "[tex]/html.js"
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
      packages: {"[+]": ["annotate", "color", "html", "xypic"]}
    }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
// @/head
// @css
.lv-canvas > section {
  position: absolute;
  height: 100%;
  width: 100%;
}

#eqn {
  font-size: 5em;
}
// @/css
import React from "react";
import ReactDOM from "react-dom";

import {MJX} from "@liqvid/mathjax";
import {xyEncodeColor} from "@liqvid/xyjax";
import {Playback, Player} from "liqvid";

const playback = new Playback({duration: 5000});

const {raw} = String;

function Demo() {
  return (
    <Player playback={playback}>
      <section>
        <MJX display id="eqn" span>{raw`
          ${"\\"}xymatrix{
            H_n(X,A) \ar@[color${xyEncodeColor("AF1866")}][r]^-{\color{#AF1866} \partial} & H_{n-1}(A)
          }
        `}</MJX>
      </section>
    </Player>
  );
}

ReactDOM.render(<Demo/>, document.querySelector("main"));
```

### Animating arrows

```tsx liqvid module
// @head
<script>
  window.MathJax = {
    loader: {
      load: [
        "[custom]/annotations.js", "[custom]/xypic.js",
        "[tex]/html.js"
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
      packages: {"[+]": ["annotate", "html", "xypic"]}
    }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
// @/head
// @css
.lv-canvas > section {
  position: absolute;
  height: 100%;
  width: 100%;
}

#lifting {
  font-size: 5em;
}
// @/css
import React, {useRef} from "react";
import ReactDOM from "react-dom";

import {Handle, MJX} from "@liqvid/mathjax";
import {tob52, useAnimateArrows} from "@liqvid/xyjax";
import {Playback, Player, Utils} from "liqvid";

const playback = new Playback({duration: 5000});

const {raw} = String;

function Demo() {
  return (
    <Player playback={playback}>
      <section>
        <Lifting />
      </section>
    </Player>
  );
}

const {animate, bezier, easings} = Utils.animation;

const fadeTail = animate({
  startTime: 0,
  duration: 800,
  easing: bezier(...easings.easeOutCubic)
});

const headFade: KeyframeEffectOptions = {
  delay: 500,
  duration: 200,
  easing: "ease-in-out",
  fill: "both"
};

function Lifting() {
  const ref = useRef<Handle>();

  useAnimateArrows({
    head: "*[data-anim] path",
    tail: "*[data-anim] line",
    label: ".fade",
    ref,
    tailFn: fadeTail,
    headFade,
    labelFade: headFade
  });

  const line = "\"anim\":true";

  return (
    <MJX display id="lifting" ref={ref} span>{raw`
      ${"\\"}xymatrix{
        {*} \ar[d]_-0 \ar[r]^-{t_0} & \mathbb R \ar[d]^- p\\
        I \ar[r]_-{\alpha} \ar@[data${tob52(line)}]@{..>}[ur]^-{\class{fade}{\exists!\ \widetilde\alpha}} & S^1
      }
    `}</MJX>
  );
}

ReactDOM.render(<Demo/>, document.querySelector("main"));
```

## Exports

### `useAnimateArrows()` {#useAnimateArrows}

Animate XyJax arrows.

#### Parameters

Accepts the following parameters:

* `opts`  
  Options object with the following keys:

  * `opts.head?: string`  
    CSS selector for arrow head.

  * `opts.tail?: string`  
    CSS selector for arrow tail.

  * `opts.label?: string`  
    CSS selector for arrow label.

  * `opts.ref`  
    Reference to container [`<MJX>`](./mathjax.md#MJX)

  * `opts.tailFn: (t: number) => number`  
    Animation function for arrow tail.

  * `opts.headFade?: KeyframeEffectOptions`  
    Fade options for arrow head.

  * `opts.labelFade?: KeyframeEffectOptions`  
    Fade options for arrow label.

* `deps?: React.DependencyList`  
  List of dependencies.

### `xyEncodeColor()`  {#xyEncodeColor}

Encode a hex color for XyJax.

#### Parameters

* `color: string`  

Hex color to encode.

### `xyDecodeColor()`  {#xyDecodeColor}

Decode a hex color for XyJax.

#### Parameters

* `color: string`  

Encoded hex color to decode.

### `tob52()`  {#tob52}

Encode an object for XyJax.

#### Parameters

* `str: string`

Dataset string to encode.

### `fromb52()`  {#fromb52}

Decode an object for XyJax.

#### Parameters

* `str: string`  

String to decode.
