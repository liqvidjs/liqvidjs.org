---
title: Recipes
---

Here we provide code for some common scenarios.

## Draggable video

This shows how to have a draggable static video overtop of an interactive one. Warning: on some browsers, the video displays "trails" when dragging.

```tsx liqvid
// @css
.lv-canvas.no-face > .floating-face {
  display: none;
}

.floating-face {
  position: absolute;
  height: 30%;
  right: 0;
  bottom: var(--lv-controls-height);
}

/* face control */
.lv-controls-face {
  background: none;
  border: none;
  cursor: pointer;
  height: 100%;
}

.lv-controls-face > svg {
  height: 100%;
}

.lv-controls-face > svg > circle:first-child {
  stroke: #666;
}

.lv-controls-face > svg > *:not(:first-child) {
  fill: #666;
}

.lv-controls-face > svg.active > circle:first-child {
  stroke: #FFF;
}

.lv-controls-face > svg.active > *:not(:first-child) {
  fill: #FFF;
}

// @/css
import {clamp} from "@liqvid/utils/misc";
import {Playback, Player, Utils, Video, usePlayer} from "liqvid";
import {useMemo, useRef, useState} from "react";

const {dragHelperReact} = Utils.interactivity;
const {onClick} = Utils.mobile;

/** Floating video */
export function Face(props: {
  /** Url to the video */
  src: string;
}) {
  const player = usePlayer();
  const offset = useRef({x: 0, y: 0});
  const dragEvents = useMemo(() => dragHelperReact<HTMLVideoElement>(
    // move
    (e, hit) => {
      const {domElement} = ref.current;

      // prevent from dragging off the page
      const left = clamp(
        0,
        hit.x - offset.current.x - player.canvas.offsetLeft,
        player.canvas.offsetWidth - domElement.offsetWidth
      ) / player.canvas.offsetWidth;

      const top = clamp(
        0,
        hit.y - offset.current.y - player.canvas.offsetTop,
        player.canvas.offsetHeight - domElement.offsetHeight
      ) / player.canvas.offsetHeight;

      Object.assign(domElement.style, {
        left: `${left * 100}%`,
        top: `${top * 100}%`
      });
    },
    // down
    (e, hit) => {
      e.preventDefault();
      const {domElement} = ref.current;

      const dims = domElement.getBoundingClientRect();
      offset.current.x = hit.x - dims.left;
      offset.current.y = hit.y - dims.top;

      document.body.classList.add("dragging");
    },
    // up
    () => {
      document.body.classList.remove("dragging");
    }
  ), []);

  const ref = useRef<Video>();

  return (
    <Video className="draggable floating-face" {...dragEvents} ref={ref}>
      <source src="https://d2og9lpzrymesl.cloudfront.net/v/train_1920.mp4" type="video/mp4"/>
    </Video>
  );
}

/** Control for floating face video */
export function FaceControl() {
  const player = usePlayer();
  const [active, setActive] = useState(true);

  const label = active ? "Hide face" : "Show face";

  const events = useMemo(() => onClick<HTMLButtonElement>(e => {
    player.canvas.classList.toggle("no-face");
    setActive(prev => !prev);
    e.currentTarget.blur();
  }), []);

  return (
    <button className="lv-controls-face" aria-label={label} title={label} {...events}>
      <svg className={active ? "active" : undefined} viewBox="-10 -10 120 120">
        <circle cx="50" cy="50" r="45" fill="transparent" stroke="#FFF" strokeWidth="5"/>
        <circle cx="30" cy="30" r="5" fill={"#FFF"}/>
        <circle cx="70" cy="30" r="5" fill={"#FFF"} strokeWidth="0"/>
        <path d="M 20,50 A 30,30 0,0,0 80,50" fill={"#FFF"} strokeWidth="5"/>
      </svg>
    </button>
  );
}

const playback = new Playback({duration: 24000});

function MyVideo() {
  return (
    <Player controls={[<FaceControl/>]} playback={playback}>
      <p>Interactive content here</p>
      <Face/>
    </Player>
  );
}

// freeze-start
ReactDOM.createRoot(document.querySelector("main")).render(<MyVideo />);
```

## Linking to a specific time

The following code will let you link to a specific time in the video by appending `?t=[time]` to the url, [like this](/?t=1:41.5).

```tsx twoslash
import {parseTime, timeRegexp} from "@liqvid/utils/time";
import type {Playback} from "liqvid";

const rgx = new RegExp(
  "(?:^\\?|&)t=(" +
  timeRegexp.toString().replace(/^\/\^|\$\/$/g, "") +
  ")"
);

export default (playback: Playback) => {
  const $_ = parent.location.search.match(rgx);
  if ($_) {
    playback.seek(parseTime($_[1]));
  }
};
```

