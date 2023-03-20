import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { dispatchKeyboardEvent, TestDateTimeModule } from '../../../test-helpers'
import { DateTimeIntl } from '../date-time-picker-intl.service'
import { DateTimeModule } from '../date-time.module'
import { MonthViewComponent } from './calendar-month-view.component'

describe('MonthViewComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestDateTimeModule, DateTimeModule],
            declarations: [
                StandardMonthViewComponent,
                MonthViewWithDateFilterComponent
            ],
            providers: [DateTimeIntl]
        }).compileComponents()
    })

    describe('standard month view', () => {
        let fixture: ComponentFixture<StandardMonthViewComponent>
        let testComponent: StandardMonthViewComponent
        let monthViewDebugElement: DebugElement
        let monthViewElement: HTMLElement
        let monthViewInstance: MonthViewComponent<Date>

        beforeEach(() => {
            fixture = TestBed.createComponent(StandardMonthViewComponent)
            fixture.detectChanges()

            monthViewDebugElement = fixture.debugElement.query(
                By.directive(MonthViewComponent)
            )
            monthViewElement = monthViewDebugElement.nativeElement
            testComponent = fixture.componentInstance
            monthViewInstance = monthViewDebugElement.componentInstance
        })

        it('should have 42 calendar day cells', () => {
            const cellEls = monthViewElement.querySelectorAll(
                '.nxt-dt-calendar-cell'
            )
            expect(cellEls.length).toBe(42)
        })

        it('should show selected date if in same month', () => {
            const selectedEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-cell-selected'
            )
            expect(selectedEl?.innerHTML.trim()).toBe('10')
        })

        it('should NOT show selected date if in different month', () => {
            testComponent.selected = new Date(2018, 2, 10)
            fixture.detectChanges()
            const selectedEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-cell-selected'
            )
            expect(selectedEl).toBeNull()
        })

        it('should mark active date', () => {
            const selectedElContent = monthViewElement.querySelector(
                '.nxt-dt-calendar-cell-active .nxt-dt-calendar-cell-content'
            )
            expect(selectedElContent?.innerHTML.trim()).toBe('5')
        })

        it('should set Sunday as first day of week by default', () => {
            expect(monthViewInstance.firstDayOfWeek).toBe(0)
            const weekdayCells = monthViewElement.querySelectorAll(
                '.nxt-dt-weekday'
            )
            expect(weekdayCells[0].getAttribute('aria-label')).toBe('Sunday')
        })

        it('should set Monday as first day of week if firstDayOfWeek set to 1', () => {
            monthViewInstance.firstDayOfWeek = 1
            fixture.detectChanges()
            const weekdayCells = monthViewElement.querySelectorAll(
                '.nxt-dt-weekday'
            )
            expect(weekdayCells[0].getAttribute('aria-label')).toBe('Monday')
        })

        it('should set Saturday as first day of week if firstDayOfWeek set to 6', () => {
            monthViewInstance.firstDayOfWeek = 6
            fixture.detectChanges()
            const weekdayCells = monthViewElement.querySelectorAll(
                '.nxt-dt-weekday'
            )
            expect(weekdayCells[0].getAttribute('aria-label')).toBe('Saturday')
        })

        it('should decrement date on left arrow press', () => {
            const calendarBodyEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowLeft')
            fixture.detectChanges()
            expect(testComponent.pickerMoment).toEqual(new Date(2018, 0, 4))

            monthViewInstance.pickerMoment = new Date(2017, 0, 1)
            fixture.detectChanges()

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowLeft')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2016, 11, 31))
        })

        it('should increment date on right arrow press', () => {
            const calendarBodyEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowRight')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2018, 0, 6))

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowRight')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2018, 0, 7))
        })

        it('should go up a row on up arrow press', () => {
            const calendarBodyEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowUp')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2017, 11, 29))

            monthViewInstance.pickerMoment = new Date(2017, 0, 7)
            fixture.detectChanges()

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowUp')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2016, 11, 31))
        })

        it('should go down a row on down arrow press', () => {
            const calendarBodyEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowDown')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2018, 0, 12))

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowDown')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2018, 0, 19))
        })

        it('should go to beginning of the month on home press', () => {
            monthViewInstance.pickerMoment = new Date(2018, 0, 7)
            fixture.detectChanges()

            const calendarBodyEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'Home')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2018, 0, 1))

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'Home')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2018, 0, 1))
        })

        it('should go to end of the month on end press', () => {
            monthViewInstance.pickerMoment = new Date(2018, 0, 7)
            fixture.detectChanges()

            const calendarBodyEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'End')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2018, 0, 31))

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'End')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2018, 0, 31))
        })

        it('should go back one month on page up press', () => {
            const calendarBodyEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageUp')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2017, 11, 5))

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageUp')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2017, 10, 5))
        })

        it('should go forward one month on page down press', () => {
            const calendarBodyEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageDown')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2018, 1, 5))

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'PageDown')
            fixture.detectChanges()

            expect(testComponent.pickerMoment).toEqual(new Date(2018, 2, 5))
        })

        it('should select active date on enter', () => {
            const calendarBodyEl = monthViewElement.querySelector(
                '.nxt-dt-calendar-body'
            )
            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'ArrowLeft')
            fixture.detectChanges()

            expect(testComponent.selected).toEqual(new Date(2018, 0, 10))

            dispatchKeyboardEvent(calendarBodyEl!, 'keydown', 'Enter')
            fixture.detectChanges()

            expect(testComponent.selected).toEqual(new Date(2018, 0, 4))
        })
    })

    describe('month view with date filter', () => {
        let fixture: ComponentFixture<MonthViewWithDateFilterComponent>
        let monthViewNativeElement: Element

        beforeEach(() => {
            fixture = TestBed.createComponent(MonthViewWithDateFilterComponent)
            fixture.detectChanges()

            const monthViewDebugElement = fixture.debugElement.query(
                By.directive(MonthViewComponent)
            )
            monthViewNativeElement = monthViewDebugElement.nativeElement
        })

        it('should disable filtered dates', () => {
            const cellOne = monthViewNativeElement.querySelector(
                '[aria-label="January 1, 2018"]'
            )
            const cellTwo = monthViewNativeElement.querySelector(
                '[aria-label="January 2, 2018"]'
            )
            expect(cellOne?.classList).toContain(
                'nxt-dt-calendar-cell-disabled'
            )
            expect(cellTwo?.classList).not.toContain(
                'nxt-dt-calendar-cell-disabled'
            )
        })
    })
})

@Component({
    template: `
        <nxt-date-time-month-view
                [(selected)]="selected"
                [(pickerMoment)]="pickerMoment"></nxt-date-time-month-view>
    `
})
class StandardMonthViewComponent {
    selected = new Date(2018, 0, 10)
    pickerMoment = new Date(2018, 0, 5)
}

@Component({
    template: `
        <nxt-date-time-month-view
                [(pickerMoment)]="pickerMoment"
                [dateTimeFilter]="dateTimeFilter"></nxt-date-time-month-view>
    `
})
class MonthViewWithDateFilterComponent {
    pickerMoment = new Date(2018, 0, 1)
    dateTimeFilter(date: Date) {
        return date.getDate() % 2 == 0
    }
}
