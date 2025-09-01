import { NgModule } from '@angular/core'
import { ColorPickerDirective } from './color-picker.directive'

/** @deprecated use standalone imports */
@NgModule({
    imports: [
        ColorPickerDirective
    ],
    exports: [
        ColorPickerDirective
    ]
})
export class ColorPickerModule { }
