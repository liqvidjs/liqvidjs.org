---
layout: main.pug
title: CSS
---

# CSS

A few CSS variables are available to customize the appearance of the player:

<pre><code class="language-css">
/* default values */
.ractive-player {
  --rp-controls-height: 44px;
  --rp-elapsed-color: #AF1866;
  --rp-scrubber-color: #AF1866;
  --rp-scrub-height: 6px;
}

/* these ones control the aspect ratio --- default is 8/5 */
@media (min-aspect-ratio: 8/5) {
  :root {
    font-size: 2vh;
  }

  .ractive-player {
    --rp-height: 100vh;
    --rp-width: 160vh;
  }

  .rp-canvas {
    margin: 0 auto;
  }
}

@media (max-aspect-ratio: 8/5) {
  :root {
    font-size: 1.25vw;
  }

  .ractive-player {
    --rp-height: 62.5vw;
    --rp-width: 100vw;
  }
  .rp-canvas {
    top: calc((100% - 62.5vw) / 2);
  }
}
</code></pre>

For example, to make a component occupy the full height of the canvas, but not be covered by the controls, you can write

<pre><code class="language-css">
.my-component {
  height: calc(100% - var(--rp-controls-height));
}</code></pre>
