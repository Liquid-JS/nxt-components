import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { ApplicationRef, ComponentRef, Directive, ElementRef, HostListener, Injector, OnChanges, OnDestroy, SimpleChanges, ViewContainerRef, inject, output, input, linkedSignal } from '@angular/core'
import { compositeColors, hsvaToRgba, stringToHsva } from '../util/color'
import { opaqueSliderLight } from '../util/contrast'
import { Hsva, Rgba } from '../util/formats'
import { composedPath, DirectiveCallbacks } from '../util/helpers'
import { AlphaChannel, AlphaChannelEnum, ColorMode, DialogDisplay, DialogDisplayEnum, DialogPosition, DialogPositionEnum, InputChangeEvent, OutputFormat, OutputFormatEnum, SliderChangeEvent } from '../util/types'
import { ColorPickerComponent } from './color-picker/color-picker.component'

@Directive({
    selector: '[nxtColor]',
    exportAs: 'nxtColorPicker'
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
                this.open.emit(this.nxtColor())
            } else {
                this.close.emit(this.nxtColor())
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
            this.colorSelectCancel.emit(undefined)
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
        const ignoredElements = this.ignoredElements()
        const ign = Array.isArray(ignoredElements) ? ignoredElements : [ignoredElements]
        return ign.filter(el => !!el)
    }

    /** The color to show in the color picker dialog */
    readonly _nxtColor = input<string | undefined>(undefined, { alias: 'nxtColor' })
    readonly nxtColor = linkedSignal({
        source: () => this._nxtColor(),
        computation: v => v
    })

    /** Use this option to set color picker dialog width */
    readonly width = input<string>('230px')
    /** Use this option to force color picker dialog height */
    readonly height = input<string>('auto')

    /** Sets the default open / close state of the color picker */
    readonly toggle = input<boolean>(false)
    /** Disables opening of the color picker dialog via toggle */
    readonly disabled = input<boolean>(false)

    /** Dialog color mode */
    readonly mode = input<ColorMode>('color')

    /** Enables CMYK input format and color change event */
    readonly cmykEnabled = input<boolean>(false)

    /** Output color format */
    readonly outputFormat = input<OutputFormat>(OutputFormatEnum.auto)
    /** Alpha channel mode */
    readonly alphaChannel = input<AlphaChannel>(AlphaChannelEnum.enabled)
    /** Used when the color is not well-formed or is undefined */
    readonly fallbackColor = input<string>()

    /** Dialog position */
    readonly position = input<DialogPosition | DialogPosition[]>(DialogPositionEnum.auto)
    /** Dialog offset percentage relative to the directive element */
    readonly positionOffset = input<number>(0)

    /**
     * Show label for preset colors
     *
     * If string is given, it overrides the default label.
     */
    readonly presetLabel = input<boolean | string>(true)
    /** Array of preset colors to show in the color picker dialog */
    readonly presetColors = input<string[]>()

    /** Disables / hides the color input field from the dialog */
    readonly disableInput = input<boolean>(false)

    /** Dialog positioning mode */
    readonly dialogDisplay = input<DialogDisplay>(DialogDisplayEnum.popup)

    /** Array of HTML elements that will be ignored when clicked */
    readonly ignoredElements = input<any[]>()

    /** Save currently selected color when user clicks outside */
    readonly saveClickOutside = input<boolean>(true)
    /** Close the color picker dialog when user clicks outside */
    readonly closeClickOutside = input<boolean>(true)

    /** Show an OK / Apply button which saves the color */
    readonly okButton = input<boolean>(false)

    /** Show a Cancel / Reset button which resets the color */
    readonly cancelButton = input<boolean>(false)

    /** Show buttons to add / remove preset colors */
    readonly presetColorsEditable = input<boolean>(false)

    /** Use this option to set the max colors allowed in presets */
    readonly maxPresetColors = input<number>()

    /**
     * Create dialog component in the root view container
     *
     * Note: The root component needs to have public viewContainerRef.
     */
    readonly useRootViewContainer = input<boolean>(false)

    /** Current color value, emit when dialog is isOpen */
    readonly open = output<string | undefined>()
    /** Current color value, emit when dialog is closed */
    readonly close = output<string | undefined>()

    /** Input name and its value, emit when user changes color through inputs */
    readonly inputChange = output<InputChangeEvent>()

    /** Status of the dialog, emit when dialog is isOpen / closed */
    readonly toggleChange = output<boolean>()

    /** Slider name and current color, emit when slider dragging starts */
    readonly sliderDragStart = output<SliderChangeEvent>()
    /** Slider name and its value, emit when user changes color through slider */
    readonly sliderChange = output<SliderChangeEvent>()
    /** Slider name and current color, emit when slider dragging ends */
    readonly sliderDragEnd = output<SliderChangeEvent>()

    /** Color select canceled, emit when Cancel button is pressed */
    readonly colorSelect = output<string>()
    /** Selected color value, emit when OK button pressed or user clicks outside (if saveClickOutside is true) */
    readonly colorSelectCancel = output<void>()
    /** Changed color value, emit when color changes */
    readonly nxtColorChange = output<string>()

    /** Outputs the color as CMYK string if CMYK is enabled */
    readonly cmykColorChange = output<string>()

    /** Preset colors, emit when preset color is added / removed */
    readonly presetColorsChange = output<string[]>()

    private readonly injector = inject(Injector)
    private readonly appRef = inject(ApplicationRef)
    private readonly vcRef = inject(ViewContainerRef)
    private readonly elRef = inject(ElementRef)
    private readonly overlay = inject(Overlay)

    /** @internal */
    @HostListener('focus', ['$event'])
    @HostListener('click', ['$event'])
    handleOpen(event: Event) {
        const path = new Set(composedPath(event))
        const ignored = this.resIgnoredElements.find(el => path.has(el))

        if (!this.disabled() && !ignored) {
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
            this.nxtColor.set(value)
            this.nxtColorChange.emit(value)
        }
    }

    /** @internal */
    ngOnDestroy() {
        this.dispose()
    }

    /** @internal */
    ngOnChanges(changes: SimpleChanges) {
        if (changes['toggle'] && !this.disabled()) {
            if (changes['toggle'].currentValue) {
                this.openDialog()
            } else {
                this.closeDialog()
            }
        }

        if (changes['nxtColor']) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.dialogDisplay() == DialogDisplayEnum.inline) {
                    this.dialog.setInitialColor(changes['nxtColor'].currentValue)
                }

                this.dialog.setColorFromString(changes['nxtColor'].currentValue, false)

                if (this.useRootViewContainer() && this.dialogDisplay() != DialogDisplayEnum.inline) {
                    this.cmpRef?.changeDetectorRef.detectChanges()
                }
            }

            this.ignoreChanges = false
        }

        if ((changes['presetLabel'] || changes['presetColors']) && this.dialog) {
            this.dialog.setPresetConfig(this.presetLabel(), this.presetColors())
        }

        if (changes['dialogDisplay']) {
            this.dispose()
            this.create()
        }

        if ((changes['position'] || changes['positionOffset']) && this.dialogDisplay() == DialogDisplayEnum.popup) {
            if (this.overlayRef) {
                this.overlayRef.updatePositionStrategy(this.overlay.position()
                    .flexibleConnectedTo(this.elRef)
                    .withPositions(this.getPositions(this.positionOffset())))
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
            this.dialog.openDialog(this.nxtColor())
        }
    }

    closeDialog() {
        if (this.dialog && this.dialogDisplay() == DialogDisplayEnum.popup) {
            this.dialog.closeDialog()
        }
    }

    /**
     * Get text color mode to ensure good contrast with selected color
     *
     * @param bg    Solid background color; this is used when selected color has transparency
     * @param fg    Foreground color, defaults to current picker value
     * @returns
     */
    textColorMode(
        bg: string | Rgba = new Rgba(1, 1, 1, 1, true),
        fg = this.dialog?.rgbaText
    ) {
        if (typeof bg == 'string')
            bg = hsvaToRgba(stringToHsva(bg) ?? new Hsva(1, 1, 1, 1, true))
        const color = compositeColors(fg || bg, new Rgba(bg.r, bg.g, bg.b, 1, bg.normalized))
        const useLightColor = opaqueSliderLight(color)
        return useLightColor ? 'light' : 'dark'
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

        if (this.useRootViewContainer() && this.dialogDisplay() != DialogDisplayEnum.inline) {
            const classOfRootComponent = this.appRef.componentTypes[0]
            const appInstance = this.injector.get(classOfRootComponent)

            vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef

            if (vcRef == this.vcRef) {
                console.warn('You are using useRootViewContainer, but the root component is not exposing viewContainerRef! Please expose it by adding \'vcRef: ViewContainerRef\' to the constructor.')
            }
        }

        if (this.dialogDisplay() != DialogDisplayEnum.inline) {
            const pos = this.overlay.position()
                .flexibleConnectedTo(this.elRef)
                .withFlexibleDimensions(false)
                .withPush(false)
                .withPositions(this.getPositions(this.positionOffset()))
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
        this.dialog?.setupDialog({ ...this, callbacks: this._callbacks, elementRef: this.elRef, color: this.nxtColor() })
    }

    private getPositions(offset = 0) {
        const pos: ConnectedPosition[] = []
        const position = this.position()
        const positions = Array.isArray(position)
            ? position
            : [position || DialogPositionEnum.auto]

        const bb = this.elRef.nativeElement.getBoundingClientRect()
        const positionCfg = {
            [DialogPositionEnum.right]: {
                originX: 'end',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
                panelClass: 'color-picker__arrow--right',
                offsetX: bb.width * offset
            } as ConnectedPosition,
            [DialogPositionEnum.left]: {
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                panelClass: 'color-picker__arrow--left',
                offsetX: -bb.width * offset
            } as ConnectedPosition,
            [DialogPositionEnum.top]: {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom',
                panelClass: 'color-picker__arrow--top',
                offsetY: -bb.height * offset
            } as ConnectedPosition,
            [DialogPositionEnum.bottom]: {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                panelClass: 'color-picker__arrow--bottom',
                offsetY: bb.height * offset
            } as ConnectedPosition
        }
        const usedPositions = new Set<DialogPosition>()
        positions.forEach(p => {
            // Add positions in order as specified
            if (!usedPositions.has(p) && p in positionCfg) {
                usedPositions.add(p)
                pos.push(positionCfg[p as keyof typeof positionCfg])
            }
        })
        if (positions.find(p => p == DialogPositionEnum.auto)) {
            // If using auto positioning, append the remaining positioning strategies
            [
                DialogPositionEnum.right,
                DialogPositionEnum.top,
                DialogPositionEnum.bottom,
                DialogPositionEnum.left
            ].forEach(p => {
                if (!usedPositions.has(p) && p in positionCfg) {
                    usedPositions.add(p)
                    pos.push(positionCfg[p as keyof typeof positionCfg])
                }
            })
        }

        return pos
    }
}
