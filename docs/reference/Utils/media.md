Used internally by [Audio](../Audio.md) and [Video](../Video.md); you probably don't need them.

```tsx
import {Utils} from "liqvid";
const {awaitMediaCanPlay} = Utils.media;
```

## `awaitMediaCanPlay()` {#awaitMediaCanPlay}

Promisified version of [`canplay`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event) event.

```ts
awaitMediaCanPlay(media: HTMLMediaElement): Promise<Event>;
```

## `awaitMediaCanPlayThrough()` {#awaitMediaCanPlayThrough}

Promisified version of [`canplaythrough`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event) event.
```ts
awaitMediaCanPlayThrough(media: HTMLMediaElement): Promise<Event>;
```
