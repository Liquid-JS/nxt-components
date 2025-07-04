import { coerceArray } from '@angular/cdk/coercion'
import { BlockScrollStrategy, Overlay, OverlayConfig, OverlayRef, PositionStrategy, ScrollStrategy } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, EventEmitter, Inject, InjectionToken, Input, NgZone, OnDestroy, OnInit, Optional, Output, ViewContainerRef, DOCUMENT } from '@angular/core'
import { merge, Subscription } from 'rxjs'
import { filter, take } from 'rxjs/operators'
import { DateTimeAdapter } from '../../class/date-time-adapter.class'
import { DateTimeFormats, NXT_DATE_TIME_FORMATS } from '../../class/date-time-format.class'
import { DateTimeDirective, PickerMode, PickerType } from '../../class/date-time.class'
import { DialogRef } from '../../class/dialog-ref.class'
import { DialogService } from '../../dialog/dialog.service'
import { DateTimeContainerComponent } from '../date-time-picker-container/date-time-picker-container.component'
import { DateTimeInputDirective } from '../date-time-picker-input.directive'

/**
 * Injection token that determines the scroll handling while the dtPicker is open.
 *
 * @internal
 */
export const NXT_DTPICKER_SCROLL_STRATEGY = new InjectionToken<
    () => ScrollStrategy
>('NXT_DTPICKER_SCROLL_STRATEGY')

/** @internal */
export function NXT_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(
    overlay: Overlay
): () => BlockScrollStrategy {
    const fn = () => overlay.scrollStrategies.block()
    return fn
}

/** @internal */
export const NXT_DTPICKER_SCROLL_STRATEGY_PROVIDER = {
    provide: NXT_DTPICKER_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: NXT_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY
}

