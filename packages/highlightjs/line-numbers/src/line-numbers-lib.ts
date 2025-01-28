interface LineNumbersOptions {
    startFrom?: number
    singleLine?: boolean
}

export function activateLineNumbers(document: Document) {
    const TABLE_NAME = 'hljs-ln'
    const LINE_NAME = 'hljs-ln-line'
    const CODE_BLOCK_NAME = 'hljs-ln-code'
    const NUMBERS_BLOCK_NAME = 'hljs-ln-numbers'
    const NUMBER_LINE_NAME = 'hljs-ln-n'
    const DATA_ATTR_NAME = 'data-line-number'
    const BREAK_LINE_REGEXP = /\r\n|\r|\n/g

    addStyles()

    function isHljsLnCodeDescendant(domElt?: HTMLElement | null) {
        let curElt = domElt
        while (curElt) {
            if (curElt.className && curElt.className.indexOf('hljs-ln-code') !== -1) {
                return true
            }
            curElt = curElt.parentNode as HTMLElement
        }
        return false
    }

    function getHljsLnTable(hljsLnDomElt?: HTMLElement) {
        let curElt = hljsLnDomElt
        while (curElt && curElt.nodeName !== 'TABLE') {
            curElt = curElt.parentNode as HTMLElement
        }
        return curElt
    }

    // Function to workaround a copy issue with Microsoft Edge.
    // Due to hljs-ln wrapping the lines of code inside a <table> element,
    // itself wrapped inside a <pre> element, window.getSelection().toString()
    // does not contain any line breaks. So we need to get them back using the
    // rendered code in the DOM as reference.
    function edgeGetSelectedCodeLines(selection: Selection) {
        // current selected text without line breaks
        const selectionText = selection.toString()

        // get the <td> element wrapping the first line of selected code
        let tdAnchor = selection.anchorNode
        while (tdAnchor?.nodeName !== 'TD') {
            tdAnchor = tdAnchor?.parentNode || null
        }

        // get the <td> element wrapping the last line of selected code
        let tdFocus = selection.focusNode
        while (tdFocus?.nodeName !== 'TD') {
            tdFocus = tdFocus?.parentNode || null
        }

        // extract line numbers
        let firstLineNumber = parseInt((tdAnchor as HTMLElement | null)?.dataset['lineNumber'] || '0', 10)
        let lastLineNumber = parseInt((tdFocus as HTMLElement | null)?.dataset['lineNumber'] || '0', 10)

        // multi-lines copied case
        if (firstLineNumber != lastLineNumber) {

            let firstLineText = tdAnchor.textContent
            let lastLineText = tdFocus.textContent

            // if the selection was made backward, swap values
            if (firstLineNumber > lastLineNumber) {
                const tmp = firstLineNumber
                firstLineNumber = lastLineNumber
                lastLineNumber = tmp
                const tmp2 = firstLineText
                firstLineText = lastLineText
                lastLineText = tmp2
            }

            // discard not copied characters in first line
            while (selectionText.indexOf(firstLineText || '') !== 0) {
                firstLineText = firstLineText!.slice(1)
            }

            // discard not copied characters in last line
            while (selectionText.lastIndexOf(lastLineText || '') === -1) {
                lastLineText = lastLineText!.slice(0, -1)
            }

            // reconstruct and return the real copied text
            let selectedText = firstLineText
            const hljsLnTable = getHljsLnTable(tdAnchor as HTMLElement)
            for (let i = firstLineNumber + 1; i < lastLineNumber; ++i) {
                const codeLineSel = format('.{0}[{1}="{2}"]', [CODE_BLOCK_NAME, DATA_ATTR_NAME, i])
                const codeLineElt = hljsLnTable?.querySelector(codeLineSel)
                selectedText += '\n' + (codeLineElt?.textContent || '')
            }
            selectedText += '\n' + lastLineText
            return selectedText
            // single copied line case
        } else {
            return selectionText
        }
    }

    // ensure consistent code copy/paste behavior across all browsers
    // (see https://github.com/wcoder/highlightjs-line-numbers.js/issues/51)
    document.addEventListener('copy', (e) => {
        // get current selection
        const selection = window.getSelection()
        // override behavior when one wants to copy line of codes
        if (isHljsLnCodeDescendant(selection?.anchorNode as HTMLElement | null | undefined)) {
            let selectionText: string | null | undefined
            // workaround an issue with Microsoft Edge as copied line breaks
            // are removed otherwise from the selection string
            if (window.navigator.userAgent.indexOf('Edge') !== -1 && selection) {
                selectionText = edgeGetSelectedCodeLines(selection)
            } else {
                // other browsers can directly use the selection string
                selectionText = selection?.toString()
            }
            if (selectionText) {
                e.clipboardData?.setData('text/plain', selectionText)
                e.preventDefault()
            }
        }
    })

    function addStyles() {
        const css = document.createElement('style')
        css.innerHTML = format(
            '.{0}{border-collapse:collapse}' +
            '.{0} td{padding:0}' +
            '.{1}:before{content:attr({2})}',
            [
                TABLE_NAME,
                NUMBER_LINE_NAME,
                DATA_ATTR_NAME
            ])
        document.getElementsByTagName('head')[0].appendChild(css)
    }

    function lineNumbersBlock(element: HTMLElement, options?: LineNumbersOptions) {
        if (typeof element !== 'object') return

        element.innerHTML = lineNumbersInternal(element, options)
    }

    function lineNumbersInternal(element: HTMLElement, options?: LineNumbersOptions) {

        const internalOptions = mapOptions(element, options)

        duplicateMultilineNodes(element)

        return addLineNumbersBlockFor(element.innerHTML, internalOptions)
    }

    function addLineNumbersBlockFor(inputHtml: string, options?: LineNumbersOptions) {
        const lines = getLines(inputHtml)

        // if last line contains only carriage return remove it
        if (lines[lines.length - 1].trim() === '') {
            lines.pop()
        }

        if (lines.length > 1 || options?.singleLine) {
            let html = ''

            for (let i = 0, l = lines.length; i < l; i++) {
                html += format(
                    '<tr>' +
                    '<td class="{0} {1}" {3}="{5}">' +
                    '<div class="{2}" {3}="{5}"></div>' +
                    '</td>' +
                    '<td class="{0} {4}" {3}="{5}">' +
                    '{6}' +
                    '</td>' +
                    '</tr>',
                    [
                        LINE_NAME,
                        NUMBERS_BLOCK_NAME,
                        NUMBER_LINE_NAME,
                        DATA_ATTR_NAME,
                        CODE_BLOCK_NAME,
                        i + Number(!!(options?.startFrom)),
                        lines[i].length > 0 ? lines[i] : ' '
                    ])
            }

            return format('<table class="{0}">{1}</table>', [TABLE_NAME, html])
        }

        return inputHtml
    }

    /**
     * @param element Code block.
     * @param options External API options.
     * @returns Internal API options.
     */
    function mapOptions(element: HTMLElement, options?: LineNumbersOptions) {
        options = options || {}
        return {
            singleLine: getSingleLineOption(options),
            startFrom: getStartFromOption(element, options)
        }
    }

    function getSingleLineOption(options?: LineNumbersOptions) {
        const defaultValue = false
        if (!!options?.singleLine) {
            return options.singleLine
        }
        return defaultValue
    }

    function getStartFromOption(element: HTMLElement, options?: LineNumbersOptions) {
        const defaultValue = 1
        let startFrom = defaultValue

        if (isFinite(options?.startFrom ?? NaN)) {
            startFrom = options!.startFrom!
        }

        // can be overridden because local option is priority
        const value = getAttribute(element, 'data-ln-start-from')
        if (value !== null) {
            startFrom = toNumber(value, defaultValue)
        }

        return startFrom
    }

    /**
     * Recursive method for fix multi-line elements implementation in highlight.js
     * Doing deep passage on child nodes.
     *
     * @param element
     */
    function duplicateMultilineNodes(element: HTMLElement) {
        if (getLinesCount(element.textContent) > 0) {
            element.childNodes.forEach(child => duplicateMultilineNodes(child as HTMLElement))
            duplicateMultilineNode(element as HTMLElement)
        }
    }

    /**
     * Method for fix multi-line elements implementation in highlight.js
     *
     * @param element
     */
    function duplicateMultilineNode(element: HTMLElement) {
        if (element?.tagName?.toUpperCase() !== 'SPAN') return

        const className = element.className

        const lines = getLines(element.innerHTML)

        const result = lines.map(line => {
            const lineText = line.length > 0 ? line : ' '
            return format('<span class="{0}">{1}</span>', [className, lineText])
        }).join('\n')

        element.outerHTML = result
    }

    function getLines(text: string) {
        if (text.length === 0) return []
        return text.split(BREAK_LINE_REGEXP)
    }

    function getLinesCount(text?: string | null) {
        return (text?.trim().match(BREAK_LINE_REGEXP) || []).length
    }

    ///
    /// HELPERS
    ///

    /**
     * {@link https://wcoder.github.io/notes/string-format-for-string-formating-in-javascript}
     *
     * @param formatString
     * @param args
     */
    function format(formatString: string, args: any[]) {
        return formatString.replace(/\{(\d+)\}/g, (m, n) => args[n] !== null && args[n] !== undefined ? args[n] : m)
    }

    /**
     * @param element Code block.
     * @param attrName Attribute name.
     * @returns Attribute value or empty.
     */
    function getAttribute(element: HTMLElement, attrName: string) {
        return element.hasAttribute(attrName) ? element.getAttribute(attrName) : null
    }

    /**
     * @param str Source string.
     * @param fallback Fallback value.
     * @returns Parsed number or fallback value.
     */
    function toNumber(str: string, fallback: number) {
        if (!str) return fallback
        const number = Number(str)
        return isFinite(number) ? number : fallback
    }

    return lineNumbersBlock
}
