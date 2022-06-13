import { Cmyk, Hsla, Hsva, Rgba } from './formats'
import { AlphaChannel, OutputFormat } from './types'

export function hsva2hsla(hsva: Hsva) {
    const h = hsva.h; const s = hsva.s; const v = hsva.v; const a = hsva.a

    if (v == 0) {
        return new Hsla(h, 0, 0, a)
    } else if (s == 0 && v == 1) {
        return new Hsla(h, 1, 1, a)
    } else {
        const l = v * (2 - s) / 2

        return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a)
    }
}

export function hsla2hsva(hsla: Hsla) {
    const h = Math.min(hsla.h, 1); const s = Math.min(hsla.s, 1)
    const l = Math.min(hsla.l, 1); const a = Math.min(hsla.a, 1)

    if (l == 0) {
        return new Hsva(h, 0, 0, a)
    } else {
        const v = l + s * (1 - Math.abs(2 * l - 1)) / 2

        return new Hsva(h, 2 * (v - l) / v, v, a)
    }
}

export function hsvaToRgba(hsva: Hsva) {
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

    return new Rgba(r, g, b, a)
}

export function rgbaToCmyk(rgba: Rgba) {
    const k: number = 1 - Math.max(rgba.r, rgba.g, rgba.b)

    if (k == 1) {
        return new Cmyk(0, 0, 0, 1, rgba.a)
    } else {
        const c = (1 - rgba.r - k) / (1 - k)
        const m = (1 - rgba.g - k) / (1 - k)
        const y = (1 - rgba.b - k) / (1 - k)

        return new Cmyk(c, m, y, k, rgba.a)
    }
}

export function rgbaToHsva(rgba: Rgba) {
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

    return new Hsva(h, s, v, a)
}

export function rgbaToHex(rgba: Rgba, allowHex8?: boolean) {
    /* tslint:disable:no-bitwise */
    let hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substring(1)

    if (allowHex8) {
        hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substring(1)
    }
    /* tslint:enable:no-bitwise */

    return hex
}

export function cmykToRgb(cmyk: Cmyk): Rgba {
    const r = (1 - cmyk.c) * (1 - cmyk.k)
    const g = (1 - cmyk.m) * (1 - cmyk.k)
    const b = (1 - cmyk.y) * (1 - cmyk.k)

    return new Rgba(r, g, b, cmyk.a)
}

export function normalizeCMYK(cmyk: Cmyk): Cmyk {
    return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a)
}

export function denormalizeCMYK(cmyk: Cmyk): Cmyk {
    return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100),
        Math.floor(cmyk.k * 100), cmyk.a)
}

export function denormalizeRGBA(rgba: Rgba) {
    return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a)
}

