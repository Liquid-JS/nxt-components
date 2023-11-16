module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ],
    plugins: [
        '@liquid-js/commitlint-plugin-workspace-scopes'
    ],
    rules: {
        'scope-enum': [2, 'always', {}]
    }
}
