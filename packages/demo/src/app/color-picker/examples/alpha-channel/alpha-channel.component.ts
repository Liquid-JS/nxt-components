import { Component, ViewEncapsulation } from '@angular/core'
import { ColorPickerModule, formatOutput, stringToHsva } from 'nxt-color-picker'

@Component({
    selector: 'app-alpha-channel',
    templateUrl: './alpha-channel.component.html',
    styleUrls: ['./alpha-channel.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        ColorPickerModule
    ]
})
export class AlphaChannelComponent {
    color1 = 'rgb(0,255,255)'
    color2 = 'rgba(0,255,0,0.5)'
    color3 = '#a51ad633'
    color4 = 'rgb(255,0,0)'

    rgbaText = this.onChangeColorHex8(this.color3)

    onChangeColorHex8(color: string) {
        const hsva = stringToHsva(color, true)

        if (hsva) {
            return formatOutput(hsva, 'rgba')
        }

        return ''
    }
}
