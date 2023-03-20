# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [16.0.0-alpha.3](https://github.com/Liquid-JS/nxt-components/compare/v16.0.0-alpha.2...v16.0.0-alpha.3) (2023-03-20)


### Bug Fixes

* **nxt-dropzone-wrapper:** change detection ([759ba81](https://github.com/Liquid-JS/nxt-components/commit/759ba81d51344b6f04e0dc2c36e4b6dba8936452))





# [16.0.0-alpha.2](https://github.com/Liquid-JS/nxt-components/compare/v16.0.0-alpha.1...v16.0.0-alpha.2) (2023-03-20)


### Bug Fixes

* **nxt-dropzone-wrapper:** don't create instance without config ([c629ab9](https://github.com/Liquid-JS/nxt-components/commit/c629ab9f5527f94ea90199fc5f4194c00486e66b))





# [16.0.0-alpha.1](https://github.com/Liquid-JS/nxt-components/compare/v16.0.0-alpha.0...v16.0.0-alpha.1) (2023-03-20)


### Bug Fixes

* docs link ([ff441bd](https://github.com/Liquid-JS/nxt-components/commit/ff441bd6939654f8bbab655da891be08629cc36d))





# [16.0.0-alpha.0](https://github.com/Liquid-JS/nxt-components/compare/v15.0.1...v16.0.0-alpha.0) (2023-03-20)


### Bug Fixes

* **demo:** sortable link ([12da171](https://github.com/Liquid-JS/nxt-components/commit/12da171deda478607d14abc454316f96c1b26857))
* gitignore ([07c6fb7](https://github.com/Liquid-JS/nxt-components/commit/07c6fb7a6c546c8252c10d0e88e2514f4b2350b2))


* feat(nxt-pick-datetime)!: docs, use global LOCALE_ID ([5ad4eb0](https://github.com/Liquid-JS/nxt-components/commit/5ad4eb02095a2c9bb7bb3c23cc69f71cb92f70e6))
* feat(nxt-dropzone-wrapper)!: add correct typings, remove old types ([e212b10](https://github.com/Liquid-JS/nxt-components/commit/e212b101ef3537a7d77eb11aa26ffea7db76ce30))
* fix(nxt-color-picker)!: rename `addColorButton` => `presetColorsEditable` ([97a6622](https://github.com/Liquid-JS/nxt-components/commit/97a6622011e1bdc84af6269b48d2e33ab835c9ed))


### Features

* **demo:** add service worker ([19d0e15](https://github.com/Liquid-JS/nxt-components/commit/19d0e15fbbc74ce49cb32832fb191b1fea94c8ad))
* **demo:** demo page layout ([b7cd95a](https://github.com/Liquid-JS/nxt-components/commit/b7cd95a80fa2f50f8a4c97ae1a15969ad53e2411))
* import code snippets ([1ab89d9](https://github.com/Liquid-JS/nxt-components/commit/1ab89d96b1e18e95bb81fdf1aaaafdab1311192e))
* **nxt-color-picker:** ensure normalized colors ([f529445](https://github.com/Liquid-JS/nxt-components/commit/f52944582d97540c3c083f3f056fad895925d953))
* **nxt-json-view:** customize colors ([1d6b2ff](https://github.com/Liquid-JS/nxt-components/commit/1d6b2fff31c43b831c941243f460d0ce62486efe))
* **nxt-pick-datetime:** date range selection format ([99af361](https://github.com/Liquid-JS/nxt-components/commit/99af361aa6c318efd9732714d2301d09489e8527))


### BREAKING CHANGES

* drop NXT_LOCALE, use global LOCALE_ID
* remove exports for helper types, since they're now provided by dropzone.js
* rename `addColorButton` => `presetColorsEditable` to better reflect its purpose





## [15.0.1](https://github.com/Liquid-JS/nxt-components/compare/v15.0.0...v15.0.1) (2023-03-07)

### Bug Fixes

-   **nxt-flags:** exports ([eb7a0aa](https://github.com/Liquid-JS/nxt-components/commit/eb7a0aa09def8bf869bd8abfe1b754bc47a0816f))

# 15.0.0 (2023-03-07)

### Bug Fixes

-   adapt for [sortablejs@1.10.](mailto:sortablejs@1.10.)\* changes, fix [#163](https://github.com/Liquid-JS/nxt-components/issues/163) ([8fe60bc](https://github.com/Liquid-JS/nxt-components/commit/8fe60bc05e238a98518295d930f528aeee1c3223))
-   ci ([5ebebde](https://github.com/Liquid-JS/nxt-components/commit/5ebebde5559deaafa92ac95b8d32c5e5960bfc8f))
-   cmyk ([d21e9b6](https://github.com/Liquid-JS/nxt-components/commit/d21e9b6b42146e2d541e9a75c5f1a442ce320bf1))
-   Errors when the reference to `this.dropzone`is lost ([3210e1e](https://github.com/Liquid-JS/nxt-components/commit/3210e1ed16f495ab257ffc90a845fd51933cd32c))
-   export assets ([7255d62](https://github.com/Liquid-JS/nxt-components/commit/7255d620de94b23d7360b9e06ac27228a5fbcc8a))
-   export stylesheet ([900371d](https://github.com/Liquid-JS/nxt-components/commit/900371d1cc4aaed612a986ec1e1b7b19c912e46c))
-   inline styles ([7cff019](https://github.com/Liquid-JS/nxt-components/commit/7cff019a9f0f8a640ebc8bbe37fd760dc3951865))
-   lint css ([a859e2f](https://github.com/Liquid-JS/nxt-components/commit/a859e2fe4e8f5f05bd4dd8a7543d6bdaae65d1c2))
-   not being able to create sortable, fix [#162](https://github.com/Liquid-JS/nxt-components/issues/162) ([5a62f02](https://github.com/Liquid-JS/nxt-components/commit/5a62f0247c46d135e142df834445151bc7d03dba))
-   **nxt-flags:** improve typechecks, lint ([7fc74b4](https://github.com/Liquid-JS/nxt-components/commit/7fc74b4a8b1ad6c36e3e0a4d8a294b4f782fbd4f))
-   pop-up attachments ([dab4079](https://github.com/Liquid-JS/nxt-components/commit/dab40798672488e4f281ff06c363d93b252549d6))
-   preselect preview format ([229b596](https://github.com/Liquid-JS/nxt-components/commit/229b59697ef98de79c503d7651f528ff64225b8e))
-   preserve HSVA format on alpha change ([3b553a6](https://github.com/Liquid-JS/nxt-components/commit/3b553a6226cc23eb5fac7bcbbf487b52caf1b5e0))
-   provide backward compatibility for sortablejs &lt; 1.9.0 ([8e97d32](https://github.com/Liquid-JS/nxt-components/commit/8e97d32a7b06e013d2fde8283f40665ea9f07205))
-   remove wrongly imported events library ([ca0cfe7](https://github.com/Liquid-JS/nxt-components/commit/ca0cfe702e6fff6f118ec2b8a5fb59ec0ed1f954))
-   replace default index with draggable indexes. Fixes: [#164](https://github.com/Liquid-JS/nxt-components/issues/164) ([615d9fe](https://github.com/Liquid-JS/nxt-components/commit/615d9fe62a1d4c07a2baed98714af12b845e9bc6))
-   sortablejs directive no longer supports runInsideAngular property ([7f59f49](https://github.com/Liquid-JS/nxt-components/commit/7f59f4942baa33b102ade80f70ea308f5fba1424))
-   space in readme ([683b83b](https://github.com/Liquid-JS/nxt-components/commit/683b83bb2ed53af147c021e20ed1cf05940aac1c))
-   update build target ([47dde96](https://github.com/Liquid-JS/nxt-components/commit/47dde96710559ffa53c9ba9d14e95eaea2422052))
-   update dependencies ([4d3fb2b](https://github.com/Liquid-JS/nxt-components/commit/4d3fb2b9d3fc8be15348cfa7c630b4f1cd34c8bb))
-   update labels ([fbbc0e4](https://github.com/Liquid-JS/nxt-components/commit/fbbc0e4e40fd8cf55e5d6017004d21f5c32c4536))
-   Use ivy on demo ([a02c4ae](https://github.com/Liquid-JS/nxt-components/commit/a02c4aec9504825aa23577e556488d6ec8865565))


-   refactor(nxt-color-picker)!: align property anc selector names ([a09b25d](https://github.com/Liquid-JS/nxt-components/commit/a09b25d5262ae902246cc931782a4f93c65d891b))
-   refactor(nxt-dropzone-wrapper)!: align injector naming ([1bd1ffb](https://github.com/Liquid-JS/nxt-components/commit/1bd1ffbe4b201825e1aa607413d82305c34e0e35))
-   feat(nxt-json-view)!: align component and module names with code style ([7cc102e](https://github.com/Liquid-JS/nxt-components/commit/7cc102e50e0e9028e355c503e60f2815c9d7bf64))
-   feat(nxt-dropzone-wrapper)!: align naming with angular guidelines ([7634a15](https://github.com/Liquid-JS/nxt-components/commit/7634a15b84367a6650df1c2972c894a2f9ab21b6))

### Features

-   add angular i18n ([2e7aa09](https://github.com/Liquid-JS/nxt-components/commit/2e7aa09ca746d5db628183d668360d8d2f09d451))
-   add configuration for container selector (sortablejsContainer), implement [#60](https://github.com/Liquid-JS/nxt-components/issues/60) ([1c1ebd4](https://github.com/Liquid-JS/nxt-components/commit/1c1ebd4bf79e855aa90b2f6f0bb43e9b6ab0f052))
-   add demo ([1ce94f0](https://github.com/Liquid-JS/nxt-components/commit/1ce94f09ca626a4e7d1ab92a3b7fd2d7b913b175))
-   add init event, implement [#161](https://github.com/Liquid-JS/nxt-components/issues/161) ([7d81b55](https://github.com/Liquid-JS/nxt-components/commit/7d81b55e4fe7fb987596c0b093989137e2c4bba1))
-   Add support for levelLabels ([#3](https://github.com/Liquid-JS/nxt-components/issues/3)) ([4f75e69](https://github.com/Liquid-JS/nxt-components/commit/4f75e696c60f643299276fd3e62d2714168d3ad6))
-   allow custom preset label ([86e355f](https://github.com/Liquid-JS/nxt-components/commit/86e355fff10dbdf781218ddda00164f29555d5cb))
-   angular 14 ([8bbbb9d](https://github.com/Liquid-JS/nxt-components/commit/8bbbb9ded195a8c43723737ec1388736ba50aca5))
-   build target ([42c7f13](https://github.com/Liquid-JS/nxt-components/commit/42c7f13aab64aa0f4bb44ceb1a53dc49bb118d17))
-   **build:** add support for angular2 AOT compile ([d58ec24](https://github.com/Liquid-JS/nxt-components/commit/d58ec24f9d8249081ee342f7dd016565f8ae0332))
-   Clean error logs and commented out code ([61f174c](https://github.com/Liquid-JS/nxt-components/commit/61f174c196899d592a89952685ef5d43a89ee64f))
-   Clean tasks and clean publish config ([0cbf0dd](https://github.com/Liquid-JS/nxt-components/commit/0cbf0ddaf2935c34a1ca6397cfdfbe8b9260f21d))
-   cmyk color handling ([9435a69](https://github.com/Liquid-JS/nxt-components/commit/9435a6940d2bc181dfbd03f79aa9d6432c4835f8))
-   **demo:** cleanup ([f184316](https://github.com/Liquid-JS/nxt-components/commit/f1843160731c671d2ff1992d2211a637a3cb3fca))
-   **demo:** flags ([cd85139](https://github.com/Liquid-JS/nxt-components/commit/cd85139d8b475b03a20e70c79b27dbfd55673ff0))
-   **demo:** flags demo ([6233462](https://github.com/Liquid-JS/nxt-components/commit/623346276ddfe72b7726d45564ebc5573e8ba39c))
-   **demo:** home page ([1071c73](https://github.com/Liquid-JS/nxt-components/commit/1071c73a35b4383562df22df971d48ae3198e1f5))
-   **demo:** json view demo ([82a6ad8](https://github.com/Liquid-JS/nxt-components/commit/82a6ad8d43084e86025bb9ae483e062e2fb33bcd))
-   **demo:** navigation, styling ([66f38ae](https://github.com/Liquid-JS/nxt-components/commit/66f38ae29fd5ab699d8aa8ee13d40da25f4324be))
-   **demo:** organise sortablejs ([254aa82](https://github.com/Liquid-JS/nxt-components/commit/254aa82836210f5696a9d7297dcde60df5c4b570))
-   **demo:** pick datetime ([b732940](https://github.com/Liquid-JS/nxt-components/commit/b7329405c04c1d2081c2f1c172f77f9fe266d185))
-   **demo:** sortablejs ([054b08c](https://github.com/Liquid-JS/nxt-components/commit/054b08c40cf413cc6807a741186fb9d734685db6))
-   flags bp ([0361112](https://github.com/Liquid-JS/nxt-components/commit/0361112529bf3a20a109b3d1c7f9f06697e964cc))
-   improve demo, add build scripts ([a37d482](https://github.com/Liquid-JS/nxt-components/commit/a37d482fa840831a612966d2a0a78c712c30a540))
-   Inline templates and CSS ([a4191a2](https://github.com/Liquid-JS/nxt-components/commit/a4191a2ff839256da0326f487394fcafe1327f2b))
-   migrate ([f2e45f5](https://github.com/Liquid-JS/nxt-components/commit/f2e45f52617961f202a7c637b9996906d1a97911))
-   migrate to @angular/cli and angular 8 ([1139699](https://github.com/Liquid-JS/nxt-components/commit/11396994e12bb43a028c66cb753226ca4a37435d))
-   migrate to angular 10 ([6e65e1c](https://github.com/Liquid-JS/nxt-components/commit/6e65e1c6c49cb90a8e130b2607470cde5da3f952))
-   migrate to Angular 11 ([2acf12e](https://github.com/Liquid-JS/nxt-components/commit/2acf12e239e3f97ef4c26ea52295ae4007197798))
-   missing ISO flags ([55c8fa9](https://github.com/Liquid-JS/nxt-components/commit/55c8fa9ee27d07f3d1b55606ee2e0bace0901402))
-   move ([925c8de](https://github.com/Liquid-JS/nxt-components/commit/925c8deacd8d1b94d27c4a7304b75560b6b96723))
-   move ([f8ed2e6](https://github.com/Liquid-JS/nxt-components/commit/f8ed2e640fa5224908c33e144646a307522c4bdc))
-   move ([ad497a0](https://github.com/Liquid-JS/nxt-components/commit/ad497a03d754390e4c1c1c8f2895388c89e0fead))
-   **nxt-dropzone-wrapper:** cleanup ([43871d2](https://github.com/Liquid-JS/nxt-components/commit/43871d22c51a4860b89169919c67e173bb9354c5))
-   **nxt-json-view:** tooling config ([f981fd8](https://github.com/Liquid-JS/nxt-components/commit/f981fd87b077f33fc0e0111f848c6d00c1412970))
-   **nxt-pick-datetime:** add explicit null ([40f632e](https://github.com/Liquid-JS/nxt-components/commit/40f632e6a772054db43eefef24bf62b9c976c2da))
-   **nxt-pick-datetime:** null safety ([df60d2b](https://github.com/Liquid-JS/nxt-components/commit/df60d2bd6a53a4badc7f65e8ad95640c67be54db))
-   **nxt-sortablejs:** format, fix null checks ([8d5b109](https://github.com/Liquid-JS/nxt-components/commit/8d5b109e10b5f051c40d0e2c89d707b979a141ba))
-   **nxt-sortablejs:** import ([f060856](https://github.com/Liquid-JS/nxt-components/commit/f060856a64e86a763b64d22e2f1f7359f4337bdf))
-   sanity check ([ffc9f29](https://github.com/Liquid-JS/nxt-components/commit/ffc9f29238afb0742647233b3a6cfc0df4f4fe16))
-   cloneFunction restricts type may cause compile failed when using ivy ([a9dbb81](https://github.com/Liquid-JS/nxt-components/commit/a9dbb81efbab7d740f177635738990e0c7a4d34e))
-   **universal:** support for angular universal ([d727e0f](https://github.com/Liquid-JS/nxt-components/commit/d727e0fb88a96e1d90bafb9ecf56fc2fe33c9ced))
-   update for angular 13, improve ci ([b1b7acf](https://github.com/Liquid-JS/nxt-components/commit/b1b7acf972f9afe3e42c6cf5fab2cb1d1f865739))
-   update to angular 14 ([594d7db](https://github.com/Liquid-JS/nxt-components/commit/594d7db384e5f4d80e9e6de0e731d8f31f7dfd2d))
-   upgrade to 13 ([6e74ad2](https://github.com/Liquid-JS/nxt-components/commit/6e74ad299c7f0e544a337e9ca46c0729b34b51bb))
-   Upgrade to Angular v10 ([#7](https://github.com/Liquid-JS/nxt-components/issues/7)) ([a8520a5](https://github.com/Liquid-JS/nxt-components/commit/a8520a5f4df61dc5a6d83a1351c8a55ac445bd34))
-   Upgrade to Angular v5 compilation format ([3dde557](https://github.com/Liquid-JS/nxt-components/commit/3dde557c3c0963b81ace3b9a0af8e98abcebf041))
-   Upgrade to Angular v9 ([#6](https://github.com/Liquid-JS/nxt-components/issues/6)) ([9c7256b](https://github.com/Liquid-JS/nxt-components/commit/9c7256ba3224ed7e586c652be8affc6b013aa665))
-   use angular i18n for preset colors ([c0e570e](https://github.com/Liquid-JS/nxt-components/commit/c0e570e883df237bf5e5c8dc0ee0762a2b93355d))
-   use angular i18n for texts ([74d8b86](https://github.com/Liquid-JS/nxt-components/commit/74d8b8661aef9e2376c52669be8bae0624cf0110))
-   use cdk for pop-up ([0a3c5ba](https://github.com/Liquid-JS/nxt-components/commit/0a3c5ba7df578598155a8462e0b0d276e5183370))

### BREAKING CHANGES

-   rename `cp => nxt`, remove `cp` prefixes for property names
-   add `NXT_` prefix to dropzone config injection token
-   rename `NxtJsonViewModule` to `JsonViewModule`
-   renamed `<dropzone>` to `<nxt-dropzone>` and `[dropzone]` to `[nxtDropzone]`
-   library name is changed from angular-sortablejs to ngx-sortablejs
