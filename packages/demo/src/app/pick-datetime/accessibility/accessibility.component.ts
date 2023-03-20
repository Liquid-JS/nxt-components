import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
    selector: 'app-accessibility',
    templateUrl: './accessibility.component.html',
    styleUrls: ['./accessibility.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class AccessibilityComponent implements OnInit {

    constructor(
        private readonly title: Title
    ) { }

    ngOnInit(): void {
        this.title.setTitle('Accessibility | nxt-pick-datetime')
    }

}
