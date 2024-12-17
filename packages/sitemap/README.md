# Angular JSON viewer

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-sitemap.svg)](https://www.npmjs.com/package/nxt-sitemap)
[![scope](https://img.shields.io/npm/v/nxt-sitemap.svg)](https://www.npmjs.com/package/nxt-sitemap)

An interactive JSON view component for Angular.

## Quick links

-   [Demo](https://liquid-js.github.io/nxt-components/demo/sitemap)
-   [Getting started](https://liquid-js.github.io/nxt-components/demo/sitemap/getting-started)
-   [API docs](https://liquid-js.github.io/nxt-components/nxt-sitemap)

### Installing

```sh
npm install --save nxt-sitemap
```

### Import JSON view module

```ts
import { JsonViewModule } from 'nxt-sitemap'

@NgModule({
    ...
    imports: [
        ...
        JsonViewModule
    ]
})
```

### Prepare JSON data

```ts
data = {
    "name": "nxt-sitemap",
    "url": "https://github.com/Liquid-JS/nxt-components/tree/master/packages/sitemap",
    "string": "github",
    "number": 88,
    "boolean": true,
    "object": {
        "obj1": "obj1",
        "obj2": "obj2",
        "object": {
            "obj11": "obj11",
            "obj22": "obj22"
        },
        "emptyArray": []
    },
    "array": [
        1,
        2,
        3
    ],
    "date": new Date(),
    "null": null
}
```

### Use it in a template

```html
<nxt-sitemap [data]="data"></nxt-sitemap>
```
