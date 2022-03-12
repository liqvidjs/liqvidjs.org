A `Script` augments a [`Playback`](./Playback.md) by breaking it into named segments, called <dfn>markers</dfn>. 

```typescript
import {Player, Script} from "liqvid";

const script = new Script([
  ["slide-1", "1:00"],
  ["slide-2", "1:00"]
]);

<Player script={script}>{/* ... */}</Player>
```

## Properties {#properties}

<!-- 
### `loadTasks` {#loadTasks}

```typescript
loadTasks: Promise<unknown>[];
``` -->

### `markerIndex` {#markerIndex}

Index of the active marker.

```typescript
markerIndex: number;
```

### `markerName` {#markerName}

Name of the active marker.

```typescript
markerName: string;
```

### `markers` {#markers}

The array of markers, in the form `[name, startTime, endTime]`.

```typescript
markers: [string, number, number][];
```

### `playback` {#playback}

The underlying [`Playback`](./Playback.md) instance.

```typescript
playback: Playback;
```

## Methods {#methods}

### `constructor()` {#constructor}
```typescript
constructor(markers: Array<[string, string | number] | [string, string | number, string | number]>): Script;
```

### `back()` {#back}

Seek playback to the previous marker.

```typescript
back(): void;
```

### `forward()` {#forward}

Advance playback to the next marker.

```typescript
forward(): void;
```

### `markerByName()` {#markerByName}

Get a marker by its name.

```typescript
markerByName(name: string): [string, number, number];
```

### `markerNumberOf()` {#markerNumberOf}

Returns the first index of a marker named `name`. Throws an error if no marker named `name` exists.

```typescript
markerNumberOf(name: string): number;
```

### `parseEnd()` {#parseEnd}

If `end` is a string, returns the ending time of the marker with that name. Otherwise, returns `end`.

```typescript
parseEnd(end: number | string): number;
```

### `parseStart()` {#parseStart}

If `start` is a string, returns the starting time of the marker with that name. Otherwise, returns `start`.

```typescript
parseStart(start: number | string): number;
```

## Events {#events}

This class extends [`EventEmitter`](https://nodejs.org/dist/v11.13.0/docs/api/events.html#events_class_eventemitter). It emits the following events:

### `markerupdate` {#markerupdate}

Fired when the active marker changes. Callback receives the index of the *previously* active marker.
