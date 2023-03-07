export enum ColorFormatEnum {
    hex = 'hex',
    rgba = 'rgba',
    hsla = 'hsla',
    cmyk = 'cmyk'
}

export type ColorFormat = `${ColorFormatEnum}`

export const AlphaEnabledFormats = new Set<ColorFormat>([ColorFormatEnum.hsla, ColorFormatEnum.rgba, ColorFormatEnum.cmyk])

export enum OutputFormatEnum {
    auto = 'auto',
    hex = 'hex',
    rgba = 'rgba',
    hsla = 'hsla'
}

export type OutputFormat = `${OutputFormatEnum}`

export enum AlphaChannelEnum {
    enabled = 'enabled',
    disabled = 'disabled',
    always = 'always',
    forced = 'forced'
}

export type AlphaChannel = `${AlphaChannelEnum}`

export enum DialogPositionEnum {
    auto = 'auto',
    top = 'top',
    left = 'left',
    right = 'right',
    bottom = 'bottom'
}

export type DialogPosition = `${DialogPositionEnum}`

export enum DialogDisplayEnum {
    popup = 'popup',
    inline = 'inline'
}

export type DialogDisplay = `${DialogDisplayEnum}`

export type ColorMode = 'color' | 'c' | '1' | 'grayscale' | 'g' | '2' | 'presets' | 'p' | '3'

export interface InputChangeEvent {
    input: string
    valid: boolean
    value: number | string
    color: string
}

export interface SliderChangeEvent {
    slider: string
    value?: number | string
    color: string
}
