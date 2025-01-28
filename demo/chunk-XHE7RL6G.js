import{Ba as Ge,C as xe,Da as Je,Ea as he,F as je,Fa as We,Ga as k,Gc as Q,Hc as it,Ia as fe,Ic as at,Ja as pe,Jc as w,Ka as Ze,L as Ue,Na as z,Oa as j,Pa as U,Pc as ee,Qa as Ye,Ra as Ke,Sa as qe,Ta as He,U as Fe,Ua as Qe,Va as et,W as Be,Wa as tt,X as b,Xa as C,Z as g,aa as T,bd as ct,c as de,ca as h,da as v,db as V,dd as ye,ea as H,fa as ze,fd as te,ga as Ve,gb as nt,ha as $e,l as Le,m as q,q as B,ta as Xe,wa as _,wb as rt,xa as ue,xb as me,xc as st,yc as ot}from"./chunk-JSDYMTJZ.js";import{a as x,b as ke,e as Ce,i as le}from"./chunk-FBFWB55K.js";var G=class{},J=class{},M=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let s=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(s,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new r;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let s=(t.op==="a"?this.headers.get(e):void 0)||[];s.push(...n),this.headers.set(e,s);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let i=this.headers.get(e);if(!i)return;i=i.filter(c=>o.indexOf(c)===-1),i.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,i)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),s=t.toLowerCase();this.headers.set(s,n),this.maybeSetNormalizedName(t,s)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Ee=class{encodeKey(t){return lt(t)}encodeValue(t){return lt(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function Bt(r,t){let e=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[i,c]=o==-1?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,o)),t.decodeValue(s.slice(o+1))],a=e.get(i)||[];a.push(c),e.set(i,a)}),e}var zt=/%(\d[a-f0-9])/gi,Vt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function lt(r){return encodeURIComponent(r).replace(zt,(t,e)=>Vt[e]??t)}function ne(r){return`${r}`}var O=class r{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Ee,t.fromString){if(t.fromObject)throw new b(2805,!1);this.map=Bt(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],s=Array.isArray(n)?n.map(ne):[ne(n)];this.map.set(e,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let s=t[n];Array.isArray(s)?s.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:s,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new r({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(ne(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],s=n.indexOf(ne(t.value));s!==-1&&n.splice(s,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Te=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function $t(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function dt(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function ut(r){return typeof Blob<"u"&&r instanceof Blob}function ht(r){return typeof FormData<"u"&&r instanceof FormData}function Xt(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var $="Content-Type",be="X-Request-URL",gt="text/plain",vt="application/json",Et=`${vt}, ${gt}, */*`,X=class r{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,e,n,s){this.url=e,this.method=t.toUpperCase();let o;if($t(this.method)||s?(this.body=n!==void 0?n:null,o=s):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new M,this.context??=new Te,!this.params)this.params=new O,this.urlWithParams=e;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),a=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+a+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||dt(this.body)||ut(this.body)||ht(this.body)||Xt(this.body)?this.body:this.body instanceof O?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ht(this.body)?null:ut(this.body)?this.body.type||null:dt(this.body)?null:typeof this.body=="string"?gt:this.body instanceof O?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?vt:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,s=t.responseType||this.responseType,o=t.transferCache??this.transferCache,i=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,l=t.headers||this.headers,u=t.params||this.params,m=t.context??this.context;return t.setHeaders!==void 0&&(l=Object.keys(t.setHeaders).reduce((E,d)=>E.set(d,t.setHeaders[d]),l)),t.setParams&&(u=Object.keys(t.setParams).reduce((E,d)=>E.set(d,t.setParams[d]),u)),new r(e,n,i,{params:u,headers:l,context:m,reportProgress:a,responseType:s,withCredentials:c,transferCache:o})}},P=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(P||{}),W=class{headers;status;statusText;url;ok;type;constructor(t,e=200,n="OK"){this.headers=t.headers||new M,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},se=class r extends W{constructor(t={}){super(t)}type=P.ResponseHeader;clone(t={}){return new r({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},L=class r extends W{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=P.Response;clone(t={}){return new r({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},D=class extends W{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},Tt=200,Gt=204;function ge(r,t){return{body:t,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Jt=(()=>{class r{handler;constructor(e){this.handler=e}request(e,n,s={}){let o;if(e instanceof X)o=e;else{let a;s.headers instanceof M?a=s.headers:a=new M(s.headers);let l;s.params&&(s.params instanceof O?l=s.params:l=new O({fromObject:s.params})),o=new X(e,n,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:l,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let i=q(o).pipe(je(a=>this.handler.handle(a)));if(e instanceof X||s.observe==="events")return i;let c=i.pipe(xe(a=>a instanceof L));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(B(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return c.pipe(B(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return c.pipe(B(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return c.pipe(B(a=>a.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new O().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,s={}){return this.request("PATCH",e,ge(s,n))}post(e,n,s={}){return this.request("POST",e,ge(s,n))}put(e,n,s={}){return this.request("PUT",e,ge(s,n))}static \u0275fac=function(n){return new(n||r)(h(G))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),Wt=/^\)\]\}',?\n/;function ft(r){if(r.url)return r.url;let t=be.toLocaleLowerCase();return r.headers.get(t)}var wt=new T(""),ve=(()=>{class r{fetchImpl=v(we,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=v(_);handle(e){return new de(n=>{let s=new AbortController;return this.doRequest(e,s.signal,n).then(Re,o=>n.error(new D({error:o}))),()=>s.abort()})}doRequest(e,n,s){return le(this,null,function*(){let o=this.createRequestInit(e),i;try{let d=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,x({signal:n},o)));Zt(d),s.next({type:P.Sent}),i=yield d}catch(d){s.error(new D({error:d,status:d.status??0,statusText:d.statusText,url:e.urlWithParams,headers:d.headers}));return}let c=new M(i.headers),a=i.statusText,l=ft(i)??e.urlWithParams,u=i.status,m=null;if(e.reportProgress&&s.next(new se({headers:c,status:u,statusText:a,url:l})),i.body){let d=i.headers.get("content-length"),S=[],f=i.body.getReader(),p=0,R,A,y=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>le(this,null,function*(){for(;;){let{done:N,value:F}=yield f.read();if(N)break;if(S.push(F),p+=F.length,e.reportProgress){A=e.responseType==="text"?(A??"")+(R??=new TextDecoder).decode(F,{stream:!0}):void 0;let _e=()=>s.next({type:P.DownloadProgress,total:d?+d:void 0,loaded:p,partialText:A});y?y.run(_e):_e()}}}));let I=this.concatChunks(S,p);try{let N=i.headers.get($)??"";m=this.parseBody(e,I,N)}catch(N){s.error(new D({error:N,headers:new M(i.headers),status:i.status,statusText:i.statusText,url:ft(i)??e.urlWithParams}));return}}u===0&&(u=m?Tt:0),u>=200&&u<300?(s.next(new L({body:m,headers:c,status:u,statusText:a,url:l})),s.complete()):s.error(new D({error:m,headers:c,status:u,statusText:a,url:l}))})}parseBody(e,n,s){switch(e.responseType){case"json":let o=new TextDecoder().decode(n).replace(Wt,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:s});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},s=e.withCredentials?"include":void 0;if(e.headers.forEach((o,i)=>n[o]=i.join(",")),e.headers.has("Accept")||(n.Accept=Et),!e.headers.has($)){let o=e.detectContentTypeHeader();o!==null&&(n[$]=o)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:s}}concatChunks(e,n){let s=new Uint8Array(n),o=0;for(let i of e)s.set(i,o),o+=i.length;return s}static \u0275fac=function(n){return new(n||r)};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),we=class{};function Re(){}function Zt(r){r.then(Re,Re)}function Yt(r,t){return t(r)}function Kt(r,t,e){return(n,s)=>$e(e,()=>t(n,o=>r(o,s)))}var Rt=new T(""),bt=new T(""),qt=new T("",{providedIn:"root",factory:()=>!0});var pt=(()=>{class r extends G{backend;injector;chain=null;pendingTasks=v(Xe);contributeToStability=v(qt);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Rt),...this.injector.get(bt,[])]));this.chain=n.reduceRight((s,o)=>Kt(s,o,this.injector),Yt)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,s=>this.backend.handle(s)).pipe(Ue(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||r)(h(J),h(Ve))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})();var Ht=/^\)\]\}',?\n/,Qt=RegExp(`^${be}:`,"m");function en(r){return"responseURL"in r&&r.responseURL?r.responseURL:Qt.test(r.getAllResponseHeaders())?r.getResponseHeader(be):null}var mt=(()=>{class r{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new b(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?Le(n.\u0275loadImpl()):q(null)).pipe(Fe(()=>new de(o=>{let i=n.build();if(i.open(e.method,e.urlWithParams),e.withCredentials&&(i.withCredentials=!0),e.headers.forEach((f,p)=>i.setRequestHeader(f,p.join(","))),e.headers.has("Accept")||i.setRequestHeader("Accept",Et),!e.headers.has($)){let f=e.detectContentTypeHeader();f!==null&&i.setRequestHeader($,f)}if(e.responseType){let f=e.responseType.toLowerCase();i.responseType=f!=="json"?f:"text"}let c=e.serializeBody(),a=null,l=()=>{if(a!==null)return a;let f=i.statusText||"OK",p=new M(i.getAllResponseHeaders()),R=en(i)||e.url;return a=new se({headers:p,status:i.status,statusText:f,url:R}),a},u=()=>{let{headers:f,status:p,statusText:R,url:A}=l(),y=null;p!==Gt&&(y=typeof i.response>"u"?i.responseText:i.response),p===0&&(p=y?Tt:0);let I=p>=200&&p<300;if(e.responseType==="json"&&typeof y=="string"){let N=y;y=y.replace(Ht,"");try{y=y!==""?JSON.parse(y):null}catch(F){y=N,I&&(I=!1,y={error:F,text:y})}}I?(o.next(new L({body:y,headers:f,status:p,statusText:R,url:A||void 0})),o.complete()):o.error(new D({error:y,headers:f,status:p,statusText:R,url:A||void 0}))},m=f=>{let{url:p}=l(),R=new D({error:f,status:i.status||0,statusText:i.statusText||"Unknown Error",url:p||void 0});o.error(R)},E=!1,d=f=>{E||(o.next(l()),E=!0);let p={type:P.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(p.total=f.total),e.responseType==="text"&&i.responseText&&(p.partialText=i.responseText),o.next(p)},S=f=>{let p={type:P.UploadProgress,loaded:f.loaded};f.lengthComputable&&(p.total=f.total),o.next(p)};return i.addEventListener("load",u),i.addEventListener("error",m),i.addEventListener("timeout",m),i.addEventListener("abort",m),e.reportProgress&&(i.addEventListener("progress",d),c!==null&&i.upload&&i.upload.addEventListener("progress",S)),i.send(c),o.next({type:P.Sent}),()=>{i.removeEventListener("error",m),i.removeEventListener("abort",m),i.removeEventListener("load",u),i.removeEventListener("timeout",m),e.reportProgress&&(i.removeEventListener("progress",d),c!==null&&i.upload&&i.upload.removeEventListener("progress",S)),i.readyState!==i.DONE&&i.abort()}})))}static \u0275fac=function(n){return new(n||r)(h(te))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),Mt=new T(""),tn="XSRF-TOKEN",nn=new T("",{providedIn:"root",factory:()=>tn}),rn="X-XSRF-TOKEN",sn=new T("",{providedIn:"root",factory:()=>rn}),oe=class{},on=(()=>{class r{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n,s){this.doc=e,this.platform=n,this.cookieName=s}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ee(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||r)(h(w),h(k),h(nn))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})();function an(r,t){let e=r.url.toLowerCase();if(!v(Mt)||r.method==="GET"||r.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(r);let n=v(oe).getToken(),s=v(sn);return n!=null&&!r.headers.has(s)&&(r=r.clone({headers:r.headers.set(s,n)})),t(r)}var At=function(r){return r[r.Interceptors=0]="Interceptors",r[r.LegacyInterceptors=1]="LegacyInterceptors",r[r.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",r[r.NoXsrfProtection=3]="NoXsrfProtection",r[r.JsonpSupport=4]="JsonpSupport",r[r.RequestsMadeViaParent=5]="RequestsMadeViaParent",r[r.Fetch=6]="Fetch",r}(At||{});function cn(r,t){return{\u0275kind:r,\u0275providers:t}}function rr(...r){let t=[Jt,mt,pt,{provide:G,useExisting:pt},{provide:J,useFactory:()=>v(wt,{optional:!0})??v(mt)},{provide:Rt,useValue:an,multi:!0},{provide:Mt,useValue:!0},{provide:oe,useClass:on}];for(let e of r)t.push(...e.\u0275providers);return H(t)}function sr(){return cn(At.Fetch,[ve,{provide:wt,useExisting:ve},{provide:J,useExisting:ve}])}var ln=new T(""),dn="b",un="h",hn="s",fn="st",pn="u",mn="rt",re=new T(""),yn=["GET","HEAD"];function gn(r,t){let E=v(re),{isCacheActive:e}=E,n=Ce(E,["isCacheActive"]),{transferCache:s,method:o}=r;if(!e||s===!1||o==="POST"&&!n.includePostRequests&&!s||o!=="POST"&&!yn.includes(o)||!n.includeRequestsWithAuthHeaders&&vn(r)||n.filter?.(r)===!1)return t(r);let i=v(pe);if(v(ln,{optional:!0}))throw new b(2803,!1);let a=r.url,l=En(r,a),u=i.get(l,null),m=n.includeHeaders;if(typeof s=="object"&&s.includeHeaders&&(m=s.includeHeaders),u){let{[dn]:d,[mn]:S,[un]:f,[hn]:p,[fn]:R,[pn]:A}=u,y=d;switch(S){case"arraybuffer":y=new TextEncoder().encode(d).buffer;break;case"blob":y=new Blob([d]);break}let I=new M(f);return q(new L({body:y,headers:I,status:p,statusText:R,url:A}))}return t(r).pipe(Be(d=>{d instanceof L}))}function vn(r){return r.headers.has("authorization")||r.headers.has("proxy-authorization")}function yt(r){return[...r.keys()].sort().map(t=>`${t}=${r.getAll(t)}`).join("&")}function En(r,t){let{params:e,method:n,responseType:s}=r,o=yt(e),i=r.serializeBody();i instanceof URLSearchParams?i=yt(i):typeof i!="string"&&(i="");let c=[n,s,t,i,o].join("|"),a=Tn(c);return a}function Tn(r){let t=0;for(let e of r)t=Math.imul(31,t)+e.charCodeAt(0)<<0;return t+=2147483648,t.toString()}function Dt(r){return[{provide:re,useFactory:()=>(Ge("NgHttpTransferCache"),x({isCacheActive:!0},r))},{provide:bt,useValue:gn,multi:!0,deps:[pe,re]},{provide:rt,multi:!0,useFactory:()=>{let t=v(me),e=v(re);return()=>{t.whenStable().then(()=>{e.isCacheActive=!1})}}}]}var Ae=class extends at{supportsDOMEvents=!0},De=class r extends Ae{static makeCurrent(){it(new r)}onAndCancel(t,e,n,s){return t.addEventListener(e,n,s),()=>{t.removeEventListener(e,n,s)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=Rn();return e==null?null:bn(e)}resetBaseElement(){Z=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return ee(document.cookie,t)}},Z=null;function Rn(){return Z=Z||document.querySelector("base"),Z?Z.getAttribute("href"):null}function bn(r){return new URL(r,document.baseURI).pathname}var Mn=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||r)};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),Oe=new T(""),_t=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,s,o){return this._findPluginFor(n).addEventListener(e,n,s,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new b(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||r)(h(Oe),h(_))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),ae=class{_doc;constructor(t){this._doc=t}manager},ie="ng-app-id";function Ot(r){for(let t of r)t.remove()}function Pt(r,t){let e=t.createElement("style");return e.textContent=r,e}function An(r,t,e,n){let s=r.head?.querySelectorAll(`style[${ie}="${t}"],link[${ie}="${t}"]`);if(s)for(let o of s)o.removeAttribute(ie),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Pe(r,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",r),e}var kt=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,s,o={}){this.doc=e,this.appId=n,this.nonce=s,this.isServer=ye(o),An(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let s of e)this.addUsage(s,this.inline,Pt);n?.forEach(s=>this.addUsage(s,this.external,Pe))}removeStyles(e,n){for(let s of e)this.removeUsage(s,this.inline);n?.forEach(s=>this.removeUsage(s,this.external))}addUsage(e,n,s){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,s(e,this.doc)))})}removeUsage(e,n){let s=n.get(e);s&&(s.usage--,s.usage<=0&&(Ot(s.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Ot(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:s}]of this.inline)s.push(this.addElement(e,Pt(n,this.doc)));for(let[n,{elements:s}]of this.external)s.push(this.addElement(e,Pe(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(ie,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||r)(h(w),h(he),h(fe,8),h(k))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),Me={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ne=/%COMP%/g,Ct="%COMP%",Dn=`_nghost-${Ct}`,On=`_ngcontent-${Ct}`,Pn=!0,Sn=new T("",{providedIn:"root",factory:()=>Pn});function In(r){return On.replace(Ne,r)}function Nn(r){return Dn.replace(Ne,r)}function Lt(r,t){return t.map(e=>e.replace(Ne,r))}var St=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,s,o,i,c,a,l=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=i,this.platformId=c,this.ngZone=a,this.nonce=l,this.tracingService=u,this.platformIsServer=ye(c),this.defaultRenderer=new Y(e,i,a,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===z.ShadowDom&&(n=ke(x({},n),{encapsulation:z.Emulated}));let s=this.getOrCreateRenderer(e,n);return s instanceof ce?s.applyToHost(e):s instanceof K&&s.applyStyles(),s}getOrCreateRenderer(e,n){let s=this.rendererByCompId,o=s.get(n.id);if(!o){let i=this.doc,c=this.ngZone,a=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,m=this.platformIsServer;switch(n.encapsulation){case z.Emulated:o=new ce(a,l,n,this.appId,u,i,c,m,this.tracingService);break;case z.ShadowDom:return new Se(a,l,e,n,i,c,this.nonce,m,this.tracingService);default:o=new K(a,l,n,u,i,c,m,this.tracingService);break}s.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||r)(h(_t),h(kt),h(he),h(Sn),h(w),h(k),h(_),h(fe),h(Ze,8))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),Y=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,s,o){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=s,this.tracingService=o}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(Me[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(It(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(It(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new b(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,s){if(s){e=s+":"+e;let o=Me[s];o?t.setAttributeNS(o,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let s=Me[n];s?t.removeAttributeNS(s,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,s){s&(V.DashCase|V.Important)?t.style.setProperty(e,n,s&V.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&V.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,s){if(typeof t=="string"&&(t=Q().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);let o=this.decoratePreventDefault(n);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(o=this.tracingService.wrapEventListener(t,e,o)),this.eventManager.addEventListener(t,e,o,s)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function It(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var Se=class extends Y{sharedStylesHost;hostEl;shadowRoot;constructor(t,e,n,s,o,i,c,a,l){super(t,o,i,a,l),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=Lt(s.id,s.styles);for(let E of u){let d=document.createElement("style");c&&d.setAttribute("nonce",c),d.textContent=E,this.shadowRoot.appendChild(d)}let m=s.getExternalStyles?.();if(m)for(let E of m){let d=Pe(E,o);c&&d.setAttribute("nonce",c),this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},K=class extends Y{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,s,o,i,c,a,l){super(t,o,i,c,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=s,this.styles=l?Lt(l,n.styles):n.styles,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ce=class extends K{contentAttr;hostAttr;constructor(t,e,n,s,o,i,c,a,l){let u=s+"-"+n.id;super(t,e,n,o,i,c,a,l,u),this.contentAttr=In(u),this.hostAttr=Nn(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}},_n=(()=>{class r extends ae{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,s,o){return e.addEventListener(n,s,o),()=>this.removeEventListener(e,n,s,o)}removeEventListener(e,n,s,o){return e.removeEventListener(n,s,o)}static \u0275fac=function(n){return new(n||r)(h(w))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),Nt=["alt","control","meta","shift"],kn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Cn={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},Ln=(()=>{class r extends ae{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,n,s,o){let i=r.parseEventName(n),c=r.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Q().onAndCancel(e,i.domEventName,c,o))}static parseEventName(e){let n=e.toLowerCase().split("."),s=n.shift();if(n.length===0||!(s==="keydown"||s==="keyup"))return null;let o=r._normalizeKey(n.pop()),i="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),i="code."),Nt.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),i+=l+".")}),i+=o,n.length!=0||o.length===0)return null;let a={};return a.domEventName=s,a.fullKey=i,a}static matchEventFullKeyCode(e,n){let s=kn[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(s=e.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Nt.forEach(i=>{if(i!==s){let c=Cn[i];c(e)&&(o+=i+".")}}),o+=s,o===n)}static eventCallback(e,n,s){return o=>{r.matchEventFullKeyCode(o,e)&&s.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||r)(h(w))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})();function _r(r,t){return st(x({rootComponent:r},xn(t)))}function xn(r){return{appProviders:[...zn,...r?.providers??[]],platformProviders:Bn}}function jn(){De.makeCurrent()}function Un(){return new ue}function Fn(){return Je(document),document}var Bn=[{provide:k,useValue:ct},{provide:We,useValue:jn,multi:!0},{provide:w,useFactory:Fn,deps:[]}];var zn=[{provide:ze,useValue:"root"},{provide:ue,useFactory:Un,deps:[]},{provide:Oe,useClass:_n,multi:!0,deps:[w,_,k]},{provide:Oe,useClass:Ln,multi:!0,deps:[w]},St,kt,_t,{provide:nt,useExisting:St},{provide:te,useClass:Mn,deps:[]},[]];var kr=(()=>{class r{_doc;_dom;constructor(e){this._doc=e,this._dom=Q()}addTag(e,n=!1){return e?this._getOrCreateElement(e,n):null}addTags(e,n=!1){return e?e.reduce((s,o)=>(o&&s.push(this._getOrCreateElement(o,n)),s),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];let n=this._doc.querySelectorAll(`meta[${e}]`);return n?[].slice.call(n):[]}updateTag(e,n){if(!e)return null;n=n||this._parseSelector(e);let s=this.getTag(n);return s?this._setMetaElementAttributes(e,s):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,n=!1){if(!n){let i=this._parseSelector(e),c=this.getTags(i).filter(a=>this._containsAttributes(e,a))[0];if(c!==void 0)return c}let s=this._dom.createElement("meta");return this._setMetaElementAttributes(e,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(e,n){return Object.keys(e).forEach(s=>n.setAttribute(this._getMetaKeyMap(s),e[s])),n}_parseSelector(e){let n=e.name?"name":"property";return`${n}="${e[n]}"`}_containsAttributes(e,n){return Object.keys(e).every(s=>n.getAttribute(this._getMetaKeyMap(s))===e[s])}_getMetaKeyMap(e){return Vn[e]||e}static \u0275fac=function(n){return new(n||r)(h(w))};static \u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Vn={httpEquiv:"http-equiv"},Cr=(()=>{class r{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||r)(h(w))};static \u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var $n=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=g({token:r,factory:function(n){let s=null;return n?s=new(n||r):s=h(Xn),s},providedIn:"root"})}return r})(),Xn=(()=>{class r extends $n{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case C.NONE:return n;case C.HTML:return U(n,"HTML")?j(n):tt(this._doc,String(n)).toString();case C.STYLE:return U(n,"Style")?j(n):n;case C.SCRIPT:if(U(n,"Script"))return j(n);throw new b(5200,!1);case C.URL:return U(n,"URL")?j(n):et(String(n));case C.RESOURCE_URL:if(U(n,"ResourceURL"))return j(n);throw new b(5201,!1);default:throw new b(5202,!1)}}bypassSecurityTrustHtml(e){return Ye(e)}bypassSecurityTrustStyle(e){return Ke(e)}bypassSecurityTrustScript(e){return qe(e)}bypassSecurityTrustUrl(e){return He(e)}bypassSecurityTrustResourceUrl(e){return Qe(e)}static \u0275fac=function(n){return new(n||r)(h(w))};static \u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ie=function(r){return r[r.NoHttpTransferCache=0]="NoHttpTransferCache",r[r.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",r[r.I18nSupport=2]="I18nSupport",r[r.EventReplay=3]="EventReplay",r[r.IncrementalHydration=4]="IncrementalHydration",r}(Ie||{});function Lr(...r){let t=[],e=new Set,n=e.has(Ie.HttpTransferCacheOptions);for(let{\u0275providers:s,\u0275kind:o}of r)e.add(o),s.length&&t.push(s);return H([[],ot(),e.has(Ie.NoHttpTransferCache)||n?[]:Dt({}),t])}export{O as a,Jt as b,rr as c,sr as d,St as e,_r as f,kr as g,Cr as h,$n as i,Lr as j};
