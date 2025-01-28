import { inject, Pipe, PipeTransform } from '@angular/core'
import { Observable } from 'rxjs'
import { NXT_HIGHLIGHT_FILE_LOCATION } from './code-file-location'
import { CodeLoader } from './code-loader'
import { isUrl } from './gist.model'

@Pipe({
    name: 'codeFromUrl'
})
export class CodeFromUrlPipe implements PipeTransform {

    private readonly location = inject(NXT_HIGHLIGHT_FILE_LOCATION)
    private readonly loader = inject(CodeLoader)

    transform(url: string): Observable<string> {
        return this.loader.getCodeFromUrl(isUrl(url) ? url : `${this.location.getPathname()}/${url}`)
    }
}
