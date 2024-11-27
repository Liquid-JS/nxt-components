import"./chunk-FBFWB55K.js";var n=`import { CommonModule } from '@angular/common'\r
import { Component, ViewEncapsulation } from '@angular/core'\r
import { ColorPickerModule } from 'nxt-color-picker'\r
\r
@Component({\r
    selector: 'app-as-component',\r
    templateUrl: './as-component.component.html',\r
    styleUrls: ['./as-component.component.scss'],\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        ColorPickerModule,\r
        CommonModule\r
    ]\r
})\r
export class AsComponentComponent {\r
    colors = [\r
        '#2883e9',\r
        '#e920e9',\r
        'rgb(255,245,0)',\r
        'rgb(236,64,64)',\r
        'rgba(45,208,45,1)'\r
    ]\r
    selectedColor = 0\r
}\r
`;export{n as default};
