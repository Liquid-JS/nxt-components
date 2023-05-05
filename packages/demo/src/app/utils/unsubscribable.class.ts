import { Directive, OnDestroy } from '@angular/core'
import { Observable, Subscription } from 'rxjs'

/**
 * Automatically unsubscribe on destroy
 */
@Directive()
// tslint:disable-next-line: directive-class-suffix
export class Unsubscribable implements OnDestroy {

    protected readonly subscriptions = new Set<Subscription>()

    ngOnDestroy() {
        this.clearSubscriptions()
    }

    private clearSubscriptions() {
        const vals = Array.from(this.subscriptions.values())
        this.subscriptions.clear()
        vals.forEach(sub => sub.unsubscribe())
    }

    firstPromise<T>(obs: Observable<T>) {
        const p = new Promise<T>((resolve, reject) => {
            const s = new Subscription()
            s.add(obs.subscribe({
                next: (d) => {
                    if (this.subscriptions.has(s))
                        this.subscriptions.delete(s)
                    s.unsubscribe()
                    resolve(d)
                },
                error: (e) => {
                    if (this.subscriptions.has(s))
                        this.subscriptions.delete(s)
                    s.unsubscribe()
                    reject(e)
                }
            }))
            this.subscriptions.add(s)
        })
        return p
    }

}
