module.exports = (config, _options, _targetOptions) => {
    config.module = config.module || {}
    config.module.rules = config.module.rules || []

    config.module.rules.push({
        test: /\.html$/i,
        type: 'asset/source'
    })

    return config
}
