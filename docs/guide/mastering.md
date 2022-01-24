---
title: Deploying
---

Once you are happy with your video, it's time to share it with the world.

## Deployment checklist

1. <input type="checkbox"/> <a href="#building">Build</a> in production mode

1. <input type="checkbox"/> Ensure <a href="/docs/guide/mobile#fat-fingers">fat-fingers</a> etc. for mobile

1. <input type="checkbox"/> Make sure that mouseUp events are appropriately <a href="/docs/guide/mobile#canvas-clicks">intercepted</a>.

1. <input type="checkbox"/> <a href="#joining-audio">Join</a> audio files into a single file.

1. <input type="checkbox"/> <a href="#transforming-audio">Convert audio recordings</a>

1. <input type="checkbox"/> <a href="#thumbnails">Generate thumbnails</a> and add highlights.

1. <input type="checkbox"/> Make sure there is CSS to load custom fonts etc.
1. <input type="checkbox"/> Make sure the hosting page is including the <a href="/docs/guide/mobile#fake-fullscreen">fake fullscreen</a> patch
1. <input type="checkbox"/> Make <a href="#static-video">static recordings</a> for social media/discoverability

## Building {#building}

To create an optimized production build of your project, use the [`liqvid build`](../cli/build) command.
```bash
liqvid build
```
This will bundle your project into `./dist`. You then upload that directory to your production site. You can also preview it from `http://localhost:8000/dist/`.

## Audio {#audio}

### Joining audio {#joining-audio}

It can be convenient to record several audio segments separately. However, due to the <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#The_play()_method">Web Autoplay Policy</a>, you need to join them into a single audio file when you are finished. We provide a helper command for this:

```bash
liqvid audio join -o audio.webm audio-1.webm audio-2.webm audio-3.webm
```

This will join `audio-1.webm`, `audio-2.webm`, and `audio-3.webm` into `audio.webm`. See [`liqvid audio join`](../cli/audio#join) for more information.

### Transforming audio {#transforming-audio}
If you are recording audio in the browser, the audio file will not have the correct metadata for seeking. Additionally, you need to provide the audio in mp4, since iOS does not support webm. We provide the [`liqvid audio convert`](../cli/audio#convert) command to help with this:
```bash
liqvid audio convert audio.webm
```

### Other tips {#other-tips}

[How to do noise reduction using ffmpeg and sox](http://www.zoharbabin.com/how-to-do-noise-reduction-using-ffmpeg-and-sox/) (skip steps 1 and 5)

## Static video {#static-video}

You may want a "static" (traditional mp4/webm) version of your video so that you can upload it to Facebook/YouTube/Twitter (and then link to the interactive version). You can make these with the [`liqvid render`](../cli/render) command:

```bash
liqvid render -a ./audio/audio.mp4 -u http://localhost:8080 -o out.mp4
```

For this you will need to have [ffmpeg](https://ffmpeg.org/download.html) installed. In case you have have issues installing it, [this guide](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg) may help.

## Thumbnails {#thumbnails}

Your video will be a lot easier to navigate if you have thumbnail previews on the scrubber bar. These can be generated with the [`liqvid thumbs`](../cli/thumbs) command:

```bash
liqvid thumbs -u http://localhost:8080
```

These are then passed to the [thumbs](/docs/reference/Player#thumbs) prop of Player.
