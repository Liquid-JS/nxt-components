import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EventEmitter, HostListener, Injector, Input, OnChanges, OnDestroy, Output, ViewContainerRef } from '@angular/core'
import { AlphaChannel, ColorMode, DialogDisplay, DialogPosition, OutputFormat } from '../util/types'
import { ColorPickerComponent } from './color-picker/color-picker.component'

@Directive({
    selector: '[cpColor]'
})
export class ColorPickerDirective implements OnChanges, OnDestroy {

    private dialog: ColorPickerComponent

    private dialogCreated: boolean = false
    private ignoreChanges: boolean = false

    private cmpRef: ComponentRef<ColorPickerComponent>

    @Input() cpColor: string

    @Input() cpWidth: string = '230px'
    @Input() cpHeight: string = 'auto'

    @Input() cpToggle: boolean = false
    @Input() cpDisabled: boolean = false

    @Input() cpIgnoredElements: any = []

    @Input() cpFallbackColor: string = ''

    @Input() cpColorMode: ColorMode = 'color'

    @Input() cpOutputFormat: OutputFormat = OutputFormat.auto
    @Input() cpAlphaChannel: AlphaChannel = AlphaChannel.enabled

    @Input() cpDisableInput: boolean = false

    @Input() cpDialogDisplay: DialogDisplay = DialogDisplay.popup

    @Input() cpSaveClickOutside: boolean = true
    @Input() cpCloseClickOutside: boolean = true

    @Input() cpUseRootViewContainer: boolean = false

    @Input() cpPosition: DialogPosition = DialogPosition.right
    @Input() cpPositionOffset: string = '0%'
    @Input() cpPositionRelativeToArrow: boolean = false

    @Input() cpOKButton: boolean = false
    @Input() cpOKButtonText: string = 'OK'

    @Input() cpCancelButton: boolean = false
    @Input() cpCancelButtonText: string = 'Cancel'

    @Input() cpPresetLabel: string = 'Preset colors'
    @Input() cpPresetColors: string[]
    @Input() cpMaxPresetColorsLength: number = 6

    @Input() cpPresetEmptyMessage: string = 'No colors added'

    @Input() cpAddColorButton: boolean = false
    @Input() cpAddColorButtonText: string = 'Add color'

    @Output() cpInputChange = new EventEmitter<any>(true)

    @Output() cpToggleChange = new EventEmitter<boolean>(true)

    @Output() cpSliderChange = new EventEmitter<any>(true)
    @Output() cpSliderDragEnd = new EventEmitter<string>(true)
    @Output() cpSliderDragStart = new EventEmitter<string>(true)

    @Output() cpOpen = new EventEmitter<string>(true)
    @Output() cpClose = new EventEmitter<string>(true)

    @Output() cpCancel = new EventEmitter<string>(true)
    @Output() cpSelect = new EventEmitter<string>(true)
    @Output() cpColorChange = new EventEmitter<string>(false)

    @Output() cpPresetColorsChange = new EventEmitter<any>(true)

    @HostListener('click') handleClick(): void {
        this.inputFocus()
    }

    @HostListener('focus') handleFocus(): void {
        this.inputFocus()
    }

    @HostListener('input', ['$event']) handleInput(event: any): void {
        this.inputChange(event)
    }

    constructor(
        private injector: Injector,
        private cfr: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private vcRef: ViewContainerRef,
        private elRef: ElementRef
    ) { }

    ngOnDestroy(): void {
        if (this.cmpRef !== undefined) {
            this.cmpRef.destroy()
        }
    }

    ngOnChanges(changes: any): void {
        if (changes.cpToggle && !this.cpDisabled) {
            if (changes.cpToggle.currentValue) {
                this.openDialog()
            } else if (!changes.cpToggle.currentValue) {
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

        if (changes.cpPresetLabel || changes.cpPresetColors) {
            if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors)
            }
        }
    }

    public openDialog(): void {
        if (!this.dialogCreated) {
            let vcRef = this.vcRef

            this.dialogCreated = true

            if (this.cpUseRootViewContainer && this.cpDialogDisplay != DialogDisplay.inline) {
                const classOfRootComponent = this.appRef.componentTypes[0]
                const appInstance = this.injector.get(classOfRootComponent)

                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef

                if (vcRef === this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, ' +
                        'but the root component is not exposing viewContainerRef!' +
                        'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.')
                }
            }

            const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent)

            this.cmpRef = vcRef.createComponent(compFactory, 0, this.injector, [])

            this.cmpRef.instance.setupDialog(this, this.elRef, this.cpColor, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpOKButton, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonText)

            this.dialog = this.cmpRef.instance

            if (this.vcRef !== vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges()
            }
        } else if (this.dialog) {
            this.dialog.openDialog(this.cpColor)
        }
    }

    public closeDialog(): void {
        if (this.dialog && this.cpDialogDisplay == DialogDisplay.popup) {
            this.dialog.closeDialog()
        }
    }

    public stateChanged(state: boolean): void {
        this.cpToggleChange.emit(state)

        if (state) {
            this.cpOpen.emit(this.cpColor)
        } else {
            this.cpClose.emit(this.cpColor)
        }
    }

    public colorChanged(value: string, ignore: boolean = true): void {
        this.ignoreChanges = ignore

        this.cpColorChange.emit(value)
    }

    public colorCanceled(): void {
        this.cpCancel.emit()
    }

    public colorSelected(value: string): void {
        this.cpSelect.emit(value)
    }

    public inputFocus(): void {
        const element = this.elRef.nativeElement

        const ignored = this.cpIgnoredElements.filter((item: any) => item === element)

        if (!this.cpDisabled && !ignored.length) {
            if (typeof document !== 'undefined' && element === document.activeElement) {
                this.openDialog()
            } else if (!this.dialog || !this.dialog.show) {
                this.openDialog()
            } else {
                this.closeDialog()
            }
        }
    }

    public inputChange(event: any): void {
        if (this.dialog) {
            this.dialog.setColorFromString(event.target.value, true)
        } else {
            this.cpColor = event.target.value

            this.cpColorChange.emit(this.cpColor)
        }
    }

    public inputChanged(event: any): void {
        this.cpInputChange.emit(event)
    }

    public sliderChanged(event: any): void {
        this.cpSliderChange.emit(event)
    }

    public sliderDragEnd(event: any): void {
        this.cpSliderDragEnd.emit(event)
    }

    public sliderDragStart(event: any): void {
        this.cpSliderDragStart.emit(event)
    }

    public presetColorsChanged(value: any[]): void {
        this.cpPresetColorsChange.emit(value)
    }
}
