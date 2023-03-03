import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DropzoneComponent } from './dropzone.component'
import { DropzoneDirective } from './dropzone.directive'

@NgModule({
    imports: [CommonModule],
    declarations: [DropzoneComponent, DropzoneDirective],
    exports: [CommonModule, DropzoneComponent, DropzoneDirective]
})
export class DropzoneModule {
}
