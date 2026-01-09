import{a as g}from"./chunk-GROVZKRE.js";import"./chunk-UXL3E2TP.js";import{a as u}from"./chunk-YS77K4WX.js";import"./chunk-4TQLCYCH.js";import{a as b}from"./chunk-VZYLXIVG.js";import"./chunk-6OLPVVGX.js";import{h as f}from"./chunk-MARFYW4U.js";import"./chunk-D6FAYY5Q.js";import"./chunk-CR2F7LZQ.js";import"./chunk-IVHFKMEK.js";import{Db as o,Eb as n,Fb as t,Gb as p,Va as i,db as c,ic as s,kb as m,sc as r}from"./chunk-HAUTYPWP.js";import"./chunk-FBFWB55K.js";var v={pipes:[],interfaces:[{name:"LevelLabels",id:"interface-LevelLabels-b3bf53d2b0a9e1ab8e0207c39f8d242961d91431b8822f4821f4b37a58f8dae6dde7878085d361cf4f67915f11c2858eba6f7ac8d9a0615ee59b47790fd5d8ca",file:"src/lib/utils/interfaces.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[],indexSignatures:[{id:"index-declaration-b3bf53d2b0a9e1ab8e0207c39f8d242961d91431b8822f4821f4b37a58f8dae6dde7878085d361cf4f67915f11c2858eba6f7ac8d9a0615ee59b47790fd5d8ca",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],returnType:"literal type",line:1,deprecated:!1,deprecationMessage:""}],kind:182,methods:[],extends:[]}],injectables:[{name:"ExpanderService",id:"injectable-ExpanderService-de67e23c077052248e3de37d122c6c8b90b638298e4ab114d417f2333c5e604e3232de0feb524fb0bf4c791f47b6c930fb6d3a6cf7a96201b7f192a794b77daa",file:"src/lib/expander/expander.service.ts",properties:[],methods:[{name:"addItem",args:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:10,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"collapseTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:27,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"expandTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:18,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"removeItem",args:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:14,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
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
`,type:"component",assetsDirs:[],extends:[],implements:["AfterViewChecked"]}],modules:[{name:"JsonViewModule",id:"module-JsonViewModule-16583309baf6a02c8f8de60a0cd73246f26f6c4f174bd185d5a1be79d45bf2bba5d9d7c095ca399ad13f088db38d1a3b9f151dce0c7f42d3f87d3bc9e8b2fc03",description:"",deprecationMessage:"use standalone imports",deprecated:!0,file:"src/lib/json-view.module.ts",methods:[],children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"JsonViewComponent"}]},{type:"exports",elements:[{name:"JsonViewComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]}],miscellaneous:[]};var h=()=>["shell"],y=()=>["typescript"],x=()=>["html"],E=(()=>{class d{constructor(l){this.title=l,this.installScript="npm install --save nxt-json-view",this.importComponent=`import { JsonViewComponent } from 'nxt-json-view'

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
}`,this.includeHTML='<nxt-json-view [data]="data"></nxt-json-view>',this.componentDocs=v.components.find(e=>e.selector=="nxt-json-view"),this.inputs=this.componentDocs?.inputsClass.sort((e,a)=>e.line-a.line)??[]}ngOnInit(){this.title.setTitle("Getting started | nxt-json-view")}static{this.\u0275fac=function(e){return new(e||d)(c(f))}}static{this.\u0275cmp=m({type:d,selectors:[["app-getting-started"]],decls:22,vars:13,consts:[[1,"h4"],[3,"code","languages"],[1,"h3"],[3,"inputs"]],template:function(e,a){e&1&&(n(0,"app-content-wrap")(1,"h1"),s(2,"Getting started with nxt-json-view"),t(),n(3,"h2",0),s(4,"Installing"),t(),p(5,"app-code-block",1)(6,"br"),n(7,"h2",0),s(8,"Import JSON view component"),t(),p(9,"app-code-block",1)(10,"br"),n(11,"h2",0),s(12,"Prepare JSON data"),t(),p(13,"app-code-block",1)(14,"br"),n(15,"h2",0),s(16,"Use it in a template"),t(),p(17,"app-code-block",1)(18,"br"),n(19,"h2",2),s(20,"Configuration options"),t(),p(21,"app-inputs-table",3),t()),e&2&&(i(5),o("code",a.installScript)("languages",r(9,h)),i(4),o("code",a.importComponent)("languages",r(10,y)),i(4),o("code",a.data)("languages",r(11,y)),i(4),o("code",a.includeHTML)("languages",r(12,x)),i(4),o("inputs",a.inputs))},dependencies:[b,u,g],encapsulation:2})}}return d})();export{E as GettingStartedComponent};
