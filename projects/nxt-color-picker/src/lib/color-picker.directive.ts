import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
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
    overlayRef: OverlayRef

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
    @Input() cpPositionOffset: number = 0

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
        private elRef: ElementRef,
        private overlay: Overlay
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
        this.dispose()
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

        if (changes.cpDialogDisplay) {
            this.dispose()
            this.create()
        }

        if ((changes.cpPosition || changes.cpPositionOffset) && this.cpDialogDisplay == DialogDisplay.popup) {
            if (this.overlayRef) {
                this.overlayRef.updatePositionStrategy(this.overlay.position()
                    .flexibleConnectedTo(this.elRef)
                    .withPositions(this.getPositions(this.cpPositionOffset)))
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
            this.dialog.openDialog(this.cpColor)
        }
    }

    closeDialog() {
        if (this.dialog && this.cpDialogDisplay == DialogDisplay.popup) {
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

        if (this.cpUseRootViewContainer && this.cpDialogDisplay != DialogDisplay.inline) {
            const classOfRootComponent = this.appRef.componentTypes[0]
            const appInstance = this.injector.get(classOfRootComponent)

            vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef

            if (vcRef == this.vcRef) {
                console.warn('You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef! Please expose it by adding \'vcRef: ViewContainerRef\' to the constructor.')
            }
        }

        if (this.cpDialogDisplay != DialogDisplay.inline) {
            const pos = this.overlay.position()
                .flexibleConnectedTo(this.elRef)
                .withFlexibleDimensions(false)
                .withPush(false)
                .withPositions(this.getPositions(this.cpPositionOffset))
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
        if (this.dialog) {
            this.dialog.setupDialog({ ...this, callbacks: this._callbacks, elementRef: this.elRef, color: this.cpColor })
        }
    }

    private getPositions(offset = 0) {
        const pos: ConnectedPosition[] = []
        const position = this.cpPosition || DialogPosition.auto

        const bb = this.elRef.nativeElement.getBoundingClientRect()

        if (position == DialogPosition.auto || position == DialogPosition.bottom) {
            pos.push({
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                panelClass: 'color-picker__arrow--bottom',
                offsetY: bb.height * offset
            })
        }

        if (position == DialogPosition.auto || position == DialogPosition.top) {
            pos.push({
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom',
                panelClass: 'color-picker__arrow--top',
                offsetY: -bb.height * offset
            })
        }

        if (position == DialogPosition.auto || position == DialogPosition.left) {
            pos.push({
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                panelClass: 'color-picker__arrow--left',
                offsetX: -bb.width * offset
            })
        }

        if (position == DialogPosition.auto || position == DialogPosition.right) {
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
