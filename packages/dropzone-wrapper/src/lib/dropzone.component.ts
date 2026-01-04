import { Component, OnInit, ViewEncapsulation, computed, input, viewChild } from '@angular/core'
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
        useExisting: DropzoneComponent
    }],
    imports: [
        DropzoneDirective
    ]
})
export class DropzoneComponent extends DropzoneListeners implements OnInit {

    /** Disables / detaches Dropzone from the element */
    readonly disabled = input(false)

    /** Custom config to override the global defaults */
    readonly config = input<DropzoneConfig>()

    /** Message to show for the user on the upload area */
    readonly message = input('Click or drag files to upload')
    /** Placeholder image to be shown as the upload area */
    readonly placeholder = input('')

    /** Use 'dropzone' class (use provided default styles) */
    readonly useDropzoneClass = input(true)

    readonly directiveRef = viewChild(DropzoneDirective)

    /** @internal */
    readonly text = computed(() => this.config()?.dictDefaultMessage || this.message())

    /** @internal */
    ngOnInit(): void { }

    /** @internal */
    getPlaceholder(): string {
        return 'url(' + encodeURI(this.placeholder()) + ')'
    }
}
