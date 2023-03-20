# nxt-flags

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-flags.svg)](https://www.npmjs.com/package/nxt-flags)
[![scope](https://img.shields.io/npm/v/nxt-flags.svg)](https://www.npmjs.com/package/nxt-flags)

Angular component to show flags based on country ISO code.

## Quick links

-   [Demo](https://liquid-js.github.io/nxt-components/demo/flags)
-   [Getting started](https://liquid-js.github.io/nxt-components/demo/flags/getting-started)
-   [API docs](https://liquid-js.github.io/nxt-components/nxt-flags)

### Installing

```sh
npm install --save nxt-flags
```

### Import flags module

```ts
import { FlagsModule } from 'nxt-flags'

@NgModule({
    ...
    imports: [
        ...
        FlagsModule
    ]
})
```

### Add flags SVGs to Angular compilation

```json
{
    ...
    "assets": [
        ...,
        {
            "glob": "**/*",
            "input": "./node_modules/nxt-flags/assets/flags",
            "output": "./assets/flags"
        }
    ]
}
```

### Include it in HTML template

Use the tag `nxt-flag` with attribute `country="xx"` (where xx is the [ISO 3166-1-alpha-2 code](http://www.iso.org/iso/country_names_and_code_elements) of a country):

```html
<nxt-flag country="br"></nxt-flag>
```
