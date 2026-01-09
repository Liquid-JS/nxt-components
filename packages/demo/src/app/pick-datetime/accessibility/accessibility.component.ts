import { Component, ViewEncapsulation } from '@angular/core'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { MetaDirective } from '../../meta/meta.directive'

@Component({
    selector: 'app-accessibility',
    templateUrl: './accessibility.component.html',
    styleUrls: ['./accessibility.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        MetaDirective,
        ContentWrapComponent
    ]
})
export class AccessibilityComponent {

}
