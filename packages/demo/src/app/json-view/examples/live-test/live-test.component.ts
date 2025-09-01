import { Component, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { JsonViewComponent } from 'nxt-json-view'

@Component({
    selector: 'app-live-test',
    templateUrl: './live-test.component.html',
    styleUrls: ['./live-test.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        JsonViewComponent,
        FormsModule
    ]
})
export class LiveTestComponent {
    data = {}
    jsonString = JSON.stringify(this.data)

    invalidInput = false

    load(value: string) {
        this.jsonString = value
        try {
            this.data = JSON.parse(this.jsonString)
            this.invalidInput = false
        } catch (_e) {
            this.invalidInput = true
        }
    }
}
