import { Injectable } from '@angular/core'
import { type JsonViewItemComponent } from '../json-view-item/json-view-item.component'

@Injectable({
    providedIn: 'root'
})
export class ExpanderService {
    private readonly items = new Set<JsonViewItemComponent>()

    constructor() { }

    addItem(item: JsonViewItemComponent) {
        this.items.add(item)
    }

    removeItem(item: JsonViewItemComponent) {
        this.items.delete(item)
    }

    expandTo(level: number) {
        this.items.forEach(i => {
            if (i.level <= level && !i.isOpen) {
                i.levelOpen = level
                i.toggle()
            }
        })
    }

    collapseTo(level: number) {
        this.items.forEach(i => {
            if (i.level > level && i.isOpen)
                i.toggle()
        })
    }
}
