This class is the core of the library. It is an animation loop+event emitter which imitates an [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) being played (although it does not fully implement that interface).

You will typically not instantiate this class directly. The Playback is attached to the [Player](/docs/reference/Player#playback) and can be accessed like so:

```tsx
import {usePlayer} from "ractive-player";

function Button() {
  const {playback} = usePlayer();

  return <button onClick={() => playback.pause()}>Pause</button>;
}
```

## Properties {#properties}

### `audioContext` {#audioContext}
```typescript
audioContext: AudioContext;
```
### `audioNode` {#audioNode}
```typescript
audioNode: GainNode;
```

### `currentTime` {#currentTime}
The current playback time in milliseconds.

**Warning:** the [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface measures this property in seconds.

```typescript
currentTime: number;
```

### `duration` {#duration}


The length of the playback in milliseconds.

**Warning:** the [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface measures this property in seconds.

```typescript
duration: number;
```

### `hub` {#hub}

An [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) that your code can subscribe to. Emits the following events:

| Name           | Description |
| -------------- | ----------- |
| bufferupdate | Fired when a [progress](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/progress_event) event on an Audio or Video element occurs. |
| cuechange | Used for captions. |
| pause | Fired when playback is paused. |
| play | Fired when playback begins or resumes playing. |
| seek | Fired when playback is seeked (sought?). |
| seeked | Fired when a seeking operation has completed. |
| seeking | Fired when a seeking operation starts. |
| stop | Fired when playback has stopped because the end of the ractive was reached. |
| ratechange | Fired when playback rate is changed. |
| timeupdate | Fired when the time indicated by the [`currentTime`](#currenttime) property has been updated. |
| volumechange | Fired when the volume has changed. |

On the various seek events: If the user uses the scrubber bar to seek the video to a new position, the `seeking` event will be fired when they start moving the scrubber, and the `seek` and `seeked` events will be fired once they release it. If the [`seek()`](#seek) method is called, only the `seek` event will be fired.

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

### `paused` {#paused}

Whether the playback is paused.

```typescript
paused: boolean;
```
### `playbackRate` {#playbackRate}

The rate at which the playback is being played.

```typescript
playbackRate: number;
```

### `seeking` {#seeking}

Whether the playback is in the process of seeking to a new position.

```typescript
seeking: boolean;
```

## Methods {#methods}

### `pause()` {#pause}

Pause playback.

```typescript
pause(): void;
```

### `play()` {#play}

Resume playback.

```typescript
play(): void;
```

### `seek()` {#seek}

Seek playback to a specific time.

```typescript
seek(t: number | string): void;
```
