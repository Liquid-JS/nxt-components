"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5496],{5496:(p,u,n)=>{n.r(u),n.d(u,{FilterComponent:()=>T});var e=n(9409),c=n(9318),r=n(6315),d=n(9245);function g(t,s){1&t&&(e.TgZ(0,"div",4),e._uU(1," Selected date can't be a Sunday.\n"),e.qZA())}const _=function(t){return{"is-invalid":t}},l=new Date;l.setDate(l.getDate()-l.getDay());let T=(()=>{class t{constructor(){this.value=l,this.dateTimeFilter=a=>0!=a?.getDay()}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-filter"]],decls:5,vars:8,consts:[["placeholder","Date and time",1,"form-control",3,"ngClass","ngModel","nxtDateTimeTrigger","nxtDateTime","dateTimeFilter","ngModelChange"],["dateTimeControl","ngModel"],["picker",""],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"]],template:function(a,m){if(1&a&&(e.TgZ(0,"input",0,1),e.NdJ("ngModelChange",function(o){return m.value=o}),e.qZA(),e._UZ(2,"nxt-date-time",null,2),e.YNc(4,g,2,0,"div",3)),2&a){const i=e.MAs(1),o=e.MAs(3);e.Q6J("ngClass",e.VKq(6,_,i.invalid))("ngModel",m.value)("nxtDateTimeTrigger",o)("nxtDateTime",o)("dateTimeFilter",m.dateTimeFilter),e.xp6(4),e.Q6J("ngIf",null==i.errors?null:i.errors.dateTimeFilter)}},dependencies:[c.mk,c.O5,r.Fj,r.JJ,r.On,d.kO,d.u5,d.jg]}),t})()}}]);