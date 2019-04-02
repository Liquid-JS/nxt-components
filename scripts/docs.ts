import { Application } from 'typedoc'

const app = new Application({
    excludePrivate: true,
    excludeExternals: true,
    tsconfig: './projects/nxt-color-picker/tsconfig.lib.json',
    entryPoint: "nxt-color-picker"
});

const project = app.convert(app.expandInputFiles(['./projects/nxt-color-picker/src/public-api.ts']))

project.children[0].name = project.name

if (project)
    app.generateDocs(project, 'dist/demo/docs')
