---
title: "[Synthetic]MediaElement proposal"
author: Yuri Sulyma
author_title: math, code, complaining
author_url: https://github.com/ysulyma
author_image_url: https://avatars.githubusercontent.com/u/453486?v=4
description: A proposal for general-purpose imperative animation, after HTMLMediaElement.
image: https://d2og9lpzrymesl.cloudfront.net/blog/cm-social.png
---

:::info tl;dr
`MediaElement` is a proposed interface for *general-purpose imperative animation*, patterned after [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement). `SyntheticMediaElement` is an implementation of this interface, aimed at library authors. **If you've ever implemented a scrubber bar, this is for you!**
:::

In this post I'm going to explain my recent [WICG proposal](https://github.com/whatwg/html/issues/8129) for `[Synthetic]MediaElement`, and go into more detail about some of the use cases. In short, `MediaElement` is a sub-interface of [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)—something which can be played/paused, has a `currentTime`, etc.—and `SyntheticMediaElement` is an implementation of `MediaElement`, not necessarily tied to the DOM.

<!-- truncate -->

## Motivation

Although this proposal is relevant to animation in general, the motivation comes from the specific context of *interactive video*. This refers to "videos" created by syncing DOM manipulation to a scrubber bar and (optionally) an audio track. I'll focus on the following three libraries:

