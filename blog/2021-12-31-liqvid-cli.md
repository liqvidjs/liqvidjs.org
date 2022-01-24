---
title: Liqvid CLI
author: Yuri Sulyma
author_title: Mathematician & web developer
author_url: https://github.com/ysulyma
author_image_url: https://avatars.githubusercontent.com/u/453486?v=4
description: "The new @liqvid/cli tool makes it much easier to develop and deploy Liqvid projects"
hide_table_of_contents: true
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

I've released a new [command-line tool](/docs/cli/tool) providing several helpful utilities for mastering projects. This replaces the older `rp-master` command. You can:

* 🎙️ [`liqvid audio`](/docs/cli/audio) Join, convert, and transcribe audio

* 📦 [`liqvid build`](/docs/cli/build) Easily bundle your project for deployment

* 📺 [`liqvid render`](/docs/cli/render) Render to static video

* 👀 [`liqvid serve`](/docs/cli/serve) Easily run a preview server for your video

* 🖼️ [`liqvid thumbs`](/docs/cli/thumbs) Generate thumbnails

<!-- truncate -->

To install:

<Tabs
  defaultValue="npm"
  values={[
    {label: "npm", value: "npm"},
    {label: "yarn", value: "yarn"}
  ]}
>
  <TabItem value="npm">

```bash
npm install -D @liqvid/cli
```
  </TabItem>
  <TabItem value="yarn">

  ```bash
  yarn add -D @liqvid/cli
  ```
  </TabItem>
</Tabs>
