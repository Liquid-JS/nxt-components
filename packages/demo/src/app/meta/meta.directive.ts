import { Location } from '@angular/common'
import { Directive, OnDestroy, OnInit, DOCUMENT, output, inject, effect, input } from '@angular/core'
import { Meta, MetaDefinition, Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'app-meta'
})
export class MetaDirective implements OnInit, OnDestroy, OnInit {
    private readonly titleService = inject(Title)
    private readonly meta = inject(Meta)
    private readonly location = inject(Location)
    private readonly router = inject(Router)
    private readonly dom = inject(DOCUMENT)

    readonly title = input<string>()
    readonly description = input<string>()
    readonly author = input<string>('Liquid-JS')
    readonly copyrightYear = input<string>(new Date().getUTCFullYear().toString())
    readonly type = input<string>('website')
    readonly image = input<string>()
    readonly email = input<string>()
    readonly url = input<string>(this.router.url)

    readonly done = output<void>()

    constructor() {
        effect(() => {
            const val = this.title()

            if (!val)
                return

            this.titleService.setTitle(val)
            this.upsert({
                property: 'og:title',
                content: val
            })
        })
        effect(() => {
            const val = this.description()

            if (!val)
                return

            this.upsert({
                name: 'description',
                content: val
            })
            this.upsert({
                property: 'og:description',
                content: val
            })
        })
        effect(() => {
            const val = this.author()
            this.upsert({
                name: 'author',
                content: val
            })
        })
        effect(() => {
            const val = this.copyrightYear()
            this.upsert({
                name: 'dcterms.dateCopyrighted',
                content: val
            })
        })
        effect(() => {
            const val = this.type()
            this.upsert({
                property: 'og:type',
                content: val
            })
        })
        effect(() => {
            let val = this.image()

            if (!val)
                return

            val = this.publicUrl(this.location.prepareExternalUrl(val))
            this.upsert({
                name: 'image',
                content: val
            })
            this.upsert({
                property: 'og:image',
                content: val
            })
        })
        effect(() => {
            const val = this.email()

            if (!val)
                return

            this.upsert({
                property: 'og:email',
                content: val
            })
        })
        effect(() => {
            const val = this.url()
            const el = this.dom.querySelector<HTMLLinkElement>('link[rel=\'canonical\']') || this.dom.createElement('link')
            el.setAttribute('rel', 'canonical')
            el.setAttribute('href', this.publicUrl(this.location.prepareExternalUrl(val || '/')))
            this.dom.querySelector('head')?.appendChild(el)
        })
    }

    ngOnInit(): void {
        this.done.emit(undefined)
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

            if (!path.startsWith('/nxt-components/demo'))
                path = '/nxt-components/demo' + path

            path = 'https://liquid-js.github.io' + path
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
