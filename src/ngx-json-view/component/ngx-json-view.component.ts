import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-json-view',
  template: `
    <div class="ngx-json-view">
      <json-view [data]="data" [level]="level" [levelOpen]="levelOpen" [levelLabels]="levelLabels" class="json-view"></json-view>
    </div>
  `
})
export class NgxJsonViewComponent {

  @Input() data;
  @Input() levelOpen: number;
  @Input() levelLabels: { [key: number]: { [key: string]: string } };

  key: string;
  level: number = 0;
}
