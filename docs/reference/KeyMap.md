This class handles keyboard shortcuts.

The KeyMap is attached to the [Player](/docs/reference/Player#keymap) and can be accessed like so:

```tsx
import {usePlayer} from "ractive-player";

function Searchable() {
  const {keymap} = usePlayer();

  // create Alt-F shortcut for search
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      /* do something */
    };

    keymap.bind("Alt+F", handler);
    return () => {
      keymap.unbind("Alt+F", handler);
    };
  }, []);
}
```

Although you can create other KeyMap instances, you'll most likely only use the one attached to the player.

## Static methods {#static-methods}

### `normalize()` {#normalize}

Returns a canonical form of the shortcut sequence.

```typescript
static normalize(seq: string): string;
```

#### Example {#example}

```tsx
import {KeyMap} from "ractive-player";

// returns "Ctrl+Alt+2"
KeyMap.normalize("Alt+Ctrl+2");
```

### `identify()` {#identify}

Given a KeyboardEvent (or React wrapper thereof), returns a shortcut sequence matching that event.

```typescript
static identify(e: KeyboardEvent | React.KeyboardEvent<unknown>): string;
```
  
## Methods {#methods}

### `bind()` {#bind}

Bind a handler to be called when the shortcut sequence is pressed.

```typescript
bind(seq: string, cb: (e: KeyboardEvent) => void): void;
```

### `unbind()` {#unbind}

Unbind a handler from a shortcut sequence.

```typescript
unbind(seq: string, cb: (e: KeyboardEvent) => void): void;
```

### `getKeys()` {#getkeys}

Return all shortcut sequences with handlers bound to them.

```typescript
getKeys(): string[];
```

### `getHandlers()` {#gethandlers}

Get the list of handlers for a given shortcut sequence.

```typescript
getHandlers(seq: string): ((e: KeyboardEvent) => void)[];
```

### `handle()` {#handle}

Dispatches all handlers matching the given event.

```typescript
handle(e: KeyboardEvent): void;
```
