---
id: hooks
title: Hooks API
---

These functions provide [Hooks](https://reactjs.org/docs/hooks-intro.html) for accessing the ambient Player and subscribing to certain events. They are exported from the root of the library.

```tsx
import {usePlayer, useTime} from "liqvid";
```

### `useKeymap()` {#useKeymap}

Access the ambient [`Keymap`](./Keymap.md).

```typescript
useKeymap(): Keymap;
```

### `useMarkerUpdate()` {#useMarkerUpdate}

Subscribe to the [`markerupdate`](./Script.md#markerupdate) event of Script. Callback receives the index of the _previous_ marker (the current index can be accessed via [`Script.markerIndex`](/docs/reference/Script#markerIndex)). The second argument is an [array of dependencies](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) used to avoid resubscriptions; you will usually want to pass `[]`.

```typescript
useMarkerUpdate(callback: (prevIndex: number) => void, deps?: React.DependencyList): void;
```

### `usePlayback()` {#usePlayback}

Access the ambient [`Playback`](./Playback.md).

```typescript
usePlayback(): Playback;
```

### `usePlayer()` {#usePlayer}

Access the ambient [`Player`](./Player.md).

```typescript
usePlayer(): Player;
```

### `useScript()` {#useScript}

Access the ambient [`Script`](./Script.md).

```typescript
useScript(): Script;
```

### `useTime()` {#useTime}

Subscribe to the [`seek`](./Playback.md#seek) and [`timeupdate`](./Playback.md#timeupdate) event of Playback. Callback receives the current time in milliseconds. The second argument is an [array of dependencies](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) used to avoid resubscriptions; you will usually want to pass `[]`.

```typescript
useTime(callback: (value: number) => void, deps?: React.DependencyList): void;
useTime<T = number>(callback: (value: T) => void, transform?: (t: number) => T, deps?: React.DependencyList): void;
```

### `useTimeUpdate()` {#useTimeUpdate}

Subscribe to the [`seek`](./Playback.md#seek) and [`timeupdate`](./Playback.md#timeupdate) event of Playback. Callback receives the current time in milliseconds. The second argument is an [array of dependencies](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) used to avoid resubscriptions; you will usually want to pass `[]`.

```typescript
useTimeUpdate(callback: (t: number) => void, deps?: React.DependencyList): void;
```
