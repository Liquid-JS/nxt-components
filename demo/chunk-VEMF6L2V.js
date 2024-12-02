import"./chunk-FBFWB55K.js";var o=`<div class="btn-group-vertical"\r
    [nxtSortablejs]="elems">\r
    <button type="button"\r
        class="btn btn-secondary"\r
        *ngFor="let elem of elems">Element {{ isArray(elem) ? (elem | json) : elem }}</button>\r
</div>\r
\r
<br><br>\r
\r
<h3 class="h4">The actual model</h3>\r
\r
<app-code-block [code]="elems | json"\r
    [languages]="['json']"\r
    [copy]="false"></app-code-block>\r
`;export{o as default};
