import"./chunk-FBFWB55K.js";var n=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { Cmyk, ColorPickerModule, formatCmyk, stringToCmyk } from 'nxt-color-picker'\r
\r
@Component({\r
    selector: 'app-change-event',\r
    templateUrl: './change-event.component.html',\r
    styleUrls: ['./change-event.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        ColorPickerModule\r
    ]\r
})\r
export class ChangeEventComponent {\r
    rgbColor = '#0a6211'\r
    cmykColor = stringToCmyk(this.rgbColor)!\r
    cmykValue = formatCmyk(this.cmykColor, 'enabled')\r
\r
    onChangeColorCmyk(color: string) {\r
        const cmyk = stringToCmyk(color)\r
        return cmyk || new Cmyk(0, 0, 0, 0, 1, true)\r
    }\r
}\r
`;export{n as default};
