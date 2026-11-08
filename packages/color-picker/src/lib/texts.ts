import { computed, inject, InjectionToken, Provider, Signal } from '@angular/core'
import { LocalizeFn } from '@angular/localize/init'

declare const $localize: LocalizeFn

/** The texts the color picker shows and announces to assistive technologies */
export interface ColorPickerTexts {
    /** Names the dialog */
    dialog: string
    /** Names the saturation and brightness area */
    saturationBrightness: string
    /** Announces the saturation and brightness, given both as percentages */
    saturationBrightnessValue: (saturation: string, brightness: string) => string
    hue: string
    brightness: string
    opacity: string
    saturation: string
    lightness: string
    red: string
    green: string
    blue: string
    cyan: string
    magenta: string
    yellow: string
    black: string
    /** Names the hex input */
    hex: string
    /** Names the button that shows the previous color format's inputs */
    previousFormat: string
    /** Names the button that shows the next color format's inputs */
    nextFormat: string
    /** The label of the preset colors, when `presetLabel` is `true` */
    presetColors: string
    /** Names a preset color, given the color */
    presetColor: (color: string) => string
    addColor: string
    removeColor: string
    cancel: string
    ok: string
    /** The button that clears the color, see `clearable` */
    clear: string
}

/** Texts, or a function that gives them, e.g. from signals, which the color picker follows */
export type ColorPickerTextsSource = Partial<ColorPickerTexts> | (() => Partial<ColorPickerTexts>)

/** The texts that replace the default ones, see `provideColorPickerTexts` */
export const NXT_COLOR_PICKER_TEXTS = new InjectionToken<ColorPickerTextsSource>('nxt-color-picker texts')

/**
 * Changes the color picker's texts, for the app or for the color pickers inside a component, e.g. for texts an app
 * keeps elsewhere or changes at run time; the others stay as they are.
 *
 * The defaults are English and translated with Angular's i18n, as `$localize` messages with ids like
 * `@@nxt-color-picker.button.ok`.
 *
 * ```ts
 * providers: [provideColorPickerTexts({ ok: 'Apply', presetColors: 'Brand colors' })]
 * ```
 */
export function provideColorPickerTexts(texts: ColorPickerTextsSource): Provider {
    return { provide: NXT_COLOR_PICKER_TEXTS, useValue: texts }
}

/** @internal */
export function defaultColorPickerTexts(): ColorPickerTexts {
    return {
        dialog: $localize`:@@nxt-color-picker.dialog.label:Color picker`,
        saturationBrightness: $localize`:@@nxt-color-picker.slider.saturation-brightness:Saturation and brightness`,
        saturationBrightnessValue: (saturation, brightness) =>
            $localize`:@@nxt-color-picker.slider.saturation-brightness-value:Saturation ${saturation}:saturation:, brightness ${brightness}:brightness:`,
        hue: $localize`:@@nxt-color-picker.slider.hue:Hue`,
        brightness: $localize`:@@nxt-color-picker.slider.value:Brightness`,
        opacity: $localize`:@@nxt-color-picker.slider.alpha:Opacity`,
        saturation: $localize`:@@nxt-color-picker.input.saturation:Saturation`,
        lightness: $localize`:@@nxt-color-picker.input.lightness:Lightness`,
        red: $localize`:@@nxt-color-picker.input.red:Red`,
        green: $localize`:@@nxt-color-picker.input.green:Green`,
        blue: $localize`:@@nxt-color-picker.input.blue:Blue`,
        cyan: $localize`:@@nxt-color-picker.input.cyan:Cyan`,
        magenta: $localize`:@@nxt-color-picker.input.magenta:Magenta`,
        yellow: $localize`:@@nxt-color-picker.input.yellow:Yellow`,
        black: $localize`:@@nxt-color-picker.input.black:Black`,
        hex: $localize`:@@nxt-color-picker.input.hex:Hex color`,
        previousFormat: $localize`:@@nxt-color-picker.button.previous-format:Previous color format`,
        nextFormat: $localize`:@@nxt-color-picker.button.next-format:Next color format`,
        presetColors: $localize`:@@nxt-color-picker.preset-colors:Preset colors`,
        presetColor: color => $localize`:@@nxt-color-picker.preset-color:Preset color ${color}:color:`,
        addColor: $localize`:@@nxt-color-picker.button.add-color:Add color to preset`,
        removeColor: $localize`:@@nxt-color-picker.button.remove-color:Remove Color`,
        cancel: $localize`:@@nxt-color-picker.button.cancel:Cancel`,
        ok: $localize`:@@nxt-color-picker.button.ok:OK`,
        clear: $localize`:@@nxt-color-picker.button.clear:Clear`
    }
}

/** @internal */
export function injectColorPickerTexts(): Signal<ColorPickerTexts> {
    const source = inject(NXT_COLOR_PICKER_TEXTS, { optional: true })
    const defaults = defaultColorPickerTexts()
    return computed(() => ({ ...defaults, ...(typeof source == 'function' ? source() : source) }))
}
