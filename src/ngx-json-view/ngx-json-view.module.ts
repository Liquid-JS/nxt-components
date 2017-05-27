import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonViewComponent, NgxJsonViewComponent } from './component';

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
