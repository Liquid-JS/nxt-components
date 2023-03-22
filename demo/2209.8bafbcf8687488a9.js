(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2209],{2209:(b,f,i)=>{"use strict";i.r(f),i.d(f,{AppJsonViewModule:()=>U});var c=i(9318),n=i(6315),m=i(4514),g=i(7695),h=i(1074),u=i(7670),x=i(4725),y=i(4421),j=i(4303),w=i(2662);const C=JSON.parse('{"wx":[{"name":"JsonViewComponent","id":"component-JsonViewComponent-98cf3d6f63994cc304ae0b94d01f5ece87007558999a465227c8e57e674c6bf62b2714aa56b0ec9664dd5e3e1c369bad3253dfa82477b18bf8aa2d5819416d45","file":"src/lib/json-view/json-view.component.ts","encapsulation":["ViewEncapsulation.Emulated"],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"nxt-json-view","styleUrls":["./json-view.component.scss"],"styles":[],"templateUrl":["./json-view.component.html"],"viewProviders":[],"inputsClass":[{"name":"data","deprecated":false,"deprecationMessage":"","rawdescription":"\\nJSON data, any valid JSON object","description":"<p>JSON data, any valid JSON object</p>\\n","line":12,"type":"any","decorators":[]},{"name":"levelLabels","deprecated":false,"deprecationMessage":"","rawdescription":"\\nCustom labels for elements within the hierarcy","description":"<p>Custom labels for elements within the hierarcy</p>\\n","line":16,"type":"LevelLabels","decorators":[]},{"name":"levelOpen","deprecated":false,"deprecationMessage":"","rawdescription":"\\nInitial number of levels to be expanded","description":"<p>Initial number of levels to be expanded</p>\\n","line":14,"type":"number","decorators":[]}],"outputsClass":[],"propertiesClass":[],"methodsClass":[],"deprecated":false,"deprecationMessage":"","hostBindings":[],"hostListeners":[],"description":"","rawdescription":"\\n","type":"component","assetsDirs":[],"styleUrlsData":[{"data":"\\n","styleUrl":"./json-view.component.scss"}],"stylesData":"","templateData":"<div class=\\"nxt-json-view\\">\\n    <nxt-json-view-item [data]=\\"data\\"\\n        [level]=\\"0\\"\\n        [levelOpen]=\\"levelOpen\\"\\n        [levelLabels]=\\"levelLabels\\"\\n        class=\\"json-view\\"></nxt-json-view-item>\\n</div>\\n"}]}');var e=i(9409),O=i(8322);const J=function(){return["shell"]},_=function(){return["typescript"]},Z=function(){return["html"]};let M=(()=>{class o{constructor(a){this.title=a,this.installScript="npm install --save nxt-json-view",this.importModule="import { JsonViewModule } from 'nxt-json-view'\n\n@NgModule({\n    ...\n    imports: [\n        ...\n        JsonViewModule\n    ]\n})",this.data='data = {\n    "name": "nxt-json-view",\n    "url": "https://github.com/Liquid-JS/nxt-components/tree/master/packages/json-view",\n    "string": "github",\n    "number": 88,\n    "boolean": true,\n    "object": {\n        "obj1": "obj1",\n        "obj2": "obj2",\n        "object": {\n            "obj11": "obj11",\n            "obj22": "obj22"\n        },\n        "emptyArray": []\n    },\n    "array": [\n        1,\n        2,\n        3\n    ],\n    "date": new Date(),\n    "null": null\n}',this.includeHTML='<nxt-json-view [data]="data"></nxt-json-view>',this.componentDocs=C.wx.find(p=>"nxt-json-view"==p.selector),this.inputs=this.componentDocs?.inputsClass.sort((p,v)=>p.line-v.line)??[]}ngOnInit(){this.title.setTitle("Getting started | nxt-json-view")}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(O.Dx))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-getting-started"]],decls:22,vars:13,consts:[[1,"h4"],[3,"code","languages"],[1,"h3"],[3,"inputs"]],template:function(a,p){1&a&&(e.TgZ(0,"app-content-wrap")(1,"h1"),e._uU(2,"Getting started with nxt-json-view"),e.qZA(),e.TgZ(3,"h2",0),e._uU(4,"Installing"),e.qZA(),e._UZ(5,"app-code-block",1)(6,"br"),e.TgZ(7,"h2",0),e._uU(8,"Import JSON view module"),e.qZA(),e._UZ(9,"app-code-block",1)(10,"br"),e.TgZ(11,"h2",0),e._uU(12,"Prepare JSON data"),e.qZA(),e._UZ(13,"app-code-block",1)(14,"br"),e.TgZ(15,"h2",0),e._uU(16,"Use it in a template"),e.qZA(),e._UZ(17,"app-code-block",1)(18,"br"),e.TgZ(19,"h2",2),e._uU(20,"Configuration options"),e.qZA(),e._UZ(21,"app-inputs-table",3),e.qZA()),2&a&&(e.xp6(5),e.Q6J("code",p.installScript)("languages",e.DdM(9,J)),e.xp6(4),e.Q6J("code",p.importModule)("languages",e.DdM(10,_)),e.xp6(4),e.Q6J("code",p.data)("languages",e.DdM(11,_)),e.xp6(4),e.Q6J("code",p.includeHTML)("languages",e.DdM(12,Z)),e.xp6(4),e.Q6J("inputs",p.inputs))},dependencies:[u.u,h.P,y.R]}),o})();function A(o,d){if(1&o&&(e.TgZ(0,"li",15)(1,"a",16),e._uU(2),e.qZA()()),2&o){const a=d.$implicit,p=d.index;e.xp6(1),e.MGl("fragment","example-",p,""),e.xp6(1),e.Oqu(a.name)}}function t(o,d){if(1&o&&(e.TgZ(0,"ul",13),e.YNc(1,A,3,2,"li",14),e.ALo(2,"async"),e.qZA()),2&o){const a=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,a.examples))("ngForTrackBy",a.exampleTrackBy)}}function r(o,d){if(1&o&&e._UZ(0,"app-example",17),2&o){const a=d.$implicit,p=d.index,v=e.oxw();e.MGl("id","example-",p,""),e.Q6J("injector",v.injector)("config",a)}}const l=[{path:"",pathMatch:"full",component:(()=>{class o{constructor(a,p){this.title=a,this.injector=p,this.examples=Promise.all(new Array({path:"basic-example",name:"Basic usage",include:["html","ts"]},{path:"expansion-parameters",name:"With expansion parameters",include:["html"]},{path:"level-labels",name:"With level labels",include:["html","ts"]},{path:"live-test",name:"Live test",include:["html","ts"]}).map(v=>Promise.all([i(3148)(`./${v.path}/${v.path}.component`),...v.include.map(L=>i(1146)(`./${v.path}/${v.path}.component.${L}`))]).then((0,x.c)(v,"json-view/examples"))))}ngOnInit(){this.title.setTitle("nxt-json-view")}exampleTrackBy(a,p){return p.component}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(O.Dx),e.Y36(e.zs3))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-json-view"]],decls:34,vars:5,consts:[["href","https://github.com/Liquid-JS/nxt-components/blob/master/LICENSE"],["src","https://img.shields.io/github/license/Liquid-JS/nxt-components.svg","alt","GitHub license"],["href","https://www.npmjs.com/package/nxt-json-view"],["src","https://img.shields.io/npm/dm/nxt-json-view.svg","alt","npm"],["src","https://img.shields.io/npm/v/nxt-json-view.svg","alt","scope"],[3,"routerLink"],["href","https://liquid-js.github.io/nxt-components/nxt-json-view"],["dropdown","",1,"btn-group"],["id","button-basic","dropdownToggle","","type","button","aria-controls","dropdown-basic",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],["id","dropdown-basic","class","dropdown-menu","role","menu","aria-labelledby","button-basic",4,"dropdownMenu"],[1,"no-padding"],[3,"injector","config","id",4,"ngFor","ngForOf","ngForTrackBy"],["id","dropdown-basic","role","menu","aria-labelledby","button-basic",1,"dropdown-menu"],["role","menuitem",4,"ngFor","ngForOf","ngForTrackBy"],["role","menuitem"],["routerLink",".",1,"dropdown-item",3,"fragment"],[3,"injector","config","id"]],template:function(a,p){1&a&&(e.TgZ(0,"app-content-wrap")(1,"h1"),e._uU(2,"Angular JSON viewer"),e.qZA(),e.TgZ(3,"p")(4,"a",0),e._UZ(5,"img",1),e.qZA(),e._uU(6,"\xa0 "),e.TgZ(7,"a",2),e._UZ(8,"img",3),e.qZA(),e._uU(9,"\xa0 "),e.TgZ(10,"a",2),e._UZ(11,"img",4),e.qZA()(),e.TgZ(12,"p"),e._uU(13,"An interactive JSON view component for Angular."),e.qZA(),e.TgZ(14,"ul")(15,"li")(16,"a",5)(17,"strong"),e._uU(18,"Getting started"),e.qZA()()(),e.TgZ(19,"li")(20,"a",6)(21,"strong"),e._uU(22,"API docs"),e.qZA()()()(),e._UZ(23,"br"),e.TgZ(24,"h2"),e._uU(25,"Demo "),e.TgZ(26,"div",7)(27,"button",8),e._uU(28," Go to "),e._UZ(29,"span",9),e.qZA(),e.YNc(30,t,3,4,"ul",10),e.qZA()(),e._UZ(31,"hr",11),e.YNc(32,r,1,3,"app-example",12),e.ALo(33,"async"),e.qZA()),2&a&&(e.xp6(16),e.Q6J("routerLink","./getting-started"),e.xp6(16),e.Q6J("ngForOf",e.lcZ(33,3,p.examples))("ngForTrackBy",p.exampleTrackBy))},dependencies:[c.sg,w.rH,u.u,x.A,m.Hz,m.Mq,m.TO,c.Ov],styles:["hr[_ngcontent-%COMP%]{padding:0;padding-top:1rem;border:none;border-top:1px solid rgba(33,37,41,.25);margin:0;margin-top:2rem;opacity:1}hr.no-padding[_ngcontent-%COMP%]{padding-top:0}"]}),o})()},{path:"getting-started",component:M}];let T=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[w.Bz.forChild(l),w.Bz]}),o})(),U=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,n.u5,g.C,T,u.u,x.A,m.mr,h.P,y.R,j.Z]}),o})()},1146:(b,f,i)=>{var c={"./basic-example/basic-example.component.html":[6345,6345],"./basic-example/basic-example.component.scss":[74,74],"./basic-example/basic-example.component.ts":[6391,6391],"./expansion-parameters/expansion-parameters.component.html":[7024,7024],"./expansion-parameters/expansion-parameters.component.scss":[603,603],"./expansion-parameters/expansion-parameters.component.ts":[7185,7185],"./level-labels/level-labels.component.html":[4615,4615],"./level-labels/level-labels.component.scss":[6663,6663],"./level-labels/level-labels.component.ts":[4558,4558],"./live-test/live-test.component.html":[3677,3677],"./live-test/live-test.component.scss":[6723,9937],"./live-test/live-test.component.ts":[8856,8856]};function n(m){if(!i.o(c,m))return Promise.resolve().then(()=>{var u=new Error("Cannot find module '"+m+"'");throw u.code="MODULE_NOT_FOUND",u});var g=c[m],h=g[0];return i.e(g[1]).then(()=>i.t(h,17))}n.keys=()=>Object.keys(c),n.id=1146,b.exports=n},3148:(b,f,i)=>{var c={"./basic-example/basic-example.component":[5272,5272],"./expansion-parameters/expansion-parameters.component":[5535,5535],"./level-labels/level-labels.component":[7703,7703],"./live-test/live-test.component":[37,37]};function n(m){if(!i.o(c,m))return Promise.resolve().then(()=>{var u=new Error("Cannot find module '"+m+"'");throw u.code="MODULE_NOT_FOUND",u});var g=c[m],h=g[0];return i.e(g[1]).then(()=>i(h))}n.keys=()=>Object.keys(c),n.id=3148,b.exports=n},7695:(b,f,i)=>{"use strict";i.d(f,{C:()=>A,x:()=>M});var c=i(9318),n=i(9409);function m(t,r){if(1&t&&(n.TgZ(0,"span",8)(1,"span"),n._uU(2),n.qZA(),n.TgZ(3,"span"),n._uU(4,": "),n.qZA()()),2&t){const s=n.oxw();n.xp6(2),n.Oqu(s.key)}}function g(t,r){if(1&t&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&t){const s=n.oxw(2);let l;n.xp6(1),n.hij("[ ",null==(l=s.data)?null:l.length," ]")}}function h(t,r){if(1&t&&(n.TgZ(0,"span"),n._uU(1),n.YNc(2,g,2,1,"span",5),n.qZA()),2&t){const s=n.oxw();n.xp6(1),n.hij(" ",s.dataType," "),n.xp6(1),n.Q6J("ngIf",s.isArray)}}function u(t,r){if(1&t&&(n.TgZ(0,"span",9),n._uU(1),n.qZA()),2&t){const s=n.oxw();n.Q6J("ngClass",s.valueType),n.xp6(1),n.Oqu(s.value)}}function x(t,r){if(1&t&&n._UZ(0,"nxt-json-view-item",12),2&t){const s=r.$implicit,l=n.oxw(2);n.Q6J("data",l.data[s])("key",s)("level",l.level+1)("levelOpen",l.levelOpen)("levelLabels",l.levelLabels)}}function y(t,r){if(1&t&&(n.TgZ(0,"div",10),n.YNc(1,x,1,5,"nxt-json-view-item",11),n.qZA()),2&t){const s=n.oxw();n.xp6(1),n.Q6J("ngForOf",s.childrenKeys)}}const j=function(t,r){return{collapse:t,expand:r}};function w(t){return null!==t&&"object"==typeof t}let Z=(()=>{class t{constructor(){this.level=0,this.isOpen=!1,this.hasChildren=!1,this.isObject=!1,this.isArray=!1,this.isInit=!1,this._levelLabels={}}set data(s){this._data=s,this.isInit&&this.init()}get data(){return this._data}ngOnInit(){this.init(),this.isInit=!0}init(){this.levelLabelHandle(),this.levelOpenHandle(),this.childrenKeysHandle(),this.dataHandle()}levelLabelHandle(){void 0!==this.levelLabels&&(this._levelLabels=this.levelLabels[this.level]||{})}levelOpenHandle(){!function e(t){return typeof t>"u"}(this.levelOpen)&&this.level<=this.levelOpen&&(this.isOpen=!0)}childrenKeysHandle(){w(this.data)&&(this.childrenKeys=Object.keys(this.data),this.childrenKeys&&this.childrenKeys.length&&(this.hasChildren=!0))}dataHandle(){w(this.data)?(this.isObject=!0,this.dataType="Object",function C(t){return Array.isArray(t)}(this.data)&&(this.isArray=!0,this.dataType="Array"),this.key&&this._levelLabels[this.key]&&(this.dataType=this._levelLabels[this.key])):(this.value=this.data,function O(t){return"string"==typeof t}(this.data)?this.valueType="string":function J(t){return"number"==typeof t}(this.data)?this.valueType="number":function _(t){return"boolean"==typeof t}(this.data)?this.valueType="boolean":null===this.data&&(this.valueType="null",this.value="null"))}toggle(){this.childrenKeys&&this.childrenKeys.length&&(this.isOpen=!this.isOpen)}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["nxt-json-view-item"]],inputs:{data:"data",key:"key",level:"level",levelOpen:"levelOpen",levelLabels:"levelLabels"},decls:8,vars:10,consts:[[1,"json-view"],[3,"click"],[1,"toggler",3,"ngClass"],["class","key",4,"ngIf"],[1,"value"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],["class","children",4,"ngIf"],[1,"key"],[3,"ngClass"],[1,"children"],[3,"data","key","level","levelOpen","levelLabels",4,"ngFor","ngForOf"],[3,"data","key","level","levelOpen","levelLabels"]],template:function(s,l){1&s&&(n.TgZ(0,"div",0)(1,"a",1),n.NdJ("click",function(){return l.toggle()}),n._UZ(2,"span",2),n.YNc(3,m,5,1,"span",3),n.TgZ(4,"span",4),n.YNc(5,h,3,2,"span",5),n.YNc(6,u,2,2,"span",6),n.qZA()(),n.YNc(7,y,2,1,"div",7),n.qZA()),2&s&&(n.xp6(2),n.Udp("visibility",l.hasChildren?"visible":"hidden"),n.Q6J("ngClass",n.WLB(7,j,l.isOpen,!l.isOpen)),n.xp6(1),n.Q6J("ngIf",l.key),n.xp6(2),n.Q6J("ngIf",l.isObject),n.xp6(1),n.Q6J("ngIf",!l.isObject&&l.valueType),n.xp6(1),n.Q6J("ngIf",l.hasChildren&&l.isOpen))},dependencies:[c.mk,c.sg,c.O5,t],styles:['.json-view[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none}.json-view[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{width:1em;padding:0;display:block;text-align:center;float:left}.json-view[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:before{content:"-"}.json-view[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]:before{content:"+"}.json-view[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-key, #92278f)}.json-view[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-value, #000000)}.json-view[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-string, #3ab54a)}.json-view[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-number, #25aae2)}.json-view[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .boolean[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-boolean, #aa0d91)}.json-view[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .null[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-null, #f1592a)}.json-view[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%]{margin-left:1em}']}),t})(),M=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["nxt-json-view"]],inputs:{data:"data",levelOpen:"levelOpen",levelLabels:"levelLabels"},decls:2,vars:4,consts:[[1,"nxt-json-view"],[1,"json-view",3,"data","level","levelOpen","levelLabels"]],template:function(s,l){1&s&&(n.TgZ(0,"div",0),n._UZ(1,"nxt-json-view-item",1),n.qZA()),2&s&&(n.xp6(1),n.Q6J("data",l.data)("level",0)("levelOpen",l.levelOpen)("levelLabels",l.levelLabels))},dependencies:[Z]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.ez]}),t})()}}]);