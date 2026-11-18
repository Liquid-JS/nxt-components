import{t as ee}from"./chunk-FRdXVlQV.js";import"./chunk-DpIsQNvT.js";import{t as Ht}from"./chunk-8aGTNAAo.js";import"./chunk-B3srRVBE.js";import{n as b,t as S}from"./chunk-IcDNAYhK.js";import"./main-7IQ42RCL.js";import"./chunk-jrLhM0Sc.js";import"./chunk-Csat7SFd.js";import{Ar as tv,Ft as W_,a as Au,ar as nv,br as rw,hr as rM,ht as QC,zr as vs}from"./chunk-Cw6fPprD.js";import"./chunk-B_U_B7EY.js";var v={pipes:[],interfaces:[{name:`LevelLabels`,id:`interface-LevelLabels-5b4a265617bc7cb727510602e82a1ec16c08725540b2ebe9ba67fa533594e80490594437becc9f495aac065a3e2ec704744949974e087938e9356e013f5c369c`,file:`src/lib/utils/interfaces.ts`,deprecated:!1,deprecationMessage:``,type:`interface`,displayName:`LevelLabels`,properties:[],indexSignatures:[{id:`index-declaration-5b4a265617bc7cb727510602e82a1ec16c08725540b2ebe9ba67fa533594e80490594437becc9f495aac065a3e2ec704744949974e087938e9356e013f5c369c`,args:[{name:`level`,type:`number`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``}],returnType:`{  }`,line:1,deprecated:!1,deprecationMessage:``,rawdescription:`
`,description:``}],kind:182,methods:[],extends:[],relationships:{incoming:[],outgoing:[]}}],injectables:[{name:`ExpanderService`,id:`injectable-ExpanderService-e6008a6fdf0753b1bdd5ea50b55962c7c4615fc4d84cf6d0fc75540b8f1bbbde8224ceb614e1b5d72746cc71e0d2fa2f2b9561e7db20da3e2754b55dbcef753f`,file:`src/lib/expander/expander.service.ts`,coverageIgnore:!1,properties:[],methods:[{name:`addItem`,coverageIgnore:!1,args:[{name:`item`,type:`JsonViewItemComponent`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``}],optional:!1,returnType:`void`,typeParameters:[],line:10,deprecated:!1,deprecationMessage:``,rawdescription:`
`,description:``,jsdoctags:[{name:`item`,type:`JsonViewItemComponent`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``,tagName:{text:`param`}}]},{name:`collapseTo`,coverageIgnore:!1,args:[{name:`level`,type:`number`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``}],optional:!1,returnType:`void`,typeParameters:[],line:27,deprecated:!1,deprecationMessage:``,rawdescription:`
`,description:``,jsdoctags:[{name:`level`,type:`number`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``,tagName:{text:`param`}}]},{name:`expandTo`,coverageIgnore:!1,args:[{name:`level`,type:`number`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``}],optional:!1,returnType:`void`,typeParameters:[],line:18,deprecated:!1,deprecationMessage:``,rawdescription:`
`,description:``,jsdoctags:[{name:`level`,type:`number`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``,tagName:{text:`param`}}]},{name:`removeItem`,coverageIgnore:!1,args:[{name:`item`,type:`JsonViewItemComponent`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``}],optional:!1,returnType:`void`,typeParameters:[],line:14,deprecated:!1,deprecationMessage:``,rawdescription:`
`,description:``,jsdoctags:[{name:`item`,type:`JsonViewItemComponent`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``,tagName:{text:`param`}}]}],deprecated:!1,deprecationMessage:``,description:``,rawdescription:`
`,extends:[],providedIn:`root`,type:`injectable`,relationships:{incoming:[{name:`JsonViewComponent`,type:`component`}],outgoing:[]}}],guards:[],interceptors:[],classes:[],directives:[],components:[{name:`JsonViewComponent`,id:`component-JsonViewComponent-0cfa4a2d6f565620256395c5c3fe2ff8cd9a774845aeb496fa5b456cf332d08f70b33147a111d7f9ca783245bfa1cd3afd6bc89b733e2f145b66d47e3fd32c92`,file:`src/lib/json-view/json-view.component.ts`,encapsulation:[`ViewEncapsulation.Emulated`],entryComponents:[],inputs:[],outputs:[],providers:[{name:`ExpanderService`,type:`injectable`}],selector:`nxt-json-view`,styleUrls:[`./json-view.component.scss`],styles:[],templateUrl:[`./json-view.component.html`],templateVariables:[],viewProviders:[],hostDirectives:[],inputsClass:[{name:`data`,coverageIgnore:!1,deprecated:!1,deprecationMessage:``,type:`any`,indexKey:``,optional:!1,description:`<p>JSON data, any valid JSON object</p>
`,line:23,rawdescription:`
JSON data, any valid JSON object`,modifierKind:[148],required:!1},{name:`levelLabels`,coverageIgnore:!1,deprecated:!1,deprecationMessage:``,type:`LevelLabels`,indexKey:``,optional:!1,description:`<p>Custom labels for elements within the hierarcy</p>
`,line:27,rawdescription:`
Custom labels for elements within the hierarcy`,modifierKind:[148],required:!1},{name:`levelOpen`,coverageIgnore:!1,deprecated:!1,deprecationMessage:``,type:`number`,indexKey:``,optional:!1,description:`<p>Initial number of levels to be expanded; to expand / collapse the view after initial render, use <code>expandTo</code> / <code>collapseTo</code></p>
`,line:25,rawdescription:"\nInitial number of levels to be expanded; to expand / collapse the view after initial render, use `expandTo` / `collapseTo`",modifierKind:[148],required:!1}],outputsClass:[],propertiesClass:[],methodsClass:[{name:`collapseTo`,coverageIgnore:!1,args:[{name:`level`,type:`number`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``}],optional:!1,returnType:`void`,typeParameters:[],line:51,deprecated:!1,deprecationMessage:``,rawdescription:`
Collapse any open items above the given level`,description:`<p>Collapse any open items above the given level</p>
`,jsdoctags:[{name:`level`,type:`number`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``,tagName:{text:`param`}}]},{name:`expandTo`,coverageIgnore:!1,args:[{name:`level`,type:`number`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``}],optional:!1,returnType:`void`,typeParameters:[],line:45,deprecated:!1,deprecationMessage:``,rawdescription:`
Expand all items up to the given level`,description:`<p>Expand all items up to the given level</p>
`,jsdoctags:[{name:`level`,type:`number`,optional:!1,dotDotDotToken:!1,deprecated:!1,deprecationMessage:``,tagName:{text:`param`}}]},{name:`ngAfterViewChecked`,coverageIgnore:!1,args:[],optional:!1,returnType:`void`,typeParameters:[],line:37,deprecated:!1,deprecationMessage:``,rawdescription:`
`,description:``}],coverageIgnore:!1,deprecated:!1,deprecationMessage:``,hostBindings:[],hostListeners:[],standalone:!1,imports:[{name:`JsonViewItemComponent`,type:`component`}],description:``,rawdescription:`
`,type:`component`,assetsDirs:[],extends:[],implements:[`AfterViewChecked`],relationships:{incoming:[],outgoing:[{name:`JsonViewItemComponent`,type:`component`},{name:`ExpanderService`,type:`injectable`},{name:`AfterViewChecked`,type:`interface`}]}}],modules:[],miscellaneous:[]};var w=()=>[`shell`];var u=()=>[`typescript`];var h=()=>[`html`];var k=(()=>{class d{constructor(){this.installScript=`npm install --save nxt-json-view`,this.importComponent=`import { JsonViewComponent } from 'nxt-json-view'

@Component({
    ...
    imports: [
        ...
        JsonViewComponent
    ]
})`,this.data=`data = {
    "name": "nxt-json-view",
    "url": "https://github.com/Liquid-JS/nxt-components/tree/master/packages/json-view",
    "string": "github",
    "number": 88,
    "boolean": true,
    "object": {
        "obj1": "obj1",
        "obj2": "obj2",
        "object": {
            "obj11": "obj11",
            "obj22": "obj22"
        },
        "emptyArray": []
    },
    "array": [
        1,
        2,
        3
    ],
    "date": new Date(),
    "null": null
}`,this.includeHTML=`<nxt-json-view [data]="data"></nxt-json-view>`,this.componentDocs=v.components.find(r=>r.selector==`nxt-json-view`),this.inputs=this.componentDocs?.inputsClass.sort((r,o)=>r.line-o.line)??[]}static{this.ɵfac=function(o){return new(o||d)}}static{this.ɵcmp=QC({type:d,selectors:[[`app-getting-started`]],decls:23,vars:13,consts:[[`title`,`Getting started | nxt-json-view`,`description`,`Getting started with nxt-json-view`],[1,`h4`],[3,`code`,`languages`],[1,`h3`],[3,`inputs`]],template:function(o,p){o&1&&(nv(0,`app-meta`,0),vs(1,`app-content-wrap`)(2,`h1`),W_(3,`Getting started with nxt-json-view`),Au(),vs(4,`h2`,1),W_(5,`Installing`),Au(),nv(6,`app-code-block`,2)(7,`br`),vs(8,`h2`,1),W_(9,`Import JSON view component`),Au(),nv(10,`app-code-block`,2)(11,`br`),vs(12,`h2`,1),W_(13,`Prepare JSON data`),Au(),nv(14,`app-code-block`,2)(15,`br`),vs(16,`h2`,1),W_(17,`Use it in a template`),Au(),nv(18,`app-code-block`,2)(19,`br`),vs(20,`h2`,3),W_(21,`Configuration options`),Au(),nv(22,`app-inputs-table`,4),Au()),o&2&&(rw(6),tv(`code`,p.installScript)(`languages`,rM(9,w)),rw(4),tv(`code`,p.importComponent)(`languages`,rM(10,u)),rw(4),tv(`code`,p.data)(`languages`,rM(11,u)),rw(4),tv(`code`,p.includeHTML)(`languages`,rM(12,h)),rw(4),tv(`inputs`,p.inputs))},dependencies:[b,Ht,ee,S],encapsulation:2})}}return d})();export{k as GettingStartedComponent};