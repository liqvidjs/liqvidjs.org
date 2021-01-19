---
layout: main.pug
title: Player
---

# {{title}}

## Static properties

<pre class="language-typescript" id="allowScroll"><code>
static allowScroll(e: React.TouchEvent | TouchEvent): void;
</code></pre>

Prevents intercepting of scroll on mobile.

<pre class="language-typescript" id="preventCanvasClick"><code>
static preventCanvasClick(e: React.MouseEvent | MouseEvent): void;
</code></pre>

<p>Prevents a click from pausing/playing the video.</p>

<pre class="language-typescript" id="Context"><code>
static Context: React.Context&lt;Player&gt;;
</code></pre>

<h2>Properties</h2>

<pre class="language-typescript" id="controls"><code>
controls: Controls;
</code></pre>

<pre class="language-typescript" id="canPlay"><code>
canPlay: Promise&lt;void[]&gt;;
</code></pre>

<pre class="language-typescript" id="canPlayThrough"><code>
canPlayThrough: Promise&lt;void[]&gt;;
</code></pre>

<pre class="language-typescript" id="canvas"><code>
canvas: HTMLDivElement;
</code></pre>

<pre class="language-typescript" id="hub"><code>
hub: StrictEventEmitter&lt;EventEmitter, {
  "canplay": void;
  "canplaythrough": void;
  "canvasClick": void;
}&gt;;
</code></pre>

<pre class="language-typescript" id="playback"><code>
playback: Playback;
</code></pre>

<pre class="language-typescript" id="script"><code>
script: Script;
</code></pre>

<h2>Methods</h2>

<pre class="language-typescript" id="obstruct"><code>
obstruct(event: "canplay" | "canplaythrough", task: Promise&lt;unknown&gt;): void;
</code></pre>

<pre class="language-typescript" id="ready"><code>
ready(): void;
</code></pre>

<p>Call this method when the ractive is ready to begin playing.</p>

<pre class="language-typescript" id="resumeKeyCapture"><code>
resumeKeyCapture(): void;
</code></pre>

<p>Resumes keyboard controls.</p>

<pre class="language-typescript" id="suspendKeyCapture"><code>
suspendKeyCapture(): void;
</code></pre>

<p>Suspends keyboard controls so that components can receive keyboard input.</p>
