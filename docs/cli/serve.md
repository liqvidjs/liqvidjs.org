The `serve` command runs a local server to preview your video. The syntax is
```bash
liqvid serve
```

This will output a link to view your video, followed by Webpack output.
```
View your video at http://localhost:3000
```

Once you have [built](./build.md) your project, you can preview the production version at `http://localhost:3000/dist`.

To avoid passing command line options every time, you can create a `liqvid.config.ts` file. This should export an object with a `serve` key containing the options for this command. Here is an example:

```ts
// liqvid.config.ts
module.exports = {
  "serve": {
    /* default values */
    "build": "./dist",
    "static": "./static",
    "port": 3000,
    "livereloadPort": 0
  }
};
```

## Options

### `--build`, `-b` {#build}

Build directory. Defaults to `./dist`.

:::info
The URL to preview the production version of your video is *always* `http://localhost:3000/dist/` (or whatever your port is), regardless of what this is set to.
:::

### `--config`, `-c` {#config}

Path to a configuration file to load options from. Defaults to `./liqvid.config.ts`.

### `--livereload-port`, `-L` {#livereload-port}

Port to run LiveReload on. Defaults to `0` (dynamically selected port).

### `--port`, `-p` {#port}

Port to run the server on. Defaults to `3000`.

### `--static`, `-s` {#static}

Directory for static files. Defaults to `./static`.

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
liqvid serve \
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
liqvid serve \
  --styles.katex.crossorigin anonymous \
  --styles.katex.integrity "sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn" \
  --styles.katex.development "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.css" \
  --styles.katex.production "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
```
