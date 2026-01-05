import { Component, ViewEncapsulation } from '@angular/core'
import { HighlightDirective } from 'nxt-highlightjs'
import { GistFilePipe, gistResource } from 'nxt-highlightjs/extras'

@Component({
    selector: 'app-gist-file',
    imports: [
        GistFilePipe,
        HighlightDirective
    ],
    templateUrl: './gist-file.component.html',
    styleUrl: './gist-file.component.scss',
    encapsulation: ViewEncapsulation.Emulated
})
export class GistFileComponent {

    readonly gistId = '745149f6fc352f9036908ffe99054578'
    readonly gist = gistResource(this.gistId)

}
