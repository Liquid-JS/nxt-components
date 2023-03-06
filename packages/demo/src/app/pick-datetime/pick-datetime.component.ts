import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { OwlDateTimeComponent } from 'nxt-pick-datetime'

@Component({
    selector: 'app-pick-datetime',
    templateUrl: './pick-datetime.component.html',
    styleUrls: ['./pick-datetime.component.scss']
})
export class AppPickDatetimeComponent implements AfterViewInit {
    @ViewChild('date_range_component', { static: true })
    date_range_component?: OwlDateTimeComponent<AppPickDatetimeComponent>

    public selectedMoments: Date[] = [
        new Date('2019-03-11T08:00:00+11:00'),
        new Date('2019-03-11T15:00:00+11:00')
    ]

    open_once = false

    ngAfterViewInit() {
        /*
        if (!this.open_once) {
            this.date_range_component.open();
            this.open_once = true;
        }
        */
    }
}
