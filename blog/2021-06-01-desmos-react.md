---
title: Desmos in React / ractives
author: Yuri Sulyma
author_title: Mathematician & web developer
author_url: https://github.com/ysulyma
author_image_url: https://avatars.githubusercontent.com/u/453486?v=4
description: Embed the Desmos graphing calculator in interactive videos
image: https://d2og9lpzrymesl.cloudfront.net/r/ex-desmos/preview.png
hide_table_of_contents: true
---

I've created the package [`desmos-react`](https://www.npmjs.com/package/desmos-react) to provide a React wrapper around the [Desmos graphing calculator](https://www.desmos.com/calculator), making it easy to create interactive demos declaratively. I also added TypeScript typings.

Here's an example of using it in a video 👇 You can get the source for this demo from https://github.com/ysulyma/ex-desmos. This demo also shows off the upcoming captions support—you can enable captions by clicking on the gear in the bottom.

<!-- truncate -->

<style type="text/css">{`
.row .col.col--7 {
  --ifm-col-width: calc(9/12 * 100%);
}`}
</style>

<div className="video-container" style={{paddingBottom: "1em", width: "100%"}}>
  <div className="aspect-ratio" style={{paddingBottom: "62.5%"}}>
    <iframe src="/r/ex-desmos/" allowFullScreen style={{border: "1px solid #000"}}></iframe>
  </div>
</div>
