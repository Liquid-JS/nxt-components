import{e as G}from"./chunk-AEVFSNL7.js";import{Aa as F,Ab as B,Ac as _,D as d,Ea as P,F as O,Gc as x,U as c,Va as N,W as f,Z as p,_ as E,_c as C,aa as A,da as r,fc as k,g as v,hb as m,i as l,l as g,mb as D,n as h,nb as L,pa as H,pb as S,q as M,r as u,y as w,ya as R,yc as U,za as y}from"./chunk-DIWKY5NV.js";import{i as s}from"./chunk-FBFWB55K.js";var I=new A("HIGHLIGHT_OPTIONS");function ne(t){return[{provide:I,useValue:t}]}var o=function(t){return t.FULL_WITH_CORE_LIBRARY_IMPORTS="The full library and the core library were imported, only one of them should be imported!",t.FULL_WITH_LANGUAGE_IMPORTS="The highlighting languages were imported they are not needed!",t.CORE_WITHOUT_LANGUAGE_IMPORTS="The highlighting languages were not imported!",t.LANGUAGE_WITHOUT_CORE_IMPORTS="The core library was not imported!",t.NO_FULL_AND_NO_CORE_IMPORTS="Highlight.js library was not imported!",t}(o||{}),z=(()=>{class t{constructor(){this.document=r(x),this.isPlatformBrowser=C(r(P)),this.options=r(I,{optional:!0}),this._ready=new v(null),this.ready=M(this._ready.asObservable().pipe(d(e=>!!e))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(c(e=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=e,this.loadLineNumbers().pipe(f(i=>{i.activateLineNumbers(),this._ready.next(e)}))):(this._ready.next(e),l)),O(e=>(console.error("[HLJS] ",e),this._ready.error(e),l))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return h(()=>o.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return h(()=>o.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return h(()=>o.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return h(()=>o.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(c(e=>this._loadLanguages(e)))}return h(()=>o.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(e){let i=Object.entries(this.options.languages).map(([n,V])=>T(V()).pipe(f(b=>e.registerLanguage(n,b))));return w(i).pipe(u(()=>e))}loadCoreLibrary(){return T(this.options.coreLibraryLoader())}loadFullLibrary(){return T(this.options.fullLibraryLoader())}loadLineNumbers(){return g(this.options.lineNumbersLoader())}setTheme(e){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=e:this.loadTheme(e))}loadTheme(e){this._themeLinkElement=this.document.createElement("link"),this._themeLinkElement.href=e,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.document.head.appendChild(this._themeLinkElement)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),T=t=>g(t).pipe(d(a=>!!a?.default),u(a=>a.default)),q=(()=>{class t{constructor(){this.loader=r(z),this.options=r(I,{optional:!0}),this.hljsSignal=m(null),this.hljs=U(()=>this.hljsSignal()),this.loader.ready.then(e=>{this.hljsSignal.set(e),this.options?.highlightOptions&&e.configure(this.options.highlightOptions)})}highlight(e,i){return s(this,null,function*(){return(yield this.loader.ready).highlight(e,i)})}highlightAuto(e,i){return s(this,null,function*(){return(yield this.loader.ready).highlightAuto(e,i)})}highlightElement(e){return s(this,null,function*(){(yield this.loader.ready).highlightElement(e)})}highlightAll(){return s(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(e){return s(this,null,function*(){(yield this.loader.ready).configure(e)})}registerLanguage(e,i){return s(this,null,function*(){(yield this.loader.ready).registerLanguage(e,i)})}unregisterLanguage(e){return s(this,null,function*(){(yield this.loader.ready).unregisterLanguage(e)})}registerAliases(n,V){return s(this,arguments,function*(e,{languageName:i}){(yield this.loader.ready).registerAliases(e,{languageName:i})})}listLanguages(){return s(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(e){return s(this,null,function*(){return(yield this.loader.ready).getLanguage(e)})}safeMode(){return s(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return s(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(e,i){return s(this,null,function*(){let n=yield this.loader.ready;n.lineNumbersBlock&&n.lineNumbersBlock(e,i)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),j;function Y(){if(!j)try{j=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:t=>t})}catch{}return j}function J(t){return Y()?.createHTML(t)||t}var W=(()=>{class t{constructor(){this._hljs=r(q),this._nativeElement=r(F).nativeElement,this._sanitizer=r(G),_({write:()=>{let e=this.code();this.setTextContent(e||""),e&&this.highlightElement(e)}}),_({write:()=>{let e=this.highlightResult();this.setInnerHTML(e?.value),this.highlighted.emit(e)}})}setTextContent(e){requestAnimationFrame(()=>this._nativeElement.textContent=e)}setInnerHTML(e){requestAnimationFrame(()=>this._nativeElement.innerHTML=J(this._sanitizer.sanitize(N.HTML,e)||""))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=L({type:t})}}return t})();var re=(()=>{class t extends W{constructor(){super(...arguments),this.code=y(null,{alias:"highlightAuto"}),this.highlightResult=m(null),this.languages=y(),this.highlighted=R()}highlightElement(e){return s(this,null,function*(){let i=yield this._hljs.highlightAuto(e,this.languages());this.highlightResult.set(i)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=H(t)))(n||t)}})()}static{this.\u0275dir=L({type:t,selectors:[["","highlightAuto",""]],hostVars:2,hostBindings:function(i,n){i&2&&B("hljs",!0)},inputs:{code:[1,"highlightAuto","code"],languages:[1,"languages"]},outputs:{highlighted:"highlighted"},features:[k([{provide:W,useExisting:t}]),S]})}}return t})(),he=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=D({type:t})}static{this.\u0275inj=E({})}}return t})();export{I as a,ne as b,q as c,W as d,re as e,he as f};
