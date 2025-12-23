import { Component, computed, effect, inject, input, model, OnDestroy, OnInit, signal, ViewEncapsulation } from '@angular/core'
import { ExpanderService } from '../expander/expander.service'
import { LevelLabels } from '../utils/interfaces'
import { isArray, isBoolean, isNumber, isObject, isString, isUndefined } from '../utils/utils'

/** @internal */
@Component({
    selector: 'nxt-json-view-item',
    templateUrl: './json-view-item.component.html',
    styleUrls: ['./json-view-item.component.scss'],
    encapsulation: ViewEncapsulation.Emulated

})
export class JsonViewItemComponent implements OnInit, OnDestroy {

    readonly data = input<any>()

    readonly key = input<string>()
    readonly level = input<number>(0)
    readonly levelOpen = model<number>()
    readonly levelLabels = input<LevelLabels>()

    readonly isOpen = signal(false)
    private readonly effectRef = effect(() => {
        const levelOpen = this.levelOpen()
        this.isOpen.set(!isUndefined(levelOpen) && (this.level() <= levelOpen))
        this.effectRef.destroy()
    }, { manualCleanup: true })
    readonly childrenKeys = computed(() => {
        const data = this.data()
        if (isObject(data)) {
            return Object.keys(data)
        }
        return []
    })

    readonly hasChildren = computed(() => !!(this.childrenKeys().length))

    readonly _levelLabels = computed(() => {
        const levelLabels = this.levelLabels()
        return levelLabels?.[this.level()] || {}
    })

    readonly dataType = computed(() => {
        let dataType
        const data = this.data()
        if (isObject(data)) {
            dataType = 'Object'
            if (isArray(data)) {
                dataType = 'Array'
            }
            const key = this.key()
            if (key && this._levelLabels()[key]) {
                dataType = this._levelLabels()[key]
            }
        }
        return dataType
    })
    readonly value = computed(() => {
        let value
        const data = this.data()
        if (!isObject(data)) {
            value = data
            if (null === data) {
                value = 'null'
            }
        }
        return value
    })
    readonly valueType = computed(() => {
        const data = this.data()
        if (!isObject(data)) {
            if (isString(data)) {
                return 'string'
            } else if (isNumber(data)) {
                return 'number'
            } else if (isBoolean(data)) {
                return 'boolean'
            } else if (null === data) {
                return 'null'
            }
        }
        return
    })
    readonly isObject = computed(() => isObject(this.data()))
    readonly isArray = computed(() => isObject(this.data()) && isArray(this.data()))

    private readonly expanderService = inject(ExpanderService)

    ngOnInit() {
        this.expanderService.addItem(this)
    }

    ngOnDestroy() {
        this.expanderService.removeItem(this)
    }

    toggle() {
        if (!(this.childrenKeys().length)) {
            return
        }
        this.isOpen.set(!this.isOpen())
    }

}
