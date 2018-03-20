import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-json-view',
  template: `
    <div class="ngx-json-view">
      <json-view [data]="data" [level]="level" [levelOpen]="levelOpen" class="json-view"></json-view>
    </div>
  `
})
export class NgxJsonViewComponent {

  @Input() data;
  @Input() levelOpen: number;

  key: string;
  level: number = 0;
}
