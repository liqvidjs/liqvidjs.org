---
title: CodeMirror
---

The `@lqv/codemirror` package allows you to record and replay [CodeMirror](https://codemirror.net/6/) typing. You probably want the [`@lqv/codebooth`](./codebooth.md) package rather than using this directly.

## `@lqv/codemirror` {#main}

### `cmReplay()` {#cmReplay}
Replay typing in CodeMirror. Takes one argument with the following keys:

* `data: ReplayData`  
  Recording data to replay.

* `handle?: (cmd: string, doc) => void`  
  Function for handling special commands. Receives the following arguments:
  * `cmd: string`  
  Command to handle.

  * `doc: codemirror.Text`  
  CodeMirror document.

* `playback: Playback`  
  Playback to sync with.

* `start?: number = 0`  
  When to begin playback.

* `view: codemirror.EditorView`  
  CodeMirror [EditorView](https://codemirror.net/6/docs/ref/#view.EditorView) to sync with.

### `cmReplayMultiple()` {#cmReplayMultiple}
Replay typing to several CodeMirror instances in parallel. Takes one argument with the following keys:

* `data: ReplayData`  
  Recording data to replay.

* `handle?: (cmd: string, docs) => void`  
  Function for handling special commands. Receives the following arguments:
  * `cmd: string`  
  Command to handle.

  * `docs: Record<string, codemirror.Text>`  
  CodeMirror documents.

* `playback: Playback`  
  Playback to sync with.

* `start?: number = 0`  
  When to begin playback.

* `views: Record<string, codemirror.EditorView>`  
  CodeMirror [EditorView](https://codemirror.net/6/docs/ref/#view.EditorView)s to sync with.

### `fakeSelection()` {#fakeSelection}
CodeMirror extension to imitate selections. Parameters:

* `drawSelection: codemirror.Extension[]`  
  CodeMirror extension to modify.

### `selectCmd` {#selectCmd}
Reserved command for specifying file.

```tsx
selectCmd: "file:";
```

## `@lqv/codemirror/extensions` {#extensions}

### `passThrough()` {#passThrough}
Handle key sequences in `seqs` even if key capture is suspended. Parameters:

* `keymap: Keymap`  
  [`Keymap`](../reference/Keymap.md) to handle key sequences.

* `seqs: string[]`  
  Key sequences to handle.

## `@lqv/codemirror/recording` {#recording}

### `CodeRecorder` {#CodeRecorder}
CodeMirror recorder.

### `CodeRecording` {#CodeRecording}
CodeMirror recording plugin.
