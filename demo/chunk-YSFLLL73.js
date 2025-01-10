import{a as g}from"./chunk-UM77ZM5I.js";import{a as u}from"./chunk-BVQV7D7V.js";import{a as c}from"./chunk-TYJZYZCS.js";import"./chunk-KLEC3D7A.js";import"./chunk-CBYCLGJY.js";import"./chunk-7JRM75ZM.js";import"./chunk-7FVDTXXG.js";import"./chunk-AEVFSNL7.js";import{$a as r,Eb as i,Fb as t,Gb as n,Yc as d,_b as e,gc as s,lb as m,yb as a}from"./chunk-DIWKY5NV.js";import"./chunk-FBFWB55K.js";var h=()=>["shell"],S=()=>["json"],b=()=>["typescript"],C=(()=>{class l{constructor(){this.installScript="ng add nxt-sitemap",this.importGlobal="ng run project:sitemap",this.importLocal=`{
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
}`}static{this.\u0275fac=function(o){return new(o||l)}}static{this.\u0275cmp=m({type:l,selectors:[["app-sitemap"]],decls:51,vars:12,consts:[["title","nxt-sitemap","description","Angular builder for generating sitemap from prerendered routes."],["href","https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE"],["src","https://img.shields.io/github/license/Liquid-JS/nxt-components.svg","alt","GitHub license"],["href","https://www.npmjs.com/package/nxt-sitemap"],["src","https://img.shields.io/npm/dm/nxt-sitemap.svg","alt","npm"],["src","https://img.shields.io/npm/v/nxt-sitemap.svg","alt","scope"],["href","https://liquid-js.github.io/nxt-components/nxt-sitemap"],[1,"no-padding"],[1,"h4"],[3,"code","languages"],["href","https://github.com/angular/angular/issues/16051"],["href","https://github.com/angular/angular/issues/16051#issuecomment-575346573"]],template:function(o,p){o&1&&(n(0,"app-meta",0),i(1,"app-content-wrap")(2,"h1"),e(3,"Angular Sitemap builder"),t(),i(4,"p")(5,"a",1),n(6,"img",2),t(),e(7,"\xA0 "),i(8,"a",3),n(9,"img",4),t(),e(10,"\xA0 "),i(11,"a",3),n(12,"img",5),t()(),i(13,"p"),e(14,"This package provides an Angular CLI builder to generate a sitemap from prerendered pages when using "),i(15,"code"),e(16,"@angular/ssr"),t(),e(17,"."),t(),i(18,"ul")(19,"li")(20,"a",6)(21,"strong"),e(22,"API docs"),t()()()(),n(23,"br"),i(24,"h2"),e(25,"Getting started"),t(),n(26,"hr",7)(27,"br"),i(28,"h3",8),e(29,"Installing"),t(),n(30,"app-code-block",9)(31,"br"),i(32,"h3",8),e(33,"Configuring the builder"),t(),n(34,"app-code-block",9)(35,"br"),i(36,"h3",8),e(37,"Generating the sitemap"),t(),n(38,"app-code-block",9)(39,"br"),i(40,"h3",8),e(41,"Prerendered URLs in Angular"),t(),i(42,"p"),e(43,"As described in "),i(44,"a",10),e(45,"#16051"),t(),e(46,", Angular router, by default, removes trailing slashes from URLs; however, when serving prerendered pages most web servers add trailing slash which causes unneccessary redirects and degraded SEO performance. To avoid this, consider including the following code in your app configuration (based on "),i(47,"a",11),e(48,"#16051 (comment)"),t(),e(49,"):"),t(),n(50,"app-code-block",9),t()),o&2&&(r(30),a("code",p.installScript)("languages",s(8,h)),r(4),a("code",p.importLocal)("languages",s(9,S)),r(4),a("code",p.importGlobal)("languages",s(10,h)),r(12),a("code",p.includeHTML)("languages",s(11,b)))},dependencies:[d,g,u,c],encapsulation:2})}}return l})();export{C as AppSitemapComponent};
