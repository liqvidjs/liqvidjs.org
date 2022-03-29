---
title: Cursor
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

The `@lqv/cursor` package lets you record your cursor moving around on the screen. To see how to use it, clone this [demo](https://github.com/liqvidjs/plugins/tree/main/demos/cursor).

It has the following entrypoints:

* [`@lqv/cursor`](#main)

* [`@lqv/cursor/react`](#react)

* [`@lqv/cursor/recording`](#recording)

<Tabs
  defaultValue="npm"
  values={[
    {label: "npm", value: "npm"},
    {label: "yarn", value: "yarn"},
    {label: "pnpm", value: "pnpm"}
  ]}
>
  <TabItem value="npm">

```bash
npm install @lqv/cursor
```
  </TabItem>
  <TabItem value="yarn">

  ```bash
  yarn add @lqv/cursor
  ```
  </TabItem>
  <TabItem value="pnpm">

  ```bash
  pnpm add @lqv/cursor
  ```
  </TabItem>
</Tabs>

## `@lqv/cursor` {#main}

### `cursorReplay()` {#cursorReplay}

Move an image along a recorder cursor path.

#### Parameters

Takes a single object with the following keys:

* `align?: string | [number, number]`  
  Alignment of image. Given by a pair `[x, y]` with `0 <= x, y <= 1`, corresponding to the point (`100x`%, `100y`%) of the way along the image. Also accepts
  aliases `"center"` for `[0.5, 0.5]`, `"top right"` for `[0, 1]`, etc.

* `data: ReplayData<[number, number]>`  
  Cursor data to replay.

* `end?: number = start + length(data)`  
  When the cursor should disappear.

* `playback: Playback`  
  Playback to sync with.

* `start?: number = 0`  
  When the cursor should first appear.

* `target: HTMLElement`  
  Element to sync with.

#### Return value

Returns an unsubscription function.

## `@lqv/cursor/react` {#react}

### `<Cursor/>` {#Cursor}

Move an image along a recorder cursor path. React version of [`cursorReplay()`](#cursorReplay).

#### Props {#Cursor-props}

* `align?: string | [number, number]`  
  Alignment of image. Given by a pair `[x, y]` with `0 <= x, y <= 1`, corresponding to the point (`100x`%, `100y`%) of the way along the image. Also accepts
  aliases `"center"` for `[0.5, 0.5]`, `"top right"` for `[0, 1]`, etc.

* `data: ReplayData<[number, number]>`  
  Cursor data to replay.

* `end: number`  
  When the cursor should disappear. Optional, defaults to `start + length(data)`.

* `src: string`  
  Src of cursor image.

* `start: number`  
  When the cursor should first appear. Optional, defaults to 0.

## `@lqv/cursor/recording` {#recording}

### `CursorRecorder` {#CursorRecorder}

#### Properties

* `target: HTMLElement = document.body`  
  Container element for recording.

### `CursorRecording` {#CursorRecording}

Cursor recording plugin. Pass to [`<RecordingControl>`](./recording.md).