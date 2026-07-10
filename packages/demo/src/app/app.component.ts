import { ViewportScroller } from '@angular/common'
import { Component, effect, ElementRef, inject, signal, viewChild } from '@angular/core'
import { RouterModule } from '@angular/router'
import logo from '../assets/nxt-logo.png'

type MenuItem = {
    label: string
    children?: MenuItem[]
} & ({ link: string, url?: undefined } | { link?: undefined, url: string })

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        RouterModule
    ]
})
export class AppComponent {
    readonly navbarCollapsed = signal(true)

    readonly logo = logo

    readonly menuItems: MenuItem[] = [
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
            label: 'nxt-highlightjs',
            link: '/highlightjs',
            children: [
                {
                    label: 'Getting started',
                    link: 'getting-started'
                },
                {
                    label: 'Extras',
                    link: 'extras'
                },
                {
                    label: 'API docs',
                    url: 'https://liquid-js.github.io/nxt-components/nxt-highlightjs'
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
            label: 'nxt-sitemap',
            link: '/sitemap',
            children: [
                {
                    label: 'API docs',
                    url: 'https://liquid-js.github.io/nxt-components/nxt-sitemap'
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

    readonly header = viewChild<ElementRef<HTMLElement>>('headerEl')

    constructor() {
        const scroller = inject(ViewportScroller)
        effect(() => {
            const val = this.header()
            if (val)
                scroller.setOffset(() => [0, (val.nativeElement?.clientHeight || 1) - 1])
        })
    }

    toggle(forced = !this.navbarCollapsed()) {
        if (forced != this.navbarCollapsed()) {
            this.navbarCollapsed.set(forced)
        }
    }
}
