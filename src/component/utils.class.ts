export class Utils {
    public static isObject(value) {
        return value !== null && typeof value === 'object';
    }

    public static isArray(value) {
        return Array.isArray(value);
    }

    public static isUndefined(value) {
        return typeof value === 'undefined';
    }

    public static isString(value) {
        return typeof value === 'string';
    }

    public static isNumber(value) {
        return typeof value === 'number';
    }

    public static isBoolean(value) {
        return typeof value === 'boolean';
    }
}