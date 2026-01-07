import { coerceArray } from '@angular/cdk/coercion'
import { Overlay, OverlayConfig, OverlayRef, PositionStrategy, ScrollStrategy } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, Inject, InjectionToken, NgZone, OnDestroy, OnInit, Optional, ViewContainerRef, DOCUMENT, input, output, OutputRefSubscription, computed, signal, linkedSignal, effect } from '@angular/core'
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

@Component({
    selector: 'nxt-date-time',
    templateUrl: './date-time-picker.component.html',
    styleUrls: ['./date-time-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
})
export class DateTimeComponent<T> extends DateTimeDirective<T> implements OnInit, OnDestroy {
    /** Custom class for the picker backdrop */
    readonly backdropClass = input<string | string[]>()

    /** Custom class for the picker overlay pane */
    readonly panelClass = input<string | string[]>()

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
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        const startAt = this._startAt()
        if (startAt) {
            return startAt
        }

        const dtInput = this.dtInput()
        if (dtInput) {
            if (dtInput.selectMode === 'single') {
                return dtInput.value
            } else if (
                dtInput.selectMode === 'range' ||
                dtInput.selectMode === 'rangeFrom'
            ) {
                return dtInput.values[0]
            } else if (dtInput.selectMode === 'rangeTo') {
                return dtInput.values[1]
            }
        }
        return
    })

    /**
     * Set the type of the dateTime picker
     *
     * -    `'both'` - show both calendar and timer
     * -    `'calendar'` - show only calendar
     * -    `'timer'` - show only timer
     */
    readonly pickerType = input<PickerType>('both')

    /**
     * The style the picker would open as
     *
     * -    `'popup'` - display picker attached to the trigger element
     * -    `'dialog'` - display picker as a dialog
     */
    readonly pickerMode = input<PickerMode, PickerMode>('popup', {
        transform: mode => {
            if (mode === 'popup') {
                return mode
            } else {
                return 'dialog'
            }
        }
    })

    /** Whether the date time picker should be disabled */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _disabled = input<boolean | undefined>(undefined, { alias: 'disabled' })
    readonly disabled = linkedSignal({
        source: () => this._disabled(),
        computation: value => value ?? !!this.dtInput()?.disabled
    })

    /** Whether the calendar is open */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    readonly _isOpen = input(false, { alias: 'isOpen' })
    readonly isOpen = linkedSignal({
        source: () => this._isOpen(),
        computation: v => v
    })

    /**
     * The scroll strategy when the picker is open (see [CDK documentation](https://material.angular.io/cdk/overlay/overview#scroll-strategies))
     */
    readonly scrollStrategy = input<ScrollStrategy>()

    /**
     * Callback when the picker is opened
     */
    // eslint-disable-next-line @angular-eslint/no-output-rename
    readonly afterPickerOpened = output<void>({ alias: 'open' })

    /**
     * Callback when the picker is closed
     */
    // eslint-disable-next-line @angular-eslint/no-output-rename
    readonly afterPickerClosed = output<void>({ alias: 'close' })

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

    /**
     * Emits when picker open state changes
     */
    readonly isOpenChange = output<boolean>()

    /**
     * Emit when the selected value has been confirmed
     */
    readonly confirmSelectedChange = output<Array<T | undefined> | T>()

    /**
     * Emits when the date time picker is disabled
     */
    readonly disabledChange = output<boolean>()

    private pickerContainerPortal?: ComponentPortal<
        DateTimeContainerComponent<T>
    >
    private pickerContainer?: DateTimeContainerComponent<T>
    private popupRef?: OverlayRef
    private dialogRef?: DialogRef<DateTimeContainerComponent<T>>
    private dtInputSub?: OutputRefSubscription
    private hidePickerStreamSub?: Subscription
    private confirmSelectedStreamSub?: Subscription
    private pickerOpenedStreamSub?: Subscription

    /** The element that was focused before the date time picker was isOpen */
    private focusedElementBeforeOpen?: HTMLElement

    private readonly _dtInput = signal<DateTimeInputDirective<T> | undefined>(undefined)
    readonly dtInput = this._dtInput.asReadonly()

    private readonly valueChange = computed(() => this._dtInput()?.valueChange)

    readonly selected = signal<T | undefined>(undefined)

    readonly selecteds = signal(new Array<T | undefined>())

    /** The minimum selectable date */
    readonly min = computed(() => this.dtInput()?.min)

    /** The maximum selectable date */
    readonly max = computed(() => this.dtInput()?.max)

    readonly dateTimeFilter = computed(() => this.dtInput()?.dateTimeFilter)

    readonly selectMode = computed(() => this.dtInput()?.selectMode)

    readonly isInSingleMode = computed(() => !!this.dtInput()?.isInSingleMode)

    readonly isInRangeMode = computed(() => !!this.dtInput()?.isInRangeMode)

    constructor(
        private readonly overlay: Overlay,
        private readonly viewContainerRef: ViewContainerRef,
        private readonly dialogService: DialogService,
        private readonly ngZone: NgZone,
        protected readonly changeDetector: ChangeDetectorRef,
        dateTimeAdapter: DateTimeAdapter<T>,
        @Inject(NXT_DATE_TIME_FORMATS)
        dateTimeFormats: DateTimeFormats,
        @Optional()
        @Inject(NXT_DTPICKER_SCROLL_STRATEGY)
        private readonly defaultScrollStrategy: () => ScrollStrategy,
        @Optional()
        @Inject(DOCUMENT)
        private readonly document?: Document
    ) {
        super(dateTimeAdapter, dateTimeFormats)
        this.defaultScrollStrategy = this.defaultScrollStrategy ?? (() => overlay.scrollStrategies.block())

        effect((registerCleanup) => {
            const vc = this.valueChange()
            if (vc) {
                const sub = vc.subscribe((value) => {
                    if (Array.isArray(value)) {
                        this.selecteds.set(value)
                    } else {
                        this.selected.set(value)
                    }
                })
                registerCleanup(() => sub.unsubscribe())
            }
        })

        effect(() => {
            // TODO: neccesary?
            this.pickerType()
            this._dtInput()?.formatNativeInputValue()
        })

        let disabled: boolean | undefined
        effect(() => {
            const value = this.disabled()
            if (disabled != undefined) {
                this.disabledChange.emit(value)
            }
            disabled = value
        })

        effect(() => {
            if (this._isOpen()) {
                this.open()
            } else {
                this.close()
            }
        })
    }

    ngOnInit() { }

    ngOnDestroy(): void {
        this.close()
        this.dtInputSub?.unsubscribe()
        this.dtInputSub = undefined

        if (this.popupRef) {
            this.popupRef.dispose()
        }
    }

    registerInput(inputDirective: DateTimeInputDirective<T>): void {
        if (this._dtInput()) {
            throw Error(
                'A Nxt DateTimePicker can only be associated with a single input.'
            )
        }

        this._dtInput.set(inputDirective)
    }

    open(): void {
        if (this.isOpen() || this.disabled()) {
            return
        }

        if (!this._dtInput()) {
            throw Error(
                'Attempted to open an DateTimePicker with no associated input.'
            )
        }

        if (this.document) {
            this.focusedElementBeforeOpen = this.document.activeElement as HTMLElement
        }

        // reset the picker selected value
        if (this.isInSingleMode()) {
            this.selected.set(this._dtInput()!.value)
        } else if (this.isInRangeMode()) {
            this.selecteds.set(this._dtInput()!.values)
        }

        // when the picker is open , we make sure the picker's current selected time value
        // is the same as the _startAt time value.
        if (this.selected() && this.pickerType() !== 'calendar' && this._startAt()) {
            this.selected.set(this.dateTimeAdapter.createDate(
                this.dateTimeAdapter.getYear(this.selected()),
                this.dateTimeAdapter.getMonth(this.selected()),
                this.dateTimeAdapter.getDate(this.selected()),
                this.dateTimeAdapter.getHours(this._startAt()),
                this.dateTimeAdapter.getMinutes(this._startAt()),
                this.dateTimeAdapter.getSeconds(this._startAt())
            ))
        }

        if (this.pickerMode() === 'dialog')
            this.openAsDialog()
        else
            this.openAsPopup()

        if (this.pickerContainer)
            this.pickerContainer.picker.set(this)

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
            this.selecteds.set([...date])
        } else {
            this.selected.set(date)
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
            this.pickerMode() !== 'dialog' &&
            this.pickerType() === 'calendar' &&
            ((this.selectMode() === 'single' && this.selected()) ||
                (this.selectMode() === 'rangeFrom' && this.selecteds()[0]) ||
                (this.selectMode() === 'rangeTo' && this.selecteds()[1]) ||
                (this.selectMode() === 'range' &&
                    this.selecteds()[0] &&
                    this.selecteds()[1]))
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
        if (!this.isOpen()) {
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
            if (this.isOpen()) {
                this.isOpen.set(false)
                this.isOpenChange.emit(this.isOpen())
                this.afterPickerClosed.emit(undefined)
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
        if (this.isInSingleMode()) {
            const selected =
                this.selected() || this.startAt() || this.dateTimeAdapter.now()
            this.confirmSelectedChange.emit(selected)
        } else if (this.isInRangeMode()) {
            this.confirmSelectedChange.emit(this.selecteds())
        }

        this.close()
        return
    }

    /**
     * Open the picker as a dialog
     */
    private openAsDialog(): void {
        const backdropClass = this.backdropClass()
        const panelClass = this.panelClass()
        this.dialogRef = this.dialogService.open(
            DateTimeContainerComponent,
            {
                autoFocus: false,
                backdropClass: [
                    'cdk-overlay-dark-backdrop',
                    ...backdropClass ? coerceArray(backdropClass) : []
                ],
                paneClass: [
                    'nxt-dt-dialog',
                    ...panelClass ? coerceArray(panelClass) : []
                ],
                viewContainerRef: this.viewContainerRef,
                scrollStrategy: this.scrollStrategy() || this.defaultScrollStrategy()
            }
        )
        this.pickerContainer = this.dialogRef.componentInstance

        this.dialogRef.afterOpen().subscribe(() => {
            this.isOpen.set(true)
            this.isOpenChange.emit(this.isOpen())
            this.afterPickerOpened.emit(undefined)
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
                    this.isOpen.set(true)
                    this.isOpenChange.emit(this.isOpen())
                    this.afterPickerOpened.emit(undefined)
                })
        }
    }

    private createPopup(): void {
        const backdropClass = this.backdropClass()
        const panelClass = this.panelClass()
        const overlayConfig = new OverlayConfig({
            positionStrategy: this.createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: [
                'cdk-overlay-transparent-backdrop',
                ...backdropClass ? coerceArray(backdropClass) : []
            ],
            scrollStrategy: this.scrollStrategy() || this.defaultScrollStrategy(),
            panelClass: [
                'nxt-dt-popup',
                ...panelClass ? coerceArray(panelClass) : []
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
                                (this._dtInput() &&
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
        if (this._dtInput())
            return this.overlay
                .position()
                .flexibleConnectedTo(this._dtInput()!.elementRef)
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
