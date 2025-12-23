import"./chunk-FBFWB55K.js";var t=`<input class="form-control"\r
    [ngClass]="{ 'is-invalid': dateTimeControl.invalid }"\r
    [(ngModel)]="value"\r
    #dateTimeControl="ngModel"\r
    placeholder="Date and time"\r
    selectMode="range"\r
    [nxtDateTimeTrigger]="picker"\r
    [nxtDateTime]="picker">\r
<nxt-date-time #picker></nxt-date-time>\r
@if (dateTimeControl.errors?.['dateTimeRange']) {\r
<div class="invalid-feedback">\r
    "Range.to" should be greater than "range.from".\r
</div>\r
}\r
`;export{t as default};
