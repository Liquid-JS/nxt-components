# Angular Sitemap builder

[![GitHub license](https://img.shields.io/github/license/Liquid-JS/nxt-components.svg)](https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/nxt-sitemap.svg)](https://www.npmjs.com/package/nxt-sitemap)
[![scope](https://img.shields.io/npm/v/nxt-sitemap.svg)](https://www.npmjs.com/package/nxt-sitemap)

Angular builder for generating sitemap from prerendered routes.

## Quick links

-   [Getting started](https://liquid-js.github.io/nxt-components/demo/sitemap)
-   [API docs](https://liquid-js.github.io/nxt-components/nxt-sitemap)

### Installing

```sh
ng add nxt-sitemap
```

### Configuring the builder

```json
{
    "build": { 
        ...
    },
    "sitemap": {
        "builder": "nxt-sitemap:sitemap",
        "options": {
            "srcDirectory": "./dist/demo/browser",
            "baseUrl": "https://liquid-js.github.io/nxt-components/demo"
        }
    }
}
```

### Generating the sitemap

```sh
ng run project:sitemap
```

### Prerendered urls in Angular

As described in [#16051](https://github.com/angular/angular/issues/16051), Angular router, by default, removes trailing slashes from urls; however, when serving prerendered pages most web servers add trailing slash which causes unneccessary redirects and degraded SEO performance. To avoid this, consider including the following code in your app configuration (based on [#16051 (comment)](https://github.com/angular/angular/issues/16051#issuecomment-575346573)):

```ts
import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router'

export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
    override serialize(tree: UrlTree): string {
        return this._withTrailingSlash(super.serialize(tree))
    }

    private _withTrailingSlash(url: string): string {
        const splitOn = url.indexOf('?') > -1 ? '?' : '#'
        const pathArr = url.split(splitOn)

        if (!pathArr[0].endsWith('/')) {
            const fileName: string = url.substring(url.lastIndexOf('/') + 1)
            if (fileName.indexOf('.') === -1) {
                pathArr[0] += '/'
            }
        }
        return pathArr.join(splitOn)
    }
}

export const appConfig: ApplicationConfig = {
    providers: [
        ...
        {
            provide: UrlSerializer,
            useClass: TrailingSlashUrlSerializer
        },
        ...
    ]
}
```
