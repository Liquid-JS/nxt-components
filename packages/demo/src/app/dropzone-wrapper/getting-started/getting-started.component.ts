import { Component, ViewEncapsulation } from '@angular/core'
import { CodeBlockComponent } from '../../code-block/code-block.component'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { InputsTableComponent } from '../../inputs-table/inputs-table.component'
import { MetaDirective } from '../../meta/meta.directive'
import { OutputsTableComponent } from '../../outputs-table/outputs-table.component'
import docs from '../documentation.json'

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        MetaDirective,
        ContentWrapComponent,
        CodeBlockComponent,
        InputsTableComponent,
        OutputsTableComponent
    ]
})
export class GettingStartedComponent {

    readonly installScript = 'npm install --save nxt-dropzone-wrapper dropzone'

    readonly loadConfig = `import { ApplicationConfig } from '@angular/core'
import { provideDropzoneConfig } from 'nxt-dropzone-wrapper'

export const appConfig: ApplicationConfig = {
    providers: [
        provideDropzoneConfig({
            // These are the global options and can also be set per instance; change url to your upload POST address:
            url: 'https://httpbin.org/post',
            acceptedFiles: 'image/*',
            createImageThumbnails: true
        })
    ]
}`

    readonly includeHTML = `<nxt-dropzone [config]="config"
    message="Click or drag images here to upload"
    (error)="onUploadError($event)"
    (success)="onUploadSuccess($event)"></nxt-dropzone>`

    readonly includeDirective = `<div class="dropzone"
    [nxtDropzone]="config"
    (error)="onUploadError($event)"
    (success)="onUploadSuccess($event)"></div>`

    readonly directiveDocs = docs.directives.find(d => d.selector == '[nxtDropzone]')

    readonly directiveInputs = this.directiveDocs?.inputsClass.sort((a, b) => a.line - b.line) ?? []

    readonly directiveOutputs = this.directiveDocs?.outputsClass.sort((a, b) => a.line - b.line) ?? []

    readonly componentDocs = docs.components.find(d => d.selector == 'nxt-dropzone')

    readonly componentInputs = this.componentDocs?.inputsClass.sort((a, b) => a.line - b.line) ?? []

    readonly componentOutputs = this.componentDocs?.outputsClass.sort((a, b) => a.line - b.line) ?? []
}
