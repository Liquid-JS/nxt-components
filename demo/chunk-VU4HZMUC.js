import{a as y}from"./chunk-3RIMPEZG.js";import{a as g}from"./chunk-Q357AWTN.js";import"./chunk-AGQK7CUU.js";import{a as b}from"./chunk-NTGCLOXL.js";import{a as f}from"./chunk-4J3257A6.js";import{a as u}from"./chunk-V3FXRC43.js";import"./chunk-6HD4JFOX.js";import"./chunk-2VYBINV6.js";import"./chunk-V2SWLXK6.js";import"./chunk-TA4HLZQA.js";import"./chunk-SMA5AFNH.js";import"./chunk-W2KTVOMD.js";import{Hb as s,Ib as e,Jb as r,ab as i,bc as t,bd as m,jc as l,mb as d,zb as o}from"./chunk-ZCDMTBCB.js";import"./chunk-FBFWB55K.js";var h={pipes:[],interfaces:[],injectables:[],guards:[],interceptors:[],classes:[],directives:[{name:"SortablejsDirective",id:"directive-SortablejsDirective-908dbdf231f50b9a61ed7d02a1ab674782949fc3f5dacb95dd91e2d20b6fc63f7930a81b82f91cffaf8ed0be088e7c26b76312d821bb85e78c0cb4c545b67efd",file:"src/lib/sortablejs.directive.ts",type:"directive",description:"",rawdescription:`
`,selector:"[nxtSortablejs]",providers:[],hostDirectives:[],standalone:!1,inputsClass:[{name:"cloneFunction",deprecated:!1,deprecationMessage:"",rawdescription:`
A function invoked when cloning items from template dataset into target dataset`,description:`<p>A function invoked when cloning items from template dataset into target dataset</p>
`,line:51,type:"CloneFunction<T>",decorators:[]},{name:"config",deprecated:!1,deprecationMessage:"",rawdescription:`
Sortablejs configuration`,description:`<p>Sortablejs configuration</p>
`,line:47,type:"Options",decorators:[]},{name:"nxtSortablejs",deprecated:!1,deprecationMessage:"",rawdescription:`
Input data, can be Array or FormArray`,description:`<p>Input data, can be Array or FormArray</p>
`,line:34,type:"SortableData<T>",decorators:[]},{name:"sortablejsContainer",deprecated:!1,deprecationMessage:"",rawdescription:`

CSS selector for the sortable container

Mostly required when used with custom components which wrap items in multiple containers. In that case,
this should be the selector for the direct HTML parent of sortable items.
`,description:`<p>CSS selector for the sortable container</p>
<p>Mostly required when used with custom components which wrap items in multiple containers. In that case,
this should be the selector for the direct HTML parent of sortable items.</p>
`,line:43,type:"string",decorators:[]}],outputsClass:[{name:"init",defaultValue:"new EventEmitter<Sortable>()",deprecated:!1,deprecationMessage:"",rawdescription:`
Initialised a new Sortablejs instance`,description:`<p>Initialised a new Sortablejs instance</p>
`,line:54,type:"EventEmitter"}],deprecated:!1,deprecationMessage:"",hostBindings:[],hostListeners:[],propertiesClass:[],methodsClass:[],extends:[],implements:["OnChanges","OnDestroy","AfterViewInit"],constructorObj:{name:"constructor",description:"",deprecated:!1,deprecationMessage:"",args:[{name:"globalConfig",type:"Options | undefined",deprecated:!1,deprecationMessage:""},{name:"service",type:"SortablejsService",deprecated:!1,deprecationMessage:""},{name:"element",type:"ElementRef",deprecated:!1,deprecationMessage:""},{name:"zone",type:"NgZone",deprecated:!1,deprecationMessage:""},{name:"renderer",type:"Renderer2",deprecated:!1,deprecationMessage:""}],line:56,jsdoctags:[{name:"globalConfig",type:"Options | undefined",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"service",type:"SortablejsService",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"element",type:"ElementRef",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"zone",type:"NgZone",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}},{name:"renderer",type:"Renderer2",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}}],components:[],modules:[{name:"SortablejsModule",id:"module-SortablejsModule-6edf738da399770f435a5824708d98a7887223f02ec4b1eb6fd58a7479c715e08fcfa9e7b15aa6af322774e328635cf00cc24f30e96206fce0b454114736cbea",description:"",deprecationMessage:"",deprecated:!1,file:"src/lib/sortablejs.module.ts",methods:[{name:"forRoot",args:[{name:"globalOptions",type:"Options",deprecated:!1,deprecationMessage:""}],optional:!1,returnType:"ModuleWithProviders<SortablejsModule>",typeParameters:[],line:12,deprecated:!1,deprecationMessage:"",modifierKind:[126],jsdoctags:[{name:"globalOptions",type:"Options",deprecated:!1,deprecationMessage:"",tagName:{text:"param"}}]}],children:[{type:"providers",elements:[]},{type:"declarations",elements:[{name:"SortablejsDirective"}]},{type:"imports",elements:[]},{type:"exports",elements:[{name:"SortablejsDirective"}]},{type:"bootstrap",elements:[]},{type:"classes",elements:[]}]}],miscellaneous:{variables:[],functions:[],typealiases:[{name:"CloneFunction",ctype:"miscellaneous",subtype:"typealias",rawtype:"function",file:"src/lib/sortablejs.directive.ts",deprecated:!1,deprecationMessage:"",description:"",kind:184},{name:"SortableData",ctype:"miscellaneous",subtype:"typealias",rawtype:"",file:"src/lib/sortablejs.directive.ts",deprecated:!1,deprecationMessage:"",description:"",kind:194}],enumerations:[],groupedVariables:{},groupedFunctions:{},groupedEnumerations:{},groupedTypeAliases:{"src/lib/sortablejs.directive.ts":[{name:"CloneFunction",ctype:"miscellaneous",subtype:"typealias",rawtype:"function",file:"src/lib/sortablejs.directive.ts",deprecated:!1,deprecationMessage:"",description:"",kind:184},{name:"SortableData",ctype:"miscellaneous",subtype:"typealias",rawtype:"",file:"src/lib/sortablejs.directive.ts",deprecated:!1,deprecationMessage:"",description:"",kind:194}]}}};var j=()=>["shell"],M=()=>["typescript"],v=()=>["html"],T=(()=>{class c{constructor(){this.installScript="npm install --save nxt-sortablejs sortablejs",this.importGlobal=`import { SortablejsModule } from 'nxt-sortablejs'

@NgModule({
    ...
    imports: [
        ...
        SortablejsModule.forRoot({
            animation: 150
        })
    ]
})`,this.importLocal=`import { SortablejsModule } from 'nxt-sortablejs'

@NgModule({
    ...
    imports: [
        ...
        SortablejsModule
    ]
})`,this.includeHTML=`<ul [nxtSortablejs]="items">
    <li *ngFor="let item of items">{{ item }}</li>
</ul>`,this.directiveDocs=h.directives.find(n=>n.selector=="[nxtSortablejs]"),this.inputs=this.directiveDocs?.inputsClass.sort((n,a)=>n.line-a.line)??[],this.outputs=this.directiveDocs?.outputsClass.sort((n,a)=>n.line-a.line)??[]}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275cmp=d({type:c,selectors:[["app-getting-started"]],decls:27,vars:14,consts:[["title","Getting started | nxt-sortablejs","description","Getting started with Angular Storablejs directive."],[1,"h4"],[3,"code","languages"],[1,"h3"],[3,"inputs"],[3,"outputs"]],template:function(a,p){a&1&&(r(0,"app-meta",0),s(1,"app-content-wrap")(2,"h1"),t(3,"Getting started with nxt-sortablejs"),e(),s(4,"h2",1),t(5,"Installing"),e(),r(6,"app-code-block",2)(7,"br"),s(8,"h2",1),t(9,"Import Sortablejs module"),e(),r(10,"app-code-block",2)(11,"br"),s(12,"p"),t(13,"If you want to cofigure global Sortablejs options, include "),s(14,"code"),t(15,"SortablejsModule.forRoot"),e(),t(16," in your application."),e(),r(17,"app-code-block",2)(18,"br"),s(19,"h2",1),t(20,"Use it in a template"),e(),r(21,"app-code-block",2)(22,"br"),s(23,"h2",3),t(24,"Configuration options"),e(),r(25,"app-inputs-table",4)(26,"app-outputs-table",5),e()),a&2&&(i(6),o("code",p.installScript)("languages",l(10,j)),i(4),o("code",p.importLocal)("languages",l(11,M)),i(7),o("code",p.importGlobal)("languages",l(12,M)),i(4),o("code",p.includeHTML)("languages",l(13,v)),i(4),o("inputs",p.inputs),i(),o("outputs",p.outputs))},dependencies:[m,b,f,u,g,y],encapsulation:2})}}return c})();export{T as GettingStartedComponent};
