import { Component, inject, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
import { NgClass } from '@angular/common'
import { LevelLabels } from '../utils/interfaces'
import { isArray, isBoolean, isNumber, isObject, isString, isUndefined } from '../utils/utils'
import { ExpanderService } from '../expander/expander.service'

/** @internal */
@Component({
    selector: 'nxt-json-view-item',
    templateUrl: './json-view-item.component.html',
    styleUrls: ['./json-view-item.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    imports: [NgClass]
})
export class JsonViewItemComponent implements OnInit, OnDestroy {
    private _data?: any
    @Input()
    set data(data: any | undefined) {
        this._data = data
        if (this.isInit) {
            this.init()
        }
    }
    get data(): any | undefined {
        return this._data
    }
    @Input() key?: string
    @Input() level: number = 0
    @Input() levelOpen?: number
    @Input() levelLabels?: LevelLabels

    isOpen: boolean = false
    childrenKeys?: string[]
    hasChildren: boolean = false
    dataType?: string
    value: any
    valueType?: string
    isObject: boolean = false
    isArray: boolean = false
    isInit: boolean = false
    _levelLabels: { [key: string]: string } = {}

    private readonly expanderService = inject(ExpanderService)

    ngOnInit() {
        this.init()
        this.isInit = true
        this.expanderService.addItem(this)
    }

    ngOnDestroy() {
        this.expanderService.removeItem(this)
    }

    init() {
        this.levelLabelHandle()
        this.levelOpenHandle()
        this.childrenKeysHandle()
        this.dataHandle()
    }

    levelLabelHandle() {
        if (this.levelLabels !== undefined) {
            this._levelLabels = this.levelLabels[this.level] || {}
        }
    }

    levelOpenHandle() {
        if (!isUndefined(this.levelOpen) && (this.level <= this.levelOpen)) {
            this.isOpen = true
        }
    }

    childrenKeysHandle() {
        if (isObject(this.data)) {
            this.childrenKeys = Object.keys(this.data)
            if (this.childrenKeys && this.childrenKeys.length) {
                this.hasChildren = true
            }
        }
    }

    dataHandle() {
        if (isObject(this.data)) {
            this.isObject = true
            this.dataType = 'Object'
            if (isArray(this.data)) {
                this.isArray = true
                this.dataType = 'Array'
            }
            if (this.key && this._levelLabels[this.key]) {
                this.dataType = this._levelLabels[this.key]
            }
        } else {
            this.value = this.data
            if (isString(this.data)) {
                this.valueType = 'string'
            } else if (isNumber(this.data)) {
                this.valueType = 'number'
            } else if (isBoolean(this.data)) {
                this.valueType = 'boolean'
            } else if (null === this.data) {
                this.valueType = 'null'
                this.value = 'null'
            }
        }
    }

    toggle() {
        if (!(this.childrenKeys && this.childrenKeys.length)) {
            return
        }
        this.isOpen = !this.isOpen
    }

}
