import { Cmyk, Hsla, Hsva, Rgba } from './formats'
import { AlphaChannel, AlphaChannelEnum, OutputFormat, OutputFormatEnum } from './types'

function clamp(val: number, min: number, max: number) {
    return Math.min(max, Math.max(val, min))
}

export function hsvaToHsla(hsva: Hsva) {
    hsva = normalizeHSVA(hsva)
    const h = hsva.h
    const s = hsva.s
    const v = hsva.v
    const a = hsva.a

    if (v == 0) {
        return new Hsla(h, 0, 0, a, true)
    } else if (s == 0 && v == 1) {
        return new Hsla(h, 1, 1, a, true)
    } else {
        const l = v * (2 - s) / 2

        return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a, true)
    }
}

export function hslaToHsva(hsla: Hsla) {
    hsla = normalizeHSLA(hsla)
    const h = Math.min(hsla.h, 1)
    const s = Math.min(hsla.s, 1)
    const l = Math.min(hsla.l, 1)
    const a = Math.min(hsla.a, 1)

    if (l == 0) {
        return new Hsva(h, 0, 0, a, true)
    } else {
        const v = l + s * (1 - Math.abs(2 * l - 1)) / 2

        return new Hsva(h, 2 * (v - l) / v, v, a, true)
    }
}

export function hsvaToRgba(hsva: Hsva) {
    hsva = normalizeHSVA(hsva)
    let r: number; let g: number; let b: number

    const h = hsva.h; const s = hsva.s; const v = hsva.v; const a = hsva.a

    const i = Math.floor(h * 6)
    const f = h * 6 - i
    const p = v * (1 - s)
    const q = v * (1 - f * s)
    const t = v * (1 - (1 - f) * s)

    switch (i % 6) {
        case 0:
            r = v
            g = t
            b = p
            break
        case 1:
            r = q
            g = v
            b = p
            break
        case 2:
            r = p
            g = v
            b = t
            break
        case 3:
            r = p
            g = q
            b = v
            break
        case 4:
            r = t
            g = p
            b = v
            break
        case 5:
            r = v
            g = p
            b = q
            break
        default:
            r = 0
            g = 0
            b = 0
    }

    return new Rgba(r, g, b, a, true)
}

export function rgbaToCmyk(rgba: Rgba) {
    rgba = normalizeRGBA(rgba)
    const k: number = 1 - Math.max(rgba.r, rgba.g, rgba.b)

    if (k == 1) {
        return new Cmyk(0, 0, 0, 1, rgba.a, true)
    } else {
        const c = (1 - rgba.r - k) / (1 - k)
        const m = (1 - rgba.g - k) / (1 - k)
        const y = (1 - rgba.b - k) / (1 - k)

        return new Cmyk(c, m, y, k, rgba.a, true)
    }
}

export function rgbaToHsva(rgba: Rgba) {
    rgba = normalizeRGBA(rgba)
    let h: number

    const r = Math.min(rgba.r, 1); const g = Math.min(rgba.g, 1)
    const b = Math.min(rgba.b, 1); const a = Math.min(rgba.a, 1)

    const max = Math.max(r, g, b); const min = Math.min(r, g, b)

    const v: number = max; const d = max - min

    const s = (max == 0) ? 0 : d / max

    if (max == min) {
        h = 0
    } else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            case b:
                h = (r - g) / d + 4
                break
            default:
                h = 0
        }

        h /= 6
    }

    return new Hsva(h, s, v, a, true)
}

export function rgbaToHex(rgba: Rgba, allowHex8?: boolean) {
    rgba = denormalizeRGBA(rgba)
    /* tslint:disable:no-bitwise */
    let hex = '#' + ((1 << 24) | (Math.round(rgba.r) << 16) | (Math.round(rgba.g) << 8) | Math.round(rgba.b)).toString(16).substring(1)

    if (allowHex8) {
        hex += ((1 << 8) | clamp(Math.round(rgba.a * 255), 0, 255)).toString(16).substring(1)
    }
    /* tslint:enable:no-bitwise */

    return hex
}

export function cmykToRgb(cmyk: Cmyk): Rgba {
    cmyk = normalizeCMYK(cmyk)
    const r = (1 - cmyk.c) * (1 - cmyk.k)
    const g = (1 - cmyk.m) * (1 - cmyk.k)
    const b = (1 - cmyk.y) * (1 - cmyk.k)

    return new Rgba(r, g, b, cmyk.a, true)
}

