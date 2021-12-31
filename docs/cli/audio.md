The `audio` commands provide helpers for several audio-related tasks:

* the [`convert`](#convert) command repairs audio files and makes them available in several formats.

* the [`join`](#join) command joins several audio files into one.

* the [`transcribe`](#transcribe) command transcribes an audio file to `.vtt` captions.

## `convert` {#convert}

The `audio convert` command should be run on all `.webm` recordings produced by the browser. The syntax is:
```bash
liqvid audio convert audio.webm
```

This does two things: fixes the durations in `audio.webm` (so that audio seeking will work), and creates `audio.mp4` (Safari does not support webm). It is equivalent to running the following shell commands:
```bash
# fix webm file produced by browser
ffmpeg -i audio.webm -strict -2 audio-fixed.webm
mv audio-fixed.webm audio.webm

# make available in mp4
ffmpeg -i audio.webm audio.mp4
```

## `join` {#join}

The `audio join` command concatenates several audio files into a single audio file. The syntax is:

```bash
liqvid audio join [filenames..]
```

The last file name specified is the output filename, all other filenames are input files. Alternatively, the output filename can be specified using the `--output` or `-o` flag, in which case all `filenames` are input files. That is, the following are equivalent:
```bash
liqvid audio join -o audio.webm audio-*.webm
liqvid audio join audio-*.webm audio.webm
```

Internally, this uses https://trac.ffmpeg.org/wiki/Concatenate#demuxer; read that if you need more fine-grained control over this process.

## `transcribe` {#transcribe}

The `audio transcribe` command transcribes audio files to a transcript file (`transcript.json`) and captions (`captions.vtt`) file. The "rich transcript" `transcript.json` contains per-word timings. The syntax is

```bash
liqvid audio transcribe \
  --api-key $API_KEY \
  --api-url $API_URL \
  -i audio.webm -t transcript.json -c captions.vtt
```

This uses [ibm-watson](https://www.npmjs.com/package/ibm-watson) and requires an IBM Cloud account. (Other transcription platforms may be provided in future.)

```ts
// liqvid.config.ts

// these shouldn't be in source control
import {apiKey, apiUrl} from "./keys";

module.exports = {
  "audio": {
    "transcribe": {
      apiKey,
      apiUrl
    }
  }
}
```

### `--api-key` {#api-key}

IBM API key. You should probably specify this in the config file instead of on the command line.

### `--api-url` {#api-url}

IBM Watson endpoint URL. This will be something like `"https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/a80f1e72-6a00-11ec-90d6-0242ac120003"`. You should probably specify this in the config file instead of on the command line.

### `--captions`, `-c` {#captions}

Output filename for WebVTT captions. Defaults to `"./captions.vtt"`.

### `--input`, `-i` {#input}

Audio input filename.

### `--transcript`, `-t` {#transcript}

Output filename for rich transcript. Defaults to `"./transcript.json"`.
