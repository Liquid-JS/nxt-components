# ngx-flags

[![GitHub license](https://img.shields.io/github/license/danilokorber/go-graphql-starter.svg)](https://github.com/danilokorber/ngx-flags/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/ngx-flags.svg)](https://www.npmjs.com/package/ngx-flags)
[![scope](https://img.shields.io/npm/v/ngx-flags.svg)](https://www.npmjs.com/package/ngx-flags)

Angular component to show country flags.
This package is still in beta. Feedback is very welcome.

## Install

Install the package with NPM:

```bash
$ npm install ngx-flags
```

Import the module to app.module.ts:

```js
import { NgxFlagsModule } from 'ngx-flags';

@NgModule({
  ...
  imports: [
    ...,
    NgxFlagsModule,
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
            "input": "./node_modules/ngx-flags/img/flags",
            "output": "./assets/flags"
        }
    ].
    ...
}
```

## Usage

Use the tag `flag` with attribute `country="xx"` (where `xx` is the
[ISO 3166-1-alpha-2 code](http://www.iso.org/iso/country_names_and_code_elements)
of a country):

```html
<flag country="br"></flag>
```

## Optional attributes

| attribute | options                                                         | default  | description                |
| --------- | --------------------------------------------------------------- | -------- | -------------------------- |
| size      | `'xxs'`, `'xs'`, `'s'`, `'m'`, `'l'`, `'xl'`, `'xxl'`, <number> | `48`     | sets the flag width        |
| format    | `'none'`, `'round'`, `'square'`                                 | `'none'` | sets the flag format       |
| class     | <string>                                                        |          | apply custom class to flag |
