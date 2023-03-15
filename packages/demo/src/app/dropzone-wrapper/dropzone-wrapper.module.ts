import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DropzoneConfig, DropzoneModule, NXT_DROPZONE_CONFIG } from 'nxt-dropzone-wrapper'
import { CodeBlockComponent } from '../code-block/code-block.component'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { InputsTableComponent } from '../inputs-table/inputs-table.component'
import { OutputsTableComponent } from '../outputs-table/outputs-table.component'
import { AppDropzoneWrapperRoutingModule } from './dropzone-wrapper-routing.module'
import { AppDropzoneWrapperComponent } from './dropzone-wrapper/dropzone-wrapper.component'
import { SandboxComponent } from './examples/sandbox/sandbox.component'
import { GettingStartedComponent } from './getting-started/getting-started.component'

const DEFAULT_DROPZONE_CONFIG: DropzoneConfig = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    createImageThumbnails: true
}

@NgModule({
    declarations: [
        AppDropzoneWrapperComponent,
        SandboxComponent,
        GettingStartedComponent
    ],
    imports: [
        DropzoneModule,
        CommonModule,
        FormsModule,
        AppDropzoneWrapperRoutingModule,
        ContentWrapComponent,
        ExampleComponent,
        CodeBlockComponent,
        InputsTableComponent,
        OutputsTableComponent
    ],
    exports: [],
    providers: [
        {
            provide: NXT_DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG
        }
    ]
})
export class AppDropzoneWrapperModule { }
