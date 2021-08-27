This exports the bundled player controls as individual components. The following will reproduce the default layout of controls:

```jsx
import {Controls, Player} from "liqvid";

const controls = <>
  <Controls.PlayPause/>
  <Controls.Volume/>
  <Controls.TimeDisplay/>

  <div className="rp-controls-right">
    <Controls.Settings/>
    <Controls.FullScreen/>
  </div>
</>;

<Player controls={controls}>
{/* ... */}
</Player>
```

## `FullScreen` {#FullScreen}

Toggle fullscreen.<!--  See [fake fullscreen](/docs/guide/mobile#fake-fullscreen) for how to make this work on mobile. -->

## `PlayPause` {#PlayPause}

Play/pause the video.

## `Settings` {#Settings}

Controls playback rate.

## `TimeDisplay` {#TimeDisplay}

Displays the current time and total duration of the video.

## `Volume` {#Volume}

Adjust the volume.