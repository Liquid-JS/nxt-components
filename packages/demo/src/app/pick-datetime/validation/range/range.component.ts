import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateTimeModule } from 'nxt-pick-datetime'

@Component({
    selector: 'app-range',
    templateUrl: './range.component.html',
    styleUrls: ['./range.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        DateTimeModule,
        FormsModule,
        CommonModule
    ]
})
export class RangeComponent {
    value = [
        new Date(), // from = now
        new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // to = now - 2 days, resulting in an invalid range
    ]
}
