import{Aa as D,C as z,D as y,Ga as B,Jc as v,Z as l,_ as c,aa as f,c as O,cd as A,da as o,e as I,f as m,gb as b,m as E,nb as d,va as M,wa as R}from"./chunk-JSDYMTJZ.js";var x;try{x=typeof Intl<"u"&&Intl.v8BreakIterator}catch{x=!1}var T=(()=>{class e{_platformId=o(B);isBrowser=this._platformId?A(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||x)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var p;function j(){if(p==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>p=!0}))}finally{p=p||!1}return p}function le(e){return j()?e:!!e.capture}var a;function W(){if(a==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return a=!1,a;if("scrollBehavior"in document.documentElement.style)a=!0;else{let e=Element.prototype.scrollTo;e?a=!/\{\s*\[native code\]\s*\}/.test(e.toString()):a=!1}}return a}var k;function G(){if(k==null){let e=typeof document<"u"?document.head:null;k=!!(e&&(e.createShadowRoot||e.attachShadow))}return k}function ae(e){if(G()){let s=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&s instanceof ShadowRoot)return s}return null}function ce(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let s=e.shadowRoot.activeElement;if(s===e)break;e=s}return e}function de(e){return e.composedPath?e.composedPath()[0]:e.target}function he(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function U(e,s=0){return H(e)?Number(e):arguments.length===2?s:0}function H(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function pe(e){return Array.isArray(e)?e:[e]}function _e(e){return e==null?"":typeof e=="string"?e:`${e}px`}function L(e){return e instanceof D?e.nativeElement:e}var Q=new f("cdk-dir-doc",{providedIn:"root",factory:Y});function Y(){return o(v)}var q=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function K(e){let s=e?.toLowerCase()||"";return s==="auto"&&typeof navigator<"u"&&navigator?.language?q.test(navigator.language)?"rtl":"ltr":s==="rtl"?"rtl":"ltr"}var X=(()=>{class e{value="ltr";change=new M;constructor(){let t=o(Q,{optional:!0});if(t){let i=t.body?t.body.dir:null,n=t.documentElement?t.documentElement.dir:null;this.value=K(i||n||"ltr")}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var V=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=d({type:e});static \u0275inj=c({})}return e})();function Te(e){return e&&typeof e.connect=="function"&&!(e instanceof I)}var w=function(e){return e[e.REPLACED=0]="REPLACED",e[e.INSERTED=1]="INSERTED",e[e.MOVED=2]="MOVED",e[e.REMOVED=3]="REMOVED",e}(w||{}),Ve=new f("_ViewRepeater"),P=class{applyChanges(s,t,i,n,r){s.forEachOperation((h,u,S)=>{let _,g;if(h.previousIndex==null){let C=i(h,u,S);_=t.createEmbeddedView(C.templateRef,C.context,C.index),g=w.INSERTED}else S==null?(t.remove(u),g=w.REMOVED):(_=t.get(u),t.move(_,S),g=w.MOVED);r&&r({context:_?.context,operation:g,record:h})})}detach(){}};var ee=20,Ot=(()=>{class e{_ngZone=o(R);_platform=o(T);_renderer=o(b).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new m;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let i=this.scrollContainers.get(t);i&&(i.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=ee){return this._platform.isBrowser?new O(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=t>0?this._scrolled.pipe(y(t)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):E()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(t,i){let n=this.getAncestorScrollContainers(t);return this.scrolled(i).pipe(z(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(t){let i=[];return this.scrollContainers.forEach((n,r)=>{this._scrollableContainsElement(r,t)&&i.push(r)}),i}_scrollableContainsElement(t,i){let n=L(i),r=t.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(i){return new(i||e)};static \u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var te=20,It=(()=>{class e{_platform=o(T);_listeners;_viewportSize;_change=new m;_document=o(v,{optional:!0});constructor(){let t=o(R),i=o(b).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[i.listen("window","resize",n),i.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+n,right:t.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,i=this._getWindow(),n=t.documentElement,r=n.getBoundingClientRect(),h=-r.top||t.body.scrollTop||i.scrollY||n.scrollTop||0,u=-r.left||t.body.scrollLeft||i.scrollX||n.scrollLeft||0;return{top:h,left:u}}change(t=te){return t>0?this._change.pipe(y(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||e)};static \u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var N=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=d({type:e});static \u0275inj=c({})}return e})(),zt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=d({type:e});static \u0275inj=c({imports:[V,N,V,N]})}return e})();export{T as a,le as b,W as c,ae as d,ce as e,de as f,he as g,U as h,pe as i,_e as j,L as k,X as l,V as m,Te as n,w as o,Ve as p,P as q,Ot as r,It as s,zt as t};
