The `build` command creates an optimized production build of your video. The syntax is

```bash
liqvid build
```

This will bundle your project into `./dist`. You upload that directory to your production site. You can also preview it from `http://localhost:3000/dist/`.

## Options

### `--clean`, `-C` {#clean}

If this flag is set, will wipe old files from the build directory. Not recommended if you have audio, thumbnails, or transcripts in the build directory.

### `--out`, `-o` {#out}

Build directory. Defaults to `./dist`.

### `--static`, `-s` {#static}

Static directory. Defaults to `./static`.

## Resource magic

### `--scripts` {#scripts}

See [`@script` syntax](macros.md#script) for more details.

```ts
// liqvid.config.ts
const scripts = {
  "katex: {
    "crossorigin": "anonymous",
    "defer": true,
    "integrity": "sha384-pK1WpvzWVBQiP0/GjnvRxV4mOb0oxFuyRxJlk6vVw146n3egcN5C925NCP7a7BY8",
    "development": "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.js", 
    "production": "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.js"
  }
};

module.exports = {
  "build": {
    scripts
  },
  "serve": {
    scripts
  }
};
```

It is easiest to specify these in the configuration file. However, they can also be specified on the command line like so:

```bash
liqvid build \
  --scripts.katex.crossorigin anonymous \
  --scripts.katex.defer true \
  --scripts.katex.integrity "sha384-pK1WpvzWVBQiP0/GjnvRxV4mOb0oxFuyRxJlk6vVw146n3egcN5C925NCP7a7BY8" \
  --scripts.katex.development "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.js" \
  --scripts.katex.production "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.js"
```

### `--styles` {#styles}

See [`@style` syntax](macros.md#style) for more details.

```ts
// liqvid.config.ts
const styles = {
  "katex": {
    "crossorigin": "anonymous",
    "integrity": "sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn",
    "development": "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.css",
    "production": "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
  }
};

module.exports = {
  "build": {
    styles
  },
  "serve": {
    styles
  }
};
```

It is easiest to specify these in the configuration file. However, they can also be specified on the command line like so:

```bash
liqvid build \
  --styles.katex.crossorigin anonymous \
  --styles.katex.integrity "sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn" \
  --styles.katex.development "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.css" \
  --styles.katex.production "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
```
