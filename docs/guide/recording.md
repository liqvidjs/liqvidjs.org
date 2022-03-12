---
title: Recording
---

Recording functionality is provided in the [rp-recording](https://github.com/ysulyma/rp-recording) package.

## Usage {#usage}

```tsx
import {Player, Script} from "liqvid";
import {RecordingControl} from "rp-recording";

const script = new Script([
  ["intro/", "1:00"]
]);

<Player controls={[<RecordingControl/>]} script={script}>
  {/* */}
</Player>
```

:::warning

Warning: by default, `Player` will pause/play whenever the canvas is clicked. Since this is annoying while recording, <code>rp-recording</code> disables this when it is loaded as a control. Therefore, once you are done recording, you need to make sure that you are using [`data-affords="click"`](http://localhost:3000/docs/guide/interactivity#canvas-clicks) as needed.

:::

:::warning

The audio recording produced by the browser will not have the metadata needed for seeking. To fix the recording and make it available as mp4: <pre class="language-bash command-line" data-prompt="$"><code>liqvid audio convert audio.webm</code></pre>

:::