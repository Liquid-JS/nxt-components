import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DateTimeModule } from 'nxt-pick-datetime'

@Component({
    selector: 'app-trigger-icon',
    templateUrl: './trigger-icon.component.html',
    styleUrls: ['./trigger-icon.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        DateTimeModule,
        FormsModule
    ]
})
export class TriggerIconComponent {
    date?: Date
}
