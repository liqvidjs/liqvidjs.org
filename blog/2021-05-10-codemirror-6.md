---
title: CodeMirror 6 support
author: Yuri Sulyma
author_title: Mathematician & web developer
author_url: https://github.com/ysulyma
author_image_url: https://avatars.githubusercontent.com/u/453486?v=4
description: Create interactive code recordings with CodeMirror 6 in Liqvid (+ @remotion/player compatibility!)
hide_table_of_contents: true
---

rp-codemirror 2.0 has been released, bringing support for [CodeMirror 6](https://codemirror.net/6/). This has much better accessibility and touchscreen support compared to CodeMirror 5. Here's a demo; you can experiment with the code yourself in the Playground tab:

<!-- truncate -->

<style type="text/css">{`
.row .col.col--7 {
  --ifm-col-width: calc(9/12 * 100%);
}`}
</style>

<div className="video-container" style={{paddingBottom: "1em", width: "100%"}}>
  <div className="aspect-ratio" style={{paddingBottom: "62.5%"}}>
    <iframe src="/r/cm6-demo/" allowFullScreen style={{border: "1px solid #000"}}></iframe>
  </div>
</div>

This was *much* easier to write than the original rp-codemirror, so kudos to [marijn](https://marijnhaverbeke.nl/) for a really beautiful API. For CodeMirror 5, you should continue to use rp-codemirror 1.x. I haven't written documentation for the new version yet, but you can download the source for this demo from https://github.com/ysulyma/cm6-demo.

The replay (but not recording) functionality is compatible with the [@remotion/player](https://www.remotion.dev/docs/player/) alpha:

<div className="video-container" style={{paddingBottom: "1em", width: "100%"}}>
  <div className="aspect-ratio" style={{paddingBottom: "62.5%"}}>
    <iframe src="/r/cm6-demo/remotion/" allowFullScreen style={{border: "1px solid #000"}}></iframe>
  </div>
</div>

Finally, here it is as a "real" video, created with the new [`rp-master render`](/docs/rp-master/render) command:

<iframe width="800" height="450" src="https://www.youtube.com/embed/tFWetjCQJ8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

This is of course a bit silly, since one goal of this library is to make mp4/webm obsolete for this type of content. But until YouTube catches up, having a static version that you can share on social media is useful for discoverability.
