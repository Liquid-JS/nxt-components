import { createWriteStream } from 'fs'
import { readdir } from 'fs/promises'
import { join, normalize } from 'path'
import { Stream } from 'stream'
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect'
import { Builder } from '@angular-devkit/architect/src/internal'
import { JsonObject } from '@angular-devkit/core'
import { SitemapStream } from 'sitemap'
import { SitemapBuilderOptions } from './schema'

/**
 * @internal
 */
async function findFiles(dir: string, fileName: string, prefix = ''): Promise<string[]> {
    const results = new Array<string>()
    const entries = await readdir(dir, { withFileTypes: true })

    for (const entry of entries) {
        const fullPath = join(dir, entry.name)
        if (entry.isDirectory()) {
            const subDirFiles = await findFiles(fullPath, fileName, join(prefix, entry.name).replace(/\\/g, '/'))
            results.push(...subDirFiles)
        } else if (entry.isFile() && entry.name === fileName) {
            results.push(prefix)
        }
    }

    return results
}

/**
 * @internal
 */
function withTrailingSlash(text: string) {
    if (!text.endsWith('/')) {
        return text + '/'
    }
    return text
}

/**
 * @internal
 */
function streamToPromise(stream: Stream) {
    return new Promise<void>((resolve, reject) => {
        stream
            .on('error', reject)
            .on('finish', () => {
                resolve()
            })
    })
}

/**
 * Angular builder for generating sitemap from prerendered routes
 */
const sitemapBuilder: Builder<SitemapBuilderOptions & JsonObject> = createBuilder(async (options: SitemapBuilderOptions, context: BuilderContext): Promise<BuilderOutput> => {
    const srcDirectory = withTrailingSlash(options.srcDirectory)
    const baseUrl = new URL(withTrailingSlash(options.baseUrl))
    const path = baseUrl.pathname
    const lastmod = options.lastMod == 'today'
        ? new Date()
        : options.lastMod
            ? new Date(options.lastMod)
            : undefined

    const changefreq = options.changeFreq
    const priority = options.priority ?? 0.5

    const targetFile = normalize(join(srcDirectory, 'sitemap.xml'))

    context.reportStatus(`Generating sitemap in ${targetFile}.`)

    try {
        const files = await findFiles(srcDirectory, 'index.html')

        if (!files.length) {
            throw new Error(`No matching files found in ${srcDirectory}.`)
        }

        const sitemap = new SitemapStream({ hostname: options.baseUrl })
        const target = createWriteStream(targetFile)
        const promise = streamToPromise(sitemap.pipe(target))

        files.forEach(file => {
            let pathname = path + file
            if (!options.trailingSlash && pathname.endsWith('/'))
                pathname = pathname.substring(0, pathname.length - 1)
            if (options.trailingSlash)
                pathname = withTrailingSlash(pathname)

            sitemap.write({
                url: pathname,
                changefreq,
                priority,
                lastmod
            })
        })
        sitemap.end()

        await promise
    } catch (err) {
        context.logger.error('Failed to generate sitemap.')
        return {
            success: false,
            error: (err as Error).message
        }
    }

    context.reportStatus('Done.')
    return { success: true }
})

export default sitemapBuilder
