---
title: Authoring
---

## Interactivity {#interactivity}

### Canvas clicks {#canvas-clicks}

By default, clicking anywhere on the video pauses it. Of course, you do not want this behavior for interactive components or links. To prevent this, add `onMouseUp={Player.preventCanvasClick}`:

```tsx
import {Player} from "ractive-player";

<a href="https://example.com" target="_blank" onMouseUp={Player.preventCanvasClick}>
This link will open in a new tab and will not pause the video when clicked.
</a>
```

If you would like to disable pause-on-click globally, you can write:
```tsx
import {usePlayer} from "ractive-player";

function Ractive() {
  const player = usePlayer();
  
  React.useEffect(() => {
    player.hub.on("canvasClick", () => false);
  }, []);
}
```

### Dragging {#dragging}

We provide the [`dragHelperReact`](/docs/reference/Utils#dragHelperReact) utility to help with making components draggable by abstracting over the difference between mouse and touch events. Here is code for a draggable pig:

```tsx
import {useMemo, useRef} from "react";
import {Utils, usePlayer} from "ractive-player";
const {dragHelperReact} = Utils.interactivity,
      {constrain} = Utils.misc;

function DraggablePig() {
  const player = usePlayer();

  const ref = useRef<HTMLImageElement>();
  const offset = useRef({x: 0, y: 0});
  const dragEvents = useMemo(() => dragHelperReact<HTMLImageElement>(
    // move
    (e, hit) => {
      // prevent from dragging off the page
      const left = constrain(
        0,
        hit.x - offset.current.x - player.canvas.offsetLeft,
        player.canvas.offsetWidth - ref.current.offsetWidth
      ) / player.canvas.offsetWidth;

      const top = constrain(
        0,
        hit.y - offset.current.y - player.canvas.offsetTop,
        player.canvas.offsetHeight - ref.current.offsetHeight
      ) / player.canvas.offsetHeight;

      Object.assign(ref.current.style, {
        left: `${left * 100}%`,
        top: `${top * 100}%`
      });
    },
    // down
    (e, hit) => {
      e.preventDefault();
      const dims = ref.current.getBoundingClientRect();
      offset.current.x = hit.x - dims.left;
      offset.current.y = hit.y - dims.top;

      document.body.classList.add("dragging");
    },
    // up
    () => {
      document.body.classList.remove("dragging");
    }
  ), []);

  return (
    <img className="draggable" src="/img/pig.svg" ref={ref} {...dragEvents}/>
  );
}
```

This is accompanied by the CSS code
```css
.draggable {
  cursor: grab;
  cursor: -webkit-grab;
}

body.dragging .rp-canvas,
body.dragging .draggable,
.dragging {
  cursor: grabbing;
  cursor: -webkit-grabbing;
}
```

### Forms {#forms}
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

## Recipes {#recipes}

### Navigation {#navigation}

Here is a button to seek to a specific marker. For example, you could use this to make a table of contents.

```tsx
import {Utils, usePlayer} from "ractive-player";
const {onClick} = Utils.mobile;

function Button() {
  const {playback, script} = usePlayer();

  const events = React.useMemo(() => {
    const time = script.parseStart("good-part");
    return onClick(() => {
      playback.seek(time);
    });
  }), []);

  return <button {...events}>Skip to the good part</button>;
}
```

### Pausing the video {#pausing-the-video}
Here is a component to automatically pause the video at a certain time/marker, e.g. for the viewer to make a choice.

```tsx
import {Utils, usePlayer, useTimeUpdate} from "ractive-player";
const {between} = Utils.misc;

interface Props {
  time: string;
  interval: number;
}

function PauseAt(props: Props) {
  const {playback, script} = usePlayer();

  const time = React.useMemo(() => script.parseStart(props.time), []);
  const interval = props.interval ?? 300;

  const prev = React.useRef(playback.currentTime);

  useTimeUpdate(t => {
    if (between(time - interval, prev.current, time) && between(time, t, time + interval)) {
      playback.pause();
    }
    prev.current = t;
  }, []);
}

// usage
<PauseAt time="intro/pause"/>
```
