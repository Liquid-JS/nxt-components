import { readFile } from 'fs/promises'
import { globby } from 'globby'
import semver from 'semver'

globby('./dist/*/fesm*/**', {
    onlyFiles: true
})
    .then(async files => {
        const versions = new Set<string>()
        await Promise.all(files.map(f => readFile(f, 'utf8')
            .then(cont => {
                for (const m of cont.matchAll(/minVersion: "([^"]+)"/igm))
                    versions.add(m[1])
            })
        ))
        const min = [...versions].sort(semver.compare).reverse()[0]
        console.log(min)
        //const pkgs = await globby('./dist/*/package.json')
        /*await Promise.all(pkgs.map(async p => {
            const ct = await readFile(p, 'utf8')
            const js = JSON.parse(ct)
            Object.keys(js)
                .filter(k => k.toLowerCase().endsWith('dependencies'))
                .map(k => {
                    Object.keys(js[k])
                        .filter(pr => pr.startsWith('@angular/'))
                        .map(pr => js[k][pr] = `>=${min}`)
                })
            await writeFile(p, JSON.stringify(js, undefined, 2))
        }))*/
    })
    .catch(console.error)
