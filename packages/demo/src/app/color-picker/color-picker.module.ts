import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ColorPickerModule } from 'nxt-color-picker'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { ExampleComponent } from '../example/example.component'
import { AppColorPickerRoutingModule } from './color-picker-routing.module'
import { AppColorPickerComponent } from './color-picker/color-picker.component'
import { BasicExampleComponent } from './examples/basic-example/basic-example.component';
import { GrayscaleModeComponent } from './examples/grayscale-mode/grayscale-mode.component';
import { ShowColorComponent } from './examples/show-color/show-color.component';
import { OutputFormatComponent } from './examples/output-format/output-format.component';
import { DialogPositionComponent } from './examples/dialog-position/dialog-position.component'

@NgModule({
    declarations: [
        AppColorPickerComponent,
        BasicExampleComponent,
        GrayscaleModeComponent,
        ShowColorComponent,
        OutputFormatComponent,
        DialogPositionComponent
    ],
    imports: [
        CommonModule,
        ColorPickerModule,
        AppColorPickerRoutingModule,
        ContentWrapComponent,
        ExampleComponent
    ]
})
export class AppColorPickerModule { }
