import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerModule } from 'nxt-color-picker'

@Component({
    selector: 'app-dialog-offset',
    templateUrl: './dialog-offset.component.html',
    styleUrls: ['./dialog-offset.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerModule
    ]
})
export class DialogOffsetComponent {
    color = '#1973c0'
}