@Component({
    selector: 'nxt-date-time',
    templateUrl: './date-time-picker.component.html',
    styleUrls: ['./date-time-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    standalone: false
})
export class DateTimeComponent<T> extends DateTimeDirective<T> implements OnInit, OnDestroy {
    /** Custom class for the picker backdrop */
    @Input()
    backdropClass?: string | string[]

    /** Custom class for the picker overlay pane */
    @Input()
    panelClass?: string | string[]

    private _startAt?: T
    /**
     * The date to show when picker opens
     *
     * Defaults to selected date (if available) or current date.
     */
    @Input()
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        if (this._startAt) {
            return this._startAt
        }

        if (this._dtInput) {
            if (this._dtInput.selectMode === 'single') {
                return this._dtInput.value
            } else if (
                this._dtInput.selectMode === 'range' ||
                this._dtInput.selectMode === 'rangeFrom'
            ) {
                return this._dtInput.values[0]
            } else if (this._dtInput.selectMode === 'rangeTo') {
                return this._dtInput.values[1]
            }
        }
        return
    }

    set startAt(date: T | undefined) {
        this._startAt = this.getValidDate(
            this.dateTimeAdapter.deserialize(date)
        )
    }

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
            if (this._dtInput) {
                this._dtInput.formatNativeInputValue()
            }
        }
    }

    private _pickerMode: PickerMode = 'popup'
    /**
     * The style the picker would open as
     *
     * -    `'popup'` - display picker attached to the trigger element
     * -    `'dialog'` - display picker as a dialog
     */
    @Input()
    get pickerMode() {
        return this._pickerMode
    }

    set pickerMode(mode: PickerMode) {
        if (mode === 'popup') {
            this._pickerMode = mode
        } else {
            this._pickerMode = 'dialog'
        }
    }

    private _disabled?: boolean
    /** Whether the date time picker should be disabled */
    @Input()
    override get disabled(): boolean {
        return this._disabled ?? !!this._dtInput?.disabled
    }

    override set disabled(value: boolean) {
        value = !!value
        if (value !== this._disabled) {
            this._disabled = value
            this.disabledChange.next(value)
        }
    }

    private _isOpen: boolean = false
    /** Whether the calendar is open */
    @Input()
    get isOpen(): boolean {
        return this._isOpen
    }

    set isOpen(val: boolean) {
        if (val)
            this.open()
        else
            this.close()
    }

    /**
     * The scroll strategy when the picker is open (see [CDK documentation](https://material.angular.io/cdk/overlay/overview#scroll-strategies))
     */
    @Input()
    scrollStrategy?: ScrollStrategy

    /**
     * Callback when the picker is opened
     */
    // eslint-disable-next-line @angular-eslint/no-output-rename
    @Output('open')
    readonly afterPickerOpened = new EventEmitter<void>()

    /**
     * Callback when the picker is closed
     */
    // eslint-disable-next-line @angular-eslint/no-output-rename
    @Output('close')
    readonly afterPickerClosed = new EventEmitter<void>()

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

    /**
     * Emits when picker open state changes
     */
    @Output()
    readonly isOpenChange = new EventEmitter<boolean>()

    /**
     * Emit when the selected value has been confirmed
     */
    readonly confirmSelectedChange = new EventEmitter<Array<T | undefined> | T>()

    /**
     * Emits when the date time picker is disabled
     */
    readonly disabledChange = new EventEmitter<boolean>()

    private pickerContainerPortal?: ComponentPortal<
        DateTimeContainerComponent<T>
    >
    private pickerContainer?: DateTimeContainerComponent<T>
    private popupRef?: OverlayRef
    private dialogRef?: DialogRef<DateTimeContainerComponent<T>>
    private dtInputSub?: Subscription
    private hidePickerStreamSub?: Subscription
    private confirmSelectedStreamSub?: Subscription
    private pickerOpenedStreamSub?: Subscription

    /** The element that was focused before the date time picker was isOpen */
    private focusedElementBeforeOpen?: HTMLElement

    private _dtInput?: DateTimeInputDirective<T>
    get dtInput() {
        return this._dtInput
    }

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
        return this._selecteds || []
    }

    set selecteds(values: Array<T | undefined>) {
        this._selecteds = values
        this.changeDetector.markForCheck()
    }

    /** The minimum selectable date */
    get min() {
        return (this._dtInput && this._dtInput.min)
    }

    /** The maximum selectable date */
    get max() {
        return (this._dtInput && this._dtInput.max)
    }

    get dateTimeFilter() {
        return this._dtInput?.dateTimeFilter
    }

    get selectMode() {
        return this._dtInput?.selectMode
    }

    get isInSingleMode() {
        return !!this._dtInput?.isInSingleMode
    }

    get isInRangeMode() {
        return !!this._dtInput?.isInRangeMode
    }

    constructor(
        private readonly overlay: Overlay,
        private readonly viewContainerRef: ViewContainerRef,
        private readonly dialogService: DialogService,
        private readonly ngZone: NgZone,
        protected readonly changeDetector: ChangeDetectorRef,
        dateTimeAdapter: DateTimeAdapter<T>,
        @Inject(NXT_DTPICKER_SCROLL_STRATEGY)
        private readonly defaultScrollStrategy: () => ScrollStrategy,
        @Inject(NXT_DATE_TIME_FORMATS)
        dateTimeFormats: DateTimeFormats,
        @Optional()
        @Inject(DOCUMENT)
        private readonly document?: Document
    ) {
        super(dateTimeAdapter, dateTimeFormats)
    }

    ngOnInit() { }

    ngOnDestroy(): void {
        this.close()
        this.dtInputSub?.unsubscribe()
        this.dtInputSub = undefined
        this.disabledChange.complete()

        if (this.popupRef) {
            this.popupRef.dispose()
        }
    }

    registerInput(input: DateTimeInputDirective<T>): void {
        if (this._dtInput) {
            throw Error(
                'A Nxt DateTimePicker can only be associated with a single input.'
            )
        }

        this._dtInput = input
        this.dtInputSub = this._dtInput.valueChange.subscribe((value) => {
            if (Array.isArray(value)) {
                this.selecteds = value
            } else {
                this.selected = value
            }
        })
    }

    open(): void {
        if (this._isOpen || this.disabled) {
            return
        }

        if (!this._dtInput) {
            throw Error(
                'Attempted to open an DateTimePicker with no associated input.'
            )
        }

        if (this.document) {
            this.focusedElementBeforeOpen = this.document.activeElement as HTMLElement
        }

        // reset the picker selected value
        if (this.isInSingleMode) {
            this.selected = this._dtInput.value
        } else if (this.isInRangeMode) {
            this.selecteds = this._dtInput.values
        }

        // when the picker is open , we make sure the picker's current selected time value
        // is the same as the _startAt time value.
        if (this.selected && this.pickerType !== 'calendar' && this._startAt) {
            this.selected = this.dateTimeAdapter.createDate(
                this.dateTimeAdapter.getYear(this.selected),
                this.dateTimeAdapter.getMonth(this.selected),
                this.dateTimeAdapter.getDate(this.selected),
                this.dateTimeAdapter.getHours(this._startAt),
                this.dateTimeAdapter.getMinutes(this._startAt),
                this.dateTimeAdapter.getSeconds(this._startAt)
            )
        }

        if (this.pickerMode === 'dialog')
            this.openAsDialog()
        else
            this.openAsPopup()

        if (this.pickerContainer)
            this.pickerContainer.picker = this

        // Listen to picker container's hidePickerStream
        this.hidePickerStreamSub = this.pickerContainer?.hidePickerStream.subscribe(
            () => {
                this.close()
            }
        )

        // Listen to picker container's confirmSelectedStream
        this.confirmSelectedStreamSub = this.pickerContainer?.confirmSelectedStream.subscribe(
            (event: any) => {
                this.confirmSelect(event)
            }
        )
    }

    /**
     * Selects the given date
     */
    select(date: T[] | T): void {
        if (Array.isArray(date)) {
            this.selecteds = [...date]
        } else {
            this.selected = date
        }

        /**
         * Cases in which automatically confirm the select when date or dates are selected:
         * 1) picker mode is NOT 'dialog'
         * 2) picker type is 'calendar' and selectMode is 'single'.
         * 3) picker type is 'calendar' and selectMode is 'range' and
         *    the 'selecteds' has 'from'(selecteds[0]) and 'to'(selecteds[1]) values.
         * 4) selectMode is 'rangeFrom' and selecteds[0] has value.
         * 5) selectMode is 'rangeTo' and selecteds[1] has value.
         */
        if (
            this.pickerMode !== 'dialog' &&
            this.pickerType === 'calendar' &&
            ((this.selectMode === 'single' && this.selected) ||
                (this.selectMode === 'rangeFrom' && this.selecteds[0]) ||
                (this.selectMode === 'rangeTo' && this.selecteds[1]) ||
                (this.selectMode === 'range' &&
                    this.selecteds[0] &&
                    this.selecteds[1]))
        ) {
            this.confirmSelect()
        }
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

    /**
     * Hide the picker
     */
    close(): void {
        if (!this._isOpen) {
            return
        }

        if (this.popupRef && this.popupRef.hasAttached()) {
            this.popupRef.detach()
        }

        if (
            this.pickerContainerPortal &&
            this.pickerContainerPortal.isAttached
        ) {
            this.pickerContainerPortal.detach()
        }

        this.hidePickerStreamSub?.unsubscribe()
        this.hidePickerStreamSub = undefined

        this.confirmSelectedStreamSub?.unsubscribe()
        this.confirmSelectedStreamSub = undefined

        this.pickerOpenedStreamSub?.unsubscribe()
        this.pickerOpenedStreamSub = undefined

        if (this.dialogRef) {
            this.dialogRef.close()
            this.dialogRef = undefined
        }

        const completeClose = () => {
            if (this._isOpen) {
                this._isOpen = false
                this.isOpenChange.emit(this._isOpen)
                this.afterPickerClosed.emit()
                this.focusedElementBeforeOpen = undefined
            }
        }

        if (
            this.focusedElementBeforeOpen &&
            typeof this.focusedElementBeforeOpen.focus === 'function'
        ) {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this.focusedElementBeforeOpen.focus()
            setTimeout(completeClose)
        } else {
            completeClose()
        }
    }

    /**
     * Confirm the selected value
     */
    confirmSelect(_event?: any): void {
        if (this.isInSingleMode) {
            const selected =
                this.selected || this.startAt || this.dateTimeAdapter.now()
            this.confirmSelectedChange.emit(selected)
        } else if (this.isInRangeMode) {
            this.confirmSelectedChange.emit(this.selecteds)
        }

        this.close()
        return
    }

    /**
     * Open the picker as a dialog
     */
    private openAsDialog(): void {
        this.dialogRef = this.dialogService.open(
            DateTimeContainerComponent,
            {
                autoFocus: false,
                backdropClass: [
                    'cdk-overlay-dark-backdrop',
                    ...this.backdropClass ? coerceArray(this.backdropClass) : []
                ],
                paneClass: [
                    'nxt-dt-dialog',
                    ...this.panelClass ? coerceArray(this.panelClass) : []
                ],
                viewContainerRef: this.viewContainerRef,
                scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy()
            }
        )
        this.pickerContainer = this.dialogRef.componentInstance

        this.dialogRef.afterOpen().subscribe(() => {
            this._isOpen = true
            this.isOpenChange.emit(this._isOpen)
            this.afterPickerOpened.emit()
        })
        this.dialogRef.afterClosed().subscribe(() => this.close())
    }

    /**
     * Open the picker as popup
     */
    private openAsPopup(): void {
        if (!this.pickerContainerPortal) {
            this.pickerContainerPortal = new ComponentPortal<
                DateTimeContainerComponent<T>
            >(DateTimeContainerComponent, this.viewContainerRef)
        }

        if (!this.popupRef) {
            this.createPopup()
        }

        if (!this.popupRef?.hasAttached()) {
            const componentRef: ComponentRef<
                DateTimeContainerComponent<T>
            > | undefined = this.popupRef?.attach(this.pickerContainerPortal)
            this.pickerContainer = componentRef?.instance

            // Update the position once the calendar has rendered.
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(() => {
                    this.popupRef?.updatePosition()
                })

            // emit open stream
            this.pickerOpenedStreamSub = this.pickerContainer?.pickerOpenedStream
                .pipe(take(1))
                .subscribe(() => {
                    this._isOpen = true
                    this.isOpenChange.emit(this._isOpen)
                    this.afterPickerOpened.emit()
                })
        }
    }

    private createPopup(): void {
        const overlayConfig = new OverlayConfig({
            positionStrategy: this.createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: [
                'cdk-overlay-transparent-backdrop',
                ...this.backdropClass ? coerceArray(this.backdropClass) : []
            ],
            scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy(),
            panelClass: [
                'nxt-dt-popup',
                ...this.panelClass ? coerceArray(this.panelClass) : []
            ]
        })

        this.popupRef = this.overlay.create(overlayConfig)

        merge(
            this.popupRef.backdropClick(),
            this.popupRef.detachments(),
            this.popupRef
                .keydownEvents()
                .pipe(
                    filter(
                        event =>
                            !!(event.code.toLowerCase() === 'escape' ||
                                (this._dtInput &&
                                    event.altKey &&
                                    event.code.toLowerCase() === 'arrowup'))
                    )
                )
        ).subscribe(() => this.close())
    }

    /**
     * Create the popup PositionStrategy.
     */
    private createPopupPositionStrategy(): PositionStrategy | undefined {
        if (this._dtInput)
            return this.overlay
                .position()
                .flexibleConnectedTo(this._dtInput.elementRef)
                .withTransformOriginOn('.nxt-dt-container')
                .withFlexibleDimensions(false)
                .withPush(false)
                .withPositions([
                    {
                        originX: 'start',
                        originY: 'bottom',
                        overlayX: 'start',
                        overlayY: 'top'
                    },
                    {
                        originX: 'start',
                        originY: 'top',
                        overlayX: 'start',
                        overlayY: 'bottom'
                    },
                    {
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top'
                    },
                    {
                        originX: 'end',
                        originY: 'top',
                        overlayX: 'end',
                        overlayY: 'bottom'
                    },
                    {
                        originX: 'start',
                        originY: 'top',
                        overlayX: 'start',
                        overlayY: 'top',
                        offsetY: -176
                    },
                    {
                        originX: 'start',
                        originY: 'top',
                        overlayX: 'start',
                        overlayY: 'top',
                        offsetY: -352
                    }
                ])
        return
    }
}
