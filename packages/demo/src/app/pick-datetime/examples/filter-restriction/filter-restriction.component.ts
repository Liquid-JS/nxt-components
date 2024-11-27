import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateTimeModule } from 'nxt-pick-datetime'

@Component({
    selector: 'app-filter-restriction',
    templateUrl: './filter-restriction.component.html',
    styleUrls: ['./filter-restriction.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        DateTimeModule,
        FormsModule
    ]
})
export class FilterRestrictionComponent {
    date?: Date
    filter = (d?: Date) => {
        const day = d?.getDay()
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6
    }
}
