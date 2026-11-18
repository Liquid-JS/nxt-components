import{t as Ht}from"./chunk-8aGTNAAo.js";import"./chunk-B3srRVBE.js";import{n as b,t as S$1}from"./chunk-IcDNAYhK.js";import"./main-7IQ42RCL.js";import"./chunk-Csat7SFd.js";import{Ar as tv,Ft as W_,a as Au,ar as nv,br as rw,hr as rM,ht as QC,zr as vs}from"./chunk-Cw6fPprD.js";import"./chunk-B_U_B7EY.js";var g=()=>[`shell`];var f=()=>[`json`];var S=()=>[`typescript`];var A=(()=>{class l{constructor(){this.installScript=`ng add nxt-sitemap`,this.importGlobal=`ng run project:sitemap`,this.importLocal=`{
    "build": { 
        "..."
    },
    "sitemap": {
        "builder": "nxt-sitemap:sitemap",
        "options": {
            "srcDirectory": "./dist/demo/browser",
            "baseUrl": "https://liquid-js.github.io/nxt-components/demo"
        }
    }
}`,this.includeHTML=`import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router'

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
}`}static{this.ɵfac=function(o){return new(o||l)}}static{this.ɵcmp=QC({type:l,selectors:[[`app-sitemap`]],decls:51,vars:12,consts:[[`title`,`nxt-sitemap`,`description`,`Angular builder for generating sitemap from prerendered routes.`],[`href`,`https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE`],[`src`,`https://img.shields.io/github/license/Liquid-JS/nxt-components.svg`,`alt`,`GitHub license`],[`href`,`https://www.npmjs.com/package/nxt-sitemap`],[`src`,`https://img.shields.io/npm/dm/nxt-sitemap.svg`,`alt`,`npm`],[`src`,`https://img.shields.io/npm/v/nxt-sitemap.svg`,`alt`,`scope`],[`href`,`https://liquid-js.github.io/nxt-components/nxt-sitemap`],[1,`no-padding`],[1,`h4`],[3,`code`,`languages`],[`href`,`https://github.com/angular/angular/issues/16051`],[`href`,`https://github.com/angular/angular/issues/16051#issuecomment-575346573`]],template:function(o,p){o&1&&(nv(0,`app-meta`,0),vs(1,`app-content-wrap`)(2,`h1`),W_(3,`Angular Sitemap builder`),Au(),vs(4,`p`)(5,`a`,1),nv(6,`img`,2),Au(),W_(7,`\xA0 `),vs(8,`a`,3),nv(9,`img`,4),Au(),W_(10,`\xA0 `),vs(11,`a`,3),nv(12,`img`,5),Au()(),vs(13,`p`),W_(14,`This package provides an Angular CLI builder to generate a sitemap from prerendered pages when using `),vs(15,`code`),W_(16,`@angular/ssr`),Au(),W_(17,`.`),Au(),vs(18,`ul`)(19,`li`)(20,`a`,6)(21,`strong`),W_(22,`API docs`),Au()()()(),nv(23,`br`),vs(24,`h2`),W_(25,`Getting started`),Au(),nv(26,`hr`,7)(27,`br`),vs(28,`h3`,8),W_(29,`Installing`),Au(),nv(30,`app-code-block`,9)(31,`br`),vs(32,`h3`,8),W_(33,`Configuring the builder`),Au(),nv(34,`app-code-block`,9)(35,`br`),vs(36,`h3`,8),W_(37,`Generating the sitemap`),Au(),nv(38,`app-code-block`,9)(39,`br`),vs(40,`h3`,8),W_(41,`Prerendered URLs in Angular`),Au(),vs(42,`p`),W_(43,`As described in `),vs(44,`a`,10),W_(45,`#16051`),Au(),W_(46,`, Angular router, by default, removes trailing slashes from URLs; however, when serving prerendered pages most web servers add trailing slash which causes unneccessary redirects and degraded SEO performance. To avoid this, consider including the following code in your app configuration (based on `),vs(47,`a`,11),W_(48,`#16051 (comment)`),Au(),W_(49,`):`),Au(),nv(50,`app-code-block`,9),Au()),o&2&&(rw(30),tv(`code`,p.installScript)(`languages`,rM(8,g)),rw(4),tv(`code`,p.importLocal)(`languages`,rM(9,f)),rw(4),tv(`code`,p.importGlobal)(`languages`,rM(10,g)),rw(12),tv(`code`,p.includeHTML)(`languages`,rM(11,S)))},dependencies:[Ht,S$1,b],encapsulation:2})}}return l})();export{A as AppSitemapComponent};