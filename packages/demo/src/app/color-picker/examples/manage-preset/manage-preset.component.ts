import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerDirective } from 'nxt-color-picker'

@Component({
    selector: 'app-manage-preset',
    templateUrl: './manage-preset.component.html',
    styleUrls: ['./manage-preset.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerDirective
    ]
})
export class ManagePresetComponent {

    color = 'rgba(0,255,0,0.5)'

    preset = [
        '#fff',
        '#2889e9'
    ]
}
