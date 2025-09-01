import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerDirective } from 'nxt-color-picker'

@Component({
    selector: 'app-show-color',
    templateUrl: './show-color.component.html',
    styleUrls: ['./show-color.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerDirective
    ]
})
export class ShowColorComponent {
    color = '#e920e9'
}
