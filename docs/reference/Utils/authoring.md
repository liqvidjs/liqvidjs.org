Shortcuts for showing/hiding content.

```tsx
import {Utils} from "liqvid";
const {during, from} = Utils.authoring;
```

## `during()` {#during}

Returns a CSS block to show the element only when marker name begins with `prefix`.

```typescript
during: (prefix: string) => {"data-during": string;};
```

## `from()` {#from}

Returns a CSS block to show the element when marker is in [first, last).

```typescript
from: (first: string, last?: string) => {"data-from-first": string; "data-from-last"?: string;};
```

## `showIf()` {#showif}

```typescript
showIf(cond: boolean): {style?: React.CSSProperties;};
```
