This class provides a GUI interface for playing liquid videos, resembling a traditional web video player. It is the main entry point to the library.

## Props {#props}

### `controls` {#controls}

Customize the player controls.

```ts
controls?: JSX.Element;
```

#### Example

You can extend the default controls like so:

```jsx
import {Player} from "liqvid";

const controls = [(<>
  {Player.defaultControlsLeft}
  <MyCustomControl/>

  <div className="lv-controls-right">
    <AnotherCustomControl/>
    {Player.defaultControlsRight}
  </div>
</>);
```

Say you wanted to have your own volume control, have the time display on the right, and not have the Settings control. Then you would write
```jsx
import {Controls, Player} from "liqvid";

const controls = (<>
  <Controls.PlayPause/>
  <MyVolumeControl/>

  <div className="lv-controls-right">
    <Controls.TimeDisplay/>
    <Controls.FullScreen/>
  </div>
</>);
```

:::info
At this time, it is not possible to provide your own scrubber bar. This will be corrected in a future release.
:::

### `playback` {#playback-prop}

The [`Playback`](./Playback.md) to use. This prop isn't needed if you're using a `Script`.

```ts
playback?: Playback;
```

### `script` {#script-prop}

The [`Script`](./Script.md) to use.

```ts
script?: Script;
```

### `thumbs` {#thumbs}

Provide thumbnail previews for the scrubber bar. You can generate thumbnail sheets with [`liqvid thumbs`](../cli/thumbs.md).

* `cols?: number = 5`  
  how many columns per sheet

* `rows?: number = 5`  
  how many rows per sheet

* `width?: number = 160`  
  the width of each thumbnail

* `height?: number = 100`  
  the height of each thumbnail

* `frequency?: number = 4`  
  how many seconds between thumbnails

* `path: string`  
  pattern where the sheets are located. Must contain `%s`.

* `highlights?: {time: number, title: string}[]`  
  points of interest in the video, these will be highlighted on the scrubber bar

#### Example

```tsx
const highlights = [
  {title: "Horses", time: script.parseStart("horses/")},
  {title: "Cats", time: script.parseStart("cats/")}
];

const thumbs = {
  path: `./thumbs/%s.png`,
  highlights
};

<Player script={script} thumbs={thumbs}>
```

## Static properties {#static-properties}

### `Context` {#Context}

React [Context](https://reactjs.org/docs/context.html) containing a reference to the ambient player. If you are using Hooks, you can use [`usePlayer()`](./Hooks.md#usePlayer) instead.

```typescript
static Context: React.Context<Player>;
```

### `defaultControlsLeft` {#defaultControlsLeft}

The default controls appearing on the left: [`PlayPause`](/docs/reference/Controls#PlayPause), [`Volume`](/docs/reference/Controls#Volume), [`TimeDisplay`](/docs/reference/Controls#TimeDisplay).

### `defaultControlsRight` {#defaultControlsRight}

The default controls appearing on the right: [`Settings`](/docs/reference/Controls#Settings) and [`FullScreen`](/docs/reference/Controls#FullScreen).

:::note

You need to wrap these in `<div className="lv-controls-right">` for these to actually be right-aligned.

:::

## Properties {#properties}

### `canPlay` {#canPlay}

Liqvid analogue of the [`canplay`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event) event. This can be used to wait for [Audio](./Audio.md#obstructCanPlay) or [Video](./Video.md#obstructCanPlay) files to load. You can also use [`obstruct()`](#obstruct) to add custom loaders.

```typescript
canPlay: Promise<void>;
```

### `canPlayThrough` {#canPlayThrough}

Liqvid analogue of the [`canplaythrough`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event) event. This can be used to wait for [Audio](./Audio.md#obstructCanPlayThrough) or [Video](./Video.md#obstructCanPlayThrough) files to load. You can also use [`obstruct()`](#obstruct) to add custom loaders.

```typescript
canPlayThrough: Promise<void>;
```

### `canvas` {#canvas}

The div where video content is attached (which is separate from the controls).

```typescript
canvas: HTMLDivElement;
```

### `hub` {#hub}

An [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter) that your code can subscribe to. Emits the following events:

| Name           | Description |
| -------------- | ----------- |
| canplay        | Fired when the video is ready to start playing, but may not be able to play to its end without having to stop for further buffering of content. |
| canplaythrough | Fired when the video is ready to start playing, and will be able to play up to its end without having to stop for further buffering of content. |
| canvasClick    | Fired when a click happens anywhere on the canvas, which by default pauses/resumes the video. See [Canvas clicks](/docs/guide/interactivity#canvas-clicks) in the Authoring guide. |

```typescript
hub: StrictEventEmitter<EventEmitter, {
  "canplay": void;
  "canplaythrough": void;
  "canvasClick": void;
}>;
```

### `keymap` {#keymap}

The [`Keymap`](./Keymap.md) instance attached to this player.

```typescript
keymap: Keymap;
```

### `playback` {#playback}

The underlying [`Playback`](./Playback.md) instance.

```typescript
playback: Playback;
```

### `script` {#script}

The underlying [`Script`](./Script.md) instance.

```typescript
script: Script;
```

## Methods {#methods}

### `obstruct()` {#obstruct}

Add a Promise to the list of tasks needed for [`canPlay`](#canPlay) or [`canPlayThrough`](#canPlayThrough) to resolve. Parameters:

* `event: "canplay" | "canplaythrough"`  
Which event type to obstruct

* `task: Promise<void>`  
Promise to append

```typescript
obstruct(event: "canplay" | "canplaythrough", task: Promise<unknown>): void;
```

### `reparseTree()` {#reparseTree}

Reparse a section of the document for `during()` and `from()`. Accepts the following parameters:

* `node`  
Element to reparse

```typescript
reparseTree(node: HTMLElement | SVGElement): void;
```

### `resumeKeyCapture()` {#resumeKeyCapture}

Resumes keyboard controls.

```typescript
resumeKeyCapture(): void;
```

### `suspendKeyCapture()` {#suspendKeyCapture}

Suspends keyboard controls so that components can receive keyboard input.

```typescript
suspendKeyCapture(): void;
```
