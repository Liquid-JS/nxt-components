import{a as v}from"./chunk-G3WGQMUS.js";import"./chunk-FIGDU5QY.js";import{a as g}from"./chunk-A37365WN.js";import{a as u}from"./chunk-SU4L4U2N.js";import"./chunk-5IMQZCEW.js";import"./chunk-3GGGA6TD.js";import"./chunk-QHC7OUFX.js";import{h as f}from"./chunk-5CCRMC6C.js";import"./chunk-Q47KY65Q.js";import{Ab as p,Sa as o,Vb as s,Ya as m,db as b,dc as c,xb as r,yb as n,zb as t}from"./chunk-QI4V3FBZ.js";import"./chunk-FBFWB55K.js";var y={pipes:[],interfaces:[{name:"LevelLabels",id:"interface-LevelLabels-5b4a265617bc7cb727510602e82a1ec16c08725540b2ebe9ba67fa533594e80490594437becc9f495aac065a3e2ec704744949974e087938e9356e013f5c369c",file:"src/lib/utils/interfaces.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[],indexSignatures:[{id:"index-declaration-5b4a265617bc7cb727510602e82a1ec16c08725540b2ebe9ba67fa533594e80490594437becc9f495aac065a3e2ec704744949974e087938e9356e013f5c369c",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],returnType:"literal type",line:1,deprecated:!1,deprecationMessage:""}],kind:181,methods:[],extends:[]}],injectables:[{name:"ExpanderService",id:"injectable-ExpanderService-65acdfec985b778f6bb9647fbfcbaf3c86cb54bccc480bffc32d39cf500f8ec56e57322f928386da584adb56dbd94b92d48157c08abc94bbbbe2db101fc20cf9",file:"src/lib/expander/expander.service.ts",properties:[],methods:[{name:"addItem",args:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:12,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"collapseTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:29,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"expandTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:20,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"removeItem",args:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:16,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:8},extends:[],type:"injectable"}],guards:[],interceptors:[],classes:[],directives:[],components:[{name:"JsonViewComponent",id:"component-JsonViewComponent-3d4c50ecdb32724dd421ad99a55459f18bc168517311d9dd4f2217f0c87c48b338ebcfcc872944eea4f78776b6876cd420304519630b9bc81326c230b976b27b",file:"src/lib/json-view/json-view.component.ts",encapsulation:["ViewEncapsulation.Emulated"],entryComponents:[],inputs:[],outputs:[],providers:[{name:"ExpanderService",type:"injectable"}],selector:"nxt-json-view",styleUrls:["./json-view.component.scss"],styles:[],templateUrl:["./json-view.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"data",deprecated:!1,deprecationMessage:"",rawdescription:`
JSON data, any valid JSON object`,description:`<p>JSON data, any valid JSON object</p>
`,line:20,type:"any",decorators:[]},{name:"levelLabels",deprecated:!1,deprecationMessage:"",rawdescription:`
Custom labels for elements within the hierarcy`,description:`<p>Custom labels for elements within the hierarcy</p>
`,line:24,type:"LevelLabels",decorators:[]},{name:"levelOpen",deprecated:!1,deprecationMessage:"",rawdescription:"\nInitial number of levels to be expanded; to expand / collapse the view after initial render, use `expandTo` / `collapseTo`",description:`<p>Initial number of levels to be expanded; to expand / collapse the view after initial render, use <code>expandTo</code> / <code>collapseTo</code></p>
`,line:22,type:"number",decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[{name:"collapseTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:44,deprecated:!1,deprecationMessage:"",rawdescription:`
Collapse any open items above the given level`,description:`<p>Collapse any open items above the given level</p>
`,jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"expandTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:38,deprecated:!1,deprecationMessage:"",rawdescription:`
Expand all items up to the given level`,description:`<p>Expand all items up to the given level</p>
`,jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterViewChecked",args:[],optional:!1,returnType:"void",typeParameters:[],line:29,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",assetsDirs:[],extends:[],implements:["AfterViewChecked"]}],modules:[{name:"JsonViewModule",id:"module-JsonViewModule-c03a761cc397242e8a0e67387ad8e0d27a6cfc84ff82ea2c944674b27cc3f4d6524be2f3830c946090944e93fda74050156cdc379301cc410864970d9f95bc72",description:"",deprecationMessage:"",deprecated:!1,file:"src/lib/json-view.module.ts",methods:[],children:[{type:"providers",elements:[]},{type:"declarations",elements:[{name:"JsonViewComponent"}]},{type:"imports",elements:[]},{type:"exports",elements:[{name:"JsonViewComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]}],miscellaneous:[]};var x=()=>["shell"],h=()=>["typescript"],M=()=>["html"],I=(()=>{let i=class i{constructor(l){this.title=l,this.installScript="npm install --save nxt-json-view",this.importModule=`import { JsonViewModule } from 'nxt-json-view'

@NgModule({
    ...
    imports: [
        ...
        JsonViewModule
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
}`,this.includeHTML='<nxt-json-view [data]="data"></nxt-json-view>',this.componentDocs=y.components.find(e=>e.selector=="nxt-json-view"),this.inputs=this.componentDocs?.inputsClass.sort((e,a)=>e.line-a.line)??[]}ngOnInit(){this.title.setTitle("Getting started | nxt-json-view")}};i.\u0275fac=function(e){return new(e||i)(m(f))},i.\u0275cmp=b({type:i,selectors:[["app-getting-started"]],decls:22,vars:13,consts:[[1,"h4"],[3,"code","languages"],[1,"h3"],[3,"inputs"]],template:function(e,a){e&1&&(n(0,"app-content-wrap")(1,"h1"),s(2,"Getting started with nxt-json-view"),t(),n(3,"h2",0),s(4,"Installing"),t(),p(5,"app-code-block",1)(6,"br"),n(7,"h2",0),s(8,"Import JSON view module"),t(),p(9,"app-code-block",1)(10,"br"),n(11,"h2",0),s(12,"Prepare JSON data"),t(),p(13,"app-code-block",1)(14,"br"),n(15,"h2",0),s(16,"Use it in a template"),t(),p(17,"app-code-block",1)(18,"br"),n(19,"h2",2),s(20,"Configuration options"),t(),p(21,"app-inputs-table",3),t()),e&2&&(o(5),r("code",a.installScript)("languages",c(9,x)),o(4),r("code",a.importModule)("languages",c(10,h)),o(4),r("code",a.data)("languages",c(11,h)),o(4),r("code",a.includeHTML)("languages",c(12,M)),o(4),r("inputs",a.inputs))},dependencies:[u,g,v],encapsulation:2});let d=i;return d})();export{I as GettingStartedComponent};
