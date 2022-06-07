---
title: Interactivity
---

### Canvas clicks {#canvas-clicks}

By default, clicking on the video pauses it, just like a normal video. Of course, you do not want this behavior for interactive components. Liqvid tries to be intelligent and will not pause in response to clicks on `<a>`, `<area>`, `<button>`, `<input>`, `<option>`, `<select>`, `<textarea>`, or `<video>` tags. On other tags this behavior needs to be explicitly disabled.

To prevent pausing, add `data-affords="click"` to components that should receive clicks. You can also disable this behavior globally by subscribing to the `canvasClick` event and returning `false`.

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
// freeze-start
import {Playback, Player, usePlayer} from "liqvid";
import {useEffect} from "react";

const playback = new Playback({duration: 5000});
// freeze-end

function MyVideo() {
  return (
    <Player playback={playback}>
      <div id="div1">
        This div will pause/play the video if clicked
        <br/>
        <br/>
        <a href="https://google.com" target="_blank">This won't though</a>
        <button>Me neither</button>
      </div>
      <div id="div2" data-affords="click">
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
  useEffect(() => {
    player.hub.on("canvasClick", () => false);
  }, []);
  return null;
}

// freeze-start
ReactDOM.createRoot(document.querySelector("main")).render(<MyVideo />);
```

### Dragging {#dragging}

Even in ordinary Javascript, drag functionality is nontrivial. We provide the [`dragHelperReact`](../reference/Utils/interactivity.md#dragHelperReact) utility to make it a bit easier. Here is code for a draggable pig:

```tsx liqvid
// @css
.draggable {
  cursor: grab;
  cursor: -webkit-grab;
}

body.dragging .lv-canvas,
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
import {Playback, Player, Utils, usePlayer} from "liqvid";
import {useMemo, useRef} from "react";
const {dragHelperReact} = Utils.interactivity,
      {clamp} = Utils.misc;
// freeze-end

function Pig() {
  const player = usePlayer();

  const ref = useRef<HTMLImageElement>();
  const offset = useRef({x: 0, y: 0});
  const dragEvents = useMemo(() => dragHelperReact<HTMLImageElement>(
    // move
    (e, hit) => {
      // prevent from dragging off the page
      const left = clamp(
        0,
        hit.x - offset.current.x - player.canvas.offsetLeft,
        player.canvas.offsetWidth - ref.current.offsetWidth
      ) / player.canvas.offsetWidth;

      const top = clamp(
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
    <img alt="A cartoon pig" className="draggable" id="pig" src="/img/pig.svg" ref={ref} {...dragEvents}/>
  );
}

// freeze-start
const playback= new Playback({duration: 60000});
ReactDOM.render(<Player playback={playback}><Pig/></Player>, document.querySelector("main"));
```

Note the use of the `draggable` and `dragging` classes to provide feedback to the user.

<!-- ### SVG {#svg}

```tsx liqvid
// @css
.draggable {
  cursor: grab;
  cursor: -webkit-grab;
}

body.dragging .lv-canvas,
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
import {clamp} from "@liqvid/utils/misc";
import {screenToSVG} from "@liqvid/utils/svg";
import {Playback, Player, Utils, usePlayer} from "liqvid";
import {useMemo, useRef} from "react";
const {dragHelperReact} = Utils.interactivity;
// freeze-end

function GlowOrb(props: {
  r1: number;
  r2: number;
  dur: number;
} & React.SVGAttributes<SVGCircleElement>) {
  const {r1, r2, dur, ...attrs} = props;

  return (
    <circle
      r={r1}
      fill="transparent"
      pointerEvents="none"
      {...attrs}
    >
      <animate
        attributeName="r"
        from={r1}
        to={r2}
        dur={dur}
        begin="0s"
        repeatCount="indefinite"
      />
      <animate
        attributeType="CSS"
        attributeName="opacity"
        from="1"
        to="0"
        dur={dur}
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  );
}


function Draw() {
  const player = usePlayer();

  const ref = useRef<HTMLImageElement>();
  const offset = useRef({x: 0, y: 0});
  const dragEvents = useMemo(() => dragHelperReact<HTMLImageElement>(
    // move
    (e, hit) => {
      // prevent from dragging off the page
      const left = clamp(
        0,
        hit.x - offset.current.x - player.canvas.offsetLeft,
        player.canvas.offsetWidth - ref.current.offsetWidth
      ) / player.canvas.offsetWidth;

      const top = clamp(
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
    <svg viewBox="-50 -50 100 100">
      <GlowOrb r1="1" r2="3" stroke="#FF8000"/>
    </svg>
  );
}

// freeze-start
const playback = new Playback({duration: 5000});
ReactDOM.render(<Player playback={playback}><Draw/></Player>, document.querySelector("main"));
``` -->
