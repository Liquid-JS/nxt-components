import { animate, animateChild, AnimationEvent, keyframes, style, transition, trigger } from '@angular/animations'
import { ConfigurableFocusTrap, ConfigurableFocusTrapFactory } from '@angular/cdk/a11y'
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal'
import { ChangeDetectorRef, Component, ComponentRef, ElementRef, EmbeddedViewRef, EventEmitter, HostBinding, HostListener, Inject, OnInit, Optional, ViewChild, DOCUMENT } from '@angular/core'
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
    ]
})
export class DialogContainerComponent extends BasePortalOutlet implements OnInit {
    @ViewChild(CdkPortalOutlet, { static: true })
    portalOutlet?: CdkPortalOutlet

    /** The class that traps and manages focus within the dialog */
    private focusTrap?: ConfigurableFocusTrap

    /** ID of the element that should be considered as the dialog's label */
    ariaLabelledBy?: string

    /** Emits when an animation state changes */
    readonly animationStateChanged = new EventEmitter<AnimationEvent>()

    isAnimating = false

    private _config?: DialogConfig
    get config() {
        return this._config
    }

    private state: DialogContainerState = 'enter'

    // for animation purpose
    private params: any = {
        x: '0px',
        y: '0px',
        ox: '50%',
        oy: '50%',
        scale: 0
    }

    // A variable to hold the focused element before the dialog was open.
    // This would help us to refocus back to element when the dialog was closed.
    private elementFocusedBeforeDialogWasOpened?: HTMLElement

    /** @internal */
    @HostBinding('class.nxt-dialog-container')
    get dialogContainerClass(): boolean {
        return true
    }

    /** @internal */
    @HostBinding('attr.tabindex')
    get dialogContainerTabIndex(): number {
        return -1
    }

    /** @internal */
    @HostBinding('attr.id')
    get dialogContainerId() {
        return this._config?.id
    }

    /** @internal */
    @HostBinding('attr.role')
    get dialogContainerRole() {
        return this._config?.role
    }

    /** @internal */
    @HostBinding('attr.aria-labelledby')
    get dialogContainerAriaLabelledby() {
        return this.ariaLabelledBy
    }

    /** @internal */
    @HostBinding('attr.aria-describedby')
    get dialogContainerAriaDescribedby() {
        return this._config?.ariaDescribedBy
    }

    /** @internal */
    @HostBinding('@slideModal')
    get dialogContainerAnimation() {
        return { value: this.state, params: this.params }
    }

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

    ngOnInit() { }

    /**
     * Attach a ComponentPortal as content to this dialog container.
     */
    attachComponentPortal<T>(
        portal: ComponentPortal<T>
    ): ComponentRef<T> {
        if (this.portalOutlet?.hasAttached()) {
            throw Error(
                'Attempting to attach dialog content after content is already attached'
            )
        }

        this.savePreviouslyFocusedElement()
        return this.portalOutlet!.attachComponentPortal(portal)
    }

    attachTemplatePortal<C>(
        _portal: TemplatePortal<C>
    ): EmbeddedViewRef<C> {
        throw new Error('Method not implemented.')
    }

    setConfig(config: DialogConfig): void {
        this._config = config

        if (config.event) {
            this.calculateZoomOrigin(config.event)
        }
    }

    @HostListener('@slideModal.start', ['$event'])
    onAnimationStart(event: AnimationEvent): void {
        this.isAnimating = true
        this.animationStateChanged.emit(event)
    }

    @HostListener('@slideModal.done', ['$event'])
    onAnimationDone(event: AnimationEvent): void {
        if (event.toState === 'enter') {
            this.trapFocus()
        } else if (event.toState === 'exit') {
            this.restoreFocus()
        }

        this.animationStateChanged.emit(event)
        this.isAnimating = false
    }

    startExitAnimation() {
        this.state = 'exit'
        this.changeDetector.markForCheck()
    }

    /**
     * Calculate origin used in the `zoomFadeInFrom()`
     * for animation purpose
     */
    private calculateZoomOrigin(event: any): void {
        if (!event) {
            return
        }

        const clientX = event.clientX
        const clientY = event.clientY

        const wh = window.innerWidth / 2
        const hh = window.innerHeight / 2
        const x = clientX - wh
        const y = clientY - hh
        const ox = clientX / window.innerWidth
        const oy = clientY / window.innerHeight

        this.params.x = `${x}px`
        this.params.y = `${y}px`
        this.params.ox = `${ox * 100}%`
        this.params.oy = `${oy * 100}%`
        this.params.scale = 0

        return
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
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(
                this.elementRef.nativeElement
            )
        }

        if (this._config?.autoFocus) {
            this.focusTrap?.focusInitialElementWhenReady().catch(() => { })
        }
    }

    private restoreFocus(): void {
        const toFocus = this.elementFocusedBeforeDialogWasOpened

        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus()
        }

        if (this.focusTrap) {
            this.focusTrap.destroy()
            this.focusTrap = undefined
        }
    }
}
