import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerModule } from 'nxt-color-picker'

@Component({
    selector: 'app-cancel-button',
    templateUrl: './cancel-button.component.html',
    styleUrls: ['./cancel-button.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerModule
    ]
})
export class CancelButtonComponent {
    color = '#f200bd'
}
