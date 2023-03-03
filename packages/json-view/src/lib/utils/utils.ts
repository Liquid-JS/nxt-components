export function isObject(value: any): value is object {
    return value !== null && typeof value === 'object'
}

export function isArray(value: any): value is unknown[] {
    return Array.isArray(value)
}

export function isUndefined<T>(value: T | undefined): value is undefined {
    return typeof value === 'undefined'
}

export function isString(value: any): value is string {
    return typeof value === 'string'
}

export function isNumber(value: any): value is number {
    return typeof value === 'number'
}

export function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean'
}
