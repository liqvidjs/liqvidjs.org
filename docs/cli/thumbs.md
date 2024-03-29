The `thumbs` command produces sheets of thumbnail previews for the seeking bar. These are passed to the [thumbs](/docs/reference/Player#thumbs) prop.

[Example thumbs sheet](https://d2og9lpzrymesl.cloudfront.net/r/lv-tutorial/thumbs/1.png)

The syntax is:

```bash
liqvid thumbs
```

For example:

```bash
liqvid thumbs -H 800 -W 1280 -F png -o "./thumbs/%.png" -u http://localhost:8080/dist
```

To avoid passing command line options every time, you can create an `liqvid.config.ts` file. This should export an object with a `thumbs` key containing the options for this command. Here is an example:

```ts
// liqvid.config.ts
const os = require("os");

module.exports = {
  thumbs: {
    browserHeight: 800,
    browserWidth: 1280,
    concurrency: os.cpus().length,
    imageFormat: "png",
    // make sure the output pattern matches the imageFormat
    output: "./thumbs/%s.png",
    url: "http://localhost:8080/dist"
  }
};
```

You can specify a different location for the configuration file using the [`--config`](#config) option.

## What to render {#what-to-render}

### `--output`, `-o` {#output}

Pattern for output filenames. The pattern must contain `%s`. If the output directory does not exist, it will be created. Defaults to `./thumbs/%s.jpeg`.

### `--url`, `-u` {#url}

URL of video to capture thumbs from. Defaults to `http://localhost:3000/dist/`.

## General options {#general-options}

### `--browser-executable`, `-x` {#browser-executable}

Path to a Chrome/Chromium executable. If not specified and a suitable executable cannot be found, one will be downloaded during rendering.

### `--concurrency`, `-n` {#concurrency}

How many threads to use. Defaults to half of the available CPUs.

### `--config` {#config}

Path to a configuration file to load options from. Defaults to `./liqvid.config.ts`.

## Formatting {#formatting}

### `--browser-height`, `-H` {#browser-height}

Height of screenshot before resizing. If not specified, defaults to the value of `--height` (which itself defaults to 100).

### `--browser-width`, `-W` {#browser-width}

Width of screenshot before resizing. If not specified, defaults to the value of `--width` (which itself defaults to 160).

### `--cols`, `-c` {#cols}

The number of columns per sheet. Defaults to 5.

### `--frequency`, `-f` {#frequency}

How many **seconds** between screenshots. Defaults to 4.

### `--height`, `-h` {#height}

Height of each thumbnail in pixels. Defaults to 100.

### `--image-format`, `-F` {#image-format}

Image format for the thumbnails, either `jpeg` or `png`. Defaults to `jpeg`.

:::info
This applies to *both* the individual thumbnails and the sheets. At this time, it is not possible to configure these separately.
:::

### `--quality`, `-q` {#quality}

Quality for images. Only applies when `--image-format` is `jpeg`. Defaults to 80.

:::info
This applies to *both* the individual thumbnails and the sheets. At this time, it is not possible to configure these separately.
:::

### `--rows`, `-r` {#rows}

The number of rows per sheet. Defaults to 5.

### `--width`, `-w` {#width}

Width of each thumbnail in pixels. Defaults to 160.
