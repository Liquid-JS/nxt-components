import { ChangeDetectionStrategy, Component, forwardRef, OnInit, Provider, viewChild, output, input, computed, linkedSignal, signal } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { DateFilter, DateTimeDirective, PickerMode, PickerType, SelectMode } from '../../class/date-time.class'
import { DateTimeContainerComponent } from '../date-time-picker-container/date-time-picker-container.component'

/** @internal */
export const NXT_DATETIME_VALUE_ACCESSOR: Provider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateTimeInlineComponent),
    multi: true
}

@Component({
    selector: 'nxt-date-time-inline',
    templateUrl: './date-time-inline.component.html',
    styleUrls: ['./date-time-inline.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    providers: [NXT_DATETIME_VALUE_ACCESSOR],
    imports: [
        DateTimeContainerComponent
    ],
    host: {
        '[class.nxt-dt-inline]': 'true'
    }
})
export class DateTimeInlineComponent<T> extends DateTimeDirective<T> implements OnInit, ControlValueAccessor {

    private readonly container = viewChild(DateTimeContainerComponent)

    /**
     * Set the type of the dateTime picker
     *
     * -    `'both'` - show both calendar and timer
     * -    `'calendar'` - show only calendar
     * -    `'timer'` - show only timer
     */
    readonly pickerType = input<PickerType>('both')

    /** Whether the date time picker should be disabled */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _disabled = input<boolean>(false, { alias: 'disabled' })
    readonly disabled = linkedSignal({
        source: () => this._disabled(),
        computation: v => v
    })

    /**
     * The picker select mode
     *
     * -    `'single'` - select a single date
     * -    `'range'` - select a range [from, to]
     * -    `'rangeFrom'` - an open range with a fixed start date
     * -    `'rangeTo'` - an open range with a fixed end date
     */
    readonly selectMode = input<SelectMode>('single')

    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _valueInput = input<T | undefined>(undefined, { alias: 'value' })
    private readonly _value = linkedSignal({
        source: () => this._valueInput(),
        computation: v => v
    })
    readonly value = computed(() => {
        let value = this._value()
        value = this.dateTimeAdapter.deserialize(value)
        value = this.getValidDate(value)
        return value
    })

    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _valuesInput = input<Array<T | undefined> | undefined>(undefined, { alias: 'values' })
    private readonly _values = linkedSignal({
        source: () => this._valuesInput(),
        computation: v => v
    })
    readonly values = computed(() => {
        let values = this._values()
        if (values && values.length > 0) {
            values = values.map(v => {
                v = this.dateTimeAdapter.deserialize(v)
                v = this.getValidDate(v)
                return (v && this.dateTimeAdapter.clone(v))
            })
            return [...values]
        } else {
            return []
        }
    })

    /**
     * The date to show when picker opens
     *
     * Defaults to selected date (if available) or current date.
     */
    readonly _startAt = input<T | undefined, T | undefined>(undefined, {
        // eslint-disable-next-line @angular-eslint/no-input-rename
        alias: 'startAt',
        transform: date => this.getValidDate(
            this.dateTimeAdapter.deserialize(date)
        )
    })
    readonly startAt = computed(() => {
        const startAt = this._startAt()
        if (startAt) {
            return startAt
        }

        const selectMode = this.selectMode()

        if (selectMode === 'single') {
            return this.value()
        } else if (
            selectMode === 'range' ||
            selectMode === 'rangeFrom'
        ) {
            return this.values()?.[0]
        } else if (selectMode === 'rangeTo') {
            return this.values()?.[1]
        } else {
            return
        }
    })

    /** A function to filter available date & time */
    readonly dateTimeFilter = input<DateFilter<T>>()

    /** The minimum valid date */
    readonly min = input<T | undefined, T | undefined>(undefined, {
        transform: value => {
            value = this.dateTimeAdapter.deserialize(value)
            return this.getValidDate(value)
        }
    })

    /** The maximum valid date */
    readonly max = input<T | undefined, T | undefined>(undefined, {
        transform: value => {
            value = this.dateTimeAdapter.deserialize(value)
            return this.getValidDate(value)
        }
    })

    /**
     * Emits selected year in multi-year view
     *
     * This doesn't imply a change on the selected date.
     */
    readonly yearSelected = output<T>()

    /**
     * Emits selected month in year view
     *
     * This doesn't imply a change on the selected date.
     */
    readonly monthSelected = output<T>()

    readonly selected = linkedSignal({
        source: () => this.value(),
        computation: v => v
    })

    readonly selecteds = linkedSignal({
        source: () => this.values(),
        computation: v => v || []
    })

    readonly isOpen = signal(true).asReadonly()

    readonly pickerMode = signal<PickerMode>('inline').asReadonly()

    readonly isInSingleMode = computed(() => this.selectMode() === 'single')

    readonly isInRangeMode = computed(() => (
        this.selectMode() === 'range' ||
        this.selectMode() === 'rangeFrom' ||
        this.selectMode() === 'rangeTo'
    ))

    private onModelChange?: (date: T | T[]) => void
    private onModelTouched?: () => void

    ngOnInit() {
        const container = this.container()
        if (container)
            container.picker.set(this)
    }

    writeValue(value: any): void {
        value = value ?? undefined
        if (this.isInSingleMode()) {
            this._value.set(value)
            const container = this.container()
            if (container)
                container.pickerMoment = value
        } else {
            this._values.set(value)
            const container = this.container()
            if (container)
                container.pickerMoment = this.values()?.[
                    container.activeSelectedIndex()
                ]
        }
    }

    registerOnChange(fn: any): void {
        this.onModelChange = fn
    }

    registerOnTouched(fn: any): void {
        this.onModelTouched = fn
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled.set(isDisabled)
    }

    select(date: T[] | T): void {
        if (this.disabled()) {
            return
        }

        if (Array.isArray(date)) {
            this._values.set([...date])
        } else {
            this._value.set(date)
        }
        this.onModelChange?.(date)
        this.onModelTouched?.()
    }

    /**
     * Emits the selected year in multi-year view
     */
    selectYear(normalizedYear: T): void {
        this.yearSelected.emit(normalizedYear)
    }

    /**
     * Emits selected month in year view
     */
    selectMonth(normalizedMonth: T): void {
        this.monthSelected.emit(normalizedMonth)
    }
}
