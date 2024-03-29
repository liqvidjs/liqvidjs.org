The `<Audio>` component is a drop-in replacement for the [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) tag. This is how you insert audio into Liqvid videos, ensuring that the audio will be synced up to the video playback. The syntax is:

```tsx
import {Audio} from "liqvid";

<Audio>
  <source src={`audio.webm`} type="audio/webm"/>
  <source src={`audio.mp4`} type="audio/mp4"/>
</Audio>
```

## Props {#props}

This component accepts the following props. Any additional props or children will be forwarded to the underlying `<audio>` element.

### `obstructCanPlay` {#obstructCanPlay}

If true, prevents [`Player.canPlay`](./Player.md#canPlay) from resolving until the underlying `<audio>` element [can play](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event).

```ts
obstructCanPlay?: boolean = false;
```

### `obstructCanPlayThrough` {#obstructCanPlayThrough}

If true, prevents [`Player.canPlayThrough`](./Player.md#canPlayThrough) from resolving until the underlying `<audio>` element [can play through](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event).

```ts
obstructCanPlayThrough?: boolean = false;
```

### `start` {#start}

Time in milliseconds when the video should start playing.

```ts
start?: number = 0;
```

## Web Autoplay Policy {#web-autoplay-policy}

When recording, it can be helpful to record several segments individually. Then you can use several `<Audio>` elements with different `start` attributes. However, due to the <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#The_play()_method">Web Autoplay Policy</a>, the final recording must be joined into a single file. We provide the [`liqvid audio join`](../cli/audio#join) command to help with this.
