import { Component, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-union-example',
    templateUrl: './union-example.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class UnionExampleComponent {
    readonly elems = [
        1,
        2,
        [3, 4],
    ]
    readonly isArray = Array.isArray
}
