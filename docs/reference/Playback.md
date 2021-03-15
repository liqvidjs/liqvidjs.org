This class is the core of the library. It is an animation loop+event emitter which imitates an [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) being played (although it does not fully implement that interface).

The Playback is attached to the [Player](/docs/reference/Player#playback) and can be accessed like so:

```tsx
import {usePlayer} from "ractive-player";

function Button() {
  const {playback} = usePlayer();

  return <button onClick={() => playback.pause()}>Pause</button>;
}
```

## Properties

### `audioContext`
```typescript
audioContext: AudioContext;
```
### `audioNode`
```typescript
audioNode: GainNode;
```

### `currentTime`
The current playback time in milliseconds.

**Warning:** the [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface measures this property in seconds.

```typescript
currentTime: number;
```

### `duration`


The length of the playback in milliseconds.

**Warning:** the [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface measures this property in seconds.

```typescript
duration: number;
```

### `hub`
```typescript
hub: StrictEventEmitter<EventEmitter, {
  "bufferupdate": void;
  "cuechange": void;
  "pause": void;
  "play": void;
  "seek": number;
  "seeked": void;
  "seeking": void;
  "stop": void;
  "ratechange": void;
  "timeupdate": number;
  "volumechange": void;
}>;
```

### `paused`

Whether the playback is paused.

```typescript
paused: boolean;
```
### `playbackRate`

The rate at which the playback is being played.

```typescript
playbackRate: number;
```

### `seeking`

Whether the playback is in the process of seeking to a new position.

```typescript
seeking: boolean;
```

## Methods

### `pause()`

Pause playback.

```typescript
pause(): void;
```

### `play()`

Resume playback.

```typescript
play(): void;
```

### `seek()`

Seek playback to a specific time.

```typescript
seek(t: number | string): void;
```
