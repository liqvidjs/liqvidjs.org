---
title: Recording
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Liqvid is designed mainly for producing interactive tutorials. This requires recording a lot of human actions, such as typing or pointing. These effects are provided by a suite of recording packages.

Recording functionality itself is provided in the `@liqvid/recording` package. There are also several `@lqv/*` plugins for more particular types of recordings. The easiest way to get started with these is by cloning their demos:

https://github.com/liqvidjs/plugins/tree/main/demos/liqvid/

As a consumer, you only need [`<RecordingControl>`](#RecordingControl), [`AudioRecording`](#AudioRecording), and [`VideoRecording`](#VideoRecording), as well as the plugins in the next section. If you want to write your own recording plugins, you'll need to understand [`RecordingManager`](#RecordingManager), but it's probably easiest to look at the [source](https://github.com/liqvidjs/plugins/tree/main/packages) of our recording plugins.

## Plugins vs integrations {#plugins-vs-integrations}

Plugins are different from the integrations covered in the previous section. Concretely, plugins

* live in the `@lqv` namespace.

* may not depend on the main `liqvid` package. May not depend on `@liqvid/*` packages other than `@liqvid/recording` and `@liqvid/utils`.

* must be compatible with other animation engines such as Remotion, GSAP, or plain HTML `<audio>` and `<video>` elements.

* tend to be fairly complex packages, having to do with recording human interactions.

whereas integrations:

* live in the `@liqvid` namespace, and are only intended to be used with Liqvid.

* tend to be thin compatibility layers with third-party libraries.

## Usage {#usage}

To install:

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
npm install @liqvid/recording
```
  </TabItem>
  <TabItem value="yarn">

  ```bash
  yarn add @liqvid/recording
  ```
  </TabItem>
  <TabItem value="pnpm">

  ```bash
  pnpm add @liqvid/recording
  ```
  </TabItem>
</Tabs>

To use:
```tsx
import {Playback, Script} from "liqvid";
import {AudioRecording, RecordingControl} from "@liqvid/recording";

const controls = [<RecordingControl plugins={[AudioRecording]} />]
const playback = new Playback({duration: 10000});

<Player controls={controls} playback={playback}>
  {/* ... */}
</Player>
```
You also need to add this to your CSS:
```css
@import "https://unpkg.com/@liqvid/recording/dist/style.css";
```

:::warning

Warning: by default, `Player` will pause/play whenever the canvas is clicked. Since this is annoying while recording, `@liqvid/recording` disables this when it is loaded as a control. Therefore, once you are done recording, you need to make sure that you are using [`data-affords="click"`](/docs/guide/interactivity#canvas-clicks) as needed.

:::

## Exports

### `AudioRecording` {#AudioRecording}

Audio recording plugin. Pass to `plugins` prop on [`<RecordingControl>`](#RecordingControl-props).

:::warning

The audio recording produced by the browser will not have the metadata needed for seeking. To fix the recording and make it available as mp4: <pre class="language-bash command-line" data-prompt="$"><code>liqvid audio convert audio.webm</code></pre>

:::

### `MarkerRecording` {#MarkerRecording}

Plugin for recording [markers](../reference/Script.md). Pass to `plugins` prop on [`<RecordingControl>`](#RecordingControl-props).

### `<RecordingControl>` {#RecordingControl}

Liqvid recording control.

#### Props {#RecordingControl-props}

* `plugins: RecordingPlugin[]`  
  Recording plugins to use.

### `Recorder` {#Recorder}

Abstract class for recording interactions.

#### Methods {#Recorder-methods}

* `beginRecording(): void`  
  Begin recording.

* `pauseRecording(): void`  
  Pause recording.

* `resumeRecording(): void`  
  Resume recording from paused.
  
* `endRecording(): Promise<IntransigentReturn> | void`  
  End recording.

* `finalizeRecording()`  
  Finalize recording data. Parameters:

### `RecordingManager` {#RecordingManager}

Class for managing recording sessions.

#### Methods {#RecordingManager-methods}

* `beginRecording(plugins): void`  
  Begin recording. Parameters:

  * `plugins: Record<string, Recorder>`  
  Named map of recording plugins to use.

* `capture(key, value): void`  
   Commit a piece of recording data. Parameters:
   * `key: string`  
     Key for recording source.
   * `value: unknown`  
     Data to record.

* `endRecording(): Promise<unknown>`  
  End recording and collect finalized data from recorders.

* `getTime(): number`  
  Get current recording time.

* `pauseRecording(): void`  
  Pause recording.

* `resumeRecording(): void`
  Resume recording from paused state.

#### Properties {#RecordingManager-properties}

* `active: boolean`  
  Whether recording is currently in progress.

* `paused: boolean`  
  Whether recording is currently paused.

### `VideoRecording` {#VideoRecording}

Video recording plugin. Pass to `plugins` prop on [`<RecordingControl>`](#RecordingControl-props).

### `compress()` {#compress}
Truncate numerical precision to reduce filesize.

#### Parameters

* `o: any`  
  Data to compress.

* `precision?: number = 2`  
  Number of decimal points to include.
