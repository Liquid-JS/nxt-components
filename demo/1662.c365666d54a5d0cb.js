"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1662],{1662:n=>{n.exports='<div class="row">\r\n    <div class="col">\r\n        <ul class="list-group sortable"\r\n            [nxtSortablejs]="cloneList1"\r\n            [config]="clone1Options">\r\n            <li class="list-group-item"\r\n                *ngFor="let item of cloneList1">Element {{ item }}</li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class="col">\r\n        <ul class="list-group sortable"\r\n            [nxtSortablejs]="cloneList2"\r\n            [config]="clone2Options">\r\n            <li class="list-group-item"\r\n                *ngFor="let item of cloneList2">Element {{ item }}</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<h3 class="h4">List states</h3>\r\n\r\n<div class="row">\r\n    <div class="col">\r\n        <app-code-block [code]="cloneList1 | json"\r\n            [languages]="[\'json\']"\r\n            [copy]="false"></app-code-block>\r\n    </div>\r\n    <div class="col">\r\n        <app-code-block [code]="cloneList2 | json"\r\n            [languages]="[\'json\']"\r\n            [copy]="false"></app-code-block>\r\n    </div>\r\n</div>\r\n'}}]);