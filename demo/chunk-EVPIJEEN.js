import{a as S,c as C,d as H}from"./chunk-7PLRDVNF.js";import{Aa as y,Ac as B,Ea as j,_c as D,ea as c,nb as F,qb as M,wc as w,xc as x}from"./chunk-O6WXYVOA.js";import{g as A}from"./chunk-2R6CW7ES.js";function ue(){let r=window,d=document,f="hljs-ln",m="hljs-ln-line",b="hljs-ln-code",I="hljs-ln-numbers",L="hljs-ln-n",g="data-line-number",p=/\r\n|\r|\n/g;r.hljs?(r.hljs.initLineNumbersOnLoad=G,r.hljs.lineNumbersBlock=O,r.hljs.lineNumbersValue=K,k()):r.console.error("highlight.js not detected!");function R(e){let t=e;for(;t;){if(t.className&&t.className.indexOf("hljs-ln-code")!==-1)return!0;t=t.parentNode}return!1}function P(e){let t=e;for(;t.nodeName!=="TABLE";)t=t.parentNode;return t}function V(e){let t=e.toString(),n=e.anchorNode;for(;n.nodeName!=="TD";)n=n.parentNode;let i=e.focusNode;for(;i.nodeName!=="TD";)i=i.parentNode;let s=parseInt(n.dataset.lineNumber),l=parseInt(i.dataset.lineNumber);if(s!=l){let a=n.textContent,u=i.textContent;if(s>l){let o=s;s=l,l=o,o=a,a=u,u=o}for(;t.indexOf(a)!==0;)a=a.slice(1);for(;t.lastIndexOf(u)===-1;)u=u.slice(0,-1);let N=a,ee=P(n);for(let o=s+1;o<l;++o){let te=h('.{0}[{1}="{2}"]',[b,g,o]),ne=ee.querySelector(te);N+=`
`+ne.textContent}return N+=`
`+u,N}else return t}document.addEventListener("copy",function(e){let t=window.getSelection();if(R(t.anchorNode)){let n;window.navigator.userAgent.indexOf("Edge")!==-1?n=V(t):n=t.toString(),e.clipboardData.setData("text/plain",n),e.preventDefault()}});function k(){let e=d.createElement("style");e.type="text/css",e.innerHTML=h(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[f,L,g]),d.getElementsByTagName("head")[0].appendChild(e)}function G(e){d.readyState==="interactive"||d.readyState==="complete"?E(e):r.addEventListener("DOMContentLoaded",function(){E(e)})}function E(e){try{let t=d.querySelectorAll("code.hljs,code.nohighlight");for(let n in t)t.hasOwnProperty(n)&&(q(t[n])||O(t[n],e))}catch(t){r.console.error("LineNumbers error: ",t)}}function q(e){return e.classList.contains("nohljsln")}function O(e,t){typeof e=="object"&&Y(function(){e.innerHTML=_(e,t)})}function K(e,t){if(typeof e!="string")return;let n=document.createElement("code");return n.innerHTML=e,_(n,t)}function _(e,t){let n=J(e,t);return T(e),U(e.innerHTML,n)}function U(e,t){let n=v(e);if(n[n.length-1].trim()===""&&n.pop(),n.length>1||t.singleLine){let i="";for(let s=0,l=n.length;s<l;s++)i+=h('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[m,I,L,g,b,s+t.startFrom,n[s].length>0?n[s]:" "]);return h('<table class="{0}">{1}</table>',[f,i])}return e}function J(e,t){return t=t||{},{singleLine:X(t),startFrom:z(e,t)}}function X(e){return e.singleLine?e.singleLine:!1}function z(e,t){let i=1;isFinite(t.startFrom)&&(i=t.startFrom);let s=Z(e,"data-ln-start-from");return s!==null&&(i=$(s,1)),i}function T(e){let t=e.childNodes;for(let n in t)if(t.hasOwnProperty(n)){let i=t[n];W(i.textContent)>0&&(i.childNodes.length>0?T(i):Q(i.parentNode))}}function Q(e){let t=e.className;if(!/hljs-/.test(t))return;let n=v(e.innerHTML),i="";for(let s=0;s<n.length;s++){let l=n[s].length>0?n[s]:" ";i+=h(`<span class="{0}">{1}</span>
`,[t,l])}e.innerHTML=i.trim()}function v(e){return e.length===0?[]:e.split(p)}function W(e){return(e.trim().match(p)||[]).length}function Y(e){r.setTimeout(e,0)}function h(e,t){return e.replace(/\{(\d+)\}/g,function(n,i){return t[i]!==void 0?t[i]:n})}function Z(e,t){return e.hasAttribute(t)?e.getAttribute(t):null}function $(e,t){if(!e)return t;let n=Number(e);return isFinite(n)?n:t}}var ce=(()=>{class r{constructor(){this._platform=c(j),this.options=c(S)?.lineNumbersOptions,this._hljs=c(C),this._highlight=c(H),this._nativeElement=c(y).nativeElement,this.startFrom=this.options?.startFrom,this.singleLine=this.options?.singleLine,D(this._platform)&&B(()=>{this._highlight.highlightResult()&&this.addLineNumbers()})}addLineNumbers(){this.destroyLineNumbersObserver(),requestAnimationFrame(()=>A(this,null,function*(){yield this._hljs.lineNumbersBlock(this._nativeElement,{startFrom:this.startFrom,singleLine:this.singleLine}),this._lineNumbersObs=new MutationObserver(()=>{this._nativeElement.firstElementChild?.tagName.toUpperCase()==="TABLE"&&this._nativeElement.classList.add("hljs-line-numbers"),this.destroyLineNumbersObserver()}),this._lineNumbersObs.observe(this._nativeElement,{childList:!0})}))}destroyLineNumbersObserver(){this._lineNumbersObs&&(this._lineNumbersObs.disconnect(),this._lineNumbersObs=null)}static{this.\u0275fac=function(m){return new(m||r)}}static{this.\u0275dir=F({type:r,selectors:[["","highlight","","lineNumbers",""],["","highlightAuto","","lineNumbers",""]],inputs:{startFrom:[2,"startFrom","startFrom",x],singleLine:[2,"singleLine","singleLine",w]},features:[M]})}}return r})();export{ue as a,ce as b};
