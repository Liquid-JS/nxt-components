export class SliderPosition {
    constructor(public h: number, public s: number, public v: number, public a: number) { }
}

export class SliderDimension {
    constructor(public h: number, public s: number, public v: number, public a: number) { }
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
