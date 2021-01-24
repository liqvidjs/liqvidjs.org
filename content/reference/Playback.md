---
layout: main.pug
title: Playback
---

# {{title}}

## Properties

<pre class="language-ts" id="audioContext"><code>
audioContext: AudioContext;
</code></pre>

<pre class="language-ts" id="audioNode"><code>
audioNode: GainNode;
</code></pre>

<pre class="language-ts" id="currentTime"><code>
currentTime: number;
</code></pre>

The current playback time in milliseconds.

**Warning:** the [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface measures this property in seconds.

<pre class="language-ts" id="duration"><code>
duration: number;
</code></pre>

The length of the playback in milliseconds.

**Warning:** the [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/) interface measures this property in seconds.</p>

<pre class="language-ts" id="hub"><code>
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

<pre class="language-ts" id="paused"><code>
paused: boolean;
</code></pre>

Whether the playback is paused.

<pre class="language-ts" id="playbackRate"><code>
playbackRate: number;
</code></pre>

The rate at which the playback is being played.

<pre class="language-ts" id="seeking"><code>
seeking: boolean;
</code></pre>

Whether the playback is in the process of seeking to a new position.

## Methods

<pre class="language-ts" id="pause"><code>
pause(): void;
</code></pre>

Pause playback.

<pre class="language-ts" id="play"><code>
play(): void;
</code></pre>

Resume playback.

<pre class="language-ts" id="seek"><code>
seek(t: number | string): void;
</code></pre>

Seek playback to a specific time.