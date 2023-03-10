import { Component, OnInit, ViewChild } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { DropzoneComponent, DropzoneConfigInterface, DropzoneDirective } from 'nxt-dropzone-wrapper'

@Component({
    selector: 'app-dropzone-wrapper',
    templateUrl: './dropzone-wrapper.component.html',
    styleUrls: ['./dropzone-wrapper.component.scss']
})
export class AppDropzoneWrapperComponent implements OnInit {
    public type: string = 'component'

    public disabled: boolean = false

    public config: DropzoneConfigInterface = {
        clickable: true,
        maxFiles: 1,
        autoReset: null,
        errorReset: null,
        cancelReset: null
    }

    @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent
    @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective

    constructor(
        private readonly title: Title
    ) { }

    ngOnInit(): void {
        this.title.setTitle('nxt-dropzone-wrapper')
    }

    public toggleType(): void {
        this.type = (this.type === 'component') ? 'directive' : 'component'
    }

    public toggleDisabled(): void {
        this.disabled = !this.disabled
    }

    public toggleAutoReset(): void {
        this.config.autoReset = this.config.autoReset ? null : 5000
        this.config.errorReset = this.config.errorReset ? null : 5000
        this.config.cancelReset = this.config.cancelReset ? null : 5000
    }

    public toggleMultiUpload(): void {
        this.config.maxFiles = this.config.maxFiles ? 0 : 1
    }

    public toggleClickAction(): void {
        this.config.clickable = !this.config.clickable
    }

    public resetDropzoneUploads(): void {
        if (this.type === 'directive' && this.directiveRef) {
            this.directiveRef.reset()
        } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
            this.componentRef.directiveRef.reset()
        }
    }

    public onUploadInit(args: any): void {
        console.log('onUploadInit:', args)
    }

    public onUploadError(args: any): void {
        console.log('onUploadError:', args)
    }

    public onUploadSuccess(args: any): void {
        console.log('onUploadSuccess:', args)
    }
}
