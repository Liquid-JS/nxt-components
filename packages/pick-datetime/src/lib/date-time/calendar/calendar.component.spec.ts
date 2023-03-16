/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, NgZone } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { dispatchFakeEvent, dispatchKeyboardEvent, dispatchMouseEvent, MockNgZone, TestDateTimeModule } from '../../../test-helpers'
import { MonthViewComponent } from '../calendar-month-view/calendar-month-view.component'
import { MultiYearViewComponent } from '../calendar-multi-year-view/calendar-multi-year-view.component'
import { YearViewComponent } from '../calendar-year-view/calendar-year-view.component'
import { DateTimeIntl } from '../date-time-picker-intl.service'
import { DateTimeModule } from '../date-time.module'
import { CalendarComponent } from './calendar.component'

describe('CalendarComponent', () => {
    let zone: MockNgZone

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestDateTimeModule, DateTimeModule],
            declarations: [
                StandardCalendar,
                CalendarWithMinMax,
                CalendarWithDateFilter
            ],
            providers: [
                DateTimeIntl,
                { provide: NgZone, useFactory: () => (zone = new MockNgZone()) }
            ]
        }).compileComponents()
    })

    describe('standard calendar', () => {
        let fixture: ComponentFixture<StandardCalendar>
        let testComponent: StandardCalendar
        let calendarElement: HTMLElement
        let periodButton: HTMLElement
        let calendarInstance: CalendarComponent<Date>

        beforeEach(() => {
            fixture = TestBed.createComponent(StandardCalendar)
            fixture.detectChanges()

            const calendarDebugElement = fixture.debugElement.query(
                By.directive(CalendarComponent)
            )
            calendarElement = calendarDebugElement.nativeElement

            periodButton = calendarElement.querySelector(
                '.nxt-dt-control-period-button'
            ) as HTMLElement
            calendarInstance = calendarDebugElement.componentInstance
            testComponent = fixture.componentInstance
        })

        it('should be in month view with specified month active', () => {
            expect(calendarInstance.currentView).toBe('month')
            expect(calendarInstance.pickerMoment).toEqual(
                new Date(2018, 0, 31)
            )
        })

        it('should select date in month view', () => {
            const monthCell = calendarElement.querySelector(
                '[aria-label="January 31, 2018"]'
            );
            (monthCell as HTMLElement).click()

            fixture.detectChanges()
            expect(calendarInstance.currentView).toBe('month')
            expect(testComponent.selected).toEqual(new Date(2018, 0, 31))
        })

        it('should emit the selected month on cell clicked in year view', () => {
            periodButton.click()
            fixture.detectChanges()

            expect(calendarInstance.currentView).toBe('multi-years')
            expect(calendarInstance.pickerMoment).toEqual(
                new Date(2018, 0, 31)
            );

            (calendarElement.querySelector(
                '.nxt-dt-calendar-cell-active'
            ) as HTMLElement).click()

            fixture.detectChanges()

            expect(calendarInstance.currentView).toBe('year');

            (calendarElement.querySelector(
                '.nxt-dt-calendar-cell-active'
            ) as HTMLElement).click()

            const normalizedMonth = fixture.componentInstance.selectedMonth
            expect(normalizedMonth?.getMonth()).toEqual(0)
        })

        it('should emit the selected year on cell clicked in multi-years view', () => {
            periodButton.click()
            fixture.detectChanges()

            expect(calendarInstance.currentView).toBe('multi-years')
            expect(calendarInstance.pickerMoment).toEqual(
                new Date(2018, 0, 31)
            );
            (calendarElement.querySelector(
                '.nxt-dt-calendar-cell-active'
            ) as HTMLElement).click()

            fixture.detectChanges()

            const normalizedYear = fixture.componentInstance.selectedYear
            expect(normalizedYear?.getFullYear()).toEqual(2018)
        })

        /*it('should re-render when the i18n labels have changed', () => {
            inject([DateTimeIntl], (intl: DateTimeIntl) => {
                const button = fixture.debugElement.nativeElement.querySelector(
                    '.nxt-dt-control-period-button'
                )

                intl.switchToMultiYearViewLabel = 'Go to multi-year view?'
                intl.changes.next()
                fixture.detectChanges()

                expect(button.getAttribute('aria-label')).toBe(
                    'Go to multi-year view?'
                )
            })
        })*/

        it('should set all buttons to be `type="button"`', () => {
            const invalidButtons = calendarElement.querySelectorAll(
                'button:not([type="button"])'
            )
            expect(invalidButtons.length).toBe(0)
        })

        describe('a11y', () => {
            describe('calendar body', () => {
                let calendarMainEl: HTMLElement

                beforeEach(() => {
                    calendarMainEl = calendarElement.querySelector(
                        '.nxt-dt-calendar-main'
                    ) as HTMLElement
                    expect(calendarMainEl).not.toBeUndefined()

                    dispatchFakeEvent(calendarMainEl, 'focus')
                    fixture.detectChanges()
                })

                it('should initially set pickerMoment', () => {
                    expect(calendarInstance.pickerMoment).toEqual(
                        new Date(2018, 0, 31)
                    )
                })

                it('should make the calendar main focusable', () => {
                    expect(calendarMainEl.getAttribute('tabindex')).toBe('-1')
                })

                it('should not move focus to the active cell on init', () => {
                    const activeCell = calendarMainEl.querySelector(
                        '.nxt-dt-calendar-cell-active'
                    ) as HTMLElement

                    spyOn(activeCell, 'focus').and.callThrough()
                    fixture.detectChanges()
                    zone.simulateZoneExit()

                    expect(activeCell.focus).not.toHaveBeenCalled()
                })

                it('should move focus to the active cell when the view changes', () => {
                    const activeCell = calendarMainEl.querySelector(
                        '.nxt-dt-calendar-cell-active'
                    ) as HTMLElement

                    spyOn(activeCell, 'focus').and.callThrough()
                    fixture.detectChanges()
                    zone.simulateZoneExit()

                    expect(activeCell.focus).not.toHaveBeenCalled()

                    calendarInstance.currentView = 'multi-years'
                    fixture.detectChanges()
                    zone.simulateZoneExit()

                    expect(activeCell.focus).toHaveBeenCalled()
                })

                describe('year view', () => {
                    beforeEach(() => {
                        dispatchMouseEvent(periodButton, 'click')
                        fixture.detectChanges()

                        expect(calendarInstance.currentView).toBe(
                            'multi-years'
                        );

                        (calendarMainEl.querySelector(
                            '.nxt-dt-calendar-cell-active'
                        ) as HTMLElement).click()
                        fixture.detectChanges()

                        expect(calendarInstance.currentView).toBe('year')
                    })

                    it('should return to month view on enter', () => {
                        const tableBodyEl = calendarMainEl.querySelector(
                            '.nxt-dt-calendar-body'
                        ) as HTMLElement

                        dispatchKeyboardEvent(
                            tableBodyEl,
                            'keydown',
                            'ArrowRight'
                        )
                        fixture.detectChanges()

                        dispatchKeyboardEvent(tableBodyEl, 'keydown', 'Enter')
                        fixture.detectChanges()

                        expect(calendarInstance.currentView).toBe('month')
                        expect(calendarInstance.pickerMoment).toEqual(
                            new Date(2018, 1, 28)
                        )
                        expect(testComponent.selected).toBeUndefined()
                    })
                })

                describe('multi-years view', () => {
                    beforeEach(() => {
                        dispatchMouseEvent(periodButton, 'click')
                        fixture.detectChanges()

                        expect(calendarInstance.currentView).toBe(
                            'multi-years'
                        )
                    })

                    it('should return to year view on enter', () => {
                        const tableBodyEl = calendarMainEl.querySelector(
                            '.nxt-dt-calendar-body'
                        ) as HTMLElement

                        dispatchKeyboardEvent(
                            tableBodyEl,
                            'keydown',
                            'ArrowRight'
                        )
                        fixture.detectChanges()

                        dispatchKeyboardEvent(tableBodyEl, 'keydown', 'Enter')
                        fixture.detectChanges()

                        expect(calendarInstance.currentView).toBe('year')
                        expect(calendarInstance.pickerMoment).toEqual(
                            new Date(2019, 0, 31)
                        )
                        expect(testComponent.selected).toBeUndefined()
                    })
                })
            })
        })
    })

    describe('calendar with min and max', () => {
        let fixture: ComponentFixture<CalendarWithMinMax>
        let testComponent: CalendarWithMinMax
        let calendarElement: HTMLElement
        let _calendarInstance: CalendarComponent<Date>

        beforeEach(() => {
            fixture = TestBed.createComponent(CalendarWithMinMax)
            fixture.detectChanges()

            const calendarDebugElement = fixture.debugElement.query(
                By.directive(CalendarComponent)
            )
            calendarElement = calendarDebugElement.nativeElement

            _calendarInstance = calendarDebugElement.componentInstance
            testComponent = fixture.componentInstance
        })

        it('should re-render the month view when the minDate changes', () => {
            const monthViewDebugElm = fixture.debugElement.query(
                By.directive(MonthViewComponent)
            )
            const monthViewComp = monthViewDebugElm.componentInstance
            expect(monthViewComp).toBeTruthy()

            spyOn(monthViewComp, 'generateCalendar').and.callThrough()
            testComponent.minDate = new Date(2017, 10, 1)
            fixture.detectChanges()

            expect(monthViewComp.generateCalendar).toHaveBeenCalled()
        })

        it('should re-render the month view when the maxDate changes', () => {
            const monthViewDebugElm = fixture.debugElement.query(
                By.directive(MonthViewComponent)
            )
            const monthViewComp = monthViewDebugElm.componentInstance
            expect(monthViewComp).toBeTruthy()

            spyOn(monthViewComp, 'generateCalendar').and.callThrough()
            testComponent.maxDate = new Date(2017, 10, 1)
            fixture.detectChanges()

            expect(monthViewComp.generateCalendar).toHaveBeenCalled()
        })

        it('should re-render the year view when the minDate changes', () => {
            fixture.detectChanges()
            const periodButton = calendarElement.querySelector(
                '.nxt-dt-control-period-button'
            ) as HTMLElement
            periodButton.click()
            fixture.detectChanges();

            (calendarElement.querySelector(
                '.nxt-dt-calendar-cell-active'
            ) as HTMLElement).click()
            fixture.detectChanges()

            const yearViewDebugElm = fixture.debugElement.query(
                By.directive(YearViewComponent)
            )
            const yearViewComp = yearViewDebugElm.componentInstance
            expect(yearViewComp).toBeTruthy()

            spyOn(yearViewComp, 'generateMonthList').and.callThrough()
            testComponent.minDate = new Date(2017, 10, 1)
            fixture.detectChanges()

            expect(yearViewComp.generateMonthList).toHaveBeenCalled()
        })

        it('should re-render the year view when the maxDate changes', () => {
            fixture.detectChanges()
            const periodButton = calendarElement.querySelector(
                '.nxt-dt-control-period-button'
            ) as HTMLElement
            periodButton.click()
            fixture.detectChanges();

            (calendarElement.querySelector(
                '.nxt-dt-calendar-cell-active'
            ) as HTMLElement).click()
            fixture.detectChanges()

            const yearViewDebugElm = fixture.debugElement.query(
                By.directive(YearViewComponent)
            )
            const yearViewComp = yearViewDebugElm.componentInstance
            expect(yearViewComp).toBeTruthy()

            spyOn(yearViewComp, 'generateMonthList').and.callThrough()
            testComponent.maxDate = new Date(2017, 10, 1)
            fixture.detectChanges()

            expect(yearViewComp.generateMonthList).toHaveBeenCalled()
        })

        it('should re-render the multi-years view when the minDate changes', () => {
            fixture.detectChanges()
            const periodButton = calendarElement.querySelector(
                '.nxt-dt-control-period-button'
            ) as HTMLElement
            periodButton.click()
            fixture.detectChanges()

            const multiYearsViewDebugElm = fixture.debugElement.query(
                By.directive(MultiYearViewComponent)
            )
            const multiYearsViewComp = multiYearsViewDebugElm.componentInstance
            expect(multiYearsViewComp).toBeTruthy()

            spyOn(multiYearsViewComp, 'generateYearList').and.callThrough()
            testComponent.minDate = new Date(2017, 10, 1)
            fixture.detectChanges()

            expect(multiYearsViewComp.generateYearList).toHaveBeenCalled()
        })

        it('should re-render the multi-years view when the maxDate changes', () => {
            fixture.detectChanges()
            const periodButton = calendarElement.querySelector(
                '.nxt-dt-control-period-button'
            ) as HTMLElement
            periodButton.click()
            fixture.detectChanges()

            const multiYearsViewDebugElm = fixture.debugElement.query(
                By.directive(MultiYearViewComponent)
            )
            const multiYearsViewComp = multiYearsViewDebugElm.componentInstance
            expect(multiYearsViewComp).toBeTruthy()

            spyOn(multiYearsViewComp, 'generateYearList').and.callThrough()
            testComponent.maxDate = new Date(2017, 10, 1)
            fixture.detectChanges()

            expect(multiYearsViewComp.generateYearList).toHaveBeenCalled()
        })
    })

    describe('calendar with date filter', () => {
        let fixture: ComponentFixture<CalendarWithDateFilter>
        let testComponent: CalendarWithDateFilter
        let calendarElement: HTMLElement
        let _calendarInstance: CalendarComponent<Date>

        beforeEach(() => {
            fixture = TestBed.createComponent(CalendarWithDateFilter)
            fixture.detectChanges()

            const calendarDebugElement = fixture.debugElement.query(
                By.directive(CalendarComponent)
            )
            calendarElement = calendarDebugElement.nativeElement
            _calendarInstance = calendarDebugElement.componentInstance
            testComponent = fixture.componentInstance
        })

        it('should disable and prevent selection of filtered dates', () => {
            const monthCell = calendarElement.querySelector(
                '[aria-label="January 2, 2018"]'
            )
            expect(testComponent.selected).toBeFalsy();

            (monthCell as HTMLElement).click()
            fixture.detectChanges()

            expect(testComponent.selected).toEqual(new Date(2018, 0, 2))
        })
    })
})

