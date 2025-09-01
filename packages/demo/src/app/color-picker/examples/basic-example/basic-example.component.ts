import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerDirective } from 'nxt-color-picker'

@Component({
    selector: 'app-basic-example',
    templateUrl: './basic-example.component.html',
    styleUrls: ['./basic-example.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerDirective
    ]
})
export class BaicExampeComponent {
    color = '#2889e9'
}
