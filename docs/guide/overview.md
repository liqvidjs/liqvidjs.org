---
title: Overview
---

This is the text documentation. For a comprehensive personal tour through the library, check out the [ractives deep dive](https://www.youtube.com/watch?v=9O8h58ANY64).

## Code
The code is split into many modules and plugins.

* The main package is <a href="https://www.npmjs.com/package/ractive-player">ractive-player</a>

* You will also need the recording package <a href="https://www.npmjs.com/package/rp-recording">rp-recording</a>

* and [rp-thumb-capture](https://github.com/ysulyma/rp-thumb-capture) if you want thumbnails

* The best way to get started is to clone <a href="https://github.com/ysulyma/rp-tutorial">rp-tutorial</a>

* If you want to use this for mathematical/scientific content, you should also watch the [math tutorial](/math) and clone [rp-tutorial-math](https://github.com/ysulyma/rp-tutorial-math)

## Phases of development

In my experience, the process of creating a ractive can be divided into three phases. (This does not include the creative phase of deciding <em>what</em> you want to say, which is usually the hardest part.)

1. [Authoring](/docs/guide/authoring): This is when you write HTML/CSS/Javascript for your ractive.

1. [Recording](/docs/guide/recording): This is when you record audio and other interactions.

1. [Mastering](/docs/guide/mastering): This is for the finishing touches on a video, ensuring cross-platform compatibility, etc.

The above links provide practical advice on the issues that arise in each phase.

## Classes and Concepts

### Playback

This is the most important class. Effectively, a [Playback](/docs/reference/Playback) mimics an audio/video element that can be played and rewinded, has volume settings, a playback rate, etc. It thus imitates the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/">HTMLMediaElement</a> interface to a certain extent, although it does not fully implement that interface.

Times are generally represented as numbers representing milliseconds since the beginning of playback. They can also be specified as strings like <code class="language-typescript">"7:35"</code> or <code class="language-typescript">"7:35.66"</code>. Currently, there is no distinction between time points and time durations.

:::caution
The HTMLMediaElement interface usually represents times in _seconds_.
:::

### Script

A [Script](/docs/reference/Script) augments a Playback by breaking it into named segments, which we call <dfn>markers</dfn> (<em>cue</em> would also be appropriate, but that conflicts with WebVTT Cues).

A <dfn>marker</dfn> is a triple <code class="language-typescript">[name: string, start: number, end: number]</code>, where <code class="language-typescript">start</code> and <code class="language-typescript">end</code> are times in the sense of the previous section. However, when creating a <code class="language-typescript">Script</code> a marker may be specified as a pair <code class="language-typescript">[name: string, duration: number]</code>.

```ts
const markers = [
  ["intro/","0:19.081"],
  ["intro/name","0:07.332"],
  ["intro/day", "0:09.351"],
  ["animals/","0:03.737"],
  ["animals/cat","0:00.931"],
  ["animals/elephant","0:02.371"],
  ["animals/dog","0:03.206"],
  ["end/","0:08.897"],
  ["end/qs","0:01.500"]
] as [string, string][];

const script = new Script(markers);
```

When defining markers in the [Authoring](/docs/guide/authoring) phase, you can put anything for the duration, e.g. `["intro/", "1:00"]`. The durations will get filled in during the [Recording](/docs/guide/recording) phase.

### Player

A [Player](/docs/reference/Player) provides a GUI interface for playing ractives, resembling a traditional web video player.

#### Showing/Hiding

If an element has the <code class="language-html">data-from-first="first"</code> attribute, it will be visible only when the current marker is equal to or comes after the marker whose name is <code>"first"</code>. If an element further has the <code class="language-html">data-from-last="last"</code> attribute, it will be visible only when the current marker comes strictly before the marker whose name is <code>"last"</code>. If an element has the <code class="language-html">data-during="prefix"</code> attribute, it will be visible only when the current marker's name begins with <code class="language-typescript">"prefix"</code>.

There are helper functions for this in [Utils.authoring](/docs/reference/Utils#utilsauthoring). Since you will be using these a lot, you might want to define a shortcut for them in your text editor.

```tsx
import {Utils} from "ractive-player";
const {during, from} = Utils.authoring;

function IntroSlide() {
  return (
    <section {...during("intro/")}>
      <h1 {...from("intro/", "intro/day")}>
        Hello <span {...from("intro/name")}>Bob!</span>
      </h1>
      <p {...from("intro/day")}>Have a great day!</p>
    </section>
  );
}
```

Internally, elements are hidden by setting <code class="language-css">opacity:0; pointer-events: none;</code>, and shown by removing these attributes. This operates outside of React rendering. The reason for using these styles instead of

* <code class="language-css">visibility: hidden;</code> is that an invisible element can have visible children with the latter approach, whereas our approach allows us to hide an element without recursing into its children.

* <code class="language-css">display:none;</code> is that the latter causes reflow, which is slow. Another practical difference is that that elements hidden using our method will occupy whitespace (which may or may not be desired).

<!-- <p class="todo">insert warning about starting -->

It may seem strange to render everything at the beginning and then selectively show/hide it, rather than rendering selectively based on the current time. My own use case for this library uses a lot of MathJax, which takes a few seconds to render, so selective rendering would disrupt the viewing experience. If you don't have any content with long repaints, selective rendering will probably work fine.

It is important that <code class="language-typescript">Playback</code> and <code class="language-typescript">Script</code> do not depend on React, and could be used without <code class="language-typescript">Player</code>. Eventually we will be more agnostic about templating systems, so that e.g. Vue or Custom Elements could be used instead of (or in conjunction with) React.

### ReplayData

This is a common pattern in RP elements replaying something recorded by the author (cursor movements, typing, etc.). It is not part of the JavaScript code, but is exported from the TypeScript.

<!-- <pre><code class="language-typescript"> -->
```typescript
type ReplayData<K> = [number, K][];
```

The numbers represent durations in milliseconds. Thus, a piece of <code class="language-typescript">ReplayData</code> is usually paired with a <code class="language-typescript">start</code> attribute for replaying, but <code class="language-typescript">ReplayData</code> itself does not involve absolute times, so it can be moved around easily.
