## Static properties {#static-properties}

### `Context` {#Context}

React [Context](https://reactjs.org/docs/context.html) containing a reference to the ambient player. If you are using Hooks, you can use [usePlayer()](/docs/reference/hooks#usePlayer) instead.

```typescript
static Context: React.Context<Player>;
```

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

The [KeyMap](/docs/reference/KeyMap/) instance attached to this player.

```typescript
keymap: KeyMap;
```

### `playback` {#playback}

The underlying [Playback](/docs/reference/Playback/) instance.

```typescript
playback: Playback;
```

### `script` {#script}

The underlying [Script](/docs/reference/Script/) instance.

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
