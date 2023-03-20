import { Component, Input, ViewEncapsulation } from '@angular/core'
import { LevelLabels } from '../utils/interfaces'

@Component({
    selector: 'nxt-json-view',
    templateUrl: './json-view.component.html',
    styleUrls: ['./json-view.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class JsonViewComponent {
    /** JSON data, any valid JSON object */
    @Input() data: any
    /** Initial number of levels to be expanded */
    @Input() levelOpen?: number
    /** Custom labels for elements within the hierarcy */
    @Input() levelLabels?: LevelLabels
}
