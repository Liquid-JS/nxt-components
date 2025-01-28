import { Directive, EventEmitter, inject, Input, Output, PendingTasks, Pipe, PipeTransform } from '@angular/core'
import { CodeLoader } from './code-loader'
import { Gist } from './gist.model'

@Directive({
    selector: '[nxtGist]'
})
export class GistDirective {

    private readonly loader: CodeLoader = inject(CodeLoader)
    private readonly pendingTasks: PendingTasks = inject(PendingTasks)

    @Input('nxtGist')
    set gist(value: string) {
        if (value) {
            const done = this.pendingTasks.add()
            this.loader.getCodeFromGist(value).subscribe((gist: Gist) => {
                done()
                this.gistLoad.emit(gist)
            })
        }
    }

    @Output() gistLoad: EventEmitter<Gist> = new EventEmitter<Gist>()
}

@Pipe({
    name: 'gistFile'
})
export class GistFilePipe implements PipeTransform {
    transform(gist: Gist, fileName: string): string | null {
        return (gist && gist.files && gist.files[fileName]) ? gist.files[fileName].content : null
    }
}
