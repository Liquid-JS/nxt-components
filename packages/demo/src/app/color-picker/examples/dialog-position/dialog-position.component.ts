import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerDirective } from 'nxt-color-picker'

@Component({
    selector: 'app-dialog-position',
    templateUrl: './dialog-position.component.html',
    styleUrls: ['./dialog-position.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerDirective
    ]
})
export class DialogPositionComponent {
    color = 'rgba(45,208,45,1)'
}
