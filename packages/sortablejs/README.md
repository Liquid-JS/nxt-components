# Angular Sortablejs directive

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-sortablejs.svg)](https://www.npmjs.com/package/nxt-sortablejs)
[![scope](https://img.shields.io/npm/v/nxt-sortablejs.svg)](https://www.npmjs.com/package/nxt-sortablejs)

This package provides Angular binding for [Storablejs](https://github.com/SortableJS/Sortable) which works with standard arrays as well as Angular `FormArray` objects.

## Quick links

-   [Demo](https://liquid-js.github.io/nxt-components/demo/sortablejs)
-   [Getting started](https://liquid-js.github.io/nxt-components/demo/sortablejs/getting-started)
-   [API docs](https://liquid-js.github.io/nxt-components/docs/nxt-sortablejs)

### Installing

```sh
npm install --save nxt-sortablejs sortablejs
```

### Import Sortablejs module

```ts
import { SortablejsModule } from 'nxt-sortablejs'

@NgModule({
    ...
    imports: [
        ...
        SortablejsModule
    ]
})
```

If you want to cofigure global Sortablejs options, include SortablejsModule.forRoot in your application.

```ts
import { SortablejsModule } from 'nxt-sortablejs'

@NgModule({
    ...
    imports: [
        ...
        SortablejsModule.forRoot({
            animation: 150
        })
    ]
})
```

### Use it in a template

```html
<ul [nxtSortablejs]="items">
    <li *ngFor="let item of items">{{ item }}</li>
</ul>
```
