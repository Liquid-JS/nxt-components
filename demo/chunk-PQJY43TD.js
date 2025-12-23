import"./chunk-FBFWB55K.js";var i=`<input class="form-control"\r
    [ngClass]="{ 'is-invalid': minDateTimeControl.invalid }"\r
    [(ngModel)]="value"\r
    #minDateTimeControl="ngModel"\r
    placeholder="Date and time"\r
    [nxtDateTimeTrigger]="pickerMin"\r
    [nxtDateTime]="pickerMin"\r
    [min]="min">\r
<nxt-date-time #pickerMin></nxt-date-time>\r
@if (minDateTimeControl.errors?.['dateTimeMin']; as minError) {\r
<div class="invalid-feedback">\r
    Selected value should be after "{{ minError.min | date:'short' }}", received "{{ minError.actual | date:'short' }}".\r
</div>\r
}\r
<br>\r
<input class="form-control"\r
    [ngClass]="{ 'is-invalid': maxDateTimeControl.invalid }"\r
    [(ngModel)]="value"\r
    #maxDateTimeControl="ngModel"\r
    placeholder="Date and time"\r
    [nxtDateTimeTrigger]="pickerMax"\r
    [nxtDateTime]="pickerMax"\r
    [max]="max">\r
<nxt-date-time #pickerMax></nxt-date-time>\r
@if (maxDateTimeControl.errors?.['dateTimeMax']; as maxError) {\r
<div class="invalid-feedback">\r
    Selected value should be before "{{ maxError.max | date:'short' }}", received "{{ maxError.actual | date:'short' }}".\r
</div>\r
}\r
`;export{i as default};
