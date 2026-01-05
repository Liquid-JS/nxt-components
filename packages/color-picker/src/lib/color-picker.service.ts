import { Injectable } from '@angular/core'
import { DialogDisplayEnum } from '../util/types'
import { ColorPickerComponent } from './color-picker/color-picker.component'

/**
 * @internal
 */
@Injectable({
    providedIn: 'root'
})
export class ColorPickerService {

    private active?: ColorPickerComponent

    setActive(active: ColorPickerComponent) {
        if (active && active.dialogDisplay == DialogDisplayEnum.popup) {
            if (this.active && this.active != active) {
                this.active.closeDialog()
            }

            this.active = active
        }
    }
}
