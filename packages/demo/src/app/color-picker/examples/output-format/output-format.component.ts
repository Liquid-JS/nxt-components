import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-output-format',
    templateUrl: './output-format.component.html',
    styleUrls: ['./output-format.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class OutputFormatComponent {
    color1 = 'rgb(255,245,0)'
    color2 = 'hsl(0,82%,59%)'
}
