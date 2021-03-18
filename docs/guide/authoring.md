---
title: Authoring
---

## Forms {#forms}
In order for a component to receive keyboard input, you need to disable the keyboard controls. There is also a strange bug in iOS Safari where input components need to be manually focused.

```tsx
import {useCallback, useState} from "react";
import {Utils, usePlayer} from "ractive-player";
const {onClick} = Utils.mobile;

function Form() {
  const player = usePlayer();
  const [value, setValue] = useState("Alice");
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);

  return (
    <form>
      <input
        {...onClick((e: React.SyntheticEvent<HTMLInputElement>) => e.currentTarget.focus())}
        onBlur={player.resumeKeyCapture} onFocus={player.suspendKeyCapture}
        onChange={handler} value={value}/>
    </form>
  );
}
```

## Interactivity {#interactivity}

### Canvas clicks {#canvas-clicks}

By default, clicking anywhere on the video pauses it. Of course, you do not want this behavior for interactive components or links. To prevent this, add `onMouseUp={Player.preventCanvasClick}`:

```tsx
import {Player} from "ractive-player";

<a href="https://example.com" target="_blank" onMouseUp={Player.preventCanvasClick}>
This link will open in a new tab and will not pause the video when clicked.
</a>
```

<!-- ### Dragging

```tsx
import {Utils} from "ractive-player";
const {dragHelperReact} = Utils.interactivity;
```-->

## Mobile {#mobile}

### Fake fullscreen {#fake-fullscreen}

Mobile devices do not support the fullscreen API. As a workaround, when the fullscreen control is tapped on a mobile device, ractive-player will dispatch an event to the window containing the `iframe`. You can then maximize the iframe using CSS.

Here is example code for this:

```typescript
"use strict";

(() => {

const setDims = () => {
  document.body.style.setProperty("--vh", `${window.innerHeight}px`);
  document.body.style.setProperty("--vw", `${window.innerWidth}px`);
  document.body.style.setProperty("--scroll-y", `${window.scrollY || 0}px`);
};

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", setDims);
  setDims();

  const iframes = Array.from(document.querySelectorAll("iframe")).filter(_ => _.allowFullscreen && !document.fullscreenEnabled);

  const listener = (e) => {
    const iframe = iframes.find(_ => _.contentWindow === e.source);
    if (!iframe) return;

    if ("type" in e.data && e.data.type === "fake-fullscreen") {
      // resize event doesn't work reliably in iOS...
      setDims();
      iframe.classList.toggle("fake-fullscreen", e.data.value);
    }
  };

  window.addEventListener("message", listener);
});

})();
```

```css
iframe.fake-fullscreen {
  position: fixed;
  top: var(--scroll-y);
  left: 0;
  height: var(--vh);
  width: var(--vw);
  z-index: 10000;
}

@media (orientation: portrait) {
  iframe.fake-fullscreen {
    transform: rotate(-90deg);
    transform-origin: top left;
    left: 0;
    top: 100%;
    width: var(--vh);
    height: var(--vw);
  }
}
```

### Fat fingers {#fat-fingers}

Controls need a larger clickable area on mobile. You can use the following to increase the clickable area of an HTML component:

```css
.fat-fingers {
  position: relative;
}
    
.fat-fingers::after {
  content: "";
  position: absolute;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
}
```

We learned this trick from <a href="https://front-back.com/expand-clickable-areas-for-a-better-touch-experience/">https://front-back.com/expand-clickable-areas-for-a-better-touch-experience/</a>.

For SVG components, such as a `<circle/>`, you can use a duplicate element which is a bit larger and has `fill: transparent`.

### Click events {#click-events}

Click events do not work reliably on mobile devices; one should use touch events instead. We provide an <a href="/docs/reference/Utils#mobile.onClick">onClick</a> helper for this.

### Scroll events {#scroll-events}

<p>On mobile, <code>Player</code> intercepts <code>touchmove</code> events to prevent scrolling of the window. This can cause problems with scrolling in elements with <code class="language-css">overflow: auto</code> and variants. To ensure an element can be scrolled, write</p>

```tsx
<div onTouchMove={Player.allowScroll}>
```
