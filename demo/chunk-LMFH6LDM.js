import{a as B,d as C,e as H}from"./chunk-VXOG6CLE.js";import{Aa as v,Ac as F,Dc as M,da as h,ob as j,za as L,zc as x}from"./chunk-JSDYMTJZ.js";var Z=(()=>{class l{constructor(){this.options=h(B)?.lineNumbersOptions,this.hljs=h(C),this.highlight=h(H),this.nativeElement=h(v).nativeElement,this.startFrom=L(this.options?.startFrom,{transform:F}),this.singleLine=L(this.options?.singleLine,{transform:x}),M(()=>{let u=this.hljs.hljs();this.highlight.highlightResult()&&(u.lineNumbersBlock&&u.lineNumbersBlock(this.nativeElement,{startFrom:this.startFrom(),singleLine:this.singleLine()}),this.nativeElement.firstElementChild?.tagName.toUpperCase()==="TABLE"?this.nativeElement.classList.add("hljs-line-numbers"):this.nativeElement.classList.remove("hljs-line-numbers"))})}static{this.\u0275fac=function(f){return new(f||l)}}static{this.\u0275dir=j({type:l,selectors:[["","nxtHighlight","","lineNumbers",""],["","nxtHighlightAuto","","lineNumbers",""]],inputs:{startFrom:[1,"startFrom"],singleLine:[1,"singleLine"]}})}}return l})();function $(l){let p="hljs-ln",u="hljs-ln-line",f="hljs-ln-code",O="hljs-ln-numbers",b="hljs-ln-n",m="data-line-number",E=/\r\n|\r|\n/g;w();function D(t){let e=t;for(;e;){if(e.className&&e.className.indexOf("hljs-ln-code")!==-1)return!0;e=e.parentNode}return!1}function S(t){let e=t;for(;e&&e.nodeName!=="TABLE";)e=e.parentNode;return e}function _(t){let e=t.toString(),n=t.anchorNode;for(;n?.nodeName!=="TD";)n=n?.parentNode||null;let i=t.focusNode;for(;i?.nodeName!=="TD";)i=i?.parentNode||null;let s=parseInt(n?.dataset.lineNumber||"0",10),r=parseInt(i?.dataset.lineNumber||"0",10);if(s!=r){let o=n.textContent,a=i.textContent;if(s>r){let d=s;s=r,r=d;let N=o;o=a,a=N}for(;e.indexOf(o||"")!==0;)o=o.slice(1);for(;e.lastIndexOf(a||"")===-1;)a=a.slice(0,-1);let g=o,q=S(n);for(let d=s+1;d<r;++d){let N=c('.{0}[{1}="{2}"]',[f,m,d]),J=q?.querySelector(N);g+=`
`+(J?.textContent||"")}return g+=`
`+a,g}else return e}l.addEventListener("copy",t=>{let e=window.getSelection();if(D(e?.anchorNode)){let n;window.navigator.userAgent.indexOf("Edge")!==-1&&e?n=_(e):n=e?.toString(),n&&(t.clipboardData?.setData("text/plain",n),t.preventDefault())}});function w(){let t=l.createElement("style");t.innerHTML=c(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[p,b,m]),l.getElementsByTagName("head")[0].appendChild(t)}function I(t,e){typeof t=="object"&&(t.innerHTML=y(t,e))}function y(t,e){let n=V(t,e);return T(t),R(t.innerHTML,n)}function R(t,e){let n=A(t);if(n[n.length-1].trim()===""&&n.pop(),n.length>1||e?.singleLine){let i="";for(let s=0,r=n.length;s<r;s++)i+=c('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[u,O,b,m,f,s+ +!!e?.startFrom,n[s].length>0?n[s]:" "]);return c('<table class="{0}">{1}</table>',[p,i])}return t}function V(t,e){return e=e||{},{singleLine:G(e),startFrom:U(t,e)}}function G(t){return t?.singleLine?t.singleLine:!1}function U(t,e){let i=1;isFinite(e?.startFrom??NaN)&&(i=e.startFrom);let s=P(t,"data-ln-start-from");return s!==null&&(i=X(s,1)),i}function T(t){K(t.textContent)>0&&(t.childNodes.forEach(e=>T(e)),k(t))}function k(t){if(t?.tagName?.toUpperCase()!=="SPAN")return;let e=t.className,i=A(t.innerHTML).map(s=>{let r=s.length>0?s:" ";return c('<span class="{0}">{1}</span>',[e,r])}).join(`
`);t.outerHTML=i}function A(t){return t.length===0?[]:t.split(E)}function K(t){return(t?.trim().match(E)||[]).length}function c(t,e){return t.replace(/\{(\d+)\}/g,(n,i)=>e[i]!==null&&e[i]!==void 0?e[i]:n)}function P(t,e){return t.hasAttribute(e)?t.getAttribute(e):null}function X(t,e){if(!t)return e;let n=Number(t);return isFinite(n)?n:e}return I}export{Z as a,$ as b};
