import"./chunk-2R6CW7ES.js";var a=`<textarea class="form-control"\r
    rows="15"\r
    [ngModel]="jsonString"\r
    (ngModelChange)="load($event)"></textarea>\r
<br>\r
<nxt-json-view *ngIf="!invalidInput; else warning"\r
    [data]="data"\r
    [levelOpen]="1"></nxt-json-view>\r
<ng-template #warning>\r
    <p>Failed to parse input string; please enter valid JSON</p>\r
</ng-template>\r
`;export{a as default};
