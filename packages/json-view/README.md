# nxt-json-view

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-json-view.svg)](https://www.npmjs.com/package/nxt-json-view)
[![scope](https://img.shields.io/npm/v/nxt-json-view.svg)](https://www.npmjs.com/package/nxt-json-view)

A JSON View component for Angular 13+ (an angular based JSON display component)

## Demo

<https://liquid-js.github.io/nxt-components/demo/json-view>

## installation

```sh
npm install nxt-json-view --save
```

## use

-   Install the dependency package：`nxt-json-view`

```sh
npm install nxt-json-view --save
```

-   Import in module `JsonViewModule`

```ts
import { JsonViewModule } from 'nxt-json-view';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        JsonViewModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

-   Prepare JSON data

```js
data = {
    "name": "nxt-json-view",
    "url": "https://github.com/killzoner/nxt-json-view",
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
};
```

-   Use on template page

```html
<nxt-json-view [data]="data"></nxt-json-view>
```

# Document

-   `data` - `Object` - Data
-   `levelOpen` - `number` - Initialize the number of layers to be expanded (initial value: 0)

# stand by

-   If the project is helpful to you, please click on the star,Thank you
-   If you have ideas, questions, and bugs about the project, welcome to discuss.
