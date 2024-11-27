import"./chunk-2R6CW7ES.js";var s=`<ul class="list-group"\r
    [nxtSortablejs]="citiesControls">\r
    <li class="list-group-item"\r
        *ngFor="let city of citiesControls.controls">\r
        <input class="form-control"\r
            [formControl]="city">\r
    </li>\r
</ul>\r
<br>\r
\r
<h3 class="h4">FormArray value</h3>\r
\r
<app-code-block [code]="citiesControls.value | json"\r
    [languages]="['json']"\r
    [copy]="false"></app-code-block>\r
`;export{s as default};
