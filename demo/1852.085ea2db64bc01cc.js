"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1852],{1852:(u,l,e)=>{e.r(l),e.d(l,{LiveTestComponent:()=>m});var t=e(4840),_=e(6552),o=e(1960),d=e(3852);function p(n,c){if(1&n&&t.wR5(0,"nxt-json-view",3),2&n){const a=t.GaO();t.E7m("data",a.data)("levelOpen",1)}}function g(n,c){1&n&&(t.I0R(0,"p"),t.OEk(1,"Failed to parse input string; please enter valid JSON"),t.C$Y())}let m=(()=>{class n{constructor(){this.data={},this.jsonString=JSON.stringify(this.data),this.invalidInput=!1}load(a){this.jsonString=a;try{this.data=JSON.parse(this.jsonString),this.invalidInput=!1}catch{this.invalidInput=!0}}static#t=this.\u0275fac=function(s){return new(s||n)};static#n=this.\u0275cmp=t.In1({type:n,selectors:[["app-live-test"]],decls:5,vars:3,consts:[["rows","15",1,"form-control",3,"ngModel","ngModelChange"],[3,"data","levelOpen",4,"ngIf","ngIfElse"],["warning",""],[3,"data","levelOpen"]],template:function(s,i){if(1&s&&(t.I0R(0,"textarea",0),t.qCj("ngModelChange",function(v){return i.load(v)}),t.C$Y(),t.wR5(1,"br"),t.yuY(2,p,1,2,"nxt-json-view",1)(3,g,2,0,"ng-template",null,2,t.gJz)),2&s){const r=t.Gew(4);t.E7m("ngModel",i.jsonString),t.yG2(2),t.E7m("ngIf",!i.invalidInput)("ngIfElse",r)}},dependencies:[_.u_,o.ot,o.ue,o._G,d.e],styles:["textarea[_ngcontent-%COMP%]{font-family:var(--bs-font-monospace)}"]})}return n})()}}]);