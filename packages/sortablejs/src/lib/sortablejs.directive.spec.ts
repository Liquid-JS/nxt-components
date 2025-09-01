import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { SortablejsDirective } from 'nxt-sortablejs'

describe('SortablejsDirective', () => {
    @Component({
        template: `
        <div [nxtSortablejs]="items">
          @for (item of items; track item) {
            <div>{{item}}</div>
          }
        </div>
        `,
        imports: [
            SortablejsDirective
        ]
    })
    // eslint-disable-next-line @angular-eslint/component-class-suffix
    class TestComponent1 {
        items = [1, 2, 3, 4, 5]
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({}).compileComponents()
    })

    it('should create', () => {
        const fixture = TestBed.createComponent(TestComponent1)
        const app = fixture.debugElement.componentInstance
        expect(app).toBeTruthy()
    })
})
