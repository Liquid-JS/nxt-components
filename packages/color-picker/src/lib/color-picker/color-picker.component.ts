import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
import { cmykToRgb, denormalizeCMYK, denormalizeRGBA, formatCmyk, formatOutput, hsla2hsva, hsva2hsla, hsvaToRgba, normalizeCMYK, rgbaToCmyk, rgbaToHex, rgbaToHsva, stringToCmyk, stringToHsva } from '../../util/color'
import { opaqueSliderLight, transparentSliderLight } from '../../util/contrast'
import { Cmyk, Hsla, Hsva, Rgba } from '../../util/formats'
import { ColorModeInternal, composedPath, DialogConfig, DirectiveCallbacks, parseColorMode, sizeToString, SliderPosition } from '../../util/helpers'
import { AlphaChannel, AlphaEnabledFormats, ColorFormat, DialogDisplay, DialogPosition, OutputFormat } from '../../util/types'
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
    private cmyk: Cmyk

    private cmykColor: string
    private outputColor: string
    private initialColor: string
    private fallbackColor: string

    private sliderH: number

    private dialogInputFields: ColorFormat[] = [
        ColorFormat.hex,
        ColorFormat.rgba,
        ColorFormat.hsla,
        ColorFormat.cmyk
    ]

    private callbacks: DirectiveCallbacks

    show: boolean

    format: ColorFormat
    slider: SliderPosition

    hexText: string
    hexAlpha: number

    cmykText: Cmyk
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

    cpCmykEnabled: boolean
    cpAlphaChannel: AlphaChannel
    cpOutputFormat: OutputFormat

    cpDisableInput: boolean
    cpDialogDisplay: DialogDisplay

    cpIgnoredElements: any[]

    cpSaveClickOutside: boolean
    cpCloseClickOutside: boolean

    cpPosition: DialogPosition = DialogPosition.right

    cpOKButton: boolean

    cpCancelButton: boolean

    cpPresetLabel: boolean | string
    cpPresetColors?: string[]
    cpMaxPresetColors: number

    cpAddColorButton: boolean

    constructor(
        private elRef: ElementRef,
        private cdRef: ChangeDetectorRef,
        private service: ColorPickerService
    ) { }

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
                        if (this.cpCmykEnabled) {
                            this.callbacks.cmykChanged(this.cmykColor)
                        }

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

    ngOnInit() {
        this.slider = new SliderPosition(0, 0, 0, 0)

        if (this.cpCmykEnabled) {
            this.format = ColorFormat.cmyk
        } else if (this.cpOutputFormat == OutputFormat.rgba) {
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

    ngAfterViewChecked() { }

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

        this.cpDisableInput = config.cpDisableInput

        this.cpCmykEnabled = config.cpCmykEnabled
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

        this.cpWidth = sizeToString(config.cpWidth)
        this.cpHeight = sizeToString(config.cpHeight)

        this.cpPosition = config.cpPosition

        this.cpOKButton = config.cpOKButton

        this.cpCancelButton = config.cpCancelButton

        this.fallbackColor = config.cpFallbackColor || '#fff'

        this.setPresetConfig(config.cpPresetLabel, config.cpPresetColors)

        this.cpMaxPresetColors = config.cpMaxPresetColors

        this.cpAddColorButton = config.cpAddColorButton

        if (config.cpOutputFormat == OutputFormat.hex &&
            config.cpAlphaChannel != AlphaChannel.always && config.cpAlphaChannel != AlphaChannel.forced) {
            this.cpAlphaChannel = AlphaChannel.disabled
        }
    }

    setInitialColor(color: string) {
        this.initialColor = color
        this.setColorFromString(this.initialColor, false, true)
    }

    setPresetConfig(cpPresetLabel: boolean | string, cpPresetColors?: string[]) {
        this.cpPresetLabel = cpPresetLabel
        this.cpPresetColors = cpPresetColors
    }

    setColorFromString(value: string, emit: boolean = true, update: boolean = true) {
        let hsva = stringToHsva(value, true)
        let cmyk = stringToCmyk(value, true)

        if ((!hsva && !this.hsva) && (!cmyk && !this.cmyk)) {
            hsva = stringToHsva(this.fallbackColor, true)
            cmyk = stringToCmyk(this.fallbackColor, true)
        }

        if (hsva || cmyk) {
            if (this.cpAlphaChannel == AlphaChannel.disabled) {
                hsva.a = 1
                cmyk.a = 1
            }

            this.hsva = hsva
            this.cmyk = cmyk ? denormalizeCMYK(cmyk) : cmyk

            this.sliderH = this.hsva.h

            this.updateColorPicker(emit, update, (cmyk && this.cpCmykEnabled))
        }
    }

    stringToRgba(value: string) {
        const hsva = stringToHsva(value, true)
        if (hsva)
            return formatOutput(hsva, OutputFormat.rgba, AlphaChannel.enabled)

        return undefined
    }

    onDragEnd(slider: string) {
        if (this.callbacks) {
            this.callbacks.sliderDragEnd({ slider, color: this.outputColor })
        }
    }

    onDragStart(slider: string) {
        if (this.callbacks) {
            this.callbacks.sliderDragStart({ slider, color: this.outputColor })
        }
    }

    onFormatToggle(change: number) {
        const availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1)

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
                    valid,
                    value,
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
                valid,
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
                valid,
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
                valid,
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
                valid,
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
                valid,
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
                valid,
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
                valid,
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
                valid,
                value: hsla.s,
                color: this.outputColor
            })
        }
    }

    public onCyanInput(value: { v: number, rg: number }): void {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            this.cmyk.c = value.v

            this.updateColorPicker(true, true, true)
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'cyan',
                valid: true,
                value: this.cmyk.c,
                color: this.outputColor
            })
        }
    }

    public onMagentaInput(value: { v: number, rg: number }): void {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            this.cmyk.m = value.v

            this.updateColorPicker(true, true, true)
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'magenta',
                valid: true,
                value: this.cmyk.m,
                color: this.outputColor
            })
        }
    }

    public onYellowInput(value: { v: number, rg: number }): void {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            this.cmyk.y = value.v

            this.updateColorPicker(true, true, true)
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'yellow',
                valid: true,
                value: this.cmyk.y,
                color: this.outputColor
            })
        }
    }

    public onBlackInput(value: { v: number, rg: number }): void {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            this.cmyk.k = value.v

            this.updateColorPicker(true, true, true)
        }

        if (this.callbacks) {
            this.callbacks.inputChanged({
                input: 'black',
                valid: true,
                value: this.cmyk.k,
                color: this.outputColor
            })
        }
    }

    onAddPresetColor(value: string) {
        if (!this.cpPresetColors?.filter((color) => (color == value)).length) {
            this.cpPresetColors = this.cpPresetColors?.concat(value)

            if (this.callbacks) {
                this.callbacks.presetColorsChanged(this.cpPresetColors)
            }
        }
    }

    onRemovePresetColor(value: string) {
        this.cpPresetColors = this.cpPresetColors?.filter((color) => (color != value))

        if (this.callbacks) {
            this.callbacks.presetColorsChanged(this.cpPresetColors)
        }
    }

    // Private helper functions for the color picker dialog status

    private openColorPicker() {
        if (!this.show) {
            this.show = true

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

            //@ts-ignore
            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges()
            }
        }
    }

    private updateColorPicker(emit: boolean = true, update: boolean = true, cmykInput: boolean = false) {
        if (this.cpMode == ColorModeInternal.grayscale) {
            this.hsva.s = 0
        }

        let rgba: Rgba

        const lastOutput = this.outputColor

        const hsla = hsva2hsla(this.hsva)

        if (!this.cpCmykEnabled) {
            rgba = denormalizeRGBA(hsvaToRgba(this.hsva))
        } else {
            if (!cmykInput) {
                rgba = hsvaToRgba(this.hsva)

                this.cmyk = denormalizeCMYK(rgbaToCmyk(rgba))
            } else {
                rgba = cmykToRgb(normalizeCMYK(this.cmyk))

                this.hsva = rgbaToHsva(rgba)
            }

            rgba = denormalizeRGBA(rgba)

            this.sliderH = this.hsva.h
        }

        const hue = denormalizeRGBA(hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)))

        if (update) {
            this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100),
                Math.round(hsla.a * 100) / 100)

            this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100)

            if (this.cpCmykEnabled) {
                this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k,
                    Math.round(this.cmyk.a * 100) / 100)
            }

            const allowHex8 = this.cpAlphaChannel === AlphaChannel.always

            this.hexText = rgbaToHex(rgba, allowHex8)
            this.hexAlpha = this.rgbaText.a
        }

        if (this.cpOutputFormat == OutputFormat.auto && this.hsva.a < 1 && !AlphaEnabledFormats.has(this.format)) {
            this.format = this.hsva.a < 1 ? ColorFormat.rgba : ColorFormat.hex
        }

        this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')'
        this.alphaSliderColor = 'linear-gradient(to right, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 0) 0%, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 1) 100%)'

        this.svSliderLight = opaqueSliderLight(rgba)
        this.hueSliderLight = opaqueSliderLight(hue)
        this.valueSliderLight = opaqueSliderLight(rgba)
        this.alphaSliderLight = transparentSliderLight(rgba)

        this.outputColor = formatOutput(this.hsva, this.cpOutputFormat, this.cpAlphaChannel)
        this.selectedColor = formatOutput(this.hsva, OutputFormat.rgba)

        if (this.format !== ColorFormat.cmyk) {
            this.cmykColor = ''
        } else {
            this.cmykColor = formatCmyk(this.cmyk, this.cpAlphaChannel)
        }

        this.slider = new SliderPosition(
            (this.sliderH || this.hsva.h),
            this.hsva.s,
            (1 - this.hsva.v),
            this.hsva.a
        )

        if (emit && lastOutput != this.outputColor && this.callbacks) {
            if (this.cpCmykEnabled) {
                this.callbacks.cmykChanged(this.cmykColor)
            }

            this.callbacks.colorChanged(this.outputColor)
        }
    }

    fill(n: number) {
        return new Array(n).fill(1)
    }
}
