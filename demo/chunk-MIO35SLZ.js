import{d as H,g as v,m as D}from"./chunk-FN67AHOO.js";import{g as _}from"./chunk-2V4DUPVP.js";import{$ as b,Aa as l,Ab as g,D as y,Eb as S,Fb as R,Nc as E,Ob as w,Rb as j,Sb as N,_ as f,ab as n,cb as M,fb as p,fc as B,gb as m,hc as L,lb as k,mb as I,nb as u,rc as C,wa as c,xb as O,yb as A}from"./chunk-O6WXYVOA.js";var T=["*"],U=t=>({dropdown:t}),P=(()=>{class t{constructor(){this.autoClose=!0,this.insideClick=!1,this.isAnimated=!1,this.stopOnClickPropagation=!1}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),h=(()=>{class t{constructor(){this.direction="down",this.autoClose=!0,this.insideClick=!1,this.isAnimated=!1,this.stopOnClickPropagation=!1,this.isOpenChange=new c,this.isDisabledChange=new c,this.toggleClick=new c,this.counts=0,this.dropdownMenu=new Promise(e=>{this.resolveDropdownMenu=e})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"platform"})}}return t})(),V="220ms cubic-bezier(0, 0, 0.2, 1)",F=[v({height:0,overflow:"hidden"}),H(V,v({height:"*",overflow:"hidden"}))],K=(()=>{class t{get direction(){return this._state.direction}constructor(e,i,s,r,d){this._state=e,this.cd=i,this._renderer=s,this._element=r,this.isOpen=!1,this._factoryDropDownAnimation=d.build(F),this._subscription=e.isOpenChange.subscribe(a=>{this.isOpen=a;let o=this._element.nativeElement.querySelector(".dropdown-menu");this._renderer.addClass(this._element.nativeElement.querySelector("div"),"open"),o&&(this._renderer.addClass(o,"show"),(o.classList.contains("dropdown-menu-right")||o.classList.contains("dropdown-menu-end"))&&(this._renderer.setStyle(o,"left","auto"),this._renderer.setStyle(o,"right","0")),this.direction==="up"&&(this._renderer.setStyle(o,"top","auto"),this._renderer.setStyle(o,"transform","translateY(-101%)"))),o&&this._state.isAnimated&&this._factoryDropDownAnimation.create(o).play(),this.cd.markForCheck(),this.cd.detectChanges()})}_contains(e){return this._element.nativeElement.contains(e)}ngOnDestroy(){this._subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)(n(h),n(C),n(p),n(l),n(D))}}static{this.\u0275cmp=k({type:t,selectors:[["bs-dropdown-container"]],hostAttrs:[2,"display","block","position","absolute","z-index","1040"],ngContentSelectors:T,decls:2,vars:9,consts:[[3,"ngClass"]],template:function(i,s){i&1&&(j(),S(0,"div",0),N(1),R()),i&2&&(g("dropup",s.direction==="up")("show",s.isOpen)("open",s.isOpen),A("ngClass",L(7,U,s.direction==="down")))},dependencies:[E],encapsulation:2,changeDetection:0})}}return t})(),q=(()=>{class t{set autoClose(e){this._state.autoClose=e}get autoClose(){return this._state.autoClose}set isAnimated(e){this._state.isAnimated=e}get isAnimated(){return this._state.isAnimated}set insideClick(e){this._state.insideClick=e}get insideClick(){return this._state.insideClick}set isDisabled(e){this._isDisabled=e,this._state.isDisabledChange.emit(e),e&&this.hide()}get isDisabled(){return this._isDisabled}get isOpen(){return this._showInline?this._isInlineOpen:this._dropdown.isShown}set isOpen(e){e?this.show():this.hide()}get _showInline(){return!this.container}constructor(e,i,s,r,d,a,o){this._elementRef=e,this._renderer=i,this._viewContainerRef=s,this._cis=r,this._state=d,this._config=a,this.dropup=!1,this._isInlineOpen=!1,this._isDisabled=!1,this._subscriptions=[],this._isInited=!1,this._state.autoClose=this._config.autoClose,this._state.insideClick=this._config.insideClick,this._state.isAnimated=this._config.isAnimated,this._state.stopOnClickPropagation=this._config.stopOnClickPropagation,this._factoryDropDownAnimation=o.build(F),this._dropdown=this._cis.createLoader(this._elementRef,this._viewContainerRef,this._renderer).provide({provide:h,useValue:this._state}),this.onShown=this._dropdown.onShown,this.onHidden=this._dropdown.onHidden,this.isOpenChange=this._state.isOpenChange}ngOnInit(){this._isInited||(this._isInited=!0,this._dropdown.listen({outsideClick:!1,triggers:this.triggers,show:()=>this.show()}),this._subscriptions.push(this._state.toggleClick.subscribe(e=>this.toggle(e))),this._subscriptions.push(this._state.isDisabledChange.pipe(y(e=>e)).subscribe(()=>this.hide())))}show(){if(!(this.isOpen||this.isDisabled)){if(this._showInline){this._inlinedMenu||this._state.dropdownMenu.then(e=>{this._dropdown.attachInline(e.viewContainer,e.templateRef),this._inlinedMenu=this._dropdown._inlineViewRef,this.addBs4Polyfills(),this._inlinedMenu&&this._renderer.addClass(this._inlinedMenu.rootNodes[0].parentNode,"open"),this.playAnimation()}).catch(),this.addBs4Polyfills(),this._isInlineOpen=!0,this.onShown.emit(!0),this._state.isOpenChange.emit(!0),this.playAnimation();return}this._state.dropdownMenu.then(e=>{let i=this.dropup||typeof this.dropup<"u"&&this.dropup;this._state.direction=i?"up":"down";let s=this.placement||(i?"top start":"bottom start");this._dropdown.attach(K).to(this.container).position({attachment:s}).show({content:e.templateRef,placement:s}),this._state.isOpenChange.emit(!0)}).catch()}}hide(){this.isOpen&&(this._showInline?(this.removeShowClass(),this.removeDropupStyles(),this._isInlineOpen=!1,this.onHidden.emit(!0)):this._dropdown.hide(),this._state.isOpenChange.emit(!1))}toggle(e){return this.isOpen||!e?this.hide():this.show()}_contains(e){return this._elementRef.nativeElement.contains(e.target)||this._dropdown.instance&&this._dropdown.instance._contains(e.target)}navigationClick(e){let i=this._elementRef.nativeElement.querySelector(".dropdown-menu");if(!i)return;let s=this._elementRef.nativeElement.ownerDocument.activeElement,r=i.querySelectorAll(".dropdown-item");switch(e.keyCode){case 38:this._state.counts>0&&r[--this._state.counts].focus();break;case 40:this._state.counts+1<r.length&&(s.classList!==r[this._state.counts].classList?r[this._state.counts].focus():r[++this._state.counts].focus());break;default:}e.preventDefault()}ngOnDestroy(){for(let e of this._subscriptions)e.unsubscribe();this._dropdown.dispose()}addBs4Polyfills(){this.addShowClass(),this.checkRightAlignment(),this.addDropupStyles()}playAnimation(){this._state.isAnimated&&this._inlinedMenu&&setTimeout(()=>{this._inlinedMenu&&this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0]).play()})}addShowClass(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&this._renderer.addClass(this._inlinedMenu.rootNodes[0],"show")}removeShowClass(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&this._renderer.removeClass(this._inlinedMenu.rootNodes[0],"show")}checkRightAlignment(){if(this._inlinedMenu&&this._inlinedMenu.rootNodes[0]){let e=this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-right")||this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-end");this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"left",e?"auto":"0"),this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"right",e?"0":"auto")}}addDropupStyles(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&(this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"top",this.dropup?"auto":"100%"),this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"transform",this.dropup?"translateY(-101%)":"translateY(0)"),this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"bottom","auto"))}removeDropupStyles(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&(this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"top"),this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"transform"),this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"bottom"))}static{this.\u0275fac=function(i){return new(i||t)(n(l),n(p),n(m),n(_),n(h),n(P),n(D))}}static{this.\u0275dir=u({type:t,selectors:[["","bsDropdown",""],["","dropdown",""]],hostVars:6,hostBindings:function(i,s){i&1&&w("keydown.arrowDown",function(d){return s.navigationClick(d)})("keydown.arrowUp",function(d){return s.navigationClick(d)}),i&2&&g("dropup",s.dropup)("open",s.isOpen)("show",s.isOpen)},inputs:{placement:"placement",triggers:"triggers",container:"container",dropup:"dropup",autoClose:"autoClose",isAnimated:"isAnimated",insideClick:"insideClick",isDisabled:"isDisabled",isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange",onShown:"onShown",onHidden:"onHidden"},exportAs:["bs-dropdown"],features:[B([h,_,P])]})}}return t})(),de=(()=>{class t{constructor(e,i,s){e.resolveDropdownMenu({templateRef:s,viewContainer:i})}static{this.\u0275fac=function(i){return new(i||t)(n(h),n(m),n(M))}}static{this.\u0275dir=u({type:t,selectors:[["","bsDropdownMenu",""],["","dropdownMenu",""]],exportAs:["bs-dropdown-menu"]})}}return t})(),ae=(()=>{class t{constructor(e,i,s,r,d){this._changeDetectorRef=e,this._dropdown=i,this._element=s,this._renderer=r,this._state=d,this.isOpen=!1,this._subscriptions=[],this._subscriptions.push(this._state.isOpenChange.subscribe(a=>{this.isOpen=a,a?(this._documentClickListener=this._renderer.listen("document","click",o=>{this._state.autoClose&&o.button!==2&&!this._element.nativeElement.contains(o.target)&&!(this._state.insideClick&&this._dropdown._contains(o))&&(this._state.toggleClick.emit(!1),this._changeDetectorRef.detectChanges())}),this._escKeyUpListener=this._renderer.listen(this._element.nativeElement,"keyup.esc",()=>{this._state.autoClose&&(this._state.toggleClick.emit(!1),this._changeDetectorRef.detectChanges())})):(this._documentClickListener&&this._documentClickListener(),this._escKeyUpListener&&this._escKeyUpListener())})),this._subscriptions.push(this._state.isDisabledChange.subscribe(a=>this.isDisabled=a||void 0))}onClick(e){this._state.stopOnClickPropagation&&e.stopPropagation(),!this.isDisabled&&this._state.toggleClick.emit(!0)}ngOnDestroy(){this._documentClickListener&&this._documentClickListener(),this._escKeyUpListener&&this._escKeyUpListener();for(let e of this._subscriptions)e.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)(n(C),n(q),n(l),n(p),n(h))}}static{this.\u0275dir=u({type:t,selectors:[["","bsDropdownToggle",""],["","dropdownToggle",""]],hostVars:3,hostBindings:function(i,s){i&1&&w("click",function(d){return s.onClick(d)}),i&2&&O("aria-haspopup",!0)("disabled",s.isDisabled)("aria-expanded",s.isOpen)},exportAs:["bs-dropdown-toggle"]})}}return t})(),he=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=I({type:t})}static{this.\u0275inj=b({})}}return t})();export{q as a,de as b,ae as c,he as d};
