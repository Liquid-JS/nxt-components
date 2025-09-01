import { Component, ViewChild, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
// eslint-disable-next-line @import/no-extraneous-dependencies
import Dropzone from 'dropzone'
import { DropzoneComponent, DropzoneConfig, DropzoneDirective } from 'nxt-dropzone-wrapper'

@Component({
    selector: 'app-sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        FormsModule,
        DropzoneComponent,
        DropzoneDirective
    ]
})
export class SandboxComponent {

    type: 'component' | 'directive' = 'component'

    disabled = false
    autoReset = false

    config: DropzoneConfig = {
        clickable: true,
        maxFiles: 1
    }

    @ViewChild(DropzoneComponent) componentRef?: DropzoneComponent
    @ViewChild(DropzoneDirective) directiveRef?: DropzoneDirective

    onUploadInit(dz: Dropzone) {
        console.log('onUploadInit:', dz)
    }

    onUploadSuccess(args: any) {
        console.log('onUploadSuccess:', args)
    }

    onUploadError([dz, err]: [Dropzone.DropzoneFile, string | Error]) {
        console.log('onUploadError:', dz, err)
    }

    toggleAutoReset(value: boolean) {
        this.autoReset = !!value
        const timeout = this.autoReset ? 5000 : undefined
        this.config.autoReset = timeout
        this.config.errorReset = timeout
        this.config.cancelReset = timeout
    }

    resetDropzone(): void {
        if (this.type === 'directive' && this.directiveRef) {
            this.directiveRef.reset()
        } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
            this.componentRef.directiveRef.reset()
        }
    }

}
