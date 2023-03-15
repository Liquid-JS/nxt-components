export enum FlagFormatEnum {
    None = 'none',
    Round = 'round',
    Square = 'square'
}

export type FlagFormat = `${FlagFormatEnum}`

export enum FlagSize {
    xxs = 8,
    xs = 16,
    s = 24,
    m = 32,
    l = 48,
    xl = 64,
    xxl = 96
}

export type FlagSizeAlias = keyof typeof FlagSize
