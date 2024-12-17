import{a as v}from"./chunk-VIHJ7RHR.js";import"./chunk-VEYBHYHW.js";import{a as f}from"./chunk-DNEAV7FR.js";import{a as b}from"./chunk-7CVZTBML.js";import"./chunk-UE2RBLSZ.js";import"./chunk-T7I7OEFQ.js";import"./chunk-7FHYA4UU.js";import{d as u}from"./chunk-EIJCZI7K.js";import"./chunk-BTFGR7YM.js";import{$a as o,Eb as i,Fb as t,Gb as r,_b as s,ab as d,gc as c,lb as m,yb as a}from"./chunk-WQFHUJDT.js";import"./chunk-FBFWB55K.js";var h={pipes:[],interfaces:[{name:"LevelLabels",id:"interface-LevelLabels-5b4a265617bc7cb727510602e82a1ec16c08725540b2ebe9ba67fa533594e80490594437becc9f495aac065a3e2ec704744949974e087938e9356e013f5c369c",file:"src/lib/utils/interfaces.ts",deprecated:!1,deprecationMessage:"",type:"interface",properties:[],indexSignatures:[{id:"index-declaration-5b4a265617bc7cb727510602e82a1ec16c08725540b2ebe9ba67fa533594e80490594437becc9f495aac065a3e2ec704744949974e087938e9356e013f5c369c",args:[{name:"level",type:"number",deprecated:!1,deprecationMessage:""}],returnType:"literal type",line:1,deprecated:!1,deprecationMessage:""}],kind:181,methods:[],extends:[]}],injectables:[],guards:[],interceptors:[],classes:[],directives:[],components:[{name:"JsonViewComponent",id:"component-JsonViewComponent-e986a55b0b136feb5c60c15613284fefd44b035e25442c858814230d2a622abb23807902cafe71e16059142593ca774bcab2174892b9edcdd29a0e1487edddef",file:"src/lib/json-view/json-view.component.ts",encapsulation:["ViewEncapsulation.Emulated"],entryComponents:[],inputs:[],outputs:[],providers:[],selector:"nxt-json-view",styleUrls:["./json-view.component.scss"],styles:[],templateUrl:["./json-view.component.html"],viewProviders:[],hostDirectives:[],inputsClass:[{name:"data",deprecated:!1,deprecationMessage:"",rawdescription:`
JSON data, any valid JSON object`,description:`<p>JSON data, any valid JSON object</p>
`,line:13,type:"any",decorators:[]},{name:"levelLabels",deprecated:!1,deprecationMessage:"",rawdescription:`
Custom labels for elements within the hierarcy`,description:`<p>Custom labels for elements within the hierarcy</p>
`,line:17,type:"LevelLabels",decorators:[]},{name:"levelOpen",deprecated:!1,deprecationMessage:"",rawdescription:`
Initial number of levels to be expanded`,description:`<p>Initial number of levels to be expanded</p>
`,line:15,type:"number",decorators:[]}],outputsClass:[],propertiesClass:[],methodsClass:[],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],standalone:!1,imports:[],description:"",rawdescription:`
`,type:"component",assetsDirs:[],extends:[]}],modules:[{name:"JsonViewModule",id:"module-JsonViewModule-c03a761cc397242e8a0e67387ad8e0d27a6cfc84ff82ea2c944674b27cc3f4d6524be2f3830c946090944e93fda74050156cdc379301cc410864970d9f95bc72",description:"",deprecationMessage:"",deprecated:!1,file:"src/lib/json-view.module.ts",methods:[],children:[{type:"providers",elements:[]},{type:"declarations",elements:[{name:"JsonViewComponent"}]},{type:"imports",elements:[]},{type:"exports",elements:[{name:"JsonViewComponent"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]}],miscellaneous:[]};var y=()=>["shell"],g=()=>["typescript"],j=()=>["html"],V=(()=>{class p{constructor(l){this.title=l,this.installScript="npm install --save nxt-json-view",this.importModule=`import { JsonViewModule } from 'nxt-json-view'

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
}`,this.includeHTML='<nxt-json-view [data]="data"></nxt-json-view>',this.componentDocs=h.components.find(e=>e.selector=="nxt-json-view"),this.inputs=this.componentDocs?.inputsClass.sort((e,n)=>e.line-n.line)??[]}ngOnInit(){this.title.setTitle("Getting started | nxt-json-view")}static{this.\u0275fac=function(e){return new(e||p)(d(u))}}static{this.\u0275cmp=m({type:p,selectors:[["app-getting-started"]],decls:22,vars:13,consts:[[1,"h4"],[3,"code","languages"],[1,"h3"],[3,"inputs"]],template:function(e,n){e&1&&(i(0,"app-content-wrap")(1,"h1"),s(2,"Getting started with nxt-json-view"),t(),i(3,"h2",0),s(4,"Installing"),t(),r(5,"app-code-block",1)(6,"br"),i(7,"h2",0),s(8,"Import JSON view module"),t(),r(9,"app-code-block",1)(10,"br"),i(11,"h2",0),s(12,"Prepare JSON data"),t(),r(13,"app-code-block",1)(14,"br"),i(15,"h2",0),s(16,"Use it in a template"),t(),r(17,"app-code-block",1)(18,"br"),i(19,"h2",2),s(20,"Configuration options"),t(),r(21,"app-inputs-table",3),t()),e&2&&(o(5),a("code",n.installScript)("languages",c(9,y)),o(4),a("code",n.importModule)("languages",c(10,g)),o(4),a("code",n.data)("languages",c(11,g)),o(4),a("code",n.includeHTML)("languages",c(12,j)),o(4),a("inputs",n.inputs))},dependencies:[b,f,v],encapsulation:2})}}return p})();export{V as GettingStartedComponent};
