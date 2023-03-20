import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-color-preset',
    templateUrl: './color-preset.component.html',
    styleUrls: ['./color-preset.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ColorPresetComponent {
    color = '#f2ff00'

    preset = [
        '#fff',
        '#000',
        '#2889e9',
        '#e920e9',
        '#fff500',
        'rgb(236,64,64)'
    ]
}
