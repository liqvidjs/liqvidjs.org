The `<Video>` component is a drop-in replacement for the [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) tag. This can be used to use static videos inside interactive ones. The syntax is:

```tsx
import {Video} from "liqvid";

<Video>
  <source src={`video.webm`} type="video/webm"/>
  <source src={`video.mp4`} type="video/mp4"/>
</Video>
```

## Props {#props}

This component accepts the following props. Any additional props or children will be forwarded to the underlying `<video>` element.

### `obstructCanPlay` {#obstructCanPlay}

If true, prevents [`Player.canPlay`](./Player.md#canPlay) from resolving until the underlying `<video>` element [can play](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event).

```ts
obstructCanPlay?: boolean = false;
```

### `obstructCanPlayThrough` {#obstructCanPlayThrough}

If true, prevents [`Player.canPlayThrough`](./Player.md#canPlayThrough) from resolving until the underlying `<video>` element [can play through](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event).

```ts
obstructCanPlayThrough?: boolean = false;
```

### `start` {#start}

Time in milliseconds when the video should start playing.

```ts
start?: number = 0;
```

## Example

Here we demonstrate adding popups over a static video.

```tsx liqvid
// @css
.popup {
  background: #F00;
  border: 1px solid #000;
  border-radius: .2em;
  color: #FFF;
  font-size: 2em;
  max-width: 20%;
  padding: .2em;
  position: absolute;
}

#emergency {
  right: 11%;
  top: 10%;
}

video {
  width: 100%;
}
// @/css
import {useRef} from "react";
import {Player, Script, Video} from "liqvid";

const markers = [
  ["train/", "0:1"],
  ["train/emergency", "0:3"],
  ["train/", "0:20"]
];

const script = new Script(markers);

function Popup() {
  return (
    <aside className="popup" id="emergency" data-during="train/emergency">
      Pull in case of emergency &rarr;
    </aside>
  );
}

function MyVideo() {
  return (
    <Player script={script}>
      <Popup/>
      <Video>
        <source src="https://d2og9lpzrymesl.cloudfront.net/v/train_1920.mp4" type="video/mp4"/>
      </Video>
    </Player>
  );
}

// freeze-start
ReactDOM.render(<MyVideo/>, document.querySelector("main"));
```

<!-- ## Web Autoplay Policy {#web-autoplay-policy}

Although it is possible to combine traditional videos with interactive ones using this component, the <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#The_play()_method">Web Autoplay Policy</a> makes it complicated. The recommended solution is to extract the audio from your video and merge it with your main audio file, then use the audio-less video file. -->