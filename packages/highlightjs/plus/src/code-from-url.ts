import { inject, PendingTasks, Pipe, PipeTransform } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { NXT_HIGHLIGHT_FILE_LOCATION } from './code-file-location'
import { CodeLoader } from './code-loader'
import { isUrl } from './gist.model'

@Pipe({
    name: 'codeFromUrl'
})
export class CodeFromUrlPipe implements PipeTransform {

    private _location = inject(NXT_HIGHLIGHT_FILE_LOCATION)
    private _loader = inject(CodeLoader)
    private _pendingTasks = inject(PendingTasks)

    transform(url: string): Observable<string> {
        const done = this._pendingTasks.add()
        return this._loader.getCodeFromUrl(isUrl(url) ? url : `${this._location.getPathname()}/${url}`)
            .pipe(tap(done))
    }
}
