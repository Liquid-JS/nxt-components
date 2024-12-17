import { CommonModule } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { CodeBlockComponent } from '../../code-block/code-block.component'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { MetaDirective } from '../../meta/meta.directive'

@Component({
    selector: 'app-sitemap',
    imports: [
        CommonModule,
        CodeBlockComponent,
        MetaDirective,
        ContentWrapComponent
    ],
    templateUrl: './sitemap.component.html',
    styleUrl: './sitemap.component.scss',
    encapsulation: ViewEncapsulation.Emulated
})
export class AppSitemapComponent {

    readonly installScript = 'ng add nxt-sitemap'

    readonly importGlobal = 'ng run project:sitemap'

    readonly importLocal = `{
    "build": { 
        "..."
    },
    "sitemap": {
        "builder": "nxt-sitemap:sitemap",
        "options": {
            "srcDirectory": "./dist/demo/browser",
            "baseUrl": "https://liquid-js.github.io/nxt-components/demo"
        }
    }
}`

    readonly includeHTML = `import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router'

export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
    override serialize(tree: UrlTree): string {
        return this._withTrailingSlash(super.serialize(tree))
    }

    private _withTrailingSlash(url: string): string {
        const splitOn = url.indexOf('?') > -1 ? '?' : '#'
        const pathArr = url.split(splitOn)

        if (!pathArr[0].endsWith('/')) {
            const fileName: string = url.substring(url.lastIndexOf('/') + 1)
            if (fileName.indexOf('.') === -1) {
                pathArr[0] += '/'
            }
        }
        return pathArr.join(splitOn)
    }
}

export const appConfig: ApplicationConfig = {
    providers: [
        ...
        {
            provide: UrlSerializer,
            useClass: TrailingSlashUrlSerializer
        },
        ...
    ]
}`
}
