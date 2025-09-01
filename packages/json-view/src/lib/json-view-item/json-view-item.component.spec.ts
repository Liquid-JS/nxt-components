import { ComponentFixture, TestBed } from '@angular/core/testing'
import { JsonViewItemComponent } from './json-view-item.component'

describe('JsonViewItemComponent', () => {
    let component: JsonViewItemComponent
    let fixture: ComponentFixture<JsonViewItemComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({})
            .compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(JsonViewItemComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
