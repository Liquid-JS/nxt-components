import { NgModule } from '@angular/core'
import { CodeFromUrlPipe } from './code-from-url'
import { GistDirective, GistFilePipe } from './gist'

/** @deprecated use standalone imports */
@NgModule({
    imports: [
        GistDirective,
        GistFilePipe,
        CodeFromUrlPipe
    ],
    exports: [
        GistDirective,
        GistFilePipe,
        CodeFromUrlPipe
    ]
})
export class HighlightExstrasModule { }
