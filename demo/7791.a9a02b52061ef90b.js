"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7791],{172:e=>{e.exports='<input class="form-control"\r\n    [ngClass]="{ \'is-invalid\': minDateTimeControl.invalid }"\r\n    [(ngModel)]="value"\r\n    #minDateTimeControl="ngModel"\r\n    placeholder="Date and time"\r\n    [nxtDateTimeTrigger]="pickerMin"\r\n    [nxtDateTime]="pickerMin"\r\n    [min]="min">\r\n<nxt-date-time #pickerMin></nxt-date-time>\r\n<div class="invalid-feedback"\r\n    *ngIf="minDateTimeControl.errors?.[\'dateTimeMin\'] as minError">\r\n    Selected value should be after "{{ minError.min | date:\'short\' }}", received "{{ minError.actual | date:\'short\' }}".\r\n</div>\r\n<br>\r\n<input class="form-control"\r\n    [ngClass]="{ \'is-invalid\': maxDateTimeControl.invalid }"\r\n    [(ngModel)]="value"\r\n    #maxDateTimeControl="ngModel"\r\n    placeholder="Date and time"\r\n    [nxtDateTimeTrigger]="pickerMax"\r\n    [nxtDateTime]="pickerMax"\r\n    [max]="max">\r\n<nxt-date-time #pickerMax></nxt-date-time>\r\n<div class="invalid-feedback"\r\n    *ngIf="maxDateTimeControl.errors?.[\'dateTimeMax\'] as maxError">\r\n    Selected value should be before "{{ maxError.max | date:\'short\' }}", received "{{ maxError.actual | date:\'short\' }}".\r\n</div>\r\n'}}]);