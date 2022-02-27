Helpers for dealing with recordings..

```tsx
// access like this
import {Utils} from "liqvid";
const {concat} = Utils.replayData;

// or like this
import {concat} from "@liqvid/utils/replay-data";
```

## `concat()` {#concat}

Concatenate several ReplayData together, with delays.

```typescript
concat<T>(...args: [ReplayData<T>, number][]): ReplayData<T>;
```

## `length()` {#length}

Get the total duration of replay data.

```typescript
  length<T>(data: ReplayData<T>): number;
```
