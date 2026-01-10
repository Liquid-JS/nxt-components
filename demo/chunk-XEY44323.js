import"./chunk-FBFWB55K.js";var s=`<div class="btn-group-vertical"\r
    [nxtSortablejs]="elems">\r
    @for (elem of elems; track elem) {\r
    <button type="button"\r
        class="btn btn-secondary">Element {{ isArray(elem) ? (elem | json) : elem }}</button>\r
    }\r
</div>\r
\r
<br><br>\r
\r
<h3 class="h4">The actual model</h3>\r
\r
<app-code-block [code]="elems | json"\r
    [languages]="['json']"\r
    [copy]="false" />\r
`;export{s as default};
