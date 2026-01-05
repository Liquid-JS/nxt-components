import { Directive, HostListener, input, output } from '@angular/core'
import { TextEvent } from '../util/helpers'

/**
 * @internal
 */
@Directive({
    selector: '[nxtText]'
})
export class TextDirective {

    readonly rg = input<number>()
    readonly text = input<any>(undefined, { alias: 'nxtText' })

    readonly newValue = output<TextEvent>()

    @HostListener('input', ['$event'])
    @HostListener('change', ['$event'])
    inputChange(event: Event) {
        const value = (((event?.target as HTMLInputElement | null)?.['value'] || '') + '').trim()

        const rg = this.rg()
        if (rg == undefined) {
            this.newValue.emit(value)
        } else {
            const numeric = parseFloat(value)
            this.newValue.emit({ v: numeric, rg })
        }
    }
}
