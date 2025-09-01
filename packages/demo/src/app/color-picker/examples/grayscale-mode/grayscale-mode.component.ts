import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerDirective } from 'nxt-color-picker'

@Component({
    selector: 'app-grayscale-mode',
    templateUrl: './grayscale-mode.component.html',
    styleUrls: ['./grayscale-mode.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerDirective
    ]
})
export class GrayscaleModeComponent {
    color = '#666666'
}
