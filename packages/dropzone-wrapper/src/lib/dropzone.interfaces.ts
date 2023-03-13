import { InjectionToken } from '@angular/core'

export const NXT_DROPZONE_CONFIG = new InjectionToken('NXT_DROPZONE_CONFIG')

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

export interface DropzoneConfigInterface extends Dropzone.DropzoneOptions {
    autoReset?: number | null
    errorReset?: number | null
    cancelReset?: number | null
}

/** @internal */
export const internalChanges = new Set([
    'autoReset',
    'errorReset',
    'cancelReset'
])

/** @internal */
export class DropzoneConfig implements DropzoneConfigInterface {
    autoReset?: number
    errorReset?: number
    cancelReset?: number

    maxFiles?: number

    constructor(config: DropzoneConfigInterface = {}) {
        this.assign(config)
    }

    assign(config: DropzoneConfigInterface | any = {}, target?: any) {
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
