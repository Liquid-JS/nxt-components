import { AfterViewChecked, Directive } from '@angular/core'
import { Unsubscribable } from './unsubscribable.class'

/**
 * Wait for component to load
 */
@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class WaitLoad extends Unsubscribable implements AfterViewChecked {

    private _loading = true

    get loading() {
        return this._loading
    }

    readonly loadingPromise: Promise<void>
    private resolve?: (val?: any) => void

    readonly tasksPromise: Promise<void>
    private tasksResolve?: (val?: any) => void

    private checked = false

    private tasks = new Array<() => void>()

    constructor() {
        super()
        this.loadingPromise = new Promise((resolve, _reject) => this.resolve = resolve)
        this.tasksPromise = new Promise((resolve, _reject) => this.tasksResolve = resolve)
    }

    doneLoading() {
        this._loading = false
    }

    ngAfterViewChecked() {
        if (!this._loading && !this.checked) {
            this.checked = true
            this.resolve?.()
            Promise.all(
                this.tasks.map(async fn => {
                    try {
                        await fn()
                    } catch (_e) { }
                })
            ).then(() => this.tasksResolve?.()).catch(console.warn)
        }
    }

    addTask(fn: () => void) {
        if (fn) {
            if (this.checked)
                try {
                    fn()
                } catch (_e) { }
            else
                this.tasks.push(fn)
        }
    }

}
