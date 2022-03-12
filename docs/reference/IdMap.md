This class gives a way to automagically attach data loaded from a file as attributes on elements. This is provided to facilitate the development of—and provide a standard interface for—GUI tools.

## Example

```tsx liqvid
import * as ReactDOM from "react-dom";
import {IdMap, Player, Script} from "liqvid";

/* The point is that objects.ts can be written to by a third-party tool */
// import {objects} from "./objects";
const objects = {
  "intro-slide": {
    "data-during": "intro/"
  },
  "hello": {
    "data-from-first": "intro/hello",
    "data-from-last": "intro/world"
  },
  "world": {
    "data-from-first": "intro/world",
    "style": {
      "color": "blue",
      "fontFamily": "Comic Sans MS"
    }
  },
  "next-slide": {
    "data-during": "next/"
  }
};

const script = new Script([
  ["intro/hello", "0:02"],
  ["intro/world", "0:02"],
  ["next/", "0:02"]
]);

function Intro() {
  return (
    <Player script={script}>
      <IdMap map={objects}>
        <section id="intro-slide">
          <Welcome/>
        </section>
        <section id="next-slide">Something else here</section>
      </IdMap>
    </Player>
  );
}

function Welcome() {
  // we still need to wrap in IdMap, but don't have to pass map again
  return (
    <IdMap>
      <h1 id="hello">Hello</h1>
      <h2 id="world">World!</h2>
    </IdMap>
  );
}

ReactDOM.render(<Intro/>, document.querySelector("main"));
```
