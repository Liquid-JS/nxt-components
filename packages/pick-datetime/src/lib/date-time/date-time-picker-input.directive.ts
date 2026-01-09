import { AfterContentInit, Directive, ElementRef, forwardRef, OnDestroy, OnInit, Provider, Renderer2, input, output, OutputRefSubscription, signal, computed, linkedSignal, effect, inject } from '@angular/core'
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms'
import { DateTimeAdapter } from '../class/date-time-adapter.class'
import { DateTimeFormats, NXT_DATE_TIME_FORMATS } from '../class/date-time-format.class'
import { DateFilter, SelectMode } from '../class/date-time.class'
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

export interface DateTimeInputEvent<T> {
    source: DateTimeInputDirective<T>
    value?: T | Array<T | undefined>
    input: HTMLInputElement
}

@Directive({
    selector: 'input[nxtDateTime]',
    exportAs: 'nxtDateTimeInput',
    providers: [
        NXT_DATETIME_VALUE_ACCESSOR,
        NXT_DATETIME_VALIDATORS
    ],
    host: {
        '[attr.aria-haspopup]': 'true',
        '[attr.aria-owns]': 'inputAriaOwns()',
        '[attr.min]': 'minIso8601()',
        '[attr.max]': 'maxIso8601()',
        '[disabled]': 'disabled()',
        '(keydown)': 'handleKeydownOnHost($event)',
        '(blur)': 'handleBlurOnHost($event)',
        '(input)': 'handleInputOnHost($event)',
        '(change)': 'handleChangeOnHost($event)'
    }
})
export class DateTimeInputDirective<T> implements OnInit, AfterContentInit, OnDestroy, ControlValueAccessor, Validator {
    private readonly elmRef = inject<ElementRef<HTMLInputElement>>(ElementRef)
    private readonly renderer = inject(Renderer2)
    private readonly dateTimeAdapter = inject<DateTimeAdapter<T>>(DateTimeAdapter)
    private readonly dateTimeFormats = inject<DateTimeFormats>(NXT_DATE_TIME_FORMATS)

    /**
     * The date & time picker this input is associated with
     */
    readonly dateTime = input<DateTimeComponent<T>>(undefined, { alias: 'nxtDateTime' })

    /**
     * A function to filter available date & time
     */
    readonly dateTimeFilter = input<DateFilter<T>>()

    /** Whether the date & time picker input is disabled */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _disabled = input<boolean>(false, { alias: 'disabled' })
    readonly disabled = linkedSignal({
        source: () => this._disabled(),
        computation: v => v
    })

    /** The minimum valid date */
    readonly min = input<T | undefined, T | undefined>(undefined, {
        transform: value => this.getValidDate(this.dateTimeAdapter.deserialize(value))
    })

