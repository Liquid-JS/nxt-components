"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3970],{3970:n=>{n.exports="import { Component, ViewEncapsulation } from '@angular/core'\nimport { Options } from 'sortablejs'\n\n@Component({\n    selector: 'app-complex-example',\n    templateUrl: './complex-example.component.html',\n    styleUrls: ['./complex-example.component.scss'],\n    encapsulation: ViewEncapsulation.Emulated\n})\nexport class ComplexExampleComponent {\n    list1 = [\n        '1',\n        '2',\n        '3',\n        '4',\n        '5'\n    ]\n\n    list2 = [\n        '6',\n        '7',\n        '8',\n        '9',\n        '10'\n    ]\n\n    list3 = [\n        '11',\n        '12'\n    ]\n\n    list4 = [\n        '13'\n    ]\n\n    list1Options: Options = {\n        group: {\n            name: 'group1',\n            put: false\n        }\n    }\n\n    list2Options: Options = {\n        group: {\n            name: 'group2',\n            put: ['group1', 'group2']\n        }\n    }\n\n    list3Options: Options = {\n        group: {\n            name: 'group2',\n            pull: 'clone',\n            put: ['group1', 'group2'],\n            revertClone: true\n        }\n    }\n\n    list4Options: Options = {\n        group: {\n            name: 'group2',\n            put: ['group1']\n        }\n    }\n}\n"}}]);