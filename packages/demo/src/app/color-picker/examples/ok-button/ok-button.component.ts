import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-ok-button',
    templateUrl: './ok-button.component.html',
    styleUrls: ['./ok-button.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class OkButtonComponent {
    color = '#278ce2'
}
