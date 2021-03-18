---
id: hooks
title: Hooks API
---

These functions provide [Hooks](https://reactjs.org/docs/hooks-intro.html) for accessing the ambient Player and subscribing to certain events. They are exported from the root of the library.

```tsx
import {useMarkerUpdate, usePlayer, useTimeUpdate} from "ractive-player";
```

### `useMarkerUpdate()` {#useMarkerUpdate}

Subscribe to the [markerupdate](/docs/reference/Script#hub) event of Script. Callback receives the index of the _previous_ marker (the current index can be accessed via [`Script.markerIndex`](/docs/reference/Script#markerIndex)). The second argument is an [array of dependencies](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) used to avoid resubscriptions; you will usually want to pass `[]`.

```typescript
useMarkerUpdate(callback: (prevIndex: number) => void, deps?: React.DependencyList): void;
```

### `usePlayer()` {#usePlayer}

Access the ambient [Player](/docs/reference/Player).

```typescript
usePlayer(): Player;
```

### `useTimeUpdate()` {#useTimeUpdate}

Subscribe to the [timeupdate](/docs/reference/Playback#hub) event of Playback. Callback receives the current time in milliseconds. The second argument is an [array of dependencies](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) used to avoid resubscriptions; you will usually want to pass `[]`.

```typescript
useTimeUpdate(callback: (t: number) => void, deps?: React.DependencyList): void;
```