@Component({
    template: `
        <nxt-date-time-calendar
                [(selected)]="selected"
                [selectMode]="selectMode"
                [pickerMoment]="pickerMoment"
                (monthSelected)="selectedMonth=$event"
                (yearSelected)="selectedYear=$event"></nxt-date-time-calendar>
    `
})
class StandardCalendar {
    selectMode = 'single'
    selected?: Date
    selectedYear?: Date
    selectedMonth?: Date
    pickerMoment = new Date(2018, 0, 31)
}

@Component({
    template: `
        <nxt-date-time-calendar [selectMode]="selectMode"
                                [pickerMoment]="pickerMoment"
                                [min]="minDate"
                                [max]="maxDate"></nxt-date-time-calendar>
    `
})
class CalendarWithMinMax {
    selectMode = 'single'
    startAt?: Date
    minDate = new Date(2016, 0, 1)
    maxDate = new Date(2019, 0, 1)
    pickerMoment = new Date(2018, 0, 31)
}

@Component({
    template: `
        <nxt-date-time-calendar [(selected)]="selected"
                                [selectMode]="selectMode"
                                [pickerMoment]="pickerMoment"
                                [dateTimeFilter]="dateTimeFilter"></nxt-date-time-calendar>
    `
})
class CalendarWithDateFilter {
    selectMode = 'single'
    selected?: Date
    pickerMoment = new Date(2018, 0, 31)

    dateTimeFilter(date: Date) {
        return !(date.getDate() % 2) && date.getMonth() !== 10
    }
}
