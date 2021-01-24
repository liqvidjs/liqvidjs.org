---
layout: main.pug
title: Player
---

# {{title}}

## Static properties

<pre class="language-ts" id="allowScroll"><code>
static allowScroll(e: React.TouchEvent | TouchEvent): void;
</code></pre>

Prevents intercepting of scroll on mobile.

<pre class="language-ts" id="preventCanvasClick"><code>
static preventCanvasClick(e: React.MouseEvent | MouseEvent): void;
</code></pre>

Prevents a click from pausing/playing the video.

<pre class="language-ts" id="Context"><code>
static Context: React.Context&lt;Player&gt;;
</code></pre>

## Properties

<pre class="language-ts" id="canPlay"><code>
canPlay: Promise&lt;void[]&gt;;
</code></pre>

<pre class="language-ts" id="canPlayThrough"><code>
canPlayThrough: Promise&lt;void[]&gt;;
</code></pre>

<pre class="language-ts" id="canvas"><code>
canvas: HTMLDivElement;
</code></pre>

<pre class="language-ts" id="hub"><code>
hub: StrictEventEmitter&lt;EventEmitter, {
  "canplay": void;
  "canplaythrough": void;
  "canvasClick": void;
}&gt;;
</code></pre>

<pre class="language-ts" id="keymap"><code>
keymap: KeyMap;
</code></pre>

The [KeyMap](/reference/KeyMap/) instance attached to this player.

<pre class="language-ts" id="playback"><code>
playback: Playback;
</code></pre>

The underlying [Playback](/reference/Playback/) instance.

<pre class="language-ts" id="script"><code>
script: Script;
</code></pre>

The underlying [Script](/reference/Script/) instance.

## Methods

<pre class="language-ts" id="obstruct"><code>
obstruct(event: "canplay" | "canplaythrough", task: Promise&lt;unknown&gt;): void;
</code></pre>

<pre class="language-ts" id="ready"><code>
ready(): void;
</code></pre>

Call this method when the ractive is ready to begin playing.

<pre class="language-ts" id="resumeKeyCapture"><code>
resumeKeyCapture(): void;
</code></pre>

Resumes keyboard controls.

<pre class="language-ts" id="suspendKeyCapture"><code>
suspendKeyCapture(): void;
</code></pre>

Suspends keyboard controls so that components can receive keyboard input.
