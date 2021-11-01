This class handles keyboard shortcuts.

The KeyMap is attached to the [Player](/docs/reference/Player#keymap) and can be accessed like so:

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
// freeze-next-line
import {Player, Script, usePlayer} from "liqvid";

function Searchable() {
  const {keymap} = usePlayer();
  const [visible, setVisible] = React.useState(false);

  // create Alt-F shortcut for search
  React.useEffect(() => {
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

  return (
    <aside className="help" style={{display: visible ? "block" : "none"}}>
      Put useful information here
    </aside>
  );
}


function MyVideo() {
  return (
    <Player script={script}>
      <div id="instructions">
        Press H or ? to open help dialog.
      </div>
      <Searchable/>
    </Player>
  );
}

// freeze-start
const markers = [
  ["video/", "0:10"]
];
const script = new Script(markers);

ReactDOM.render(<MyVideo/>, document.querySelector("main"));
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
import {KeyMap} from "liqvid";

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
