"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8559],{8559:n=>{n.exports="import { Component, ViewEncapsulation } from '@angular/core'\nimport { Options } from 'sortablejs'\n\n@Component({\n    selector: 'app-events',\n    templateUrl: './events.component.html',\n    styleUrls: ['./events.component.scss'],\n    encapsulation: ViewEncapsulation.Emulated\n})\nexport class EventsComponent {\n    eventItems = [\n        '1',\n        '2',\n        '3',\n        '4',\n        '5'\n    ]\n\n    eventUpdateCounter = 0\n\n    eventOptions: Options = {\n        onUpdate: () => this.eventUpdateCounter++\n    }\n}\n"}}]);