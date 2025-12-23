import"./chunk-FBFWB55K.js";var n=`import { Component, ViewEncapsulation } from '@angular/core'\r
import { JsonViewComponent } from 'nxt-json-view'\r
\r
class TreeNode<V> {\r
\r
    readonly children = new Array<TreeNode<V>>()\r
    private parent?: TreeNode<V>\r
\r
    constructor(public value: V) { }\r
\r
    addChild(node: TreeNode<V>) {\r
        const i = this.children.indexOf(node)\r
        if (node.parent == this && i >= 0)\r
            return\r
\r
        if (node.parent)\r
            node.parent.removeChild(node)\r
\r
        this.children.push(node)\r
        node.parent = this\r
    }\r
\r
    removeChild(node: TreeNode<V>) {\r
        const i = this.children.indexOf(node)\r
        if (i >= 0) {\r
            this.children.splice(i, 1)\r
            node.parent = undefined\r
        }\r
    }\r
}\r
\r
const root = new TreeNode('root')\r
root.addChild(new TreeNode('child1'))\r
root.addChild(new TreeNode('child2'))\r
\r
@Component({\r
    selector: 'app-expand-collapse',\r
    templateUrl: './expand-collapse.component.html',\r
    styleUrl: './expand-collapse.component.scss',\r
    encapsulation: ViewEncapsulation.Emulated,\r
    imports: [\r
        JsonViewComponent\r
    ]\r
})\r
export class ExpandCollapseComponent {\r
    data = root\r
}\r
`;export{n as default};
