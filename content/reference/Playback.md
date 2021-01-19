---
layout: main.pug
title: Playback
---

# {{title}}

## Properties

<pre class="language-typescript" id="audioContext"><code>
audioContext: AudioContext;
</code></pre>

<pre class="language-typescript" id="audioNode"><code>
audioNode: GainNode;
</code></pre>

<pre class="language-typescript" id="currentTime"><code>
currentTime: number;
</code></pre>
<p>The current playback time in milliseconds.</p>
<p><strong>Warning:</strong> the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/">HTMLMediaElement</a> interface measures this property in seconds.</p>

<pre class="language-typescript" id="duration"><code>
duration: number;
</code></pre>
<p>The length of the playback in milliseconds.</p>
<p><strong>Warning:</strong> the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/">HTMLMediaElement</a> interface measures this property in seconds.</p>

<pre class="language-typescript" id="hub"><code>
hub: StrictEventEmitter&lt;EventEmitter, {
  "bufferupdate": void;
  "cuechange": void;
  "pause": void;
  "play": void;
  "seek": number;
  "seeked": void;
  "seeking": void;
  "stop": void;
  "ratechange": void;
  "timeupdate": number;
  "volumechange": void;
}&gt;;
</code></pre>

<pre class="language-typescript" id="paused"><code>
paused: boolean;
</code></pre>

<pre class="language-typescript" id="playbackRate"><code>
playbackRate: number;
</code></pre>

<pre class="language-typescript" id="playingFrom"><code>
playingFrom: number;
</code></pre>

<pre class="language-typescript" id="seeking"><code>
seeking: boolean;
</code></pre>

## Methods

<pre class="language-typescript" id="pause"><code>
pause(): void;
</code></pre>
<p>Pause playback.</p>

<pre class="language-typescript" id="play"><code>
play(): void;
</code></pre>
<p>Resume playback.</p>

<pre class="language-typescript" id="seek"><code>
seek(t: number | string): void;
</code></pre>
<p>Seek playback to a specific time.</p>