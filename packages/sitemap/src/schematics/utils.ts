import { virtualFs, workspaces } from '@angular-devkit/core'
import { SchematicsException, Tree } from '@angular-devkit/schematics'

/**
 * @internal
 */
export function createHost(tree: Tree): workspaces.WorkspaceHost {
    return {
        readFile: async (path: string): Promise<string> => {
            const data = tree.read(path)
            if (!data) {
                throw new SchematicsException('File not found.')
            }
            return virtualFs.fileBufferToString(data)
        },
        writeFile: async (path: string, data: string): Promise<void> => tree.overwrite(path, data),
        isDirectory: async (path: string): Promise<boolean> => !tree.exists(path) && tree.getDir(path).subfiles.length > 0,
        isFile: async (path: string): Promise<boolean> => tree.exists(path)
    }
}