export function normalizeCMYK(cmyk: Cmyk): Cmyk {
    if (cmyk.normalized)
        return cmyk
    return new Cmyk(
        clamp(cmyk.c / 100, 0, 1),
        clamp(cmyk.m / 100, 0, 1),
        clamp(cmyk.y / 100, 0, 1),
        clamp(cmyk.k / 100, 0, 1),
        clamp(cmyk.a, 0, 1),
        true
    )
}

export function denormalizeCMYK(cmyk: Cmyk): Cmyk {
    if (!cmyk.normalized)
        return cmyk

    return new Cmyk(
        clamp(cmyk.c * 100, 0, 100),
        clamp(cmyk.m * 100, 0, 100),
        clamp(cmyk.y * 100, 0, 100),
        clamp(cmyk.k * 100, 0, 100),
        clamp(cmyk.a, 0, 1),
        false
    )
}

export function normalizeRGBA(rgba: Rgba) {
    if (rgba.normalized)
        return rgba
    return new Rgba(
        clamp(rgba.r / 255, 0, 1),
        clamp(rgba.g / 255, 0, 1),
        clamp(rgba.b / 255, 0, 1),
        clamp(rgba.a, 0, 1),
        true
    )
}

export function denormalizeRGBA(rgba: Rgba) {
    if (!rgba.normalized)
        return rgba
    return new Rgba(
        clamp(rgba.r * 255, 0, 255),
        clamp(rgba.g * 255, 0, 255),
        clamp(rgba.b * 255, 0, 255),
        clamp(rgba.a, 0, 1),
        false
    )
}

export function normalizeHSVA(hsva: Hsva) {
    if (hsva.normalized)
        return hsva
    return new Hsva(
        clamp(hsva.h / 360, 0, 1),
        clamp(hsva.s / 100, 0, 1),
        clamp(hsva.v / 100, 0, 1),
        clamp(hsva.a, 0, 1),
        true
    )
}

export function denormalizeHSVA(hsva: Hsva) {
    if (!hsva.normalized)
        return hsva
    return new Hsva(
        clamp(hsva.h * 360, 0, 360),
        clamp(hsva.s * 100, 0, 100),
        clamp(hsva.v * 100, 0, 100),
        clamp(hsva.a, 0, 1),
        false
    )
}

export function normalizeHSLA(hsla: Hsla) {
    if (hsla.normalized)
        return hsla
    return new Hsla(
        clamp(hsla.h / 360, 0, 1),
        clamp(hsla.s / 100, 0, 1),
        clamp(hsla.l / 100, 0, 1),
        clamp(hsla.a, 0, 1),
        true
    )
}

export function denormalizeHSLA(hsla: Hsla) {
    if (!hsla.normalized)
        return hsla
    return new Hsla(
        clamp(hsla.h * 360, 0, 360),
        clamp(hsla.s * 100, 0, 100),
        clamp(hsla.l * 100, 0, 100),
        clamp(hsla.a, 0, 1),
        false
    )
}

