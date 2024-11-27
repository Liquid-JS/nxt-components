import"./chunk-2R6CW7ES.js";var l=`<input class="form-control"\r
    [value]="color1"\r
    [style.background]="color1"\r
    [style.color]="picker1.textColorMode('#fff') == 'light' ? '#f8f9fa': '#212529'"\r
    #picker1="nxtColorPicker"\r
    alphaChannel="always"\r
    outputFormat="rgba"\r
    [(nxtColor)]="color1" />\r
<br>\r
<input class="form-control"\r
    [value]="color2"\r
    [style.background]="color2"\r
    [style.color]="picker2.textColorMode('#fff') == 'light' ? '#f8f9fa': '#212529'"\r
    #picker2="nxtColorPicker"\r
    alphaChannel="disabled"\r
    outputFormat="rgba"\r
    [(nxtColor)]="color2" />\r
<br>\r
<input class="form-control"\r
    [value]="color3"\r
    [style.background]="rgbaText"\r
    [style.color]="picker3.textColorMode('#fff') == 'light' ? '#f8f9fa': '#212529'"\r
    #picker3="nxtColorPicker"\r
    alphaChannel="always"\r
    outputFormat="hex"\r
    [nxtColor]="color3"\r
    (nxtColorChange)="rgbaText = onChangeColorHex8($event); color3 = $event" />\r
<br>\r
<input class="form-control"\r
    [value]="color4"\r
    [style.background]="color4"\r
    [style.color]="picker4.textColorMode('#fff') == 'light' ? '#f8f9fa': '#212529'"\r
    #picker4="nxtColorPicker"\r
    alphaChannel="forced"\r
    outputFormat="hex"\r
    [(nxtColor)]="color4" />\r
`;export{l as default};
