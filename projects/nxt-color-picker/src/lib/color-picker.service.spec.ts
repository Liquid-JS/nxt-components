import { TestBed } from '@angular/core/testing'
import { ColorPickerService } from './color-picker.service'

describe('ColorPickerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}))

    it('should be created', () => {
        const service: ColorPickerService = TestBed.inject(ColorPickerService)
        expect(service).toBeTruthy()
    })
})
