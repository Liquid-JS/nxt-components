export enum OutputFormat {
    auto = 'auto',
    hex = 'hex',
    rgba = 'rgba',
    hsla = 'hsla'
}

export enum AlphaChannel {
    enabled = 'enabled',
    disabled = 'disabled',
    always = 'always',
    forced = 'forced'
}

export enum DialogPosition {
    top = 'top',
    left = 'left',
    right = 'right',
    bottom = 'bottom'
}

export enum DialogDisplay {
    popup = 'popup',
    inline = 'inline'
}

export enum Position {
    fixed = 'fixed',
    relative = 'relative',
    static = 'static',
    absolute = 'absolute'
}

export type ColorMode = 'color' | 'c' | '1' | 'grayscale' | 'g' | '2' | 'presets' | 'p' | '3'

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
