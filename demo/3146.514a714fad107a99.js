"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3146],{3146:n=>{n.exports="import { Component, ViewEncapsulation } from '@angular/core'\nimport { formatOutput, stringToHsva } from 'nxt-color-picker'\n\n@Component({\n    selector: 'app-alpha-channel',\n    templateUrl: './alpha-channel.component.html',\n    styleUrls: ['./alpha-channel.component.scss'],\n    encapsulation: ViewEncapsulation.Emulated\n})\nexport class AlphaChannelComponent {\n    color1 = 'rgb(0,255,255)'\n    color2 = 'rgba(0,255,0,0.5)'\n    color3 = '#a51ad633'\n    color4 = 'rgb(255,0,0)'\n\n    rgbaText = this.onChangeColorHex8(this.color3)\n\n    onChangeColorHex8(color: string) {\n        const hsva = stringToHsva(color, true)\n\n        if (hsva) {\n            return formatOutput(hsva, 'rgba')\n        }\n\n        return ''\n    }\n}\n"}}]);