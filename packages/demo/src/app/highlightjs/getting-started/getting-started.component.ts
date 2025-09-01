import { Component, ViewEncapsulation } from '@angular/core'
import { CodeBlockComponent } from '../../code-block/code-block.component'
import { ContentWrapComponent } from '../../content-wrap/content-wrap.component'
import { InputsTableComponent } from '../../inputs-table/inputs-table.component'
import { MetaDirective } from '../../meta/meta.directive'
import { OutputsTableComponent } from '../../outputs-table/outputs-table.component'
import docs from '../documentation.json'

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        MetaDirective,
        ContentWrapComponent,
        CodeBlockComponent,
        InputsTableComponent,
        OutputsTableComponent
    ]
})
export class GettingStartedComponent {

    readonly installScript = 'npm install --save nxt-highlightjs highlight.js'

    readonly loadFull = `import { ApplicationConfig } from '@angular/core'
import { provideHighlightOptions } from 'nxt-highlightjs'

export const appConfig: ApplicationConfig = {
    providers: [
        provideHighlightOptions({
            fullLibraryLoader: () => import('highlight.js')
        })
    ]
}`

    readonly loadConfig = `import { ApplicationConfig } from '@angular/core'
import { provideHighlightOptions } from 'nxt-highlightjs'

export const appConfig: ApplicationConfig = {
    providers: [
        provideHighlightOptions({
            coreLibraryLoader: () => import('highlight.js/lib/core'),
            lineNumbersLoader: () => import('nxt-highlightjs/line-numbers'), // Optional, add line numbers if needed
            languages: {
                typescript: () => import('highlight.js/lib/languages/typescript'),
                css: () => import('highlight.js/lib/languages/css'),
                xml: () => import('highlight.js/lib/languages/xml')
            },
            themePath: 'path-to-theme.css' // Optional, useful for dynamic theme changes
        })
    ]
}`

    readonly includeHTML = `<pre><code [nxtHighlight]="code"
    language="html"></code></pre>`

    readonly inps = [
        '[nxtHighlight]',
        '[nxtHighlightAuto]'
    ].map(selector => {
        const item = [...docs.components, ...docs.directives].find(d => d.selector == selector)
        const inputs = (item?.inputsClass.sort((a, b) => a.line - b.line) ?? []).map(v => {
            if ('defaultValue' in v && typeof v.defaultValue == 'string') {
                const m = v.defaultValue?.match(/alias:[\s\n\r]*["']([^"']+)["']/)
                if (m?.[1]) {
                    v.name = m[1]
                }
                v.defaultValue = v.defaultValue.split(',')[0]
            }
            return v
        })
        const outputs = item?.outputsClass.sort((a, b) => a.line - b.line) ?? []

        return {
            selector,
            inputs,
            outputs
        }
    })
}
