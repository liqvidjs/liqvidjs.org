## Properties

```typescript
hub: StrictEventEmitter<EventEmitter, {
  "markerupdate": number;
}>;
```

```typescript
loadTasks: Promise<unknown>[];
```

```typescript
markerIndex: number;
```

Index of the active marker.

```typescript
markerName: string;
```

Name of the active marker.

```typescript
markers: [string, number, number][];
```

```typescript
playback: Playback;
```

The underlying [Playback](/docs/reference/Playback/) instance.

## Methods

```typescript
constructor(markers: Array<[string, string | number] | [string, string | number, string | number]>);
```

```typescript
back(): void;
```

Seek playback to the previous marker.

```typescript
forward(): void;
```

Advance playback to the next marker.

```typescript
markerByName(name: string): [string, number, number];
```

```typescript
markerNumberOf(name: string): number;
```

Returns the first index of a marker named `name`. Throws an error if no marker named `name` exists.

```typescript
parseEnd(end: number | string): number;
```

If `end` is a string, returns the ending time of the marker with that name. Otherwise, returns `end`.

```typescript
parseStart(start: number | string): number;
```

If `start` is a string, returns the starting time of the marker with that name. Otherwise, returns `start`.
