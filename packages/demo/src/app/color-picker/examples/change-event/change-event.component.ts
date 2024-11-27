import { Component, ViewEncapsulation } from '@angular/core'
import { Cmyk, ColorPickerModule, formatCmyk, stringToCmyk } from 'nxt-color-picker'

@Component({
    selector: 'app-change-event',
    templateUrl: './change-event.component.html',
    styleUrls: ['./change-event.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerModule
    ]
})
export class ChangeEventComponent {
    rgbColor = '#0a6211'
    cmykColor = stringToCmyk(this.rgbColor)!
    cmykValue = formatCmyk(this.cmykColor, 'enabled')

    onChangeColorCmyk(color: string) {
        const cmyk = stringToCmyk(color)
        return cmyk || new Cmyk(0, 0, 0, 0, 1, true)
    }
}
