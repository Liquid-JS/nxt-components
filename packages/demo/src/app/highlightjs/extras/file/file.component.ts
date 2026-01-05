import { Component, ViewEncapsulation } from '@angular/core'
import { HighlightDirective } from 'nxt-highlightjs'
import { fileResource } from 'nxt-highlightjs/extras'
import filePath from './file.txt'

@Component({
    selector: 'app-file',
    imports: [
        HighlightDirective
    ],
    templateUrl: './file.component.html',
    styleUrl: './file.component.scss',
    encapsulation: ViewEncapsulation.Emulated
})
export class FileComponent {

    readonly file = fileResource(filePath, { formatUrl: true })

}
