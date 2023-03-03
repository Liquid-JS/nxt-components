import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NxtJsonViewComponent } from './nxt-json-view.component'

describe('NxtJsonViewComponent', () => {
    let component: NxtJsonViewComponent
    let fixture: ComponentFixture<NxtJsonViewComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NxtJsonViewComponent]
        })
            .compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(NxtJsonViewComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
