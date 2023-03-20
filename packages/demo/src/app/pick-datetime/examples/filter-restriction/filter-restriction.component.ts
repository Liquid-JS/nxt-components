import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-filter-restriction',
    templateUrl: './filter-restriction.component.html',
    styleUrls: ['./filter-restriction.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FilterRestrictionComponent {
    date?: Date
    filter = (d?: Date) => {
        const day = d?.getDay()
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6
    }
}
