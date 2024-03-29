import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-as-component',
    templateUrl: './as-component.component.html',
    styleUrls: ['./as-component.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class AsComponentComponent {
    colors = [
        '#2883e9',
        '#e920e9',
        'rgb(255,245,0)',
        'rgb(236,64,64)',
        'rgba(45,208,45,1)'
    ]
    selectedColor = 0
}
