import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, NgZone, OnInit, Output } from '@angular/core'
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
    @Input()
    activeCell = 0

    /**
     * The cells to display in the table.
     * */
    @Input()
    rows?: CalendarCell[][]

    /**
     * The number of columns in the table.
     * */
    @Input()
    numCols = 7

    /**
     * The ratio (width / height) to use for the cells in the table.
     */
    @Input()
    cellRatio = 1

    /**
     * The value in the table that corresponds to today.
     * */
    @Input()
    todayValue?: number

    /**
     * The value in the table that is currently selected.
     * */
    @Input()
    selectedValues?: Array<number | undefined>

    /**
     * Current picker select mode
     */
    @Input()
    selectMode?: SelectMode

    /**
     * Emit when a calendar cell is selected
     * */
    @Output()
    // eslint-disable-next-line @angular-eslint/no-output-native
    public readonly select = new EventEmitter<CalendarCell>()

    @HostBinding('class.nxt-dt-calendar-body')
    get calendarBodyClass(): boolean {
        return true
    }

    get isInSingleMode(): boolean {
        return this.selectMode === 'single'
    }

    get isInRangeMode(): boolean {
        return (
            this.selectMode === 'range' ||
            this.selectMode === 'rangeFrom' ||
            this.selectMode === 'rangeTo'
        )
    }

    constructor(
        private readonly elmRef: ElementRef<HTMLElement>,
        private readonly ngZone: NgZone
    ) { }

    public ngOnInit() { }

    public selectCell(cell: CalendarCell): void {
        this.select.emit(cell)
    }

    public isActiveCell(rowIndex: number, colIndex: number): boolean {
        const cellNumber = rowIndex * this.numCols + colIndex
        return cellNumber === this.activeCell
    }

    /**
     * Check if the cell is selected
     */
    public isSelected(value: number): boolean {
        if (!this.selectedValues || this.selectedValues.length === 0) {
            return false
        }

        if (this.isInSingleMode) {
            return value === this.selectedValues[0]
        }

        if (this.isInRangeMode) {
            const fromValue = this.selectedValues[0]
            const toValue = this.selectedValues[1]

            return value === fromValue || value === toValue
        }
        return false
    }

    /**
     * Check if the cell in the range
     * */
    public isInRange(value: number): boolean {
        if (this.isInRangeMode) {
            const fromValue = this.selectedValues?.[0]
            const toValue = this.selectedValues?.[1]

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
     * */
    public isRangeFrom(value: number): boolean {
        if (this.isInRangeMode) {
            const fromValue = this.selectedValues?.[0]
            return fromValue !== undefined && value === fromValue
        }
        return false
    }

    /**
     * Check if the cell is the range to
     * */
    public isRangeTo(value: number): boolean {
        if (this.isInRangeMode) {
            const toValue = this.selectedValues?.[1]
            return toValue !== undefined && value === toValue
        }
        return false
    }

    /**
     * Focus to a active cell
     * */
    public focusActiveCell(): void {
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
