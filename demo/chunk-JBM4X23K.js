import"./chunk-FBFWB55K.js";var a=`<app-code-block code="Updated {{ eventUpdateCounter }} times"\r
    [languages]="['text']"\r
    [copy]="false" />\r
<br>\r
\r
<ul class="list-group"\r
    [nxtSortablejs]="eventItems"\r
    [config]="eventOptions">\r
    @for (item of eventItems; track item) {\r
    <li class="list-group-item">\r
        Element {{ item }}\r
    </li>\r
    }\r
</ul>\r
<br>\r
\r
<div class="alert alert-info">Hint: for the <em>FormArray</em> using <em>onUpdate</em> is kinda overhead because the <em>FormArray.valueChanges</em> provides an event on every change.</div>\r
`;export{a as default};
