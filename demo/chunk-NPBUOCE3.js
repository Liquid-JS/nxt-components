import"./chunk-FBFWB55K.js";var i=`<input class="form-control"\r
    [ngClass]="{ 'is-invalid': dateTimeControl.invalid }"\r
    [(ngModel)]="value"\r
    #dateTimeControl="ngModel"\r
    placeholder="Date and time"\r
    [nxtDateTimeTrigger]="picker"\r
    [nxtDateTime]="picker"\r
    [dateTimeFilter]="dateTimeFilter">\r
<nxt-date-time #picker></nxt-date-time>\r
<div class="invalid-feedback"\r
    *ngIf="dateTimeControl.errors?.['dateTimeFilter']">\r
    Selected date can't be a Sunday.\r
</div>\r
`;export{i as default};
