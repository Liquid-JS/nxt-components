import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'nxt-json-view',
    templateUrl: './json-view.component.html',
    styleUrls: ['./json-view.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class JsonViewComponent {
    @Input() data: any
    @Input() levelOpen?: number
    @Input() levelLabels?: { [level: number]: { [key: string]: string } }
}
