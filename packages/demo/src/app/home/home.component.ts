import { Component } from '@angular/core'
import { ContentWrapComponent } from '../content-wrap/content-wrap.component'
import { MetaDirective } from '../meta/meta.directive'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        MetaDirective,
        ContentWrapComponent
    ]
})
export class HomeComponent {
}
