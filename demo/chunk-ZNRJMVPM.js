import{a as L,b as M,c as j,d as $}from"./chunk-ZYK6OKVL.js";import{a as V,b as q,c as N}from"./chunk-6TVYQ3XE.js";import{a as G}from"./chunk-ZBKZT2L3.js";import{a as O}from"./chunk-GCMA5LZM.js";import"./chunk-47VYZGKM.js";import"./chunk-GWRIFBQG.js";import{c as P,g as I}from"./chunk-KFRXRWD3.js";import"./chunk-VU6YXVQF.js";import"./chunk-EXM4H7MB.js";import"./chunk-GY4FM7MU.js";import{$a as p,$b as E,Eb as i,Fb as e,Gb as l,Kb as S,Ob as D,Pc as T,Qb as g,Qc as A,Ub as h,Vc as B,Yc as F,_b as r,ab as u,kc as x,lb as w,lc as f,ma as _,na as k,pb as C,rb as s,sa as b,va as v,yb as m}from"./chunk-VG3EUPM3.js";import{d as c}from"./chunk-FBFWB55K.js";var J=c({"../examples/basic-example/basic-example.component.ts":()=>import("./chunk-Q4HA577C.js"),"../examples/calendar-only/calendar-only.component.ts":()=>import("./chunk-OWUNGQVS.js"),"../examples/filter-restriction/filter-restriction.component.ts":()=>import("./chunk-VJJA3P3V.js"),"../examples/min-max/min-max.component.ts":()=>import("./chunk-25RI3TGU.js"),"../examples/select-range/select-range.component.ts":()=>import("./chunk-HOSBX2KQ.js"),"../examples/time-only/time-only.component.ts":()=>import("./chunk-56LZODMU.js"),"../examples/trigger-icon/trigger-icon.component.ts":()=>import("./chunk-5URD7GP3.js")});var R=c({"../examples/basic-example/basic-example.component.ts":()=>import("./chunk-XLKTEN3D.js"),"../examples/calendar-only/calendar-only.component.ts":()=>import("./chunk-AJWNLMZJ.js"),"../examples/filter-restriction/filter-restriction.component.ts":()=>import("./chunk-CDR7RL4Y.js"),"../examples/min-max/min-max.component.ts":()=>import("./chunk-ANNPK2YZ.js"),"../examples/select-range/select-range.component.ts":()=>import("./chunk-EOWZZCPH.js"),"../examples/time-only/time-only.component.ts":()=>import("./chunk-R6FOH6YV.js"),"../examples/trigger-icon/trigger-icon.component.ts":()=>import("./chunk-XUD6W6KA.js")});var W=c({"../examples/basic-example/basic-example.component.html":()=>import("./chunk-VHRNPJG3.js"),"../examples/basic-example/basic-example.component.scss":()=>import("./chunk-PAQCAPWD.js"),"../examples/basic-example/basic-example.component.ts":()=>import("./chunk-Q4HA577C.js"),"../examples/calendar-only/calendar-only.component.html":()=>import("./chunk-5OY35QSP.js"),"../examples/calendar-only/calendar-only.component.scss":()=>import("./chunk-RKUL54TX.js"),"../examples/calendar-only/calendar-only.component.ts":()=>import("./chunk-OWUNGQVS.js"),"../examples/filter-restriction/filter-restriction.component.html":()=>import("./chunk-HO7WHZVE.js"),"../examples/filter-restriction/filter-restriction.component.scss":()=>import("./chunk-NTZOXGKQ.js"),"../examples/filter-restriction/filter-restriction.component.ts":()=>import("./chunk-VJJA3P3V.js"),"../examples/min-max/min-max.component.html":()=>import("./chunk-O2TTAVTZ.js"),"../examples/min-max/min-max.component.scss":()=>import("./chunk-4GVWM445.js"),"../examples/min-max/min-max.component.ts":()=>import("./chunk-25RI3TGU.js"),"../examples/select-range/select-range.component.html":()=>import("./chunk-HLFDELNZ.js"),"../examples/select-range/select-range.component.scss":()=>import("./chunk-CRA3GH67.js"),"../examples/select-range/select-range.component.ts":()=>import("./chunk-HOSBX2KQ.js"),"../examples/time-only/time-only.component.html":()=>import("./chunk-FL4KBBQJ.js"),"../examples/time-only/time-only.component.scss":()=>import("./chunk-OGCHG5NL.js"),"../examples/time-only/time-only.component.ts":()=>import("./chunk-56LZODMU.js"),"../examples/trigger-icon/trigger-icon.component.html":()=>import("./chunk-L6NAYI7N.js"),"../examples/trigger-icon/trigger-icon.component.scss":()=>import("./chunk-2PINQFO4.js"),"../examples/trigger-icon/trigger-icon.component.ts":()=>import("./chunk-5URD7GP3.js")});function H(n,d){if(n&1){let o=S();i(0,"app-meta",14),D("done",function(){_(o);let t=g();return k(t.doneCb())}),e()}}function z(n,d){if(n&1&&(i(0,"li",17)(1,"a",18),r(2),e()()),n&2){let o=d.$implicit,a=d.index;p(),h("fragment","example-",a,""),p(),E(o.name)}}function K(n,d){if(n&1&&(i(0,"ul",15),s(1,z,3,3,"li",16),x(2,"async"),e()),n&2){let o=g();p(),m("ngForOf",f(2,2,o.examples))("ngForTrackBy",o.exampleTrackBy)}}function Q(n,d){if(n&1&&l(0,"app-example",19),n&2){let o=d.$implicit,a=d.index,t=g();h("id","example-",a,""),m("injector",t.injector)("config",o)}}var ge=(()=>{class n extends N{constructor(o,a){super(),this.injector=o,this.ims=a,this.examples=Promise.all(new Array({path:"basic-example",name:"Basic usage",include:["html","ts"]},{path:"calendar-only",name:"Calendar only",include:["html"]},{path:"time-only",name:"Time only",include:["html"]},{path:"trigger-icon",name:"Trigger via an icon",include:["html"]},{path:"select-range",name:"Select range",include:["html","ts"]},{path:"min-max",name:"Min and max date",include:["html","ts"]},{path:"filter-restriction",name:"Filter available dates",include:["html","ts"]}).map(t=>Promise.all([J(`../examples/${t.path}/${t.path}.component.ts`),...t.include.map(y=>y=="ts"?R(`../examples/${t.path}/${t.path}.component.ts`):W(`../examples/${t.path}/${t.path}.component.${y}`))]).then(V(t,"pick-datetime/examples")))),this.doneCb=this.ims.add()}ngOnInit(){this.examples.then(()=>this.doneLoading()).catch(console.error)}exampleTrackBy(o,a){return a.component}static{this.\u0275fac=function(a){return new(a||n)(u(b),u(v))}}static{this.\u0275cmp=w({type:n,selectors:[["app-pick-datetime"]],features:[C],decls:47,vars:9,consts:[["title","nxt-pick-datetime","description","Simple responsive Angular date and time picker.",3,"done",4,"ngIf"],["href","https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE"],["src","https://img.shields.io/github/license/Liquid-JS/nxt-components.svg","alt","GitHub license"],["href","https://www.npmjs.com/package/nxt-pick-datetime"],["src","https://img.shields.io/npm/dm/nxt-pick-datetime.svg","alt","npm"],["src","https://img.shields.io/npm/v/nxt-pick-datetime.svg","alt","scope"],[3,"routerLink"],["href","https://liquid-js.github.io/nxt-components/nxt-pick-datetime"],["dropdown","",1,"btn-group"],["id","button-basic","dropdownToggle","","type","button","aria-controls","dropdown-basic",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],["id","dropdown-basic","class","dropdown-menu","role","menu","aria-labelledby","button-basic",4,"dropdownMenu"],[1,"no-padding"],[3,"injector","config","id",4,"ngFor","ngForOf","ngForTrackBy"],["title","nxt-pick-datetime","description","Simple responsive Angular date and time picker.",3,"done"],["id","dropdown-basic","role","menu","aria-labelledby","button-basic",1,"dropdown-menu"],["role","menuitem",4,"ngFor","ngForOf","ngForTrackBy"],["role","menuitem"],["routerLink",".",1,"dropdown-item",3,"fragment"],[3,"injector","config","id"]],template:function(a,t){a&1&&(s(0,H,1,0,"app-meta",0),i(1,"app-content-wrap")(2,"h1"),r(3,"Angular date & time picker"),e(),i(4,"p")(5,"a",1),l(6,"img",2),e(),r(7,"\xA0 "),i(8,"a",3),l(9,"img",4),e(),r(10,"\xA0 "),i(11,"a",3),l(12,"img",5),e()(),i(13,"p"),r(14,"Simple responsive Angular date and time picker."),e(),i(15,"ul")(16,"li")(17,"a",6)(18,"strong"),r(19,"Getting started"),e()()(),i(20,"li")(21,"a",6)(22,"strong"),r(23,"Accessibility"),e()()(),i(24,"li")(25,"a",6)(26,"strong"),r(27,"Validation"),e()()(),i(28,"li")(29,"a",6)(30,"strong"),r(31,"Custom date adapter"),e()()(),i(32,"li")(33,"a",7)(34,"strong"),r(35,"API docs"),e()()()(),l(36,"br"),i(37,"h2"),r(38,"Demo "),i(39,"div",8)(40,"button",9),r(41," Go to "),l(42,"span",10),e(),s(43,K,3,4,"ul",11),e()(),l(44,"hr",12),s(45,Q,1,4,"app-example",13),x(46,"async"),e()),a&2&&(m("ngIf",!t.loading),p(17),m("routerLink","./getting-started"),p(4),m("routerLink","./accessibility"),p(4),m("routerLink","./validation"),p(4),m("routerLink","./custom-adapter"),p(16),m("ngForOf",f(46,7,t.examples))("ngForTrackBy",t.exampleTrackBy))},dependencies:[G,O,q,F,T,A,B,I,P,$,M,j,L],styles:["hr[_ngcontent-%COMP%]{padding:0;padding-top:1rem;border:none;border-top:1px solid rgba(33,37,41,.25);margin:0;margin-top:2rem;opacity:1}hr.no-padding[_ngcontent-%COMP%]{padding-top:0}"]})}}return n})();export{ge as AppPickDatetimeComponent};
