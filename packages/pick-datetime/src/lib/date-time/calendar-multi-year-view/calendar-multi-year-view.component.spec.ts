import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { dispatchKeyboardEvent, dispatchMouseEvent, provideTestDateTimeAdapter } from '../../../test-helpers'
import { DateTimeIntl } from '../date-time-picker-intl.service'
import { MultiYearViewComponent, YEARS_PER_ROW, YEAR_ROWS } from './calendar-multi-year-view.component'

describe('MultiYearViewComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                provideTestDateTimeAdapter(),
                DateTimeIntl
            ]
        }).compileComponents()
    })

    describe('standard multi-years view', () => {
        let fixture: ComponentFixture<StandardMultiYearViewComponent>
        let testComponent: StandardMultiYearViewComponent
        let multiYearViewDebugElement: DebugElement
        let multiYearViewElement: HTMLElement
        let multiYearViewInstance: MultiYearViewComponent<Date>

        beforeEach(() => {
            fixture = TestBed.createComponent(StandardMultiYearViewComponent)
            fixture.detectChanges()

            multiYearViewDebugElement = fixture.debugElement.query(
                By.directive(MultiYearViewComponent)
            )
            multiYearViewElement = multiYearViewDebugElement.nativeElement
            testComponent = fixture.componentInstance
            multiYearViewInstance = multiYearViewDebugElement.componentInstance
        })

        it('should have correct number of years', () => {
            const cellEls = multiYearViewElement.querySelectorAll(
                '.nxt-dt-calendar-cell'
            )
            expect(cellEls.length).toBe(YEARS_PER_ROW * YEAR_ROWS)
        })

        it('should shows selected year if in same range', () => {
            const selectedElContent = multiYearViewElement.querySelector(
                '.nxt-dt-calendar-cell-selected.nxt-dt-calendar-cell-content'
            )
            expect(selectedElContent?.innerHTML.trim()).toBe('2020')
        })

        it('should NOT show selected year if in different range', () => {
            testComponent.selected = new Date(2040, 0, 10)
            fixture.detectChanges()

            const selectedElContent = multiYearViewElement.querySelector(
                '.nxt-calendar-body-selected.nxt-dt-calendar-cell-content'
            )
            expect(selectedElContent).toBeNull()
        })

        it('should fire change event on cell clicked', () => {
            const cellDecember = multiYearViewElement.querySelector(
                '[aria-label="2030"]'
            )
            dispatchMouseEvent(cellDecember!, 'click')
            fixture.detectChanges()

            const selectedElContent = multiYearViewElement.querySelector(
                '.nxt-dt-calendar-cell-active .nxt-dt-calendar-cell-content'
            )
            expect(selectedElContent?.innerHTML.trim()).toBe('2030')
        })

        it('should mark active date', () => {
            const cell2017 = multiYearViewElement.querySelector(
                '[aria-label="2018"]'
            )
            expect((cell2017 as HTMLElement).innerText.trim()).toBe('2018')
            expect(cell2017?.classList).toContain('nxt-dt-calendar-cell-active')
        })

        it('should decrement year on left arrow press', () => {
            const calendarBodyEl = multiYearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowLeft')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2017, 0, 5)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowLeft')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2016, 0, 5)
            )
        })

        it('should increment year on right arrow press', () => {
            const calendarBodyEl = multiYearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowRight')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2019, 0, 5)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowRight')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2020, 0, 5)
            )
        })

        it('should go up a row on up arrow press', () => {
            const calendarBodyEl = multiYearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowUp')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2018 - YEARS_PER_ROW, 0, 5)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowUp')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2018 - YEARS_PER_ROW * 2, 0, 5)
            )
        })

        it('should go down a row on down arrow press', () => {
            const calendarBodyEl = multiYearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowDown')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2018 + YEARS_PER_ROW, 0, 5)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowDown')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2018 + YEARS_PER_ROW * 2, 0, 5)
            )
        })

        it('should go to first year in current range on home press', () => {
            const calendarBodyEl = multiYearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'Home')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2016, 0, 5)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'Home')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2016, 0, 5)
            )
        })

        it('should go to last year in current range on end press', () => {
            const calendarBodyEl = multiYearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'End')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2036, 0, 5)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'End')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2036, 0, 5)
            )
        })

        it('should go to same index in previous year range page up press', () => {
            const calendarBodyEl = multiYearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageUp')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2018 - YEARS_PER_ROW * YEAR_ROWS, 0, 5)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageUp')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2018 - YEARS_PER_ROW * YEAR_ROWS * 2, 0, 5)
            )
        })

        it('should go to same index in next year range on page down press', () => {
            const calendarBodyEl = multiYearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageDown')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2018 + YEARS_PER_ROW * YEAR_ROWS, 0, 5)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageDown')
            fixture.detectChanges()

            expect(multiYearViewInstance.pickerMoment).toEqual(
                new Date(2018 + YEARS_PER_ROW * YEAR_ROWS * 2, 0, 5)
            )
        })
    })

    describe('multi-years view with date filter', () => {
        let fixture: ComponentFixture<MultiYearViewWithDateFilterComponent>
        let multiYearViewElement: Element

        beforeEach(() => {
            fixture = TestBed.createComponent(
                MultiYearViewWithDateFilterComponent
            )
            fixture.detectChanges()

            const multiYearViewDebugElement = fixture.debugElement.query(
                By.directive(MultiYearViewComponent)
            )
            multiYearViewElement = multiYearViewDebugElement.nativeElement
        })

        it('should disable filtered years', () => {
            const cell2018 = multiYearViewElement.querySelector(
                '[aria-label="2018"]'
            )
            const cell2019 = multiYearViewElement.querySelector(
                '[aria-label="2019"]'
            )
            expect(cell2019?.classList).not.toContain(
                'nxt-dt-calendar-cell-disabled'
            )
            expect(cell2018?.classList).toContain(
                'nxt-dt-calendar-cell-disabled'
            )
        })
    })
})

@Component({
    template: `
        <nxt-date-time-multi-year-view
                [selected]="selected"
                [(pickerMoment)]="pickerMoment"
                (change)="handleChange($event)"></nxt-date-time-multi-year-view>
    `,
    imports: [MultiYearViewComponent]
})
class StandardMultiYearViewComponent {
    selected = new Date(2020, 0, 10)
    pickerMoment = new Date(2018, 0, 5)

    handleChange(date: Date): void {
        this.pickerMoment = new Date(date)
    }
}

@Component({
    template: `
        <nxt-date-time-multi-year-view
                [(pickerMoment)]="pickerMoment"
                [dateTimeFilter]="dateTimeFilter"></nxt-date-time-multi-year-view>
    `,
    imports: [MultiYearViewComponent]
})
class MultiYearViewWithDateFilterComponent {
    pickerMoment = new Date(2018, 0, 1)
    dateTimeFilter(date: Date) {
        return date.getFullYear() !== 2018
    }
}
