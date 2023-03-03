import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DropzoneComponent } from './dropzone.component'
import { DropzoneDirective } from './dropzone.directive'

@NgModule({
    declarations: [
        DropzoneComponent,
        DropzoneDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DropzoneComponent,
        DropzoneDirective
    ]
})
export class DropzoneModule { }
