## Properties

```typescript
audioContext: AudioContext;
```

```typescript
audioNode: GainNode;
```

```typescript
currentTime: number;
```

The current playback time in milliseconds.

**Warning:** the [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface measures this property in seconds.

```typescript
duration: number;
```

The length of the playback in milliseconds.

**Warning:** the [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface measures this property in seconds.

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

```typescript
paused: boolean;
```

Whether the playback is paused.

```typescript
playbackRate: number;
```

The rate at which the playback is being played.

```typescript
seeking: boolean;
```

Whether the playback is in the process of seeking to a new position.

## Methods

```typescript
pause(): void;
```

Pause playback.

```typescript
play(): void;
```

Resume playback.

```typescript
seek(t: number | string): void;
```

Seek playback to a specific time.