export function stringToHsva(colorString: string = '', allowHex8: boolean = false) {
    let hsva: Hsva | undefined

    colorString = (colorString || '').toLowerCase()

    const stringParsers = [
        {
            re: /(cmyk)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Cmyk(
                parseFloat(execResult[2]) / 100,
                parseFloat(execResult[3]) / 100,
                parseFloat(execResult[4]) / 100,
                parseFloat(execResult[5]) / 100,
                isNaN(parseFloat(execResult[6])) ? 1 : parseFloat(execResult[6]),
                true
            )
        },
        {
            re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Rgba(
                parseFloat(execResult[2]) / 255,
                parseFloat(execResult[3]) / 255,
                parseFloat(execResult[4]) / 255,
                isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]),
                true
            )
        }, {
            re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Hsla(
                parseFloat(execResult[2]) / 360,
                parseFloat(execResult[3]) / 100,
                parseFloat(execResult[4]) / 100,
                isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]),
                true
            )
        }
    ]

    if (allowHex8) {
        stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
            parse: (execResult: any) => new Rgba(
                parseInt(execResult[1], 16) / 255,
                parseInt(execResult[2], 16) / 255,
                parseInt(execResult[3], 16) / 255,
                parseInt(execResult[4] || 'FF', 16) / 255,
                true
            )
        })
    } else {
        stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
            parse: (execResult: any) => new Rgba(
                parseInt(execResult[1], 16) / 255,
                parseInt(execResult[2], 16) / 255,
                parseInt(execResult[3], 16) / 255,
                1,
                true
            )
        })
    }

    stringParsers.push({
        re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
        parse: (execResult: any) => new Rgba(
            parseInt(execResult[1] + execResult[1], 16) / 255,
            parseInt(execResult[2] + execResult[2], 16) / 255,
            parseInt(execResult[3] + execResult[3], 16) / 255,
            1,
            true
        )
    })

    for (const key in stringParsers) {
        if (stringParsers.hasOwnProperty(key)) {
            const parser = stringParsers[key]

            const match = parser.re.exec(colorString); const color = match && parser.parse(match)

            if (color) {
                if (color instanceof Rgba) {
                    hsva = rgbaToHsva(color)
                } else if (color instanceof Hsla) {
                    hsva = hslaToHsva(color)
                } else if (color instanceof Cmyk) {
                    hsva = rgbaToHsva(cmykToRgb(color))
                } else {
                    hsva = color
                }

                return hsva
            }
        }
    }

    return hsva
}
export function stringToCmyk(colorString: string = '', allowHex8: boolean = false) {
    let cmyk: Cmyk | undefined

    colorString = (colorString || '').toLowerCase()

    const stringParsers = [
        {
            re: /(cmyk)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Cmyk(
                parseFloat(execResult[2]) / 100,
                parseFloat(execResult[3]) / 100,
                parseFloat(execResult[4]) / 100,
                parseFloat(execResult[5]) / 100,
                isNaN(parseFloat(execResult[6])) ? 1 : parseFloat(execResult[6]),
                true
            )
        },
        {
            re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Rgba(
                parseFloat(execResult[2]) / 255,
                parseFloat(execResult[3]) / 255,
                parseFloat(execResult[4]) / 255,
                isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]),
                true
            )
        }, {
            re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Hsla(
                parseFloat(execResult[2]) / 360,
                parseFloat(execResult[3]) / 100,
                parseFloat(execResult[4]) / 100,
                isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]),
                true
            )
        }
    ]

    if (allowHex8) {
        stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
            parse: (execResult: any) => new Rgba(
                parseInt(execResult[1], 16) / 255,
                parseInt(execResult[2], 16) / 255,
                parseInt(execResult[3], 16) / 255,
                parseInt(execResult[4] || 'FF', 16) / 255,
                true
            )
        })
    } else {
        stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
            parse: (execResult: any) => new Rgba(
                parseInt(execResult[1], 16) / 255,
                parseInt(execResult[2], 16) / 255,
                parseInt(execResult[3], 16) / 255,
                1,
                true
            )
        })
    }

    stringParsers.push({
        re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
        parse: (execResult: any) => new Rgba(
            parseInt(execResult[1] + execResult[1], 16) / 255,
            parseInt(execResult[2] + execResult[2], 16) / 255,
            parseInt(execResult[3] + execResult[3], 16) / 255,
            1,
            true
        )
    })

    for (const key in stringParsers) {
        if (stringParsers.hasOwnProperty(key)) {
            const parser = stringParsers[key]

            const match = parser.re.exec(colorString); const color = match && parser.parse(match)

            if (color) {
                if (color instanceof Rgba) {
                    cmyk = rgbaToCmyk(color)
                } else if (color instanceof Hsva) {
                    cmyk = rgbaToCmyk(hsvaToRgba(color))
                } else if (color instanceof Hsla) {
                    cmyk = rgbaToCmyk(hsvaToRgba(hslaToHsva(color)))
                } else {
                    cmyk = color
                }

                return cmyk
            }
        }
    }

    return cmyk
}

export function formatOutput(hsva: Hsva, outputFormat: OutputFormat, alphaChannel?: AlphaChannel) {
    if (outputFormat == OutputFormatEnum.auto) {
        outputFormat = hsva.a < 1 ? OutputFormatEnum.rgba : OutputFormatEnum.hex
    }

    switch (outputFormat) {
        case OutputFormatEnum.hsla:
            const hsla = denormalizeHSLA(hsvaToHsla(hsva))

            if (hsva.a < 1 || alphaChannel == AlphaChannelEnum.always) {
                return 'hsla(' + hsla.h.toFixed(0) + ',' + hsla.s.toFixed(0) + '%,' + hsla.l.toFixed(0) + '%,' + hsla.a.toFixed(2) + ')'
            } else {
                return 'hsl(' + hsla.h.toFixed(0) + ',' + hsla.s.toFixed(0) + '%,' + hsla.l.toFixed(0) + '%)'
            }

        case OutputFormatEnum.rgba:
            const rgba = denormalizeRGBA(hsvaToRgba(hsva))

            if (hsva.a < 1 || alphaChannel == AlphaChannelEnum.always) {
                return 'rgba(' + rgba.r.toFixed(0) + ',' + rgba.g.toFixed(0) + ',' + rgba.b.toFixed(0) + ',' + rgba.a.toFixed(2) + ')'
            } else {
                return 'rgb(' + rgba.r.toFixed(0) + ',' + rgba.g.toFixed(0) + ',' + rgba.b.toFixed(0) + ')'
            }

        default:
            const allowHex8 = (alphaChannel == AlphaChannelEnum.always || alphaChannel == AlphaChannelEnum.forced)

            return rgbaToHex(denormalizeRGBA(hsvaToRgba(hsva)), allowHex8)
    }
}

