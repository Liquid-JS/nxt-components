import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ColorPickerModule } from 'nxt-color-picker'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { AppColorPickerRoutingModule } from './color-picker-routing.module'
import { AppColorPickerComponent } from './color-picker.component'

@NgModule({
    declarations: [
        AppColorPickerComponent
    ],
    imports: [
        CommonModule,
        ColorPickerModule,
        AppColorPickerRoutingModule,
        ContentWrapComponent
    ]
})
export class AppColorPickerModule { }
