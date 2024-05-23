"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1647],{1647:s=>{s.exports='<div class="row">\r\n    <div class="col mb-4">\r\n        <strong>1. This list cannot accept items</strong>\r\n        <ul class="mt-2 list-group sortable"\r\n            [nxtSortablejs]="list1"\r\n            [config]="list1Options">\r\n            <li class="list-group-item"\r\n                *ngFor="let item of list1">Element {{ item }}</li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class="col mb-4">\r\n        <strong>2. This is a <em>normal</em> list</strong>\r\n        <ul class="mt-2 list-group sortable"\r\n            [nxtSortablejs]="list2"\r\n            [config]="list2Options">\r\n            <li class="list-group-item"\r\n                *ngFor="let item of list2">Element {{ item }}</li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class="col mb-4">\r\n        <strong>3. This list clones its children</strong>\r\n        <ul class="mt-2 list-group sortable"\r\n            [nxtSortablejs]="list3"\r\n            [config]="list3Options">\r\n            <li class="list-group-item"\r\n                *ngFor="let item of list3">Element {{ item }}</li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class="col mb-4">\r\n        <strong>4. Only items from #1 can be put here</strong>\r\n        <ul class="mt-2 list-group sortable"\r\n            [nxtSortablejs]="list4"\r\n            [config]="list4Options">\r\n            <li class="list-group-item"\r\n                *ngFor="let item of list4">Element {{ item }}</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<h3 class="h4">List states</h3>\r\n\r\n<div class="row">\r\n    <div class="col mb-4">\r\n        <app-code-block [code]="list1 | json"\r\n            [languages]="[\'json\']"\r\n            [copy]="false"></app-code-block>\r\n    </div>\r\n    <div class="col mb-4">\r\n        <app-code-block [code]="list2 | json"\r\n            [languages]="[\'json\']"\r\n            [copy]="false"></app-code-block>\r\n    </div>\r\n    <div class="col mb-4">\r\n        <app-code-block [code]="list3 | json"\r\n            [languages]="[\'json\']"\r\n            [copy]="false"></app-code-block>\r\n    </div>\r\n    <div class="col mb-4">\r\n        <app-code-block [code]="list4 | json"\r\n            [languages]="[\'json\']"\r\n            [copy]="false"></app-code-block>\r\n    </div>\r\n</div>\r\n'}}]);