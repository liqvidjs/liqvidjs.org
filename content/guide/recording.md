---
layout: main.pug
title: Recording
---

# Recording

Recording functionality is provided in the <a href="https://github.com/ysulyma/rp-recording">rp-recording</a> package.

<pre class="language-tsx"><code>
import {Player} from "ractive-player";
import {RecordingControl} from "rp-recording";

const controls = (&lt;&gt;
  {Player.defaultControlsLeft}

  &lt;div className="rp-controls-right"&gt;
    &lt;RecordingControl plugins={[/* recording plugins */]}/&gt;
    {Player.defaultControlsRight}
  &lt;/div&gt;
&lt;/&gt;);

/* ... */

&lt;Player controls={controls} ref={playerRef} script={script} thumbs={thumbData}&gt;
  {/* */}
&lt;/Player&gt;
</code></pre>

<p class="warning">Warning: by default, <code>Player</code> will pause/play whenever the canvas is clicked. Since this is annoying while recording, <code>rp-recording</code> disables this when it is loaded as a control. Therefore, once you are done recording, you need to make sure that you are using <a href="/reference/Player/#preventCanvasClick">Player.preventCanvasClick</a> as needed.</p>

<div class="warning">The audio recording produced by the browser will not have the metadata needed for seeking. To fix the recording: <pre class="language-bash command-line" data-prompt="$"><code>ffmpeg -i audio.webm -strict -2 audio-fixed.webm
mv audio-fixed.webm audio.webm</code></pre></div>