export class SliderPosition {
    constructor(public h: number, public s: number, public v: number, public a: number) { }
}

export class SliderDimension {
    constructor(public h: number, public s: number, public v: number, public a: number) { }
}

export enum Position {
    fixed = 'fixed',
    relative = 'relative',
    static = 'static',
    absolute = 'absolute'
}

export enum ColorModeInternal {
    color,
    grayscale,
    presets
}

export function parseColorMode(mode: string): ColorModeInternal {
    switch (mode.toString().toUpperCase()) {
        case '1':
        case 'C':
        case 'COLOR':
            return ColorModeInternal.color

        case '2':
        case 'G':
        case 'GRAYSCALE':
            return ColorModeInternal.grayscale

        case '3':
        case 'P':
        case 'PRESETS':
            return ColorModeInternal.presets

        default:
            return ColorModeInternal.color
    }
}

export function sizeToString(val: any) {
    const strVal = ((val || 'auto') + '').trim().toLowerCase()
    if (strVal.match(/^\d+[a-z%]+$/) || strVal == 'auto')
        return strVal

    const num = parseInt(strVal, 10)
    if (!Number.isNaN(num))
        return `${num}px`

    return 'auto'
}

export type CursorEvent = { v: number, rgX: number } | { v: number, rgY: number } | { v: number, s: number, rgX: number, rgY: number }

export type TextEvent = string | { v: number, rg: number }
