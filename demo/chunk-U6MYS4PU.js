import{b as k,c as D}from"./chunk-KCRWWTAV.js";import{a as M}from"./chunk-J4YY4LDY.js";import{a as j}from"./chunk-Z6VTQ3B4.js";import"./chunk-YAVBBEME.js";import"./chunk-EVPIJEEN.js";import"./chunk-7PLRDVNF.js";import"./chunk-NEVQNSFW.js";import{$a as x,Eb as p,Fb as n,Gb as h,Kb as I,Ob as w,Qb as d,Qc as v,Vc as E,Yc as T,_b as o,ab as m,kc as y,lb as _,lc as A,ma as l,na as u,pb as C,rb as s,sa as f,va as g,yb as r}from"./chunk-O6WXYVOA.js";import"./chunk-2R6CW7ES.js";function S(e,c){if(e&1){let i=I();p(0,"app-meta",2),w("done",function(){l(i);let a=d();return u(a.doneCb())}),n()}}function W(e,c){if(e&1&&h(0,"app-example",3),e&2){let i=c.ngIf,t=d();r("injector",t.injector)("config",i)}}var B=(()=>{class e extends D{constructor(i,t){super(),this.injector=i,this.ims=t,this.exampleImpl=import("./chunk-BNDOO64T.js").then(a=>({name:"Custom date & time adapter module",path:"pick-datetime/custom-adapter/custom-adapter.example.ts",source:a.default?.trim()})),this.doneCb=this.ims.add()}ngOnInit(){this.exampleImpl.then(()=>this.doneLoading()).catch(console.error)}static{this.\u0275fac=function(t){return new(t||e)(m(f),m(g))}}static{this.\u0275cmp=_({type:e,selectors:[["app-custom-adapter"]],features:[C],decls:14,vars:4,consts:[["title","Writing a custom date adapter | nxt-pick-datetime","description","Angular date and time picker supports custom date-time implementations.",3,"done",4,"ngIf"],[3,"injector","config",4,"ngIf"],["title","Writing a custom date adapter | nxt-pick-datetime","description","Angular date and time picker supports custom date-time implementations.",3,"done"],[3,"injector","config"]],template:function(t,a){t&1&&(s(0,S,1,0,"app-meta",0),p(1,"app-content-wrap")(2,"h1"),o(3,"Writing a custom date adapter"),n(),p(4,"p"),o(5,"If neither of the provided date adapters is suitable for your project, it is possible to create your own date-time implementation. Making the picker work with a different date & time implementation is as easy as extending "),p(6,"code"),o(7,"DateTimeAdapter"),n(),o(8,". You will also want to provide a matching "),p(9,"code"),o(10,"NXT_DATE_TIME_FORMATS"),n(),o(11," to configure formatting strings for your implementation."),n(),s(12,W,1,2,"app-example",1),y(13,"async"),n()),t&2&&(r("ngIf",!a.loading),x(12),r("ngIf",A(13,2,a.exampleImpl)))},dependencies:[M,j,k,T,v,E],encapsulation:2})}}return e})();export{B as CustomAdapterComponent};