export function stringToHsva(colorString: string = '', allowHex8: boolean = false) {
    let hsva: Hsva = null

    colorString = (colorString || '').toLowerCase()

    const stringParsers = [
        {
            re: /(cmyk)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Cmyk(parseInt(execResult[2], 10) / 100,
                parseInt(execResult[3], 10) / 100,
                parseInt(execResult[4], 10) / 100,
                parseInt(execResult[5], 10) / 100,
                isNaN(parseFloat(execResult[6])) ? 1 : parseFloat(execResult[6]))
        },
        {
            re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Rgba(parseInt(execResult[2], 10) / 255,
                parseInt(execResult[3], 10) / 255,
                parseInt(execResult[4], 10) / 255,
                isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]))
        }, {
            re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Hsla(parseInt(execResult[2], 10) / 360,
                parseInt(execResult[3], 10) / 100,
                parseInt(execResult[4], 10) / 100,
                isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]))
        }
    ]

    if (allowHex8) {
        stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
            parse: (execResult: any) => new Rgba(parseInt(execResult[1], 16) / 255,
                parseInt(execResult[2], 16) / 255,
                parseInt(execResult[3], 16) / 255,
                parseInt(execResult[4] || 'FF', 16) / 255)
        })
    } else {
        stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
            parse: (execResult: any) => new Rgba(parseInt(execResult[1], 16) / 255,
                parseInt(execResult[2], 16) / 255,
                parseInt(execResult[3], 16) / 255,
                1)
        })
    }

    stringParsers.push({
        re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
        parse: (execResult: any) => new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255,
            parseInt(execResult[2] + execResult[2], 16) / 255,
            parseInt(execResult[3] + execResult[3], 16) / 255,
            1)
    })

    for (const key in stringParsers) {
        if (stringParsers.hasOwnProperty(key)) {
            const parser = stringParsers[key]

            const match = parser.re.exec(colorString); const color = match && parser.parse(match)

            if (color) {
                if (color instanceof Rgba) {
                    hsva = rgbaToHsva(color)
                } else if (color instanceof Hsla) {
                    hsva = hsla2hsva(color)
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
    let cmyk: Cmyk = null

    colorString = (colorString || '').toLowerCase()

    const stringParsers = [
        {
            re: /(cmyk)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Cmyk(parseInt(execResult[2], 10) / 100,
                parseInt(execResult[3], 10) / 100,
                parseInt(execResult[4], 10) / 100,
                parseInt(execResult[5], 10) / 100,
                isNaN(parseFloat(execResult[6])) ? 1 : parseFloat(execResult[6]))
        },
        {
            re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Rgba(parseInt(execResult[2], 10) / 255,
                parseInt(execResult[3], 10) / 255,
                parseInt(execResult[4], 10) / 255,
                isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]))
        }, {
            re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: (execResult: any) => new Hsla(parseInt(execResult[2], 10) / 360,
                parseInt(execResult[3], 10) / 100,
                parseInt(execResult[4], 10) / 100,
                isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]))
        }
    ]

    if (allowHex8) {
        stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
            parse: (execResult: any) => new Rgba(parseInt(execResult[1], 16) / 255,
                parseInt(execResult[2], 16) / 255,
                parseInt(execResult[3], 16) / 255,
                parseInt(execResult[4] || 'FF', 16) / 255)
        })
    } else {
        stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
            parse: (execResult: any) => new Rgba(parseInt(execResult[1], 16) / 255,
                parseInt(execResult[2], 16) / 255,
                parseInt(execResult[3], 16) / 255,
                1)
        })
    }

    stringParsers.push({
        re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
        parse: (execResult: any) => new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255,
            parseInt(execResult[2] + execResult[2], 16) / 255,
            parseInt(execResult[3] + execResult[3], 16) / 255,
            1)
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
                    cmyk = rgbaToCmyk(hsvaToRgba(hsla2hsva(color)))
                } else {
                    cmyk = color
                }

                return cmyk
            }
        }
    }

    return cmyk
}

export function formatOutput(hsva: Hsva, outputFormat: OutputFormat, alphaChannel: AlphaChannel) {
    if (outputFormat == OutputFormat.auto) {
        outputFormat = hsva.a < 1 ? OutputFormat.rgba : OutputFormat.hex
    }

    switch (outputFormat) {
        case OutputFormat.hsla:
            const hsla = hsva2hsla(hsva)

            const hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100),
                Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100)

            if (hsva.a < 1 || alphaChannel == AlphaChannel.always) {
                return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                    hslaText.a + ')'
            } else {
                return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)'
            }

        case OutputFormat.rgba:
            const rgba = denormalizeRGBA(hsvaToRgba(hsva))

            if (hsva.a < 1 || alphaChannel == AlphaChannel.always) {
                return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                    Math.round(rgba.a * 100) / 100 + ')'
            } else {
                return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')'
            }

        default:
            const allowHex8 = (alphaChannel == AlphaChannel.always || alphaChannel == AlphaChannel.forced)

            return rgbaToHex(denormalizeRGBA(hsvaToRgba(hsva)), allowHex8)
    }
}

export function calculateContrast(foreground: Rgba, background: Rgba) {

    if (Math.round(foreground.a * 100) < 100) {
        foreground = compositeColors(foreground, background)
    }

    const luminance1 = calculateLuminance(foreground) + 0.05
    const luminance2 = calculateLuminance(background) + 0.05

    return Math.max(luminance1, luminance2) / Math.min(luminance1, luminance2)
}

export function compositeColors(foreground: Rgba, background: Rgba) {
    const a = compositeAlpha(foreground.a, background.a)

    const r = compositeComponent(foreground.r, foreground.a, background.r, background.a, a)
    const g = compositeComponent(foreground.g, foreground.a, background.g, background.a, a)
    const b = compositeComponent(foreground.b, foreground.a, background.b, background.a, a)

    return new Rgba(r, g, b, a)
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
    let red = color.r / 255
    red = red < 0.03928 ? red / 12.92 : Math.pow((red + 0.055) / 1.055, 2.4)

    let green = color.g / 255
    green = green < 0.03928 ? green / 12.92 : Math.pow((green + 0.055) / 1.055, 2.4)

    let blue = color.b / 255
    blue = blue < 0.03928 ? blue / 12.92 : Math.pow((blue + 0.055) / 1.055, 2.4)

    return (0.2126 * red) + (0.7152 * green) + (0.0722 * blue)
}

export function calculateMinimumAlpha(foreground: Rgba, background: Rgba, minContrastRatio: number) {
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
