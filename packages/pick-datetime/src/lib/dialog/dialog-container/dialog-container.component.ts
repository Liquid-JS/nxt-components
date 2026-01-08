import { animate, animateChild, AnimationEvent, keyframes, style, transition, trigger } from '@angular/animations'
import { ConfigurableFocusTrap, ConfigurableFocusTrapFactory } from '@angular/cdk/a11y'
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal'
import { ChangeDetectorRef, Component, ComponentRef, ElementRef, EmbeddedViewRef, Inject, Optional, DOCUMENT, viewChild, output, signal, computed } from '@angular/core'
import { DialogConfig } from '../../class/dialog-config.class'

/** @internal */
export type DialogContainerState = 'void' | 'enter' | 'exit'

/** @internal */
const zoomFadeIn = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})'
}

/** @internal */
const zoomFadeInFrom = {
    opacity: 0,
    transform: 'translateX({{ x }}) translateY({{ y }}) scale({{scale}})',
    transformOrigin: '{{ ox }} {{ oy }}'
}

/** @internal */
@Component({
    selector: 'nxt-dialog-container',
    templateUrl: './dialog-container.component.html',
    animations: [
        trigger('slideModal', [
            transition('void => enter', [
                style(zoomFadeInFrom),
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style('*')),
                animate('150ms', keyframes([
                    style({ transform: 'scale(1)', offset: 0 }),
                    style({ transform: 'scale(1.05)', offset: 0.3 }),
                    style({ transform: 'scale(.95)', offset: 0.8 }),
                    style({ transform: 'scale(1)', offset: 1.0 })
                ])),
                animateChild()
            ], {
                params: {
                    x: '0px',
                    y: '0px',
                    ox: '50%',
                    oy: '50%',
                    scale: 1
                }
            }),
            transition('enter => exit', [animateChild(), animate(200, style(zoomFadeIn))], { params: { x: '0px', y: '0px', ox: '50%', oy: '50%' } })
        ])
    ],
    imports: [
        CdkPortalOutlet
    ],
    host: {
        '[class.nxt-dialog-container]': 'true',
        '[attr.tabindex]': '-1',
        '[attr.aria-labelledby]': 'ariaLabelledBy()',
        '[attr.id]': 'config()?.id',
        '[attr.role]': 'config()?.role',
        '[attr.aria-describedby]': 'config()?.ariaDescribedBy',
        '[@slideModal]': 'dialogContainerAnimation()',
        '(@slideModal.start)': 'onAnimationStart($event)',
        '(@slideModal.done)': 'onAnimationDone($event)'
    }
})
export class DialogContainerComponent extends BasePortalOutlet {
    readonly portalOutlet = viewChild(CdkPortalOutlet)

    /** The class that traps and manages focus within the dialog */
    private readonly focusTrap = signal<ConfigurableFocusTrap | undefined>(undefined)

    /** ID of the element that should be considered as the dialog's label */
    readonly ariaLabelledBy = signal<string | undefined>(undefined)

    /** Emits when an animation state changes */
    readonly animationStateChanged = output<AnimationEvent>()

    readonly isAnimating = signal(false)

    private readonly _config = signal<DialogConfig | undefined>(undefined)
    readonly config = this._config.asReadonly()

    private readonly state = signal<DialogContainerState>('enter')

    // for animation purpose
    private readonly params = signal({
        x: '0px',
        y: '0px',
        ox: '50%',
        oy: '50%',
        scale: 0
    })

    // A variable to hold the focused element before the dialog was open.
    // This would help us to refocus back to element when the dialog was closed.
    private elementFocusedBeforeDialogWasOpened?: HTMLElement

    /** @internal */
    readonly dialogContainerAnimation = computed(() => ({ value: this.state(), params: this.params() }))

    constructor(
        private readonly changeDetector: ChangeDetectorRef,
        private readonly elementRef: ElementRef<HTMLElement>,
        private readonly focusTrapFactory: ConfigurableFocusTrapFactory,
        @Optional()
        @Inject(DOCUMENT)
        private readonly document?: Document
    ) {
        super()
    }

    /**
     * Attach a ComponentPortal as content to this dialog container.
     */
    attachComponentPortal<T>(
        portal: ComponentPortal<T>
    ): ComponentRef<T> {
        const portalOutlet = this.portalOutlet()
        if (portalOutlet?.hasAttached()) {
            throw Error(
                'Attempting to attach dialog content after content is already attached'
            )
        }

        this.savePreviouslyFocusedElement()
        return portalOutlet!.attachComponentPortal(portal)
    }

    attachTemplatePortal<C>(
        _portal: TemplatePortal<C>
    ): EmbeddedViewRef<C> {
        throw new Error('Method not implemented.')
    }

    setConfig(config: DialogConfig): void {
        this._config.set(config)

        if (config.event) {
            this.calculateZoomOrigin(config.event)
        }
    }

    onAnimationStart(event: AnimationEvent): void {
        this.isAnimating.set(true)
        this.animationStateChanged.emit(event)
    }

    onAnimationDone(event: AnimationEvent): void {
        if (event.toState === 'enter') {
            this.trapFocus()
        } else if (event.toState === 'exit') {
            this.restoreFocus()
        }

        this.animationStateChanged.emit(event)
        this.isAnimating.set(false)
    }

    startExitAnimation() {
        this.state.set('exit')
        this.changeDetector.markForCheck()
    }

    /**
     * Calculate origin used in the `zoomFadeInFrom()`
     * for animation purpose
     */
    private calculateZoomOrigin(event: MouseEvent): void {
        const clientX = event.clientX
        const clientY = event.clientY

        const wh = window.innerWidth / 2
        const hh = window.innerHeight / 2
        const x = clientX - wh
        const y = clientY - hh
        const ox = clientX / window.innerWidth
        const oy = clientY / window.innerHeight

        this.params.set({
            x: `${x}px`,
            y: `${y}px`,
            ox: `${ox * 100}%`,
            oy: `${oy * 100}%`,
            scale: 0
        })
    }

    /**
     * Save the focused element before dialog was open
     */
    private savePreviouslyFocusedElement(): void {
        if (this.document) {
            this.elementFocusedBeforeDialogWasOpened = this.document
                .activeElement as HTMLElement

            Promise.resolve().then(() => this.elementRef.nativeElement.focus()).catch(() => { })
        }
    }

    private trapFocus(): void {
        if (!this.focusTrap()) {
            this.focusTrap.set(this.focusTrapFactory.create(
                this.elementRef.nativeElement
            ))
        }

        if (this._config()?.autoFocus) {
            this.focusTrap()?.focusInitialElementWhenReady().catch(() => { })
        }
    }

    private restoreFocus(): void {
        const toFocus = this.elementFocusedBeforeDialogWasOpened

        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus()
        }

        if (this.focusTrap()) {
            this.focusTrap()!.destroy()
            this.focusTrap.set(undefined)
        }
    }
}
