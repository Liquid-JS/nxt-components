import { coerceBooleanProperty } from '@angular/cdk/coercion'
import { AfterContentInit, Directive, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Inject, Input, OnDestroy, OnInit, Output, Provider, Renderer2 } from '@angular/core'
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { DateTimeAdapter } from '../class/date-time-adapter.class'
import { DateTimeFormats, NXT_DATE_TIME_FORMATS } from '../class/date-time-format.class'
import { SelectMode } from '../class/date-time.class'
import { DateTimeComponent } from './date-time-picker/date-time-picker.component'

/** @internal */
export const NXT_DATETIME_VALUE_ACCESSOR: Provider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateTimeInputDirective),
    multi: true
}

/** @internal */
export const NXT_DATETIME_VALIDATORS: Provider = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateTimeInputDirective),
    multi: true
}

@Directive({
    selector: 'input[nxtDateTime]',
    exportAs: 'nxtDateTimeInput',
    providers: [
        NXT_DATETIME_VALUE_ACCESSOR,
        NXT_DATETIME_VALIDATORS
    ]
})
export class DateTimeInputDirective<T> implements OnInit, AfterContentInit, OnDestroy, ControlValueAccessor, Validator {
    /**
     * The date time picker that this input is associated with.
     */
    @Input('nxtDateTime')
    set dateTime(value: DateTimeComponent<T>) {
        this.registerDateTimePicker(value)
    }

    private _dateTimeFilter?: (date?: T) => boolean
    /**
     * A function to filter date time
     */
    @Input()
    set dateTimeFilter(filter: ((date?: T) => boolean) | undefined) {
        this._dateTimeFilter = filter
        this.validatorOnChange?.()
    }
    get dateTimeFilter() {
        return this._dateTimeFilter
    }

    /** Whether the date time picker's input is disabled. */
    @Input()
    private _disabled = false
    get disabled() {
        return this._disabled
    }

    set disabled(value: boolean) {
        const newValue = coerceBooleanProperty(value)
        const element = this.elmRef.nativeElement

        if (this._disabled !== newValue) {
            this._disabled = newValue
            this.disabledChange.emit(newValue)
        }

        if (newValue) {
            element.blur?.()
        }
    }

    /** The minimum valid date. */
    private _min?: T
    @Input()
    get min() {
        return this._min
    }

