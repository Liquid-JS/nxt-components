import"./chunk-2R6CW7ES.js";var a=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { ColorPickerModule, formatOutput, stringToHsva } from 'nxt-color-picker'\r
\r
@Component({\r
    selector: 'app-alpha-channel',\r
    templateUrl: './alpha-channel.component.html',\r
    styleUrls: ['./alpha-channel.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        ColorPickerModule\r
    ]\r
})\r
export class AlphaChannelComponent {\r
    color1 = 'rgb(0,255,255)'\r
    color2 = 'rgba(0,255,0,0.5)'\r
    color3 = '#a51ad633'\r
    color4 = 'rgb(255,0,0)'\r
\r
    rgbaText = this.onChangeColorHex8(this.color3)\r
\r
    onChangeColorHex8(color: string) {\r
        const hsva = stringToHsva(color, true)\r
\r
        if (hsva) {\r
            return formatOutput(hsva, 'rgba')\r
        }\r
\r
        return ''\r
    }\r
}\r
`;export{a as default};
