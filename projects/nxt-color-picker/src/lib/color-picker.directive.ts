import { ApplicationRef, ComponentRef, Directive, ElementRef, EventEmitter, HostListener, Injector, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewContainerRef } from '@angular/core'
import { composedPath, DirectiveCallbacks } from '../util/helpers'
import { AlphaChannel, ColorMode, DialogDisplay, DialogPosition, InputChangeEvent, OutputFormat, SliderChangeEvent } from '../util/types'
import { ColorPickerComponent } from './color-picker/color-picker.component'

@Directive({
    selector: '[cpColor]'
})
export class ColorPickerDirective implements OnChanges, OnDestroy {

    private dialog: ColorPickerComponent

    private dialogCreated: boolean = false
    private ignoreChanges: boolean = false

    private cmpRef: ComponentRef<ColorPickerComponent>

    private readonly _callbacks: DirectiveCallbacks = {
        stateChanged: (state: boolean) => {
            this.cpToggleChange.emit(state)

            if (state) {
                this.cpOpen.emit(this.cpColor)
            } else {
                this.cpClose.emit(this.cpColor)
            }
        },
        cmykChanged: (value: string, ignore: boolean = true) => {
            this.ignoreChanges = ignore

            this.cpCmykColorChange.emit(value)
        },
        colorChanged: (value: string, ignore: boolean = true) => {
            this.ignoreChanges = ignore

            this.cpColorChange.emit(value)
        },
        colorSelectCanceled: () => {
            this.cpColorSelectCancel.emit()
        },
        colorSelected: (value: string) => {
            this.cpColorSelect.emit(value)
        },
        inputChanged: (event: InputChangeEvent) => {
            this.cpInputChange.emit(event)
        },
        sliderDragStart: (event: SliderChangeEvent) => {
            this.cpSliderDragStart.emit(event)
        },
        sliderChanged: (event: SliderChangeEvent) => {
            this.cpSliderChange.emit(event)
        },
        sliderDragEnd: (event: SliderChangeEvent) => {
            this.cpSliderDragEnd.emit(event)
        },
        presetColorsChanged: (value: any[]) => {
            this.cpPresetColorsChange.emit(value)
        }
    }

    private get ignoredElements() {
        const ign = Array.isArray(this.cpIgnoredElements) ? this.cpIgnoredElements : [this.cpIgnoredElements]
        return ign.filter(el => !!el)
    }

    @Input() cpColor: string

    @Input() cpWidth: string = '230px'
    @Input() cpHeight: string = 'auto'

    @Input() cpToggle: boolean = false
    @Input() cpDisabled: boolean = false

    @Input() cpMode: ColorMode = 'color'

    @Input() cpOutputFormat: OutputFormat = OutputFormat.auto
    @Input() cpCmykEnabled: boolean = false
    @Input() cpAlphaChannel: AlphaChannel = AlphaChannel.enabled
    @Input() cpFallbackColor: string = ''

    @Input() cpPosition: DialogPosition = DialogPosition.right
    @Input() cpPositionOffset: string = '0%'
    @Input() cpPositionRelativeToArrow: boolean = false

    @Input() cpPresetLabel: boolean | string = true
    @Input() cpPresetColors: string[]

    @Input() cpDisableInput: boolean = false

    @Input() cpDialogDisplay: DialogDisplay = DialogDisplay.popup

    @Input() cpIgnoredElements = new Array<any>()

    @Input() cpSaveClickOutside: boolean = true
    @Input() cpCloseClickOutside: boolean = true

    @Input() cpOKButton: boolean = false

    @Input() cpCancelButton: boolean = false

    @Input() cpAddColorButton: boolean = false

    @Input() cpMaxPresetColors: number = 6

    @Input() cpUseRootViewContainer: boolean = false

    @Output() cpOpen = new EventEmitter<string>(true)
    @Output() cpClose = new EventEmitter<string>(true)

    @Output() cpInputChange = new EventEmitter<InputChangeEvent>(true)

    @Output() cpToggleChange = new EventEmitter<boolean>(true)

    @Output() cpSliderDragStart = new EventEmitter<SliderChangeEvent>(true)
    @Output() cpSliderChange = new EventEmitter<SliderChangeEvent>(true)
    @Output() cpSliderDragEnd = new EventEmitter<SliderChangeEvent>(true)

    @Output() cpColorSelect = new EventEmitter<string>(true)
    @Output() cpColorSelectCancel = new EventEmitter<void>(true)
    @Output() cpColorChange = new EventEmitter<string>(false)

    @Output() cpCmykColorChange = new EventEmitter<string>(true)

    @Output() cpPresetColorsChange = new EventEmitter<any[]>(true)

    constructor(
        private injector: Injector,
        private appRef: ApplicationRef,
        private vcRef: ViewContainerRef,
        private elRef: ElementRef
    ) { }

    @HostListener('focus', ['$event'])
    @HostListener('click', ['$event'])
    handleOpen(event: Event) {
        const path = new Set(composedPath(event))
        const ignored = this.ignoredElements.find(el => path.has(el))

        if (!this.cpDisabled && !ignored) {
            this.openDialog()
        }
    }

    @HostListener('input', ['$event'])
    @HostListener('change', ['$event'])
    handleInput(event: Event) {
        const value = ((event && event.target && event.target['value'] || '') + '').trim()

        if (this.dialog) {
            this.dialog.setColorFromString(value, true)
        } else {
            this.cpColor = value
            this.cpColorChange.emit(this.cpColor)
        }
    }

    ngOnDestroy() {
        if (this.cmpRef != undefined) {
            this.cmpRef.destroy()
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.cpToggle && !this.cpDisabled) {
            if (changes.cpToggle.currentValue) {
                this.openDialog()
            } else {
                this.closeDialog()
            }
        }

        if (changes.cpColor) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay == DialogDisplay.inline) {
                    this.dialog.setInitialColor(changes.cpColor.currentValue)
                }

                this.dialog.setColorFromString(changes.cpColor.currentValue, false)

                if (this.cpUseRootViewContainer && this.cpDialogDisplay != DialogDisplay.inline) {
                    this.cmpRef.changeDetectorRef.detectChanges()
                }
            }

            this.ignoreChanges = false
        }

        if ((changes.cpPresetLabel || changes.cpPresetColors) && this.dialog) {
            this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors)
        }
    }

    openDialog() {
        if (!this.dialogCreated) {
            let vcRef = this.vcRef

            this.dialogCreated = true

            if (this.cpUseRootViewContainer && this.cpDialogDisplay != DialogDisplay.inline) {
                const classOfRootComponent = this.appRef.componentTypes[0]
                const appInstance = this.injector.get(classOfRootComponent)

                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef

                if (vcRef == this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef! Please expose it by adding \'vcRef: ViewContainerRef\' to the constructor.')
                }
            }

            this.cmpRef = vcRef.createComponent(ColorPickerComponent, { injector: this.injector, index: 0 })

            this.dialog = this.cmpRef.instance

            this.setupDialog()

            if (this.vcRef != vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges()
            }
        } else if (this.dialog) {
            this.dialog.openDialog(this.cpColor)
        }
    }

    closeDialog() {
        if (this.dialog && this.cpDialogDisplay == DialogDisplay.popup) {
            this.dialog.closeDialog()
        }
    }

    private setupDialog() {
        if (this.dialog) {
            this.dialog.setupDialog({ ...this, callbacks: this._callbacks, elementRef: this.elRef, color: this.cpColor })
        }
    }
}
