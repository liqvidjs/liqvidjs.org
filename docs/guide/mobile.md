---
title: Mobile
---

## Polyfills {#polyfills}

The Web Animations API is not supported on older browsers, and the official polyfill does not completely work. Place the following code in your video page to work around this:

```html
<script src="https://unpkg.com/@liqvid/polyfills@0.0.1/dist/waapi.js"></script>
```
You can also just do
```html
<!-- @script "polyfills" -->
```
if you are using the [magic resource syntax](../cli/macros.md).

## Fake fullscreen {#fake-fullscreen}

iOS does not support the fullscreen API. Place the following code in the `<head>` of the hosting page (the page containing the `<iframe>`) to work around this:

```html
<head>
  <script src="https://unpkg.com/@liqvid/host/lv-host.js"></script>
</head>
```

## Fat fingers {#fat-fingers}

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

We learned this trick from https://front-back.com/expand-clickable-areas-for-a-better-touch-experience/.

For SVG components, such as a `<circle/>`, you can use a duplicate element which is a bit larger and has `fill: transparent`.

## Click events {#click-events}

Click events do not work reliably on mobile devices; one should use touch events instead. We provide an [onClick](../reference/Utils/mobile.md#onClick) helper for this.

```tsx liqvid
// @css
p {
  font-size: 2em;
  position: absolute;
  text-align: center;
  width: 100%;
  top: 2%;
}

#face {
  position: absolute;
  left: 25%;
  width: 50%;
  top: 10%;
}

#monster {
  color: red;
  font-size: 2rem;
  position: absolute;
  right: 2%;
  bottom: 10%;
}
// @/css
// freeze-start
import {useMemo, useRef, useState} from "react";
import {Player, Script, Utils} from "liqvid";
const {onClick} = Utils.mobile;
// freeze-end

function Face() {
  const [happy, setHappy] = useState(false);
  const monster = useRef(false);

  const events = useMemo(() => onClick<SVGSVGElement>(
    e => {
      setHappy(prev => {
        if (prev)
          monster.current = true;
        return !prev;
        });
    }
  ), []);

  return (
    <>
      <p>Click the face to {happy ? "make them sad again" : "turn that frown upside down"}!</p>
      <svg id="face" viewBox="0 0 100 100" {...events} onMouseUp={Player.preventCanvasClick}>
        <circle cx="50" cy="50" r="45" fill="#FF0" strokeWidth="3"/>
        <circle cx="20" cy="30" r="5" fill="#000"/>
        <circle cx="80" cy="30" r="5" fill="#000" strokeWidth="0"/>
        <path d={happy ? "M 20,50 A 30,30 0,0,0 80,50" : "M 20,70 A 30,30 0,0,1 80,70"} strokeWidth="5"/>
      </svg>
      {monster.current && <span id="monster">You monster.</span>}
    </>
  );
}

// freeze-start
const markers = [
  ["face", "1:00"]
];
const script = new Script(markers);

ReactDOM.render(<Player script={script}><Face/></Player>, document.querySelector("main"));
```
<!-- 
## Scroll events {#scroll-events}

On mobile, `Player` intercepts `touchmove` events to prevent scrolling of the window. This can cause problems with scrolling in elements with `overflow: auto` and variants. To ensure an element can be scrolled, write

```tsx
<div onTouchMove={Player.allowScroll}>
``` -->
