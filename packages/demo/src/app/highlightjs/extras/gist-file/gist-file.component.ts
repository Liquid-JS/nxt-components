import { NgClass } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { HighlightAutoDirective } from 'nxt-highlightjs'
import { Gist, GistDirective, GistFilePipe } from 'nxt-highlightjs/extras'

@Component({
    selector: 'app-gist-file',
    imports: [
        GistDirective,
        GistFilePipe,
        HighlightAutoDirective,
        NgClass
    ],
    templateUrl: './gist-file.component.html',
    styleUrl: './gist-file.component.scss',
    encapsulation: ViewEncapsulation.Emulated
})
export class GistFileComponent {

    gistId = '745149f6fc352f9036908ffe99054578'
    gist?: Gist
    error?: Error
    loading = true

}
