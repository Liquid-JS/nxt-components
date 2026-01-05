import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, NgZone, OnInit, input, output } from '@angular/core'
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
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class CalendarBodyComponent implements OnInit {
    /**
     * The cell number of the active cell in the table.
     */
    readonly activeCell = input(0)

    /**
     * The cells to display in the table.
     */
    readonly rows = input<CalendarCell[][]>()

    /**
     * The number of columns in the table.
     */
    readonly numCols = input(7)

    /**
     * The ratio (width / height) to use for the cells in the table.
     */
    readonly cellRatio = input(1)

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

    /** @internal */
    @HostBinding('class.nxt-dt-calendar-body')
    get calendarBodyClass(): boolean {
        return true
    }

    get isInSingleMode(): boolean {
        return this.selectMode() === 'single'
    }

    get isInRangeMode(): boolean {
        const selectMode = this.selectMode()
        return (
            selectMode === 'range' ||
            selectMode === 'rangeFrom' ||
            selectMode === 'rangeTo'
        )
    }

    constructor(
        private readonly elmRef: ElementRef<HTMLElement>,
        private readonly ngZone: NgZone
    ) { }

    ngOnInit() { }

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

        if (this.isInSingleMode) {
            return value === selectedValues[0]
        }

        if (this.isInRangeMode) {
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
        if (this.isInRangeMode) {
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
        if (this.isInRangeMode) {
            const fromValue = this.selectedValues()?.[0]
            return fromValue !== undefined && value === fromValue
        }
        return false
    }

    /**
     * Check if the cell is the range to
     */
    isRangeTo(value: number): boolean {
        if (this.isInRangeMode) {
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
