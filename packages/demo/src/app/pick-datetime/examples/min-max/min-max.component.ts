import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateTimeModule } from 'nxt-pick-datetime'

@Component({
    selector: 'app-min-max',
    templateUrl: './min-max.component.html',
    styleUrls: ['./min-max.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        DateTimeModule,
        FormsModule
    ]
})
export class MinMaxComponent {
    date?: Date
    min = new Date(2018, 3, 12, 10, 30)
    max = new Date(2018, 3, 25, 20, 30)
    startAt = new Date(2018, 3, 18, 10, 30)
}
