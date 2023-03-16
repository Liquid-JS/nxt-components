import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-validate-min-max',
    templateUrl: './min-max.component.html',
    styleUrls: ['./min-max.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ValidateMinMaxComponent {
    value = new Date()

    min = new Date(this.value.getTime() + 3 * 24 * 60 * 60 * 1000) // 2 days after value

    max = new Date(this.value.getTime() - 3 * 24 * 60 * 60 * 1000) // 2 days before value
}
