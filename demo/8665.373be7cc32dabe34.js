"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8665],{8665:(v,u,t)=>{t.r(u),t.d(u,{ValidateMinMaxComponent:()=>T});var e=t(8371),m=t(4565),s=t(4645),M=t(9888);function x(n,i){if(1&n&&(e.TgZ(0,"div",7),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&n){const a=i.ngIf;e.xp6(1),e.AsE(' Selected value should be after "',e.xi3(2,2,a.min,"short"),'", received "',e.xi3(3,5,a.actual,"short"),'".\n')}}function p(n,i){if(1&n&&(e.TgZ(0,"div",7),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&n){const a=i.ngIf;e.xp6(1),e.AsE(' Selected value should be before "',e.xi3(2,2,a.max,"short"),'", received "',e.xi3(3,5,a.actual,"short"),'".\n')}}const _=function(n){return{"is-invalid":n}};let T=(()=>{var n;class i{constructor(){this.value=new Date,this.min=new Date(this.value.getTime()+2592e5),this.max=new Date(this.value.getTime()-2592e5)}}return(n=i).\u0275fac=function(d){return new(d||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-validate-min-max"]],decls:11,vars:16,consts:[["placeholder","Date and time",1,"form-control",3,"ngClass","ngModel","nxtDateTimeTrigger","nxtDateTime","min","ngModelChange"],["minDateTimeControl","ngModel"],["pickerMin",""],["class","invalid-feedback",4,"ngIf"],["placeholder","Date and time",1,"form-control",3,"ngClass","ngModel","nxtDateTimeTrigger","nxtDateTime","max","ngModelChange"],["maxDateTimeControl","ngModel"],["pickerMax",""],[1,"invalid-feedback"]],template:function(d,l){if(1&d&&(e.TgZ(0,"input",0,1),e.NdJ("ngModelChange",function(o){return l.value=o}),e.qZA(),e._UZ(2,"nxt-date-time",null,2),e.YNc(4,x,4,8,"div",3),e._UZ(5,"br"),e.TgZ(6,"input",4,5),e.NdJ("ngModelChange",function(o){return l.value=o}),e.qZA(),e._UZ(8,"nxt-date-time",null,6),e.YNc(10,p,4,8,"div",3)),2&d){const r=e.MAs(1),o=e.MAs(3),g=e.MAs(7),c=e.MAs(9);e.Q6J("ngClass",e.VKq(12,_,r.invalid))("ngModel",l.value)("nxtDateTimeTrigger",o)("nxtDateTime",o)("min",l.min),e.xp6(4),e.Q6J("ngIf",null==r.errors?null:r.errors.dateTimeMin),e.xp6(2),e.Q6J("ngClass",e.VKq(14,_,g.invalid))("ngModel",l.value)("nxtDateTimeTrigger",c)("nxtDateTime",c)("max",l.max),e.xp6(4),e.Q6J("ngIf",null==g.errors?null:g.errors.dateTimeMax)}},dependencies:[m.mk,m.O5,s.Fj,s.JJ,s.On,M.kO,M.u5,M.jg,m.uU]}),i})()}}]);