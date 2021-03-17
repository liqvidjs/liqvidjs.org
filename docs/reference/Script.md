## Properties

### `hub`

```typescript
hub: StrictEventEmitter<EventEmitter, {
  "markerupdate": number;
}>;
```

### `loadTasks`

```typescript
loadTasks: Promise<unknown>[];
```

### `markerIndex`

Index of the active marker.

```typescript
markerIndex: number;
```

### `markerName`

Name of the active marker.

```typescript
markerName: string;
```

### `markers`

```typescript
markers: [string, number, number][];
```

### `playback`

The underlying [Playback](/docs/reference/Playback/) instance.

```typescript
playback: Playback;
```

## Methods

### `constructor()`
```typescript
constructor(markers: Array<[string, string | number] | [string, string | number, string | number]>);
```

### `back()`

Seek playback to the previous marker.

```typescript
back(): void;
```

### `forward()`

Advance playback to the next marker.

```typescript
forward(): void;
```

### `markerByName()`
```typescript
markerByName(name: string): [string, number, number];
```

### `markerNumberOf()`

Returns the first index of a marker named `name`. Throws an error if no marker named `name` exists.

```typescript
markerNumberOf(name: string): number;
```

### `parseEnd()`

If `end` is a string, returns the ending time of the marker with that name. Otherwise, returns `end`.

```typescript
parseEnd(end: number | string): number;
```

### `parseStart()`

If `start` is a string, returns the starting time of the marker with that name. Otherwise, returns `start`.

```typescript
parseStart(start: number | string): number;
```