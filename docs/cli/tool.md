---
title: CLI tool
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

The [@liqvid/cli](https://www.npmjs.com/package/@liqvid/cli) package provides several command-line utilities for mastering projects.

## Installation
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

## Usage

The available commands are:

* [`liqvid audio`](./audio.md)

* [`liqvid build`](./build.md)

* [`liqvid render`](./render.md)

* [`liqvid serve`](./serve.md)

* [`liqvid thumbs`](./thumbs.md)

## Configuration

All commands accept a `--config` option specifying a path to a configuration file. The configuration file defaults to `./liqvid.config.ts`. It should export an object with keys for each of the available commands, containing the configuration for that command.

```ts
// liqvid.config.ts
const os = require("os");

module.exports = {
  build: {
    /* build configuration */
  },
  render: {
    /* render configuration */
  },
  serve: {
    /* server configuration */
  },
  thumbs: {
    /* thumbnail configuration */
    concurrency: os.cpus().length
  }
};

```

