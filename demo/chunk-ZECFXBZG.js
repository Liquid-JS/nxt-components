import"./chunk-FBFWB55K.js";var o=`<div class="row">\r
    <div class="col">\r
        <ul class="list-group sortable"\r
            [nxtSortablejs]="cloneList1"\r
            [config]="clone1Options">\r
            <li class="list-group-item"\r
                *ngFor="let item of cloneList1">Element {{ item }}</li>\r
        </ul>\r
    </div>\r
\r
    <div class="col">\r
        <ul class="list-group sortable"\r
            [nxtSortablejs]="cloneList2"\r
            [config]="clone2Options">\r
            <li class="list-group-item"\r
                *ngFor="let item of cloneList2">Element {{ item }}</li>\r
        </ul>\r
    </div>\r
</div>\r
<br>\r
\r
<h3 class="h4">List states</h3>\r
\r
<div class="row">\r
    <div class="col">\r
        <app-code-block [code]="cloneList1 | json"\r
            [languages]="['json']"\r
            [copy]="false"></app-code-block>\r
    </div>\r
    <div class="col">\r
        <app-code-block [code]="cloneList2 | json"\r
            [languages]="['json']"\r
            [copy]="false"></app-code-block>\r
    </div>\r
</div>\r
`;export{o as default};
