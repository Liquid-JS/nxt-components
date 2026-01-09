import { Directive, computed, input } from '@angular/core'
import { DateTimeComponent } from './date-time-picker/date-time-picker.component'

@Directive({
    selector: '[nxtDateTimeTrigger]',
    host: {
        '[class.nxt-dt-trigger-disabled]': 'disabled()',
        '(click)': 'handleClickOnHost($event)'
    }
})
export class DateTimeTriggerDirective<T> {
    readonly dtPicker = input<DateTimeComponent<T>>(undefined, { alias: 'nxtDateTimeTrigger' })

    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _disabled = input<boolean>(undefined, { alias: 'disabled' })
    readonly disabled = computed(() => this._disabled() ?? !!this.dtPicker()?.disabled())

    handleClickOnHost(event: Event): void {
        const dtPicker = this.dtPicker()
        if (dtPicker) {
            dtPicker.open()
            event.stopPropagation()
        }
    }
}
