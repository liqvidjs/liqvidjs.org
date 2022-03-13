---
title: Overview
---

## Hello World

Let's start with a very simple example.

```tsx liqvid
// @css
section {
  position: absolute;
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 6rem;
  margin-top: 20%;
  text-align: center;
}

h2 {
  font-size: 4rem;
  margin-top: 10%;
  text-align: center;
}

ol {
  font-size: 3em;
  margin: 1em auto;
  width: max-content;
}
li {
  margin: 1em 0;
}
// @/css
// freeze-next-line
import {Player, Script} from "liqvid";

const markers = [
  ["intro/", "0:01.5"],
  ["intro/world", "0:01.5"],
  ["plan/", "0:01"],
  ["plan/1", "0:01"],
  ["plan/2", "0:01"],
  ["plan/3", "0:01"]
];

// freeze-next-line
const script = new Script(markers);

function MyVideo() {
  return (
    <Player script={script}>
      <Intro/>
      <Plan/>
    </Player>
  );
}

function Intro() {
  return (
    <section data-during="intro/">
      <h1>Hello <span data-from-first="intro/world">World!</span></h1>
    </section>
  );
}

function Plan() {
  return (
    <section data-during="plan/">
      <h2>The Plan</h2>
      <ol>
        <li data-from-first="plan/1">Make interactive videos</li>
        <li data-from-first="plan/2">???</li>
        <li data-from-first="plan/3">Profit!</li>
      </ol>
    </section>
  );
}

// freeze-next-line
ReactDOM.render(<MyVideo/>, document.querySelector("main"));
```

Let's break down what's going on here.

### Classes

The fundamental classes in Liqvid are [`Playback`](../reference/Playback.md), [`Script`](../reference/Script.md), and [`Player`](../reference/Player.md). `Playback` handles the logic of playing/rewinding, volume settings, playback rate, etc.; it imitates the [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface to a certain extent. A `Script` augments a `Playback` by breaking it into named segments, which we call <dfn>markers</dfn>. Finally, `Player` provides the graphical interface for playing videos.

The entry point for our video is `<Player>`; all our content goes in there. To initialize the `Player`, we need to create a `Script` with our marker names/durations, then passed that to `<Player>`. The `Playback` is created automatically by the `Script`, e.g. try adding `console.log(script.playback)` to the above example.

:::info
`Playback` and `Script` do not depend on React, and can be used without `Player`. In a future release we will be agnostic about templating systems, so that e.g. Vue or Custom Elements could be used instead of (or in conjunction with) React.
:::

### Markers

Markers designate "when things happen". Above, we used them to control when things are displayed (more on that below). You will also use them to time more sophisticated effects. To get the start and end times of a marker, use `script.parseStart("plan/")` and `script.parseEnd("plan/")`.

You can flip between markers using the <kbd>E</kbd> and <kbd>W</kbd> keys. Try this out in the video above! You will use this a lot when developing your video, as well as when recording.

Internally, markers are stored as `[name: string, start: number, end: number]`; however, when creating them, you specify them as `[name: string, duration: number | string]`. This allows you to reorder effects simply by reordering the markers. Typically you will [record](./recording.md) yourself flipping through the video and the durations will get filled in automatically. In this case you can put anything for the duration initially, e.g. `"1:00"` for all of them.

### Showing/Hiding {#showinghiding}

If an element has the `data-from-first="first"` attribute, it will be visible only when the current marker is equal to or comes after the marker whose name is `"first"`. If an element further has the `data-from-last="last"` attribute, it will be visible only when the current marker comes strictly before the marker whose name is `"last"`.

If an element has the `data-during="prefix"` attribute, it will be visible only when the current marker's name begins with `"prefix"`. This is why we named our markers `intro/*` and `plan/*`; the `/` character has no special meaning, this is just a helpful pattern for separating content into different sections.

There are helper functions for this in [`Utils.authoring`](../reference/Utils/authoring.md). For example, the above code could be rewritten as

```tsx
import {Utils} from "liqvid";
const {during, from} = Utils.authoring;

<section {...during("intro/")}>
  <h1>Hello <span {...from("intro/world")}>World!</span></h1>
</section>
```
Since you will be using these a lot, you might want to define a shortcut for them in your text editor.

:::info

Internally, elements are hidden by setting `opacity:0; pointer-events: none`, and shown by removing these styles. This operates outside of React rendering. The reason for using these styles instead of

* `visibility: hidden;` is that an invisible element can have visible children with the latter approach, whereas our approach allows us to hide an element without recursing into its children.

* `display:none;` is that the latter causes reflow, which is slow. Another practical difference is that that elements hidden using our method will occupy whitespace (which may or may not be desired).

* removing the element entirely is to avoid layout flash for the viewer. (The original use case for this library involved a lot of MathJax, which is slow to render.)

:::

### Styling

You will typically want all top-level children of the video to have `position: absolute`, as we did with `<section>` above, so as not to interfere with each other's positioning.

:::tip

**Always use relative units** (`%`, `em`, `rem`) so that your video scales correctly on different devices and when resized/fullscreened. Liqvid automatically scales the root font size (what `rem` refers to) with the viewport size.

:::