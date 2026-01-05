/* eslint-disable @angular-eslint/no-output-rename */
import { InjectionToken, makeEnvironmentProviders, output, Directive, OutputEmitterRef } from '@angular/core'

export const NXT_DROPZONE_CONFIG = new InjectionToken<DropzoneConfig>('NXT_DROPZONE_CONFIG')

export function provideDropzoneConfig(config: DropzoneConfig) {
    return makeEnvironmentProviders([
        {
            provide: NXT_DROPZONE_CONFIG,
            useValue: config
        }
    ])
}

/** @internal */
export const DropzoneEvents = [
    'init',

    'drop',
    'dragStart',
    'dragEnd',
    'dragEnter',
    'dragOver',
    'dragLeave',
    'paste',

    'reset',

    'addedFile',
    'addedFiles',
    'removedFile',
    'thumbnail',

    'error',
    'errorMultiple',

    'processing',
    'processingMultiple',

    'uploadProgress',
    'totalUploadProgress',

    'sending',
    'sendingMultiple',

    'success',
    'successMultiple',

    'canceled',
    'canceledMultiple',

    'complete',
    'completeMultiple',

    'maxFilesExceeded',
    'maxFilesReached',

    'queueComplete'
] as const

/** @internal */
export type DropzoneEvent = typeof DropzoneEvents[number]

/** @internal */
export type DZ_EVENTS = { [P in `DZ_${Uppercase<DropzoneEvent>}`]: OutputEmitterRef<any> }

export interface DropzoneConfig extends Dropzone.DropzoneOptions {
    /**
     * Time in ms until input resets after a successful upload
     */
    autoReset?: number
    /**
     * Time in ms until input resets after upload error
     */
    errorReset?: number
    /**
     * Time in ms until input resets after cancelled upload
     */
    cancelReset?: number
}

/** @internal */
export const internalChanges = new Set([
    'autoReset',
    'errorReset',
    'cancelReset'
])

/** @internal */
export class _DropzoneConfig implements DropzoneConfig {
    autoReset?: number
    errorReset?: number
    cancelReset?: number

    maxFiles?: number

    constructor(config: DropzoneConfig = {}) {
        this.assign(config)
    }

    assign(config: DropzoneConfig | any = {}, target?: any) {
        target = target || this

        for (const key in config) {
            if (config[key] != null
                && config[key] != undefined
                && !Array.isArray(config[key])
                && typeof config[key] === 'object'
                && !(config[key] instanceof HTMLElement)
            ) {
                target[key] = {}

                this.assign(config[key], target[key])
            } else {
                target[key] = config[key]
            }
        }
    }
}

@Directive()
export class DropzoneListeners implements DZ_EVENTS {
    readonly DZ_INIT = output<Dropzone>({ alias: 'init' })
    readonly DZ_DROP = output<DragEvent>({ alias: 'drop' })
    readonly DZ_DRAGSTART = output<DragEvent>({ alias: 'dragStart' })
    readonly DZ_DRAGEND = output<DragEvent>({ alias: 'dragEnd' })
    readonly DZ_DRAGENTER = output<DragEvent>({ alias: 'dragEnter' })
    readonly DZ_DRAGOVER = output<DragEvent>({ alias: 'dragOver' })
    readonly DZ_DRAGLEAVE = output<DragEvent>({ alias: 'dragLeave' })
    readonly DZ_PASTE = output<DragEvent>({ alias: 'paste' })
    readonly DZ_RESET = output<void>({ alias: 'reset' })
    readonly DZ_ADDEDFILE = output<Dropzone.DropzoneFile>({ alias: 'addedFile' })
    readonly DZ_ADDEDFILES = output<Dropzone.DropzoneFile>({ alias: 'addedFiles' })
    readonly DZ_REMOVEDFILE = output<Dropzone.DropzoneFile>({ alias: 'removedFile' })
    readonly DZ_THUMBNAIL = output<[Dropzone.DropzoneFile, string]>({ alias: 'thumbnail' })
    readonly DZ_ERROR = output<[Dropzone.DropzoneFile, string | Error]>({ alias: 'error' })
    readonly DZ_ERRORMULTIPLE = output<[Dropzone.DropzoneFile[], string | Error]>({ alias: 'errorMultiple' })
    readonly DZ_PROCESSING = output<Dropzone.DropzoneFile>({ alias: 'processing' })
    readonly DZ_PROCESSINGMULTIPLE = output<Dropzone.DropzoneFile[]>({ alias: 'processingMultiple' })
    readonly DZ_UPLOADPROGRESS = output<[Dropzone.DropzoneFile, number, number]>({ alias: 'uploadProgress' })
    readonly DZ_TOTALUPLOADPROGRESS = output<[number, number, number]>({ alias: 'totalUploadProgress' })
    readonly DZ_SENDING = output<[Dropzone.DropzoneFile, XMLHttpRequest, FormData]>({ alias: 'sending' })
    readonly DZ_SENDINGMULTIPLE = output<[Dropzone.DropzoneFile[], XMLHttpRequest, FormData]>({ alias: 'sendingMultiple' })
    // eslint-disable-next-line @typescript-eslint/no-restricted-types
    readonly DZ_SUCCESS = output<[Dropzone.DropzoneFile, Object | string]>({ alias: 'success' })
    readonly DZ_SUCCESSMULTIPLE = output<Dropzone.DropzoneFile[]>({ alias: 'successMultiple' })
    readonly DZ_CANCELED = output<Dropzone.DropzoneFile>({ alias: 'canceled' })
    readonly DZ_CANCELEDMULTIPLE = output<Dropzone.DropzoneFile[]>({ alias: 'canceledMultiple' })
    readonly DZ_COMPLETE = output<Dropzone.DropzoneFile>({ alias: 'complete' })
    readonly DZ_COMPLETEMULTIPLE = output<Dropzone.DropzoneFile[]>({ alias: 'completeMultiple' })
    readonly DZ_MAXFILESEXCEEDED = output<Dropzone.DropzoneFile>({ alias: 'maxFilesExceeded' })
    readonly DZ_MAXFILESREACHED = output<Dropzone.DropzoneFile[]>({ alias: 'maxFilesReached' })
    readonly DZ_QUEUECOMPLETE = output<void>({ alias: 'queueComplete' })
}

/** @internal */
export const NXT_DROPZONE_LISTENERS = new InjectionToken<DropzoneListeners>('NXT_DROPZONE_LISTENERS')
