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
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'nxt',
                    style: 'camelCase'
                }
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'nxt',
                    style: 'kebab-case'
                }
            ]
        }
    },
    {
        files: ['**/*.html'],
        rules: {}
    }
)
