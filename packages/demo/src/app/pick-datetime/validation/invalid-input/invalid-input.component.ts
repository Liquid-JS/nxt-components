import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-invalid-input',
    templateUrl: './invalid-input.component.html',
    styleUrls: ['./invalid-input.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class InvalidInputComponent {
    value = new Date()
}
