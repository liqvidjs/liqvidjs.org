---
layout: main.pug
title: Script
---

<h1>Script</h1>

<h2>Properties</h2>

<pre class="language-typescript" id="hub"><code>
hub: StrictEventEmitter&lt;EventEmitter, {
  "markerupdate": number;
}&gt;;
</code></pre>

<pre class="language-typescript" id="loadTasks"><code>
loadTasks: Promise&lt;unknown&gt;[];
</code></pre>

<pre class="language-typescript" id="markerIndex"><code>
markerIndex: number;
</code></pre>

<pre class="language-typescript" id="markerName"><code>
markerName: string;
</code></pre>

<pre class="language-typescript" id="markers"><code>
markers: [string, number, number][];
</code></pre>

<h2>Methods</h2>

<pre class="language-typescript" id="constructor"><code>
constructor(markers: Array<[string, string | number] | [string, string | number, string | number]>);
</code></pre>

<pre class="language-typescript" id="back"><code>
back(): void;
</code></pre>

Seek playback to the previous marker.

<pre class="language-typescript" id="forward"><code>
forward(): void;
</code></pre>

Advance playback to the next marker.

<pre class="language-typescript" id="markerByName"><code>
markerByName(name: string): [string, number, number];
</code></pre>

<pre class="language-typescript" id="markerNumberOf"><code>
markerNumberOf(name: string): number;
</code></pre>

<pre class="language-typescript" id="parseEnd"><code>
parseEnd(end: number | string): number;
</code></pre>

<pre class="language-typescript" id="parseStart"><code>
parseStart(start: number | string): number;
</code></pre>
