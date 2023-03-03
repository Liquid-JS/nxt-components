import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'dropzone-wrapper'
import { AppDropzoneWrapperRoutingModule } from './dropzone-wrapper-routing.module'
import { AppDropzoneWrapperComponent } from './dropzone-wrapper.component'

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    createImageThumbnails: true
}

@NgModule({
    declarations: [
        AppDropzoneWrapperComponent
    ],
    imports: [
        DropzoneModule,
        CommonModule,
        FlexLayoutModule,
        AppDropzoneWrapperRoutingModule
    ],
    exports: [],
    providers: [
        {
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG
        }
    ]
})
export class AppDropzoneWrapperModule { }
