import"./chunk-FBFWB55K.js";var s=`<input class="form-control"\r
    [style.background]="rgbColor"\r
    [nxtColor]="rgbColor"\r
    [cmykEnabled]="true"\r
    (cmykColorChange)="cmykValue = $event; cmykColor = onChangeColorCmyk($event)"\r
    (nxtColorChange)="rgbColor = $event" />\r
<div>{{ cmykValue }}</div>\r
<div class="cmyk-container">\r
    <span class="cmyk-text"\r
        style="color: rgb(0,255,255);"\r
        [style.font-size.px]="96 * cmykColor.c">C</span>\r
    <span class="cmyk-text"\r
        style="color: rgb(255,0,255)"\r
        [style.font-size.px]="96 * cmykColor.m">M</span>\r
    <span class="cmyk-text"\r
        style="color: rgb(255,255,0)"\r
        [style.font-size.px]="96 * cmykColor.y">Y</span>\r
    <span class="cmyk-text"\r
        style="color: rgb(0,0,0)"\r
        [style.font-size.px]="96 * cmykColor.k">K</span>\r
</div>\r
`;export{s as default};
