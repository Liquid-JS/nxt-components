"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9917],{9917:(C,M,l)=>{l.r(M),l.d(M,{ValidateMinMaxComponent:()=>v});var e=l(1201),d=l(7514),s=l(673),g=l(6603);const c=n=>({"is-invalid":n});function T(n,u){if(1&n&&(e.j41(0,"div",7),e.EFF(1),e.nI1(2,"date"),e.nI1(3,"date"),e.k0s()),2&n){const i=u.ngIf;e.R7$(),e.Lme(' Selected value should be after "',e.i5U(2,2,i.min,"short"),'", received "',e.i5U(3,5,i.actual,"short"),'".\n')}}function D(n,u){if(1&n&&(e.j41(0,"div",7),e.EFF(1),e.nI1(2,"date"),e.nI1(3,"date"),e.k0s()),2&n){const i=u.ngIf;e.R7$(),e.Lme(' Selected value should be before "',e.i5U(2,2,i.max,"short"),'", received "',e.i5U(3,5,i.actual,"short"),'".\n')}}let v=(()=>{class n{constructor(){this.value=new Date,this.min=new Date(this.value.getTime()+2592e5),this.max=new Date(this.value.getTime()-2592e5)}static#e=this.\u0275fac=function(r){return new(r||n)};static#n=this.\u0275cmp=e.VBU({type:n,selectors:[["app-validate-min-max"]],decls:11,vars:16,consts:[["minDateTimeControl","ngModel"],["pickerMin",""],["maxDateTimeControl","ngModel"],["pickerMax",""],["placeholder","Date and time",1,"form-control",3,"ngModelChange","ngClass","ngModel","nxtDateTimeTrigger","nxtDateTime","min"],["class","invalid-feedback",4,"ngIf"],["placeholder","Date and time",1,"form-control",3,"ngModelChange","ngClass","ngModel","nxtDateTimeTrigger","nxtDateTime","max"],[1,"invalid-feedback"]],template:function(r,t){if(1&r){const o=e.RV6();e.j41(0,"input",4,0),e.mxI("ngModelChange",function(a){return e.eBV(o),e.DH7(t.value,a)||(t.value=a),e.Njj(a)}),e.k0s(),e.nrm(2,"nxt-date-time",null,1),e.DNE(4,T,4,8,"div",5),e.nrm(5,"br"),e.j41(6,"input",6,2),e.mxI("ngModelChange",function(a){return e.eBV(o),e.DH7(t.value,a)||(t.value=a),e.Njj(a)}),e.k0s(),e.nrm(8,"nxt-date-time",null,3),e.DNE(10,D,4,8,"div",5)}if(2&r){const o=e.sdS(1),m=e.sdS(3),a=e.sdS(7),_=e.sdS(9);e.Y8G("ngClass",e.eq3(12,c,o.invalid)),e.R50("ngModel",t.value),e.Y8G("nxtDateTimeTrigger",m)("nxtDateTime",m)("min",t.min),e.R7$(4),e.Y8G("ngIf",null==o.errors?null:o.errors.dateTimeMin),e.R7$(2),e.Y8G("ngClass",e.eq3(14,c,a.invalid)),e.R50("ngModel",t.value),e.Y8G("nxtDateTimeTrigger",_)("nxtDateTime",_)("max",t.max),e.R7$(4),e.Y8G("ngIf",null==a.errors?null:a.errors.dateTimeMax)}},dependencies:[d.YU,d.bT,s.me,s.BC,s.vS,g.pk,g.Vg,g.Z$,d.vh]})}return n})()}}]);