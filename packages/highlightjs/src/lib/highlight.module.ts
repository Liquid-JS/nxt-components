import { NgModule } from '@angular/core'
import { HighlightDirective } from './highlight'
import { HighlightAutoDirective } from './highlight-auto'

@NgModule({
    imports: [HighlightDirective, HighlightAutoDirective],
    exports: [HighlightDirective, HighlightAutoDirective]
})
export class HighlightModule {
}
