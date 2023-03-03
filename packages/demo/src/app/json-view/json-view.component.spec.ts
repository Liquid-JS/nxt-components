import { TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { NxtJsonViewModule } from 'nxt-json-view'
import { AppComponent } from './json-view.component'

describe('AppComponent', () => {
    beforeEach(async () => TestBed.configureTestingModule({
        declarations: [
            AppComponent
        ],
        imports: [
            FormsModule,
            NxtJsonViewModule
        ]
    }).compileComponents())

    it('should create the app', async () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.debugElement.componentInstance
        expect(app).toBeTruthy()
    })

    it('should have data property', async () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.debugElement.componentInstance
        expect(app.data).toBeDefined()
    })

    it('should render a div json-view', async () => {
        const fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const compiled = fixture.debugElement.nativeElement
        expect(compiled.querySelector('div.json-view')).toBeDefined()
    })
})
