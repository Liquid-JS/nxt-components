import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { dispatchKeyboardEvent, dispatchMouseEvent, provideTestDateTimeAdapter } from '../../../test-helpers'
import { DateTimeIntl } from '../date-time-picker-intl.service'
import { YearViewComponent } from './calendar-year-view.component'

describe('YearViewComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                provideTestDateTimeAdapter(),
                DateTimeIntl
            ]
        }).compileComponents()
    })

    describe('standard year view', () => {
        let fixture: ComponentFixture<StandardYearViewComponent>
        let testComponent: StandardYearViewComponent
        let yearViewDebugElement: DebugElement
        let yearViewElement: HTMLElement
        let yearViewInstance: YearViewComponent<Date>

        beforeEach(() => {
            fixture = TestBed.createComponent(StandardYearViewComponent)
            fixture.detectChanges()

            yearViewDebugElement = fixture.debugElement.query(
                By.directive(YearViewComponent)
            )
            yearViewElement = yearViewDebugElement.nativeElement
            testComponent = fixture.componentInstance
            yearViewInstance = yearViewDebugElement.componentInstance
        })

        it('should have 12 months', () => {
            const cellEls = yearViewElement.querySelectorAll(
                '.nxt-dt-calendar-cell'
            )
            expect(cellEls.length).toBe(12)
        })

        it('should show selected month if in same year', () => {
            const selectedElContent = yearViewElement.querySelector<HTMLElement>(
                '.nxt-dt-calendar-cell-selected.nxt-dt-calendar-cell-content'
            )
            expect(selectedElContent!.innerHTML.trim()).toBe('Jan')
        })

        it('should NOT show selected month if in different year', () => {
            testComponent.selected = new Date(2017, 0, 10)
            fixture.detectChanges()

            const selectedElContent = yearViewElement.querySelector(
                '.nxt-calendar-body-selected.nxt-dt-calendar-cell-content'
            )
            expect(selectedElContent).toBeNull()
        })

        it('should fire change event on cell clicked', () => {
            const cellDecember = yearViewElement.querySelector(
                '[aria-label="December 2018"]'
            )
            dispatchMouseEvent(cellDecember!, 'click')
            fixture.detectChanges()

            const selectedElContent = yearViewElement.querySelector(
                '.nxt-dt-calendar-cell-active .nxt-dt-calendar-cell-content'
            )
            expect(selectedElContent!.innerHTML.trim()).toBe('Dec')
        })

        it('should mark active date', () => {
            const cellDecember = yearViewElement.querySelector(
                '[aria-label="January 2018"]'
            )
            expect((cellDecember as HTMLElement).innerText.trim()).toBe('Jan')
            expect(cellDecember!.classList).toContain(
                'nxt-dt-calendar-cell-active'
            )
        })

        it('should allow selection of month with less days than current active date', () => {
            testComponent.pickerMoment = new Date(2017, 6, 31)
            fixture.detectChanges()

            const cellJune = yearViewElement.querySelector(
                '[aria-label="June 2017"]'
            )
            dispatchMouseEvent(cellJune!, 'click')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2017, 5, 30))
        })

        it('should decrement month on left arrow press', () => {
            const calendarBodyEl = yearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowLeft')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2017, 11, 5)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowLeft')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2017, 10, 5)
            )
        })

        it('should increment month on right arrow press', () => {
            const calendarBodyEl = yearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowRight')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 1, 5)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowRight')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 2, 5)
            )
        })

        it('should go up a row on up arrow press', () => {
            const calendarBodyEl = yearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowUp')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2017, 9, 5)
            )

            testComponent.pickerMoment = new Date(2018, 6, 1)
            fixture.detectChanges()

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowUp')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 3, 1)
            )

            testComponent.pickerMoment = new Date(2018, 11, 10)
            fixture.detectChanges()

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowUp')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 8, 10)
            )
        })

        it('should go down a row on down arrow press', () => {
            const calendarBodyEl = yearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowDown')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 3, 5)
            )

            testComponent.pickerMoment = new Date(2018, 5, 1)
            fixture.detectChanges()

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowDown')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 8, 1)
            )

            testComponent.pickerMoment = new Date(2018, 8, 30)
            fixture.detectChanges()

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowDown')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 11, 30)
            )
        })

        it('should go to first month of the year on home press', () => {
            testComponent.pickerMoment = new Date(2018, 8, 30)
            fixture.detectChanges()

            const calendarBodyEl = yearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'Home')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 0, 30)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'Home')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 0, 30)
            )
        })

        it('should go to last month of the year on end press', () => {
            testComponent.pickerMoment = new Date(2018, 9, 31)
            fixture.detectChanges()

            const calendarBodyEl = yearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'End')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 11, 31)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'End')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 11, 31)
            )
        })

        it('should go back one year on page up press', () => {
            testComponent.pickerMoment = new Date(2016, 1, 29)
            fixture.detectChanges()

            const calendarBodyEl = yearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageUp')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2015, 1, 28)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageUp')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2014, 1, 28)
            )
        })

        it('should go forward one year on page down press', () => {
            testComponent.pickerMoment = new Date(2016, 1, 29)
            fixture.detectChanges()

            const calendarBodyEl = yearViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageDown')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2017, 1, 28)
            )

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageDown')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(
                new Date(2018, 1, 28)
            )
        })
    })

    describe('year view with date filter', () => {
        let fixture: ComponentFixture<YearViewWithDateFilterComponent>
        let yearViewNativeElement: Element

        beforeEach(() => {
            fixture = TestBed.createComponent(YearViewWithDateFilterComponent)
            fixture.detectChanges()

            const yearViewDebugElement = fixture.debugElement.query(
                By.directive(YearViewComponent)
            )
            yearViewNativeElement = yearViewDebugElement.nativeElement
        })

        it('should disable filtered months', () => {
            const cellJan = yearViewNativeElement.querySelector(
                '[aria-label="January 2018"]'
            )
            const cellFeb = yearViewNativeElement.querySelector(
                '[aria-label="February 2018"]'
            )
            expect(cellJan!.classList).not.toContain(
                'nxt-dt-calendar-cell-disabled'
            )
            expect(cellFeb!.classList).toContain(
                'nxt-dt-calendar-cell-disabled'
            )
        })
    })
})

@Component({
    template: `
        <nxt-date-time-year-view
                [selected]="selected"
                [(pickerMoment)]="pickerMoment"
                (change)="handleChange($event)"></nxt-date-time-year-view>
    `,
    imports: [YearViewComponent]
})
class StandardYearViewComponent {
    selected = new Date(2018, 0, 10)
    pickerMoment = new Date(2018, 0, 5)

    handleChange(date: Date): void {
        this.pickerMoment = new Date(date)
    }
}

@Component({
    template: `
        <nxt-date-time-year-view
                [(pickerMoment)]="pickerMoment"
                [dateTimeFilter]="dateTimeFilter"></nxt-date-time-year-view>
    `,
    imports: [YearViewComponent]
})
class YearViewWithDateFilterComponent {
    pickerMoment = new Date(2018, 0, 1)
    dateTimeFilter(date: Date) {
        if (date.getMonth() == 1) {
            return false
        }
        return true
    }
}
