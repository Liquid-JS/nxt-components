import { Component, ViewEncapsulation, computed, signal, viewChild } from '@angular/core'
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

    readonly type = signal<'component' | 'directive'>('component')

    readonly disabled = signal(false)
    readonly autoReset = signal(false)
    readonly clickable = signal(true)
    readonly maxFiles = signal<number | undefined>(1)

    private readonly timeout = computed(() => this.autoReset() ? 5000 : undefined)

    readonly config = computed(() => {
        const cfg: DropzoneConfig = {
            clickable: this.clickable(),
            maxFiles: this.maxFiles()
        }
        const timeout = this.timeout()
        cfg.autoReset = timeout
        cfg.errorReset = timeout
        cfg.cancelReset = timeout
        return cfg
    })

    readonly componentRef = viewChild(DropzoneComponent)
    readonly directiveRef = viewChild(DropzoneDirective)

    onUploadInit(dz: Dropzone) {
        console.log('onUploadInit:', dz)
    }

    onUploadSuccess(args: any) {
        console.log('onUploadSuccess:', args)
    }

    onUploadError([dz, err]: [Dropzone.DropzoneFile, string | Error]) {
        console.log('onUploadError:', dz, err)
    }

    resetDropzone(): void {
        const directiveRef = this.directiveRef()
        const componentRef = this.componentRef()
        if (this.type() === 'directive' && directiveRef) {
            directiveRef.reset()
        } else if (this.type() === 'component' && componentRef?.directiveRef()) {
            componentRef.directiveRef()!.reset()
        }
    }

}
