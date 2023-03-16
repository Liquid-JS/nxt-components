import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
    selector: 'app-sortablejs',
    templateUrl: './sortablejs.component.html',
    styleUrls: ['./sortablejs.component.scss']
})
export class AppSortablejsComponent implements OnInit {

    navbarCollapsed = true

    get showTestCases() {
        return localStorage.getItem('showTestCases') === 'true'
    }

    constructor(
        private readonly title: Title
    ) { }

    ngOnInit(): void {
        this.title.setTitle('nxt-sortablejs')
    }

}
