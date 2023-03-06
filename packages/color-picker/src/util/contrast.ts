import { calculateContrast, compositeColors } from './color'
import { Rgba } from './formats'

const light = new Rgba(218, 218, 218, 1)
const dark = new Rgba(34, 34, 34, 1)

export function opaqueSliderLight(background: Rgba) {
    const cWhite = calculateContrast(light, new Rgba(background.r, background.g, background.b, 1))
    const cBlack = calculateContrast(dark, new Rgba(background.r, background.g, background.b, 1))

    return cWhite > cBlack
}

export function transparentSliderLight(background: Rgba) {
    const bg = compositeColors(background, light)
    const cWhite = calculateContrast(light, new Rgba(bg.r, bg.g, bg.b, 1))
    const cBlack = calculateContrast(dark, new Rgba(bg.r, bg.g, bg.b, 1))

    return cWhite > cBlack
}
