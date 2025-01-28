import { ChangeDetectorRef, Directive, EventEmitter, inject, Input, OnDestroy, Output, PendingTasks, Pipe, PipeTransform } from '@angular/core'
import { Subscription } from 'rxjs'
import { CodeLoader } from './code-loader'
import { Gist, GistFile } from './gist.model'

@Directive({
    selector: '[nxtGist]'
})
export class GistDirective implements OnDestroy {

    private readonly loader = inject(CodeLoader)
    private readonly pendingTasks = inject(PendingTasks)
    private readonly cdRef = inject(ChangeDetectorRef)
    private subscription?: Subscription

    @Input('nxtGist')
    set gist(value: string) {
        this.subscription?.unsubscribe()
        this.subscription = undefined

        if (value) {
            const done = this.pendingTasks.add()
            this.subscription = this.loader.getCodeFromGist(value).subscribe({
                next: (gist: Gist) => {
                    this.gistLoad.emit(gist)
                    this.cdRef.detectChanges()
                    done()
                },
                error: (err) => {
                    this.gistError.emit(err)
                    this.cdRef.detectChanges()
                    done()
                }
            })
        }
    }

    @Output() gistLoad: EventEmitter<Gist> = new EventEmitter<Gist>()

    @Output() gistError: EventEmitter<any> = new EventEmitter<any>()

    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
        this.subscription = undefined
    }
}

@Pipe({
    name: 'gistFile'
})
export class GistFilePipe implements PipeTransform {
    transform(gist?: Gist | null, fileName?: string | null): GistFile | undefined {
        if (!fileName)
            return
        return gist?.files?.[fileName]
    }
}
