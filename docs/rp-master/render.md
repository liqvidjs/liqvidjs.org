The `render` command produces a recording of a ractive as a static (traditional mp4/webm) video file.

You will need to have [ffmpeg](https://ffmpeg.org/download.html) installed and in your `$PATH`. In case you have issues installing it, [this guide](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg) may help.

The syntax is
```bash
npx rp-master render <url> <outfile>
```

For example,
```bash
npx rp-master render -a ./audio/audio.mp4 http://localhost:8080 out.mp4
```

To avoid passing command line options every time, you can create an `rp-master.config.js` file. This should export an object with a `render` key containing the options for this command. Here is an example:

```js
// rp-master.config.js
const os = require("os");

module.exports = {
  render: {
    audioFile: "./audio/audio.mp4",
    concurrency: os.cpus().length,
    imageFormat: "png"
  },
  thumbs: {
    /* ... */
  }
};
```

You can specify a different location for the configuration file using the [`--config`](#config) option.

## General options {#general-options}

### `--browser-executable`, `-x` {#browser-executable}

Path to a Chrome/Chromium executable. If not specified and a suitable executable cannot be found, one will be downloaded during rendering.

### `--concurrency`, `-n` {#concurrency}

How many threads to use. Defaults to half of the available CPUs.

### `--config` {#config}

Path to a configuration file to load options from. Defaults to `./rp-master.config.js`.

## What to render {#what-to-render}

### `--audio-file`, `-a` {#audio-file}

Path to audio file. If not specified, the video will not have audio.

### `--duration`, `-d` {#duration}

Duration, specify as `[[hh:]mm:]ss[.ms]`. Cannot be used with `--end`.

### `--end`, `-e` {#end}

End time, specify as `[[hh:]mm:]ss[.ms]`. Defaults to `null`, meaning the end of the video. Cannot be used with `--duration`.

### `--sequence`, `-S` {#sequence}

Boolean flag to output an image sequence instead of a video. If set, `<outfile>` will be interpreted as a directory (and created if it does not already exist). This is useful if you want to run `ffmpeg` on the images yourself.

### `--start`, `-s` {#start}

Start time, specify as `[[hh:]mm:]ss[.ms]`. Defaults to 0, meaning the start of the video.

:::info
`--start`, `--duration`, and `--end` apply to *both* the audio file (if any) and the video. At this time, it is not possible to configure these separately.
:::

## Frame formatting {#frame-formatting}

### `--height`, `-h` {#height}

Video height. Defaults to 800.

### `--image-format`, `-F` {#image-format}

Image format for the frames, either `jpeg` or `png`. Defaults to `jpeg`.

### `--quality`, `-q` {#quality}

Value between 0 and 100 for quality of the frames. Only applies when `--image-format` is `jpeg`.

### `--width`, `-w` {#width}

Video width. Defaults to 1280.

## Video options {#video-options}

The exact command that we pass to `ffmpeg` is

```bash
ffmpeg
  -framerate <fps> -i <frames-dir> \ # frames
  -ss <start> -t <duration> [audio-args] -i <audio-file> \ # audio
  -pix_fmt <pixel-format> -y [video-args] <outfile> # video
```

See the [ffmpeg documentation](https://ffmpeg.org/ffmpeg.html#Options) for available options. The `-y` flag (which tells ffmpeg to overwrite the output file without asking) cannot currently be overridden. If no [audio file](#audio-file) is specified, the third line will not be included.

### `--audio-args`, `-A` {#audio-args}

Additional flags to pass to ffmpeg, applying to the [audio file](#audio-file). If no audio file is specified, this has no effect.

### `--fps`, `-r` {#fps}

Frames per second. Defaults to 30.

### `--pixel-format`, `-P` {#pixel-format}

[Pixel format](https://trac.ffmpeg.org/wiki/Chroma%20Subsampling) for ffmpeg. Defaults to `yuv420p`.

:::tip
If `outfile` is an `mp4` video, formats other than 4:2:0 will not work reliably, c.f. [Encoding for dumb players](https://trac.ffmpeg.org/wiki/Encode/H.264#Encodingfordumbplayers).
:::

### `--video-args`, `-V` {#video-args}

Additional flags to pass to ffmpeg, applying to the video outfile.
