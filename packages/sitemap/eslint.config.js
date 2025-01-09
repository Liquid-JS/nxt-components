// @ts-check
import { relative } from 'path'
import { config } from 'typescript-eslint'
import rootConfig from '../../eslint.config.js'

const dir = relative(process.cwd(), import.meta.dirname).replace(/\\/g, '/')

export default config(
    ...rootConfig.filter(v => !('ignores' in v)),
    {
        ignores: [
            `!${dir}/**/*`,
            `${dir}/dist`,
            `${dir}/node_modules`,
            `${dir}/tmp`
        ]
    },
    {
        files: [
            '**/*.ts'
        ],
        rules: {}
    },
    {
        files: [
            '**/*.html'
        ],
        rules: {}
    }
)
