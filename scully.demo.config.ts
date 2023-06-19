import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap'
import { ScullyConfig, setPluginConfig } from '@scullyio/scully'
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite'
import '@scullyio/scully-plugin-puppeteer'

const SitemapPlugin = getSitemapPlugin()

setPluginConfig(SitemapPlugin, {
    urlPrefix: 'https://liquid-js.github.io/nxt-components/demo',
    sitemapFilename: 'sitemap.xml',
    changeFreq: 'monthly',
    priority: [
        '1.0',
        '0.9',
        '0.8',
        '0.7',
        '0.6',
        '0.5',
        '0.4',
        '0.3',
        '0.2',
        '0.1',
        '0.0'
    ],
    trailingSlash: true,
    ignoredRoutes: ['/404']
})

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite]
setPluginConfig(baseHrefRewrite, { href: '/nxt-components/demo/' })

export const config: ScullyConfig = {
    projectRoot: './packages/demo/src',
    projectName: 'demo',
    defaultPostRenderers,
    outDir: './docs/demo',
    routes: {
    }
}
