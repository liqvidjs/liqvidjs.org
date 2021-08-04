---
id: getting-started
title: Getting Started
slug: /
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Prerequisites

The only dependency for Liqvid is Node.js. For some purposes (exporting to static video, touching up audio) FFMPEG is also required.

- [Installing Node.js](https://nodejs.org/en/download/)
- [Installing FFMPEG](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg)

## Installation

You can initialize a new Liqvid project using

<Tabs
  defaultValue="npm"
  values={[
    {label: "npm", value: "npm"},
    {label: "yarn", value: "yarn"}
  ]}
>
  <TabItem value="npm">

```bash
npm init liqvid my-video
```
  </TabItem>
  <TabItem value="yarn">

  ```bash
  yarn create liqvid my-video
  ```
  </TabItem>
</Tabs>

<!-- 
## Templates
Here are available templates:

| Name           | Description |
| -------------- | ----------- |
| `minimal`      | Minimal template |
| `code-html`    | Record HTML tutorials |
| `code-js`      | Record Javascript tutorials |
| `code-python`  | Record Python tutorials |
| `desmos`       | Desmos tutorials |
| `math`         | Content with equations |
| `three`        | THREE.js demos |
 -->