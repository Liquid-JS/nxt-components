import{a as N,b as W}from"./chunk-F4TWGSQ5.js";import{e as V,f as F}from"./chunk-7PLRDVNF.js";import{$a as h,Aa as I,Eb as m,Fb as y,Gb as x,Hb as O,Ib as A,Kb as L,Ob as g,Qb as v,Qc as R,Yc as H,Zb as U,ab as P,gc as B,lb as M,ma as E,na as S,nb as k,oa as D,rb as w,wa as b,yb as f}from"./chunk-O6WXYVOA.js";var p="text/plain",de="text/html",pe=e=>{};function a(e){pe(e)}var fe=!0;function me(){return fe}function ge(){(console.warn||console.log).apply(console,arguments)}var He=ge.bind("[clipboard-polyfill]"),_=typeof window>"u"?void 0:window,ve=typeof globalThis>"u"?void 0:globalThis,j,z,G,X=(G=(j=_)==null?void 0:j.Promise)!=null?G:(z=ve)==null?void 0:z.Promise;function be(){if(!X)throw new Error("No `Promise` implementation available for `clipboard-polyfill`. Consider using: https://github.com/lgarron/clipboard-polyfill#flat-file-version-with-promise-included");return X}var q=typeof navigator>"u"?void 0:navigator,l=q?.clipboard,J,Ne=(J=l?.read)==null?void 0:J.bind(l),K,We=(K=l?.readText)==null?void 0:K.bind(l),Q,Y=(Q=l?.write)==null?void 0:Q.bind(l),Z,Ve=(Z=l?.writeText)==null?void 0:Z.bind(l),$,T=($=_)==null?void 0:$.ClipboardItem,s=be(),d=_;function he(){return typeof ClipboardEvent>"u"&&typeof d?.clipboardData<"u"&&typeof d?.clipboardData.setData<"u"}function we(e){if(!d.clipboardData)return!1;var r=d.clipboardData.setData("Text",e);return r&&a("writeTextIE worked"),r}function ye(e,r,t){a("listener called"),e.success=!0;for(var n in r){var i=r[n],o=t.clipboardData;o.setData(n,i),n===p&&o.getData(n)!==i&&(a("setting text/plain failed"),e.success=!1)}t.preventDefault()}function te(e){var r={success:!1},t=ye.bind(this,r,e);document.addEventListener("copy",t);try{document.execCommand("copy")}finally{document.removeEventListener("copy",t)}return r.success}function re(e,r){ne(e);var t=te(r);return ie(),t}function xe(e){var r=document.createElement("div");r.setAttribute("style","-webkit-user-select: text !important"),r.textContent="temporary element",document.body.appendChild(r);var t=re(r,e);return document.body.removeChild(r),t}function Ce(e){a("copyTextUsingDOM");var r=document.createElement("div");r.setAttribute("style","-webkit-user-select: text !important");var t=r;r.attachShadow&&(a("Using shadow DOM."),t=r.attachShadow({mode:"open"}));var n=document.createElement("span");n.innerText=e,t.appendChild(n),document.body.appendChild(r),ne(n);var i=document.execCommand("copy");return ie(),document.body.removeChild(r),i}function ne(e){var r=document.getSelection();if(r){var t=document.createRange();t.selectNodeContents(e),r.removeAllRanges(),r.addRange(t)}}function ie(){var e=document.getSelection();e&&e.removeAllRanges()}function Te(e){var r=p in e;if(he()){if(!r)throw new Error("No `text/plain` value was specified.");if(we(e[p]))return!0;throw new Error("Copying failed, possibly because the user rejected it.")}return te(e)?(a("regular execCopy worked"),!0):navigator.userAgent.indexOf("Edge")>-1?(a('UA "Edge" => assuming success'),!0):re(document.body,e)?(a("copyUsingTempSelection worked"),!0):xe(e)?(a("copyUsingTempElem worked"),!0):Ce(e[p])?(a("copyTextUsingDOM worked"),!0):!1}function oe(e,r){for(var t=[],n=0;n<e.length;n++){var i=e[n];t.push(r(i))}return s.all(t).then(o=>{for(var c={},u=0;u<e.length;u++)c[e[u]]=o[u];return c})}var _e=s.resolve(),Ee=()=>s.resolve(!0),ee=s.resolve(!1);function Se(e){return new s((r,t)=>{try{r(e())}catch(n){t(n)}})}function C(e,r){for(var t=0;t<e.length;t++){var n=e[t];if(n.types.indexOf(r)!==-1)return!0}return!1}function De(e,r){var t,n=Object.keys(e),i={};for(var o in e){var c=e[o];typeof c=="string"?i[o]=Ie(o,c):i[o]=c}var u=(t=r?.presentationStyle)!=null?t:"unspecified";function ce(ue){return s.resolve(i[ue])}return{types:n,presentationStyle:u,getType:ce}}var ae=De;function Ie(e,r){return new Blob([r],{type:e})}function Pe(e){return new s((r,t)=>{var n=new FileReader;n.addEventListener("load",()=>{var i=n.result;typeof i=="string"?r(i):t("could not convert blob to string")}),n.readAsText(e)})}function Me(e){return oe(e.types,function(r){return e.getType(r)}).then(r=>new s((t,n)=>{var i={};e.presentationStyle&&(i.presentationStyle=e.presentationStyle),T?t(new T(r,i)):n("window.ClipboardItem is not defined")}))}function ke(e,r){return e.getType(r).then(t=>Pe(t))}function Oe(e){return oe(e.types,function(r){return ke(e,r)})}function le(e){return Se(()=>{if(Y&&T){var r=Y;return a("Using `navigator.clipboard.write()`."),s.all(e.map(Me)).then(t=>r(t).then(Ee).catch(n=>{if(!C(e,p)&&!C(e,de))throw n;return ee}))}return ee}).then(r=>{if(r)return _e;var t=C(e,p);return me()&&!t&&a("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call suppressWarnings() to suppress this warning."),Oe(e[0]).then(n=>{if(!Te(n))throw new Error("write() failed")})})}var se=(()=>{class e{constructor(t){this.elementRef=t,this.clipboardSuccess=new b,this.clipboardError=new b}onClick(t){t&&(t.preventDefault?.(),t.stopPropagation?.()),Promise.resolve().then(()=>{let n={};if(this.target)n["text/plain"]=this.target.innerText,n["text/html"]=this.target.innerHTML;else if(this.text)n["text/plain"]=this.text;else if(t){let i=t.target;n["text/plain"]=i?.innerText,n["text/html"]=i?.innerHTML}else return;return le([new ae(n)])}).then(()=>this.clipboardSuccess.emit()).catch(n=>this.clipboardError.emit(n))}static{this.\u0275fac=function(n){return new(n||e)(P(I))}}static{this.\u0275dir=k({type:e,selectors:[["","appClipboard",""]],hostBindings:function(n,i){n&1&&g("click",function(c){return i.onClick(c)})},inputs:{target:"target",text:"text"},outputs:{clipboardSuccess:"clipboardSuccess",clipboardError:"clipboardError"},exportAs:["appClipboard"]})}}return e})();var Ue=()=>[];function Be(e,r){if(e&1){let t=L();m(0,"button",4,0),g("clipboardSuccess",function(){E(t);let i=U(1),o=v(2);return S(o.show(i))}),D(),m(2,"svg",5),x(3,"path",6)(4,"path",7),y()()}if(e&2){let t=v(2);f("tooltip","Copied to clipboard")("triggers","")("text",t.code)}}function Re(e,r){if(e&1&&(O(0),m(1,"pre"),x(2,"code",2),y(),w(3,Be,5,3,"button",3),A()),e&2){let t,n=v();h(2),f("highlightAuto",n.code)("languages",(t=n.languages)!==null&&t!==void 0?t:B(3,Ue)),h(),f("ngIf",n.copy)}}var tt=(()=>{class e{constructor(){this.copy=!0}show(t){t.show(),clearTimeout(this.ts),this.ts=setTimeout(()=>t.hide(),1e3)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=M({type:e,selectors:[["app-code-block"]],inputs:{code:"code",copy:"copy",languages:"languages"},decls:1,vars:1,consts:[["tooltip","bs-tooltip"],[4,"ngIf"],[3,"highlightAuto","languages"],["type","button","class","btn","appClipboard","",3,"tooltip","triggers","text","clipboardSuccess",4,"ngIf"],["type","button","appClipboard","",1,"btn",3,"clipboardSuccess","tooltip","triggers","text"],["viewBox","0 0 16 16"],["d","M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"],["d","M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"]],template:function(n,i){n&1&&w(0,Re,4,4,"ng-container",1),n&2&&f("ngIf",i.code)},dependencies:[H,R,se,F,V,W,N],styles:["[_nghost-%COMP%]{display:flex;position:relative;border-radius:.5rem;background-color:var(--bs-gray-200);padding:1rem}button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;position:absolute;top:.25rem;right:.25rem;border:none;background:var(--bs-gray-200)!important;border-radius:.5rem}button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:currentcolor;width:1rem;height:1rem;margin:.25rem 0}pre[_ngcontent-%COMP%]{margin:0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding-right:3rem}"]})}}return e})();export{tt as a};
