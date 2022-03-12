---
id: css
title: CSS
---

A few CSS variables are available to customize the appearance of the player:

```css
/* default values */
.lv-player {
  --lv-controls-height: 44px;
  --lv-elapsed-color: #AF1866;
  --lv-scrubber-color: #AF1866;
  --lv-scrub-height: 6px;
}

/* these ones control the aspect ratio --- default is 8/5 */
@media (min-aspect-ratio: 8/5) {
  :root {
    font-size: 2vh;
  }

  .lv-player {
    --lv-height: 100vh;
    --lv-width: 160vh;
  }

  .lv-canvas {
    margin: 0 auto;
  }
}

@media (max-aspect-ratio: 8/5) {
  :root {
    font-size: 1.25vw;
  }

  .lv-player {
    --lv-height: 62.5vw;
    --lv-width: 100vw;
  }
  .lv-canvas {
    top: calc((100% - 62.5vw) / 2);
  }
}
```

For example, to make a component occupy the full height of the canvas, but not be covered by the controls, you can write

```css
.my-component {
  height: calc(100% - var(--lv-controls-height));
}
```

