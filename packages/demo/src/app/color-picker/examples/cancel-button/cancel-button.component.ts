import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-cancel-button',
    templateUrl: './cancel-button.component.html',
    styleUrls: ['./cancel-button.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CancelButtonComponent {
    color = '#f200bd'
}
