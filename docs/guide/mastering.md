---
title: Mastering
---

## Mastering Checklist {#mastering-checklist}

1. <input type="checkbox"/> Remove the <code>rp-recording</code> <code class="language-html">&lt;script&gt;</code> tag

1. <input type="checkbox"/> Ensure <a href="/docs/guide/authoring/#fat-fingers">fat-fingers</a> etc. for mobile

1. <input type="checkbox"/> Make sure that mouseUp events are appropriately <a href="/docs/reference/Player/#preventCanvasClick">intercepted</a>.

1. <input type="checkbox"/> Join audio audio files into a single file—this is necessary due to the <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#The_play()_method">Web Autoplay Policy</a>. See <a href="https://trac.ffmpeg.org/wiki/Concatenate#demuxer">https://trac.ffmpeg.org/wiki/Concatenate#demuxer</a>.

1. <input type="checkbox"/> Fix webm file produced by browser:
    <pre class="language-bash command-line" data-prompt="$"><code>ffmpeg -i audio.webm -strict -2 audio-fixed.webm
mv audio-fixed.webm audio.webm</code></pre>

1. <input type="checkbox"/> Ensure that audio files are available as both webm and mp4:
    <pre class="language-bash command-line" data-prompt="$"><code>ffmpeg -i audio.webm audio.mp4</code></pre>

1. <input type="checkbox"/> Generate thumbnails for the video using <a href="https://github.com/ysulyma/rp-thumb-capture">rp-thumb-capture</a>

1. <input type="checkbox"/> Make sure there is CSS to load custom fonts etc.
1. <input type="checkbox"/> Make sure MEDIA_URL is set to production assets host
1. <input type="checkbox"/> Compress Javascript
1. <input type="checkbox"/> Compress CSS
