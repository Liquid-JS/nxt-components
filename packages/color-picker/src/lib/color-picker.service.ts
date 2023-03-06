import { Injectable } from '@angular/core'
import { DialogDisplay } from '../util/types'
import { ColorPickerComponent } from './color-picker/color-picker.component'

@Injectable({
    providedIn: 'root'
})
export class ColorPickerService {

    private active: ColorPickerComponent = null

    constructor() { }

    setActive(active: ColorPickerComponent) {
        if (active && active.cpDialogDisplay == DialogDisplay.popup) {
            if (this.active && this.active != active) {
                this.active.closeDialog()
            }

            this.active = active
        }
    }
}
