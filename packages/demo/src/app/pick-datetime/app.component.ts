import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { OwlDateTimeComponent } from 'nxt-pick-datetime'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('date_range_component', { static: true })
    date_range_component?: OwlDateTimeComponent<AppComponent>

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
