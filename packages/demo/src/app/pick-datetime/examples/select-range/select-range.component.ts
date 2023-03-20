import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-select-range',
    templateUrl: './select-range.component.html',
    styleUrls: ['./select-range.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class SelectRangeComponent {
    range?: Date[]
}
