import { Component, ViewEncapsulation } from '@angular/core'
import { JsonViewComponent } from 'nxt-json-view'

class TreeNode<V> {

    readonly children = new Array<TreeNode<V>>()
    private parent?: TreeNode<V>

    constructor(public value: V) { }

    addChild(node: TreeNode<V>) {
        const i = this.children.indexOf(node)
        if (node.parent == this && i >= 0)
            return

        if (node.parent)
            node.parent.removeChild(node)

        this.children.push(node)
        node.parent = this
    }

    removeChild(node: TreeNode<V>) {
        const i = this.children.indexOf(node)
        if (i >= 0) {
            this.children.splice(i, 1)
            node.parent = undefined
        }
    }
}

const root = new TreeNode('root')
root.addChild(new TreeNode('child1'))
root.addChild(new TreeNode('child2'))

@Component({
    selector: 'app-expand-collapse',
    templateUrl: './expand-collapse.component.html',
    styleUrl: './expand-collapse.component.scss',
    encapsulation: ViewEncapsulation.Emulated,
    imports: [
        JsonViewComponent
    ]
})
export class ExpandCollapseComponent {
    data = root
}
