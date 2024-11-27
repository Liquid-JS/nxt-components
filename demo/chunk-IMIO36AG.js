import"./chunk-2R6CW7ES.js";var l=`<ul class="list-group"\r
    [nxtSortablejs]="draggableItems"\r
    [config]="draggableOptions">\r
    <li class="list-group-item"\r
        *ngFor="let item of draggableItems"\r
        [class.draggable]="item.draggable"\r
        [class.disabled]="!item.draggable">\r
        Element {{ item.text }}\r
    </li>\r
</ul>\r
<br>\r
\r
<h3 class="h4">The actual model</h3>\r
\r
<app-code-block [code]="draggableItems | json"\r
    [languages]="['json']"\r
    [copy]="false"></app-code-block>\r
`;export{l as default};
