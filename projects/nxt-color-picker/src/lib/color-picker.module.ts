import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ColorPickerDirective } from './color-picker.directive'
import { ColorPickerComponent } from './color-picker/color-picker.component'
import { SliderDirective } from './slider.directive'
import { TextDirective } from './text.directive'

@NgModule({
    declarations: [
        TextDirective,
        SliderDirective,
        ColorPickerComponent,
        ColorPickerDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ColorPickerDirective
    ]
})
export class ColorPickerModule { }
