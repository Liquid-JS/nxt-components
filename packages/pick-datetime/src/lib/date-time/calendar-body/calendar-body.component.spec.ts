import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { CalendarCell, CalendarBodyComponent } from './calendar-body.component'

describe('CalendarBodyComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                CalendarBodyComponent,

                // Test components
                StandardCalendarBodyComponent
            ]
        }).compileComponents()
    })

    describe('standard CalendarBodyComponent', () => {
        let fixture: ComponentFixture<StandardCalendarBodyComponent>
        let testComponent: StandardCalendarBodyComponent
        let calendarBodyNativeElement: Element
        let rowEls: NodeListOf<Element>
        let cellEls: NodeListOf<Element>

        const refreshElementLists = () => {
            rowEls = calendarBodyNativeElement.querySelectorAll('tr')
            cellEls = calendarBodyNativeElement.querySelectorAll('.nxt-dt-calendar-cell')
        }

        beforeEach(() => {
            fixture = TestBed.createComponent(StandardCalendarBodyComponent)
            fixture.detectChanges()

            const calendarBodyDebugElement = fixture.debugElement.query(By.directive(CalendarBodyComponent))
            calendarBodyNativeElement = calendarBodyDebugElement.nativeElement
            testComponent = fixture.componentInstance

            refreshElementLists()
        })

        it('should create body', () => {
            expect(rowEls.length).toBe(2)
            expect(cellEls.length).toBe(14)
        })

        it('should highlight today', () => {
            const todayCell = calendarBodyNativeElement.querySelector('.nxt-dt-calendar-cell-today')
            expect(todayCell).not.toBeUndefined()
            expect(todayCell?.innerHTML.trim()).toBe('3')
        })

        it('should highlight selected', () => {
            const selectedCell = calendarBodyNativeElement.querySelector('.nxt-dt-calendar-cell-selected')
            expect(selectedCell).not.toBeUndefined()
            expect(selectedCell?.innerHTML.trim()).toBe('4')
        })

        it('cell should be selected on click', () => {
            spyOn(testComponent, 'handleSelect')
            expect(testComponent.handleSelect).not.toHaveBeenCalled()
            const todayElement =
                calendarBodyNativeElement.querySelector('.nxt-dt-calendar-cell-today') as HTMLElement
            todayElement.click()
            fixture.detectChanges()

            expect(testComponent.handleSelect).toHaveBeenCalled()
        })

        it('should mark active date', () => {
            expect((cellEls[10] as HTMLElement).innerText.trim()).toBe('11')
            expect(cellEls[10].classList).toContain('nxt-dt-calendar-cell-active')
        })
    })
})

@Component({
    template: `
        <table nxtDateTimeCalendarBody
               [rows]="rows"
               [todayValue]="todayValue"
               [selectedValues]="selectedValues"
               selectMode="single"
               [activeCell]="activeCell"
               (select)="handleSelect()">
        </table>`,
    standalone: false
})
class StandardCalendarBodyComponent {
    rows = [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14]].map(r => r.map(createCell))
    todayValue = 3
    selectedValues = [4]
    activeCell = 10

    handleSelect() {
    }
}

function createCell(value: number) {
    return new CalendarCell(value, `${value}`, `${value}-label`, true)
}