    /** The maximum valid date */
    readonly max = input<T | undefined, T | undefined>(undefined, {
        transform: value => this.getValidDate(this.dateTimeAdapter.deserialize(value))
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

    /**
     * The character to separate the 'from' and 'to' in input value
     */
    readonly rangeSeparator = input<string>('~')

    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _valueInput = input<T>(undefined, { alias: 'value' })
    private readonly _value = linkedSignal({
        source: () => this._valueInput(),
        computation: v => v
    })

    private readonly valueValidity = computed(() => {
        let value = this._value()
        value = this.dateTimeAdapter.deserialize(value)
        const lastValueValid = !value || !!this.dateTimeAdapter.isValid(value)
        return {
            value,
            lastValueValid
        }
    }, {
        equal: (a, b) => a.lastValueValid == b.lastValueValid && this.dateTimeAdapter.isEqual(a.value, b.value)
    })

    private readonly parsedValue = linkedSignal(() => this.valueValidity().value)
    readonly value = this.parsedValue.asReadonly()

    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _valuesInput = input<Array<T | undefined>>(new Array<T | undefined>(), { alias: 'values' })
    private readonly _values = linkedSignal({
        source: () => this._valuesInput(),
        computation: v => v
    })

    private readonly valuesValidity = computed(() => {
        let values = this._values()

        let lastValueValid: boolean

        if (values && values.length > 0) {
            values = values.map(v => {
                v = this.dateTimeAdapter.deserialize(v)
                return this.getValidDate(v)
            })
            lastValueValid = ((!values[0] ||
                this.dateTimeAdapter.isValid(values[0])) &&
                (!values[1] ||
                    this.dateTimeAdapter.isValid(values[1]))
            )
        } else {
            values = []
            lastValueValid = true
        }

        return {
            values,
            lastValueValid
        }
    }, {
        equal: (a, b) => a.lastValueValid == b.lastValueValid && this.dateTimeAdapter.isEqual(a.values[0], b.values[0]) && this.dateTimeAdapter.isEqual(a.values[1], b.values[1])
    })

    private readonly parsedValues = linkedSignal(() => this.valuesValidity().values)
    readonly values = this.parsedValues.asReadonly()

    private readonly nativeElementValue = computed(() => {
        /**
         * Define the native input property 'value'
         */
        if (this.isInSingleMode()) {
            const value = this.value()
            return value
                ? this.dateTimeAdapter.format(
                    value,
                    this.dtPicker()?.formatString()
                )
                : undefined
        } else if (this.isInRangeMode()) {
            const values = this.values()
            if (values && values.length > 0) {
                const from = values[0]
                const to = values[1]

                const fromFormatted = from
                    ? this.dateTimeAdapter.format(
                        from,
                        this.dtPicker()?.formatString()
                    )
                    : ''
                const toFormatted = to
                    ? this.dateTimeAdapter.format(
                        to,
                        this.dtPicker()?.formatString()
                    )
                    : ''

                if (!fromFormatted && !toFormatted) {
                    return undefined
                } else {
                    if (this.selectMode() === 'range') {
                        return (
                            fromFormatted +
                            ' ' +
                            this.rangeSeparator() +
                            ' ' +
                            toFormatted
                        )
                    } else if (this.selectMode() === 'rangeFrom') {
                        return (
                            fromFormatted
                        )
                    } else if (this.selectMode() === 'rangeTo') {
                        return (
                            this.elmRef.nativeElement,
                            'value',
                            toFormatted
                        )
                    }
                }
            } else {
                return undefined
            }
        }

        return undefined
    })

    /**
     * Callback to invoke when `change` event is fired on this `<input>`
     */
    readonly dateTimeChange = output<DateTimeInputEvent<T>>()

    /**
     * Callback to invoke when an `input` event is fired on this `<input>`.
     */
    readonly dateTimeInput = output<DateTimeInputEvent<T>>()

    get elementRef() {
        return this.elmRef
    }

    readonly isInSingleMode = computed(() => this.selectMode() === 'single')

    readonly isInRangeMode = computed(() => {
        const selectMode = this.selectMode()
        return (
            selectMode === 'range' ||
            selectMode === 'rangeFrom' ||
            selectMode === 'rangeTo'
        )
    })

    /** The date-time-picker that this input is associated with */
    readonly dtPicker = signal<DateTimeComponent<T> | undefined>(undefined)

    private dtPickerSub?: OutputRefSubscription

    private readonly lastValueValid = linkedSignal({
        source: () => this.valueValidity().lastValueValid && this.valuesValidity().lastValueValid,
        computation: v => v
    })

    private onModelChange?: (date: T | Array<T | undefined> | undefined) => void
    private onModelTouched?: () => void
    private validatorOnChange?: () => void

    /** The form control validator for whether the input parses */
    private readonly parseValidator = computed<ValidatorFn>(() => {
        const lastValueValid = this.lastValueValid()
        return () => lastValueValid
            ? null
            : { dateTimeParse: { text: this.elmRef.nativeElement.value } }
    })

    /** The form control validator for the min date */
    private readonly minValidator = computed<ValidatorFn>(() => {
        const min = this.min()
        const isInSingleMode = this.isInSingleMode()
        const isInRangeMode = this.isInRangeMode()
        return (
            control
        ) => {
            if (isInSingleMode) {
                const controlValue = this.getValidDate(
                    this.dateTimeAdapter.deserialize(control.value)
                )
                return !min ||
                    !controlValue ||
                    this.dateTimeAdapter.compare(min, controlValue) <= 0
                    ? null
                    : { dateTimeMin: { min, actual: controlValue } }
            } else if (isInRangeMode && control.value) {
                const controlValueFrom = this.getValidDate(
                    this.dateTimeAdapter.deserialize(control.value[0])
                )
                const controlValueTo = this.getValidDate(
                    this.dateTimeAdapter.deserialize(control.value[1])
                )
                return !min ||
                    !controlValueFrom ||
                    !controlValueTo ||
                    this.dateTimeAdapter.compare(min, controlValueFrom) <= 0
                    ? null
                    : {
                        dateTimeMin: {
                            min,
                            actual: [controlValueFrom, controlValueTo]
                        }
                    }
            }
            return null
        }
    })

    /** The form control validator for the max date */
    private readonly maxValidator = computed<ValidatorFn>(() => {
        const max = this.max()
        const isInSingleMode = this.isInSingleMode()
        const isInRangeMode = this.isInRangeMode()
        return (
            control
        ) => {
            if (isInSingleMode) {
                const controlValue = this.getValidDate(
                    this.dateTimeAdapter.deserialize(control.value)
                )
                return !max ||
                    !controlValue ||
                    this.dateTimeAdapter.compare(max, controlValue) >= 0
                    ? null
                    : { dateTimeMax: { max, actual: controlValue } }
            } else if (isInRangeMode && control.value) {
                const controlValueFrom = this.getValidDate(
                    this.dateTimeAdapter.deserialize(control.value[0])
                )
                const controlValueTo = this.getValidDate(
                    this.dateTimeAdapter.deserialize(control.value[1])
                )
                return !max ||
                    !controlValueFrom ||
                    !controlValueTo ||
                    this.dateTimeAdapter.compare(max, controlValueTo) >= 0
                    ? null
                    : {
                        dateTimeMax: {
                            max,
                            actual: [controlValueFrom, controlValueTo]
                        }
                    }
            }
            return null
        }
    })

    /** The form control validator for the date filter */
    private readonly filterValidator = computed<ValidatorFn>(() => {
        const dateTimeFilter = this.dateTimeFilter()
        return (
            control: AbstractControl
        ): ValidationErrors | null => {
            const controlValue = this.getValidDate(
                this.dateTimeAdapter.deserialize(control.value)
            )
            return !dateTimeFilter ||
                !controlValue ||
                dateTimeFilter(controlValue)
                ? null
                : { dateTimeFilter: true }
        }
    })

    /**
     * The form control validator for the range.
     * Check whether the 'before' value is before the 'to' value
     */
    private readonly rangeValidator = computed<ValidatorFn>(() => {
        const isInSingleMode = this.isInSingleMode()
        return (
            control
        ) => {
            if (isInSingleMode || !control.value) {
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
    })

    /** The combined form control validator for this input */
    private readonly validator = computed(() => Validators.compose([
        this.parseValidator(),
        this.minValidator(),
        this.maxValidator(),
        this.filterValidator(),
        this.rangeValidator()
    ]))

    /** Emits when the value changes (either due to user input or programmatic change) */
    readonly valueChange = output<Array<T | undefined> | T | undefined>()

    /** Emits when the disabled state has changed */
    readonly disabledChange = output<boolean>()

    /** @internal */
    readonly inputAriaOwns = computed(() => (this.dtPicker()?.isOpen() && this.dtPicker()!.id) || undefined)

    /** @internal */
    readonly minIso8601 = computed(() => this.min() ? this.dateTimeAdapter.toIso8601(this.min()!) : undefined)

    /** @internal */
    readonly maxIso8601 = computed(() => this.max() ? this.dateTimeAdapter.toIso8601(this.max()!) : undefined)

    constructor() {
        let picker: DateTimeComponent<T> | undefined
        effect(() => {
            /**
             * Register the relationship between this input and its picker component
             */
            const _picker = this.dateTime()
            if (_picker && picker !== _picker) {
                picker = _picker
                this.dtPicker.set(picker)
                picker.registerInput(this)
            }
        })

        effect(() => {
            const value = this.nativeElementValue()
            if (value != undefined) {
                this.renderer.setProperty(
                    this.elmRef.nativeElement,
                    'value',
                    value
                )
            }
        })

        effect(() => {
            this.validator()
            this.validatorOnChange?.()
        })

        effect(() => {
            this.valueChange.emit(this.parsedValue())
        })

        effect(() => {
            this.valueChange.emit(this.parsedValues())
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
        this.dtPickerSub = this.dtPicker()?.confirmSelectedChange.subscribe(
            (selecteds) => {
                if (Array.isArray(selecteds)) {
                    this._values.set(selecteds)
                } else {
                    this._value.set(selecteds)
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
    }

    writeValue(value: any): void {
        value = value ?? undefined
        if (this.isInSingleMode()) {
            this._value.set(value)
        } else {
            this._values.set(value)
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

    validate(c: AbstractControl) {
        const validator = this.validator()
        return validator ? validator(c) : null
    }

    registerOnValidatorChange(fn: () => void): void {
        this.validatorOnChange = fn
    }

    /**
     * Open the picker when user hold alt + ArrowDown
     */
    handleKeydownOnHost(event: KeyboardEvent): void {
        if (event.altKey && event.code.toLowerCase() === 'arrowdown') {
            this.dtPicker()?.open()
            event.preventDefault()
        }
    }

    handleBlurOnHost(_event: Event): void {
        this.onModelTouched?.()
    }

    handleInputOnHost(event: any): void {
        const value = event.target.value
        if (this.selectMode() === 'single') {
            this.changeInputInSingleMode(value)
        } else if (this.selectMode() === 'range') {
            this.changeInputInRangeMode(value)
        } else {
            this.changeInputInRangeFromToMode(value)
        }
    }

    handleChangeOnHost(_event: any): void {
        let v
        if (this.isInSingleMode()) {
            v = this.value()
        } else if (this.isInRangeMode()) {
            v = this.values()
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
    /* formatNativeInputValue(): void {
        if (this.isInSingleMode()) {
            this.renderer.setProperty(
                this.elmRef.nativeElement,
                'value',
                this._value
                    ? this.dateTimeAdapter.format(
                        this._value,
                        this.dtPicker()?.formatString()
                    )
                    : ''
            )
        } else if (this.isInRangeMode()) {
            if (this._values && this.values.length > 0) {
                const from = this._values[0]
                const to = this._values[1]

                const fromFormatted = from
                    ? this.dateTimeAdapter.format(
                        from,
                        this.dtPicker()?.formatString()
                    )
                    : ''
                const toFormatted = to
                    ? this.dateTimeAdapter.format(
                        to,
                        this.dtPicker()?.formatString()
                    )
                    : ''

                if (!fromFormatted && !toFormatted) {
                    this.renderer.setProperty(
                        this.elmRef.nativeElement,
                        'value',
                        undefined
                    )
                } else {
                    if (this.selectMode() === 'range') {
                        this.renderer.setProperty(
                            this.elmRef.nativeElement,
                            'value',
                            fromFormatted +
                            ' ' +
                            this.rangeSeparator() +
                            ' ' +
                            toFormatted
                        )
                    } else if (this.selectMode() === 'rangeFrom') {
                        this.renderer.setProperty(
                            this.elmRef.nativeElement,
                            'value',
                            fromFormatted
                        )
                    } else if (this.selectMode() === 'rangeTo') {
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
    }*/

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
        if (this.dtPicker()?.pickerType() === 'timer') {
            value = this.convertTimeStringToDateTimeString(value, this.value())
        }

        let result = this.dateTimeAdapter.parse(
            value,
            this.dateTimeFormats.parseInput
        )
        this.lastValueValid.set(!result || this.dateTimeAdapter.isValid(result))
        result = this.getValidDate(result)

        // if the newValue is the same as the oldValue, we intend to not fire the valueChange event
        // result equals to undefined means there is input event, but the input value is invalid
        if (!this.isSameValue(result, this.value()) || result === undefined) {
            this.parsedValue.set(result)
            //this.valueChange.emit(result)
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
            this.selectMode() === 'rangeFrom'
                ? this.values()[0]
                : this.values()[1]

        if (this.dtPicker()?.pickerType() === 'timer') {
            inputValue = this.convertTimeStringToDateTimeString(
                inputValue,
                originalValue
            )
        }

        let result = this.dateTimeAdapter.parse(
            inputValue,
            this.dateTimeFormats.parseInput
        )
        this.lastValueValid.set(!result || this.dateTimeAdapter.isValid(result))
        result = this.getValidDate(result)

        // if the newValue is the same as the oldValue, we intend to not fire the valueChange event
        if (
            (this.selectMode() === 'rangeFrom' &&
                this.isSameValue(result, this.values()[0]) &&
                result) ||
            (this.selectMode() === 'rangeTo' &&
                this.isSameValue(result, this.values()[1]) &&
                result)
        ) {
            return
        }

        this.parsedValues.set(
            this.selectMode() === 'rangeFrom'
                ? [result, this.values()[1]]
                : [this.values()[0], result]
        )
        // this.valueChange.emit(this.values())
        this.onModelChange?.(this.parsedValues())
        this.dateTimeInput.emit({
            source: this,
            value: this.parsedValues(),
            input: this.elmRef.nativeElement
        })
    }

    /**
     * Handle input change in range mode
     */
    private changeInputInRangeMode(inputValue: string): void {
        const selecteds = inputValue.split(this.rangeSeparator())
        let fromString: string | undefined = selecteds[0]
        let toString: string | undefined = selecteds[1]

        if (this.dtPicker()?.pickerType() === 'timer') {
            fromString = this.convertTimeStringToDateTimeString(
                fromString,
                this.values()[0]
            )
            toString = this.convertTimeStringToDateTimeString(
                toString,
                this.values()[1]
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
        this.lastValueValid.set((!from || this.dateTimeAdapter.isValid(from)) &&
            (!to || this.dateTimeAdapter.isValid(to)))
        from = this.getValidDate(from)
        to = this.getValidDate(to)

        // if the newValue is the same as the oldValue, we intend to not fire the valueChange event
        if (
            !this.isSameValue(from, this.values()[0]) ||
            !this.isSameValue(to, this.values()[1]) ||
            (!from && !to)
        ) {
            this.parsedValues.set([from, to])
            //this.valueChange.emit(this.values())
            this.onModelChange?.(this.parsedValues())
            this.dateTimeInput.emit({
                source: this,
                value: this.parsedValues(),
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
