export function detectIE(): boolean | number {
    let ua = ''

    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase()
    }

    const msie = ua.indexOf('msie ')

    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
    }

    // Other browser
    return false
}

export class SliderPosition {
    constructor(public h: number, public s: number, public v: number, public a: number) { }
}

export class SliderDimension {
    constructor(public h: number, public s: number, public v: number, public a: number) { }
}
