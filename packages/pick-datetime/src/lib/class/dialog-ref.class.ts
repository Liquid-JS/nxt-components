import { AnimationEvent } from '@angular/animations'
import { GlobalPositionStrategy, OverlayRef } from '@angular/cdk/overlay'
import { Location } from '@angular/common'
import { Subject, SubscriptionLike as ISubscription } from 'rxjs'
import { filter, take } from 'rxjs/operators'
import { DialogContainerComponent } from '../dialog/dialog-container/dialog-container.component'
import { DialogPosition } from './dialog-config.class'

export class DialogRef<T> {

    private result: any

    private readonly _beforeClose$ = new Subject<void>()

    private readonly _afterOpen$ = new Subject<void>()

    private readonly _afterClosed$ = new Subject<void>()

    /** Subscription to changes in the user's location */
    private locationChanged?: ISubscription

    /**
     * The instance of component isOpen into modal
     */
    componentInstance?: T

    /** Whether the user is allowed to close the dialog */
    disableClose = !!this.container.config?.disableClose

    constructor(
        private readonly overlayRef: OverlayRef,
        private readonly container: DialogContainerComponent,
        readonly id?: string,
        location?: Location
    ) {
        this.container.animationStateChanged
            .pipe(
                filter((event: AnimationEvent) => event.phaseName === 'done' && event.toState === 'enter'),
                take(1)
            )
            .subscribe(() => {
                this._afterOpen$.next(undefined)
                this._afterOpen$.complete()
            })

        this.container.animationStateChanged
            .pipe(
                filter((event: AnimationEvent) => event.phaseName === 'done' && event.toState === 'exit'),
                take(1)
            )
            .subscribe(() => {
                this.overlayRef.dispose()
                this.locationChanged?.unsubscribe()
                this.locationChanged = undefined
                this._afterClosed$.next(this.result)
                this._afterClosed$.complete()
                this.componentInstance = undefined
            })

        this.overlayRef.keydownEvents()
            .pipe(filter(event => event.code.toLowerCase() === 'escape' && !this.disableClose))
            .subscribe(() => this.close())

        if (location) {
            this.locationChanged = location.subscribe(() => {
                if (this.container.config?.closeOnNavigation) {
                    this.close()
                }
            })
        }
    }

    close(dialogResult?: any) {
        this.result = dialogResult

        this.container.animationStateChanged
            .pipe(
                filter((event: AnimationEvent) => event.phaseName === 'start'),
                take(1)
            )
            .subscribe(() => {
                this._beforeClose$.next(dialogResult)
                this._beforeClose$.complete()
                this.overlayRef.detachBackdrop()
            })

        this.container.startExitAnimation()
    }

    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    backdropClick() {
        return this.overlayRef.backdropClick()
    }

    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents() {
        return this.overlayRef.keydownEvents()
    }

    /**
     * Updates the dialog's position.
     *
     * @param position New dialog position.
     */
    updatePosition(position?: DialogPosition): this {
        const strategy = this.getPositionStrategy()

        if (position && (position.left || position.right)) {
            if (position.left)
                strategy.left(position.left)
            else
                strategy.right(position.right)
        } else {
            strategy.centerHorizontally()
        }

        if (position && (position.top || position.bottom)) {
            if (position.top)
                strategy.top(position.top)
            else
                strategy.bottom(position.bottom)
        } else {
            strategy.centerVertically()
        }

        this.overlayRef.updatePosition()

        return this
    }

    /**
     * Updates the dialog's width and height.
     *
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */
    updateSize(width: string = 'auto', height: string = 'auto'): this {
        this.overlayRef.updateSize({ width, height })
        this.overlayRef.updatePosition()
        return this
    }

    isAnimating(): boolean {
        return this.container.isAnimating
    }

    afterOpen() {
        return this._afterOpen$.asObservable()
    }

    beforeClose() {
        return this._beforeClose$.asObservable()
    }

    afterClosed() {
        return this._afterClosed$.asObservable()
    }

    /** Fetches the position strategy object from the overlay ref */
    private getPositionStrategy(): GlobalPositionStrategy {
        return this.overlayRef.getConfig().positionStrategy as GlobalPositionStrategy
    }
}
