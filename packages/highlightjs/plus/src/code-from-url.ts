import { inject, PendingTasks, Pipe, PipeTransform } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { NXT_HIGHLIGHT_FILE_LOCATION } from './code-file-location'
import { CodeLoader } from './code-loader'
import { isUrl } from './gist.model'

@Pipe({
    name: 'codeFromUrl'
})
export class CodeFromUrlPipe implements PipeTransform {

    private readonly location = inject(NXT_HIGHLIGHT_FILE_LOCATION)
    private readonly loader = inject(CodeLoader)
    private readonly pendingTasks = inject(PendingTasks)

    transform(url: string): Observable<string> {
        const done = this.pendingTasks.add()
        return this.loader.getCodeFromUrl(isUrl(url) ? url : `${this.location.getPathname()}/${url}`)
            .pipe(tap(done))
    }
}
