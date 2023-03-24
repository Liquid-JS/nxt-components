/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = (config, _options, _targetOptions) => {
    config.module = config.module || {}
    config.module.rules = config.module.rules || []

    // exclude raw ts source import from angular compilation
    config.module.rules
        .filter(r => r.test ? 'ex.ts'.match(r.test) : false)
        .forEach(ts => {
            ts.resourceQuery = (str => {
                if (str.includes('raw'))
                    return false
                return true
            })
        })

    config.module.rules.unshift({
        resourceQuery: /raw/,
        type: 'asset/source'
    })

    config.module.rules.forEach(r => {
        if (r.test instanceof RegExp) {
            const exp = r.test
            const repl = exp.source.replace(/[\(\|]svg[\|\)]/i, (a) => (a.toLowerCase().replace('|svg', '').replace('svg|', '') || '|'))
            if (repl != exp.source) {
                r.test = new RegExp(repl, exp.flags)
            }
        }
    })
    config.module.rules.push({
        test: /\.meta\.((gif)|(png)|(jpe?g))$/i,
        type: 'asset/resource',
        generator: {
            filename: (pathData) => {
                const info = pathData.module.resourceResolveData
                const params = new URLSearchParams(info.query)
                const format = params.get('format') || path.extname(info.path).split('.').pop()
                const extension = (ext => ext === 'jpeg' ? 'jpg' : ext)(format.toLowerCase())
                const fileName = '[name].[contenthash:8].meta[ext]'
                return fileName.replace('[ext]', `.${extension}`)
            }
        }
    })
    config.module.rules.push({
        test: /(?<!\.meta)\.((png)|(jpe?g))(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
        generator: {
            filename: (_pathData) => '[name].[contenthash:8].webp'
        },
        use: [{
            loader: 'webpack-image-resize-loader',
            options: {}
        }]
    })
    config.module.rules.push({
        test: /(?<!\.meta)\.((eot)|(woff)|(woff2)|(ttf)|(svg)|(mp4)|(gif))$/i,
        type: 'asset/resource',
        generator: {
            filename: (pathData) => {
                const info = pathData.module.resourceResolveData
                const params = new URLSearchParams(info.query)
                const format = params.get('format') || path.extname(info.path).split('.').pop()
                const extension = (ext => ext === 'gif' ? 'webp' : ext)(format.toLowerCase())
                const fileName = '[name].[contenthash:8][ext]'
                return fileName.replace('[ext]', `.${extension}`)
            }
        }
    })

    if (config.optimization) {
        config.optimization.minimizer = config.optimization.minimizer || []
        config.optimization.minimizer.push(new ImageMinimizerPlugin({
            test: /(?<!\.meta)\.((png))(\?v=\d+\.\d+\.\d+)?$/i,
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugins: [
                        ['imagemin-webp', { quality: 100, method: 4, lossless: true }],
                        ['imagemin-gif2webp', { quality: 100, method: 4, lossy: false }]
                    ]
                }
            }
        }))
        config.optimization.minimizer.push(new ImageMinimizerPlugin({
            test: /(?<!\.meta)\.((jpe?g)|(gif))(\?v=\d+\.\d+\.\d+)?$/i,
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugins: [
                        ['imagemin-webp', { quality: 95, method: 4, lossless: false }],
                        ['imagemin-gif2webp', { quality: 95, method: 4, lossy: true }]
                    ]
                }
            }
        }))
    }

    return config
}
