## Static properties

### `Context`
```typescript
static Context: React.Context<Player>;
```

React Context containing a reference to the player. If you are using Hooks, you can use [usePlayer()](/docs/reference/hooks#useplayer) instead.

## Static methods

### `allowScroll()`

Prevents intercepting of scroll on mobile. See [Scroll events](/docs/guide/authoring#scroll-events) in the Authoring guide.

```typescript
static allowScroll(e: React.TouchEvent | TouchEvent): void;
```

### `preventCanvasClick()`

Prevents a click from pausing/playing the video. See [Canvas clicks](/docs/guide/authoring#canvas-clicks) in the Authoring guide.

```typescript
static preventCanvasClick(e: React.MouseEvent | MouseEvent): void;
```

## Properties

### `canPlay`

```typescript
canPlay: Promise<void[]>;
```

### `canPlayThrough`

```typescript
canPlayThrough: Promise<void[]>;
```

### `canvas`

The div where ractive content is attached (which is separate from ractive controls).

```typescript
canvas: HTMLDivElement;
```

### `hub`

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

### `keymap`

The [KeyMap](/docs/reference/KeyMap/) instance attached to this player.

```typescript
keymap: KeyMap;
```

### `playback`

The underlying [Playback](/docs/reference/Playback/) instance.

```typescript
playback: Playback;
```

### `script`

The underlying [Script](/docs/reference/Script/) instance.

```typescript
script: Script;
```

## Methods

### `obstruct()`

```typescript
obstruct(event: "canplay" | "canplaythrough", task: Promise<unknown>): void;
```

### `ready()`

Call this method when the ractive is ready to begin playing.

```typescript
ready(): void;
```

### `resumeKeyCapture()`

Resumes keyboard controls. See [Forms](/docs/guide/authoring#forms) in the Authoring guide.

```typescript
resumeKeyCapture(): void;
```

### `suspendKeyCapture()`

Suspends keyboard controls so that components can receive keyboard input. See [Forms](/docs/guide/authoring#forms) in the Authoring guide.

```typescript
suspendKeyCapture(): void;
```
