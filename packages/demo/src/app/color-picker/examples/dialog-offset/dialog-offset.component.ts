import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerDirective } from 'nxt-color-picker'

@Component({
    selector: 'app-dialog-offset',
    templateUrl: './dialog-offset.component.html',
    styleUrls: ['./dialog-offset.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerDirective
    ]
})
export class DialogOffsetComponent {
    color = '#1973c0'
}
