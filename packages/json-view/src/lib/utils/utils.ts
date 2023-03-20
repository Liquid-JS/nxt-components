/** @internal */
export function isObject(value: any): value is object {
    return value !== null && typeof value === 'object'
}

/** @internal */
export function isArray(value: any): value is unknown[] {
    return Array.isArray(value)
}

/** @internal */
export function isUndefined<T>(value: T | undefined): value is undefined {
    return typeof value === 'undefined'
}

/** @internal */
export function isString(value: any): value is string {
    return typeof value === 'string'
}

/** @internal */
export function isNumber(value: any): value is number {
    return typeof value === 'number'
}

/** @internal */
export function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean'
}
