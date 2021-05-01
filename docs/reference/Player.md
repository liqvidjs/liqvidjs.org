This class provides a GUI interface for playing ractives, resembling a traditional web video player. It is the main entry point to the library.

## Props {#props}

### `controls` {#controls}

Customize the player controls.

```ts
controls?: JSX.Element;
```

#### Example

You can extend the default controls like so:

```jsx
import {Player} from "ractive-player";

const controls = (<>
  {Player.defaultControlsLeft}
  <MyCustomControl/>

  <div className="rp-controls-right">
    <AnotherCustomControl/>
    {Player.defaultControlsRight}
  </div>
</>);
```

Say you wanted to have your own volume control, have the time display on the right, and not have the Settings control. Then you would write
```jsx
import {Controls, Player} from "ractive-player";

const controls = (<>
  <Controls.PlayPause/>
  <MyVolumeControl/>

  <div className="rp-controls-right">
    <Controls.TimeDisplay/>
    <Controls.FullScreen/>
  </div>
</>);
```

:::info
At this time, it is not possible to provide your own scrubber bar. This will be corrected in a future release.
:::

### `script` {#script-prop}

The [Script](/docs/reference/Script) to use.

```ts
script: Script;
```

### `thumbs` {#thumbs}

Provide thumbnail previews for the scrubber bar. You can generate thumbnail sheets with [`rp-master thumbs`](/docs/rp-master/thumbs).

* `cols` how many columns per sheet

* `rows` how many rows per sheet

* `width` the width of each thumbnail

* `height` the height of each thumbnail

* `frequency` how many seconds between thumbnails

* `path` pattern where the sheets are located. Must contain `%s`.

* `highlights` points of interest in the video, these will be highlighted on the scrubber bar

```ts
thumbs?: {
  cols: number;
  rows: number;
  width: number;
  height: number;
  frequency: number;
  path: string;
  highlights?: {
    time: number;
    title: string;
  }[];
}
```

#### Example

```tsx
const highlights = [
  {title: "Horses", time: script.parseStart("horses/")},
  {title: "Cats", time: script.parseStart("cats/")}
];

const thumbs = {
  cols: 5,
  rows: 5,
  height: 100,
  width: 160,
  frequency: 4,
  path: `./thumbs/%s.png`,
  highlights
};
```

## Static properties {#static-properties}

### `Context` {#Context}

React [Context](https://reactjs.org/docs/context.html) containing a reference to the ambient player. If you are using Hooks, you can use [usePlayer()](/docs/reference/hooks#usePlayer) instead.

```typescript
static Context: React.Context<Player>;
```

### `defaultControlsLeft` {#defaultControlsLeft}

The default controls appearing on the left: [`PlayPause`](/docs/reference/Controls#PlayPause), [`Volume`](/docs/reference/Controls#Volume), [`TimeDisplay`](/docs/reference/Controls#TimeDisplay).

### `defaultControlsRight` {#defaultControlsRight}

The default controls appearing on the right: [`Settings`](/docs/reference/Controls#Settings) and [`FullScreen`](/docs/reference/Controls#FullScreen). **Note that you need to wrap these in `<div className="rp-controls-right"` for these to actually be right-aligned.**

## Static methods {#static-methods}

### `allowScroll()` {#allowScroll}

Prevents intercepting of scroll on mobile. See [Scroll events](/docs/guide/authoring#scroll-events) in the Authoring guide.

```typescript
static allowScroll(e: React.TouchEvent | TouchEvent): void;
```

### `preventCanvasClick()` {#preventCanvasClick}

Prevents a click from pausing/playing the video. See [Canvas clicks](/docs/guide/authoring#canvas-clicks) in the Authoring guide.

```typescript
static preventCanvasClick(e: React.MouseEvent | MouseEvent): void;
```

## Properties {#properties}

### `canPlay` {#canPlay}

```typescript
canPlay: Promise<void[]>;
```

### `canPlayThrough` {#canPlayThrough}

```typescript
canPlayThrough: Promise<void[]>;
```

### `canvas` {#canvas}

The div where ractive content is attached (which is separate from ractive controls).

```typescript
canvas: HTMLDivElement;
```

### `hub` {#hub}

An [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) that your code can subscribe to. Emits the following events:

| Name           | Description |
| -------------- | ----------- |
| canplay        | Fired when the ractive is ready to start playing, but may not be able to play to its end without having to stop for further buffering of content. |
| canplaythrough | Fired when the ractive is ready to start playing, and will be able to play up to its end without having to stop for further buffering of content. |
| canvasClick    | Fired when a click happens anywhere on the canvas, which by default pauses/resumes the video. See [Canvas clicks](/docs/guide/authoring#canvas-clicks) in the Authoring guide. |

```typescript
hub: StrictEventEmitter<EventEmitter, {
  "canplay": void;
  "canplaythrough": void;
  "canvasClick": void;
}>;
```

### `keymap` {#keymap}

The [KeyMap](/docs/reference/KeyMap) instance attached to this player.

```typescript
keymap: KeyMap;
```

### `playback` {#playback}

The underlying [Playback](/docs/reference/Playback) instance.

```typescript
playback: Playback;
```

### `script` {#script}

The underlying [Script](/docs/reference/Script) instance.

```typescript
script: Script;
```

## Methods {#methods}

### `obstruct()` {#obstruct}

```typescript
obstruct(event: "canplay" | "canplaythrough", task: Promise<unknown>): void;
```

### `ready()` {#ready}

Call this method when the ractive is ready to begin playing.

```typescript
ready(): void;
```

### `resumeKeyCapture()` {#resumeKeyCapture}

Resumes keyboard controls. See [Forms](/docs/guide/authoring#forms) in the Authoring guide.

```typescript
resumeKeyCapture(): void;
```

### `suspendKeyCapture()` {#suspendKeyCapture}

Suspends keyboard controls so that components can receive keyboard input. See [Forms](/docs/guide/authoring#forms) in the Authoring guide.

```typescript
suspendKeyCapture(): void;
```
