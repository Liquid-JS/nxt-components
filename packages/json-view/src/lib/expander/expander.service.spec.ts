import { TestBed } from '@angular/core/testing'
import { ExpanderService } from './expander.service'

describe('ExpanderService', () => {
    let service: ExpanderService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(ExpanderService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
