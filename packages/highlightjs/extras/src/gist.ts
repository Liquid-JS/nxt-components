import { Directive, effect, inject, input, output, PendingTasks, Pipe, PipeTransform } from '@angular/core'
import { CodeLoader } from './code-loader'
import { Gist, GistFile } from './gist.model'

@Directive({
    selector: '[nxtGist]'
})
export class GistDirective {

    private readonly loader = inject(CodeLoader)
    private readonly pendingTasks = inject(PendingTasks)

    readonly gist = input<string>(undefined, { alias: 'nxtGist' })
    readonly gistLoad = output<Gist>()
    readonly gistError = output<any>()

    constructor() {
        effect((cleanup) => {
            const value = this.gist()

            if (value) {
                const done = this.pendingTasks.add()
                const sub = this.loader.getCodeFromGist(value).subscribe({
                    next: (gist: Gist) => {
                        this.gistLoad.emit(gist)
                        done()
                    },
                    error: (err) => {
                        this.gistError.emit(err)
                        done()
                    }
                })
                cleanup(() => {
                    sub.unsubscribe()
                    done()
                })
            }
        })
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
