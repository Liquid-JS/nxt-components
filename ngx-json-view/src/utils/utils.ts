export function isObject(value) {
    return value !== null && typeof value === 'object';
}

export function isArray(value) {
    return Array.isArray(value);
}

export function isUndefined(value) {
    return typeof value === 'undefined';
}

export function isString(value) {
    return typeof value === 'string';
}

export function isNumber(value) {
    return typeof value === 'number';
}

export function isBoolean(value) {
    return typeof value === 'boolean';
}