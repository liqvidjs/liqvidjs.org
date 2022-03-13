This class handles keyboard shortcuts.  It is also available as a standalone package `@liqvid/keymap`.

The `Keymap` is attached to the [Player](./Player.md#keymap) and can be accessed like so:

```tsx liqvid
// @css
#instructions {
  color: purple;
  font-size: 2rem;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 45%;
}

aside.help {
  background: #FFF;
  border: .5em solid #0002;
  border-radius: .5em;
  box-shadow: 0 0 .2em #0002;
  font-size: 2rem;
  padding: 1em;
  position: absolute;
  z-index: 2;
  width: 50%;
  left: 25%;
  top: 15%;
}

aside.help > header {
  background-image: linear-gradient(#00AAFF, #0088FF);
  color: #FFF;
  font-size: 1.5em;
  padding: .5em;
}
// @/css
// freeze-start
import {Playback, Player, usePlayer} from "liqvid";
import {useEffect, useMemo, useState} from "react";
// freeze-end

function Searchable() {
  const {keymap} = usePlayer();
  const [visible, setVisible] = useState(false);

  // create Alt-F shortcut for search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setVisible(prev => !prev);
    };

    keymap.bind("Shift+?", handler);
    keymap.bind("H", handler);
    return () => {
      keymap.unbind("Shift+?", handler);
      keymap.unbind("H", handler);
    };
  }, []);

  const style = useMemo(() => ({
    display: visible ? "block" : "none"
  }), [visible]);

  return (
    <aside className="help" style={style}>
      Put useful information here
    </aside>
  );
}


function MyVideo() {
  return (
    <Player playback={playback}>
      <div id="instructions">
        Press H or ? to open help dialog.
      </div>
      <Searchable/>
    </Player>
  );
}

// freeze-start
const playback = new Playback({duration: 10000});

ReactDOM.render(<MyVideo/>, document.querySelector("main"));
```

Although you can create other `Keymap` instances, you'll most likely only use the one attached to the player.

## Static methods {#static-methods}

### `normalize()` {#normalize}

Returns a canonical form of the shortcut sequence.

```typescript
static normalize(seq: string): string;
```

#### Example {#example}

```tsx
import {Keymap} from "liqvid";

// returns "Ctrl+Alt+2"
Keymap.normalize("Alt+Ctrl+2");
```

### `identify()` {#identify}

Given a [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) (or React wrapper thereof), returns a shortcut sequence matching that event.

```typescript
static identify(e: KeyboardEvent | React.KeyboardEvent<unknown>): string;
```
  
## Methods {#methods}

### `bind()` {#bind}

Bind a handler to be called when the shortcut sequence is pressed.

```typescript
bind(seq: string, cb: (e: KeyboardEvent) => void): void;
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

### `unbind()` {#unbind}

Unbind a handler from a shortcut sequence.

```typescript
unbind(seq: string, cb: (e: KeyboardEvent) => void): void;
```
