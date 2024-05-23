"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3461],{5214:(fe,le,Me)=>{const ue=":";Error;const Xe=function(o,...c){if(Xe.translate){const h=Xe.translate(o,c);o=h[0],c=h[1]}let u=ot(o[0],o.raw[0]);for(let h=1;h<o.length;h++)u+=c[h-1]+ot(o[h],o.raw[h]);return u},gt=":";function ot(o,c){return c.charAt(0)===gt?o.substring(function Ze(o,c){for(let u=1,h=1;u<o.length;u++,h++)if("\\"===c[h])h++;else if(o[u]===ue)return u;throw new Error(`Unterminated $localize metadata block in "${c}".`)}(o,c)+1):o}globalThis.$localize=Xe,Me(6550),Me(7871)},7871:()=>{class fe{constructor(){this.name="TaskTrackingZone",this.microTasks=[],this.macroTasks=[],this.eventTasks=[],this.properties={TaskTrackingZone:this}}static get(){return Zone.current.get("TaskTrackingZone")}getTasksFor(ue){switch(ue){case"microTask":return this.microTasks;case"macroTask":return this.macroTasks;case"eventTask":return this.eventTasks}throw new Error("Unknown task format: "+ue)}onScheduleTask(ue,Pe,ge,J){return J.creationLocation=new Error(`Task '${J.type}' from '${J.source}'.`),this.getTasksFor(J.type).push(J),ue.scheduleTask(ge,J)}onCancelTask(ue,Pe,ge,J){const Te=this.getTasksFor(J.type);for(let Re=0;Re<Te.length;Re++)if(Te[Re]==J){Te.splice(Re,1);break}return ue.cancelTask(ge,J)}onInvokeTask(ue,Pe,ge,J,Te,Re){if("eventTask"===J.type||J.data?.isPeriodic)return ue.invokeTask(ge,J,Te,Re);const Ne=this.getTasksFor(J.type);for(let Oe=0;Oe<Ne.length;Oe++)if(Ne[Oe]==J){Ne.splice(Oe,1);break}return ue.invokeTask(ge,J,Te,Re)}clearEvents(){for(;this.eventTasks.length;)Zone.current.cancelTask(this.eventTasks[0])}}!function le(Me){Me.TaskTrackingZoneSpec=fe}(Zone)},6550:()=>{const fe=globalThis;function le(t){return(fe.__Zone_symbol_prefix||"__zone_symbol__")+t}const Pe=Object.getOwnPropertyDescriptor,ge=Object.defineProperty,J=Object.getPrototypeOf,Te=Object.create,Re=Array.prototype.slice,Ne="addEventListener",Oe="removeEventListener",et=le(Ne),tt=le(Oe),ke="true",ye="false",xe=le("");function nt(t,r){return Zone.current.wrap(t,r)}function De(t,r,l,n,a){return Zone.current.scheduleMacroTask(t,r,l,n,a)}const z=le,je=typeof window<"u",Le=je?window:void 0,ne=je&&Le||globalThis,ct="removeAttribute";function $e(t,r){for(let l=t.length-1;l>=0;l--)"function"==typeof t[l]&&(t[l]=nt(t[l],r+"_"+l));return t}function at(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const Fe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ge=!("nw"in ne)&&typeof ne.process<"u"&&"[object process]"===ne.process.toString(),We=!Ge&&!Fe&&!(!je||!Le.HTMLElement),lt=typeof ne.process<"u"&&"[object process]"===ne.process.toString()&&!Fe&&!(!je||!Le.HTMLElement),qe={},ut=function(t){if(!(t=t||ne.event))return;let r=qe[t.type];r||(r=qe[t.type]=z("ON_PROPERTY"+t.type));const l=this||t.target||ne,n=l[r];let a;return We&&l===Le&&"error"===t.type?(a=n&&n.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===a&&t.preventDefault()):(a=n&&n.apply(this,arguments),null!=a&&!a&&t.preventDefault()),a};function ft(t,r,l){let n=Pe(t,r);if(!n&&l&&Pe(l,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;const a=z("on"+r+"patched");if(t.hasOwnProperty(a)&&t[a])return;delete n.writable,delete n.value;const d=n.get,p=n.set,k=r.slice(2);let b=qe[k];b||(b=qe[k]=z("ON_PROPERTY"+k)),n.set=function(L){let y=this;!y&&t===ne&&(y=ne),y&&("function"==typeof y[b]&&y.removeEventListener(k,ut),p&&p.call(y,null),y[b]=L,"function"==typeof L&&y.addEventListener(k,ut,!1))},n.get=function(){let L=this;if(!L&&t===ne&&(L=ne),!L)return null;const y=L[b];if(y)return y;if(d){let H=d.call(this);if(H)return n.set.call(this,H),"function"==typeof L[ct]&&L.removeAttribute(r),H}return null},ge(t,r,n),t[a]=!0}function rt(t,r,l){if(r)for(let n=0;n<r.length;n++)ft(t,"on"+r[n],l);else{const n=[];for(const a in t)"on"==a.slice(0,2)&&n.push(a);for(let a=0;a<n.length;a++)ft(t,n[a],l)}}const Ee=z("originalInstance");function Ze(t){const r=ne[t];if(!r)return;ne[z(t)]=r,ne[t]=function(){const a=$e(arguments,t);switch(a.length){case 0:this[Ee]=new r;break;case 1:this[Ee]=new r(a[0]);break;case 2:this[Ee]=new r(a[0],a[1]);break;case 3:this[Ee]=new r(a[0],a[1],a[2]);break;case 4:this[Ee]=new r(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},be(ne[t],r);const l=new r(function(){});let n;for(n in l)"XMLHttpRequest"===t&&"responseBlob"===n||function(a){"function"==typeof l[a]?ne[t].prototype[a]=function(){return this[Ee][a].apply(this[Ee],arguments)}:ge(ne[t].prototype,a,{set:function(d){"function"==typeof d?(this[Ee][a]=nt(d,t+"."+a),be(this[Ee][a],d)):this[Ee][a]=d},get:function(){return this[Ee][a]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&(ne[t][n]=r[n])}function ve(t,r,l){let n=t;for(;n&&!n.hasOwnProperty(r);)n=J(n);!n&&t[r]&&(n=t);const a=z(r);let d=null;if(n&&(!(d=n[a])||!n.hasOwnProperty(a))&&(d=n[a]=n[r],at(n&&Pe(n,r)))){const k=l(d,a,r);n[r]=function(){return k(this,arguments)},be(n[r],d)}return d}function wt(t,r,l){let n=null;function a(d){const p=d.data;return p.args[p.cbIdx]=function(){d.invoke.apply(this,arguments)},n.apply(p.target,p.args),d}n=ve(t,r,d=>function(p,k){const b=l(p,k);return b.cbIdx>=0&&"function"==typeof k[b.cbIdx]?De(b.name,k[b.cbIdx],b,a):d.apply(p,k)})}function be(t,r){t[z("OriginalDelegate")]=r}let ht=!1,dt=!1;function _t(){if(ht)return dt;ht=!0;try{const t=Le.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(dt=!0)}catch{}return dt}let He=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){He=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{He=!1}const Pt={useG:!0},_e={},Xe={},gt=new RegExp("^"+xe+"(\\w+)(true|false)$"),ot=z("propagationStopped");function yt(t,r){const l=(r?r(t):t)+ye,n=(r?r(t):t)+ke,a=xe+l,d=xe+n;_e[t]={},_e[t][ye]=a,_e[t][ke]=d}function Rt(t,r,l,n){const a=n&&n.add||Ne,d=n&&n.rm||Oe,p=n&&n.listeners||"eventListeners",k=n&&n.rmAll||"removeAllListeners",b=z(a),L="."+a+":",y="prependListener",H="."+y+":",O=function(I,g,q){if(I.isRemoved)return;const ee=I.callback;let se;"object"==typeof ee&&ee.handleEvent&&(I.callback=v=>ee.handleEvent(v),I.originalDelegate=ee);try{I.invoke(I,g,[q])}catch(v){se=v}const X=I.options;return X&&"object"==typeof X&&X.once&&g[d].call(g,q.type,I.originalDelegate?I.originalDelegate:I.callback,X),se};function V(I,g,q){if(!(g=g||t.event))return;const ee=I||g.target||t,se=ee[_e[g.type][q?ke:ye]];if(se){const X=[];if(1===se.length){const v=O(se[0],ee,g);v&&X.push(v)}else{const v=se.slice();for(let Y=0;Y<v.length&&(!g||!0!==g[ot]);Y++){const $=O(v[Y],ee,g);$&&X.push($)}}if(1===X.length)throw X[0];for(let v=0;v<X.length;v++){const Y=X[v];r.nativeScheduleMicroTask(()=>{throw Y})}}}const Q=function(I){return V(this,I,!1)},F=function(I){return V(this,I,!0)};function we(I,g){if(!I)return!1;let q=!0;g&&void 0!==g.useG&&(q=g.useG);const ee=g&&g.vh;let se=!0;g&&void 0!==g.chkDup&&(se=g.chkDup);let X=!1;g&&void 0!==g.rt&&(X=g.rt);let v=I;for(;v&&!v.hasOwnProperty(a);)v=J(v);if(!v&&I[a]&&(v=I),!v||v[b])return!1;const Y=g&&g.eventNameToString,$={},D=v[b]=v[a],S=v[z(d)]=v[d],Z=v[z(p)]=v[p],de=v[z(k)]=v[k];let te;g&&g.prepend&&(te=v[z(g.prepend)]=v[g.prepend]);const ie=q?function(i){if(!$.isExisting)return D.call($.target,$.eventName,$.capture?F:Q,$.options)}:function(i){return D.call($.target,$.eventName,i.invoke,$.options)},B=q?function(i){if(!i.isRemoved){const f=_e[i.eventName];let _;f&&(_=f[i.capture?ke:ye]);const C=_&&i.target[_];if(C)for(let M=0;M<C.length;M++)if(C[M]===i){C.splice(M,1),i.isRemoved=!0,0===C.length&&(i.allRemoved=!0,i.target[_]=null);break}}if(i.allRemoved)return S.call(i.target,i.eventName,i.capture?F:Q,i.options)}:function(i){return S.call(i.target,i.eventName,i.invoke,i.options)},it=g&&g.diff?g.diff:function(i,f){const _=typeof f;return"function"===_&&i.callback===f||"object"===_&&i.originalDelegate===f},Ve=Zone[z("UNPATCHED_EVENTS")],pt=t[z("PASSIVE_EVENTS")],T=function(i,f,_,C,M=!1,R=!1){return function(){const N=this||t;let A=arguments[0];g&&g.transferEventName&&(A=g.transferEventName(A));let U=arguments[1];if(!U)return i.apply(this,arguments);if(Ge&&"uncaughtException"===A)return i.apply(this,arguments);let K=!1;if("function"!=typeof U){if(!U.handleEvent)return i.apply(this,arguments);K=!0}if(ee&&!ee(i,U,N,arguments))return;const ae=He&&!!pt&&-1!==pt.indexOf(A),pe=function j(i,f){return!He&&"object"==typeof i&&i?!!i.capture:He&&f?"boolean"==typeof i?{capture:i,passive:!0}:i?"object"==typeof i&&!1!==i.passive?{...i,passive:!0}:i:{passive:!0}:i}(arguments[2],ae),Je=pe?.signal;if(Je?.aborted)return;if(Ve)for(let Ce=0;Ce<Ve.length;Ce++)if(A===Ve[Ce])return ae?i.call(N,A,U,pe):i.apply(this,arguments);const vt=!!pe&&("boolean"==typeof pe||pe.capture),St=!(!pe||"object"!=typeof pe)&&pe.once,Dt=Zone.current;let bt=_e[A];bt||(yt(A,Y),bt=_e[A]);const It=bt[vt?ke:ye];let kt,Qe=N[It],Ct=!1;if(Qe){if(Ct=!0,se)for(let Ce=0;Ce<Qe.length;Ce++)if(it(Qe[Ce],U))return}else Qe=N[It]=[];const Nt=N.constructor.name,Ot=Xe[Nt];Ot&&(kt=Ot[A]),kt||(kt=Nt+f+(Y?Y(A):A)),$.options=pe,St&&($.options.once=!1),$.target=N,$.capture=vt,$.eventName=A,$.isExisting=Ct;const ze=q?Pt:void 0;ze&&(ze.taskData=$),Je&&($.options.signal=void 0);const Ie=Dt.scheduleEventTask(kt,U,ze,_,C);if(Je){$.options.signal=Je;const Ce=()=>Ie.zone.cancelTask(Ie);i.call(Je,"abort",Ce,{once:!0}),ze&&(ze.removeAbortListener=()=>Je.removeEventListener("abort",Ce))}return $.target=null,ze&&(ze.taskData=null),St&&(pe.once=!0),!He&&"boolean"==typeof Ie.options||(Ie.options=pe),Ie.target=N,Ie.capture=vt,Ie.eventName=A,K&&(Ie.originalDelegate=U),R?Qe.unshift(Ie):Qe.push(Ie),M?N:void 0}};return v[a]=T(D,L,ie,B,X),te&&(v[y]=T(te,H,function(i){return te.call($.target,$.eventName,i.invoke,$.options)},B,X,!0)),v[d]=function(){const i=this||t;let f=arguments[0];g&&g.transferEventName&&(f=g.transferEventName(f));const _=arguments[2],C=!!_&&("boolean"==typeof _||_.capture),M=arguments[1];if(!M)return S.apply(this,arguments);if(ee&&!ee(S,M,i,arguments))return;const R=_e[f];let N;R&&(N=R[C?ke:ye]);const A=N&&i[N];if(A)for(let U=0;U<A.length;U++){const K=A[U];if(it(K,M)){A.splice(U,1),K.isRemoved=!0,0!==A.length||(K.allRemoved=!0,i[N]=null,C||"string"!=typeof f)||(i[xe+"ON_PROPERTY"+f]=null);const ae=K.data;return ae?.removeAbortListener&&(ae.removeAbortListener(),ae.removeAbortListener=null),K.zone.cancelTask(K),X?i:void 0}}return S.apply(this,arguments)},v[p]=function(){const i=this||t;let f=arguments[0];g&&g.transferEventName&&(f=g.transferEventName(f));const _=[],C=o(i,Y?Y(f):f);for(let M=0;M<C.length;M++){const R=C[M];_.push(R.originalDelegate?R.originalDelegate:R.callback)}return _},v[k]=function(){const i=this||t;let f=arguments[0];if(f){g&&g.transferEventName&&(f=g.transferEventName(f));const _=_e[f];if(_){const R=i[_[ye]],N=i[_[ke]];if(R){const A=R.slice();for(let U=0;U<A.length;U++){const K=A[U];this[d].call(this,f,K.originalDelegate?K.originalDelegate:K.callback,K.options)}}if(N){const A=N.slice();for(let U=0;U<A.length;U++){const K=A[U];this[d].call(this,f,K.originalDelegate?K.originalDelegate:K.callback,K.options)}}}}else{const _=Object.keys(i);for(let C=0;C<_.length;C++){const R=gt.exec(_[C]);let N=R&&R[1];N&&"removeListener"!==N&&this[k].call(this,N)}this[k].call(this,"removeListener")}if(X)return this},be(v[a],D),be(v[d],S),de&&be(v[k],de),Z&&be(v[p],Z),!0}let oe=[];for(let I=0;I<l.length;I++)oe[I]=we(l[I],n);return oe}function o(t,r){if(!r){const d=[];for(let p in t){const k=gt.exec(p);let b=k&&k[1];if(b&&(!r||b===r)){const L=t[p];if(L)for(let y=0;y<L.length;y++)d.push(L[y])}}return d}let l=_e[r];l||(yt(r),l=_e[r]);const n=t[l[ye]],a=t[l[ke]];return n?a?n.concat(a):n.slice():a?a.slice():[]}function c(t,r){const l=t.Event;l&&l.prototype&&r.patchMethod(l.prototype,"stopImmediatePropagation",n=>function(a,d){a[ot]=!0,n&&n.apply(a,d)})}const h=z("zoneTask");function E(t,r,l,n){let a=null,d=null;l+=n;const p={};function k(L){const y=L.data;return y.args[0]=function(){return L.invoke.apply(this,arguments)},y.handleId=a.apply(t,y.args),L}function b(L){return d.call(t,L.data.handleId)}a=ve(t,r+=n,L=>function(y,H){if("function"==typeof H[0]){const O={isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?H[1]||0:void 0,args:H},V=H[0];H[0]=function(){try{return V.apply(this,arguments)}finally{O.isPeriodic||("number"==typeof O.handleId?delete p[O.handleId]:O.handleId&&(O.handleId[h]=null))}};const Q=De(r,H[0],O,k,b);if(!Q)return Q;const F=Q.data.handleId;return"number"==typeof F?p[F]=Q:F&&(F[h]=Q),F&&F.ref&&F.unref&&"function"==typeof F.ref&&"function"==typeof F.unref&&(Q.ref=F.ref.bind(F),Q.unref=F.unref.bind(F)),"number"==typeof F||F?F:Q}return L.apply(t,H)}),d=ve(t,l,L=>function(y,H){const O=H[0];let V;"number"==typeof O?V=p[O]:(V=O&&O[h],V||(V=O)),V&&"string"==typeof V.type?"notScheduled"!==V.state&&(V.cancelFn&&V.data.isPeriodic||0===V.runCount)&&("number"==typeof O?delete p[O]:O&&(O[h]=null),V.zone.cancelTask(V)):L.apply(t,H)})}function G(t,r,l){if(!l||0===l.length)return r;const n=l.filter(d=>d.target===t);if(!n||0===n.length)return r;const a=n[0].ignoreProperties;return r.filter(d=>-1===a.indexOf(d))}function ce(t,r,l,n){t&&rt(t,G(t,r,l),n)}function Se(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function Ke(t,r,l,n,a){const d=Zone.__symbol__(n);if(r[d])return;const p=r[d]=r[n];r[n]=function(k,b,L){return b&&b.prototype&&a.forEach(function(y){const H=`${l}.${n}::`+y,O=b.prototype;try{if(O.hasOwnProperty(y)){const V=t.ObjectGetOwnPropertyDescriptor(O,y);V&&V.value?(V.value=t.wrapWithCurrentZone(V.value,H),t._redefineProperty(b.prototype,y,V)):O[y]&&(O[y]=t.wrapWithCurrentZone(O[y],H))}else O[y]&&(O[y]=t.wrapWithCurrentZone(O[y],H))}catch{}}),p.call(r,k,b,L)},t.attachOriginToPatched(r[n],p)}const Et=function ue(){const t=globalThis,r=!0===t[le("forceDuplicateZoneCheck")];if(t.Zone&&(r||"function"!=typeof t.Zone.__symbol__))throw new Error("Zone already loaded.");return t.Zone??=function Me(){const t=fe.performance;function r(j){t&&t.mark&&t.mark(j)}function l(j,m){t&&t.measure&&t.measure(j,m)}r("Zone");let n=(()=>{class j{static#e=this.__symbol__=le;static assertZonePatched(){if(fe.Promise!==$.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=j.current;for(;e.parent;)e=e.parent;return e}static get current(){return S.zone}static get currentTask(){return Z}static __load_patch(e,s,P=!1){if($.hasOwnProperty(e)){const x=!0===fe[le("forceDuplicateZoneCheck")];if(!P&&x)throw Error("Already loaded patch: "+e)}else if(!fe["__Zone_disable_"+e]){const x="Zone:"+e;r(x),$[e]=s(fe,j,D),l(x,x)}}get parent(){return this._parent}get name(){return this._name}constructor(e,s){this._parent=e,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new d(this,this._parent&&this._parent._zoneDelegate,s)}get(e){const s=this.getZoneWith(e);if(s)return s._properties[e]}getZoneWith(e){let s=this;for(;s;){if(s._properties.hasOwnProperty(e))return s;s=s._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,s){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const P=this._zoneDelegate.intercept(this,e,s),x=this;return function(){return x.runGuarded(P,this,arguments,s)}}run(e,s,P,x){S={parent:S,zone:this};try{return this._zoneDelegate.invoke(this,e,s,P,x)}finally{S=S.parent}}runGuarded(e,s=null,P,x){S={parent:S,zone:this};try{try{return this._zoneDelegate.invoke(this,e,s,P,x)}catch(ie){if(this._zoneDelegate.handleError(this,ie))throw ie}}finally{S=S.parent}}runTask(e,s,P){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||we).name+"; Execution: "+this.name+")");if(e.state===oe&&(e.type===Y||e.type===v))return;const x=e.state!=q;x&&e._transitionTo(q,g),e.runCount++;const ie=Z;Z=e,S={parent:S,zone:this};try{e.type==v&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,s,P)}catch(B){if(this._zoneDelegate.handleError(this,B))throw B}}finally{e.state!==oe&&e.state!==se&&(e.type==Y||e.data&&e.data.isPeriodic?x&&e._transitionTo(g,q):(e.runCount=0,this._updateTaskCount(e,-1),x&&e._transitionTo(oe,q,oe))),S=S.parent,Z=ie}}scheduleTask(e){if(e.zone&&e.zone!==this){let P=this;for(;P;){if(P===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);P=P.parent}}e._transitionTo(I,oe);const s=[];e._zoneDelegates=s,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(P){throw e._transitionTo(se,I,oe),this._zoneDelegate.handleError(this,P),P}return e._zoneDelegates===s&&this._updateTaskCount(e,1),e.state==I&&e._transitionTo(g,I),e}scheduleMicroTask(e,s,P,x){return this.scheduleTask(new p(X,e,s,P,x,void 0))}scheduleMacroTask(e,s,P,x,ie){return this.scheduleTask(new p(v,e,s,P,x,ie))}scheduleEventTask(e,s,P,x,ie){return this.scheduleTask(new p(Y,e,s,P,x,ie))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||we).name+"; Execution: "+this.name+")");if(e.state===g||e.state===q){e._transitionTo(ee,g,q);try{this._zoneDelegate.cancelTask(this,e)}catch(s){throw e._transitionTo(se,ee),this._zoneDelegate.handleError(this,s),s}return this._updateTaskCount(e,-1),e._transitionTo(oe,ee),e.runCount=0,e}}_updateTaskCount(e,s){const P=e._zoneDelegates;-1==s&&(e._zoneDelegates=null);for(let x=0;x<P.length;x++)P[x]._updateTaskCount(e.type,s)}}return j})();const a={name:"",onHasTask:(j,m,e,s)=>j.hasTask(e,s),onScheduleTask:(j,m,e,s)=>j.scheduleTask(e,s),onInvokeTask:(j,m,e,s,P,x)=>j.invokeTask(e,s,P,x),onCancelTask:(j,m,e,s)=>j.cancelTask(e,s)};class d{get zone(){return this._zone}constructor(m,e,s){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=m,this._parentDelegate=e,this._forkZS=s&&(s&&s.onFork?s:e._forkZS),this._forkDlgt=s&&(s.onFork?e:e._forkDlgt),this._forkCurrZone=s&&(s.onFork?this._zone:e._forkCurrZone),this._interceptZS=s&&(s.onIntercept?s:e._interceptZS),this._interceptDlgt=s&&(s.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=s&&(s.onIntercept?this._zone:e._interceptCurrZone),this._invokeZS=s&&(s.onInvoke?s:e._invokeZS),this._invokeDlgt=s&&(s.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=s&&(s.onInvoke?this._zone:e._invokeCurrZone),this._handleErrorZS=s&&(s.onHandleError?s:e._handleErrorZS),this._handleErrorDlgt=s&&(s.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=s&&(s.onHandleError?this._zone:e._handleErrorCurrZone),this._scheduleTaskZS=s&&(s.onScheduleTask?s:e._scheduleTaskZS),this._scheduleTaskDlgt=s&&(s.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=s&&(s.onScheduleTask?this._zone:e._scheduleTaskCurrZone),this._invokeTaskZS=s&&(s.onInvokeTask?s:e._invokeTaskZS),this._invokeTaskDlgt=s&&(s.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=s&&(s.onInvokeTask?this._zone:e._invokeTaskCurrZone),this._cancelTaskZS=s&&(s.onCancelTask?s:e._cancelTaskZS),this._cancelTaskDlgt=s&&(s.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=s&&(s.onCancelTask?this._zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const P=s&&s.onHasTask;(P||e&&e._hasTaskZS)&&(this._hasTaskZS=P?s:a,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,s.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this._zone),s.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this._zone),s.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this._zone))}fork(m,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,m,e):new n(m,e)}intercept(m,e,s){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,m,e,s):e}invoke(m,e,s,P,x){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,m,e,s,P,x):e.apply(s,P)}handleError(m,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,m,e)}scheduleTask(m,e){let s=e;if(this._scheduleTaskZS)this._hasTaskZS&&s._zoneDelegates.push(this._hasTaskDlgtOwner),s=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,m,e),s||(s=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=X)throw new Error("Task is missing scheduleFn.");Q(e)}return s}invokeTask(m,e,s,P){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,m,e,s,P):e.callback.apply(s,P)}cancelTask(m,e){let s;if(this._cancelTaskZS)s=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,m,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");s=e.cancelFn(e)}return s}hasTask(m,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,m,e)}catch(s){this.handleError(m,s)}}_updateTaskCount(m,e){const s=this._taskCounts,P=s[m],x=s[m]=P+e;if(x<0)throw new Error("More tasks executed then were scheduled.");0!=P&&0!=x||this.hasTask(this._zone,{microTask:s.microTask>0,macroTask:s.macroTask>0,eventTask:s.eventTask>0,change:m})}}class p{constructor(m,e,s,P,x,ie){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=m,this.source=e,this.data=P,this.scheduleFn=x,this.cancelFn=ie,!s)throw new Error("callback is not defined");this.callback=s;const B=this;this.invoke=m===Y&&P&&P.useG?p.invokeTask:function(){return p.invokeTask.call(fe,B,this,arguments)}}static invokeTask(m,e,s){m||(m=this),de++;try{return m.runCount++,m.zone.runTask(m,e,s)}finally{1==de&&F(),de--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(oe,I)}_transitionTo(m,e,s){if(this._state!==e&&this._state!==s)throw new Error(`${this.type} '${this.source}': can not transition to '${m}', expecting state '${e}'${s?" or '"+s+"'":""}, was '${this._state}'.`);this._state=m,m==oe&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const k=le("setTimeout"),b=le("Promise"),L=le("then");let O,y=[],H=!1;function V(j){if(O||fe[b]&&(O=fe[b].resolve(0)),O){let m=O[L];m||(m=O.then),m.call(O,j)}else fe[k](j,0)}function Q(j){0===de&&0===y.length&&V(F),j&&y.push(j)}function F(){if(!H){for(H=!0;y.length;){const j=y;y=[];for(let m=0;m<j.length;m++){const e=j[m];try{e.zone.runTask(e,null,null)}catch(s){D.onUnhandledError(s)}}}D.microtaskDrainDone(),H=!1}}const we={name:"NO ZONE"},oe="notScheduled",I="scheduling",g="scheduled",q="running",ee="canceling",se="unknown",X="microTask",v="macroTask",Y="eventTask",$={},D={symbol:le,currentZoneFrame:()=>S,onUnhandledError:te,microtaskDrainDone:te,scheduleMicroTask:Q,showUncaughtError:()=>!n[le("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:te,patchMethod:()=>te,bindArguments:()=>[],patchThen:()=>te,patchMacroTask:()=>te,patchEventPrototype:()=>te,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>te,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>te,wrapWithCurrentZone:()=>te,filterProperties:()=>[],attachOriginToPatched:()=>te,_redefineProperty:()=>te,patchCallbacks:()=>te,nativeScheduleMicroTask:V};let S={parent:null,zone:new n(null,null)},Z=null,de=0;function te(){}return l("Zone","Zone"),n}(),t.Zone}();(function Ue(t){(function st(t){t.__load_patch("ZoneAwarePromise",(r,l,n)=>{const a=Object.getOwnPropertyDescriptor,d=Object.defineProperty,k=n.symbol,b=[],L=!1!==r[k("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],y=k("Promise"),H=k("then"),O="__creationTrace__";n.onUnhandledError=T=>{if(n.showUncaughtError()){const i=T&&T.rejection;i?console.error("Unhandled Promise rejection:",i instanceof Error?i.message:i,"; Zone:",T.zone.name,"; Task:",T.task&&T.task.source,"; Value:",i,i instanceof Error?i.stack:void 0):console.error(T)}},n.microtaskDrainDone=()=>{for(;b.length;){const T=b.shift();try{T.zone.runGuarded(()=>{throw T.throwOriginal?T.rejection:T})}catch(i){Q(i)}}};const V=k("unhandledPromiseRejectionHandler");function Q(T){n.onUnhandledError(T);try{const i=l[V];"function"==typeof i&&i.call(this,T)}catch{}}function F(T){return T&&T.then}function we(T){return T}function oe(T){return B.reject(T)}const I=k("state"),g=k("value"),q=k("finally"),ee=k("parentPromiseValue"),se=k("parentPromiseState"),X="Promise.then",v=null,Y=!0,$=!1,D=0;function S(T,i){return f=>{try{j(T,i,f)}catch(_){j(T,!1,_)}}}const Z=function(){let T=!1;return function(f){return function(){T||(T=!0,f.apply(null,arguments))}}},de="Promise resolved with itself",te=k("currentTaskTrace");function j(T,i,f){const _=Z();if(T===f)throw new TypeError(de);if(T[I]===v){let C=null;try{("object"==typeof f||"function"==typeof f)&&(C=f&&f.then)}catch(M){return _(()=>{j(T,!1,M)})(),T}if(i!==$&&f instanceof B&&f.hasOwnProperty(I)&&f.hasOwnProperty(g)&&f[I]!==v)e(f),j(T,f[I],f[g]);else if(i!==$&&"function"==typeof C)try{C.call(f,_(S(T,i)),_(S(T,!1)))}catch(M){_(()=>{j(T,!1,M)})()}else{T[I]=i;const M=T[g];if(T[g]=f,T[q]===q&&i===Y&&(T[I]=T[se],T[g]=T[ee]),i===$&&f instanceof Error){const R=l.currentTask&&l.currentTask.data&&l.currentTask.data[O];R&&d(f,te,{configurable:!0,enumerable:!1,writable:!0,value:R})}for(let R=0;R<M.length;)s(T,M[R++],M[R++],M[R++],M[R++]);if(0==M.length&&i==$){T[I]=D;let R=f;try{throw new Error("Uncaught (in promise): "+function p(T){return T&&T.toString===Object.prototype.toString?(T.constructor&&T.constructor.name||"")+": "+JSON.stringify(T):T?T.toString():Object.prototype.toString.call(T)}(f)+(f&&f.stack?"\n"+f.stack:""))}catch(N){R=N}L&&(R.throwOriginal=!0),R.rejection=f,R.promise=T,R.zone=l.current,R.task=l.currentTask,b.push(R),n.scheduleMicroTask()}}}return T}const m=k("rejectionHandledHandler");function e(T){if(T[I]===D){try{const i=l[m];i&&"function"==typeof i&&i.call(this,{rejection:T[g],promise:T})}catch{}T[I]=$;for(let i=0;i<b.length;i++)T===b[i].promise&&b.splice(i,1)}}function s(T,i,f,_,C){e(T);const M=T[I],R=M?"function"==typeof _?_:we:"function"==typeof C?C:oe;i.scheduleMicroTask(X,()=>{try{const N=T[g],A=!!f&&q===f[q];A&&(f[ee]=N,f[se]=M);const U=i.run(R,void 0,A&&R!==oe&&R!==we?[]:[N]);j(f,!0,U)}catch(N){j(f,!1,N)}},f)}const x=function(){},ie=r.AggregateError;class B{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(i){return i instanceof B?i:j(new this(null),Y,i)}static reject(i){return j(new this(null),$,i)}static withResolvers(){const i={};return i.promise=new B((f,_)=>{i.resolve=f,i.reject=_}),i}static any(i){if(!i||"function"!=typeof i[Symbol.iterator])return Promise.reject(new ie([],"All promises were rejected"));const f=[];let _=0;try{for(let R of i)_++,f.push(B.resolve(R))}catch{return Promise.reject(new ie([],"All promises were rejected"))}if(0===_)return Promise.reject(new ie([],"All promises were rejected"));let C=!1;const M=[];return new B((R,N)=>{for(let A=0;A<f.length;A++)f[A].then(U=>{C||(C=!0,R(U))},U=>{M.push(U),_--,0===_&&(C=!0,N(new ie(M,"All promises were rejected")))})})}static race(i){let f,_,C=new this((N,A)=>{f=N,_=A});function M(N){f(N)}function R(N){_(N)}for(let N of i)F(N)||(N=this.resolve(N)),N.then(M,R);return C}static all(i){return B.allWithCallback(i)}static allSettled(i){return(this&&this.prototype instanceof B?this:B).allWithCallback(i,{thenCallback:_=>({status:"fulfilled",value:_}),errorCallback:_=>({status:"rejected",reason:_})})}static allWithCallback(i,f){let _,C,M=new this((U,K)=>{_=U,C=K}),R=2,N=0;const A=[];for(let U of i){F(U)||(U=this.resolve(U));const K=N;try{U.then(ae=>{A[K]=f?f.thenCallback(ae):ae,R--,0===R&&_(A)},ae=>{f?(A[K]=f.errorCallback(ae),R--,0===R&&_(A)):C(ae)})}catch(ae){C(ae)}R++,N++}return R-=2,0===R&&_(A),M}constructor(i){const f=this;if(!(f instanceof B))throw new Error("Must be an instanceof Promise.");f[I]=v,f[g]=[];try{const _=Z();i&&i(_(S(f,Y)),_(S(f,$)))}catch(_){j(f,!1,_)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return B}then(i,f){let _=this.constructor?.[Symbol.species];(!_||"function"!=typeof _)&&(_=this.constructor||B);const C=new _(x),M=l.current;return this[I]==v?this[g].push(M,C,i,f):s(this,M,C,i,f),C}catch(i){return this.then(null,i)}finally(i){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=B);const _=new f(x);_[q]=q;const C=l.current;return this[I]==v?this[g].push(C,_,i,i):s(this,C,_,i,i),_}}B.resolve=B.resolve,B.reject=B.reject,B.race=B.race,B.all=B.all;const mt=r[y]=r.Promise;r.Promise=B;const it=k("thenPatched");function Ve(T){const i=T.prototype,f=a(i,"then");if(f&&(!1===f.writable||!f.configurable))return;const _=i.then;i[H]=_,T.prototype.then=function(C,M){return new B((N,A)=>{_.call(this,N,A)}).then(C,M)},T[it]=!0}return n.patchThen=Ve,mt&&(Ve(mt),ve(r,"fetch",T=>function pt(T){return function(i,f){let _=T.apply(i,f);if(_ instanceof B)return _;let C=_.constructor;return C[it]||Ve(C),_}}(T))),Promise[l.__symbol__("uncaughtPromiseErrors")]=b,B})})(t),function me(t){t.__load_patch("toString",r=>{const l=Function.prototype.toString,n=z("OriginalDelegate"),a=z("Promise"),d=z("Error"),p=function(){if("function"==typeof this){const y=this[n];if(y)return"function"==typeof y?l.call(y):Object.prototype.toString.call(y);if(this===Promise){const H=r[a];if(H)return l.call(H)}if(this===Error){const H=r[d];if(H)return l.call(H)}}return l.call(this)};p[n]=l,Function.prototype.toString=p;const k=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":k.call(this)}})}(t),function re(t){t.__load_patch("util",(r,l,n)=>{const a=Se(r);n.patchOnProperties=rt,n.patchMethod=ve,n.bindArguments=$e,n.patchMacroTask=wt;const d=l.__symbol__("BLACK_LISTED_EVENTS"),p=l.__symbol__("UNPATCHED_EVENTS");r[p]&&(r[d]=r[p]),r[d]&&(l[d]=l[p]=r[d]),n.patchEventPrototype=c,n.patchEventTarget=Rt,n.isIEOrEdge=_t,n.ObjectDefineProperty=ge,n.ObjectGetOwnPropertyDescriptor=Pe,n.ObjectCreate=Te,n.ArraySlice=Re,n.patchClass=Ze,n.wrapWithCurrentZone=nt,n.filterProperties=G,n.attachOriginToPatched=be,n._redefineProperty=Object.defineProperty,n.patchCallbacks=Ke,n.getGlobalObjects=()=>({globalSources:Xe,zoneSymbolEventNames:_e,eventNames:a,isBrowser:We,isMix:lt,isNode:Ge,TRUE_STR:ke,FALSE_STR:ye,ZONE_SYMBOL_PREFIX:xe,ADD_EVENT_LISTENER_STR:Ne,REMOVE_EVENT_LISTENER_STR:Oe})})}(t)})(Et),function Ye(t){t.__load_patch("legacy",r=>{const l=r[t.__symbol__("legacyPatch")];l&&l()}),t.__load_patch("timers",r=>{const l="set",n="clear";E(r,l,n,"Timeout"),E(r,l,n,"Interval"),E(r,l,n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{E(r,"request","cancel","AnimationFrame"),E(r,"mozRequest","mozCancel","AnimationFrame"),E(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,l)=>{const n=["alert","prompt","confirm"];for(let a=0;a<n.length;a++)ve(r,n[a],(p,k,b)=>function(L,y){return l.current.run(p,r,y,b)})}),t.__load_patch("EventTarget",(r,l,n)=>{(function W(t,r){r.patchEventPrototype(t,r)})(r,n),function he(t,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:l,zoneSymbolEventNames:n,TRUE_STR:a,FALSE_STR:d,ZONE_SYMBOL_PREFIX:p}=r.getGlobalObjects();for(let b=0;b<l.length;b++){const L=l[b],O=p+(L+d),V=p+(L+a);n[L]={},n[L][d]=O,n[L][a]=V}const k=t.EventTarget;k&&k.prototype&&r.patchEventTarget(t,r,[k&&k.prototype])}(r,n);const a=r.XMLHttpRequestEventTarget;a&&a.prototype&&n.patchEventTarget(r,n,[a.prototype])}),t.__load_patch("MutationObserver",(r,l,n)=>{Ze("MutationObserver"),Ze("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,l,n)=>{Ze("IntersectionObserver")}),t.__load_patch("FileReader",(r,l,n)=>{Ze("FileReader")}),t.__load_patch("on_property",(r,l,n)=>{!function Be(t,r){if(Ge&&!lt||Zone[t.symbol("patchEvents")])return;const l=r.__Zone_ignore_on_properties;let n=[];if(We){const a=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const d=function Tt(){try{const t=Le.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];ce(a,Se(a),l&&l.concat(d),J(a))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<n.length;a++){const d=r[n[a]];d&&d.prototype&&ce(d.prototype,Se(d.prototype),l)}}(n,r)}),t.__load_patch("customElements",(r,l,n)=>{!function w(t,r){const{isBrowser:l,isMix:n}=r.getGlobalObjects();(l||n)&&t.customElements&&"customElements"in t&&r.patchCallbacks(r,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,n)}),t.__load_patch("XHR",(r,l)=>{!function L(y){const H=y.XMLHttpRequest;if(!H)return;const O=H.prototype;let Q=O[et],F=O[tt];if(!Q){const D=y.XMLHttpRequestEventTarget;if(D){const S=D.prototype;Q=S[et],F=S[tt]}}const we="readystatechange",oe="scheduled";function I(D){const S=D.data,Z=S.target;Z[p]=!1,Z[b]=!1;const de=Z[d];Q||(Q=Z[et],F=Z[tt]),de&&F.call(Z,we,de);const te=Z[d]=()=>{if(Z.readyState===Z.DONE)if(!S.aborted&&Z[p]&&D.state===oe){const m=Z[l.__symbol__("loadfalse")];if(0!==Z.status&&m&&m.length>0){const e=D.invoke;D.invoke=function(){const s=Z[l.__symbol__("loadfalse")];for(let P=0;P<s.length;P++)s[P]===D&&s.splice(P,1);!S.aborted&&D.state===oe&&e.call(D)},m.push(D)}else D.invoke()}else!S.aborted&&!1===Z[p]&&(Z[b]=!0)};return Q.call(Z,we,te),Z[n]||(Z[n]=D),Y.apply(Z,S.args),Z[p]=!0,D}function g(){}function q(D){const S=D.data;return S.aborted=!0,$.apply(S.target,S.args)}const ee=ve(O,"open",()=>function(D,S){return D[a]=0==S[2],D[k]=S[1],ee.apply(D,S)}),X=z("fetchTaskAborting"),v=z("fetchTaskScheduling"),Y=ve(O,"send",()=>function(D,S){if(!0===l.current[v]||D[a])return Y.apply(D,S);{const Z={target:D,url:D[k],isPeriodic:!1,args:S,aborted:!1},de=De("XMLHttpRequest.send",g,Z,I,q);D&&!0===D[b]&&!Z.aborted&&de.state===oe&&de.invoke()}}),$=ve(O,"abort",()=>function(D,S){const Z=function V(D){return D[n]}(D);if(Z&&"string"==typeof Z.type){if(null==Z.cancelFn||Z.data&&Z.data.aborted)return;Z.zone.cancelTask(Z)}else if(!0===l.current[X])return $.apply(D,S)})}(r);const n=z("xhrTask"),a=z("xhrSync"),d=z("xhrListener"),p=z("xhrScheduled"),k=z("xhrURL"),b=z("xhrErrorBeforeScheduled")}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function Ae(t,r){const l=t.constructor.name;for(let n=0;n<r.length;n++){const a=r[n],d=t[a];if(d){if(!at(Pe(t,a)))continue;t[a]=(k=>{const b=function(){return k.apply(this,$e(arguments,l+"."+a))};return be(b,k),b})(d)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,l)=>{function n(a){return function(d){o(r,a).forEach(k=>{const b=r.PromiseRejectionEvent;if(b){const L=new b(a,{promise:d.promise,reason:d.rejection});k.invoke(L)}})}}r.PromiseRejectionEvent&&(l[z("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),l[z("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,l,n)=>{!function u(t,r){r.patchMethod(t,"queueMicrotask",l=>function(n,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}(r,n)})}(Et)}},fe=>{fe(fe.s=5214)}]);