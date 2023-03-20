import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-trigger-icon',
    templateUrl: './trigger-icon.component.html',
    styleUrls: ['./trigger-icon.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class TriggerIconComponent {
    date?: Date
}
