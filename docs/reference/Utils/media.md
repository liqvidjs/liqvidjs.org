Used internally by [Audio](../Audio.md) and [Video](../Video.md); you probably don't need them.

```tsx
import {Utils} from "liqvid";
const {awaitMediaCanPlay} = Utils.media;
```

## `awaitMediaCanPlay()` {#awaitMediaCanPlay}

```ts
awaitMediaCanPlay(media: HTMLMediaElement): Promise<Event>;
```

## `awaitMediaCanPlayThrough()` {#awaitMediaCanPlayThrough}
```ts
awaitMediaCanPlayThrough(media: HTMLMediaElement): Promise<Event>;
```
