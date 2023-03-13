import { Component, OnInit, ViewChild } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { DateTimeComponent } from 'nxt-pick-datetime'

@Component({
    selector: 'app-pick-datetime',
    templateUrl: './pick-datetime.component.html',
    styleUrls: ['./pick-datetime.component.scss']
})
export class AppPickDatetimeComponent implements OnInit {
    @ViewChild('date_range_component', { static: true })
    date_range_component?: DateTimeComponent<AppPickDatetimeComponent>

    selectedMoments: Date[] = [
        new Date('2019-03-11T08:00:00+11:00'),
        new Date('2019-03-11T15:00:00+11:00')
    ]

    open_once = false

    constructor(
        private readonly title: Title
    ) { }

    ngOnInit(): void {
        this.title.setTitle('nxt-pick-datetime')
    }
}
