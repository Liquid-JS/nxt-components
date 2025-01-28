# Angular Highlight.js directives

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-highlightjs.svg)](https://www.npmjs.com/package/nxt-highlightjs)
[![scope](https://img.shields.io/npm/v/nxt-highlightjs.svg)](https://www.npmjs.com/package/nxt-highlightjs)

Angular code highlighting directives with optional line numbers and support for SSR.

## Quick links

-   [Demo](https://liquid-js.github.io/nxt-components/demo/highlightjs)
-   [Getting started](https://liquid-js.github.io/nxt-components/demo/highlightjs/getting-started)
-   [API docs](https://liquid-js.github.io/nxt-components/nxt-highlightjs)

### Installing

```sh
npm install --save nxt-highlightjs highlight.js
```

### Load and configure Highlight.js

```ts
import { ApplicationConfig } from '@angular/core'
import { provideHighlightOptions } from 'nxt-highlightjs'

export const appConfig: ApplicationConfig = {
    providers: [
        provideHighlightOptions({
            fullLibraryLoader: () => import('highlight.js')
        })
    ]
}
```

Above code loads the entire Highlight.js library. To improve performance you might want to load only the core library and neccesary languages.

```ts
import { ApplicationConfig } from '@angular/core'
import { provideHighlightOptions } from 'nxt-highlightjs'

export const appConfig: ApplicationConfig = {
    providers: [
        provideHighlightOptions({
            coreLibraryLoader: () => import('highlight.js/lib/core'),
            lineNumbersLoader: () => import('nxt-highlightjs/line-numbers'), // Optional, add line numbers if needed
            languages: {
                typescript: () => import('highlight.js/lib/languages/typescript'),
                css: () => import('highlight.js/lib/languages/css'),
                xml: () => import('highlight.js/lib/languages/xml')
            },
            themePath: 'path-to-theme.css' // Optional, useful for dynamic theme changes
        })
    ]
}
```

### Use it in a template

```html
<pre><code [nxtHighlight]="code"
    language="html"></code></pre>
```
