import { Component, ViewEncapsulation } from '@angular/core'
import { DateFilter } from 'nxt-pick-datetime'

const lastSunday = new Date()
lastSunday.setDate(lastSunday.getDate() - lastSunday.getDay())

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FilterComponent {
    value = lastSunday

    dateTimeFilter: DateFilter<Date> = (date) => {
        // Don't allow Sundays
        if (date?.getDay() == 0)
            return false

        return true
    }
}
