// @ts-nocheck

const BREAK_LINE_REGEXP = /\r\n|\r|\n/g

/**
 * The contents of this file is from highlight.js, with a small modification to HTMLRenderer to make sure spans don't contain line breaks (important to improve performance of line numbers).
 */

/** @typedef {{scope?: string, language?: string, children: Node[]} | string} Node */
/** @typedef {{scope?: string, language?: string, children: Node[]} } DataNode */
/** @typedef {import('highlight.js').Emitter} Emitter */
/**  */

/** @returns */
const newNode = (opts = {}) => {
    /** @type DataNode */
    const result = { children: [] }
    Object.assign(result, opts)
    return result
}

class TokenTree {
    constructor() {
        /** @type DataNode */
        this.rootNode = newNode()
        this.stack = [this.rootNode]
    }

    get top() {
        return this.stack[this.stack.length - 1]
    }

    get root() {
        return this.rootNode
    }

    /** @param node */
    add(node) {
        this.top.children.push(node)
    }

    /** @param scope */
    openNode(scope) {
        /** @type Node */
        const node = newNode({ scope })
        this.add(node)
        this.stack.push(node)
    }

    closeNode() {
        if (this.stack.length > 1) {
            return this.stack.pop()
        }

        return undefined
    }

    closeAllNodes() {
        while (this.closeNode());
    }

    toJSON() {
        return JSON.stringify(this.rootNode, undefined, 4)
    }

    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param builder
     */
    walk(builder) {
        // this does not
        return this.constructor._walk(builder, this.rootNode)
        // this works
        // return TokenTree._walk(builder, this.rootNode);
    }

    /**
     * @param builder
     * @param node
     */
    static _walk(builder, node) {
        if (typeof node === 'string') {
            builder.addText(node)
        } else if (node.children) {
            builder.openNode(node)
            node.children.forEach((child) => this._walk(builder, child))
            builder.closeNode(node)
        }
        return builder
    }

    /**
     * @param node
     */
    static _collapse(node) {
        if (typeof node === 'string') return
        if (!node.children) return

        if (node.children.every(el => typeof el === 'string')) {
            // node.text = node.children.join("");
            // delete node.children;
            node.children = [node.children.join('')]
        } else {
            node.children.forEach((child) => {
                TokenTree._collapse(child)
            })
        }
    }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addText(text)
  - __addSublanguage(emitter, subLanguageName)
  - startScope(scope)
  - endScope()
  - finalize()
  - toHTML()

 */

/**
 * @implements {Emitter}
 */
export class TokenTreeEmitter extends TokenTree {
    /**
     * @param options
     */
    constructor(options) {
        super()
        this.options = options
    }

    /**
     * @param text
     */
    addText(text) {
        if (text === '') {
            return
        }

        this.add(text)
    }

    /** @param scope */
    startScope(scope) {
        this.openNode(scope)
    }

    endScope() {
        this.closeNode()
    }

    /**
     * @param emitter
     * @param name
     */
    __addSublanguage(emitter, name) {
        /** @type DataNode */
        const node = emitter.root
        if (name) node.scope = `language:${name}`

        this.add(node)
    }

    toHTML() {
        const renderer = new HTMLRenderer(this, this.options)
        return renderer.value()
    }

    finalize() {
        this.closeAllNodes()
        return true
    }
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>'

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param node */
const emitsWrappingTags = (node) =>
    // rarely we can have a sublanguage where language is undefined
    // TODO: track down why
    !!node.scope

/**
 *
 * @param name
 * @param options
 */
const scopeToCSSClass = (name, { prefix }) => {
    // sub-language
    if (name.startsWith('language:')) {
        return name.replace('language:', 'language-')
    }
    // tiered scope: comment.line
    if (name.includes('.')) {
        const pieces = name.split('.')
        return [
            `${prefix}${pieces.shift()}`,
            ...(pieces.map((x, i) => `${x}${'_'.repeat(i + 1)}`))
        ].join(' ')
    }
    // simple scope
    return `${prefix}${name}`
}

/** @type {Renderer} */
export class HTMLRenderer {
    /**
     * Creates a new HTMLRenderer
     *
     * @param parseTree - the parse tree (must support `walk` API)
     * @param options
     */
    constructor(parseTree, options) {
        this.buffer = ''
        this.classPrefix = options.classPrefix
        this.openStack = []
        parseTree.walk(this)
    }

    /**
     * Adds texts to the output stream
     *
     * @param text */
    addText(text) {
        const lines = text.split(BREAK_LINE_REGEXP).map(escapeHTML)
        const lineBreak = new Array(this.openStack.length).fill(SPAN_CLOSE).join('') + '\n' + this.openStack.join('')
        this.buffer += lines.join(lineBreak)
    }

    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param node */
    openNode(node) {
        if (!emitsWrappingTags(node)) return

        const className = scopeToCSSClass(node.scope,
            { prefix: this.classPrefix })
        this.span(className)
    }

    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param node */
    closeNode(node) {
        if (!emitsWrappingTags(node)) return

        this.buffer += SPAN_CLOSE
        this.openStack.pop()
    }

    /**
     * returns the accumulated buffer
     */
    value() {
        return this.buffer
    }

    // helpers

    /**
     * Builds a span element
     *
     * @param className */
    span(className) {
        const span = `<span class="${className}">`
        this.buffer += span
        this.openStack.push(span)
    }
}

/**
 * @param value
 * @returns
 */
export function escapeHTML(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
}
