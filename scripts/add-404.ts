import { readFile, writeFile } from 'fs/promises'

readFile('docs/demo/index.html', 'utf8')
    .then(async content => {
        content = content.replace('</head>', `<script type="text/javascript">
    if(!window.location.pathname.startsWith('/nxt-components/demo'))
        window.location.replace('/nxt-components/demo')
</script></head>`)
        await writeFile('docs/404.html', content, 'utf8')
    })
    .catch(console.error)
