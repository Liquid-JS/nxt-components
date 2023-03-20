import { ElementRef } from '@angular/core'
import { AlphaChannel, ColorMode, DialogDisplay, DialogPosition, InputChangeEvent, OutputFormat, SliderChangeEvent } from './types'

/**
 * @internal
 */
export class SliderPosition {
    constructor(public h: number, public s: number, public v: number, public a: number) { }
}

/**
 * @internal
 */
export class SliderDimension {
    constructor(public h: number, public s: number, public v: number, public a: number) { }
}

/**
 * @internal
 */
export enum ColorModeInternal {
    color,
    grayscale,
    presets
}

/**
 * @internal
 */
export function parseColorMode(mode: string) {
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

/**
 * @internal
 */
export function sizeToString(val: any) {
    const strVal = ((val || 'auto') + '').trim().toLowerCase()
    if (strVal.match(/^\d+[a-z%]+$/) || strVal == 'auto') {
        return strVal
    }

    const num = parseInt(strVal, 10)
    if (!Number.isNaN(num)) {
        return `${num}px`
    }

    return 'auto'
}

/**
 * @internal
 */
export type CursorEvent = { v: number, rgX: number } | { v: number, rgY: number } | { v: number, s: number, rgX: number, rgY: number }

/**
 * @internal
 */
export type TextEvent = string | { v: number, rg: number }

/**
 * @internal
 */
export interface DirectiveCallbacks {
    stateChanged(state: boolean): void
    cmykChanged(valuse: string, ignore?: boolean): void
    colorChanged(value: string, ignore?: boolean): void
    colorSelectCanceled(): void
    colorSelected(value: string): void
    inputChanged(event: InputChangeEvent): void
    sliderDragStart(event: SliderChangeEvent): void
    sliderChanged(event: SliderChangeEvent): void
    sliderDragEnd(event: SliderChangeEvent): void
    presetColorsChanged(value?: string[]): void
}

/**
 * @internal
 */
export interface DialogConfig {
    callbacks: DirectiveCallbacks
    elementRef: ElementRef
    color: any
    width: string
    height: string
    dialogDisplay: DialogDisplay
    fallbackColor?: string
    mode: ColorMode
    cmykEnabled: boolean
    alphaChannel: AlphaChannel
    outputFormat: OutputFormat
    disableInput: boolean
    ignoredElements?: any[]
    saveClickOutside: boolean
    closeClickOutside: boolean
    useRootViewContainer: boolean
    position: DialogPosition
    presetLabel: boolean | string
    presetColors?: string[]
    maxPresetColors?: number
    okButton: boolean
    cancelButton: boolean
    presetColorsEditable: boolean
}

/**
 * @internal
 */
export function composedPath(event: Event): EventTarget[] {
    if (event.composedPath) {
        return event.composedPath()
    }

    const _evt: any = event

    if (_evt.path) {
        return _evt.path
    }

    let t = _evt.target
    _evt.path = []
    while (t.parentNode !== null) {
        _evt.path.push(t)
        t = t.parentNode
    }

    _evt.path.push(document, window)
    return _evt.path
}
