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

    /** Use the event to calculate origin when opening in dialog mode */
    readonly dialogOrigin = input(false)

    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _disabled = input<boolean>(undefined, { alias: 'disabled' })
    readonly disabled = computed(() => this._disabled() ?? !!this.dtPicker()?.disabled())

    handleClickOnHost(event: PointerEvent): void {
        const dtPicker = this.dtPicker()
        if (dtPicker) {
            dtPicker.open(this.dialogOrigin() ? event : undefined)
            event.stopPropagation()
        }
    }
}
