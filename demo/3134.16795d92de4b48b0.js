"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3134],{3134:r=>{r.exports='<input class="form-control"\r\n    [value]="color1"\r\n    [style.background]="color1"\r\n    [style.color]="picker1.textColorMode(\'#fff\') == \'light\' ? \'#f8f9fa\': \'#212529\'"\r\n    #picker1="nxtColorPicker"\r\n    alphaChannel="always"\r\n    outputFormat="rgba"\r\n    [(nxtColor)]="color1" />\r\n<br>\r\n<input class="form-control"\r\n    [value]="color2"\r\n    [style.background]="color2"\r\n    [style.color]="picker2.textColorMode(\'#fff\') == \'light\' ? \'#f8f9fa\': \'#212529\'"\r\n    #picker2="nxtColorPicker"\r\n    alphaChannel="disabled"\r\n    outputFormat="rgba"\r\n    [(nxtColor)]="color2" />\r\n<br>\r\n<input class="form-control"\r\n    [value]="color3"\r\n    [style.background]="rgbaText"\r\n    [style.color]="picker3.textColorMode(\'#fff\') == \'light\' ? \'#f8f9fa\': \'#212529\'"\r\n    #picker3="nxtColorPicker"\r\n    alphaChannel="always"\r\n    outputFormat="hex"\r\n    [nxtColor]="color3"\r\n    (nxtColorChange)="rgbaText = onChangeColorHex8($event); color3 = $event" />\r\n<br>\r\n<input class="form-control"\r\n    [value]="color4"\r\n    [style.background]="color4"\r\n    [style.color]="picker4.textColorMode(\'#fff\') == \'light\' ? \'#f8f9fa\': \'#212529\'"\r\n    #picker4="nxtColorPicker"\r\n    alphaChannel="forced"\r\n    outputFormat="hex"\r\n    [(nxtColor)]="color4" />\r\n'}}]);