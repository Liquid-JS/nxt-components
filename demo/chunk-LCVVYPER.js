import{a as u}from"./chunk-2DFOAEHV.js";import"./chunk-VIX57L6V.js";import{a as b}from"./chunk-FVZSJVEX.js";import"./chunk-5MDIBWOV.js";import{a as m,b as f}from"./chunk-Y5O3XW2Q.js";import"./chunk-T7M4NWHN.js";import"./chunk-ZUDY42XX.js";import"./chunk-BZKT67H7.js";import"./chunk-4Z5FXPY3.js";import"./chunk-CVF3MDYP.js";import"./chunk-UJLJK5TR.js";import{Cb as o,Db as t,Eb as e,Fb as a,Va as i,gc as n,kb as c,qc as d}from"./chunk-ZMGTPDVB.js";import"./chunk-FBFWB55K.js";var g={pipes:[],interfaces:[{name:"LevelLabels",id:"interface-LevelLabels-b3bf53d2b0a9e1ab8e0207c39f8d242961d91431b8822f4821f4b37a58f8dae6dde7878085d361cf4f67915f11c2858eba6f7ac8d9a0615ee59b47790fd5d8ca",file:"src/lib/utils/interfaces.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[],indexSignatures:[{id:"index-declaration-b3bf53d2b0a9e1ab8e0207c39f8d242961d91431b8822f4821f4b37a58f8dae6dde7878085d361cf4f67915f11c2858eba6f7ac8d9a0615ee59b47790fd5d8ca",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],returnType:"literal type",line:1,deprecated:!1,deprecationMessage:""}],kind:182,methods:[],extends:[]}],injectables:[{name:"ExpanderService",id:"injectable-ExpanderService-de67e23c077052248e3de37d122c6c8b90b638298e4ab114d417f2333c5e604e3232de0feb524fb0bf4c791f47b6c930fb6d3a6cf7a96201b7f192a794b77daa",file:"src/lib/expander/expander.service.ts",properties:[],methods:[{name:"addItem",args:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:10,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"collapseTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:27,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"expandTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:18,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"removeItem",args:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:14,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,extends:[],type:"injectable"}],guards:[],interceptors:[],classes:[],directives:[],components:[{name:"JsonViewComponent",id:"component-JsonViewComponent-0cfa4a2d6f565620256395c5c3fe2ff8cd9a774845aeb496fa5b456cf332d08f70b33147a111d7f9ca783245bfa1cd3afd6bc89b733e2f145b66d47e3fd32c92",file:"src/lib/json-view/json-view.component.ts",encapsulation:["ViewEncapsulation.Emulated"],entryComponents:[],inputs:[],outputs:[],providers:[{name:"ExpanderService",type:"injectable"}],selector:"nxt-json-view",styleUrls:["./json-view.component.scss"],styles:[],templateUrl:["./json-view.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"data",deprecated:!1,deprecationMessage:"",type:"any",indexKey:"",optional:!1,description:`<p>JSON data, any valid JSON object</p>
`,line:23,rawdescription:`
JSON data, any valid JSON object`,modifierKind:[148],required:!1},{name:"levelLabels",deprecated:!1,deprecationMessage:"",type:"LevelLabels",indexKey:"",optional:!1,description:`<p>Custom labels for elements within the hierarcy</p>
`,line:27,rawdescription:`
Custom labels for elements within the hierarcy`,modifierKind:[148],required:!1},{name:"levelOpen",deprecated:!1,deprecationMessage:"",type:"number",indexKey:"",optional:!1,description:`<p>Initial number of levels to be expanded; to expand / collapse the view after initial render, use <code>expandTo</code> / <code>collapseTo</code></p>
`,line:25,rawdescription:"\nInitial number of levels to be expanded; to expand / collapse the view after initial render, use `expandTo` / `collapseTo`",modifierKind:[148],required:!1}],outputsClass:[],propertiesClass:[],methodsClass:[{name:"collapseTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:51,deprecated:!1,deprecationMessage:"",rawdescription:`
Collapse any open items above the given level`,description:`<p>Collapse any open items above the given level</p>
`,jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"expandTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:45,deprecated:!1,deprecationMessage:"",rawdescription:`
Expand all items up to the given level`,description:`<p>Expand all items up to the given level</p>
`,jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterViewChecked",args:[],optional:!1,returnType:"void",typeParameters:[],line:37,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[{name:"JsonViewItemComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",assetsDirs:[],extends:[],implements:["AfterViewChecked"]}],modules:[{name:"JsonViewModule",id:"module-JsonViewModule-16583309baf6a02c8f8de60a0cd73246f26f6c4f174bd185d5a1be79d45bf2bba5d9d7c095ca399ad13f088db38d1a3b9f151dce0c7f42d3f87d3bc9e8b2fc03",description:"",deprecationMessage:"use standalone imports",deprecated:!0,file:"src/lib/json-view.module.ts",methods:[],children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"JsonViewComponent"}]},{type:"exports",elements:[{name:"JsonViewComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]}],miscellaneous:[]};var w=()=>["shell"],v=()=>["typescript"],h=()=>["html"],V=(()=>{class l{constructor(){this.installScript="npm install --save nxt-json-view",this.importComponent=`import { JsonViewComponent } from 'nxt-json-view'

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
}`,this.includeHTML='<nxt-json-view [data]="data"></nxt-json-view>',this.componentDocs=g.components.find(p=>p.selector=="nxt-json-view"),this.inputs=this.componentDocs?.inputsClass.sort((p,s)=>p.line-s.line)??[]}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=c({type:l,selectors:[["app-getting-started"]],decls:23,vars:13,consts:[["title","Getting started | nxt-json-view","description","Getting started with nxt-json-view"],[1,"h4"],[3,"code","languages"],[1,"h3"],[3,"inputs"]],template:function(s,r){s&1&&(a(0,"app-meta",0),t(1,"app-content-wrap")(2,"h1"),n(3,"Getting started with nxt-json-view"),e(),t(4,"h2",1),n(5,"Installing"),e(),a(6,"app-code-block",2)(7,"br"),t(8,"h2",1),n(9,"Import JSON view component"),e(),a(10,"app-code-block",2)(11,"br"),t(12,"h2",1),n(13,"Prepare JSON data"),e(),a(14,"app-code-block",2)(15,"br"),t(16,"h2",1),n(17,"Use it in a template"),e(),a(18,"app-code-block",2)(19,"br"),t(20,"h2",3),n(21,"Configuration options"),e(),a(22,"app-inputs-table",4),e()),s&2&&(i(6),o("code",r.installScript)("languages",d(9,w)),i(4),o("code",r.importComponent)("languages",d(10,v)),i(4),o("code",r.data)("languages",d(11,v)),i(4),o("code",r.includeHTML)("languages",d(12,h)),i(4),o("inputs",r.inputs))},dependencies:[m,b,u,f],encapsulation:2})}}return l})();export{V as GettingStartedComponent};
