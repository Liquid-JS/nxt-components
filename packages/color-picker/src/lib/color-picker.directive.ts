import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { ApplicationRef, ComponentRef, Directive, ElementRef, EventEmitter, HostListener, Injector, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewContainerRef } from '@angular/core'
import { composedPath, DirectiveCallbacks } from '../util/helpers'
import { AlphaChannel, AlphaChannelEnum, ColorMode, DialogDisplay, DialogDisplayEnum, DialogPosition, DialogPositionEnum, InputChangeEvent, OutputFormat, OutputFormatEnum, SliderChangeEvent } from '../util/types'
import { ColorPickerComponent } from './color-picker/color-picker.component'

@Directive({
    selector: '[nxtColor]'
})
export class ColorPickerDirective implements OnChanges, OnDestroy {

    private dialog?: ColorPickerComponent

    private dialogCreated: boolean = false
    private ignoreChanges: boolean = false

    private cmpRef?: ComponentRef<ColorPickerComponent>

    private readonly _callbacks: DirectiveCallbacks = {
        stateChanged: (state: boolean) => {
            this.toggleChange.emit(state)

            if (state) {
                this.open.emit(this.nxtColor)
            } else {
                this.close.emit(this.nxtColor)
            }
        },
        cmykChanged: (value: string, ignore: boolean = true) => {
            this.ignoreChanges = ignore

            this.cmykColorChange.emit(value)
        },
        colorChanged: (value: string, ignore: boolean = true) => {
            this.ignoreChanges = ignore

            this.nxtColorChange.emit(value)
        },
        colorSelectCanceled: () => {
            this.colorSelectCancel.emit()
        },
        colorSelected: (value: string) => {
            this.colorSelect.emit(value)
        },
        inputChanged: (event: InputChangeEvent) => {
            this.inputChange.emit(event)
        },
        sliderDragStart: (event: SliderChangeEvent) => {
            this.sliderDragStart.emit(event)
        },
        sliderChanged: (event: SliderChangeEvent) => {
            this.sliderChange.emit(event)
        },
        sliderDragEnd: (event: SliderChangeEvent) => {
            this.sliderDragEnd.emit(event)
        },
        presetColorsChanged: (value: string[]) => {
            this.presetColorsChange.emit(value)
        }
    }
    private overlayRef?: OverlayRef

    private get resIgnoredElements() {
        const ign = Array.isArray(this.ignoredElements) ? this.ignoredElements : [this.ignoredElements]
        return ign.filter(el => !!el)
    }

    /** The color to show in the color picker dialog */
    @Input() nxtColor?: string

    /** Use this option to set color picker dialog width */
    @Input() width: string = '230px'
    /** Use this option to force color picker dialog height */
    @Input() height: string = 'auto'

    /** Sets the default open / close state of the color picker */
    @Input() toggle: boolean = false
    /** Disables opening of the color picker dialog via toggle */
    @Input() disabled: boolean = false

    /** Dialog color mode */
    @Input() mode: ColorMode = 'color'

    /** Enables CMYK input format and color change event */
    @Input() cmykEnabled: boolean = false

    /** Output color format */
    @Input() outputFormat: OutputFormat = OutputFormatEnum.auto
    /** Alpha channel mode */
    @Input() alphaChannel: AlphaChannel = AlphaChannelEnum.enabled
    /** Used when the color is not well-formed or is undefined */
    @Input() fallbackColor?: string

    /** Dialog position */
    @Input() position: DialogPosition = DialogPositionEnum.right
    /** Dialog offset percentage relative to the directive element */
    @Input() positionOffset: number = 0

    /**
     * Show label for preset colors
     *
     * If string is given, it overrides the default label.
     */
    @Input() presetLabel: boolean | string = true
    /** Array of preset colors to show in the color picker dialog */
    @Input() presetColors?: string[]

    /** Disables / hides the color input field from the dialog */
    @Input() disableInput: boolean = false

    /** Dialog positioning mode */
    @Input() dialogDisplay: DialogDisplay = DialogDisplayEnum.popup

    /** Array of HTML elements that will be ignored when clicked */
    @Input() ignoredElements?: any[]

