import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
import { cmykToRgb, denormalizeCMYK, denormalizeRGBA, formatCmyk, formatOutput, hsla2hsva, hsva2hsla, hsvaToRgba, normalizeCMYK, rgbaToCmyk, rgbaToHex, rgbaToHsva, stringToCmyk, stringToHsva } from '../../util/color'
import { opaqueSliderLight, transparentSliderLight } from '../../util/contrast'
import { Cmyk, Hsla, Hsva, Rgba } from '../../util/formats'
import { ColorModeInternal, composedPath, CursorEvent, DialogConfig, DirectiveCallbacks, parseColorMode, sizeToString, SliderPosition, TextEvent } from '../../util/helpers'
import { AlphaChannel, AlphaChannelEnum, AlphaEnabledFormats, ColorFormat, ColorFormatEnum, DialogDisplay, DialogDisplayEnum, DialogPosition, DialogPositionEnum, OutputFormat, OutputFormatEnum } from '../../util/types'
import { ColorPickerService } from '../color-picker.service'

@Component({
    selector: 'nxt-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ColorPickerComponent implements OnInit, OnDestroy, AfterViewChecked {

    readonly colorModeInternal = ColorModeInternal

    private hsva?: Hsva
    private cmyk?: Cmyk

    private cmykColor = ''
    private outputColor = ''
    private initialColor = ''
    private fallbackColor?: string

    private sliderH?: number

    private dialogInputFields: ColorFormat[] = [
        ColorFormatEnum.hex,
        ColorFormatEnum.rgba,
        ColorFormatEnum.hsla,
        ColorFormatEnum.cmyk
    ]

    private callbacks?: DirectiveCallbacks

    show = false

    format: ColorFormat = ColorFormatEnum.hex
    slider?: SliderPosition

    hexText?: string
    hexAlpha?: number

    cmykText?: Cmyk
    hslaText?: Hsla
    rgbaText?: Rgba

    selectedColor = ''
    hueSliderColor?: string
    alphaSliderColor?: string

    svSliderLight = false
    hueSliderLight = false
    valueSliderLight = false
    alphaSliderLight = false

    width?: string
    height?: string

    mode: ColorModeInternal = ColorModeInternal.color

    cmykEnabled = false
    alphaChannel: AlphaChannel = AlphaChannelEnum.enabled
    outputFormat: OutputFormat = OutputFormatEnum.auto

    disableInput = false
    dialogDisplay?: DialogDisplay

    ignoredElements?: any[]

    saveClickOutside = false
    closeClickOutside = false

    position: DialogPosition = DialogPositionEnum.right

    okButton = false

    cancelButton = false

    presetLabel: boolean | string = false
    presetColors?: string[]
    maxPresetColors?: number

    addColorButton: boolean = false

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

        if (this.show && this.dialogDisplay == DialogDisplayEnum.popup) {
            this.closeColorPicker()
        }
    }

    @HostListener('document:keyup.enter', ['$event'])
    onAccept(event: Event) {
        event.stopPropagation()
        event.preventDefault()

        if (this.show && this.dialogDisplay == DialogDisplayEnum.popup) {
            if (this.outputColor && this.callbacks) {
                this.callbacks.colorSelected(this.outputColor)
            }

            if (this.dialogDisplay == DialogDisplayEnum.popup) {
                this.closeColorPicker()
            }
        }
    }

    @HostListener('document:mousedown', ['$event'])
    @HostListener('document:focusin', ['$event'])
    onFocusChange(event: MouseEvent | FocusEvent) {
        const path = new Set(composedPath(event))
        const intersect = this.ignoredElements?.find(el => path.has(el))

        if (!intersect) {
            if (this.show && this.dialogDisplay == DialogDisplayEnum.popup) {
                if (this.saveClickOutside) {
                    if (this.outputColor && this.callbacks) {
                        this.callbacks.colorSelected(this.outputColor)
                    }
                } else {
                    this.setColorFromString(this.initialColor, false)

                    if (this.callbacks) {
                        if (this.cmykEnabled) {
                            this.callbacks.cmykChanged(this.cmykColor)
                        }

                        this.callbacks.colorChanged(this.initialColor)
                    }
                }

                if (this.closeClickOutside) {
                    this.closeColorPicker()
                }
            } else if (this.saveClickOutside && this.outputColor && this.callbacks) {
                this.callbacks.colorSelected(this.outputColor)
            }
        }
    }

    ngOnInit() {
        this.slider = new SliderPosition(0, 0, 0, 0)

        if (this.cmykEnabled) {
            this.format = ColorFormatEnum.cmyk
        } else if (this.outputFormat == OutputFormatEnum.rgba) {
            this.format = ColorFormatEnum.rgba
        } else if (this.outputFormat == OutputFormatEnum.hsla) {
            this.format = ColorFormatEnum.hsla
        } else {
            this.format = ColorFormatEnum.hex
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

        this.mode = parseColorMode(config.mode)

        this.callbacks = config.callbacks

        this.disableInput = config.disableInput

        this.cmykEnabled = config.cmykEnabled
        this.alphaChannel = config.alphaChannel
        this.outputFormat = config.outputFormat
        this.dialogDisplay = config.dialogDisplay

        this.ignoredElements = [
            ...(Array.isArray(config.ignoredElements) ? config.ignoredElements : [config.ignoredElements]),
            this.elRef && this.elRef.nativeElement,
            config.elementRef && config.elementRef.nativeElement
        ].filter(e => !!e)

        this.saveClickOutside = config.saveClickOutside
        this.closeClickOutside = config.closeClickOutside

        this.width = sizeToString(config.width)
        this.height = sizeToString(config.height)

        this.position = config.position

        this.okButton = config.okButton

        this.cancelButton = config.cancelButton

        this.fallbackColor = config.fallbackColor || '#fff'

        this.setPresetConfig(config.presetLabel, config.presetColors)

        this.maxPresetColors = config.maxPresetColors

        this.addColorButton = config.addColorButton

        if (config.outputFormat == OutputFormatEnum.hex &&
            config.alphaChannel != AlphaChannelEnum.always && config.alphaChannel != AlphaChannelEnum.forced) {
            this.alphaChannel = AlphaChannelEnum.disabled
        }
    }

    setInitialColor(color: string) {
        this.initialColor = color
        this.setColorFromString(this.initialColor, false, true)
    }

    setPresetConfig(presetLabel: boolean | string, presetColors?: string[]) {
        this.presetLabel = presetLabel
        this.presetColors = presetColors
    }

    setColorFromString(value: string, emit: boolean = true, update: boolean = true) {
        let hsva = stringToHsva(value, true)
        let cmyk = stringToCmyk(value, true)

        if ((!hsva && !this.hsva) && (!cmyk && !this.cmyk)) {
            hsva = stringToHsva(this.fallbackColor, true)
            cmyk = stringToCmyk(this.fallbackColor, true)
        }

        if (hsva || cmyk) {
            if (this.alphaChannel == AlphaChannelEnum.disabled) {
                if (hsva)
                    hsva.a = 1
                if (cmyk)
                    cmyk.a = 1
            }

            this.hsva = hsva
            this.cmyk = cmyk ? denormalizeCMYK(cmyk) : cmyk

            this.sliderH = this.hsva?.h

            this.updateColorPicker(emit, update, (cmyk && this.cmykEnabled))
        }
    }

    stringToRgba(value: string) {
        const hsva = stringToHsva(value, true)
        if (hsva)
            return formatOutput(hsva, OutputFormatEnum.rgba, AlphaChannelEnum.enabled)

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
        const availableFormats = this.dialogInputFields.length - (this.cmykEnabled ? 0 : 1)

        const nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
            availableFormats) + availableFormats) % availableFormats

        this.format = this.dialogInputFields[nextFormat]
    }

    onColorChange(value: CursorEvent) {
        if ('rgX' in value && 'rgY' in value) {
            if (this.hsva) {
                this.hsva.s = value.s / value.rgX
                this.hsva.v = value.v / value.rgY
            }

            this.updateColorPicker()

            if (this.callbacks) {
                this.callbacks.sliderChanged({
                    slider: 'lightness',
                    value: this.hsva?.v,
                    color: this.outputColor
                })
            }

            if (this.callbacks) {
                this.callbacks.sliderChanged({
                    slider: 'saturation',
                    value: this.hsva?.s,
                    color: this.outputColor
                })
            }
        }
    }

    onHueChange(value: CursorEvent) {
        if ('v' in value && 'rgX' in value) {
            if (this.hsva)
                this.hsva.h = value.v / value.rgX
            this.sliderH = this.hsva?.h

            this.updateColorPicker()

            if (this.callbacks) {
                this.callbacks.sliderChanged({
                    slider: 'hue',
                    value: this.hsva?.h,
                    color: this.outputColor
                })
            }
        }
    }

    onValueChange(value: CursorEvent) {
        if ('v' in value && 'rgX' in value) {
            if (this.hsva)
                this.hsva.v = value.v / value.rgX

            this.updateColorPicker()

            if (this.callbacks) {
                this.callbacks.sliderChanged({
                    slider: 'value',
                    value: this.hsva?.v,
                    color: this.outputColor
                })
            }
        }
    }

    onAlphaChange(value: CursorEvent) {
        if ('v' in value && 'rgX' in value) {
            if (this.hsva)
                this.hsva.a = value.v / value.rgX

            this.updateColorPicker()

            if (this.callbacks) {
                this.callbacks.sliderChanged({
                    slider: 'alpha',
                    value: this.hsva?.a,
                    color: this.outputColor
                })
            }
        }
    }

    onHexInput(value?: TextEvent) {
        if (typeof value == 'string') {
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
                if (value.length == 7 && this.alphaChannel == AlphaChannelEnum.forced) {
                    value += Math.round((this.hsva?.a || 0) * 255).toString(16)
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
        } else {
            this.updateColorPicker()
        }
    }

    onRedInput(value: TextEvent) {
        if (typeof value != 'string') {
            const rgba = this.hsva ? hsvaToRgba(this.hsva) : new Rgba(0, 0, 0, 0)

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
    }

    onBlueInput(value: TextEvent) {
        if (typeof value != 'string') {
            const rgba = this.hsva ? hsvaToRgba(this.hsva) : new Rgba(0, 0, 0, 0)

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
    }

    onGreenInput(value: TextEvent) {
        if (typeof value != 'string') {
            const rgba = this.hsva ? hsvaToRgba(this.hsva) : new Rgba(0, 0, 0, 0)

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
    }

    onHueInput(value: TextEvent) {
        if (typeof value != 'string') {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

            this.hsva = this.hsva || new Hsva(0, 0, 0, 0)

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
    }

    onValueInput(value: TextEvent) {
        if (typeof value != 'string') {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

            this.hsva = this.hsva || new Hsva(0, 0, 0, 0)

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
    }

    onAlphaInput(value: TextEvent) {
        if (typeof value != 'string') {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

            this.hsva = this.hsva || new Hsva(0, 0, 0, 0)

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
    }

    onLightnessInput(value: TextEvent) {
        if (typeof value != 'string') {
            const hsla = this.hsva ? hsva2hsla(this.hsva) : new Hsla(0, 0, 0, 0)

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
    }

    onSaturationInput(value: TextEvent) {
        if (typeof value != 'string') {
            const hsla = this.hsva ? hsva2hsla(this.hsva) : new Hsla(0, 0, 0, 0)

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
    }

    public onCyanInput(value: TextEvent) {
        if (typeof value != 'string') {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

            this.cmyk = this.cmyk || new Cmyk(0, 0, 0, 0, 0)

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
    }

    public onMagentaInput(value: TextEvent) {
        if (typeof value != 'string') {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

            this.cmyk = this.cmyk || new Cmyk(0, 0, 0, 0, 0)

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
    }

    public onYellowInput(value: TextEvent) {
        if (typeof value != 'string') {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

            this.cmyk = this.cmyk || new Cmyk(0, 0, 0, 0, 0)

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
    }

    public onBlackInput(value: TextEvent) {
        if (typeof value != 'string') {
            const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

            this.cmyk = this.cmyk || new Cmyk(0, 0, 0, 0, 0)

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
    }

    onAddPresetColor(value: string) {
        if (!this.presetColors?.filter((color) => (color == value)).length) {
            this.presetColors = this.presetColors?.concat(value)

            if (this.callbacks) {
                this.callbacks.presetColorsChanged(this.presetColors)
            }
        }
    }

    onRemovePresetColor(value: string) {
        this.presetColors = this.presetColors?.filter((color) => (color != value))

        if (this.callbacks) {
            this.callbacks.presetColorsChanged(this.presetColors)
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
        this.hsva = this.hsva || new Hsva(0, 0, 0, 0)
        this.cmyk = this.cmyk || new Cmyk(0, 0, 0, 0, 0)

        if (this.mode == ColorModeInternal.grayscale) {
            this.hsva.s = 0
        }

        let rgba: Rgba

        const lastOutput = this.outputColor

        const hsla = hsva2hsla(this.hsva)

        if (!this.cmykEnabled) {
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

            if (this.cmykEnabled) {
                this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k,
                    Math.round(this.cmyk.a * 100) / 100)
            }

            const allowHex8 = this.alphaChannel === AlphaChannelEnum.always

            this.hexText = rgbaToHex(rgba, allowHex8)
            this.hexAlpha = this.rgbaText.a
        }

        if (this.outputFormat == OutputFormatEnum.auto && this.hsva.a < 1 && !AlphaEnabledFormats.has(this.format)) {
            this.format = this.hsva.a < 1 ? ColorFormatEnum.rgba : ColorFormatEnum.hex
        }

        this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')'
        this.alphaSliderColor = 'linear-gradient(to right, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 0) 0%, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 1) 100%)'

        this.svSliderLight = opaqueSliderLight(rgba)
        this.hueSliderLight = opaqueSliderLight(hue)
        this.valueSliderLight = opaqueSliderLight(rgba)
        this.alphaSliderLight = transparentSliderLight(rgba)

        this.outputColor = formatOutput(this.hsva, this.outputFormat, this.alphaChannel)
        this.selectedColor = formatOutput(this.hsva, OutputFormatEnum.rgba)

        if (this.format !== ColorFormatEnum.cmyk) {
            this.cmykColor = ''
        } else {
            this.cmykColor = formatCmyk(this.cmyk, this.alphaChannel)
        }

        this.slider = new SliderPosition(
            (this.sliderH || this.hsva.h),
            this.hsva.s,
            (1 - this.hsva.v),
            this.hsva.a
        )

        if (emit && lastOutput != this.outputColor && this.callbacks) {
            if (this.cmykEnabled) {
                this.callbacks.cmykChanged(this.cmykColor)
            }

            this.callbacks.colorChanged(this.outputColor)
        }
    }

    fill(n: number) {
        return new Array(n).fill(1)
    }
}
