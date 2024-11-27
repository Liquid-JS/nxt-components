import { cp, readFile, writeFile } from 'fs/promises'

await cp('dist/demo/browser', 'docs/demo', { recursive: true })

readFile('docs/demo/index.html', 'utf8')
    .then(async content => {
        content = content.replace('</head>', `<script type="text/javascript">
    if(!window.location.pathname.startsWith('/nxt-components/demo'))
        window.location.replace('/nxt-components/demo')
</script></head>`)
        await writeFile('docs/404.html', content, 'utf8')
    })
    .catch(console.error)

readFile('resources/google9e159bb1235d6af3.html', 'utf8')
    .then(async content => {
        await writeFile('docs/google9e159bb1235d6af3.html', content, 'utf8')
    })
    .catch(console.error)

readFile('docs/demo/ngsw.json', 'utf8')
    .then(async content => {
        const prefix = '/nxt-components/demo'
        const c = JSON.parse(content)
        c.index = prefix + c.index
        c.hashTable = Object.fromEntries(Object.entries(c.hashTable).map(([k, v]) => [prefix + k, v]))
        c.assetGroups.forEach((g: any) => g.urls = g.urls.map((u: any) => prefix + u))
        await writeFile('docs/demo/ngsw.json', JSON.stringify(c, undefined, 2), 'utf8')
    })
    .catch(console.error)