    /** Save currently selected color when user clicks outside */
    @Input() saveClickOutside: boolean = true
    /** Close the color picker dialog when user clicks outside */
    @Input() closeClickOutside: boolean = true

    /** Show an OK / Apply button which saves the color */
    @Input() okButton: boolean = false

    /** Show a Cancel / Reset button which resets the color */
    @Input() cancelButton: boolean = false

    /** Show buttons to add / remove preset colors */
    @Input() presetColorsEditable: boolean = false

    /** Use this option to set the max colors allowed in presets */
    @Input() maxPresetColors?: number

    /**
     * Create dialog component in the root view container
     *
     * Note: The root component needs to have public viewContainerRef.
     */
    @Input() useRootViewContainer: boolean = false

    /** Current color value, emit when dialog is isOpen */
    @Output() open = new EventEmitter<string>(true)
    /** Current color value, emit when dialog is closed */
    @Output() close = new EventEmitter<string>(true)

    /** Input name and its value, emit when user changes color through inputs */
    @Output() inputChange = new EventEmitter<InputChangeEvent>(true)

    /** Status of the dialog, emit when dialog is isOpen / closed */
    @Output() toggleChange = new EventEmitter<boolean>(true)

    /** Slider name and current color, emit when slider dragging starts */
    @Output() sliderDragStart = new EventEmitter<SliderChangeEvent>(true)
    /** Slider name and its value, emit when user changes color through slider */
    @Output() sliderChange = new EventEmitter<SliderChangeEvent>(true)
    /** Slider name and current color, emit when slider dragging ends */
    @Output() sliderDragEnd = new EventEmitter<SliderChangeEvent>(true)

    /** Color select canceled, emit when Cancel button is pressed */
    @Output() colorSelect = new EventEmitter<string>(true)
    /** Selected color value, emit when OK button pressed or user clicks outside (if saveClickOutside is true) */
    @Output() colorSelectCancel = new EventEmitter<void>(true)
    /** Changed color value, emit when color changes */
    @Output() nxtColorChange = new EventEmitter<string>(false)

    /** Outputs the color as CMYK string if CMYK is enabled */
    @Output() cmykColorChange = new EventEmitter<string>(true)

    /** Preset colors, emit when preset color is added / removed */
    @Output() presetColorsChange = new EventEmitter<string[]>(true)

    /** @internal */
    constructor(
        private injector: Injector,
        private appRef: ApplicationRef,
        private vcRef: ViewContainerRef,
        private elRef: ElementRef,
        private overlay: Overlay
    ) { }

    /** @internal */
    @HostListener('focus', ['$event'])
    @HostListener('click', ['$event'])
    handleOpen(event: Event) {
        const path = new Set(composedPath(event))
        const ignored = this.resIgnoredElements.find(el => path.has(el))

        if (!this.disabled && !ignored) {
            this.openDialog()
        }
    }

    /** @internal */
    @HostListener('input', ['$event'])
    @HostListener('change', ['$event'])
    handleInput(event: Event) {
        const value = (((event?.target as HTMLInputElement | null)?.['value'] || '') + '').trim()

        if (this.dialog) {
            this.dialog.setColorFromString(value, true)
        } else {
            this.nxtColor = value
            this.nxtColorChange.emit(this.nxtColor)
        }
    }

    /** @internal */
    ngOnDestroy() {
        this.dispose()
    }

    /** @internal */
    ngOnChanges(changes: SimpleChanges) {
        if (changes['toggle'] && !this.disabled) {
            if (changes['toggle'].currentValue) {
                this.openDialog()
            } else {
                this.closeDialog()
            }
        }

        if (changes['nxtColor']) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.dialogDisplay == DialogDisplayEnum.inline) {
                    this.dialog.setInitialColor(changes['nxtColor'].currentValue)
                }

                this.dialog.setColorFromString(changes['nxtColor'].currentValue, false)

