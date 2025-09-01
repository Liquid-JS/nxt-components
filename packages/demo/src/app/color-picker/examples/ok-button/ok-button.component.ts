import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerDirective } from 'nxt-color-picker'

@Component({
    selector: 'app-ok-button',
    templateUrl: './ok-button.component.html',
    styleUrls: ['./ok-button.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerDirective
    ]
})
export class OkButtonComponent {
    color = '#278ce2'
}
