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

    return config
}
