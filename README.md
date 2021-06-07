# nxt-flags

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-flags.svg)](https://github.com/Liquid-JS/nxt-flags/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-flags.svg)](https://www.npmjs.com/package/nxt-flags)
[![scope](https://img.shields.io/npm/v/nxt-flags.svg)](https://www.npmjs.com/package/nxt-flags)

Angular component to show country flags.

[Demo](https://liquid-js.github.io/nxt-flags/)

[Docs](https://liquid-js.github.io/nxt-flags/docs/)

## Install

Install the package with NPM:

```bash
$ npm install nxt-flags
```

Import the module to app.module.ts:

```js
import { FlagsModule } from 'nxt-flags';

@NgModule({
    ...
    imports: [
        ...,
        FlagsModule,
        ...
    ],
    ...
})
```

Add this lines to `angular.json`:

```js
{
    ...
    "assets": [
        ...,
        {
            "glob": "**/*",
            "input": "./node_modules/nxt-flags/assets/flags",
            "output": "./assets/flags"
        }
    ].
    ...
}
```

## Usage

Use the tag `nxt-flag` with attribute `country="xx"` (where `xx` is the[ISO 3166-1-alpha-2 code](http://www.iso.org/iso/country_names_and_code_elements) of a country):

```html
<nxt-flag country="br"></nxt-flag>
```

## Optional attributes

| attribute | options                                                         | default  | description          |
| --------- | --------------------------------------------------------------- | -------- | -------------------- |
| size      | `'xxs'`, `'xs'`, `'s'`, `'m'`, `'l'`, `'xl'`, `'xxl'`, <number> | `48`     | sets the flag width  |
| format    | `'none'`, `'round'`, `'square'`                                 | `'none'` | sets the flag format |
