"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1287],{1287:e=>{e.exports="import { Component, ViewEncapsulation } from '@angular/core'\nimport { Options } from 'sortablejs'\n\n@Component({\n    selector: 'app-disabled-options',\n    templateUrl: './disabled-options.component.html',\n    styleUrls: ['./disabled-options.component.scss'],\n    encapsulation: ViewEncapsulation.Emulated\n})\nexport class DisabledOptionsComponent {\n    draggableItems = [\n        { draggable: true, text: '1' },\n        { draggable: true, text: '2' },\n        { draggable: false, text: '3' },\n        { draggable: true, text: '4' },\n        { draggable: true, text: '5' }\n    ]\n\n    draggableOptions: Options = {\n        draggable: '.draggable'\n    }\n}\n"}}]);