import{a as g}from"./chunk-JIHCXSYE.js";import"./chunk-M7WI7E3B.js";import{a as u}from"./chunk-OH3TFMID.js";import"./chunk-DOQFXFCH.js";import{a as f}from"./chunk-YAXQWXAG.js";import"./chunk-MECTHNJF.js";import{h as b}from"./chunk-LJSWQFF5.js";import"./chunk-I2EHY4MC.js";import"./chunk-OWF3LYDB.js";import{Bb as i,Cb as n,Db as t,Eb as p,Ta as o,bb as l,dc as s,ib as m,nc as r}from"./chunk-Q24A7GIH.js";import"./chunk-FBFWB55K.js";var v={pipes:[],interfaces:[{name:"LevelLabels",id:"interface-LevelLabels-5b4a265617bc7cb727510602e82a1ec16c08725540b2ebe9ba67fa533594e80490594437becc9f495aac065a3e2ec704744949974e087938e9356e013f5c369c",file:"src/lib/utils/interfaces.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[],indexSignatures:[{id:"index-declaration-5b4a265617bc7cb727510602e82a1ec16c08725540b2ebe9ba67fa533594e80490594437becc9f495aac065a3e2ec704744949974e087938e9356e013f5c369c",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],returnType:"literal type",line:1,deprecated:!1,deprecationMessage:""}],kind:181,methods:[],extends:[]}],injectables:[{name:"ExpanderService",id:"injectable-ExpanderService-65acdfec985b778f6bb9647fbfcbaf3c86cb54bccc480bffc32d39cf500f8ec56e57322f928386da584adb56dbd94b92d48157c08abc94bbbbe2db101fc20cf9",file:"src/lib/expander/expander.service.ts",properties:[],methods:[{name:"addItem",args:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:12,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"collapseTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:29,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"expandTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:20,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"removeItem",args:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:16,deprecated:!1,deprecationMessage:"",jsdoctags:[{name:"item",type:"JsonViewItemComponent",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],deprecated:!1,deprecationMessage:"",description:"",rawdescription:`
`,constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[],line:8},extends:[],type:"injectable"}],guards:[],interceptors:[],classes:[],directives:[],components:[{name:"JsonViewComponent",id:"component-JsonViewComponent-0309d784ec5d891a374c6314f7b4338f00d4f10e43b72fe73f63dd1b7e48d2d63b86486ef94dadff0294f08b2780ac3a0be3585548db7c1c51ae2a802ba17ae3",file:"src/lib/json-view/json-view.component.ts",encapsulation:["ViewEncapsulation.Emulated"],entryComponents:[],inputs:[],outputs:[],providers:[{name:"ExpanderService",type:"injectable"}],selector:"nxt-json-view",styleUrls:["./json-view.component.scss"],styles:[],templateUrl:["./json-view.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"data",deprecated:!1,deprecationMessage:"",rawdescription:`
JSON data, any valid JSON object`,description:`<p>JSON data, any valid JSON object</p>
`,line:23,type:"any",decorators:[]},{name:"levelLabels",deprecated:!1,deprecationMessage:"",rawdescription:`
Custom labels for elements within the hierarcy`,description:`<p>Custom labels for elements within the hierarcy</p>
`,line:27,type:"LevelLabels",decorators:[]},{name:"levelOpen",deprecated:!1,deprecationMessage:"",rawdescription:"\nInitial number of levels to be expanded; to expand / collapse the view after initial render, use `expandTo` / `collapseTo`",description:`<p>Initial number of levels to be expanded; to expand / collapse the view after initial render, use <code>expandTo</code> / <code>collapseTo</code></p>
`,line:25,type:"number",decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[{name:"collapseTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:47,deprecated:!1,deprecationMessage:"",rawdescription:`
Collapse any open items above the given level`,description:`<p>Collapse any open items above the given level</p>
`,jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"expandTo",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"void",typeParameters:[],line:41,deprecated:!1,deprecationMessage:"",rawdescription:`
Expand all items up to the given level`,description:`<p>Expand all items up to the given level</p>
`,jsdoctags:[{name:"level",type:"number",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]},{name:"ngAfterViewChecked",args:[],optional:!1,returnType:"void",typeParameters:[],line:32,deprecated:!1,deprecationMessage:""}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[{name:"JsonViewItemComponent",type:"component"}],description:"",rawdescription:`
`,type:"component",assetsDirs:[],extends:[],implements:["AfterViewChecked"]}],modules:[{name:"JsonViewModule",id:"module-JsonViewModule-b2d29f6b5d522b069dfae164dcb7673534c6d23bd515465cbe52ed45d17105a37774415f1ce2ba3400060f7a74e4c13594cdb3075b8d1d7bafd2f9fea12bb093",description:"",deprecationMessage:"use standalone imports",deprecated:!0,file:"src/lib/json-view.module.ts",methods:[],children:[{type:"providers",elements:[]},{type:"declarations",elements:[]},{type:"imports",elements:[{name:"JsonViewComponent"}]},{type:"exports",elements:[{name:"JsonViewComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]}],miscellaneous:[]};var h=()=>["shell"],y=()=>["typescript"],x=()=>["html"],E=(()=>{class d{constructor(c){this.title=c,this.installScript="npm install --save nxt-json-view",this.importComponent=`import { JsonViewComponent } from 'nxt-json-view'

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
}`,this.includeHTML='<nxt-json-view [data]="data"></nxt-json-view>',this.componentDocs=v.components.find(e=>e.selector=="nxt-json-view"),this.inputs=this.componentDocs?.inputsClass.sort((e,a)=>e.line-a.line)??[]}ngOnInit(){this.title.setTitle("Getting started | nxt-json-view")}static{this.\u0275fac=function(e){return new(e||d)(l(b))}}static{this.\u0275cmp=m({type:d,selectors:[["app-getting-started"]],decls:22,vars:13,consts:[[1,"h4"],[3,"code","languages"],[1,"h3"],[3,"inputs"]],template:function(e,a){e&1&&(n(0,"app-content-wrap")(1,"h1"),s(2,"Getting started with nxt-json-view"),t(),n(3,"h2",0),s(4,"Installing"),t(),p(5,"app-code-block",1)(6,"br"),n(7,"h2",0),s(8,"Import JSON view component"),t(),p(9,"app-code-block",1)(10,"br"),n(11,"h2",0),s(12,"Prepare JSON data"),t(),p(13,"app-code-block",1)(14,"br"),n(15,"h2",0),s(16,"Use it in a template"),t(),p(17,"app-code-block",1)(18,"br"),n(19,"h2",2),s(20,"Configuration options"),t(),p(21,"app-inputs-table",3),t()),e&2&&(o(5),i("code",a.installScript)("languages",r(9,h)),o(4),i("code",a.importComponent)("languages",r(10,y)),o(4),i("code",a.data)("languages",r(11,y)),o(4),i("code",a.includeHTML)("languages",r(12,x)),o(4),i("inputs",a.inputs))},dependencies:[f,u,g],encapsulation:2})}}return d})();export{E as GettingStartedComponent};