## Navigation {#navigation}

Here is a button to seek to a specific marker. For example, you could use this to make a table of contents.

```tsx
import {Utils, usePlayer} from "liqvid";
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

## Pausing the video {#pausing-the-video}
Here is a component to automatically pause the video at a certain time/marker, e.g. for the viewer to make a choice.

```tsx
import {usePlayer, useTime} from "liqvid";
import {between} from "@liqvid/utils/misc";

interface Props {
  time: string;
  interval?: number;
}

function PauseAt(props: Props) {
  const {playback, script} = usePlayer();

  const time = React.useMemo(() => script.parseStart(props.time), []);
  const interval = props.interval ?? 300;

  const prev = React.useRef(playback.currentTime);

  useTime(t => {
    if (between(time - interval, prev.current, time) && between(time, t, time + interval)) {
      playback.pause();
    }
    prev.current = t;
  }, []);

  return null;
}

// usage
<PauseAt time="intro/pause"/>
```

## Typing animation

Here's a simple typing animation:
```tsx liqvid
// @css
h1 {
  font-size: 6rem;
  position: absolute;
  top: 30%;
  text-align: center;
  width: 100%;
}
// @/css
import {clamp} from "@liqvid/utils/misc";
import {Playback, Player, useTime} from "liqvid";
import {createElement, useRef} from "react";
import {createRoot} from "react-dom";

const Typing: React.FC<{
  speed: number;
  start?: number;
  tagName?: keyof HTMLElementTagNameMap & JSX.IntrinsicElements;
}> = ({
  children, start=0, speed, tagName="span"
}) => {
  const ref = useRef<HTMLSpanElement>();
  useTime((count) => {
    ref.current.textContent = children.slice(0, count);
  }, t => clamp(0, Math.floor((t - start) / speed), children.length), []);
  return createElement(tagName, {ref});
}

const playback = new Playback({duration: 10000});

function MyVideo() {
  return (
    <Player playback={playback}>
      <Typing speed={50} tagName="h1">Hello World!</Typing>
    </Player>
  );
}

createRoot(document.querySelector("main")).render(<MyVideo />);
```

## Remember volume settings

Because of the GDPR, Liqvid does not remember volume settings between page refreshes. Once your users have consented to local storage, you can use the following to remember volume settings:

```tsx twoslash
import type {Playback} from "liqvid";

/**
Remember volume settings between views.

This is disabled by default due to GDPR.
*/

export default (playback: Playback) => {
  const storage = window.localStorage;

  // restore volume settings
  playback.volume = parseFloat(storage.getItem("liqvid volume") || "1");
  playback.muted = "true" === (storage.getItem("liqvid muted") || "false");

  // save volume settings
  playback.hub.on("volumechange", () => {
    storage.setItem("liqvid muted", playback.muted.toString());
    storage.setItem("liqvid volume", playback.volume.toString());
  });
}
```

<!-- 
## Dynamic content
```tsx liqvid
import {useCallback, useState} from "react";
import {Player, Script, usePlayer} from "liqvid";

function MyVideo() {
  return (
    <Player script={script}>
      <Choice/>
    </Player>
  );
}

const durations = {
  home: 2000,
  cow: 10000,
  duck: 15000
};

function Choice() {
  const {playback} = usePlayer();
  const [state, setState] = useState<keyof typeof durations>("home");

  const select = useCallback(v => {
    playback.duration = durations[v];
    setState(v);
  });
  const onClick = useCallback(e => select(e.target.value), []);
  const back = useCallback(() => select("home"), []);
  
  if (state === "home") {
    return (
      <div>
        What would you like to learn about?
        <button onClick={onClick} value="cow">Cows</button>
        <button onClick={onClick} value="duck">Ducks</button>
      </div>
    );
  } else if (state === "cow") {
    return <Cow back={back}/>;
  } else if (state === "duck") {
    return <Duck back={back}/>;
  }
}

function Cow(props) {
  return (
    <section>
      <h1>Cows go moo</h1>
      <button onClick={props.back}>Back</button>
    </section>
  );
}

function Duck(props) {
  return (
    <section>
      <h1>Duck goes quack</h1>
      <button onClick={props.back}>Back</button>
    </section>
  );
}
const markers = [
  ["intro/", "0:02"]
];
const script = new Script(markers);

ReactDOM.createRoot(document.querySelector("main")).render(<MyVideo />);
``` -->