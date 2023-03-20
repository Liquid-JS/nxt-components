import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-grayscale-mode',
    templateUrl: './grayscale-mode.component.html',
    styleUrls: ['./grayscale-mode.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class GrayscaleModeComponent {
    color = '#666666'
}
