import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-range',
    templateUrl: './range.component.html',
    styleUrls: ['./range.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class RangeComponent {
    value = [
        new Date(), // from = now
        new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // to = now - 2 days, resulting in an invalid range
    ]
}
