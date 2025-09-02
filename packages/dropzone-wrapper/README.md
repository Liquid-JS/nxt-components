# Angular Dropzone wrapper

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-dropzone-wrapper.svg)](https://www.npmjs.com/package/nxt-dropzone-wrapper)
[![scope](https://img.shields.io/npm/v/nxt-dropzone-wrapper.svg)](https://www.npmjs.com/package/nxt-dropzone-wrapper)

This is an Angular wrapper library for the [Dropzone](http://www.dropzonejs.com/). For full documentation on Dropzone configuration options see [Dropzone documentation](https://docs.dropzone.dev/configuration/basics/configuration-options).

## Quick links

-   [Demo](https://liquid-js.github.io/nxt-components/demo/dropzone-wrapper)
-   [Getting started](https://liquid-js.github.io/nxt-components/demo/dropzone-wrapper/getting-started)
-   [API docs](https://liquid-js.github.io/nxt-components/nxt-dropzone-wrapper)
-   [Dropzone documentation](https://docs.dropzone.dev/configuration/basics/configuration-options)

### Installing

```sh
npm install --save nxt-dropzone-wrapper dropzone
```

### Import and configure dropzone wrapper

```ts
import { ApplicationConfig } from '@angular/core'
import { provideDropzoneConfig } from 'nxt-dropzone-wrapper'

export const appConfig: ApplicationConfig = {
    providers: [
        provideDropzoneConfig({
            // These are the global options and can also be set per instance; change url to your upload POST address:
            url: 'https://httpbin.org/post',
            acceptedFiles: 'image/*',
            createImageThumbnails: true
        })
    ]
}
```

### Include it in HTML template

This library provides two ways to create a Dropzone element, component for simple use cases and directive for more custom use cases.

#### Use dropzone component

```html
<nxt-dropzone [config]="config"
    message="Click or drag images here to upload"
    (error)="onUploadError($event)"
    (success)="onUploadSuccess($event)"></nxt-dropzone>
```

#### Use dropzone directive

When using only the directive you need to provide your own theming or import the default theme (`dropzone/dist/dropzone.css`).

```html
<div class="dropzone"
    [nxtDropzone]="config"
    (error)="onUploadError($event)"
    (success)="onUploadSuccess($event)"></div>
```
