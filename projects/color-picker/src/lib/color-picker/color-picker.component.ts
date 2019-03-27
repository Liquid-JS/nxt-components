import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import { opaqueSliderLight, transparentSliderLight } from '../../util/contrast'
import { Hsla, Hsva, Rgba } from '../../util/formats'
import { ColorModeInternal, parseColorMode, Position, sizeToString, SliderPosition } from '../../util/helpers'
import { AlphaChannel, ColorFormat, ColorMode, DialogDisplay, DialogPosition, OutputFormat } from '../../util/types'
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

    private listenerResize: any
    private listenerMouseDown: any

    private directiveInstance: any

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

    public show: boolean
    public hidden: boolean

    public top: number
    public left: number
    public position: Position

    public format: ColorFormat
    public slider: SliderPosition

    public hexText: string
    public hexAlpha: number

    public hslaText: Hsla
    public rgbaText: Rgba

    public arrowTop: number

    public selectedColor: string
    public hueSliderColor: string
    public alphaSliderColor: string

    public svSliderLight = false
    public hueSliderLight = false
    public valueSliderLight = false
    public alphaSliderLight = false

    public cpWidth: string
    public cpHeight: string

    public cpColorMode: ColorModeInternal = ColorModeInternal.color

    public cpAlphaChannel: AlphaChannel
    public cpOutputFormat: OutputFormat

    public cpDisableInput: boolean
    public cpDialogDisplay: DialogDisplay

    public cpIgnoredElements: any

    public cpSaveClickOutside: boolean
    public cpCloseClickOutside: boolean

    public cpPosition: DialogPosition = DialogPosition.right
    public cpPositionOffset: number

    public cpOKButton: boolean
    public cpOKButtonText: string

    public cpCancelButton: boolean
    public cpCancelButtonText: string

    public cpPresetLabel: string
    public cpPresetColors: string[]
    public cpMaxPresetColorsLength: number

    public cpPresetEmptyMessage: string

    public cpAddColorButton: boolean
    public cpAddColorButtonText: string

    @ViewChild('dialogPopup') private dialogElement: ElementRef<HTMLDivElement>

    @HostListener('document:keyup.esc', ['$event']) handleEsc(event: any): void {
        if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
            this.onCancelColor(event)
        }
    }

    @HostListener('document:keyup.enter', ['$event']) handleEnter(event: any): void {
        if (this.show && this.cpDialogDisplay == DialogDisplay.popup) {
            this.onAcceptColor(event)
        }
    }

    constructor(
        private elRef: ElementRef,
        private cdRef: ChangeDetectorRef,
        private service: ColorPickerService
    ) { }

    ngOnInit(): void {
        this.slider = new SliderPosition(0, 0, 0, 0)

        if (this.cpOutputFormat == OutputFormat.rgba) {
            this.format = ColorFormat.rgba
        } else if (this.cpOutputFormat == OutputFormat.hsla) {
            this.format = ColorFormat.hsla
        } else {
            this.format = ColorFormat.hex
        }

        this.listenerMouseDown = (event: any) => { this.onMouseDown(event) }
        this.listenerResize = () => { this.onResize() }

        this.openDialog(this.initialColor, false)
    }

    ngOnDestroy(): void {
        this.closeDialog()
    }

    ngAfterViewChecked(): void {
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

    public openDialog(color: any, emit: boolean = true): void {
        this.service.setActive(this)

        this.setInitialColor(color)

        this.setColorFromString(color, emit)

        this.openColorPicker()
    }

    public closeDialog(): void {
        this.closeColorPicker()
    }

    public setupDialog(instance: any, elementRef: ElementRef, color: any, cpWidth: string, cpHeight: string, cpDialogDisplay: DialogDisplay, cpFallbackColor: string, cpColorMode: ColorMode, cpAlphaChannel: AlphaChannel, cpOutputFormat: OutputFormat, cpDisableInput: boolean, cpIgnoredElements: any, cpSaveClickOutside: boolean, cpCloseClickOutside: boolean, cpUseRootViewContainer: boolean, cpPosition: DialogPosition, cpPositionOffset: string, cpPositionRelativeToArrow: boolean, cpPresetLabel: string, cpPresetColors: string[], cpMaxPresetColorsLength: number, cpPresetEmptyMessage: string, cpOKButton: boolean, cpOKButtonText: string, cpCancelButton: boolean, cpCancelButtonText: string, cpAddColorButton: boolean, cpAddColorButtonText: string): void {
        this.setInitialColor(color)

        this.cpColorMode = parseColorMode(cpColorMode)

        this.directiveInstance = instance
        this.directiveElementRef = elementRef

        this.cpDisableInput = cpDisableInput

        this.cpAlphaChannel = cpAlphaChannel
        this.cpOutputFormat = cpOutputFormat
        this.cpDialogDisplay = cpDialogDisplay

        this.cpIgnoredElements = cpIgnoredElements

        this.cpSaveClickOutside = cpSaveClickOutside
        this.cpCloseClickOutside = cpCloseClickOutside

        this.useRootViewContainer = cpUseRootViewContainer

        this.cpWidth = sizeToString(cpWidth)
        this.cpHeight = sizeToString(cpHeight)

        this.cpPosition = cpPosition
        this.cpPositionOffset = parseInt(cpPositionOffset, 10)

        this.cpOKButton = cpOKButton
        this.cpOKButtonText = cpOKButtonText

        this.cpCancelButton = cpCancelButton
        this.cpCancelButtonText = cpCancelButtonText

        this.fallbackColor = cpFallbackColor || '#fff'

        this.setPresetConfig(cpPresetLabel, cpPresetColors)

        this.cpMaxPresetColorsLength = cpMaxPresetColorsLength
        this.cpPresetEmptyMessage = cpPresetEmptyMessage

        this.cpAddColorButton = cpAddColorButton
        this.cpAddColorButtonText = cpAddColorButtonText

        if (!cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0
        }

        if (cpDialogDisplay == DialogDisplay.inline) {
            this.dialogArrowSize = 0
            this.dialogArrowOffset = 0
        }

        if (cpOutputFormat == OutputFormat.hex &&
            cpAlphaChannel != AlphaChannel.always && cpAlphaChannel != AlphaChannel.forced) {
            this.cpAlphaChannel = AlphaChannel.disabled
        }
    }

    public setInitialColor(color: string): void {
        this.initialColor = color
        this.setColorFromString(this.initialColor, false, true)
    }

    public setPresetConfig(cpPresetLabel: string, cpPresetColors: string[]): void {
        this.cpPresetLabel = cpPresetLabel
        this.cpPresetColors = cpPresetColors
    }

    public setColorFromString(value: string, emit: boolean = true, update: boolean = true): void {
        let hsva: Hsva | null

        if (this.cpAlphaChannel == AlphaChannel.always || this.cpAlphaChannel == AlphaChannel.forced) {
            hsva = this.service.stringToHsva(value, true)

            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false)
            }
        } else {
            hsva = this.service.stringToHsva(value, false)
        }

        if (!hsva && !this.hsva) {
            hsva = this.service.stringToHsva(this.fallbackColor, false)
        }

        if (hsva) {
            this.hsva = hsva

            this.sliderH = this.hsva.h

            this.updateColorPicker(emit, update)
        }
    }

    public onResize(): void {
        if (this.position == Position.fixed) {
            this.setDialogPosition()
        } else if (this.cpDialogDisplay != DialogDisplay.inline) {
            this.closeColorPicker()
        }
    }

    public onDragEnd(slider: string): void {
        this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor })
    }

    public onDragStart(slider: string): void {
        this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor })
    }

    public onMouseDown(event: MouseEvent): void {
        if (this.cpDialogDisplay == DialogDisplay.popup &&
            event.target !== this.directiveElementRef.nativeElement &&
            !this.isDescendant(this.elRef.nativeElement, event.target) &&
            !this.isDescendant(this.directiveElementRef.nativeElement, event.target) &&
            this.cpIgnoredElements.filter((item: any) => item === event.target).length === 0) {
            if (!this.cpSaveClickOutside) {
                this.setColorFromString(this.initialColor, false)

                this.directiveInstance.colorChanged(this.initialColor)
            }

            if (this.cpCloseClickOutside) {
                this.closeColorPicker()
            }
        }
    }

    public onAcceptColor(event: Event): void {
        event.stopPropagation()

        if (this.cpDialogDisplay == DialogDisplay.popup) {
            this.closeColorPicker()
        }

        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor)
        }
    }

    public onCancelColor(event: Event): void {
        event.stopPropagation()

        this.setColorFromString(this.initialColor, true)

        if (this.cpDialogDisplay == DialogDisplay.popup) {
            this.directiveInstance.colorChanged(this.initialColor, true)

            this.closeColorPicker()
        }

        this.directiveInstance.colorCanceled()
    }

    public onFormatToggle(change: number): void {
        const availableFormats = this.dialogInputFields.length

        const nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
            availableFormats) + availableFormats) % availableFormats

        this.format = this.dialogInputFields[nextFormat]
    }

    public onColorChange(value: { s: number, v: number, rgX: number, rgY: number }): void {
        this.hsva.s = value.s / value.rgX
        this.hsva.v = value.v / value.rgY

        this.updateColorPicker()

        this.directiveInstance.sliderChanged({
            slider: 'lightness',
            value: this.hsva.v,
            color: this.outputColor
        })

        this.directiveInstance.sliderChanged({
            slider: 'saturation',
            value: this.hsva.s,
            color: this.outputColor
        })
    }

    public onHueChange(value: { v: number, rgX: number }): void {
        this.hsva.h = value.v / value.rgX
        this.sliderH = this.hsva.h

        this.updateColorPicker()

        this.directiveInstance.sliderChanged({
            slider: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        })
    }

    public onValueChange(value: { v: number, rgX: number }): void {
        this.hsva.v = value.v / value.rgX

        this.updateColorPicker()

        this.directiveInstance.sliderChanged({
            slider: 'value',
            value: this.hsva.v,
            color: this.outputColor
        })
    }

    public onAlphaChange(value: { v: number, rgX: number }): void {
        this.hsva.a = value.v / value.rgX

        this.updateColorPicker()

        this.directiveInstance.sliderChanged({
            slider: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        })
    }

    public onHexInput(value: string | null): void {
        if (value === null) {
            this.updateColorPicker()
        } else {
            if (value && value[0] !== '#') {
                value = '#' + value
            }

            let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi

            if (this.cpAlphaChannel == AlphaChannel.always) {
                validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi
            }

            const valid = validHex.test(value)

            if (valid) {
                if (value.length < 5) {
                    value = '#' + value.substring(1)
                        .split('')
                        .map(c => c + c)
                        .join('')
                }

                if (this.cpAlphaChannel == AlphaChannel.forced) {
                    value += Math.round(this.hsva.a * 255).toString(16)
                }

                this.setColorFromString(value, true, false)
            }

            this.directiveInstance.inputChanged({
                input: 'hex',
                valid: valid,
                value: value,
                color: this.outputColor
            })
        }
    }

    public onRedInput(value: { v: number, rg: number }): void {
        const rgba = this.service.hsvaToRgba(this.hsva)

        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            rgba.r = value.v / value.rg

            this.hsva = this.service.rgbaToHsva(rgba)

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        this.directiveInstance.inputChanged({
            input: 'red',
            valid: valid,
            value: rgba.r,
            color: this.outputColor
        })
    }

    public onBlueInput(value: { v: number, rg: number }): void {
        const rgba = this.service.hsvaToRgba(this.hsva)

        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            rgba.b = value.v / value.rg

            this.hsva = this.service.rgbaToHsva(rgba)

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        this.directiveInstance.inputChanged({
            input: 'blue',
            valid: valid,
            value: rgba.b,
            color: this.outputColor
        })
    }

    public onGreenInput(value: { v: number, rg: number }): void {
        const rgba = this.service.hsvaToRgba(this.hsva)

        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            rgba.g = value.v / value.rg

            this.hsva = this.service.rgbaToHsva(rgba)

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        this.directiveInstance.inputChanged({
            input: 'green',
            valid: valid,
            value: rgba.g,
            color: this.outputColor
        })
    }

    public onHueInput(value: { v: number, rg: number }) {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            this.hsva.h = value.v / value.rg

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        this.directiveInstance.inputChanged({
            input: 'hue',
            valid: valid,
            value: this.hsva.h,
            color: this.outputColor
        })
    }

    public onValueInput(value: { v: number, rg: number }): void {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            this.hsva.v = value.v / value.rg

            this.updateColorPicker()
        }

        this.directiveInstance.inputChanged({
            input: 'value',
            valid: valid,
            value: this.hsva.v,
            color: this.outputColor
        })
    }

    public onAlphaInput(value: { v: number, rg: number }): void {
        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            this.hsva.a = value.v / value.rg

            this.updateColorPicker()
        }

        this.directiveInstance.inputChanged({
            input: 'alpha',
            valid: valid,
            value: this.hsva.a,
            color: this.outputColor
        })
    }

    public onLightnessInput(value: { v: number, rg: number }): void {
        const hsla = this.service.hsva2hsla(this.hsva)

        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            hsla.l = value.v / value.rg

            this.hsva = this.service.hsla2hsva(hsla)

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        this.directiveInstance.inputChanged({
            input: 'lightness',
            valid: valid,
            value: hsla.l,
            color: this.outputColor
        })
    }

    public onSaturationInput(value: { v: number, rg: number }): void {
        const hsla = this.service.hsva2hsla(this.hsva)

        const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg

        if (valid) {
            hsla.s = value.v / value.rg

            this.hsva = this.service.hsla2hsva(hsla)

            this.sliderH = this.hsva.h

            this.updateColorPicker()
        }

        this.directiveInstance.inputChanged({
            input: 'saturation',
            valid: valid,
            value: hsla.s,
            color: this.outputColor
        })
    }

    public onAddPresetColor(event: any, value: string): void {
        event.stopPropagation()

        if (!this.cpPresetColors.filter((color) => (color === value)).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value)

            this.directiveInstance.presetColorsChanged(this.cpPresetColors)
        }
    }

    public onRemovePresetColor(event: any, value: string): void {
        event.stopPropagation()

        this.cpPresetColors = this.cpPresetColors.filter((color) => (color !== value))

        this.directiveInstance.presetColorsChanged(this.cpPresetColors)
    }

    // Private helper functions for the color picker dialog status

    private openColorPicker(): void {
        if (!this.show) {
            this.show = true
            this.hidden = true

            this.directiveInstance.stateChanged(true)

            document.addEventListener('mousedown', this.listenerMouseDown)

            window.addEventListener('resize', this.listenerResize)
        }
    }

    private closeColorPicker(): void {
        if (this.show) {
            this.show = false

            this.directiveInstance.stateChanged(false)

            document.removeEventListener('mousedown', this.listenerMouseDown)

            window.removeEventListener('resize', this.listenerResize)

            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges()
            }
        }
    }

    private updateColorPicker(emit: boolean = true, update: boolean = true): void {
        if (this.cpColorMode == ColorModeInternal.grayscale) {
            this.hsva.s = 0
        }

        const lastOutput = this.outputColor

        const hsla = this.service.hsva2hsla(this.hsva)
        const rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva))

        const hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)))

        if (update) {
            this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100),
                Math.round(hsla.a * 100) / 100)

            this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100)

            const allowHex8 = this.cpAlphaChannel == AlphaChannel.always

            this.hexText = this.service.rgbaToHex(rgba, allowHex8)
            this.hexAlpha = this.rgbaText.a
        }

        if (this.cpOutputFormat == OutputFormat.auto) {
            if (this.hsva.a < 1) {
                this.format = this.hsva.a < 1 ? ColorFormat.rgba : ColorFormat.hex
            }
        }

        this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')'
        this.alphaSliderColor = 'linear-gradient(to right, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 0) 0%, rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ', 1) 100%)'

        this.svSliderLight = opaqueSliderLight(rgba)
        this.hueSliderLight = opaqueSliderLight(hue)
        this.valueSliderLight = opaqueSliderLight(rgba)
        this.alphaSliderLight = transparentSliderLight(rgba)

        this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel)
        this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null)

        this.slider = new SliderPosition(
            (this.sliderH || this.hsva.h),
            this.hsva.s,
            (1 - this.hsva.v),
            this.hsva.a
        )

        if (emit && lastOutput !== this.outputColor) {
            this.directiveInstance.colorChanged(this.outputColor)
        }
    }

    // Private helper functions for the color picker dialog positioning

    private setDialogPosition(): void {
        if (this.cpDialogDisplay == DialogDisplay.inline) {
            this.position = Position.relative
        } else {
            let position = Position.static, transform = '', style

            let parentNode: any = null, transformNode: any = null

            let node = this.directiveElementRef.nativeElement.parentNode

            const dialogHeight = this.dialogElement.nativeElement.offsetHeight

            while (node !== null && node.tagName !== 'HTML') {
                style = window.getComputedStyle(node)
                position = style.getPropertyValue('position')
                transform = style.getPropertyValue('transform')

                if (position != Position.static && parentNode === null) {
                    parentNode = node
                }

                if (transform && transform !== 'none' && transformNode === null) {
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
                if (parentNode === null) {
                    parentNode = node
                }

                const boxParent = this.createDialogBox(parentNode, (position != Position.fixed))

                this.top = boxDirective.top - boxParent.top
                this.left = boxDirective.left - boxParent.left
            }

            if (position == Position.fixed) {
                this.position = Position.fixed
            }

            if (this.cpPosition == DialogPosition.left) {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset
                this.left -= this.width + this.dialogArrowSize - 2
            } else if (this.cpPosition == DialogPosition.top) {
                this.arrowTop = dialogHeight - 1
                this.top -= dialogHeight + this.dialogArrowSize
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset
            } else if (this.cpPosition == DialogPosition.bottom) {
                this.top += boxDirective.height + this.dialogArrowSize
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset
            } else {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset
                this.left += boxDirective.width + this.dialogArrowSize - 2
            }
        }
    }

    // Private helper functions for the color picker dialog positioning and opening

    private isDescendant(parent: any, child: any): boolean {
        let node: any = child.parentNode

        while (node !== null) {
            if (node === parent) {
                return true
            }

            node = node.parentNode
        }

        return false
    }

    private createDialogBox(element: any, offset: boolean): any {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        }
    }
}
