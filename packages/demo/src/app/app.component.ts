import { animate, style, transition, trigger } from '@angular/animations'
import { Component, ViewEncapsulation } from '@angular/core'

const visible = style({
    overflow: 'hidden',
    height: '*',
    marginTop: '*',
    marginBottom: '*'
})

const hidden = style({
    overflow: 'hidden',
    height: '0px',
    marginTop: '0px',
    marginBottom: '0px'
})

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    animations: [
        trigger('expandCollapse', [
            transition('open => close', [
                visible,
                animate('0.3s ease-in-out', hidden)
            ]),
            transition('close => open', [
                hidden,
                animate('0.3s ease-in-out', visible)
            ])
        ])
    ]
})
export class AppComponent {
    navbarCollapsed = true
    animationDone = true

    readonly menuItems = [
        {
            label: 'nxt-color-picker',
            link: '/color-picker'
        },
        {
            label: 'nxt-dropzone-wrapper',
            link: '/dropzone-wrapper'
        },
        {
            label: 'nxt-flags',
            link: '/flags'
        },
        {
            label: 'nxt-json-view',
            link: '/json-view'
        },
        {
            label: 'nxt-pick-datetime',
            link: '/pick-datetime'
        },
        {
            label: 'nxt-sortablejs',
            link: '/sortablejs'
        }
    ]

    toggle(forced = !this.navbarCollapsed) {
        this.navbarCollapsed = forced
        this.animationDone = !this.navbarCollapsed  // true if new state is open, false if new state is collapsed
    }
}
