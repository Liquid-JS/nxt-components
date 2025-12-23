import"./chunk-FBFWB55K.js";var n=`import { Component, ViewEncapsulation, viewChild } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
// eslint-disable-next-line @import/no-extraneous-dependencies\r
import Dropzone from 'dropzone'\r
import { DropzoneComponent, DropzoneConfig, DropzoneDirective } from 'nxt-dropzone-wrapper'\r
\r
@Component({\r
    selector: 'app-sandbox',\r
    templateUrl: './sandbox.component.html',\r
    styleUrls: ['./sandbox.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        FormsModule,\r
        DropzoneComponent,\r
        DropzoneDirective\r
    ]\r
})\r
export class SandboxComponent {\r
\r
    type: 'component' | 'directive' = 'component'\r
\r
    disabled = false\r
    autoReset = false\r
\r
    config: DropzoneConfig = {\r
        clickable: true,\r
        maxFiles: 1\r
    }\r
\r
    readonly componentRef = viewChild(DropzoneComponent)\r
    readonly directiveRef = viewChild(DropzoneDirective)\r
\r
    onUploadInit(dz: Dropzone) {\r
        console.log('onUploadInit:', dz)\r
    }\r
\r
    onUploadSuccess(args: any) {\r
        console.log('onUploadSuccess:', args)\r
    }\r
\r
    onUploadError([dz, err]: [Dropzone.DropzoneFile, string | Error]) {\r
        console.log('onUploadError:', dz, err)\r
    }\r
\r
    toggleAutoReset(value: boolean) {\r
        this.autoReset = !!value\r
        const timeout = this.autoReset ? 5000 : undefined\r
        this.config.autoReset = timeout\r
        this.config.errorReset = timeout\r
        this.config.cancelReset = timeout\r
    }\r
\r
    resetDropzone(): void {\r
        const directiveRef = this.directiveRef()\r
        const componentRef = this.componentRef()\r
        if (this.type === 'directive' && directiveRef) {\r
            directiveRef.reset()\r
        } else if (this.type === 'component' && componentRef && componentRef.directiveRef()) {\r
            componentRef.directiveRef()!.reset()\r
        }\r
    }\r
\r
}\r
`;export{n as default};
