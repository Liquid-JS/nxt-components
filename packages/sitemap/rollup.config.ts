import { readdir, readFile, rm, writeFile } from 'fs/promises'
import { join, normalize } from 'path'
import typescript from '@rollup/plugin-typescript'
//@ts-ignore
import builtins from 'builtins'
import { compile } from 'json-schema-to-typescript'
import { type RollupOptions } from 'rollup'
import copy from 'rollup-plugin-copy'

const outdir = normalize('../../dist/sitemap/')

const builders = await readdir('./src/builders', { withFileTypes: true })
const schematics = await readdir('./src/schematics', { withFileTypes: true })

const exports: { [key: string]: { types?: string, default: string } } = {
    '.': {
        types: './index.d.ts',
        default: './index.mjs'
    },
    './package.json': {
        default: './package.json'
    }
}

const pkg = JSON.parse(await readFile('./package.json', 'utf8'))

const external = [
    ...builtins(),
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'fs/promises'
]

const entries = [
    ...builders.filter(e => e.isDirectory()).map(e => [e, false] as const),
    ...schematics.filter(e => e.isDirectory()).map(e => [e, true] as const)
]

const tsc = typescript({
    declaration: true,
    declarationDir: outdir,
    inlineSources: true,
    tsconfig: './tsconfig.lib.json',
    outDir: outdir,
    rootDir: './src'
})

await rm(outdir, { recursive: true, force: true })

export default new Array<RollupOptions>(
    ...entries.map<RollupOptions>(([e, schematic]) => {
        const ext = schematic ? 'cjs' : 'mjs'
        const input = join(e.parentPath, e.name, schematic
            ? 'index.ts'
            : 'builder.ts')
        exports[`./${e.name}`] = {
            types: `./${input.substring(4, input.length - 3)}.d.ts`.replace(/\\/g, '/'),
            default: `./${e.name}.${ext}`
        }
        return {
            input,
            output: {
                file: normalize(join(outdir, e.name + '.' + ext)),
                sourcemap: true,
                format: schematic ? 'cjs' : 'esm',
                name: e.name
            },
            external,
            plugins: [
                {
                    name: 'watch-schema',
                    async buildStart(_options) {
                        const schema = join(e.parentPath, e.name, 'schema.json')
                        if (this.meta.watchMode)
                            this.addWatchFile(schema)
                        const content = await readFile(schema, 'utf8')
                        const compiled = await compile(JSON.parse(content), 'Schema')
                        const outfile = schema.replace(/.json$/, '.ts')
                        const existing = await readFile(outfile, 'utf8').catch(_ => '')
                        if (existing != compiled)
                            await writeFile(outfile, compiled)
                        this.emitFile({
                            type: 'asset',
                            source: content,
                            fileName: schema.substring(4)
                        })
                    },
                    async watchChange(id, _change) {
                        if (id.endsWith('schema.json')) {
                            const content = await readFile(id, 'utf8')
                            const compiled = await compile(JSON.parse(content), 'Schema')
                            await writeFile(id.replace(/.json$/, '.ts'), compiled)
                            this.emitFile({
                                type: 'asset',
                                source: content,
                                fileName: id.substring(4)
                            })
                        }
                    }
                },
                tsc
            ]
        }
    }),
    {
        input: 'src/index.ts',
        output: {
            file: join(outdir, 'index.mjs'),
            sourcemap: true,
            format: 'esm',
            name: 'Sitemap'
        },
        external,
        plugins: [
            copy({
                targets: [
                    { src: 'src/builders.json', dest: outdir },
                    { src: 'src/collection.json', dest: outdir },
                    { src: 'README.md', dest: outdir },
                    {
                        src: 'package.json', dest: outdir, transform: (contents, _name) => {
                            const data = JSON.parse(contents.toString('utf8'))
                            data.exports = exports
                            data.module = exports['.'].default
                            data.typings = exports['.'].types
                            data.sideEffects = false
                            delete data.scripts
                            delete data.devDependencies
                            return Buffer.from(JSON.stringify(data, undefined, 2), 'utf8')
                        }
                    }
                ]
            }),
            tsc
        ]
    }
)