                if (this.useRootViewContainer && this.dialogDisplay != DialogDisplayEnum.inline) {
                    this.cmpRef?.changeDetectorRef.detectChanges()
                }
            }

            this.ignoreChanges = false
        }

        if ((changes['presetLabel'] || changes['presetColors']) && this.dialog) {
            this.dialog.setPresetConfig(this.presetLabel, this.presetColors)
        }

        if (changes['dialogDisplay']) {
            this.dispose()
            this.create()
        }

        if ((changes['position'] || changes['positionOffset']) && this.dialogDisplay == DialogDisplayEnum.popup) {
            if (this.overlayRef) {
                this.overlayRef.updatePositionStrategy(this.overlay.position()
                    .flexibleConnectedTo(this.elRef)
                    .withPositions(this.getPositions(this.positionOffset)))
            }
        }
    }

    openDialog() {
        if (!this.dialogCreated) {
            this.create()
        } else if (this.dialog) {
            if (this.overlayRef && !this.overlayRef.hasAttached()) {
                this.cmpRef = this.overlayRef.attach(new ComponentPortal(ColorPickerComponent, null, this.injector))
                this.dialog = this.cmpRef.instance
                this.setupDialog()
            }
            this.dialog.openDialog(this.nxtColor)
        }
    }

    closeDialog() {
        if (this.dialog && this.dialogDisplay == DialogDisplayEnum.popup) {
            this.dialog.closeDialog()
        }
    }

    private dispose() {
        if (this.cmpRef)
            this.cmpRef.destroy()
        if (this.overlayRef)
            this.overlayRef.dispose()

        this.cmpRef = undefined
        this.overlayRef = undefined
        this.dialogCreated = false
    }

    private create() {
        let vcRef = this.vcRef

        this.dialogCreated = true

        if (this.useRootViewContainer && this.dialogDisplay != DialogDisplayEnum.inline) {
            const classOfRootComponent = this.appRef.componentTypes[0]
            const appInstance = this.injector.get(classOfRootComponent)

            vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef

            if (vcRef == this.vcRef) {
                console.warn('You are using useRootViewContainer, but the root component is not exposing viewContainerRef! Please expose it by adding \'vcRef: ViewContainerRef\' to the constructor.')
            }
        }

        if (this.dialogDisplay != DialogDisplayEnum.inline) {
            const pos = this.overlay.position()
                .flexibleConnectedTo(this.elRef)
                .withFlexibleDimensions(false)
                .withPush(false)
                .withPositions(this.getPositions(this.positionOffset))
            this.overlayRef = this.overlay.create({ positionStrategy: pos, scrollStrategy: this.overlay.scrollStrategies.reposition({ autoClose: true }) })
            this.cmpRef = this.overlayRef.attach(new ComponentPortal(ColorPickerComponent, null, this.injector))
        } else {
            this.cmpRef = vcRef.createComponent(ColorPickerComponent, { injector: this.injector, index: 0 })
        }

        this.dialog = this.cmpRef.instance

        this.setupDialog()

        if (this.vcRef != vcRef) {
            this.cmpRef.changeDetectorRef.detectChanges()
        }
    }

    private setupDialog() {
        this.dialog?.setupDialog({ ...this, callbacks: this._callbacks, elementRef: this.elRef, color: this.nxtColor })
    }

    private getPositions(offset = 0) {
        const pos: ConnectedPosition[] = []
        const position = this.position || DialogPositionEnum.auto

        const bb = this.elRef.nativeElement.getBoundingClientRect()

        if (position == DialogPositionEnum.auto || position == DialogPositionEnum.bottom) {
            pos.push({
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                panelClass: 'color-picker__arrow--bottom',
                offsetY: bb.height * offset
            })
        }

        if (position == DialogPositionEnum.auto || position == DialogPositionEnum.top) {
            pos.push({
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom',
                panelClass: 'color-picker__arrow--top',
                offsetY: -bb.height * offset
            })
        }

        if (position == DialogPositionEnum.auto || position == DialogPositionEnum.left) {
            pos.push({
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                panelClass: 'color-picker__arrow--left',
                offsetX: -bb.width * offset
            })
        }

        if (position == DialogPositionEnum.auto || position == DialogPositionEnum.right) {
            pos.push({
                originX: 'end',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
                panelClass: 'color-picker__arrow--right',
                offsetX: bb.width * offset
            })
        }

        return pos
    }
}
