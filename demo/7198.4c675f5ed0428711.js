"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7198],{7198:n=>{n.exports="import { Component, ViewEncapsulation } from '@angular/core'\n\n@Component({\n    selector: 'app-filter-restriction',\n    templateUrl: './filter-restriction.component.html',\n    styleUrls: ['./filter-restriction.component.scss'],\n    encapsulation: ViewEncapsulation.Emulated\n})\nexport class FilterRestrictionComponent {\n    date?: Date\n    filter = (d?: Date) => {\n        const day = d?.getDay()\n        // Prevent Saturday and Sunday from being selected.\n        return day !== 0 && day !== 6\n    }\n}\n"}}]);