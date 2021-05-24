import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import { denormalizeRGBA, formatOutput, hsla2hsva, hsva2hsla, hsvaToRgba, rgbaToHex, rgbaToHsva, stringToHsva } from '../../util/color'
import { opaqueSliderLight, transparentSliderLight } from '../../util/contrast'
import { Hsla, Hsva, Rgba } from '../../util/formats'
import { ColorModeInternal, composedPath, DialogConfig, DirectiveCallbacks, parseColorMode, Position, sizeToString, SliderPosition } from '../../util/helpers'
import { AlphaChannel, ColorFormat, DialogDisplay, DialogPosition, OutputFormat } from '../../util/types'
import { ColorPickerService } from '../color-picker.service'

@Component({
    selector: 'cp-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ColorPickerComponent implements OnInit, OnDestroy, AfterViewChecked {

    readonly alphaChannel = AlphaChannel
    readonly colorModeInternal = ColorModeInternal
    readonly dialogDisplay = DialogDisplay
    readonly colorFormat = ColorFormat

    private hsva: Hsva

    private width: number
    private height: number

    private outputColor: string
    private initialColor: string
    private fallbackColor: string

    private sliderH: number
    private directiveElementRef: ElementRef

    private dialogArrowSize: number = 16
    private dialogArrowOffset: number = 16

    private dialogInputFields: ColorFormat[] = [
        ColorFormat.hex,
        ColorFormat.rgba,
        ColorFormat.hsla
    ]

    private useRootViewContainer: boolean = false

    private callbacks: DirectiveCallbacks

    @ViewChild('dialogPopup', { static: true }) private dialogElement: ElementRef<HTMLDivElement>

    show: boolean
    hidden: boolean

    top: number
    left: number
    position: Position

    format: ColorFormat
    slider: SliderPosition

    hexText: string
    hexAlpha: number

    hslaText: Hsla
    rgbaText: Rgba

    selectedColor: string
    hueSliderColor: string
    alphaSliderColor: string

    svSliderLight = false
    hueSliderLight = false
    valueSliderLight = false
    alphaSliderLight = false

    cpWidth: string
    cpHeight: string

    cpMode: ColorModeInternal = ColorModeInternal.color

    cpAlphaChannel: AlphaChannel
    cpOutputFormat: OutputFormat

    cpDisableInput: boolean
    cpDialogDisplay: DialogDisplay

    cpIgnoredElements: any[]

    cpSaveClickOutside: boolean
    cpCloseClickOutside: boolean

    cpPosition: DialogPosition = DialogPosition.right
    cpPositionOffset: number

    cpOKButton: boolean

    cpCancelButton: boolean

    cpPresetLabel: string
    cpPresetColors: string[]
    cpMaxPresetColors: number

    cpAddColorButton: boolean

    @HostListener('document:keyup.esc', ['$event'])
    onCancel(event: Event) {
        event.stopPropagation()
        event.preventDefault()

        if (this.initialColor) {
            this.setColorFromString(this.initialColor, true)
        }

        if (this.callbacks) {
            this.callbacks.colorSelectCanceled()
        }

        if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
            this.closeColorPicker()
        }
    }

    @HostListener('document:keyup.enter', ['$event'])
    onAccept(event: Event) {
        event.stopPropagation()
        event.preventDefault()

        if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
            if (this.outputColor && this.callbacks) {
                this.callbacks.colorSelected(this.outputColor)
            }

            if (this.cpDialogDisplay == DialogDisplay.popup) {
                this.closeColorPicker()
            }
        }
    }

    @HostListener('document:mousedown', ['$event'])
    @HostListener('document:focusin', ['$event'])
    onFocusChange(event: MouseEvent | FocusEvent) {
        const path = new Set(composedPath(event))
        const intersect = this.cpIgnoredElements.find(el => path.has(el))

        if (!intersect) {
            if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
                if (this.cpSaveClickOutside) {
                    if (this.outputColor && this.callbacks) {
                        this.callbacks.colorSelected(this.outputColor)
                    }
                } else {
                    this.setColorFromString(this.initialColor, false)

                    if (this.callbacks) {
                        this.callbacks.colorChanged(this.initialColor)
                    }
                }

                if (this.cpCloseClickOutside) {
                    this.closeColorPicker()
                }
            } else if (this.cpSaveClickOutside && this.outputColor && this.callbacks) {
                this.callbacks.colorSelected(this.outputColor)
            }
        }
    }

    @HostListener('window:resize')
    onResize() {
        if (this.position == Position.fixed) {
            this.setDialogPosition()
        }
    }

    constructor(
        private elRef: ElementRef,
        private cdRef: ChangeDetectorRef,
        private service: ColorPickerService
    ) { }

    ngOnInit() {
        this.slider = new SliderPosition(0, 0, 0, 0)

        if (this.cpOutputFormat == OutputFormat.rgba) {
            this.format = ColorFormat.rgba
        } else if (this.cpOutputFormat == OutputFormat.hsla) {
            this.format = ColorFormat.hsla
        } else {
            this.format = ColorFormat.hex
        }

        this.openDialog(this.initialColor, false)
    }

    ngOnDestroy() {
        this.closeDialog()
    }

    ngAfterViewChecked() {
        if (this.show && this.dialogElement && this.dialogElement.nativeElement) {
            this.updateSize()

            if (this.hidden) {
                this.hidden = false
                this.cdRef.detectChanges()
            }
        }
    }

    private updateSize() {
        const w = this.dialogElement.nativeElement.offsetWidth
        const h = this.dialogElement.nativeElement.offsetHeight

        if (w != this.width || h != this.height) {
            this.width = w
            this.height = h
            if (this.cpDialogDisplay != DialogDisplay.inline) {
                this.setDialogPosition()
                this.cdRef.detectChanges()
            }
            return true
        }
        return false
    }

    openDialog(color: any, emit: boolean = true) {
        this.service.setActive(this)

        this.setInitialColor(color)

        this.setColorFromString(color, emit)

        this.openColorPicker()
    }

    closeDialog() {
        this.closeColorPicker()
    }

    setupDialog(config: DialogConfig) {
        this.setInitialColor(config.color)

        this.cpMode = parseColorMode(config.cpMode)

        this.callbacks = config.callbacks
        this.directiveElementRef = config.elementRef

        this.cpDisableInput = config.cpDisableInput

        this.cpAlphaChannel = config.cpAlphaChannel
        this.cpOutputFormat = config.cpOutputFormat
        this.cpDialogDisplay = config.cpDialogDisplay

        this.cpIgnoredElements = [
            ...(Array.isArray(config.cpIgnoredElements) ? config.cpIgnoredElements : [config.cpIgnoredElements]),
            this.elRef && this.elRef.nativeElement,
            config.elementRef && config.elementRef.nativeElement
        ].filter(e => !!e)

        this.cpSaveClickOutside = config.cpSaveClickOutside
        this.cpCloseClickOutside = config.cpCloseClickOutside

        this.useRootViewContainer = config.cpUseRootViewContainer

        this.cpWidth = sizeToString(config.cpWidth)
        this.cpHeight = sizeToString(config.cpHeight)

        this.cpPosition = config.cpPosition
        this.cpPositionOffset = parseInt(config.cpPositionOffset, 10)

        this.cpOKButton = config.cpOKButton

        this.cpCancelButton = config.cpCancelButton

        this.fallbackColor = config.cpFallbackColor || '#fff'

        this.setPresetConfig(config.cpPresetLabel, config.cpPresetColors)

        this.cpMaxPresetColors = config.cpMaxPresetColors

        this.cpAddColorButton = config.cpAddColorButton

        if (!config.cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0
        }

        if (config.cpDialogDisplay == DialogDisplay.inline) {
            this.dialogArrowSize = 0
            this.dialogArrowOffset = 0
        }

        if (config.cpOutputFormat == OutputFormat.hex &&
            config.cpAlphaChannel != AlphaChannel.always && config.cpAlphaChannel != AlphaChannel.forced) {
            this.cpAlphaChannel = AlphaChannel.disabled
        }
    }

    setInitialColor(color: string) {
        this.initialColor = color
        this.setColorFromString(this.initialColor, false, true)
    }

    setPresetConfig(cpPresetLabel: string, cpPresetColors: string[]) {
        this.cpPresetLabel = cpPresetLabel
        this.cpPresetColors = cpPresetColors
    }

    setColorFromString(value: string, emit: boolean = true, update: boolean = true) {
        let hsva = stringToHsva(value, true)

        if (!hsva && !this.hsva) {
            hsva = stringToHsva(this.fallbackColor, true)
        }

        if (hsva) {
            if (this.cpAlphaChannel == AlphaChannel.disabled) {
                hsva.a = 1
            }

            this.hsva = hsva

            this.sliderH = this.hsva.h

            this.updateColorPicker(emit, update)
        }
    }

    onDragEnd(slider: string) {
        if (this.callbacks) {
            this.callbacks.sliderDragEnd({ slider: slider, color: this.outputColor })
        }
    }

    onDragStart(slider: string) {
        if (this.callbacks) {
            this.callbacks.sliderDragStart({ slider: slider, color: this.outputColor })
        }
    }

    onFormatToggle(change: number) {
        const availableFormats = this.dialogInputFields.length

        const nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
            availableFormats) + availableFormats) % availableFormats

        this.format = this.dialogInputFields[nextFormat]
    }

    onColorChange(value: { s: number, v: number, rgX: number, rgY: number }) {
        this.hsva.s = value.s / value.rgX
        this.hsva.v = value.v / value.rgY

        this.updateColorPicker()

        if (this.callbacks) {
            this.callbacks.sliderChanged({
                slider: 'lightness',
                value: this.hsva.v,
                color: this.outputColor
            })
        }

        if (this.callbacks) {
            this.callbacks.sliderChanged({
                slider: 'saturation',
                value: this.hsva.s,
                color: this.outputColor
            })
        }
    }

    onHueChange(value: { v: number, rgX: number }) {
        this.hsva.h = value.v / value.rgX
        this.sliderH = this.hsva.h

        this.updateColorPicker()

        if (this.callbacks) {
            this.callbacks.sliderChanged({
                slider: 'hue',
                value: this.hsva.h,
                color: this.outputColor
            })
        }
    }

    onValueChange(value: { v: number, rgX: number }) {
        this.hsva.v = value.v / value.rgX

        this.updateColorPicker()

        if (this.callbacks) {
            this.callbacks.sliderChanged({
                slider: 'value',
                value: this.hsva.v,
                color: this.outputColor
            })
        }
    }

    onAlphaChange(value: { v: number, rgX: number }) {
        this.hsva.a = value.v / value.rgX

        this.updateColorPicker()

        if (this.callbacks) {
            this.callbacks.sliderChanged({
                slider: 'alpha',
                value: this.hsva.a,
                color: this.outputColor
            })
        }
    }

    onHexInput(value: string) {
        if (value == null) {
            this.updateColorPicker()
        } else {
            if (value && value[0] != '#') {
                value = '#' + value
            }

            const validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi

            const valid = validHex.test(value)

            if (valid) {
                // Short hex
                if (value.length == 4) {
                    value = '#' + value.substring(1)
                        .split('')
                        .map(c => c + c)
                        .join('')
                }

                // Hex without alpha
                if (value.length == 7 && this.cpAlphaChannel == AlphaChannel.forced) {
                    value += Math.round(this.hsva.a * 255).toString(16)
                }

                this.setColorFromString(value, true, false)
            }

            if (this.callbacks) {
                this.callbacks.inputChanged({
                    input: 'hex',
                    valid: valid,
                    value: value,
                    color: this.outputColor
                })
            }
        }
    }

    onRedInput(value: { v: number, rg: number }) {
        const rgba = hsvaToRgba(this.hsva)

        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            rgba.r = value.v / value.rg

            this.hsva = rgbaToHsva(rgba)

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'red',
                valid: valid,
                value: rgba.r,
                color: this.outputColor
            })
        }
    }

    onBlueInput(value: { v: number, rg: number }) {
        const rgba = hsvaToRgba(this.hsva)

        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            rgba.b = value.v / value.rg

            this.hsva = rgbaToHsva(rgba)

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'blue',
                valid: valid,
                value: rgba.b,
                color: this.outputColor
            })
        }
    }

    onGreenInput(value: { v: number, rg: number }) {
        const rgba = hsvaToRgba(this.hsva)

        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            rgba.g = value.v / value.rg

            this.hsva = rgbaToHsva(rgba)

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'green',
                valid: valid,
                value: rgba.g,
                color: this.outputColor
            })
        }
    }

    onHueInput(value: { v: number, rg: number }) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            this.hsva.h = value.v / value.rg

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'hue',
                valid: valid,
                value: this.hsva.h,
                color: this.outputColor
            })
        }
    }

    onValueInput(value: { v: number, rg: number }) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            this.hsva.v = value.v / value.rg

            this.updateColorPicker()
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'value',
                valid: valid,
                value: this.hsva.v,
                color: this.outputColor
            })
        }
    }

    onAlphaInput(value: { v: number, rg: number }) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            this.hsva.a = value.v / value.rg

            this.updateColorPicker()
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'alpha',
                valid: valid,
                value: this.hsva.a,
                color: this.outputColor
            })
        }
    }

    onLightnessInput(value: { v: number, rg: number }) {
        const hsla = hsva2hsla(this.hsva)

        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            hsla.l = value.v / value.rg

            this.hsva = hsla2hsva(hsla)

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'lightness',
                valid: valid,
                value: hsla.l,
                color: this.outputColor
            })
        }
    }

    onSaturationInput(value: { v: number, rg: number }) {
        const hsla = hsva2hsla(this.hsva)

        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            hsla.s = value.v / value.rg

            this.hsva = hsla2hsva(hsla)

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'saturation',
                valid: valid,
                value: hsla.s,
                color: this.outputColor
            })
        }
    }

    onAddPresetColor(value: string) {
        if (!this.cpPresetColors.filter((color) => (color == value)).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value)

            if (this.callbacks) {
                this.callbacks.presetColorsChanged(this.cpPresetColors)
            }
        }
    }

    onRemovePresetColor(value: string) {
        this.cpPresetColors = this.cpPresetColors.filter((color) => (color != value))

        if (this.callbacks) {
            this.callbacks.presetColorsChanged(this.cpPresetColors)
        }
    }

    // Private helper functions for the color picker dialog status

    private openColorPicker() {
        if (!this.show) {
            this.show = true
            this.hidden = true

            if (this.callbacks) {
                this.callbacks.stateChanged(true)
            }
        }
    }

    private closeColorPicker() {
        if (this.show) {
            this.show = false

            if (this.callbacks) {
                this.callbacks.stateChanged(false)
            }

            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges()
            }
        }
    }

    private updateColorPicker(emit: boolean = true, update: boolean = true) {
        if (this.cpMode == ColorModeInternal.grayscale) {
            this.hsva.s = 0
        }

        const lastOutput = this.outputColor

        const hsla = hsva2hsla(this.hsva)
        const rgba = denormalizeRGBA(hsvaToRgba(this.hsva))

        const hue = denormalizeRGBA(hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)))

        if (update) {
            this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100),
                Math.round(hsla.a * 100) / 100)

            this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100)

            const allowHex8 = this.cpAlphaChannel == AlphaChannel.always

            this.hexText = rgbaToHex(rgba, allowHex8)
            this.hexAlpha = this.rgbaText.a
        }

        if (this.cpOutputFormat == OutputFormat.auto && this.hsva.a < 1) {
            this.format = this.hsva.a < 1 ? ColorFormat.rgba : ColorFormat.hex
        }

        this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')'
        this.alphaSliderColor = 'linear-gradient(to right, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 0) 0%, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 1) 100%)'

        this.svSliderLight = opaqueSliderLight(rgba)
        this.hueSliderLight = opaqueSliderLight(hue)
        this.valueSliderLight = opaqueSliderLight(rgba)
        this.alphaSliderLight = transparentSliderLight(rgba)

        this.outputColor = formatOutput(this.hsva, this.cpOutputFormat, this.cpAlphaChannel)
        this.selectedColor = formatOutput(this.hsva, OutputFormat.rgba, null)

        this.slider = new SliderPosition(
            (this.sliderH || this.hsva.h),
            this.hsva.s,
            (1 - this.hsva.v),
            this.hsva.a
        )

        if (emit && lastOutput != this.outputColor && this.callbacks) {
            this.callbacks.colorChanged(this.outputColor)
        }
    }

    fill(n: number) {
        return new Array(n).fill(1)
    }

    // Private helper functions for the color picker dialog positioning

    private setDialogPosition() {
        if (this.cpDialogDisplay == DialogDisplay.inline) {
            this.position = Position.relative
        } else {
            let position = Position.static, transform = '', style

            let parentNode: ParentNode = null, transformNode: ParentNode = null

            let node = this.directiveElementRef.nativeElement.parentNode

            const dialogHeight = this.dialogElement.nativeElement.offsetHeight

            while (node != null && node.tagName != 'HTML') {
                style = window.getComputedStyle(node)
                position = style.getPropertyValue('position')
                transform = style.getPropertyValue('transform')

                if (position != Position.static && parentNode == null) {
                    parentNode = node
                }

                if (transform && transform != 'none' && transformNode == null) {
                    transformNode = node
                }

                if (position == Position.fixed) {
                    parentNode = transformNode

                    break
                }

                node = node.parentNode
            }

            const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position != Position.fixed))

            if (this.useRootViewContainer || (position == Position.fixed && (!parentNode || parentNode instanceof HTMLUnknownElement))) {
                this.top = boxDirective.top
                this.left = boxDirective.left
            } else {
                if (parentNode == null) {
                    parentNode = node
                }

                const boxParent = this.createDialogBox(parentNode as HTMLElement, (position != Position.fixed))

                this.top = boxDirective.top - boxParent.top
                this.left = boxDirective.left - boxParent.left
            }

            if (position == Position.fixed) {
                this.position = Position.fixed
            }

            switch (this.cpPosition) {
                case DialogPosition.left:
                    this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset
                    this.left -= this.width + this.dialogArrowSize - 2
                    break

                case DialogPosition.top:
                    this.top -= dialogHeight + this.dialogArrowSize
                    this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset
                    break

                case DialogPosition.bottom:
                    this.top += boxDirective.height + this.dialogArrowSize
                    this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset
                    break

                default:
                    this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset
                    this.left += boxDirective.width + this.dialogArrowSize - 2
                    break
            }
        }
    }

    private createDialogBox(element: HTMLElement, offset: boolean) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        }
    }
}
