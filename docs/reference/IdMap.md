This class gives a way to automagically attach data loaded from a file as attributes on elements. This is provided to facilitate the development of—and provide a standard interface for—GUI tools.

For example, the following code
```tsx
// objects.ts
export default {
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
  }
};

// Intro.tsx
import {IdMap} from "ractive-player";
import objects from "./objects";

function Intro() {
  return (
    <IdMap map={objects}>
      <section id="intro-slide">
        <Welcome/>
      </section>
    </IdMap>
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
```
will behave as if you had written
```tsx
// Intro.tsx
import {Utils} from "ractive-player";
const {during, from} = Utils.authoring;

function Intro() {
  return (
    <section id="intro-slide" {...during("intro/")}>
      <Welcome/>
    </section>
  );
}

function Welcome() {
  return (<>
    <h1 id="hello" {...from("intro/hello", "intro/world")}>Hello</h1>
    <h2 id="world" {...from("intro/world")} style={{color: "blue", fontFamily: "Comic Sans MS"}}>World!</h2>
  </>);
}
```
The point is that `objects.ts` can be written to by a third-party tool.