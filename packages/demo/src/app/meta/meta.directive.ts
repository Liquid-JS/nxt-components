import { DOCUMENT, Location } from '@angular/common'
import { Directive, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { Meta, MetaDefinition, Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'app-meta'
})
export class MetaDirective implements OnInit, OnDestroy, OnInit {

    @Input() set title(val: string) {
        this.titleService.setTitle(val)
        this.upsert({
            property: 'og:title',
            content: val
        })
    }

    @Input() set description(val: string) {
        this.upsert({
            name: 'description',
            content: val
        })
        this.upsert({
            property: 'og:description',
            content: val
        })
    }

    @Input() set author(val: string) {
        this.upsert({
            name: 'author',
            content: val
        })
    }

    @Input() set copyrightYear(val: string) {
        this.upsert({
            name: 'dcterms.dateCopyrighted',
            content: val
        })
    }

    @Input() set type(val: string) {
        this.upsert({
            property: 'og:type',
            content: val
        })
    }

    @Input() set image(val: string) {
        val = this.publicUrl(this.location.prepareExternalUrl(val))
        this.upsert({
            name: 'image',
            content: val
        })
        this.upsert({
            property: 'og:image',
            content: val
        })
    }

    @Input() set email(val: string) {
        this.upsert({
            property: 'og:email',
            content: val
        })
    }

    @Input() set url(val: string) {
        const el = this.dom.querySelector<HTMLLinkElement>('link[rel=\'canonical\']') || this.dom.createElement('link')
        el.setAttribute('rel', 'canonical')
        el.setAttribute('href', this.publicUrl(this.location.prepareExternalUrl(val || '/')))
        this.dom.querySelector('head')?.appendChild(el)
    }

    @Output() done = new EventEmitter<void>()

    constructor(
        private readonly titleService: Title,
        private readonly meta: Meta,
        private readonly location: Location,
        private readonly router: Router,
        @Inject(DOCUMENT) private readonly dom: Document
    ) {
        // Default values
        this.author = 'Liquid-JS'
        this.copyrightYear = new Date().getUTCFullYear().toString()
        this.type = 'website'
        this.url = this.router.url
    }

    ngOnInit(): void {
        this.done.emit()
    }

    ngOnDestroy(): void {
        this.meta.removeTag("property='og:title'")
        this.meta.removeTag("name='description'")
        this.meta.removeTag("property='og:description'")
        this.meta.removeTag("name='author'")
        this.meta.removeTag("name='dcterms.dateCopyrighted'")
        this.meta.removeTag("property='og:type'")
        this.meta.removeTag("name='image'")
        this.meta.removeTag("property='og:image'")
        this.meta.removeTag("property='og:email'")
        const el = this.dom.querySelector<HTMLLinkElement>('link[rel=\'canonical\']')
        if (el)
            el.parentElement?.removeChild(el)
    }

    private upsert(def: MetaDefinition) {
        if (!this.meta.updateTag(def))
            this.meta.addTag(def)
    }

    private publicUrl(path: string) {
        if (path.match(/^[\/\\]https?:\/\//i))
            path = path.substring(1)
        if (!path.match(/^https?:\/\//i)) {
            if (!path.match(/^[\/\\]/))
                path = '/' + path

            path = 'https://liquid-js.github.io/nxt-components/demo' + path
        }
        if (!path.endsWith('/'))
            path += '/'

        try {
            const u = new URL(path)
            u.search = ''
            u.hash = ''
            return u.toString()
        } catch (_e) {
            return path
        }
    }

}
