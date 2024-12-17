// @ts-check
import { config } from 'typescript-eslint'
import rootConfig from '../../eslint.config.js'

export default config(
    ...rootConfig.filter(v => !('ignores' in v)),
    {
        ignores: [
            '!**/*',
            'dist',
            'node_modules',
            'tmp'
        ]
    }
)
