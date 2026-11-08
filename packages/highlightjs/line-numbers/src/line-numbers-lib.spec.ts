import { activateLineNumbers } from './line-numbers-lib'

describe('Line numbers', () => {
    const lineNumbersBlock = activateLineNumbers(document)

    function getNumbers(html: string) {
        const container = document.createElement('div')
        container.innerHTML = html
        return Array.from(container.querySelectorAll('.hljs-ln-n'), el => el.getAttribute('data-line-number'))
    }

    it('should number lines from 1 by default', () => {
        expect(getNumbers(lineNumbersBlock('a\nb\nc'))).toEqual(['1', '2', '3'])
    })

    it('should start numbering from the startFrom option', () => {
        expect(getNumbers(lineNumbersBlock('a\nb\nc', { startFrom: 10 }))).toEqual(['10', '11', '12'])
        expect(getNumbers(lineNumbersBlock('a\nb', { startFrom: 0 }))).toEqual(['0', '1'])
    })

    it('should leave a single line unnumbered unless singleLine is set', () => {
        expect(lineNumbersBlock('a')).toBe('a')
        expect(getNumbers(lineNumbersBlock('a', { singleLine: true, startFrom: 5 }))).toEqual(['5'])
    })
})
