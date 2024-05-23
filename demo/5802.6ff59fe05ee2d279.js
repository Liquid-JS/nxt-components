"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5802],{5802:n=>{n.exports="import { Component, ViewEncapsulation } from '@angular/core'\r\nimport { formatOutput, stringToHsva } from 'nxt-color-picker'\r\n\r\n@Component({\r\n    selector: 'app-alpha-channel',\r\n    templateUrl: './alpha-channel.component.html',\r\n    styleUrls: ['./alpha-channel.component.scss'],\r\n    encapsulation: ViewEncapsulation.Emulated\r\n})\r\nexport class AlphaChannelComponent {\r\n    color1 = 'rgb(0,255,255)'\r\n    color2 = 'rgba(0,255,0,0.5)'\r\n    color3 = '#a51ad633'\r\n    color4 = 'rgb(255,0,0)'\r\n\r\n    rgbaText = this.onChangeColorHex8(this.color3)\r\n\r\n    onChangeColorHex8(color: string) {\r\n        const hsva = stringToHsva(color, true)\r\n\r\n        if (hsva) {\r\n            return formatOutput(hsva, 'rgba')\r\n        }\r\n\r\n        return ''\r\n    }\r\n}\r\n"}}]);