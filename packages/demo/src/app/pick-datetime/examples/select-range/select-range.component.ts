import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateTimeModule } from 'nxt-pick-datetime'

@Component({
    selector: 'app-select-range',
    templateUrl: './select-range.component.html',
    styleUrls: ['./select-range.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        DateTimeModule,
        FormsModule
    ]
})
export class SelectRangeComponent {
    range?: Date[]
}
