"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1662],{1662:n=>{n.exports='<div class="row">\n    <div class="col">\n        <ul class="list-group sortable"\n            [nxtSortablejs]="cloneList1"\n            [config]="clone1Options">\n            <li class="list-group-item"\n                *ngFor="let item of cloneList1">Element {{ item }}</li>\n        </ul>\n    </div>\n\n    <div class="col">\n        <ul class="list-group sortable"\n            [nxtSortablejs]="cloneList2"\n            [config]="clone2Options">\n            <li class="list-group-item"\n                *ngFor="let item of cloneList2">Element {{ item }}</li>\n        </ul>\n    </div>\n</div>\n<br>\n\n<h3 class="h4">List states</h3>\n\n<div class="row">\n    <div class="col">\n        <app-code-block [code]="cloneList1 | json"\n            [languages]="[\'json\']"\n            [copy]="false"></app-code-block>\n    </div>\n    <div class="col">\n        <app-code-block [code]="cloneList2 | json"\n            [languages]="[\'json\']"\n            [copy]="false"></app-code-block>\n    </div>\n</div>\n'}}]);