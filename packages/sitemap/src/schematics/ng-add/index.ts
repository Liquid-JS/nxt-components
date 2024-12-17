import { join, normalize } from 'path'
import { workspaces } from '@angular-devkit/core'
import { SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics'
import { createHost } from '../utils'
import { NgAddSchematicOptions } from './schema'

export function ngAdd(options: NgAddSchematicOptions) {
    return async (tree: Tree, _context: SchematicContext) => {
        const host = createHost(tree)
        const { workspace } = await workspaces.readWorkspace('/', host)

        if (!options.project) {
            const apps = Array.from(workspace.projects.values()).filter(v => v.extensions['projectType'] === 'application')
            if (apps.length === 1) {
                // If there is only one project, return that one.
                options.project = Array.from(workspace.projects.keys())[0]
            } else {
                throw new SchematicsException(
                    'There is more than one project in your workspace. Please select it manually by using the --project argument.'
                )
            }
        }

        const project = workspace.projects.get(options.project)
        if (!project) {
            throw new SchematicsException(
                'The specified Angular project is not defined in this workspace'
            )
        }

        if (project.extensions['projectType'] !== 'application') {
            throw new SchematicsException(
                'Deploy requires an Angular project type of "application" in angular.json'
            )
        }

        if (!options.srcDirectory) {
            const outputPath = project.targets.get('build')?.options?.['outputPath']
            if (!outputPath) {
                throw new SchematicsException(
                    `Cannot read the output path (architect.build.options.outputPath) of the Angular project "${options.project}" in angular.json`
                )
            }
            options.srcDirectory = ''
            if (typeof outputPath == 'string') {
                options.srcDirectory = join(outputPath, 'browser')
            } else if (typeof outputPath == 'object' && !Array.isArray(outputPath)) {
                options.srcDirectory = ''
                if (outputPath['base'] as any) {
                    options.srcDirectory = outputPath['base'] as any
                }
                options.srcDirectory = normalize(join(options.srcDirectory!, outputPath['browser'] as any ?? 'browser')).replace(/\\/g, '/')
            }
        }

        project.targets.add({
            name: 'sitemap',
            builder: 'nxt-sitemap:sitemap',
            options: {
                srcDirectory: options.srcDirectory.replace(/\\/g, '/'),
                baseUrl: options.baseUrl
            }
        })

        await workspaces.writeWorkspace(workspace, host)
        return tree
    }
}
