import"./chunk-FBFWB55K.js";var i=`<div class="row">\r
    <div class="col mb-4">\r
        <strong>1. This list cannot accept items</strong>\r
        <ul class="mt-2 list-group sortable"\r
            [nxtSortablejs]="list1"\r
            [config]="list1Options">\r
            @for (item of list1; track item) {\r
            <li class="list-group-item">Element {{ item }}</li>\r
            }\r
        </ul>\r
    </div>\r
\r
    <div class="col mb-4">\r
        <strong>2. This is a <em>normal</em> list</strong>\r
        <ul class="mt-2 list-group sortable"\r
            [nxtSortablejs]="list2"\r
            [config]="list2Options">\r
            @for (item of list2; track item) {\r
            <li class="list-group-item">Element {{ item }}</li>\r
            }\r
        </ul>\r
    </div>\r
\r
    <div class="col mb-4">\r
        <strong>3. This list clones its children</strong>\r
        <ul class="mt-2 list-group sortable"\r
            [nxtSortablejs]="list3"\r
            [config]="list3Options">\r
            @for (item of list3; track item) {\r
            <li class="list-group-item">Element {{ item }}</li>\r
            }\r
        </ul>\r
    </div>\r
\r
    <div class="col mb-4">\r
        <strong>4. Only items from #1 can be put here</strong>\r
        <ul class="mt-2 list-group sortable"\r
            [nxtSortablejs]="list4"\r
            [config]="list4Options">\r
            @for (item of list4; track item) {\r
            <li class="list-group-item">Element {{ item }}</li>\r
            }\r
        </ul>\r
    </div>\r
</div>\r
\r
<h3 class="h4">List states</h3>\r
\r
<div class="row">\r
    <div class="col mb-4">\r
        <app-code-block [code]="list1 | json"\r
            [languages]="['json']"\r
            [copy]="false"></app-code-block>\r
    </div>\r
    <div class="col mb-4">\r
        <app-code-block [code]="list2 | json"\r
            [languages]="['json']"\r
            [copy]="false"></app-code-block>\r
    </div>\r
    <div class="col mb-4">\r
        <app-code-block [code]="list3 | json"\r
            [languages]="['json']"\r
            [copy]="false"></app-code-block>\r
    </div>\r
    <div class="col mb-4">\r
        <app-code-block [code]="list4 | json"\r
            [languages]="['json']"\r
            [copy]="false"></app-code-block>\r
    </div>\r
</div>\r
`;export{i as default};
