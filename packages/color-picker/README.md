# Angular color picker

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-color-picker.svg)](https://www.npmjs.com/package/nxt-color-picker)
[![scope](https://img.shields.io/npm/v/nxt-color-picker.svg)](https://www.npmjs.com/package/nxt-color-picker)

A color picker widget for Angular with no dependencies.

## Quick links

-   [Demo](https://liquid-js.github.io/nxt-components/demo/color-picker)
-   [Getting started](https://liquid-js.github.io/nxt-components/demo/color-picker/getting-started)
-   [API docs](https://liquid-js.github.io/nxt-components/nxt-color-picker)

### Installing

```sh
npm install --save nxt-color-picker
```

### Import color picker module

```ts
import { ColorPickerModule } from 'nxt-color-picker'

@NgModule({
    ...
    imports: [
        ...
        ColorPickerModule
    ]
})
```

### Include it in HTML template

```html
<input [(nxtColor)]="color" 
    [style.background]="color"/>
```
