/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 * @internal
 */
export function extendObject(dest: any, ...sources: any[]): any {
    if (dest == null || dest == undefined) {
        throw TypeError('Cannot convert undefined or null to object')
    }

    for (const source of sources) {
        if (source != null && source != undefined) {
            for (const key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key]
                }
            }
        }
    }

    return dest
}
