# Angular date & time picker

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-pick-datetime.svg)](https://www.npmjs.com/package/nxt-pick-datetime)
[![scope](https://img.shields.io/npm/v/nxt-pick-datetime.svg)](https://www.npmjs.com/package/nxt-pick-datetime)

Simple responsive Angular date and time picker.

## Quick links

-   [Demo](https://liquid-js.github.io/nxt-components/demo/pick-datetime)
-   [Getting started](https://liquid-js.github.io/nxt-components/demo/pick-datetime/getting-started)
-   [Accessibility](https://liquid-js.github.io/nxt-components/demo/pick-datetime/accessibility)
-   [Validation](https://liquid-js.github.io/nxt-components/demo/pick-datetime/validation)
-   [Custom date adapter](https://liquid-js.github.io/nxt-components/demo/pick-datetime/custom-adapter)
-   [API docs](https://liquid-js.github.io/nxt-components/docs/nxt-pick-datetime)

### Installing

```sh
npm install --save nxt-pick-datetime
npm install --save moment   # if you want to use MomentDateTimeModule
```

### Import main module and DateTime adapter provider

The date & time picker was built to be date implementation agnostic. It comes with two modules providing date adapter implementation, or you can provide your own adapter by implementing `DateTimeAdapter`.

-   `NativeDateTimeModule` - support for native JavaScript Date object
-   `MomentDateTimeModule` - support for MomentJs

```ts
import { DateTimeModule } from 'nxt-pick-datetime'
import { NativeDateTimeModule } from 'nxt-pick-datetime/native-adapter'

@NgModule({
    ...
    imports: [
        ...
        DateTimeModule,
        NativeDateTimeModule
    ]
})
```

### Use it in a template

```html
<input [nxtDateTime]="picker"
    [nxtDateTimeTrigger]="picker"
    placeholder="Date and time">
<nxt-date-time #picker></nxt-date-time>
```
