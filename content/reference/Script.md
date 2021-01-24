---
layout: main.pug
title: Script
---

<h1>Script</h1>

<h2>Properties</h2>

<pre class="language-ts" id="hub"><code>
hub: StrictEventEmitter&lt;EventEmitter, {
  "markerupdate": number;
}&gt;;
</code></pre>

<pre class="language-ts" id="loadTasks"><code>
loadTasks: Promise&lt;unknown&gt;[];
</code></pre>

<pre class="language-ts" id="markerIndex"><code>
markerIndex: number;
</code></pre>

Index of the active marker.

<pre class="language-ts" id="markerName"><code>
markerName: string;
</code></pre>

Name of the active marker.

<pre class="language-ts" id="markers"><code>
markers: [string, number, number][];
</code></pre>

<pre class="language-ts" id="playback"><code>
playback: Playback;
</code></pre>

The underlying <a href="/reference/Playback/">Playback</a> object.

<h2>Methods</h2>

<pre class="language-ts" id="constructor"><code>
constructor(markers: Array<[string, string | number] | [string, string | number, string | number]>);
</code></pre>

<pre class="language-ts" id="back"><code>
back(): void;
</code></pre>

Seek playback to the previous marker.

<pre class="language-ts" id="forward"><code>
forward(): void;
</code></pre>

Advance playback to the next marker.

<pre class="language-ts" id="markerByName"><code>
markerByName(name: string): [string, number, number];
</code></pre>

<pre class="language-ts" id="markerNumberOf"><code>
markerNumberOf(name: string): number;
</code></pre>

Returns the first index of a marker named `name`. Throws an error if no marker named `name` exists.

<pre class="language-ts" id="parseEnd"><code>
parseEnd(end: number | string): number;
</code></pre>

If `end` is a string, returns the ending time of the marker with that name. Otherwise, returns `end`.

<pre class="language-ts" id="parseStart"><code>
parseStart(start: number | string): number;
</code></pre>

If `start` is a string, returns the starting time of the marker with that name. Otherwise, returns `start`.
