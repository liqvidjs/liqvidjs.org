## Static properties

```typescript
static allowScroll(e: React.TouchEvent | TouchEvent): void;
```

Prevents intercepting of scroll on mobile.

```typescript
static preventCanvasClick(e: React.MouseEvent | MouseEvent): void;
```

Prevents a click from pausing/playing the video.

```typescript
static Context: React.Context<Player>;
```

## Properties

```typescript
canPlay: Promise<void[]>;
```

```typescript
canPlayThrough: Promise<void[]>;
```

```typescript
canvas: HTMLDivElement;
```

```typescript
hub: StrictEventEmitter<EventEmitter, {
  "canplay": void;
  "canplaythrough": void;
  "canvasClick": void;
}>;
```

```typescript
keymap: KeyMap;
```

The [KeyMap](/docs/reference/KeyMap/) instance attached to this player.

```typescript
playback: Playback;
```

The underlying [Playback](/docs/reference/Playback/) instance.

```typescript
script: Script;
```

The underlying [Script](/docs/reference/Script/) instance.

## Methods

```typescript
obstruct(event: "canplay" | "canplaythrough", task: Promise<unknown>): void;
```

```typescript
ready(): void;
```

Call this method when the ractive is ready to begin playing.

```typescript
resumeKeyCapture(): void;
```

Resumes keyboard controls.

```typescript
suspendKeyCapture(): void;
```

Suspends keyboard controls so that components can receive keyboard input.
