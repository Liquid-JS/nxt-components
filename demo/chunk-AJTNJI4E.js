import{a as H,b as B,c as P}from"./chunk-DRPRKRHW.js";import{a as M}from"./chunk-R3V7K52A.js";import{a as $}from"./chunk-7VPBLEGZ.js";import{e as L,i as F}from"./chunk-5S6S57TL.js";import"./chunk-LMFH6LDM.js";import"./chunk-VXOG6CLE.js";import"./chunk-XHE7RL6G.js";import{Hb as n,Ib as i,Jb as m,Nb as C,Rb as y,Sc as A,Tb as d,Tc as T,Xb as b,Yc as I,ab as l,ad as k,bb as c,bc as p,ka as f,la as x,mb as v,nc as E,oc as w,qa as j,qb as S,sb as g,ua as _,zb as s}from"./chunk-JSDYMTJZ.js";import{d as a}from"./chunk-FBFWB55K.js";var R=a({"../examples/basic-example/basic-example.component.ts":()=>import("./chunk-NQTA77GK.js")});var D=a({"../examples/basic-example/basic-example.component.ts":()=>import("./chunk-I5MG7HI7.js")});var O=a({"../examples/basic-example/basic-example.component.html":()=>import("./chunk-7Q5MYIQU.js"),"../examples/basic-example/basic-example.component.scss":()=>import("./chunk-MTTQVMT4.js"),"../examples/basic-example/basic-example.component.ts":()=>import("./chunk-NQTA77GK.js")});function V(o,h){if(o&1){let r=C();n(0,"app-meta",9),y("done",function(){f(r);let e=d();return x(e.doneCb())}),i()}}function q(o,h){if(o&1&&m(0,"app-example",10),o&2){let r=h.$implicit,t=h.index,e=d();b("id","example-",t,""),s("injector",e.injector)("config",r)("asTab",!0)}}var oe=(()=>{class o extends P{constructor(r,t){super(),this.injector=r,this.ims=t,this.examples=Promise.all(new Array({path:"basic-example",name:"Basic usage",include:["html","ts"]}).map(e=>Promise.all([R(`../examples/${e.path}/${e.path}.component.ts`),...e.include.map(u=>u=="ts"?D(`../examples/${e.path}/${e.path}.component.ts`):O(`../examples/${e.path}/${e.path}.component.${u}`))]).then(H(e,"flags/examples")))),this.doneCb=this.ims.add()}ngOnInit(){this.examples.then(()=>this.doneLoading()).catch(console.error)}exampleTrackBy(r,t){return t.component}static{this.\u0275fac=function(t){return new(t||o)(c(j),c(_))}}static{this.\u0275cmp=v({type:o,selectors:[["app-highlightjs"]],features:[S],decls:30,vars:7,consts:[["title","nxt-highlightjs","description","Angular code highlighting directives with optional line numbers and support for SSR.",3,"done",4,"ngIf"],["href","https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE"],["src","https://img.shields.io/github/license/Liquid-JS/nxt-components.svg","alt","GitHub license"],["href","https://www.npmjs.com/package/nxt-highlightjs"],["src","https://img.shields.io/npm/dm/nxt-highlightjs.svg","alt","npm"],["src","https://img.shields.io/npm/v/nxt-highlightjs.svg","alt","scope"],[3,"routerLink"],["href","https://liquid-js.github.io/nxt-components/nxt-highlightjs"],[3,"injector","config","asTab","id",4,"ngFor","ngForOf","ngForTrackBy"],["title","nxt-highlightjs","description","Angular code highlighting directives with optional line numbers and support for SSR.",3,"done"],[3,"injector","config","asTab","id"]],template:function(t,e){t&1&&(g(0,V,1,0,"app-meta",0),n(1,"app-content-wrap")(2,"h1"),p(3,"Angular Highlight.js directives"),i(),n(4,"p")(5,"a",1),m(6,"img",2),i(),p(7,"\xA0 "),n(8,"a",3),m(9,"img",4),i(),p(10,"\xA0 "),n(11,"a",3),m(12,"img",5),i()(),n(13,"p"),p(14,"Angular code highlighting directives with optional line numbers and support for SSR."),i(),n(15,"ul")(16,"li")(17,"a",6)(18,"strong"),p(19,"Getting started"),i()()(),n(20,"li")(21,"a",6)(22,"strong"),p(23,"Extras"),i()()(),n(24,"li")(25,"a",7)(26,"strong"),p(27,"API docs"),i()()()(),g(28,q,1,5,"app-example",8),E(29,"async"),i()),t&2&&(s("ngIf",!e.loading),l(17),s("routerLink","./getting-started"),l(4),s("routerLink","./extras"),l(7),s("ngForOf",w(29,5,e.examples))("ngForTrackBy",e.exampleTrackBy))},dependencies:[k,A,T,I,M,$,B,F,L],encapsulation:2})}}return o})();export{oe as AppHighlightjsComponent};
