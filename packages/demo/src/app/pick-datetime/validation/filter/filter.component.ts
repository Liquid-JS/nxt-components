import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateFilter, DateTimeComponent, DateTimeInputDirective, DateTimeTriggerDirective } from 'nxt-pick-datetime'

const lastSunday = new Date()
lastSunday.setDate(lastSunday.getDate() - lastSunday.getDay())

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        DateTimeTriggerDirective,
        DateTimeInputDirective,
        DateTimeComponent,
        FormsModule,
        CommonModule
    ]
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
