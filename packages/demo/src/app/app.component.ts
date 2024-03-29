import { animate, style, transition, trigger } from '@angular/animations'
import { Component } from '@angular/core'
import logo from '../assets/nxt-logo.png'

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
    animations: [
        trigger('expandCollapseNav', [
            transition('open => close', [
                visible,
                animate('0.3s ease-in-out', hidden)
            ]),
            transition('close => open', [
                hidden,
                animate('0.3s ease-in-out', visible)
            ])
        ]),
        trigger('expandCollapse', [
            transition('* => void', [
                visible,
                animate('0.3s ease-in-out', hidden)
            ]),
            transition('void => *', [
                hidden,
                animate('0.3s ease-in-out', visible)
            ])
        ]),
        trigger('blockInitialRenderAnimation', [
            transition(':enter', [])
        ])
    ]
})
export class AppComponent {
    navbarCollapsed = true
    animationDone = true

    readonly logo = logo

    readonly menuItems = [
        {
            label: 'nxt-color-picker',
            link: '/color-picker',
            children: [
                {
                    label: 'Getting started',
                    link: 'getting-started'
                },
                {
                    label: 'API docs',
                    url: 'https://liquid-js.github.io/nxt-components/nxt-color-picker'
                }
            ]
        },
        {
            label: 'nxt-dropzone-wrapper',
            link: '/dropzone-wrapper',
            children: [
                {
                    label: 'Getting started',
                    link: 'getting-started'
                },
                {
                    label: 'API docs',
                    url: 'https://liquid-js.github.io/nxt-components/nxt-dropzone-wrapper'
                },
                {
                    label: 'Dropzone documentation',
                    url: 'https://docs.dropzone.dev/configuration/basics/configuration-options'
                }
            ]
        },
        {
            label: 'nxt-flags',
            link: '/flags',
            children: [
                {
                    label: 'Getting started',
                    link: 'getting-started'
                },
                {
                    label: 'API docs',
                    url: 'https://liquid-js.github.io/nxt-components/nxt-flags'
                }
            ]
        },
        {
            label: 'nxt-json-view',
            link: '/json-view',
            children: [
                {
                    label: 'Getting started',
                    link: 'getting-started'
                },
                {
                    label: 'API docs',
                    url: 'https://liquid-js.github.io/nxt-components/nxt-json-view'
                }
            ]
        },
        {
            label: 'nxt-pick-datetime',
            link: '/pick-datetime',
            children: [
                {
                    label: 'Getting started',
                    link: 'getting-started'
                },
                {
                    label: 'Accessibility',
                    link: 'accessibility'
                },
                {
                    label: 'Validation',
                    link: 'validation'
                },
                {
                    label: 'Custom date adapter',
                    link: 'custom-adapter'
                },
                {
                    label: 'API docs',
                    url: 'https://liquid-js.github.io/nxt-components/nxt-pick-datetime'
                }
            ]
        },
        {
            label: 'nxt-sortablejs',
            link: '/sortablejs',
            children: [
                {
                    label: 'Getting started',
                    link: 'getting-started'
                },
                {
                    label: 'API docs',
                    url: 'https://liquid-js.github.io/nxt-components/nxt-sortablejs'
                }
            ]
        }
    ]

    toggle(forced = !this.navbarCollapsed) {
        if (forced != this.navbarCollapsed) {
            this.navbarCollapsed = forced
            this.animationDone = !this.navbarCollapsed  // true if new state is open, false if new state is collapsed
        }
    }
}
