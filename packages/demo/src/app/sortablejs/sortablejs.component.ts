import { Component } from '@angular/core'

@Component({
    selector: 'app-sortablejs',
    templateUrl: './sortablejs.component.html',
    styleUrls: ['./sortablejs.component.scss']
})
export class AppSortablejsComponent {

    navbarCollapsed = true

    get showTestCases() {
        return localStorage.getItem('showTestCases') === 'true'
    }

}
