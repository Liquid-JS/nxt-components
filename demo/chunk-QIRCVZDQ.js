import"./chunk-FBFWB55K.js";var n=`<textarea class="form-control"\r
    rows="15"\r
    [ngModel]="jsonString"\r
    (ngModelChange)="load($event)"></textarea>\r
<br>\r
@if (!invalidInput) {\r
<nxt-json-view [data]="data"\r
    [levelOpen]="1" />\r
} @else {\r
<p>Failed to parse input string; please enter valid JSON</p>\r
}\r
`;export{n as default};
