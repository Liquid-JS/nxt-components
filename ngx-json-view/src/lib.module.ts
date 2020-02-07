import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxJsonViewComponent } from './component/ngx-json-view.component';
import { JsonViewComponent } from './component/json-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NgxJsonViewComponent
  ],
  declarations: [
    JsonViewComponent,
    NgxJsonViewComponent
  ]
})
export class NgxJsonViewModule { }
