"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9998],{9998:(A,g,h)=>{h.d(g,{Hz:()=>b,Mq:()=>O,TO:()=>f,mr:()=>k});var t=h(7533),m=h(6305),_=h(2244),c=h(1796),p=h(4565),w=h(5627);const C=i=>({dropdown:i}),D=["*"];let v=(()=>{class i{constructor(){this.autoClose=!0,this.insideClick=!1,this.isAnimated=!1,this.stopOnClickPropagation=!1}static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),l=(()=>{class i{constructor(){this.direction="down",this.autoClose=!0,this.insideClick=!1,this.isAnimated=!1,this.stopOnClickPropagation=!1,this.isOpenChange=new t.vpe,this.isDisabledChange=new t.vpe,this.toggleClick=new t.vpe,this.counts=0,this.dropdownMenu=new Promise(e=>{this.resolveDropdownMenu=e})}static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"platform"})}return i})();const u=[(0,c.oB)({height:0,overflow:"hidden"}),(0,c.jt)("220ms cubic-bezier(0, 0, 0.2, 1)",(0,c.oB)({height:"*",overflow:"hidden"}))];let M=(()=>{class i{get direction(){return this._state.direction}constructor(e,s,n,r,d){this._state=e,this.cd=s,this._renderer=n,this._element=r,this.isOpen=!1,this._factoryDropDownAnimation=d.build(u),this._subscription=e.isOpenChange.subscribe(a=>{this.isOpen=a;const o=this._element.nativeElement.querySelector(".dropdown-menu");this._renderer.addClass(this._element.nativeElement.querySelector("div"),"open"),o&&(this._renderer.addClass(o,"show"),(o.classList.contains("dropdown-menu-right")||o.classList.contains("dropdown-menu-end"))&&(this._renderer.setStyle(o,"left","auto"),this._renderer.setStyle(o,"right","0")),"up"===this.direction&&(this._renderer.setStyle(o,"top","auto"),this._renderer.setStyle(o,"transform","translateY(-101%)"))),o&&this._state.isAnimated&&this._factoryDropDownAnimation.create(o).play(),this.cd.markForCheck(),this.cd.detectChanges()})}_contains(e){return this._element.nativeElement.contains(e)}ngOnDestroy(){this._subscription.unsubscribe()}static#e=this.\u0275fac=function(s){return new(s||i)(t.Y36(l),t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(c._j))};static#t=this.\u0275cmp=t.Xpm({type:i,selectors:[["bs-dropdown-container"]],hostAttrs:[2,"display","block","position","absolute","z-index","1040"],ngContentSelectors:D,decls:2,vars:9,consts:[[3,"ngClass"]],template:function(s,n){1&s&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA()),2&s&&(t.ekj("dropup","up"===n.direction)("show",n.isOpen)("open",n.isOpen),t.Q6J("ngClass",t.VKq(7,C,"down"===n.direction)))},dependencies:[p.mk],encapsulation:2,changeDetection:0})}return i})(),f=(()=>{class i{set autoClose(e){this._state.autoClose=e}get autoClose(){return this._state.autoClose}set isAnimated(e){this._state.isAnimated=e}get isAnimated(){return this._state.isAnimated}set insideClick(e){this._state.insideClick=e}get insideClick(){return this._state.insideClick}set isDisabled(e){this._isDisabled=e,this._state.isDisabledChange.emit(e),e&&this.hide()}get isDisabled(){return this._isDisabled}get isOpen(){return this._showInline?this._isInlineOpen:this._dropdown.isShown}set isOpen(e){e?this.show():this.hide()}get _showInline(){return!this.container}constructor(e,s,n,r,d,a,o){this._elementRef=e,this._renderer=s,this._viewContainerRef=n,this._cis=r,this._state=d,this._config=a,this.dropup=!1,this._isInlineOpen=!1,this._isDisabled=!1,this._subscriptions=[],this._isInited=!1,this._state.autoClose=this._config.autoClose,this._state.insideClick=this._config.insideClick,this._state.isAnimated=this._config.isAnimated,this._state.stopOnClickPropagation=this._config.stopOnClickPropagation,this._factoryDropDownAnimation=o.build(u),this._dropdown=this._cis.createLoader(this._elementRef,this._viewContainerRef,this._renderer).provide({provide:l,useValue:this._state}),this.onShown=this._dropdown.onShown,this.onHidden=this._dropdown.onHidden,this.isOpenChange=this._state.isOpenChange}ngOnInit(){this._isInited||(this._isInited=!0,this._dropdown.listen({outsideClick:!1,triggers:this.triggers,show:()=>this.show()}),this._subscriptions.push(this._state.toggleClick.subscribe(e=>this.toggle(e))),this._subscriptions.push(this._state.isDisabledChange.pipe((0,m.h)(e=>e)).subscribe(()=>this.hide())))}show(){if(!this.isOpen&&!this.isDisabled){if(this._showInline)return this._inlinedMenu||this._state.dropdownMenu.then(e=>{this._dropdown.attachInline(e.viewContainer,e.templateRef),this._inlinedMenu=this._dropdown._inlineViewRef,this.addBs4Polyfills(),this._inlinedMenu&&this._renderer.addClass(this._inlinedMenu.rootNodes[0].parentNode,"open"),this.playAnimation()}).catch(),this.addBs4Polyfills(),this._isInlineOpen=!0,this.onShown.emit(!0),this._state.isOpenChange.emit(!0),void this.playAnimation();this._state.dropdownMenu.then(e=>{const s=this.dropup||typeof this.dropup<"u"&&this.dropup;this._state.direction=s?"up":"down";const n=this.placement||(s?"top start":"bottom start");this._dropdown.attach(M).to(this.container).position({attachment:n}).show({content:e.templateRef,placement:n}),this._state.isOpenChange.emit(!0)}).catch()}}hide(){this.isOpen&&(this._showInline?(this.removeShowClass(),this.removeDropupStyles(),this._isInlineOpen=!1,this.onHidden.emit(!0)):this._dropdown.hide(),this._state.isOpenChange.emit(!1))}toggle(e){return this.isOpen||!e?this.hide():this.show()}_contains(e){return this._elementRef.nativeElement.contains(e.target)||this._dropdown.instance&&this._dropdown.instance._contains(e.target)}navigationClick(e){const s=this._elementRef.nativeElement.querySelector(".dropdown-menu");if(!s)return;const n=this._elementRef.nativeElement.ownerDocument.activeElement,r=s.querySelectorAll(".dropdown-item");switch(e.keyCode){case 38:this._state.counts>0&&r[--this._state.counts].focus();break;case 40:this._state.counts+1<r.length&&(n.classList!==r[this._state.counts].classList?r[this._state.counts].focus():r[++this._state.counts].focus())}e.preventDefault()}ngOnDestroy(){for(const e of this._subscriptions)e.unsubscribe();this._dropdown.dispose()}addBs4Polyfills(){this.addShowClass(),this.checkRightAlignment(),this.addDropupStyles()}playAnimation(){this._state.isAnimated&&this._inlinedMenu&&setTimeout(()=>{this._inlinedMenu&&this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0]).play()})}addShowClass(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&this._renderer.addClass(this._inlinedMenu.rootNodes[0],"show")}removeShowClass(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&this._renderer.removeClass(this._inlinedMenu.rootNodes[0],"show")}checkRightAlignment(){if(this._inlinedMenu&&this._inlinedMenu.rootNodes[0]){const e=this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-right")||this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-end");this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"left",e?"auto":"0"),this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"right",e?"0":"auto")}}addDropupStyles(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&(this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"top",this.dropup?"auto":"100%"),this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"transform",this.dropup?"translateY(-101%)":"translateY(0)"),this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"bottom","auto"))}removeDropupStyles(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&(this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"top"),this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"transform"),this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"bottom"))}static#e=this.\u0275fac=function(s){return new(s||i)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.s_b),t.Y36(_.oj),t.Y36(l),t.Y36(v),t.Y36(c._j))};static#t=this.\u0275dir=t.lG2({type:i,selectors:[["","bsDropdown",""],["","dropdown",""]],hostVars:6,hostBindings:function(s,n){1&s&&t.NdJ("keydown.arrowDown",function(d){return n.navigationClick(d)})("keydown.arrowUp",function(d){return n.navigationClick(d)}),2&s&&t.ekj("dropup",n.dropup)("open",n.isOpen)("show",n.isOpen)},inputs:{placement:"placement",triggers:"triggers",container:"container",dropup:"dropup",autoClose:"autoClose",isAnimated:"isAnimated",insideClick:"insideClick",isDisabled:"isDisabled",isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange",onShown:"onShown",onHidden:"onHidden"},exportAs:["bs-dropdown"],features:[t._Bn([l])]})}return i})(),b=(()=>{class i{constructor(e,s,n){e.resolveDropdownMenu({templateRef:n,viewContainer:s})}static#e=this.\u0275fac=function(s){return new(s||i)(t.Y36(l),t.Y36(t.s_b),t.Y36(t.Rgc))};static#t=this.\u0275dir=t.lG2({type:i,selectors:[["","bsDropdownMenu",""],["","dropdownMenu",""]],exportAs:["bs-dropdown-menu"]})}return i})(),O=(()=>{class i{constructor(e,s,n,r,d){this._changeDetectorRef=e,this._dropdown=s,this._element=n,this._renderer=r,this._state=d,this.isOpen=!1,this._subscriptions=[],this._subscriptions.push(this._state.isOpenChange.subscribe(a=>{this.isOpen=a,a?(this._documentClickListener=this._renderer.listen("document","click",o=>{this._state.autoClose&&2!==o.button&&!this._element.nativeElement.contains(o.target)&&(!this._state.insideClick||!this._dropdown._contains(o))&&(this._state.toggleClick.emit(!1),this._changeDetectorRef.detectChanges())}),this._escKeyUpListener=this._renderer.listen(this._element.nativeElement,"keyup.esc",()=>{this._state.autoClose&&(this._state.toggleClick.emit(!1),this._changeDetectorRef.detectChanges())})):(this._documentClickListener&&this._documentClickListener(),this._escKeyUpListener&&this._escKeyUpListener())})),this._subscriptions.push(this._state.isDisabledChange.subscribe(a=>this.isDisabled=a||void 0))}onClick(e){this._state.stopOnClickPropagation&&e.stopPropagation(),!this.isDisabled&&this._state.toggleClick.emit(!0)}ngOnDestroy(){this._documentClickListener&&this._documentClickListener(),this._escKeyUpListener&&this._escKeyUpListener();for(const e of this._subscriptions)e.unsubscribe()}static#e=this.\u0275fac=function(s){return new(s||i)(t.Y36(t.sBO),t.Y36(f),t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(l))};static#t=this.\u0275dir=t.lG2({type:i,selectors:[["","bsDropdownToggle",""],["","dropdownToggle",""]],hostVars:3,hostBindings:function(s,n){1&s&&t.NdJ("click",function(d){return n.onClick(d)}),2&s&&t.uIk("aria-haspopup",!0)("disabled",n.isDisabled)("aria-expanded",n.isOpen)},exportAs:["bs-dropdown-toggle"]})}return i})(),k=(()=>{class i{static forRoot(){return{ngModule:i,providers:[_.oj,w.sA,l]}}static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[p.ez]})}return i})()}}]);