    set min(value: T | undefined) {
        this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value))
        this.validatorOnChange?.()
    }

    /** The maximum valid date. */
    private _max?: T
    @Input()
    get max() {
        return this._max
    }

    set max(value: T | undefined) {
        this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value))
        this.validatorOnChange?.()
    }

    /**
     * The picker's select mode
     */
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
            throw Error('DateTime Error: invalid selectMode value!')
        }

        this._selectMode = mode
    }

    /**
     * The character to separate the 'from' and 'to' in input value
     */
    @Input()
    rangeSeparator = '~'

    private _value?: T
    @Input()
    get value() {
        return this._value
    }

    set value(value: T | undefined) {
        value = this.dateTimeAdapter.deserialize(value)
        this.lastValueValid = !value || !!this.dateTimeAdapter.isValid(value)
        value = this.getValidDate(value)
        const oldDate = this._value
        this._value = value

        // set the input property 'value'
        this.formatNativeInputValue()

        // check if the input value changed
        if (!this.dateTimeAdapter.isEqual(oldDate, value)) {
            this.valueChange.emit(value)
        }
    }

    private _values: Array<T | undefined> = []
    @Input()
    get values() {
        return this._values
    }

    set values(values: Array<T | undefined>) {
        if (values && values.length > 0) {
            this._values = values.map(v => {
                v = this.dateTimeAdapter.deserialize(v)
                return this.getValidDate(v)
            })
            this.lastValueValid =
                (!this._values[0] ||
                    this.dateTimeAdapter.isValid(this._values[0])) &&
                (!this._values[1] ||
                    this.dateTimeAdapter.isValid(this._values[1]))
        } else {
            this._values = []
            this.lastValueValid = true
        }

        // set the input property 'value'
        this.formatNativeInputValue()

        this.valueChange.emit(this._values)
    }

    /**
     * Callback to invoke when `change` event is fired on this `<input>`
     */
    @Output()
    readonly dateTimeChange = new EventEmitter<{
        source: DateTimeInputDirective<T>
        value?: T | Array<T | undefined>
        input: HTMLInputElement
    }>()

    /**
     * Callback to invoke when an `input` event is fired on this `<input>`.
     */
    @Output()
    readonly dateTimeInput = new EventEmitter<{
        source: DateTimeInputDirective<T>
        value?: T | Array<T | undefined>
        input: HTMLInputElement
    }>()

    get elementRef() {
        return this.elmRef
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

    /** The date-time-picker that this input is associated with. */
    dtPicker?: DateTimeComponent<T>

    private dtPickerSub?: Subscription
    private localeSub?: Subscription

    private lastValueValid = true

    private onModelChange?: (date: T | Array<T | undefined> | undefined) => void
    private onModelTouched?: () => void
    private validatorOnChange?: () => void

    /** The form control validator for whether the input parses. */
    private readonly parseValidator: ValidatorFn = () => this.lastValueValid
        ? null
        : { dateTimeParse: { text: this.elmRef.nativeElement.value } }

    /** The form control validator for the min date. */
    private readonly minValidator: ValidatorFn = (
        control
    ) => {
        if (this.isInSingleMode) {
            const controlValue = this.getValidDate(
                this.dateTimeAdapter.deserialize(control.value)
            )
            return !this.min ||
                !controlValue ||
                this.dateTimeAdapter.compare(this.min, controlValue) <= 0
                ? null
                : { dateTimeMin: { min: this.min, actual: controlValue } }
        } else if (this.isInRangeMode && control.value) {
            const controlValueFrom = this.getValidDate(
                this.dateTimeAdapter.deserialize(control.value[0])
            )
            const controlValueTo = this.getValidDate(
                this.dateTimeAdapter.deserialize(control.value[1])
            )
            return !this.min ||
                !controlValueFrom ||
                !controlValueTo ||
                this.dateTimeAdapter.compare(this.min, controlValueFrom) <= 0
                ? null
                : {
                    dateTimeMin: {
                        min: this.min,
                        actual: [controlValueFrom, controlValueTo]
                    }
                }
        }
        return null
    }

    /** The form control validator for the max date. */
    private readonly maxValidator: ValidatorFn = (
        control
    ) => {
        if (this.isInSingleMode) {
            const controlValue = this.getValidDate(
                this.dateTimeAdapter.deserialize(control.value)
            )
            return !this.max ||
                !controlValue ||
                this.dateTimeAdapter.compare(this.max, controlValue) >= 0
                ? null
                : { dateTimeMax: { max: this.max, actual: controlValue } }
        } else if (this.isInRangeMode && control.value) {
            const controlValueFrom = this.getValidDate(
                this.dateTimeAdapter.deserialize(control.value[0])
            )
            const controlValueTo = this.getValidDate(
                this.dateTimeAdapter.deserialize(control.value[1])
            )
            return !this.max ||
                !controlValueFrom ||
                !controlValueTo ||
                this.dateTimeAdapter.compare(this.max, controlValueTo) >= 0
                ? null
                : {
                    dateTimeMax: {
                        max: this.max,
                        actual: [controlValueFrom, controlValueTo]
                    }
                }
        }
        return null
    }

    /** The form control validator for the date filter. */
    private readonly filterValidator: ValidatorFn = (
        control: AbstractControl
    ): ValidationErrors | null => {
        const controlValue = this.getValidDate(
            this.dateTimeAdapter.deserialize(control.value)
        )
        return !this._dateTimeFilter ||
            !controlValue ||
            this._dateTimeFilter(controlValue)
            ? null
            : { dateTimeFilter: true }
    }

    /**
     * The form control validator for the range.
     * Check whether the 'before' value is before the 'to' value
     */
    private readonly rangeValidator: ValidatorFn = (
        control
    ) => {
        if (this.isInSingleMode || !control.value) {
            return null
        }

        const controlValueFrom = this.getValidDate(
            this.dateTimeAdapter.deserialize(control.value[0])
        )
        const controlValueTo = this.getValidDate(
            this.dateTimeAdapter.deserialize(control.value[1])
        )

        return !controlValueFrom ||
            !controlValueTo ||
            this.dateTimeAdapter.compare(controlValueFrom, controlValueTo) <= 0
            ? null
            : { dateTimeRange: true }
    }

    /** The combined form control validator for this input. */
    private readonly validator = Validators.compose([
        this.parseValidator,
        this.minValidator,
        this.maxValidator,
        this.filterValidator,
        this.rangeValidator
    ])

    /** Emits when the value changes (either due to user input or programmatic change). */
    readonly valueChange = new EventEmitter<Array<T | undefined> | T | undefined>()

    /** Emits when the disabled state has changed */
    readonly disabledChange = new EventEmitter<boolean>()

    /** @internal */
    @HostBinding('attr.aria-haspopup')
    get inputAriaHaspopup(): boolean {
        return true
    }

    /** @internal */
    @HostBinding('attr.aria-owns')
    get inputAriaOwns() {
        return (this.dtPicker?.opened && this.dtPicker.id) || undefined
    }

    /** @internal */
    @HostBinding('attr.min')
    get minIso8601() {
        return this.min ? this.dateTimeAdapter.toIso8601(this.min) : undefined
    }

    /** @internal */
    @HostBinding('attr.max')
    get maxIso8601() {
        return this.max ? this.dateTimeAdapter.toIso8601(this.max) : undefined
    }

    /** @internal */
    @HostBinding('disabled')
    get inputDisabled(): boolean {
        return this.disabled
    }

    constructor(
        private readonly elmRef: ElementRef<HTMLInputElement>,
        private readonly renderer: Renderer2,
        private readonly dateTimeAdapter: DateTimeAdapter<T>,
        @Inject(NXT_DATE_TIME_FORMATS)
        private readonly dateTimeFormats: DateTimeFormats
    ) {
        this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(() => {
            this.value = this.value
        })
    }

    ngOnInit(): void {
        if (!this.dtPicker) {
            throw Error(
                'DateTimePicker: the picker input doesn\'t have any associated nxt-date-time component'
            )
        }
    }

    ngAfterContentInit(): void {
        this.dtPickerSub = this.dtPicker?.confirmSelectedChange.subscribe(
            (selecteds: T[] | T) => {
                if (Array.isArray(selecteds)) {
                    this.values = selecteds
                } else {
                    this.value = selecteds
                }

                this.onModelChange?.(selecteds)
                this.onModelTouched?.()
                this.dateTimeChange.emit({
                    source: this,
                    value: selecteds,
                    input: this.elmRef.nativeElement
                })
                this.dateTimeInput.emit({
                    source: this,
                    value: selecteds,
                    input: this.elmRef.nativeElement
                })
            }
        )
    }

    ngOnDestroy(): void {
        this.dtPickerSub?.unsubscribe()
        this.dtPickerSub = undefined
        this.localeSub?.unsubscribe()
        this.localeSub = undefined
        this.valueChange.complete()
        this.disabledChange.complete()
    }

    writeValue(value: any): void {
        value = value ?? undefined
        if (this.isInSingleMode) {
            this.value = value
        } else {
            this.values = value
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

    validate(c: AbstractControl) {
        return this.validator ? this.validator(c) : null
    }

    registerOnValidatorChange(fn: () => void): void {
        this.validatorOnChange = fn
    }

    /**
     * Open the picker when user hold alt + ArrowDown
     */
    @HostListener('keydown', ['$event'])
    handleKeydownOnHost(event: KeyboardEvent): void {
        if (event.altKey && event.code.toLowerCase() === 'ArrowDown') {
            this.dtPicker?.open()
            event.preventDefault()
        }
    }

    @HostListener('blur', ['$event'])
    handleBlurOnHost(_event: Event): void {
        this.onModelTouched?.()
    }

    @HostListener('input', ['$event'])
    handleInputOnHost(event: any): void {
        const value = event.target.value
        if (this._selectMode === 'single') {
            this.changeInputInSingleMode(value)
        } else if (this._selectMode === 'range') {
            this.changeInputInRangeMode(value)
        } else {
            this.changeInputInRangeFromToMode(value)
        }
    }

    @HostListener('change', ['$event'])
    handleChangeOnHost(_event: any): void {

        let v
        if (this.isInSingleMode) {
            v = this.value
        } else if (this.isInRangeMode) {
            v = this.values
        }

        this.dateTimeChange.emit({
            source: this,
            value: v,
            input: this.elmRef.nativeElement
        })
    }

    /**
     * Set the native input property 'value'
     */
    formatNativeInputValue(): void {
        if (this.isInSingleMode) {
            this.renderer.setProperty(
                this.elmRef.nativeElement,
                'value',
                this._value
                    ? this.dateTimeAdapter.format(
                        this._value,
                        this.dtPicker?.formatString
                    )
                    : ''
            )
        } else if (this.isInRangeMode) {
            if (this._values && this.values.length > 0) {
                const from = this._values[0]
                const to = this._values[1]

                const fromFormatted = from
                    ? this.dateTimeAdapter.format(
                        from,
                        this.dtPicker?.formatString
                    )
                    : ''
                const toFormatted = to
                    ? this.dateTimeAdapter.format(
                        to,
                        this.dtPicker?.formatString
                    )
                    : ''

                if (!fromFormatted && !toFormatted) {
                    this.renderer.setProperty(
                        this.elmRef.nativeElement,
                        'value',
                        undefined
                    )
                } else {
                    if (this._selectMode === 'range') {
                        this.renderer.setProperty(
                            this.elmRef.nativeElement,
                            'value',
                            fromFormatted +
                            ' ' +
                            this.rangeSeparator +
                            ' ' +
                            toFormatted
                        )
                    } else if (this._selectMode === 'rangeFrom') {
                        this.renderer.setProperty(
                            this.elmRef.nativeElement,
                            'value',
                            fromFormatted
                        )
                    } else if (this._selectMode === 'rangeTo') {
                        this.renderer.setProperty(
                            this.elmRef.nativeElement,
                            'value',
                            toFormatted
                        )
                    }
                }
            } else {
                this.renderer.setProperty(
                    this.elmRef.nativeElement,
                    'value',
                    ''
                )
            }
        }

        return
    }

    /**
     * Register the relationship between this input and its picker component
     */
    private registerDateTimePicker(picker: DateTimeComponent<T>) {
        if (picker) {
            this.dtPicker = picker
            this.dtPicker.registerInput(this)
        }
    }

    /**
     * Convert a given obj to a valid date object
     */
    private getValidDate(obj: any): T | undefined {
        return this.dateTimeAdapter.isDateInstance(obj) &&
            this.dateTimeAdapter.isValid(obj)
            ? obj
            : undefined
    }

    /**
     * Convert a time string to a date-time string
     * When pickerType is 'timer', the value in the picker's input is a time string.
     * The dateTimeAdapter parse fn could not parse a time string to a Date Object.
     * Therefore we need this fn to convert a time string to a date-time string.
     */
    private convertTimeStringToDateTimeString(
        timeString?: string,
        dateTime?: T
    ) {
        if (timeString) {
            const v = dateTime || this.dateTimeAdapter.now()
            const dateString = this.dateTimeAdapter.format(
                v,
                this.dateTimeFormats.datePickerInput
            )
            return dateString + ' ' + timeString
        }
        return undefined
    }

    /**
     * Handle input change in single mode
     */
    private changeInputInSingleMode(inputValue: string): void {
        let value: string | undefined = inputValue
        if (this.dtPicker?.pickerType === 'timer') {
            value = this.convertTimeStringToDateTimeString(value, this.value)
        }

        let result = this.dateTimeAdapter.parse(
            value,
            this.dateTimeFormats.parseInput
        )
        this.lastValueValid = !result || this.dateTimeAdapter.isValid(result)
        result = this.getValidDate(result)

        // if the newValue is the same as the oldValue, we intend to not fire the valueChange event
        // result equals to undefined means there is input event, but the input value is invalid
        if (!this.isSameValue(result, this._value) || result === undefined) {
            this._value = result
            this.valueChange.emit(result)
            this.onModelChange?.(result)
            this.dateTimeInput.emit({
                source: this,
                value: result,
                input: this.elmRef.nativeElement
            })
        }
    }

    /**
     * Handle input change in rangeFrom or rangeTo mode
     */
    private changeInputInRangeFromToMode(inputValue?: string): void {
        const originalValue =
            this._selectMode === 'rangeFrom'
                ? this._values[0]
                : this._values[1]

        if (this.dtPicker?.pickerType === 'timer') {
            inputValue = this.convertTimeStringToDateTimeString(
                inputValue,
                originalValue
            )
        }

        let result = this.dateTimeAdapter.parse(
            inputValue,
            this.dateTimeFormats.parseInput
        )
        this.lastValueValid = !result || this.dateTimeAdapter.isValid(result)
        result = this.getValidDate(result)

        // if the newValue is the same as the oldValue, we intend to not fire the valueChange event
        if (
            (this._selectMode === 'rangeFrom' &&
                this.isSameValue(result, this._values[0]) &&
                result) ||
            (this._selectMode === 'rangeTo' &&
                this.isSameValue(result, this._values[1]) &&
                result)
        ) {
            return
        }

        this._values =
            this._selectMode === 'rangeFrom'
                ? [result, this._values[1]]
                : [this._values[0], result]
        this.valueChange.emit(this._values)
        this.onModelChange?.(this._values)
        this.dateTimeInput.emit({
            source: this,
            value: this._values,
            input: this.elmRef.nativeElement
        })
    }

    /**
     * Handle input change in range mode
     */
    private changeInputInRangeMode(inputValue: string): void {
        const selecteds = inputValue.split(this.rangeSeparator)
        let fromString: string | undefined = selecteds[0]
        let toString: string | undefined = selecteds[1]

        if (this.dtPicker?.pickerType === 'timer') {
            fromString = this.convertTimeStringToDateTimeString(
                fromString,
                this.values[0]
            )
            toString = this.convertTimeStringToDateTimeString(
                toString,
                this.values[1]
            )
        }

        let from = this.dateTimeAdapter.parse(
            fromString,
            this.dateTimeFormats.parseInput
        )
        let to = this.dateTimeAdapter.parse(
            toString,
            this.dateTimeFormats.parseInput
        )
        this.lastValueValid =
            (!from || this.dateTimeAdapter.isValid(from)) &&
            (!to || this.dateTimeAdapter.isValid(to))
        from = this.getValidDate(from)
        to = this.getValidDate(to)

        // if the newValue is the same as the oldValue, we intend to not fire the valueChange event
        if (
            !this.isSameValue(from, this._values[0]) ||
            !this.isSameValue(to, this._values[1]) ||
            (!from && !to)
        ) {
            this._values = [from, to]
            this.valueChange.emit(this._values)
            this.onModelChange?.(this._values)
            this.dateTimeInput.emit({
                source: this,
                value: this._values,
                input: this.elmRef.nativeElement
            })
        }
    }

    /**
     * Check if the two value is the same
     */
    private isSameValue(first?: T, second?: T): boolean {
        if (first && second) {
            return this.dateTimeAdapter.compare(first, second) === 0
        }

        return first == second
    }
}
