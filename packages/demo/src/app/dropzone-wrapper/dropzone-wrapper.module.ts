import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DropzoneConfigInterface, DropzoneModule, NXT_DROPZONE_CONFIG } from 'nxt-dropzone-wrapper'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { AppDropzoneWrapperRoutingModule } from './dropzone-wrapper-routing.module'
import { AppDropzoneWrapperComponent } from './dropzone-wrapper/dropzone-wrapper.component'
import { SandboxComponent } from './examples/sandbox/sandbox.component'

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    createImageThumbnails: true
}

@NgModule({
    declarations: [
        AppDropzoneWrapperComponent,
        SandboxComponent
    ],
    imports: [
        DropzoneModule,
        CommonModule,
        FormsModule,
        AppDropzoneWrapperRoutingModule,
        ContentWrapComponent,
        ExampleComponent
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
