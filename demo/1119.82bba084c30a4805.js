"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1119],{1119:(C,u,n)=>{n.r(u),n.d(u,{FilterComponent:()=>D});var e=n(1201),g=n(7514),o=n(673),s=n(6603);const _=t=>({"is-invalid":t});function T(t,f){1&t&&(e.j41(0,"div",4),e.EFF(1," Selected date can't be a Sunday.\n"),e.k0s())}const l=new Date;l.setDate(l.getDate()-l.getDay());let D=(()=>{class t{constructor(){this.value=l,this.dateTimeFilter=d=>0!=d?.getDay()}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["app-filter"]],decls:5,vars:8,consts:[["dateTimeControl","ngModel"],["picker",""],["placeholder","Date and time",1,"form-control",3,"ngModelChange","ngClass","ngModel","nxtDateTimeTrigger","nxtDateTime","dateTimeFilter"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"]],template:function(i,r){if(1&i){const a=e.RV6();e.j41(0,"input",2,0),e.mxI("ngModelChange",function(c){return e.eBV(a),e.DH7(r.value,c)||(r.value=c),e.Njj(c)}),e.k0s(),e.nrm(2,"nxt-date-time",null,1),e.DNE(4,T,2,0,"div",3)}if(2&i){const a=e.sdS(1),m=e.sdS(3);e.Y8G("ngClass",e.eq3(6,_,a.invalid)),e.R50("ngModel",r.value),e.Y8G("nxtDateTimeTrigger",m)("nxtDateTime",m)("dateTimeFilter",r.dateTimeFilter),e.R7$(4),e.Y8G("ngIf",null==a.errors?null:a.errors.dateTimeFilter)}},dependencies:[g.YU,g.bT,o.me,o.BC,o.vS,s.pk,s.Vg,s.Z$]})}return t})()}}]);