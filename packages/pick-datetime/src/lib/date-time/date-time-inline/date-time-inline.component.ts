import { coerceBooleanProperty } from '@angular/cdk/coercion'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Inject, Input, OnInit, Optional, Output, ViewChild } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { OwlDateTimeFormats, OWL_DATE_TIME_FORMATS } from '../../class/date-time-format.class'
import { OwlDateTimeDirective, PickerMode, PickerType, SelectMode } from '../../class/date-time.class'
import { OwlDateTimeContainerComponent } from '../date-time-picker-container/date-time-picker-container.component'

export const OWL_DATETIME_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => OwlDateTimeInlineComponent),
    multi: true
}

@Component({
    selector: 'owl-date-time-inline',
    templateUrl: './date-time-inline.component.html',
    styleUrls: ['./date-time-inline.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    providers: [OWL_DATETIME_VALUE_ACCESSOR]
})
export class OwlDateTimeInlineComponent<T> extends OwlDateTimeDirective<T>
    implements OnInit, ControlValueAccessor {
    @ViewChild(OwlDateTimeContainerComponent, { static: true })
    container?: OwlDateTimeContainerComponent<T>

    /**
     * Set the type of the dateTime picker
     *      'both' -- show both calendar and timer
     *      'calendar' -- show only calendar
     *      'timer' -- show only timer
     */
    private _pickerType: PickerType = 'both'
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
    @Input()
    override get disabled(): boolean {
        return !!this._disabled
    }

    override set disabled(value: boolean) {
        this._disabled = coerceBooleanProperty(value)
    }

    private _selectMode: SelectMode = 'single'
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
            throw Error('OwlDateTime Error: invalid selectMode value!')
        }

        this._selectMode = mode
    }

    /** The date to open the calendar to initially. */
    private _startAt: T | null = null
    @Input()
    get startAt(): T | null {
        if (this._startAt) {
            return this._startAt
        }

        if (this.selectMode === 'single') {
            return this.value || null
        } else if (
            this.selectMode === 'range' ||
            this.selectMode === 'rangeFrom'
        ) {
            return this.values[0] || null
        } else if (this.selectMode === 'rangeTo') {
            return this.values[1] || null
        } else {
            return null
        }
    }

    set startAt(date: T | null) {
        this._startAt = this.getValidDate(
            this.dateTimeAdapter?.deserialize(date)
        )
    }

    private _dateTimeFilter?: (date: T | null) => boolean
    @Input('owlDateTimeFilter')
    get dateTimeFilter() {
        return this._dateTimeFilter
    }

    set dateTimeFilter(filter: ((date: T | null) => boolean) | undefined) {
        this._dateTimeFilter = filter
    }

    /** The minimum valid date. */
    private _min: T | null = null

    get minDateTime(): T | null {
        return this._min || null
    }

    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('min')
    set minDateTime(value: T | null) {
        this._min = this.getValidDate(this.dateTimeAdapter?.deserialize(value))
        this.changeDetector.markForCheck()
    }

    /** The maximum valid date. */
    private _max: T | null = null

    get maxDateTime(): T | null {
        return this._max || null
    }

    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('max')
    set maxDateTime(value: T | null) {
        this._max = this.getValidDate(this.dateTimeAdapter?.deserialize(value))
        this.changeDetector.markForCheck()
    }

    private _value: T | null = null
    @Input()
    get value() {
        return this._value
    }

    set value(value: T | null) {
        value = this.dateTimeAdapter?.deserialize(value) ?? null
        value = this.getValidDate(value)
        this._value = value
        this.selected = value
    }

    private _values: Array<T | null> = []
    @Input()
    get values() {
        return this._values
    }

    set values(values: Array<T | null>) {
        if (values && values.length > 0) {
            values = values.map(v => {
                v = this.dateTimeAdapter?.deserialize(v) ?? null
                v = this.getValidDate(v)
                return (v && this.dateTimeAdapter?.clone(v)) ?? null
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
     * This doesn't imply a change on the selected date.
     * */
    @Output()
    yearSelected = new EventEmitter<T>()

    /**
     * Emits selected month in year view
     * This doesn't imply a change on the selected date.
     * */
    @Output()
    monthSelected = new EventEmitter<T>()

    private _selected: T | null = null
    get selected() {
        return this._selected
    }

    set selected(value: T | null) {
        this._selected = value
        this.changeDetector.markForCheck()
    }

    private _selecteds: Array<T | null> = []
    get selecteds() {
        return this._selecteds
    }

    set selecteds(values: Array<T | null>) {
        this._selecteds = values
        this.changeDetector.markForCheck()
    }

    get opened(): boolean {
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

    @HostBinding('class.owl-dt-inline')
    get owlDTInlineClass(): boolean {
        return true
    }

    private onModelChange: (date: T | T[]) => void = () => { }
    private onModelTouched: () => void = () => { }

    constructor(
        protected changeDetector: ChangeDetectorRef,
        @Optional() @Inject(DateTimeAdapter<T>) dateTimeAdapter: DateTimeAdapter<T> | undefined,
        @Optional()
        @Inject(OWL_DATE_TIME_FORMATS)
        dateTimeFormats: OwlDateTimeFormats
    ) {
        super(dateTimeAdapter, dateTimeFormats)
    }

    public ngOnInit() {
        if (this.container)
            this.container.picker = this
    }

    public writeValue(value: any): void {
        if (this.isInSingleMode) {
            this.value = value
            if (this.container)
                this.container.pickerMoment = value
        } else {
            this.values = value
            if (this.container)
                this.container.pickerMoment = this._values[
                    this.container.activeSelectedIndex
                ]
        }
    }

    public registerOnChange(fn: any): void {
        this.onModelChange = fn
    }

    public registerOnTouched(fn: any): void {
        this.onModelTouched = fn
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled
    }

    public select(date: T[] | T): void {
        if (this.disabled) {
            return
        }

        if (Array.isArray(date)) {
            this.values = [...date]
        } else {
            this.value = date
        }
        this.onModelChange(date)
        this.onModelTouched()
    }

    /**
     * Emits the selected year in multi-year view
     * */
    public selectYear(normalizedYear: T): void {
        this.yearSelected.emit(normalizedYear)
    }

    /**
     * Emits selected month in year view
     * */
    public selectMonth(normalizedMonth: T): void {
        this.monthSelected.emit(normalizedMonth)
    }
}
