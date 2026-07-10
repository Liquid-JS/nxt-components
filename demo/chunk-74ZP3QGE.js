import{a as g}from"./chunk-WEMF4YVH.js";import{a as b}from"./chunk-VEYTJLAT.js";import"./chunk-RRAD4MXS.js";import{a as f}from"./chunk-6GDUQML5.js";import"./chunk-TJTMHSV7.js";import{a as m,b as u}from"./chunk-LRJGW2TA.js";import"./chunk-G2KJBMH6.js";import"./chunk-NLC34JXE.js";import"./chunk-BAB7QGFT.js";import"./chunk-7LXIMDA5.js";import"./chunk-J7ZIVWIV.js";import"./chunk-VFM4LVCY.js";import{Ib as s,Jb as n,Kb as e,Lb as r,Za as o,kc as t,mb as d,uc as p}from"./chunk-IXDVWOAJ.js";import"./chunk-F5DYP4RK.js";var y={pipes:[],interfaces:[],injectables:[],guards:[],interceptors:[],classes:[],directives:[{name:"SortablejsDirective",id:"directive-SortablejsDirective-80bdb37a09f8f164b4962c63993909947bbed9803f1326c30eccdadf2155ced536c6483e975bce3208411364f7589bc4e0a5dda708063967bdd00eaf6964cd83",file:"src/lib/sortablejs.directive.ts",type:"directive",description:"",rawdescription:`
`,selector:"[nxtSortablejs]",providers:[],hostDirectives:[],standalone:!1,inputsClass:[{name:"cloneFunction",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"CloneFunction<T>",indexKey:"",optional:!1,description:`<p>A function invoked when cloning items from template dataset into target dataset</p>
`,line:50,rawdescription:`
A function invoked when cloning items from template dataset into target dataset`,modifierKind:[148],required:!1},{name:"config",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"Options",indexKey:"",optional:!1,description:`<p>Sortablejs configuration</p>
`,line:47,rawdescription:`
Sortablejs configuration`,modifierKind:[148],required:!1},{name:"nxtSortablejs",coverageIgnore:!1,defaultValue:"undefined",deprecated:!1,deprecationMessage:"",type:"SortableData<T>",indexKey:"",optional:!1,description:`<p>Input data, can be Array or FormArray</p>
`,line:36,rawdescription:`
Input data, can be Array or FormArray`,modifierKind:[148],required:!1},{name:"sortablejsContainer",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"string",indexKey:"",optional:!1,description:`<p>CSS selector for the sortable container</p>
<p>Mostly required when used with custom components which wrap items in multiple containers. In that case,
this should be the selector for the direct HTML parent of sortable items.</p>
`,line:44,rawdescription:`

CSS selector for the sortable container

Mostly required when used with custom components which wrap items in multiple containers. In that case,
this should be the selector for the direct HTML parent of sortable items.
`,modifierKind:[148],required:!1}],outputsClass:[{name:"init",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",type:"Sortable",indexKey:"",optional:!1,description:`<p>Initialised a new Sortablejs instance</p>
`,line:53,rawdescription:`
Initialised a new Sortablejs instance`,modifierKind:[148],required:!1}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],propertiesClass:[],methodsClass:[],coverageIgnore:!1,extends:[],implements:["OnChanges","OnDestroy","AfterViewInit"],relationships:{incoming:[],outgoing:[{name:"OnChanges",type:"interface"},{name:"OnDestroy",type:"interface"},{name:"AfterViewInit",type:"interface"}]}}],components:[],modules:[],miscellaneous:{variables:[],functions:[{name:"provideGlobalSortableOptions",file:"src/lib/globals.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",displayName:"provideGlobalSortableOptions",args:[{name:"globalOptions",type:"Options",deprecated:!1,deprecationMessage:""}],returnType:"Provider[]",jsdoctags:[{name:"globalOptions",type:"Options",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],typealiases:[{name:"CloneFunction",ctype:"miscellaneous",subtype:"typealias",coverageIgnore:!1,rawtype:"function",file:"src/lib/sortablejs.directive.ts",deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",kind:185},{name:"SortableData",ctype:"miscellaneous",subtype:"typealias",coverageIgnore:!1,rawtype:"unknown",file:"src/lib/sortablejs.directive.ts",deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",kind:195}],enumerations:[],groupedVariables:{},groupedFunctions:{"src/lib/globals.ts":[{name:"provideGlobalSortableOptions",file:"src/lib/globals.ts",ctype:"miscellaneous",subtype:"function",coverageIgnore:!1,deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",displayName:"provideGlobalSortableOptions",args:[{name:"globalOptions",type:"Options",deprecated:!1,deprecationMessage:""}],returnType:"Provider[]",jsdoctags:[{name:"globalOptions",type:"Options",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}]},groupedEnumerations:{},groupedTypeAliases:{"src/lib/sortablejs.directive.ts":[{name:"CloneFunction",ctype:"miscellaneous",subtype:"typealias",coverageIgnore:!1,rawtype:"function",file:"src/lib/sortablejs.directive.ts",deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",kind:185},{name:"SortableData",ctype:"miscellaneous",subtype:"typealias",coverageIgnore:!1,rawtype:"unknown",file:"src/lib/sortablejs.directive.ts",deprecated:!1,deprecationMessage:"",rawdescription:"",description:"",kind:195}]}}};var S=()=>["shell"],v=()=>["typescript"],w=()=>["html"],k=(()=>{class c{constructor(){this.installScript="npm install --save nxt-sortablejs sortablejs",this.importGlobal=`import { ApplicationConfig } from '@angular/core'
import { provideGlobalSortableOptions } from 'nxt-sortablejs'

export const appConfig: ApplicationConfig = {
    providers: [
        provideGlobalSortableOptions({
            animation: 150
        })
    ]
}`,this.importDirective=`import { SortablejsDirective } from 'nxt-sortablejs'

@Component({
    ...
    imports: [
        ...
        SortablejsDirective
    ]
})`,this.includeHTML=`<ul [nxtSortablejs]="items">
    <li *ngFor="let item of items">{{ item }}</li>
</ul>`,this.directiveDocs=y.directives.find(a=>a.selector=="[nxtSortablejs]"),this.inputs=this.directiveDocs?.inputsClass.sort((a,i)=>a.line-i.line)??[],this.outputs=this.directiveDocs?.outputsClass.sort((a,i)=>a.line-i.line)??[]}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=d({type:c,selectors:[["app-getting-started"]],decls:27,vars:14,consts:[["title","Getting started | nxt-sortablejs","description","Getting started with Angular Storablejs directive."],[1,"h4"],[3,"code","languages"],[1,"h3"],[3,"inputs"],[3,"outputs"]],template:function(i,l){i&1&&(r(0,"app-meta",0),n(1,"app-content-wrap")(2,"h1"),t(3,"Getting started with nxt-sortablejs"),e(),n(4,"h2",1),t(5,"Installing"),e(),r(6,"app-code-block",2)(7,"br"),n(8,"h2",1),t(9,"Import Sortablejs directive"),e(),r(10,"app-code-block",2)(11,"br"),n(12,"p"),t(13,"If you want to cofigure global Sortablejs options, include "),n(14,"code"),t(15,"provideGlobalSortableOptions"),e(),t(16," in your application."),e(),r(17,"app-code-block",2)(18,"br"),n(19,"h2",1),t(20,"Use it in a template"),e(),r(21,"app-code-block",2)(22,"br"),n(23,"h2",3),t(24,"Configuration options"),e(),r(25,"app-inputs-table",4)(26,"app-outputs-table",5),e()),i&2&&(o(6),s("code",l.installScript)("languages",p(10,S)),o(4),s("code",l.importDirective)("languages",p(11,v)),o(7),s("code",l.importGlobal)("languages",p(12,v)),o(4),s("code",l.includeHTML)("languages",p(13,w)),o(4),s("inputs",l.inputs),o(),s("outputs",l.outputs))},dependencies:[f,u,m,b,g],encapsulation:2})}}return c})();export{k as GettingStartedComponent};
