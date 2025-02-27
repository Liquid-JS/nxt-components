import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerModule } from 'nxt-color-picker'

@Component({
    selector: 'app-dialog-position',
    templateUrl: './dialog-position.component.html',
    styleUrls: ['./dialog-position.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerModule
    ]
})
export class DialogPositionComponent {
    color = 'rgba(45,208,45,1)'
}
