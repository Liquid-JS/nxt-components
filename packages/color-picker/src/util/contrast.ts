import { calculateContrast, compositeColors } from './color'
import { Rgba } from './formats'

/**
 * @internal
 */
const light = new Rgba(218, 218, 218, 1, false)

/**
 * @internal
 */
const dark = new Rgba(34, 34, 34, 1, false)

/**
 * @internal
 */
export function opaqueSliderLight(background: Rgba) {
    const cWhite = calculateContrast(light, new Rgba(background.r, background.g, background.b, 1))
    const cBlack = calculateContrast(dark, new Rgba(background.r, background.g, background.b, 1))

    return cWhite > cBlack
}

/**
 * @internal
 */
export function transparentSliderLight(background: Rgba) {
    const bg = compositeColors(background, light)
    const cWhite = calculateContrast(light, new Rgba(bg.r, bg.g, bg.b, 1, bg.normalized))
    const cBlack = calculateContrast(dark, new Rgba(bg.r, bg.g, bg.b, 1, bg.normalized))

    return cWhite > cBlack
}
