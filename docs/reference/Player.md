## Static properties

### `Context`
```typescript
static Context: React.Context<Player>;
```

## Static methods

### `allowScroll()`

Prevents intercepting of scroll on mobile.

```typescript
static allowScroll(e: React.TouchEvent | TouchEvent): void;
```

### `preventCanvasClick()`

Prevents a click from pausing/playing the video.

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

```typescript
canvas: HTMLDivElement;
```

### `hub`

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

Resumes keyboard controls.

```typescript
resumeKeyCapture(): void;
```

### `suspendKeyCapture()`

Suspends keyboard controls so that components can receive keyboard input.

```typescript
suspendKeyCapture(): void;
```
