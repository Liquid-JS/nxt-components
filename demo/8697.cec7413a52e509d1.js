"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8697],{8697:n=>{n.exports="import { Component, ViewEncapsulation } from '@angular/core'\nimport { Cmyk, formatCmyk, stringToCmyk } from 'nxt-color-picker'\n\n@Component({\n    selector: 'app-change-event',\n    templateUrl: './change-event.component.html',\n    styleUrls: ['./change-event.component.scss'],\n    encapsulation: ViewEncapsulation.Emulated\n})\nexport class ChangeEventComponent {\n    rgbColor = '#0a6211'\n    cmykColor = stringToCmyk(this.rgbColor)!\n    cmykValue = formatCmyk(this.cmykColor, 'enabled')\n\n    onChangeColorCmyk(color: string) {\n        const cmyk = stringToCmyk(color)\n        return cmyk || new Cmyk(0, 0, 0, 0, 1, true)\n    }\n}\n"}}]);