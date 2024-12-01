import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-content-wrap',
    imports: [CommonModule],
    template: '<ng-content></ng-content>',
    styles: [`
    :host {
        display: block;
        max-width: 1200px;
        margin: 0 auto;
        overflow-x: auto;
    }
    `],
    host: {
        class: 'px-3 px-md-4 pt-4 pt-md-5 pb-4'
    }
})
export class ContentWrapComponent { }
