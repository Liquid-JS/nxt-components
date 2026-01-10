import"./chunk-FBFWB55K.js";var t=`<input class="form-control"\r
    [class.is-invalid]="dateTimeControl.invalid"\r
    [(ngModel)]="value"\r
    #dateTimeControl="ngModel"\r
    placeholder="Date and time"\r
    [nxtDateTimeTrigger]="picker"\r
    [nxtDateTime]="picker"\r
    [dateTimeFilter]="dateTimeFilter">\r
<nxt-date-time #picker />\r
@if (dateTimeControl.errors?.['dateTimeFilter']) {\r
<div class="invalid-feedback">\r
    Selected date can't be a Sunday.\r
</div>\r
}\r
`;export{t as default};
