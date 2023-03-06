import { Component, Input } from '@angular/core'
import { Options } from 'sortablejs'

@Component({
    selector: 'app-sortablejs-child-component',
    templateUrl: './child-component.component.html',
    styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent {

    @Input()
    list?: string[]

    options: Options = {
        group: 'test'
    }

}
