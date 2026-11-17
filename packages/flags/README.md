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

### Import flags component

```ts
import { FlagComponent } from 'nxt-flags'

@Component({
    ...
    imports: [
        ...
        FlagComponent
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

### Load the flags from another folder or a CDN

The flags load from `assets/flags/` by default, relative to the base href. Provide another path, or a function from a
code to its URL, for the app or for the flags inside a component:

```ts
import { provideFlagsPath } from 'nxt-flags'

providers: [provideFlagsPath('/static/flags/')]
providers: [provideFlagsPath((code) => `https://cdn.example.com/flags/${code}.svg`)]
```

### Accessible name

A flag is decorative by default, hidden from assistive technologies, e.g. beside the country's name. Give it a `label`
where it stands on its own, and it's an image with that name:

```html
<nxt-flag country="br" label="Brazil"></nxt-flag>
```
