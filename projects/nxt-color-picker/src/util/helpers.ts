import { ElementRef } from '@angular/core'
import { AlphaChannel, ColorMode, DialogDisplay, DialogPosition, InputChangeEvent, OutputFormat, SliderChangeEvent } from './types'

export class SliderPosition {
    constructor(public h: number, public s: number, public v: number, public a: number) { }
}

export class SliderDimension {
    constructor(public h: number, public s: number, public v: number, public a: number) { }
}

export enum Position {
    fixed = 'fixed',
    relative = 'relative',
    static = 'static',
    absolute = 'absolute'
}

export enum ColorModeInternal {
    color,
    grayscale,
    presets
}

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

export type CursorEvent = { v: number, rgX: number } | { v: number, rgY: number } | { v: number, s: number, rgX: number, rgY: number }

export type TextEvent = string | { v: number, rg: number }

export interface DirectiveCallbacks {
    stateChanged(state: boolean): void
    colorChanged(value: string, ignore?: boolean): void
    colorSelectCanceled(): void
    colorSelected(value: string): void
    inputChanged(event: InputChangeEvent): void
    sliderDragStart(event: SliderChangeEvent): void
    sliderChanged(event: SliderChangeEvent): void
    sliderDragEnd(event: SliderChangeEvent): void
    presetColorsChanged(value: any[]): void
}

export interface DialogConfig {
    callbacks: DirectiveCallbacks,
    elementRef: ElementRef,
    color: any,
    cpWidth: string,
    cpHeight: string,
    cpDialogDisplay: DialogDisplay,
    cpFallbackColor: string,
    cpMode: ColorMode,
    cpAlphaChannel: AlphaChannel,
    cpOutputFormat: OutputFormat,
    cpDisableInput: boolean,
    cpIgnoredElements: any[],
    cpSaveClickOutside: boolean,
    cpCloseClickOutside: boolean,
    cpUseRootViewContainer: boolean,
    cpPosition: DialogPosition,
    cpPositionOffset: string,
    cpPositionRelativeToArrow: boolean,
    cpPresetLabel: boolean,
    cpPresetColors: string[],
    cpMaxPresetColors: number,
    cpOKButton: boolean,
    cpCancelButton: boolean,
    cpAddColorButton: boolean
}

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
