import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-toggle-button',
    templateUrl: './toggle-button.component.html',
    styleUrls: ['./toggle-button.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ToggleButtonComponent {
    color = '#f200bd'
    toggle = false
}
