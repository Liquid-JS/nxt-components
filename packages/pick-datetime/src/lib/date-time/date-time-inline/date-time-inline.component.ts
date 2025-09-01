import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Inject, Input, OnInit, Output, Provider, ViewChild } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateTimeFormats, NXT_DATE_TIME_FORMATS } from '../../class/date-time-format.class'
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
    ]
})
export class DateTimeInlineComponent<T> extends DateTimeDirective<T> implements OnInit, ControlValueAccessor {

    @ViewChild(DateTimeContainerComponent, { static: true })
    private container?: DateTimeContainerComponent<T>

    private _pickerType: PickerType = 'both'
    /**
     * Set the type of the dateTime picker
     *
     * -    `'both'` - show both calendar and timer
     * -    `'calendar'` - show only calendar
     * -    `'timer'` - show only timer
     */
    @Input()
    get pickerType(): PickerType {
        return this._pickerType
    }

    set pickerType(val: PickerType) {
        if (val !== this._pickerType) {
            this._pickerType = val
        }
    }

    private _disabled = false
    /** Whether the date time picker should be disabled */
    @Input()
    override get disabled(): boolean {
        return !!this._disabled
    }

    override set disabled(value: boolean) {
        this._disabled = !!value
    }

    private _selectMode: SelectMode = 'single'
    /**
     * The picker select mode
     *
     * -    `'single'` - select a single date
     * -    `'range'` - select a range [from, to]
     * -    `'rangeFrom'` - an open range with a fixed start date
     * -    `'rangeTo'` - an open range with a fixed end date
     */
    @Input()
    get selectMode() {
        return this._selectMode
    }

    set selectMode(mode: SelectMode) {
        if (
            mode !== 'single' &&
            mode !== 'range' &&
            mode !== 'rangeFrom' &&
            mode !== 'rangeTo'
        ) {
            throw Error('DateTime Error: invalid selectMode value!')
        }

        this._selectMode = mode
    }

    private _startAt?: T
    /**
     * The date to show when picker opens
     *
     * Defaults to selected date (if available) or current date.
     */
    @Input()
    get startAt() {
        if (this._startAt) {
            return this._startAt
        }

        if (this.selectMode === 'single') {
            return this.value
        } else if (
            this.selectMode === 'range' ||
            this.selectMode === 'rangeFrom'
        ) {
            return this.values?.[0]
        } else if (this.selectMode === 'rangeTo') {
            return this.values?.[1]
        } else {
            return
        }
    }

    set startAt(date: T | undefined) {
        this._startAt = this.getValidDate(
            this.dateTimeAdapter.deserialize(date)
        )
    }

    private _dateTimeFilter?: DateFilter<T>
    /** A function to filter available date & time */
    @Input()
    get dateTimeFilter() {
        return this._dateTimeFilter
    }

    set dateTimeFilter(filter: DateFilter<T> | undefined) {
        this._dateTimeFilter = filter
    }

    private _min?: T
    /** The minimum valid date */
    @Input()
    set min(value: T | undefined) {
        this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value))
        this.changeDetector.markForCheck()
    }

    get min() {
        return this._min
    }

    private _max?: T
    /** The maximum valid date */
    @Input()
    set max(value: T | undefined) {
        this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value))
        this.changeDetector.markForCheck()
    }

    get max() {
        return this._max
    }

    private _value?: T
    @Input()
    get value() {
        return this._value
    }

    set value(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        value = this.getValidDate(value)
        this._value = value
        this.selected = value
    }

    private _values?: Array<T | undefined>
    @Input()
    get values() {
        return this._values
    }

    set values(values: Array<T | undefined> | undefined) {
        if (values && values.length > 0) {
            values = values.map(v => {
                v = this.dateTimeAdapter.deserialize(v)
                v = this.getValidDate(v)
                return (v && this.dateTimeAdapter.clone(v))
            })
            this._values = [...values]
            this.selecteds = [...values]
        } else {
            this._values = []
            this.selecteds = []
        }
    }

    /**
     * Emits selected year in multi-year view
     *
     * This doesn't imply a change on the selected date.
     */
    @Output()
    readonly yearSelected = new EventEmitter<T>()

    /**
     * Emits selected month in year view
     *
     * This doesn't imply a change on the selected date.
     */
    @Output()
    readonly monthSelected = new EventEmitter<T>()

    private _selected?: T
    get selected() {
        return this._selected
    }

    set selected(value: T | undefined) {
        this._selected = value
        this.changeDetector.markForCheck()
    }

    private _selecteds = new Array<T | undefined>()
    get selecteds() {
        return this._selecteds
    }

    set selecteds(values: Array<T | undefined>) {
        this._selecteds = values
        this.changeDetector.markForCheck()
    }

    get isOpen(): boolean {
        return true
    }

    get pickerMode(): PickerMode {
        return 'inline'
    }

    get isInSingleMode(): boolean {
        return this._selectMode === 'single'
    }

    get isInRangeMode(): boolean {
        return (
            this._selectMode === 'range' ||
            this._selectMode === 'rangeFrom' ||
            this._selectMode === 'rangeTo'
        )
    }

    /** @internal */
    @HostBinding('class.nxt-dt-inline')
    get inlineClass(): boolean {
        return true
    }

    private onModelChange?: (date: T | T[]) => void
    private onModelTouched?: () => void

    constructor(
        protected readonly changeDetector: ChangeDetectorRef,
        dateTimeAdapter: DateTimeAdapter<T>,
        @Inject(NXT_DATE_TIME_FORMATS)
        dateTimeFormats: DateTimeFormats
    ) {
        super(dateTimeAdapter, dateTimeFormats)
    }

    ngOnInit() {
        if (this.container)
            this.container.picker = this
    }

    writeValue(value: any): void {
        value = value ?? undefined
        if (this.isInSingleMode) {
            this.value = value
            if (this.container)
                this.container.pickerMoment = value
        } else {
            this.values = value
            if (this.container)
                this.container.pickerMoment = this._values?.[
                    this.container.activeSelectedIndex
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
        this.disabled = isDisabled
    }

    select(date: T[] | T): void {
        if (this.disabled) {
            return
        }

        if (Array.isArray(date)) {
            this.values = [...date]
        } else {
            this.value = date
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
