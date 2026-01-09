import { Component, ElementRef, NgZone, computed, input, output, inject } from '@angular/core'
import { take } from 'rxjs/operators'
import { SelectMode } from '../../class/date-time.class'

export class CalendarCell {
    constructor(
        public value: number,
        public displayValue: string,
        public ariaLabel: string,
        public enabled: boolean,
        public out: boolean = false,
        public cellClass: string = ''
    ) { }
}

/** @internal */
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[nxtDateTimeCalendarBody]',
    exportAs: 'nxtDateTimeCalendarBody',
    templateUrl: './calendar-body.component.html',
    styleUrls: ['./calendar-body.component.scss'],
    preserveWhitespaces: false,
    host: {
        '[class.nxt-dt-calendar-body]': 'true'
    }

})
export class CalendarBodyComponent {
    private readonly elmRef = inject<ElementRef<HTMLElement>>(ElementRef)
    private readonly ngZone = inject(NgZone)

    /**
     * The cell number of the active cell in the table.
     */
    readonly activeCell = input<number>(0)

    /**
     * The cells to display in the table.
     */
    readonly rows = input<CalendarCell[][]>()

    /**
     * The number of columns in the table.
     */
    readonly numCols = input<number>(7)

    /**
     * The ratio (width / height) to use for the cells in the table.
     */
    readonly cellRatio = input<number>(1)

    /**
     * The value in the table that corresponds to today.
     */
    readonly todayValue = input<number>()

    /**
     * The value in the table that is currently selected.
     */
    readonly selectedValues = input<Array<number | undefined>>()

    /**
     * Current picker select mode
     */
    readonly selectMode = input<SelectMode>()

    /**
     * Emit when a calendar cell is selected
     */
    readonly select = output<CalendarCell>()

    readonly isInSingleMode = computed(() => this.selectMode() === 'single')

    readonly isInRangeMode = computed(() => {
        const selectMode = this.selectMode()
        return (
            selectMode === 'range' ||
            selectMode === 'rangeFrom' ||
            selectMode === 'rangeTo'
        )
    })

    selectCell(cell: CalendarCell): void {
        this.select.emit(cell)
    }

    isActiveCell(rowIndex: number, colIndex: number): boolean {
        const cellNumber = rowIndex * this.numCols() + colIndex
        return cellNumber === this.activeCell()
    }

    /**
     * Check if the cell is selected
     */
    isSelected(value: number): boolean {
        const selectedValues = this.selectedValues()
        if (!selectedValues || selectedValues.length === 0) {
            return false
        }

        if (this.isInSingleMode()) {
            return value === selectedValues[0]
        }

        if (this.isInRangeMode()) {
            const fromValue = selectedValues[0]
            const toValue = selectedValues[1]

            return value === fromValue || value === toValue
        }
        return false
    }

    /**
     * Check if the cell in the range
     */
    isInRange(value: number): boolean {
        if (this.isInRangeMode()) {
            const selectedValues = this.selectedValues()
            const fromValue = selectedValues?.[0]
            const toValue = selectedValues?.[1]

            if (fromValue !== undefined && toValue !== undefined) {
                return value >= fromValue && value <= toValue
            } else {
                return value === fromValue || value === toValue
            }
        }
        return false
    }

    /**
     * Check if the cell is the range from
     */
    isRangeFrom(value: number): boolean {
        if (this.isInRangeMode()) {
            const fromValue = this.selectedValues()?.[0]
            return fromValue !== undefined && value === fromValue
        }
        return false
    }

    /**
     * Check if the cell is the range to
     */
    isRangeTo(value: number): boolean {
        if (this.isInRangeMode()) {
            const toValue = this.selectedValues()?.[1]
            return toValue !== undefined && value === toValue
        }
        return false
    }

    /**
     * Focus to a active cell
     */
    focusActiveCell(): void {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(() => {
                    this.elmRef.nativeElement
                        ?.querySelector<HTMLElement>('.nxt-dt-calendar-cell-active')
                        ?.focus()
                })
        })
    }
}
