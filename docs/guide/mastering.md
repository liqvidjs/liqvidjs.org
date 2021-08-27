---
title: Mastering
---

Once you are done recording, there are still a few steps required to get your ractive polished and cross-compatible. We call this the mastering or post-processing phase.

At the end we provide a checklist to go through when deploying a ractive to production.

## Audio {#audio}

### Joining audio {#joining-audio}

It can be convenient to record several audio segments separately. However, due to the <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#The_play()_method">Web Autoplay Policy</a>, you need to join them into a single audio file when you are finished. See <a href="https://trac.ffmpeg.org/wiki/Concatenate#demuxer">https://trac.ffmpeg.org/wiki/Concatenate#demuxer</a> for how to do this with ffmpeg.

### Fixing the browser recording {#fixing-the-browser-recording}
The audio file produced by the browser will not have the correct metadata for seeking. To fix it:

```bash
ffmpeg -i audio.webm -strict -2 audio-fixed.webm
mv audio-fixed.webm audio.webm
```

### Converting audio {#converting-audio}
It is necessary to provide audio in both webm and mp4 format. To convert the webm recording:

```bash
ffmpeg -i audio.webm audio.mp4
```

### Other tips {#other-tips}

[How to do noise reduction using ffmpeg and sox](http://www.zoharbabin.com/how-to-do-noise-reduction-using-ffmpeg-and-sox/) (skip steps 1 and 5)

## Static video {#static-video}

You may want a "static" (traditional mp4/webm) version of your ractive so that you can upload it to Facebook/YouTube/Twitter (and then link to the interactive version). You can make these with the [`rp-master render`](/docs/rp-master/render) command:

```bash
npx rp-master render -a ./audio/audio.mp4 http://localhost:8080 out.mp4
```

For this you will need to have [ffmpeg](https://ffmpeg.org/download.html) installed. In case you have have issues installing it, [this guide](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg) may help.

## Thumbnails {#thumbnails}

Your ractive will be a lot easier to navigate if you have thumbnail previews on the scrubber bar. These can be generated with the [`rp-master thumbs`](/docs/rp-master/thumbs) command:

```bash
npx rp-master thumbs http://localhost:8080
```

These are then passed to the [thumbs](/docs/reference/Player#thumbs) prop of Player.

## Mastering Checklist {#mastering-checklist}

1. <input type="checkbox"/> Compile in production mode

1. <input type="checkbox"/> Ensure <a href="/docs/guide/mobile#fat-fingers">fat-fingers</a> etc. for mobile

1. <input type="checkbox"/> Make sure that mouseUp events are appropriately <a href="/docs/guide/mobile#canvas-clicks">intercepted</a>.

1. <input type="checkbox"/> Join audio audio files into a single file.

1. <input type="checkbox"/> Fix webm file produced by browser.

1. <input type="checkbox"/> Ensure that audio files are available as both webm and mp4.

1. <input type="checkbox"/> Generate thumbnails and add highlights.

1. <input type="checkbox"/> Make sure there is CSS to load custom fonts etc.
1. <input type="checkbox"/> Make sure MEDIA_URL is set to production assets host
1. <input type="checkbox"/> Compress CSS
1. <input type="checkbox"/> Make sure the hosting page has Javascript/CSS for <a href="/docs/guide/mobile#fake-fullscreen">fake fullscreen</a>
1. <input type="checkbox"/> Make static recordings for social media/discoverability