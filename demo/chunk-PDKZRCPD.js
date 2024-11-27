import{$ as u,$a as l,$b as h,Eb as s,Fb as o,Gb as v,Nc as C,Ob as _,Pc as b,Qb as c,Qc as w,Yc as x,_b as d,ac as m,ic as O,lb as f,mb as g,rb as p,yb as a,zb as y}from"./chunk-O6WXYVOA.js";var M=(e,r)=>({collapse:e,expand:r});function I(e,r){if(e&1&&(s(0,"span",8)(1,"span"),d(2),o(),s(3,"span"),d(4,": "),o()()),e&2){let t=c();l(2),h(t.key)}}function P(e,r){if(e&1&&(s(0,"span"),d(1),o()),e&2){let t=c(2);l(),m("[ ",t.data==null?null:t.data.length," ]")}}function k(e,r){if(e&1&&(s(0,"span"),d(1),p(2,P,2,1,"span",5),o()),e&2){let t=c();l(),m(" ",t.dataType," "),l(),a("ngIf",t.isArray)}}function L(e,r){if(e&1&&(s(0,"span",9),d(1),o()),e&2){let t=c();a("ngClass",t.valueType),l(),h(t.value)}}function T(e,r){if(e&1&&v(0,"nxt-json-view-item",12),e&2){let t=r.$implicit,n=c(2);a("data",n.data[t])("key",t)("level",n.level+1)("levelOpen",n.levelOpen)("levelLabels",n.levelLabels)}}function V(e,r){if(e&1&&(s(0,"div",10),p(1,T,1,5,"nxt-json-view-item",11),o()),e&2){let t=c();l(),a("ngForOf",t.childrenKeys)}}function j(e){return e!==null&&typeof e=="object"}function J(e){return Array.isArray(e)}function E(e){return typeof e>"u"}function S(e){return typeof e=="string"}function F(e){return typeof e=="number"}function H(e){return typeof e=="boolean"}var K=(()=>{class e{constructor(){this.level=0,this.isOpen=!1,this.hasChildren=!1,this.isObject=!1,this.isArray=!1,this.isInit=!1,this._levelLabels={}}set data(t){this._data=t,this.isInit&&this.init()}get data(){return this._data}ngOnInit(){this.init(),this.isInit=!0}init(){this.levelLabelHandle(),this.levelOpenHandle(),this.childrenKeysHandle(),this.dataHandle()}levelLabelHandle(){this.levelLabels!==void 0&&(this._levelLabels=this.levelLabels[this.level]||{})}levelOpenHandle(){!E(this.levelOpen)&&this.level<=this.levelOpen&&(this.isOpen=!0)}childrenKeysHandle(){j(this.data)&&(this.childrenKeys=Object.keys(this.data),this.childrenKeys&&this.childrenKeys.length&&(this.hasChildren=!0))}dataHandle(){j(this.data)?(this.isObject=!0,this.dataType="Object",J(this.data)&&(this.isArray=!0,this.dataType="Array"),this.key&&this._levelLabels[this.key]&&(this.dataType=this._levelLabels[this.key])):(this.value=this.data,S(this.data)?this.valueType="string":F(this.data)?this.valueType="number":H(this.data)?this.valueType="boolean":this.data===null&&(this.valueType="null",this.value="null"))}toggle(){this.childrenKeys&&this.childrenKeys.length&&(this.isOpen=!this.isOpen)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=f({type:e,selectors:[["nxt-json-view-item"]],inputs:{data:"data",key:"key",level:"level",levelOpen:"levelOpen",levelLabels:"levelLabels"},standalone:!1,decls:8,vars:10,consts:[[1,"json-view"],[3,"click"],[1,"toggler",3,"ngClass"],["class","key",4,"ngIf"],[1,"value"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],["class","children",4,"ngIf"],[1,"key"],[3,"ngClass"],[1,"children"],[3,"data","key","level","levelOpen","levelLabels",4,"ngFor","ngForOf"],[3,"data","key","level","levelOpen","levelLabels"]],template:function(n,i){n&1&&(s(0,"div",0)(1,"a",1),_("click",function(){return i.toggle()}),v(2,"span",2),p(3,I,5,1,"span",3),s(4,"span",4),p(5,k,3,2,"span",5)(6,L,2,2,"span",6),o()(),p(7,V,2,1,"div",7),o()),n&2&&(l(2),y("visibility",i.hasChildren?"visible":"hidden"),a("ngClass",O(7,M,i.isOpen,!i.isOpen)),l(),a("ngIf",i.key),l(2),a("ngIf",i.isObject),l(),a("ngIf",!i.isObject&&i.valueType),l(),a("ngIf",i.hasChildren&&i.isOpen))},dependencies:[C,b,w,e],styles:['.json-view[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none}.json-view[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{width:1em;padding:0;display:block;text-align:center;float:left}.json-view[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:before{content:"-"}.json-view[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]:before{content:"+"}.json-view[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-key, #92278f)}.json-view[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-value, #000000)}.json-view[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-string, #3ab54a)}.json-view[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-number, #25aae2)}.json-view[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .boolean[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-boolean, #aa0d91)}.json-view[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .null[_ngcontent-%COMP%]{color:var(--nxt-json-view-color-null, #f1592a)}.json-view[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%]{margin-left:1em}']})}}return e})(),U=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=f({type:e,selectors:[["nxt-json-view"]],inputs:{data:"data",levelOpen:"levelOpen",levelLabels:"levelLabels"},standalone:!1,decls:2,vars:4,consts:[[1,"nxt-json-view"],[1,"json-view",3,"data","level","levelOpen","levelLabels"]],template:function(n,i){n&1&&(s(0,"div",0),v(1,"nxt-json-view-item",1),o()),n&2&&(l(),a("data",i.data)("level",0)("levelOpen",i.levelOpen)("levelLabels",i.levelLabels))},dependencies:[K],encapsulation:2})}}return e})(),$=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=u({imports:[x]})}}return e})();export{U as a,$ as b};