import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerDirective } from 'nxt-color-picker'

@Component({
    selector: 'app-output-format',
    templateUrl: './output-format.component.html',
    styleUrls: ['./output-format.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerDirective
    ]
})
export class OutputFormatComponent {
    color1 = 'rgb(255,245,0)'
    color2 = 'hsl(0,82%,59%)'
}
