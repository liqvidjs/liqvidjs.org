Syntax:

```tsx
<Video start={"my-video"}>
  <source src={`${MEDIA_URL}/video/video.webm`} type="video/webm"/>
  <source src={`${MEDIA_URL}/video/video.mp4`} type="video/mp4"/>
</Video>
```

## Web Autoplay Policy {#web-autoplay-policy}

Although it is possible to combine traditional videos with ractives using this component, the <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#The_play()_method">Web Autoplay Policy</a> makes it complicated. The recommended solution is to extract the audio from your video and merge it with your main audio file, then use the audio-less video file.