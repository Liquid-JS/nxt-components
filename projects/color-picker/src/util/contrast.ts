import { Rgba } from './formats'

export function calculateContrast(foreground: Rgba, background: Rgba) {

    if (Math.round(foreground.a * 100) < 100)
        foreground = compositeColors(foreground, background)

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
    if (a == 0) return 0
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
    if (Math.round(background.a * 100) < 100)
        return -1

    let testForeground = new Rgba(foreground.r, foreground.g, foreground.b, 1)
    let testRatio = calculateContrast(testForeground, background)
    if (testRatio < minContrastRatio)
        return -1

    let numIterations = 0
    let minAlpha = 0
    let maxAlpha = 1

    while (numIterations <= 10 && (maxAlpha - minAlpha) > 0.01) {
        const testAlpha = (minAlpha + maxAlpha) / 2

        testForeground = new Rgba(foreground.r, foreground.g, foreground.b, testAlpha)
        testRatio = calculateContrast(testForeground, background)

        if (testRatio < minContrastRatio)
            minAlpha = testAlpha
        else
            maxAlpha = testAlpha

        numIterations++
    }

    return maxAlpha
}

const white = new Rgba(218, 218, 218, 1)
const black = new Rgba(34, 34, 34, 1)

export function opaqueSliderWhite(background: Rgba) {
    const cWhite = calculateContrast(white, new Rgba(background.r, background.g, background.b, 1))
    const cBlack = calculateContrast(black, new Rgba(background.r, background.g, background.b, 1))

    return cWhite > cBlack
}

export function transparentSliderWhite(background: Rgba) {
    const bg = compositeColors(background, white)
    const cWhite = calculateContrast(white, new Rgba(bg.r, bg.g, bg.b, 1))
    const cBlack = calculateContrast(black, new Rgba(bg.r, bg.g, bg.b, 1))

    return cWhite > cBlack
}
