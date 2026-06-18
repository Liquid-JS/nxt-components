import { Pipe, PipeTransform } from '@angular/core'
import { Gist, GistFile } from './gist.model'

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
