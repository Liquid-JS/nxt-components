import { DestroyRef, Directive, ElementRef, forwardRef, inject } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { ColorPickerDirective } from './color-picker.directive'

/** A color, as forms compare them: without spaces and case, e.g. `rgb(255,0,0)` for `RGB(255, 0, 0)` */
const key = (value?: string | null) => (value || '').replace(/\s+/g, '').toLowerCase()

/**
 * Makes the color picker a form control, with `formControl`, `formControlName`, `ngModel` or signal forms'
 * `formField`, in place of binding `nxtColor` and `nxtColorChange`:
 *
 * ```html
 * <input nxtColor formControlName="color" outputFormat="hex" clearable />
 * ```
 *
 * The value is the color in the output format, or the CMYK color with `cmykEnabled`, and `null` without one, e.g.
 * once cleared; colors that only differ in spaces or case are the same value. An input shows the color, also when
 * the dialog changes it, but not while it's typed in. The control is touched when the dialog closes, or when the
 * input loses focus while the dialog is closed, and the picker follows its disabled state.
 */
@Directive({
    selector: '[nxtColor][formControl],[nxtColor][formControlName],[nxtColor][ngModel],[nxtColor][formField]',
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ColorPickerControlDirective), multi: true }],
    host: {
        '(blur)': 'handleBlur()'
    }
})
export class ColorPickerControlDirective implements ControlValueAccessor {
    private readonly picker = inject(ColorPickerDirective, { self: true })
    private readonly element: HTMLElement = inject(ElementRef).nativeElement

    /** The value last written by or given to the form */
    private value: string | null = null
    private onChange: (value: string | null) => void = () => { }
    private onTouched: () => void = () => { }

    constructor() {
        const subscriptions = [
            this.picker.nxtColorChange.subscribe(color => {
                if (!this.picker.cmykEnabled()) {
                    this.changed(color)
                }
            }),
            this.picker.cmykColorChange.subscribe(color => {
                if (this.picker.cmykEnabled()) {
                    this.changed(color)
                }
            }),
            this.picker.close.subscribe(() => this.onTouched())
        ]
        inject(DestroyRef).onDestroy(() => subscriptions.forEach(subscription => subscription.unsubscribe()))
    }

    writeValue(value?: string | null) {
        this.value = value || null
        this.picker.setColor(value || '')
        this.show(value || '')
    }

    registerOnChange(fn: (value: string | null) => void) {
        this.onChange = fn
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn
    }

    setDisabledState(disabled: boolean) {
        this.picker.setDisabled(disabled)
        if (this.isInput(this.element)) {
            this.element.disabled = disabled
        }
    }

    /** @internal */
    handleBlur() {
        if (!this.picker.expanded()) {
            this.show(this.value || '')
            this.onTouched()
        }
    }

    /** Gives the form a color, when it's another */
    private changed(color: string) {
        if (this.element.ownerDocument.activeElement != this.element) {
            this.show(color)
        }
        if (key(color) != key(this.value)) {
            this.value = color || null
            this.onChange(this.value)
        }
    }

    /** Shows a color in an input */
    private show(color: string) {
        if (this.isInput(this.element) && this.element.value != color) {
            this.element.value = color
        }
    }

    private isInput(element: HTMLElement): element is HTMLInputElement | HTMLTextAreaElement {
        return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement
    }
}
