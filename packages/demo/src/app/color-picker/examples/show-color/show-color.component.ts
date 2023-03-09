import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-show-color',
    templateUrl: './show-color.component.html',
    styleUrls: ['./show-color.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ShowColorComponent {
    color = '#e920e9'
}