export function formatCmyk(cmyk: Cmyk, alphaChannel: AlphaChannel) {
    cmyk = denormalizeCMYK(cmyk)
    if (cmyk.a < 1 || alphaChannel == AlphaChannelEnum.always) {
        return 'cmyka(' + cmyk.c.toFixed(0) + ',' + cmyk.m.toFixed(0) + ',' + cmyk.y.toFixed(0) + ',' + cmyk.k.toFixed(0) + ',' + cmyk.a.toFixed(2) + ')'
    } else {
        return 'cmyk(' + cmyk.c.toFixed(0) + ',' + cmyk.m.toFixed(0) + ',' + cmyk.y.toFixed(0) + ',' + cmyk.k.toFixed(0) + ')'
    }
}

export function calculateContrast(foreground: Rgba, background: Rgba) {
    foreground = normalizeRGBA(foreground)
    background = normalizeRGBA(background)

    if (Math.round(foreground.a * 100) < 100) {
        foreground = compositeColors(foreground, background)
    }

    const luminance1 = calculateLuminance(foreground) + 0.05
    const luminance2 = calculateLuminance(background) + 0.05

    return Math.max(luminance1, luminance2) / Math.min(luminance1, luminance2)
}

export function compositeColors(foreground: Rgba, background: Rgba) {
    foreground = normalizeRGBA(foreground)
    background = normalizeRGBA(background)
    const a = compositeAlpha(foreground.a, background.a)

    const r = compositeComponent(foreground.r, foreground.a, background.r, background.a, a)
    const g = compositeComponent(foreground.g, foreground.a, background.g, background.a, a)
    const b = compositeComponent(foreground.b, foreground.a, background.b, background.a, a)

    return new Rgba(r, g, b, a, true)
}

export function compositeAlpha(foregroundAlpha: number, backgroundAlpha: number) {
    return 1 - (1 - backgroundAlpha) * (1 - foregroundAlpha)
}

export function compositeComponent(fgC: number, fgA: number, bgC: number, bgA: number, a: number) {
    if (a == 0) {
        return 0
    }
    return ((fgC * fgA) + (bgC * bgA * (1 - fgA))) / a
}

export function calculateLuminance(color: Rgba) {
    color = normalizeRGBA(color)
    let red = color.r
    red = red < 0.03928 ? red / 12.92 : Math.pow((red + 0.055) / 1.055, 2.4)

    let green = color.g
    green = green < 0.03928 ? green / 12.92 : Math.pow((green + 0.055) / 1.055, 2.4)

    let blue = color.b
    blue = blue < 0.03928 ? blue / 12.92 : Math.pow((blue + 0.055) / 1.055, 2.4)

    return (0.2126 * red) + (0.7152 * green) + (0.0722 * blue)
}

export function calculateMinimumAlpha(foreground: Rgba, background: Rgba, minContrastRatio: number) {
    foreground = normalizeRGBA(foreground)
    background = normalizeRGBA(background)
    if (Math.round(background.a * 100) < 100) {
        return -1
    }

    let testForeground = new Rgba(foreground.r, foreground.g, foreground.b, 1)
    let testRatio = calculateContrast(testForeground, background)
    if (testRatio < minContrastRatio) {
        return -1
    }

    let numIterations = 0
    let minAlpha = 0
    let maxAlpha = 1

    while (numIterations <= 10 && (maxAlpha - minAlpha) > 0.01) {
        const testAlpha = (minAlpha + maxAlpha) / 2

        testForeground = new Rgba(foreground.r, foreground.g, foreground.b, testAlpha)
        testRatio = calculateContrast(testForeground, background)

        if (testRatio < minContrastRatio) {
            minAlpha = testAlpha
        } else {
            maxAlpha = testAlpha
        }

        numIterations++
    }

    return maxAlpha
}
