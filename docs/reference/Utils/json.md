Helpers for loading JSON data asynchronously.

```tsx
// access like this
import {Utils} from "liqvid";
const {loadAllJSON} = Utils.json;

// or like this
import {loadAllJSON} from "@liqvid/utils/json";
```

These can be inserted with the [`@json` macro](../../cli/macros.md#json).

## Usage {#usage}
```tsx
import {loadJSON, loadAllJSON, getJSON} from "@liqvid/utils/json";

/* let Typescript know what we're loading */
declare module "@liqvid/utils/json" {
  interface GetJSONMap {
    "recordings": {
      /* add types here */
    };
  }
}

/* Option 1: load all at once, then access synchronously */
loadAllJSON().then(() => {
  ReactDOM.render(<MyVideo/>, document.querySelector("main"));
});

function MyVideo() {
  const recordings = getJSON("recordings");
  // do stuff with recordings
}

/* Option 2: load asynchronously */
loadJSON("recordings").then(recordings => {
  // do stuff with recordings
});
```
## `GetJSONMap` {#GetJSONMap}
TypeScript interface for typing the JSON data you load. This is empty, you extend it in your code as in the example above.

## `getJSON()` {#getJSON}
Access a preloaded JSON record synchronously.

```typescript
getJSON<K extends keyof GetJSONMap>(key: K): GetJSONMap[K]
```

## `loadAllJSON()` {#loadAllJSON}
Preload all JSON resources.

```typescript
loadAllJSON(): Promise<void>
```

## `loadJSON()` {#loadJSON}
Load a JSON record asynchronously.

```typescript
loadJSON<K extends keyof GetJSONMap>(key: K): Promise<GetJSONMap[K]>
```
