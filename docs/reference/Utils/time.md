Utilities for manipulating time strings, e.g. `1:44.23`.

```tsx
// access like this
import {Utils} from "liqvid";
const {formatTimeMs, parseTime} = Utils.time;

// or like this
import {formatTimeMs, parseTime} from "@liqvid/utils/time";
```

## `formatTime()` {#formatTime}

Format a time (given in milliseconds) as `hh:mm:ss`.

```typescript
formatTime(time: number): string;
```

## `formatTimeMs()` {#formatTimeMs}

Format a time (given in milliseconds) as `hh:mm:ss.ms`.

```typescript
formatTimeMs(time: number): string;    
```

## `parseTime()` {#parseTime}

Parses a time in `hh:mm:ss.ms` format to milliseconds. Hours, minutes, and milliseconds can be omitted if 0.

```typescript
parseTime(str: string): number;
```

## `timeRegexp` {#timeRegexp}

The regular expression used internally by `parseTime()`. Equal to `/^(?:(?:(\d+):)?(\d+):)?(\d+)(?:\.(\d+))?$/`.

```typescript
timeRegexp: RegExp;
```
