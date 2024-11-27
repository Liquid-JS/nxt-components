import"./chunk-2R6CW7ES.js";var t=`<input class="form-control"\r
    [ngClass]="{ 'is-invalid': dateTimeControl.invalid }"\r
    [(ngModel)]="value"\r
    #dateTimeControl="ngModel"\r
    placeholder="Date and time"\r
    [nxtDateTimeTrigger]="picker"\r
    [nxtDateTime]="picker">\r
<nxt-date-time #picker></nxt-date-time>\r
<div class="invalid-feedback"\r
    *ngIf="dateTimeControl.errors?.['dateTimeParse'] as parseError">\r
    Input is not a valid date string, received "{{ parseError.text }}".\r
</div>\r
`;export{t as default};
