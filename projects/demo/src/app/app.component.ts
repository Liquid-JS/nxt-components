import { Component } from '@angular/core'
import { Cmyk, formatOutput, OutputFormat, stringToCmyk, stringToHsva } from 'nxt-color-picker'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    toggle: boolean = false

    rgbaText: string = 'rgba(165, 26, 214, 0.2)'

    arrayColors: any = {
        color1: '#2883e9',
        color2: '#e920e9',
        color3: 'rgb(255,245,0)',
        color4: 'rgb(236,64,64)',
        color5: 'rgba(45,208,45,1)'
    }

    selectedColor: string = 'color1'

    color1: string = '#2889e9'
    color2: string = '#e920e9'
    color3: string = '#fff500'
    color4: string = 'rgb(236,64,64)'
    color5: string = 'rgba(45,208,45,1)'
    color6: string = '#1973c0'
    color7: string = '#f200bd'
    color8: string = '#a8ff00'
    color9: string = '#278ce2'
    color10: string = '#0a6211'
    color11: string = '#f2ff00'
    color12: string = '#f200bd'
    color13: string = 'rgba(0,255,0,0.5)'
    color14: string = 'rgb(0,255,255)'
    color15: string = 'rgb(255,0,0)'
    color16: string = '#a51ad633'
    color17: string = '#666666'
    color18: string = '#ff0000'

    cmykValue: string = ''

    cmykColor: Cmyk = new Cmyk(0, 0, 0, 0, 1)

    constructor() { }

    onEventLog(event: string, data: any) {
        console.log(event, data)
    }

    onChangeColorCmyk(color: string) {
        const cmyk = stringToCmyk(color)
        return cmyk || new Cmyk(0, 0, 0, 0, 1)
    }

    onChangeColorHex8(color: string) {
        const hsva = stringToHsva(color, true)

        if (hsva) {
            return formatOutput(hsva, OutputFormat.rgba, null)
        }

        return ''
    }
}
