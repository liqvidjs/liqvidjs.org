---
title: Recording
---

Recording functionality is provided in the [rp-recording](https://github.com/ysulyma/rp-recording) package.

```tsx
import {Player} from "liqvid";
import {RecordingControl} from "rp-recording";

const controls = (<>
  {Player.defaultControlsLeft}

  <div className="rp-controls-right">
    <RecordingControl plugins={[/* recording plugins */]}/>
    {Player.defaultControlsRight}
  </div>
</>);

/* ... */

<Player controls={controls} ref={playerRef} script={script} thumbs={thumbData}>
  {/* */}
</Player>
```

:::warning

Warning: by default, <code>Player</code> will pause/play whenever the canvas is clicked. Since this is annoying while recording, <code>rp-recording</code> disables this when it is loaded as a control. Therefore, once you are done recording, you need to make sure that you are using <a href="/docs/reference/Player#preventCanvasClick">Player.preventCanvasClick</a> as needed.

:::

:::warning

The audio recording produced by the browser will not have the metadata needed for seeking. To fix the recording: <pre class="language-bash command-line" data-prompt="$"><code>ffmpeg -i audio.webm -strict -2 audio-fixed.webm
mv audio-fixed.webm audio.webm</code></pre>

:::