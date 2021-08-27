---
title: Recipes
---

Here we provide code for some common scenarios.

## Linking to a specific time

The following code will let you link to a specific time in the video by appending `?t=[time]` to the url, [like this](/?t=1:41.5).

```tsx twoslash
import type {Playback} from "liqvid";
import {Utils} from "liqvid";
const {timeRegexp} = Utils.time;

const rgx = new RegExp(
  "(?:^\\?|&)t=(" +
  timeRegexp.toString().replace(/^\/\^|\$\/$/g, "") +
  ")"
);

export default (playback: Playback) => {
  const $_ = parent.location.search.match(rgx);
  if ($_) {
    playback.seek($_[1]);
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
import {Utils, usePlayer, useTimeUpdate} from "liqvid";
const {between} = Utils.misc;

interface Props {
  time: string;
  interval?: number;
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

  return null;
}

// usage
<PauseAt time="intro/pause"/>
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

ReactDOM.render(<MyVideo/>, document.querySelector("main"));
``` -->