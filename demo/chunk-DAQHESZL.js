import"./chunk-2R6CW7ES.js";var n=`import { CommonModule } from '@angular/common'\r
import { Component, ViewChild, ViewEncapsulation } from '@angular/core'\r
import { FormsModule } from '@angular/forms'\r
// eslint-disable-next-line import/no-extraneous-dependencies\r
import Dropzone from 'dropzone'\r
import { DropzoneComponent, DropzoneConfig, DropzoneDirective, DropzoneModule } from 'nxt-dropzone-wrapper'\r
\r
@Component({\r
    selector: 'app-sandbox',\r
    templateUrl: './sandbox.component.html',\r
    styleUrls: ['./sandbox.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        CommonModule,\r
        FormsModule,\r
        DropzoneModule\r
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
    @ViewChild(DropzoneComponent) componentRef?: DropzoneComponent\r
    @ViewChild(DropzoneDirective) directiveRef?: DropzoneDirective\r
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
        if (this.type === 'directive' && this.directiveRef) {\r
            this.directiveRef.reset()\r
        } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {\r
            this.componentRef.directiveRef.reset()\r
        }\r
    }\r
\r
}\r
`;export{n as default};
