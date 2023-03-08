import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-content-wrap',
    standalone: true,
    imports: [CommonModule],
    template: '<ng-content></ng-content>',
    styles: [`
    :host {
        display: block;
        max-width: 1200px;
        margin: 0 auto;
        overflow-x: auto;
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
    }
    `],
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'px-md-4 pt-4 pt-md-5 pb-2'
    }
})
export class ContentWrapComponent { }
