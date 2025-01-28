import { NgModule } from '@angular/core'
import { CodeFromUrlPipe } from './code-from-url'
import { GistDirective, GistFilePipe } from './gist'

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
export class HighlightPlusModule {
}
