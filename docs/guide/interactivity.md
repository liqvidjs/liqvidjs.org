---
title: Interactivity
---

### Canvas clicks {#canvas-clicks}

By default, clicking on the video pauses it, just like a normal video. Of course, you do not want this behavior for interactive components. Liqvid tries to be intelligent and will not pause in response to clicks on `<a>`, `<area>`, `<button>`, `<input>`, `<option>`, `<select>`, `<textarea>`, or `<video>` tags. On other tags this behavior needs to be explicitly disabled.

To prevent pausing, add `onMouseUp={Player.preventCanvasClick}` to components that should receive clicks. You can also disable this behavior globally by subscribing to the `canvasClick` event and returning `false`.

```tsx liqvid
// @css
#div1, #div2 {
  background: #EEE;
  border-radius: .2em;
  font-size: 2rem;
  padding: .5rem;
  position: absolute;
  top: 10%;
  height: auto;
  width: 25%;
}

#div1 {
  left: 20%;
}

#div2 {
  right: 20%;
}
// @/css
// freeze-next-line
import {Player, Script, usePlayer} from "liqvid";

function MyVideo() {
  return (
    <Player script={script}>
      <div id="div1">
        This div will pause/play the video if clicked
        <br/>
        <br/>
        <a href="https://google.com" target="_blank">This won't though</a>
        <button>Me neither</button>
      </div>
      <div id="div2" onMouseUp={Player.preventCanvasClick}>
        This div won't
      </div>
      {/* Enabling this will disable pause-on-click globally */}
      {false && <DisablePause/>}
    </Player>
  );
}

/** Disable pause-on-click. */
function DisablePause() {
  // since this calls usePlayer(), cannot put directly in <MyVideo>
  const player = usePlayer();
  React.useEffect(() => {
    player.hub.on("canvasClick", () => false);
  }, []);
  return null;
}

// freeze-start
const markers = [
  ["intro/", "0:02"]
];
const script = new Script(markers);

ReactDOM.render(<MyVideo/>, document.querySelector("main"));
```

### Dragging {#dragging}

Even in ordinary Javascript, drag functionality is nontrivial. We provide the [`dragHelperReact`](../docs/reference/Utils/interactivity.md#dragHelperReact) utility to make it a bit easier. Here is code for a draggable pig:

```tsx liqvid
// @css
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

#pig {
  position: absolute;
  width: 25%;
}
// @/css
// freeze-start
import {useMemo, useRef} from "react";
import {Player, Script, Utils, usePlayer} from "liqvid";
const {dragHelperReact} = Utils.interactivity,
      {constrain} = Utils.misc;
// freeze-end

function Pig() {
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
    <img className="draggable" id="pig" src="/img/pig.svg" ref={ref} {...dragEvents}/>
  );
}

// freeze-start
const script = new Script([
  ["pig", "1:00"]
]);
ReactDOM.render(<Player script={script}><Pig/></Player>, document.querySelector("main"));
```

Note the use of the `draggable` and `dragging` classes to provide feedback to the user.
