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
    @Input() levelLabels?: { [key: number]: { [key: string]: string } }

    key?: string
    level: number = 0

}