- [Liqvid](https://liqvidjs.org) is a library for making interactive videos in React. (Disclaimer: I am the developer of Liqvid.) Its focus is on educational content, although it is a general-purpose framework. Examples of Liqvid videos can be seen at [Epiplexis](https://epiplexis.xyz/) and [MATH 180](https://www.math.brown.edu/ysulyma/f21-math180/).

- [Remotion](https://www.remotion.dev) is another library for making videos in React. Their focus is on rendering actual mp4 videos, but they support interactive playback via [@remotion/player](https://www.remotion.dev/docs/player).

- [GSAP](https://greensock.com/gsap/) is a popular JavaScript animation framework. Although it is not specifically intended for interactive videos, the [Prime group at TU Delft](https://prime-applets.ewi.tudelft.nl/portfolio/calculus) has used it for such.

Here are some other notable users of interactive video:

- [Scrimba](https://scrimba.com/) is the first (as far as I know) to teach coding with interactive screencasts.

- [Visualizing quaternions](https://eater.net/quaternions) is an interactive video mini-series on quaternions produced by 3Blue1Brown and Ben Eater.

- [asciinema](https://asciinema.org/) uses interactive video for replaying terminal sessions.

- [Grape](https://www.grape.codes/) is another site teaching coding with interactive video.

The proposal defines a new class, `SyntheticMediaElement`, which acts as the source of truth about "what time it is". This standardizes the behavior that is common between Liqvid's [`Playback`](https://liqvidjs.org/docs/reference/Playback/), Remotion's [`PlayerRef`](https://www.remotion.dev/docs/player/api#playerref), and GSAP's [`Timeline`](https://greensock.com/docs/v3/GSAP/Timeline). It implements a subset of the existing [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) interface, for two reasons:

1. this is a context where the interactions between seeking, rewinding, network state, etc. have already been thoroughly considered.

2. it allows us to write animations that are agnostic about whether they're being synced with an actual `<audio>`/`<video>` element or a `SyntheticMediaElement`.

The sub-interface being implemented is called `MediaElement`. Animations are synced to a `MediaElement` by subscribing to the `timeupdate` event and reading the `.currentTime` property. Crucially, `SyntheticMediaElement` *is not DOM-aware at all*. For example, one could use it in Node to create ASCII videos in the terminal. ([But should one?](https://www.youtube.com/watch?v=aaGPV7TE75U)) However, see the[`<media-chrome>`](https://github.com/muxinc/media-chrome) project for related work on Web Components for custom video players.

### Do I need `SyntheticMediaElement`?
I expect the `MediaElement` interface to have much wider use than the `SyntheticMediaElement` class, which is more of interest to library authors.

- if you find yourself implementing a scrubber bar, you **may** be interested in `SyntheticMediaElement`.

- if the source of truth for your scrubber bar is a *single*, *actual* `<audio>` / `<video>` element, then **you do not need** `SyntheticMediaElement`.

- if your scrubber bar is not tied to an `<audio>`/`<video>` element (e.g. a scrubbable THREE.js scene), *or* if you want to sync multiple `<audio>`/`<video>` elements in a complicated way, then **you can use a `SyntheticMediaElement` as your source of truth.**

### CSS / Web Animations
**Q:** Why not use [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations) or the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)?

**A:** CSS animations can't have their progress set imperatively.

**A:** The Web Animations API can only be used for animating CSS properties. It can't be used for orchestrating THREE.js scenes or Canvas drawing.

However, Web Animations API can be used in conjunction with `MediaElement`: see the [`syncTimeline()`](#synctimeline) pattern below.

## Specification

The proposal defines one new abstract interface, `MediaElement`, and one new class, `SyntheticMediaElement`. The desiderata are that both `SyntheticMediaElement` and the existing [`HTMLMediaElement`](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement) must implement `MediaElement`.

Specifically, `MediaElement` consists of the following methods and properties of [`HTMLMediaElement`](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement):

* [`currentTime`](https://html.spec.whatwg.org/multipage/media.html#dom-media-currenttime)
* [`duration`](https://html.spec.whatwg.org/multipage/media.html#dom-media-duration)
* [`muted`](https://html.spec.whatwg.org/multipage/media.html#dom-media-muted)
* [`pause()`](https://html.spec.whatwg.org/multipage/media.html#dom-media-pause)
* [`paused`](https://html.spec.whatwg.org/multipage/media.html#dom-media-paused)
* [`play()`](https://html.spec.whatwg.org/multipage/media.html#dom-media-play)
* [`playbackRate`](https://html.spec.whatwg.org/multipage/media.html#dom-media-playbackrate)
* [`seeking`](https://html.spec.whatwg.org/multipage/media.html#dom-media-seeking)
* [`volume`](https://html.spec.whatwg.org/multipage/media.html#dom-media-volume)

`MediaElement` also extends the [`EventTarget`](https://dom.spec.whatwg.org/#interface-eventtarget) interface, and supports the following events:

* [`durationchange`](https://html.spec.whatwg.org/multipage/media.html#event-media-durationchange)
* [`ended`](https://html.spec.whatwg.org/multipage/media.html#event-media-ended)
* [`pause`](https://html.spec.whatwg.org/multipage/media.html#event-media-pause)
* [`play`](https://html.spec.whatwg.org/multipage/media.html#event-media-play)
* [`playing`](https://html.spec.whatwg.org/multipage/media.html#event-media-playing)
* [`ratechange`](https://html.spec.whatwg.org/multipage/media.html#event-media-ratechange)
* [`seeked`](https://html.spec.whatwg.org/multipage/media.html#event-media-seeked)
* [`seeking`](https://html.spec.whatwg.org/multipage/media.html#event-media-seeking)
* [`timeupdate`](https://html.spec.whatwg.org/multipage/media.html#event-media-timeupdate)
* [`volumechange`](https://html.spec.whatwg.org/multipage/media.html#event-media-volumechange)

The semantics are the same as for the existing `HTMLMediaElement`. Note, however, that a `SyntheticMediaElement` *may or may not* have to deal with network requests.

## Patterns

Here I'll talk about some of the abstractions that can be built on top of this interface.

### `attach()`

This is the most powerful pattern. The syntax is something like this:

```ts
/**
 * Synchronize a {@link MediaElement} to be controlled by another one.
 * @returns A callback to detach the media element.
 */
function attach(opts: {
  /** The media element to be controlled. */
  child: MediaElement;

  /** The media element acting as the source of truth. */
  parent: MediaElement;

  /** When on the parent the child should start playing. */
  start: number;
}): () => void;
```

When a child is `attach()`ed to a parent, the two are synced so that `child.currentTime === parent.currentTime - opts.start`, with the parent acting as the source of truth. (This is an oversimplification, see [questions](#attach-questions) below). Furthermore, `play()`/`pause()` events on the parent are dispatched to the child. Here are some use cases:

- syncing actual `<audio>` or `<video>` elements to an interactive video.

- GSAP's [nested Timelines](https://greensock.com/docs/v3/GSAP/Timeline#nesting) and Remotion's [`<Sequence>`](https://www.remotion.dev/docs/sequence) make it easy to move fragments of video (e.g. individual scenes) around.

- suppose we wanted to include a YouTube video inside an interactive video. Rather than creating separate `@liqvid/youtube`, `@remotion/youtube`, and `gsap-youtube` packages, we could create a *single* package wrapping the YouTube API as a `MediaElement`. This would then be compatible with any animation framework implementing (or wrapped as) the `MediaElement` interface. This could also be used to sync GSAP animations to a Remotion timeline.

Note that the syncing only occurs when the parent is seeked, *not* on every `timeupdate` event—the child can take of playing itself.

#### Questions {#attach-questions}

- do we require that `opts.start + child.duration <= parent.duration`?

- do we set `child.playbackRate = parent.playbackRate` or `child.playbackRate *= parent.playbackRate`? Same question for `volume`. Do we allow both, and make it an option?

### `ReplayData`

This is a pattern for *human actions* which are to be recorded/replayed. Examples are cursor motion, typing, or handwriting. The signature is
```ts
type ReplayData<T> = [number, T][]
```
In each `[number, T]` pair, the `number` represents a duration (in seconds[*](#replaydata-note)) since the last event, while the `T` component represents some action. Here's an example from one of my videos:
```js
export const recordings = {
  // cursor positions as % of screen
  "cursor": [[6539,[27.8125,30.5]],[17,[27.8125,30.4167]], /* ... */],
  // handwriting---this should be compressed
  "paint": [[0,{"type":"move-to","x":0.2557,"y":0.1696}],[12,{"type":"line-to","x":0.2552,"y":0.1704}], /* ... */]],
  // CodeMirror 6 changes
  "code": [[3723,[[[0,"d"]],[1,1]]],[189,[[1,[0,"e"]],[2,2]]],[58,[[2,[0,"f"]],[3,3]]], /* ... */]
}
```
Since a `ReplayData` consists only of relative durations, it needs to be paired with a `start` property to replay it on a `MediaElement`. In this example, `cursor` is replayed by adjusting the position of an `<img>` element, `paint` is replayed by drawing onto a `<canvas>`, and `code` is replayed by dispatching updates to a [CodeMirror](https://codemirror.net/) instance. The logic for finding the updates to be applied/undone since the previous `timeupdate` call, and to subscribe/desubscribe this from a `MediaElement`, can be abstracted out of these three plugins.

#### Notes {#replaydata-note}

To be consistent with [`HTMLMediaElement.duration`](https://html.spec.whatwg.org/multipage/media.html#dom-media-duration), durations should be specified in *seconds*. However, since `ReplayData` files tend to be large, and the durations are usually less than one second, it is more efficient to serialize them as *milliseconds* (`24` is shorter than `0.024`).

### `syncTimeline()`

For imperatively animating *CSS properties*, the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) is the best choice. This can be used in conjunction with `MediaElement` using a pattern similar to [`attach()`](#attach), but for attaching an [`AnimationTimeline`](https://drafts.csswg.org/web-animations-1/#the-animationtimeline-interface) to a `MediaElement`. The syntax could look like this:

```ts
/**
 * Synchronize an animation timeline to a media element.
 * @returns A function to unsubscribe the timeline from the media element.
 */
function syncTimeline(
  child: AnimationTimeline,
  parent: MediaElement
): () => void;
```
or maybe like this:
```ts
/**
 * Get an animation timeline synchronized to a MediaElement.
 */
function makeTimeline(media: MediaElement): AnimationTimeline;
```

Liqvid allows this via `playback.newTimeline()` ([guide](https://liqvidjs.org/docs/guide/animation/#web-animations-api), [reference](https://liqvidjs.org/docs/reference/Playback#newAnimation)).

## Implementations

### Proof-of-concept

The Liqvid recording plugins are [cross-compatible with Remotion and GSAP](./2022-08-23-new-plugins.mdx). They achieve this by using (a preliminary version of) the `MediaElement` interface, and wrapping the respective libraries to implement `MediaElement`.

### Reference implementation

I haven't yet created a unified reference implementation of the above, but one can be cobbled together (with some modifications) from the following sources.
- `MediaElement`: from [`@lqv/playback → MediaElement`](https://github.com/liqvidjs/plugins/blob/main/packages/playback/src/MediaElement.ts) (doesn't pass an `Event` to event listeners)

- `SyntheticMediaElement`: [`@liqvid/playback`](https://github.com/liqvidjs/liqvid/blob/main/packages/playback/src/core.ts) amended by a [hack](https://github.com/liqvidjs/plugins/blob/main/packages/playback/src/hack.ts)

- `attach()`: see [`liqvid → Media`](https://github.com/liqvidjs/liqvid/blob/main/packages/main/src/Media.ts)

- `ReplayData`: [`@liqvid/utils/replay-data`](https://github.com/liqvidjs/liqvid/blob/main/packages/utils/src/replay-data.ts) and [`@liqvid/utils/animation → replay()`](https://github.com/liqvidjs/liqvid/blob/main/packages/utils/src/animation.ts#L101-L194). (This `replay()` function is powerful enough for the `cursor` example above, but not the `paint` or `code` examples.)

- `syncTimeline()`: see [`@liqvid/playback → Playback.newAnimation()`](https://github.com/liqvidjs/liqvid/blob/main/packages/playback/src/animation.ts)

## Terminology

The idea was that `MediaElement` = `HTMLMediaElement` &minus; `HTML`, but I suppose `Element` should be subtracted as well. On the other hand, `Media` is too generic. Perhaps `MediaElement` → `Playable` and `SyntheticMediaElement` → `Playback`?

