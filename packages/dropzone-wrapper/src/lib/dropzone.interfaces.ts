import { EventEmitter, InjectionToken, makeEnvironmentProviders } from '@angular/core'

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
export type DropzoneEvent = 'init' | 'drop' | 'dragStart' | 'dragEnd' | 'dragEnter' | 'dragOver' | 'dragLeave' | 'paste' | 'reset' | 'addedFile' | 'addedFiles' | 'removedFile' | 'thumbnail' | 'error' | 'errorMultiple' | 'processing' | 'processingMultiple' | 'uploadProgress' | 'totalUploadProgress' | 'sending' | 'sendingMultiple' | 'success' | 'successMultiple' | 'canceled' | 'canceledMultiple' | 'complete' | 'completeMultiple' | 'maxFilesExceeded' | 'maxFilesReached' | 'queueComplete'

/** @internal */
export const DropzoneEvents: DropzoneEvent[] = [
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
]

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

/** @internal */
export interface DropzoneListeners {
    readonly DZ_INIT: EventEmitter<Dropzone>

    readonly DZ_DROP: EventEmitter<DragEvent>
    readonly DZ_DRAGSTART: EventEmitter<DragEvent>
    readonly DZ_DRAGEND: EventEmitter<DragEvent>
    readonly DZ_DRAGENTER: EventEmitter<DragEvent>
    readonly DZ_DRAGOVER: EventEmitter<DragEvent>
    readonly DZ_DRAGLEAVE: EventEmitter<DragEvent>
    readonly DZ_PASTE: EventEmitter<DragEvent>

    readonly DZ_RESET: EventEmitter<void>

    readonly DZ_ADDEDFILE: EventEmitter<Dropzone.DropzoneFile>
    readonly DZ_ADDEDFILES: EventEmitter<Dropzone.DropzoneFile>
    readonly DZ_REMOVEDFILE: EventEmitter<Dropzone.DropzoneFile>
    readonly DZ_THUMBNAIL: EventEmitter<[Dropzone.DropzoneFile, string]>

    readonly DZ_ERROR: EventEmitter<[Dropzone.DropzoneFile, string | Error]>
    readonly DZ_ERRORMULTIPLE: EventEmitter<[Dropzone.DropzoneFile[], string | Error]>

    readonly DZ_PROCESSING: EventEmitter<Dropzone.DropzoneFile>
    readonly DZ_PROCESSINGMULTIPLE: EventEmitter<Dropzone.DropzoneFile[]>

    readonly DZ_UPLOADPROGRESS: EventEmitter<[Dropzone.DropzoneFile, number, number]>
    readonly DZ_TOTALUPLOADPROGRESS: EventEmitter<[number, number, number]>

    readonly DZ_SENDING: EventEmitter<[Dropzone.DropzoneFile, XMLHttpRequest, FormData]>
    readonly DZ_SENDINGMULTIPLE: EventEmitter<[Dropzone.DropzoneFile[], XMLHttpRequest, FormData]>

    // eslint-disable-next-line @typescript-eslint/no-restricted-types
    readonly DZ_SUCCESS: EventEmitter<[Dropzone.DropzoneFile, Object | string]>
    readonly DZ_SUCCESSMULTIPLE: EventEmitter<Dropzone.DropzoneFile[]>

    readonly DZ_CANCELED: EventEmitter<Dropzone.DropzoneFile>
    readonly DZ_CANCELEDMULTIPLE: EventEmitter<Dropzone.DropzoneFile[]>

    readonly DZ_COMPLETE: EventEmitter<Dropzone.DropzoneFile>
    readonly DZ_COMPLETEMULTIPLE: EventEmitter<Dropzone.DropzoneFile[]>

    readonly DZ_MAXFILESEXCEEDED: EventEmitter<Dropzone.DropzoneFile>
    readonly DZ_MAXFILESREACHED: EventEmitter<Dropzone.DropzoneFile[]>

    readonly DZ_QUEUECOMPLETE: EventEmitter<void>
}

/** @internal */
export const NXT_DROPZONE_LISTENERS = new InjectionToken<DropzoneListeners>('NXT_DROPZONE_LISTENERS')
