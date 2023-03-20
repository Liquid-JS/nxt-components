# Angular JSON viewer

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-json-view.svg)](https://www.npmjs.com/package/nxt-json-view)
[![scope](https://img.shields.io/npm/v/nxt-json-view.svg)](https://www.npmjs.com/package/nxt-json-view)

An interactive JSON view component for Angular.

## Quick links

-   [Demo](https://liquid-js.github.io/nxt-components/demo/json-view)
-   [Getting started](https://liquid-js.github.io/nxt-components/demo/json-view/getting-started)
-   [API docs](https://liquid-js.github.io/nxt-components/nxt-json-view)

### Installing

```sh
npm install --save nxt-json-view
```

### Import JSON view module

```ts
import { JsonViewModule } from 'nxt-json-view'

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
    "name": "nxt-json-view",
    "url": "https://github.com/Liquid-JS/nxt-components/tree/master/packages/json-view",
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
<nxt-json-view [data]="data"></nxt-json-view>
```
