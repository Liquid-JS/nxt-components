# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [16.0.0-alpha.1](https://github.com/Liquid-JS/nxt-components/compare/v16.0.0-alpha.0...v16.0.0-alpha.1) (2023-03-20)


### Bug Fixes

* docs link ([ff441bd](https://github.com/Liquid-JS/nxt-components/commit/ff441bd6939654f8bbab655da891be08629cc36d))





# [16.0.0-alpha.0](https://github.com/Liquid-JS/nxt-components/compare/v15.0.1...v16.0.0-alpha.0) (2023-03-20)


* feat(nxt-dropzone-wrapper)!: add correct typings, remove old types ([e212b10](https://github.com/Liquid-JS/nxt-components/commit/e212b101ef3537a7d77eb11aa26ffea7db76ce30))


### BREAKING CHANGES

* remove exports for helper types, since they're now provided by dropzone.js





# 15.0.0 (2023-03-07)


* refactor(nxt-dropzone-wrapper)!: align injector naming ([1bd1ffb](https://github.com/Liquid-JS/nxt-components/commit/1bd1ffbe4b201825e1aa607413d82305c34e0e35))
* feat(nxt-dropzone-wrapper)!: align naming with angular guidelines ([7634a15](https://github.com/Liquid-JS/nxt-components/commit/7634a15b84367a6650df1c2972c894a2f9ab21b6))


### Features

* migrate ([f2e45f5](https://github.com/Liquid-JS/nxt-components/commit/f2e45f52617961f202a7c637b9996906d1a97911))
* **nxt-dropzone-wrapper:** cleanup ([43871d2](https://github.com/Liquid-JS/nxt-components/commit/43871d22c51a4860b89169919c67e173bb9354c5))


### BREAKING CHANGES

* add `NXT_` prefix to dropzone config injection token
* renamed `<dropzone>` to `<nxt-dropzone>` and `[dropzone]` to `[nxtDropzone]`