import { NgModule } from '@angular/core'
import { DropzoneComponent } from './dropzone.component'
import { DropzoneDirective } from './dropzone.directive'

/** @deprecated use standalone imports */
@NgModule({
    imports: [
        DropzoneComponent,
        DropzoneDirective
    ],
    exports: [
        DropzoneComponent,
        DropzoneDirective
    ]
})
export class DropzoneModule { }
