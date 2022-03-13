This class is the core of the library. It is an animation loop+event emitter which imitates an [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) being played (although it does not fully implement that interface). This class is also available as a standalone package `@liqvid/playback`.

There are two ways to create a `Playback`: you can instantiate it directly, or one is created automatically by a [`Script`](./Script.md). You can then pass either one of these to [`<Player>`](./Player.md):

```tsx
import {Playback, Script, Player} from "liqvid";

// Option 1: Playback only
const playback = new Playback({duration: 10000});

<Player playback={playback}>{/* ... */}</Player>

// Option 2: use a Script
const script = new Script([
  ["slide1", "0:05"],
  ["slide2", "0:05"]
]);
const {playback} = script;

<Player script={script}>{/* ... */}</Player>
```

We recommend making the `Playback` accessible to your code outside of components. However, it can be accessed via hooks like so:
```tsx
import {usePlayer} from "liqvid";

function Component() {
  const {playback} = usePlayer();

  // do stuff with playback
}
```

## Properties {#properties}

<!-- ### `audioContext` {#audioContext}
```typescript
audioContext: AudioContext;
```
### `audioNode` {#audioNode}
```typescript
audioNode: GainNode;
``` -->

### `currentTime` {#currentTime}
The current playback time in milliseconds.

**Warning:** the [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface measures this property in *seconds*.

```typescript
currentTime: number;
```

### `duration` {#duration}


The length of the playback in milliseconds.

**Warning:** the [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface measures this property in *seconds*.

```typescript
duration: number;
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

### `timeline` {#timeline}

[`DocumentTimeline`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentTimeline/DocumentTimeline) synced up to this playback.

```typescript
timeline: DocumentTimeline;
```

## Methods {#methods}

### `constructor()` {#constructor}

The `Playback()` constructor creates a new `Playback` object. Takes one parameter, which is an object with the following keys:

* `duration: number`  
Duration of the playback in milliseconds

```typescript
constructor(options: {
  duration: number;
}): Playback;
```

### `newAnimation()` {#newAnimation}

Create an [`Animation`](https://developer.mozilla.org/en-US/docs/Web/API/Animation) (factory) synced to this playback.

#### Parameters

* `keyframes: Keyframe[] | PropertyIndexedKeyframes`  
A [keyframes object](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) or `null`

* `options?: number | KeyframeEffectOptions`  
Either an integer representing the animation's duration (in milliseconds), or [`KeyframeEffect options`](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options)

#### Return value
Returns a callback to attach the animation to a target

```typescript
newAnimation<T extends Element>(
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options?: number | KeyframeEffectOptions
): (target: T) => Animation;
```

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

## Events {#events}

This class extends [`EventEmitter`](https://nodejs.org/dist/v11.13.0/docs/api/events.html#events_class_eventemitter). It emits the following events:

<!-- ### `bufferupdate` {#bufferupdate}

### `cuechange` {#cuechange}
Used for captions. -->

### `pause` {#pause}
Fired when playback is paused.

### `play` {#play}
Fired when playback begins or resumes playing.

### `seek` {#seek}
Fired when playback is seeked (sought?). Listeners receive the [`currentTime`](#currentTime) as an argument.

### `seeked` {#seeked}
Fired when a seeking operation has completed.

### `seeking` {#seeking}
Fired when a seeking operation starts.

### `stop` {#stop}
Fired when playback has stopped because the end of the ractive was reached.

### `ratechange` {#ratechange}
Fired when playback rate is changed.

### `timeupdate` {#timeupdate}
Fired when the time has been updated. Listeners receive the [`currentTime`](#currentTime) as an argument.

### `volumechange` {#volumechange}
Fired when the volume has changed.
