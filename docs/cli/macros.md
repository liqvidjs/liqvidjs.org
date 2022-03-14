---
title: Resource macros
---

The [`build`](./build.md) and [`serve`](./serve.md) commands apply a special macro syntax to `.html` files to help with loading external assets. If you are bundling script and style assets, you probably don't need this.

## `@json`

The `@json` command helps with loading JSON from a URL.

If you are not using the Liqvid recording system, you probably don't need this.

The syntax is
```html
<!-- @json "label" "file-path" -->
```

For example,
```html
<head>
  <!-- @json "recordings" "./recordings.json" -->
</head>
```
will produce

```html
<head>
  <link as="fetch" data-name="recordings" href="./recordings.json" rel="preload" type="application/json"/>
</head>
```

You can then use [`Utils.json`](../reference/Utils/json.md) to load this file and do things with it.

## `@script`

The `@script` command helps with loading different versions of a script depending on development/production mode.

The syntax is
```html
<!-- @script "liqvid" -->
```
In development mode, the above will be transformed to
```html
<script crossorigin src="https://unpkg.com/liqvid@2.0.10/dist/liqvid.js"></script>
```
but in production mode, it will become
```html
<script crossorigin integrity="sha384-lnZkn8yCOe5KCGPD+FXy6WijWbXyc/BXtPzisykkd0qtH1Q2NCz0IMrEWOCnvZbB" src="https://unpkg.com/liqvid@2.0.10/dist/liqvid.min.js"></script>
```

### Options

Scripts are configured in the [`build`](./build#scripts) and [`serve`](./serve#scripts) commands. The configuration can either be a string or an object. If a string, a script with that `src` will be used in both development and production. If an object is specified, the options are:

* `development?: string | () => string`  
Script [src](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) to use in development mode. If omitted, nothing will be output in development mode.
<!--  -->
If a function is specified, will render a `<script>` tag with the return value of the function as the *content* of the tag (i.e. no `src`).

* `production?: string | () => string`  
Script [src](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) to use in production mode. If omitted, nothing will be output in production mode.
<!--  -->
If a function is specified, will render a `<script>` tag with the return value of the function as the *content* of the tag (i.e. no `src`).

* `crossorigin?: boolean | string`  
[Crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-crossorigin) attribute. Can be either a boolean or a string.

* `defer?: boolean;`  
[Defer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer) attribute for the script

* `integrity?: string;`  
[Integrity](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-integrity) hash for the script. Only applied in production mode.

### Defaults
The default available scripts are
```json
{
 "host": "https://unpkg.com/@liqvid/host/lv-host.js",
  "liqvid": {
    "crossorigin": true,
    "development": "https://unpkg.com/liqvid@2.1.3/dist/liqvid.js",
    "production": "https://unpkg.com/liqvid@2.1.3/dist/liqvid.min.js",
    "integrity": "sha384-PF1Q6/ZHWULtuwe8ef5LK49usEuK4uCYtOM8l+u4Wu0hpZw5r0WDgDe9slKjNIwj"
  },
  "livereload": {},
  "polyfills": "https://unpkg.com/@liqvid/polyfills/dist/waapi.js",
  "rangetouch": {
    "crossorigin": true,
    "development": "https://cdn.rangetouch.com/2.0.1/rangetouch.js",
    "integrity": "sha384-ImWMbbJ1rSn1mn+2vsKm/wN6Vc7hPNB2VKN0lX3FAzGK+c7M2mD6ZZcwknuKlP7K",
    "production": "https://cdn.rangetouch.com/2.0.1/rangetouch.js"
  },
  "react": {
    "crossorigin": true,
    "development": "https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.development.js",
    "integrity": "sha384-YF0qbrX3+TW1Oyow2MYZpkEMq34QcYzbTJbSb9K0sdeykm4i4kTCSrsYeH8HX11w",
    "production": "https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js"
  },
  "react-dom": {
    "crossorigin": true,
    "development": "https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.development.js",
    "production": "https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js",
    "integrity": "sha384-DHlzXk2aXirrhqAkoaI5lzdgwWB07jUHz7DJGmS4Vlvt5U/ztRy+Yr8oSgQw5QaE"
  },
  "recording": {
    "crossorigin": true,
    "development": "https://unpkg.com/rp-recording@2.1.1/dist/rp-recording.js"
  }
}
```

## `@style`
The `@style` command helps with loading different versions of a stylesheet depending on development/production mode.

The syntax is
```html
<!-- @style "liqvid" -->
```
In development mode, the above will be transformed to
```html
<link href="https://unpkg.com/liqvid/dist/liqvid.css" rel="stylesheet" type="text/css"/>
```
but in production mode, it will become
```html
<link href="https://unpkg.com/liqvid/dist/liqvid.min.css" rel="stylesheet" type="text/css"/>
```

### Options

Styles are configured in the [`build`](./build#styles) and [`serve`](./serve#styles) commands. The configuration can either be a string or an object. If a string, a stylesheet with that `href` will be used in both development and production. If an object is specified, the options are:

* `development?: string`  
Stylesheet [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-href) to use in development mode. If omitted, nothing will be output in development mode.

* `production?: string`  
Stylesheet [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-href) to use in production mode. If omitted, nothing will be output in production mode.

### Defaults
The default available styles are
```json
{
  "liqvid": {
    "development": "https://unpkg.com/liqvid@2.1.3/dist/liqvid.css",
    "production": "https://unpkg.com/liqvid@2.1.3/dist/liqvid.min.css"
  }
}
```
