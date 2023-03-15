/* eslint-disable @angular-eslint/no-output-rename */
import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core'
import { DropzoneDirective } from './dropzone.directive'
import { DropzoneConfig, DropzoneListeners, NXT_DROPZONE_LISTENERS } from './dropzone.interfaces'

@Component({
    selector: 'nxt-dropzone',
    templateUrl: './dropzone.component.html',
    styleUrls: [
        './dropzone.component.scss',
        '../../../../node_modules/dropzone/dist/dropzone.css'
    ],
    encapsulation: ViewEncapsulation.None,
    providers: [{
        provide: NXT_DROPZONE_LISTENERS,
        useValue: forwardRef(() => DropzoneComponent)
    }]
})
export class DropzoneComponent implements OnInit, DropzoneListeners {

    /** Disables / detaches Dropzone from the element */
    @Input() disabled: boolean = false

    /** Custom config to override the global defaults */
    @Input() config?: DropzoneConfig

    /** Message to show for the user on the upload area */
    @Input() message: string = 'Click or drag files to upload'
    /** Placeholder image to be shown as the upload area */
    @Input() placeholder: string = ''

    /** Use 'dropzone' class (use provided default styles) */
    @Input() useDropzoneClass: boolean = true

    @Output('init') readonly DZ_INIT = new EventEmitter<Dropzone>()

    @Output('drop') readonly DZ_DROP = new EventEmitter<DragEvent>()
    @Output('dragStart') readonly DZ_DRAGSTART = new EventEmitter<DragEvent>()
    @Output('dragEnd') readonly DZ_DRAGEND = new EventEmitter<DragEvent>()
    @Output('dragEnter') readonly DZ_DRAGENTER = new EventEmitter<DragEvent>()
    @Output('dragOver') readonly DZ_DRAGOVER = new EventEmitter<DragEvent>()
    @Output('dragLeave') readonly DZ_DRAGLEAVE = new EventEmitter<DragEvent>()
    @Output('paste') readonly DZ_PASTE = new EventEmitter<DragEvent>()

    @Output('reset') readonly DZ_RESET = new EventEmitter<void>()

    @Output('addedFile') readonly DZ_ADDEDFILE = new EventEmitter<Dropzone.DropzoneFile>()
    @Output('addedFiles') readonly DZ_ADDEDFILES = new EventEmitter<Dropzone.DropzoneFile>()
    @Output('removedFile') readonly DZ_REMOVEDFILE = new EventEmitter<Dropzone.DropzoneFile>()
    @Output('thumbnail') readonly DZ_THUMBNAIL = new EventEmitter<[Dropzone.DropzoneFile, string]>()

    @Output('error') readonly DZ_ERROR = new EventEmitter<[Dropzone.DropzoneFile, string | Error]>()
    @Output('errorMultiple') readonly DZ_ERRORMULTIPLE = new EventEmitter<[Dropzone.DropzoneFile[], string | Error]>()

    @Output('processing') readonly DZ_PROCESSING = new EventEmitter<Dropzone.DropzoneFile>()
    @Output('processingMultiple') readonly DZ_PROCESSINGMULTIPLE = new EventEmitter<Dropzone.DropzoneFile[]>()

    @Output('uploadProgress') readonly DZ_UPLOADPROGRESS = new EventEmitter<[Dropzone.DropzoneFile, number, number]>()
    @Output('totalUploadProgress') readonly DZ_TOTALUPLOADPROGRESS = new EventEmitter<[number, number, number]>()

    @Output('sending') readonly DZ_SENDING = new EventEmitter<[Dropzone.DropzoneFile, XMLHttpRequest, FormData]>()
    @Output('sendingMultiple') readonly DZ_SENDINGMULTIPLE = new EventEmitter<[Dropzone.DropzoneFile[], XMLHttpRequest, FormData]>()

    // eslint-disable-next-line @typescript-eslint/ban-types
    @Output('success') readonly DZ_SUCCESS = new EventEmitter<[Dropzone.DropzoneFile, Object | string]>()
    @Output('successMultiple') readonly DZ_SUCCESSMULTIPLE = new EventEmitter<Dropzone.DropzoneFile[]>()

    @Output('canceled') readonly DZ_CANCELED = new EventEmitter<Dropzone.DropzoneFile>()
    @Output('canceledMultiple') readonly DZ_CANCELEDMULTIPLE = new EventEmitter<Dropzone.DropzoneFile[]>()

    @Output('complete') readonly DZ_COMPLETE = new EventEmitter<Dropzone.DropzoneFile>()
    @Output('completeMultiple') readonly DZ_COMPLETEMULTIPLE = new EventEmitter<Dropzone.DropzoneFile[]>()

    @Output('maxFilesExceeded') readonly DZ_MAXFILESEXCEEDED = new EventEmitter<Dropzone.DropzoneFile>()
    @Output('maxFilesReached') readonly DZ_MAXFILESREACHED = new EventEmitter<Dropzone.DropzoneFile[]>()

    @Output('queueComplete') readonly DZ_QUEUECOMPLETE = new EventEmitter<void>()

    @ViewChild(DropzoneDirective) directiveRef?: DropzoneDirective

    constructor() { }

    /** @internal */
    ngOnInit(): void { }

    /** @internal */
    getPlaceholder(): string {
        return 'url(' + encodeURI(this.placeholder) + ')'
    }
}
