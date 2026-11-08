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

### Import color picker directive

```ts
import { ColorPickerDirective } from 'nxt-color-picker'

@Component({
    ...
    imports: [
        ...
        ColorPickerDirective
    ]
})
```

### Include it in HTML template

```html
<input [(nxtColor)]="color" 
    [style.background]="color"/>
```

### Forms

`ColorPickerControlDirective` makes the color picker a form control, with `formControl`, `formControlName`, `ngModel`
or signal forms' `formField`, in place of `[(nxtColor)]`:

```ts
import { ColorPickerControlDirective, ColorPickerDirective } from 'nxt-color-picker'

@Component({
    ...
    imports: [
        ...
        ColorPickerDirective,
        ColorPickerControlDirective
    ]
})
```

```html
<input nxtColor formControlName="color" outputFormat="hex" />
```

The value is the color in the output format, or the CMYK color with `cmykEnabled`, and `null` without one; colors
that only differ in spaces or case are the same value, so they don't change it. The input shows the color, also when
the dialog changes it, but not while it's typed in. The control is touched when the dialog closes, or when the input
loses focus while the dialog is closed, and the picker follows the form's disabled state.

### Clearing

With `clearable`, the user can remove the color: the dialog has a Clear button, and emptying the input clears it.
The color is then an empty string, and a form control's value `null`.

```html
<input nxtColor formControlName="color" clearable />
```

### Keyboard

The dialog opens when the field has focus, and the field keeps it, so typing a color and Tab work as usual. To use
the dialog by keyboard:

-   **Arrow Down** in the field opens the dialog and moves focus into it. Tab and Shift+Tab move between its
    controls and stay within it.
-   The saturation and brightness area and the hue and opacity sliders move with the **arrow keys** by 1%, by 10%
    with **Shift**, and with **Page Up** and **Page Down**; **Home** and **End** move a slider to its ends. In the
    area, Up and Down change the brightness.
-   **Enter** keeps the color and **Escape** goes back to the color the dialog opened with. Both close the dialog
    and return focus to the field.

The field has `aria-haspopup="dialog"` and `aria-expanded`, the dialog, its sliders, inputs and buttons and the
preset colors are named, and the sliders announce their values. The format arrows and the preset colors work with
Enter and Space.

### Texts

The texts the dialog shows and announces are English and translated with `@angular/localize`, as messages with ids
like `@@nxt-color-picker.button.ok`. `provideColorPickerTexts` changes them, for the app or for the color pickers in
a component; the others stay as they are. It takes the texts, or a function that gives them, e.g. from signals, which
the dialog follows, so an app can change them at run time:

```ts
import { provideColorPickerTexts } from 'nxt-color-picker'

providers: [provideColorPickerTexts({ ok: 'Apply', presetColors: 'Brand colors' })]
```

`ColorPickerTexts` lists them all, from the dialog's name to the Clear button.

### Theming

The dialog takes its colors and sizes from CSS custom properties, so it can match an app's design. Set them on
`nxt-color-picker`, or on an element the dialog is in, e.g. the overlay container:

```css
nxt-color-picker {
    --nxt-color-picker-background: #fff;
    --nxt-color-picker-text-color: #222b45;
    --nxt-color-picker-border: 1px solid #e4e9f2;
    --nxt-color-picker-border-radius: 0.25rem;
    --nxt-color-picker-input-background: #f7f9fc;
    --nxt-color-picker-input-border-color: #e4e9f2;
    --nxt-color-picker-input-focus-border-color: #3366ff;
}
```

| Property                                                                                                                                                                      | Styles                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `--nxt-color-picker-background`, `-text-color`, `-font-family`, `-font-size`                                                                                                  | the dialog                                            |
| `--nxt-color-picker-border`, `-border-radius`, `-shadow`                                                                                                                      | the dialog's frame                                    |
| `--nxt-color-picker-border-color`                                                                                                                                             | the separator and the arrow pointing at the field     |
| `--nxt-color-picker-focus-outline`, `-focus-outline-offset`, `-focus-outline-width`                                                                                           | the focused slider, preset or button                  |
| `--nxt-color-picker-arrow-color`                                                                                                                                              | the arrows that change the input format               |
| `--nxt-color-picker-input-background`, `-input-border-color`, `-input-border-width`, `-input-border-radius`, `-input-text-color`, `-input-placeholder-color`, `-input-height` | the dialog's inputs                                   |
| `--nxt-color-picker-input-hover-*`, `-input-focus-*`, `-input-disabled-*` (`background`, `border-color`, and `text-color` when disabled)                                      | the inputs under the pointer, with focus and disabled |
| `--nxt-color-picker-button-color`, `-button-background`, `-button-padding`, `-button-border`, `-button-border-radius`, `-button-font-size`, `-button-font-weight`             | the OK, Cancel and Clear buttons                      |

Without them the dialog looks as it always has.
