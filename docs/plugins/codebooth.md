---
title: CodeBooth
---

The `@lqv/codebooth` package provides a GUI for interactive coding tutorials. It is based on [`@lqv/codemirror`](./codemirror.md), and you should use that directly if you need finer-grained control.

This package aims to be very flexible, accommodating a wide variety of use cases. We ship a set of components for you to build-your-own UI, as well as a set of [presets](#presets) demonstrating configuration for common use cases. The easiest way to get started is to clone one of the demos:

<table>
  <thead>
    <tr>
      <th>Language / Library</th>
      <th scope="col">Liqvid</th>
      <th scope="col">Remotion</th>
      <th scope="col">GSAP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>HTML</th>
      <td>
        <a href="https://github.com/liqvidjs/plugins/tree/main/demos/liqvid/codebooth-html">Demo</a>
      </td>
      <td>
        <a href="https://github.com/liqvidjs/plugins/tree/main/demos/remotion/codebooth-html">Demo</a>
      </td>
      <td>
        <a href="https://github.com/liqvidjs/plugins/tree/main/demos/gsap/codebooth-html">Demo</a>
      </td>
    </tr>
    <tr>
      <th>Python</th>
      <td>
        <a href="https://github.com/liqvidjs/plugins/tree/main/demos/liqvid/codebooth-python">Demo</a>
      </td>
      <td>
        <a href="https://github.com/liqvidjs/plugins/tree/main/demos/remotion/codebooth-python">Demo</a>
      </td>
      <td>
        <a href="https://github.com/liqvidjs/plugins/tree/main/demos/gsap/codebooth-python">Demo</a>
      </td>
    </tr>
    <tr>
      <th>TSX</th>
      <td>
        <a href="https://github.com/liqvidjs/plugins/tree/main/demos/liqvid/codebooth-tsx">Demo</a>
      </td>
      <td>
        <a href="https://github.com/liqvidjs/plugins/tree/main/demos/remotion/codebooth-tsx">Demo</a>
      </td>
      <td>
        <a href="https://github.com/liqvidjs/plugins/tree/main/demos/gsap/codebooth-tsx">Demo</a>
      </td>
    </tr>
  </tbody>
</table>


:::warning
Currently, this package does not work in [Strict Mode](https://reactjs.org/docs/strict-mode.html).
:::

## Exports

### `<Buttons>` {#Buttons}
Div to hold buttons.

### `<Clear>` {#Clear}
Button for clearing the output/console.

### `<CodeBooth>` {#CodeBooth}
Container for code editing/recording/replaying.

#### Props {#CodeBooth-props}

* `recorder?: CodeRecorder`  
  CodeMirror [recorder](./codemirror.md#CodeRecorder).

### `<Console>` {#Console}
Component for displaying console logs.

### `<Copy>` {#Copy}
Button for copying the contents of one buffer to another.

#### Props {#Copy-props}

* `from: string`  
  Source editor group.

* `to: string`  
  Target editor group.

### `<Editor>` {#Editor}
CodeMirror editor.

#### Props {#Editor-props}

* `content?: string`  
  Initial content for editor.

* `editable?: boolean = true`  
  Whether the editor is editable or not.

* `extensions?: codemirror.Extension[]`  
  CodeMirror [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension)s to use in the editor.

* `filename?: string`  
  Filename for the file being edited.

* `group?: string`  
  Group name for editor. You usually specify this on the parent [`EditorGroup`](#EditorGroup) instead.

### `<EditorGroup>` {#EditorGroup}
Holds a group of editors.

#### Props {#EditorGroup-props}

* `id: string`  
  ID of this group.

### `<EditorPanel>` {#EditorPanel}
Tabpanel containing a single editor.

#### Props {#EditorPanel-props}
* `filename: string`  
  Filename for the panel.

* `group?: string = "default"`  
  Group name for the panel. You usually specify this on the parent [`EditorGroup`](#EditorGroup) instead.

### `<FileTabs>` {#FileTabs}
File selector component.

### `<Record>` {#Record}
Recording editor.

#### Props {#Record-props}
This component extends [`Editor`](#Editor-props). In addition to those props, this accepts:

* `captureKeys?: Record<string, string> = {"Mod-Enter": run, "Mod-K": "clear", "Mod-L": "clear"}`  
  Special key sequences to include in recording.

* `passKeys?: string[] = ["Mod-Alt-2", "Mod-Alt-3", "Mod-Alt-4"]`  
  Key sequences to pass through to [`Keymap`](../reference/Keymap.md).

### `<Replay>` {#Replay}
Editor to replay recorded coding.

#### Props {#Replay-props}
This component extends [`Editor`](#Editor-props). In addition to those props, this accepts:

* `handle?: (useStore, cmd, doc) => void`  
  Callback to handle special commands. Receives the following parameters:
  * `useStore: Store`  
    The CodeBooth store.
  * `cmd: string`  
    The command to handle.
  * `doc: codemirror.Text`  
    The CodeMirror document.

* `replay?: CodeData | Promise<CodeData>`  
  Coding data to replay.

* `start?: number = 0`  
  Time to start replaying.

### `<ReplayMultiple>` {#ReplayMultiple}
Replay coding to multiple editors.

#### Props {#ReplayMultiple-props}
* `group?: string`  
  Editor group to replay.

* `handle?: (useStore, key, string) => void`  
  Callback to handle special commands. Receives the following arguments:
  * `useStore: Store`  
    The CodeBooth store.
  
  * `cmd: string`  
    The command to handle.

  * `docs: Record<string, codemirror.Text>`  
    CodeMirror documents.

* `replay: CodeData | Promise<CodeData>`  
  Coding data to replay.

* `start?: number = 0`  
  Time to start replaying.

<!-- ### `<Reset>` {#Reset}
Button for resetting editor. -->

### `<Resize>` {#Resize}
Component for adjusting the vertical editor/console split.

### `<Run>` {#Run}
Button for running the code.

### `State` {#State}
CodeBooth store state. Shape:

* `activeGroup: string`  
  Name of active editor group.

* `classNames: string[]`  
  Class names to attach to root.

* `groups: Record<string, {activeFile, files}>`  
  Group of files/editors. Shape:
  * `activeFile: string`  
    Name of active file.
  
  * `files: Record<string, {editable, filename, view}>`  
    Files contained in this editor group. Shape:

    * `editable: boolean`  
      Whether the buffer can be edited by the viewer.

    * `filename: string`  
      File name.

    * `view: codemirror.EditorView`  
      Reference to CodeMirror [`EditorView`](https://codemirror.net/6/docs/ref/#view.EditorView).

* `messages: React.ReactChild[]`  
  Console logs.

* `recorder: CodeRecorder`  
  Code recorder.

* `run: number`  
  Used to broadcast run events.

* `getActiveFile(): {editable, filename, views}`  
  Get the active file.

* `getActiveView(): codemirror.EditorView`  
  Get the active view.

### `<Tab>` {#Tab}
Group selection tab.

#### Props {#Tab-props}

* `id: string`  
  ID of [`EditorGroup`](#EditorGroup) this corresponds to.

### `<TabList>` {#TabList}
Holds a list of [`Tab`](#Tab)s.

### `useBoothStore()` {#useBoothStore}
Get a reference to the [Zustand](https://docs.pmnd.rs/zustand/introduction) store for this CodeBooth. See [`State`](#State) for store shape.

## Presets {#presets}
To reduce the need for configuration, we provide presets for a number of common language scenarios. These are not intended to be one-size-fits-all solutions; if you require further customization, the [source](https://github.com/liqvidjs/plugins/tree/main/packages/codebooth/src/presets) for these presets will help you get started.

### HTML {#HTML}
Preset for recording multifile HTML/CSS/JS demos. Import as `@lqv/codebooth/html`. Exports:

#### `<HTMLPreview>` {#HTMLPreview}
Preview of HTML document.

#### `<HTMLRecord>` {#HTMLRecord}
Record HTML demos. Props:

* `files: Record<string, string>`  
  Map of filenames to file contents.

#### `<HTMLReplay>` {#HTMLReplay}
Interactive HTML replay. Props:

* `files: Record<string, string>`  
  Map of filenames to file contents.

* `replay: ReplayData`  
  Coding data to replay.

* `start?: number = 0`  
  When replay should start.

#### `extensionFromFilename()`  {#extensionFromFilename}
Get CodeMirror [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) appropriate to filename extension.

##### Parameters {#extensionFromFilename-params}
* `filename: string`  
  Name of file.

##### Return value {#extensionFromFilename-return}
Either `css()`, `html()`, or `javascript()` from `@codemirror/lang-*`.

#### `transform()` {#transform}
Inlines scripts and stylesheets in HTML code.

##### Parameters {#transform-params}
* `html: string`  
  HTML code to transform

* `files: Record<string, string>`  
  Map of filenames to file contents.

##### Return value {#transform-return}
Transformed HTML code.

### Python {#Python}
Preset for recording Python demos. Import as `@lqv/codebooth/python`. Uses the [Skulpt](https://skulpt.org/) interpreter. Exports:

#### `<PythonRecord>` {#PythonRecord}
Record Python coding. Props:

* `content?: string`  
  File contents.

#### `<PythonReplay>` {#PythonReplay}
Interactive Python replay. Props:

* `content?: string`  
  File contents.

#### `<PythonRun>` {#PythonRun}
Run Python code.
