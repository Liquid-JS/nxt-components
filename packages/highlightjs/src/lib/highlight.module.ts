import { NgModule } from '@angular/core'
import { HighlightAutoDirective } from './highlight-auto.directive'
import { HighlightDirective } from './highlight.directive'

@NgModule({
    imports: [HighlightDirective, HighlightAutoDirective],
    exports: [HighlightDirective, HighlightAutoDirective]
})
export class HighlightModule {
}
