Syntax:

```tsx
<Audio start={0}>
  <source src={`${MEDIA_URL}/audio/audio.webm`} type="audio/webm"/>
  <source src={`${MEDIA_URL}/audio/audio.mp4`} type="audio/mp4"/>
</Audio>
```

## Web Autoplay Policy {#web-autoplay-policy}

When recording, it can be helpful to record several segments individually. Then you can use several `<Audio>` elements with different `start` attributes. However, due to the <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#The_play()_method">Web Autoplay Policy</a>, the final recording must be joined into a single file. See https://trac.ffmpeg.org/wiki/Concatenate#demuxer
