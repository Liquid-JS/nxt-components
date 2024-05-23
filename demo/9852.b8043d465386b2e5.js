"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9852],{9852:(it,Y,O)=>{O.d(Y,{Sf:()=>M,hJ:()=>I,rR:()=>K,t0:()=>T,z_:()=>ft});var m=O(658),k=O(7514),l=O(1201),v=O(5952),x=O(6569),W=O(4833),z=O(2818),X=O(5886),A=O(1874),S=O(5919),L=O(3054),N=O(7527);const F=(0,x.CZ)();class Z{constructor(t,e){this._viewportRuler=t,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){const t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=(0,v.a1)(-this._previousScrollPosition.left),t.style.top=(0,v.a1)(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){const t=this._document.documentElement,i=t.style,s=this._document.body.style,o=i.scrollBehavior||"",r=s.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),F&&(i.scrollBehavior=s.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),F&&(i.scrollBehavior=o,s.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;const e=this._document.body,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}}class ${constructor(t,e,i,s){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=s,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(t){this._overlayRef=t}enable(){if(this._scrollSubscription)return;const t=this._scrollDispatcher.scrolled(0).pipe((0,W.p)(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{const e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}class T{enable(){}disable(){}attach(){}}function V(n,t){return t.some(e=>n.bottom<e.top||n.top>e.bottom||n.right<e.left||n.left>e.right)}function H(n,t){return t.some(e=>n.top<e.top||n.bottom>e.bottom||n.left<e.left||n.right>e.right)}class G{constructor(t,e,i,s){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=s,this._scrollSubscription=null}attach(t){this._overlayRef=t}enable(){this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){const e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:s}=this._viewportRuler.getViewportSize();V(e,[{width:i,height:s,bottom:s,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}}))}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}let j=(()=>{class n{constructor(e,i,s,o){this._scrollDispatcher=e,this._viewportRuler=i,this._ngZone=s,this.noop=()=>new T,this.close=r=>new $(this._scrollDispatcher,this._ngZone,this._viewportRuler,r),this.block=()=>new Z(this._viewportRuler,this._document),this.reposition=r=>new G(this._scrollDispatcher,this._viewportRuler,this._ngZone,r),this._document=o}static#t=this.\u0275fac=function(i){return new(i||n)(l.KVO(m.R),l.KVO(m.Xj),l.KVO(l.SKi),l.KVO(k.qQ))};static#e=this.\u0275prov=l.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();class K{constructor(t){if(this.scrollStrategy=new T,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,t){const e=Object.keys(t);for(const i of e)void 0!==t[i]&&(this[i]=t[i])}}}class h{constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}}let E=(()=>{class n{constructor(e){this._attachedOverlays=[],this._document=e}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){const i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),0===this._attachedOverlays.length&&this.detach()}static#t=this.\u0275fac=function(i){return new(i||n)(l.KVO(k.qQ))};static#e=this.\u0275prov=l.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),b=(()=>{class n extends E{constructor(e,i){super(e),this._ngZone=i,this._keydownListener=s=>{const o=this._attachedOverlays;for(let r=o.length-1;r>-1;r--)if(o[r]._keydownEvents.observers.length>0){const c=o[r]._keydownEvents;this._ngZone?this._ngZone.run(()=>c.next(s)):c.next(s);break}}}add(e){super.add(e),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}static#t=this.\u0275fac=function(i){return new(i||n)(l.KVO(k.qQ),l.KVO(l.SKi,8))};static#e=this.\u0275prov=l.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),D=(()=>{class n extends E{constructor(e,i,s){super(e),this._platform=i,this._ngZone=s,this._cursorStyleIsSet=!1,this._pointerDownListener=o=>{this._pointerDownEventTarget=(0,x.Fb)(o)},this._clickListener=o=>{const r=(0,x.Fb)(o),c="click"===o.type&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;const f=this._attachedOverlays.slice();for(let u=f.length-1;u>-1;u--){const d=f[u];if(d._outsidePointerEvents.observers.length<1||!d.hasAttached())continue;if(d.overlayElement.contains(r)||d.overlayElement.contains(c))break;const g=d._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>g.next(o)):g.next(o)}}}add(e){if(super.add(e),!this._isAttached){const i=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(i)):this._addEventListeners(i),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){const e=this._document.body;e.removeEventListener("pointerdown",this._pointerDownListener,!0),e.removeEventListener("click",this._clickListener,!0),e.removeEventListener("auxclick",this._clickListener,!0),e.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(e.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(e){e.addEventListener("pointerdown",this._pointerDownListener,!0),e.addEventListener("click",this._clickListener,!0),e.addEventListener("auxclick",this._clickListener,!0),e.addEventListener("contextmenu",this._clickListener,!0)}static#t=this.\u0275fac=function(i){return new(i||n)(l.KVO(k.qQ),l.KVO(x.OD),l.KVO(l.SKi,8))};static#e=this.\u0275prov=l.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),M=(()=>{class n{constructor(e,i){this._platform=i,this._document=e}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const e="cdk-overlay-container";if(this._platform.isBrowser||(0,x.v8)()){const s=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<s.length;o++)s[o].remove()}const i=this._document.createElement("div");i.classList.add(e),(0,x.v8)()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}static#t=this.\u0275fac=function(i){return new(i||n)(l.KVO(k.qQ),l.KVO(x.OD))};static#e=this.\u0275prov=l.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();class st{constructor(t,e,i,s,o,r,c,f,u,d=!1,g){this._portalOutlet=t,this._host=e,this._pane=i,this._config=s,this._ngZone=o,this._keyboardDispatcher=r,this._document=c,this._location=f,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=g,this._backdropElement=null,this._backdropClick=new S.B,this._attachments=new S.B,this._detachments=new S.B,this._locationChanges=L.yU.EMPTY,this._backdropClickHandler=w=>this._backdropClick.next(w),this._backdropTransitionendHandler=w=>{this._disposeBackdrop(w.target)},this._keydownEvents=new S.B,this._outsidePointerEvents=new S.B,this._renders=new S.B,s.scrollStrategy&&(this._scrollStrategy=s.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=s.positionStrategy,this._afterRenderRef=(0,l.O8t)(()=>(0,l.Tzd)(()=>{this._renders.next()},{injector:this._injector}))}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(t){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);const e=this._portalOutlet.attach(t);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),(0,l.mal)(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),"function"==typeof e?.onDestroy&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();const t=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){const t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,t&&this._detachments.next(),this._detachments.complete(),this._afterRenderRef.destroy(),this._renders.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config={...this._config,...t},this._updateElementSize()}setDirection(t){this._config={...this._config,direction:t},this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){const t=this._config.direction;return t?"string"==typeof t?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;const t=this._pane.style;t.width=(0,v.a1)(this._config.width),t.height=(0,v.a1)(this._config.height),t.minWidth=(0,v.a1)(this._config.minWidth),t.minHeight=(0,v.a1)(this._config.minHeight),t.maxWidth=(0,v.a1)(this._config.maxWidth),t.maxHeight=(0,v.a1)(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachBackdrop(){const t="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(t)})}):this._backdropElement.classList.add(t)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){const t=this._backdropElement;if(t){if(this._animationsDisabled)return void this._disposeBackdrop(t);t.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{t.addEventListener("transitionend",this._backdropTransitionendHandler)}),t.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(t)},500))}}_toggleClasses(t,e,i){const s=(0,v.FG)(e||[]).filter(o=>!!o);s.length&&(i?t.classList.add(...s):t.classList.remove(...s))}_detachContentWhenEmpty(){this._ngZone.runOutsideAngular(()=>{const t=this._renders.pipe((0,z.Q)((0,N.h)(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||0===this._pane.children.length)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),t.unsubscribe())})})}_disposeScrollStrategy(){const t=this._scrollStrategy;t&&(t.disable(),t.detach&&t.detach())}_disposeBackdrop(t){t&&(t.removeEventListener("click",this._backdropClickHandler),t.removeEventListener("transitionend",this._backdropTransitionendHandler),t.remove(),this._backdropElement===t&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}}const Q="cdk-overlay-connected-position-bounding-box",ot=/([A-Za-z%]+)$/;class nt{get positions(){return this._preferredPositions}constructor(t,e,i,s,o){this._viewportRuler=e,this._document=i,this._platform=s,this._overlayContainer=o,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new S.B,this._resizeSubscription=L.yU.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(t)}attach(t){this._validatePositions(),t.hostElement.classList.add(Q),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition)return void this.reapplyLastPosition();this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const t=this._originRect,e=this._overlayRect,i=this._viewportRect,s=this._containerRect,o=[];let r;for(let c of this._preferredPositions){let f=this._getOriginPoint(t,s,c),u=this._getOverlayPoint(f,e,c),d=this._getOverlayFit(u,e,i,c);if(d.isCompletelyWithinViewport)return this._isPushed=!1,void this._applyPosition(c,f);this._canFitWithFlexibleDimensions(d,u,i)?o.push({position:c,origin:f,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(f,c)}):(!r||r.overlayFit.visibleArea<d.visibleArea)&&(r={overlayFit:d,overlayPoint:u,originPoint:f,position:c,overlayRect:e})}if(o.length){let c=null,f=-1;for(const u of o){const d=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);d>f&&(f=d,c=u)}return this._isPushed=!1,void this._applyPosition(c.position,c.origin)}if(this._canPush)return this._isPushed=!0,void this._applyPosition(r.position,r.originPoint);this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&B(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Q),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;const t=this._lastPosition;if(t){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const e=this._getOriginPoint(this._originRect,this._containerRect,t);this._applyPosition(t,e)}else this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,-1===t.indexOf(this._lastPosition)&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}_getOriginPoint(t,e,i){let s,o;if("center"==i.originX)s=t.left+t.width/2;else{const r=this._isRtl()?t.right:t.left,c=this._isRtl()?t.left:t.right;s="start"==i.originX?r:c}return e.left<0&&(s-=e.left),o="center"==i.originY?t.top+t.height/2:"top"==i.originY?t.top:t.bottom,e.top<0&&(o-=e.top),{x:s,y:o}}_getOverlayPoint(t,e,i){let s,o;return s="center"==i.overlayX?-e.width/2:"start"===i.overlayX?this._isRtl()?-e.width:0:this._isRtl()?0:-e.width,o="center"==i.overlayY?-e.height/2:"top"==i.overlayY?0:-e.height,{x:t.x+s,y:t.y+o}}_getOverlayFit(t,e,i,s){const o=q(e);let{x:r,y:c}=t,f=this._getOffset(s,"x"),u=this._getOffset(s,"y");f&&(r+=f),u&&(c+=u);let w=0-c,C=c+o.height-i.height,P=this._subtractOverflows(o.width,0-r,r+o.width-i.width),R=this._subtractOverflows(o.height,w,C),et=P*R;return{visibleArea:et,isCompletelyWithinViewport:o.width*o.height===et,fitsInViewportVertically:R===o.height,fitsInViewportHorizontally:P==o.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){const s=i.bottom-e.y,o=i.right-e.x,r=J(this._overlayRef.getConfig().minHeight),c=J(this._overlayRef.getConfig().minWidth);return(t.fitsInViewportVertically||null!=r&&r<=s)&&(t.fitsInViewportHorizontally||null!=c&&c<=o)}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};const s=q(e),o=this._viewportRect,r=Math.max(t.x+s.width-o.width,0),c=Math.max(t.y+s.height-o.height,0),f=Math.max(o.top-i.top-t.y,0),u=Math.max(o.left-i.left-t.x,0);let d=0,g=0;return d=s.width<=o.width?u||-r:t.x<this._viewportMargin?o.left-i.left-t.x:0,g=s.height<=o.height?f||-c:t.y<this._viewportMargin?o.top-i.top-t.y:0,this._previousPushAmount={x:d,y:g},{x:t.x+d,y:t.y+g}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){const i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!function rt(n,t){return n===t||n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}(this._lastScrollVisibility,i)){const s=new h(t,i);this._positionChanges.next(s)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;const e=this._boundingBox.querySelectorAll(this._transformOriginSelector);let i,s=t.overlayY;i="center"===t.overlayX?"center":this._isRtl()?"start"===t.overlayX?"right":"left":"start"===t.overlayX?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${s}`}_calculateBoundingBoxRect(t,e){const i=this._viewportRect,s=this._isRtl();let o,r,c,d,g,w;if("top"===e.overlayY)r=t.y,o=i.height-r+this._viewportMargin;else if("bottom"===e.overlayY)c=i.height-t.y+2*this._viewportMargin,o=i.height-c+this._viewportMargin;else{const C=Math.min(i.bottom-t.y+i.top,t.y),P=this._lastBoundingBoxSize.height;o=2*C,r=t.y-C,o>P&&!this._isInitialRender&&!this._growAfterOpen&&(r=t.y-P/2)}if("end"===e.overlayX&&!s||"start"===e.overlayX&&s)w=i.width-t.x+2*this._viewportMargin,d=t.x-this._viewportMargin;else if("start"===e.overlayX&&!s||"end"===e.overlayX&&s)g=t.x,d=i.right-t.x;else{const C=Math.min(i.right-t.x+i.left,t.x),P=this._lastBoundingBoxSize.width;d=2*C,g=t.x-C,d>P&&!this._isInitialRender&&!this._growAfterOpen&&(g=t.x-P/2)}return{top:r,left:g,bottom:c,right:w,width:d,height:o}}_setBoundingBoxStyles(t,e){const i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));const s={};if(this._hasExactPosition())s.top=s.left="0",s.bottom=s.right=s.maxHeight=s.maxWidth="",s.width=s.height="100%";else{const o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;s.height=(0,v.a1)(i.height),s.top=(0,v.a1)(i.top),s.bottom=(0,v.a1)(i.bottom),s.width=(0,v.a1)(i.width),s.left=(0,v.a1)(i.left),s.right=(0,v.a1)(i.right),s.alignItems="center"===e.overlayX?"center":"end"===e.overlayX?"flex-end":"flex-start",s.justifyContent="center"===e.overlayY?"center":"bottom"===e.overlayY?"flex-end":"flex-start",o&&(s.maxHeight=(0,v.a1)(o)),r&&(s.maxWidth=(0,v.a1)(r))}this._lastBoundingBoxSize=i,B(this._boundingBox.style,s)}_resetBoundingBoxStyles(){B(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){B(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){const i={},s=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(s){const d=this._viewportRuler.getViewportScrollPosition();B(i,this._getExactOverlayY(e,t,d)),B(i,this._getExactOverlayX(e,t,d))}else i.position="static";let c="",f=this._getOffset(e,"x"),u=this._getOffset(e,"y");f&&(c+=`translateX(${f}px) `),u&&(c+=`translateY(${u}px)`),i.transform=c.trim(),r.maxHeight&&(s?i.maxHeight=(0,v.a1)(r.maxHeight):o&&(i.maxHeight="")),r.maxWidth&&(s?i.maxWidth=(0,v.a1)(r.maxWidth):o&&(i.maxWidth="")),B(this._pane.style,i)}_getExactOverlayY(t,e,i){let s={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,t);return this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),"bottom"===t.overlayY?s.bottom=this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)+"px":s.top=(0,v.a1)(o.y),s}_getExactOverlayX(t,e,i){let r,s={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,t);return this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),r=this._isRtl()?"end"===t.overlayX?"left":"right":"end"===t.overlayX?"right":"left","right"===r?s.right=this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)+"px":s.left=(0,v.a1)(o.x),s}_getScrollVisibility(){const t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(s=>s.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:H(t,i),isOriginOutsideView:V(t,i),isOverlayClipped:H(e,i),isOverlayOutsideView:V(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,s)=>i-Math.max(s,0),t)}_getNarrowedViewportRect(){const t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+t-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:t-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return"rtl"===this._overlayRef.getDirection()}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return"x"===e?null==t.offsetX?this._offsetX:t.offsetX:null==t.offsetY?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&(0,v.FG)(t).forEach(e=>{""!==e&&-1===this._appliedPanelClasses.indexOf(e)&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getOriginRect(){const t=this._origin;if(t instanceof l.aKT)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();const e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}}function B(n,t){for(let e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function J(n){if("number"!=typeof n&&null!=n){const[t,e]=n.split(ot);return e&&"px"!==e?null:parseFloat(t)}return n||null}function q(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}const tt="cdk-global-overlay-wrapper";class at{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(t){const e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(tt),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;const t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:s,height:o,maxWidth:r,maxHeight:c}=i,f=!("100%"!==s&&"100vw"!==s||r&&"100%"!==r&&"100vw"!==r),u=!("100%"!==o&&"100vh"!==o||c&&"100%"!==c&&"100vh"!==c),d=this._xPosition,g=this._xOffset,w="rtl"===this._overlayRef.getConfig().direction;let C="",P="",R="";f?R="flex-start":"center"===d?(R="center",w?P=g:C=g):w?"left"===d||"end"===d?(R="flex-end",C=g):("right"===d||"start"===d)&&(R="flex-start",P=g):"left"===d||"start"===d?(R="flex-start",C=g):("right"===d||"end"===d)&&(R="flex-end",P=g),t.position=this._cssPosition,t.marginLeft=f?"0":C,t.marginTop=u?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=f?"0":P,e.justifyContent=R,e.alignItems=u?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;const t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(tt),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}}let lt=(()=>{class n{constructor(e,i,s,o){this._viewportRuler=e,this._document=i,this._platform=s,this._overlayContainer=o}global(){return new at}flexibleConnectedTo(e){return new nt(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}static#t=this.\u0275fac=function(i){return new(i||n)(l.KVO(m.Xj),l.KVO(k.qQ),l.KVO(x.OD),l.KVO(M))};static#e=this.\u0275prov=l.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ht=0,I=(()=>{class n{constructor(e,i,s,o,r,c,f,u,d,g,w,C){this.scrollStrategies=e,this._overlayContainer=i,this._componentFactoryResolver=s,this._positionBuilder=o,this._keyboardDispatcher=r,this._injector=c,this._ngZone=f,this._document=u,this._directionality=d,this._location=g,this._outsideClickDispatcher=w,this._animationsModuleType=C}create(e){const i=this._createHostElement(),s=this._createPaneElement(i),o=this._createPortalOutlet(s),r=new K(e);return r.direction=r.direction||this._directionality.value,new st(o,i,s,r,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,"NoopAnimations"===this._animationsModuleType,this._injector.get(l.uvJ))}position(){return this._positionBuilder}_createPaneElement(e){const i=this._document.createElement("div");return i.id="cdk-overlay-"+ht++,i.classList.add("cdk-overlay-pane"),e.appendChild(i),i}_createHostElement(){const e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(l.o8S)),new A.aI(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)}static#t=this.\u0275fac=function(i){return new(i||n)(l.KVO(j),l.KVO(M),l.KVO(l.OM3),l.KVO(lt),l.KVO(b),l.KVO(l.zZn),l.KVO(l.SKi),l.KVO(k.qQ),l.KVO(X.dS),l.KVO(k.aZ),l.KVO(D),l.KVO(l.bc$,8))};static#e=this.\u0275prov=l.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const _t={provide:new l.nKC("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{const n=(0,l.WQX)(I);return()=>n.scrollStrategies.reposition()}}),deps:[I],useFactory:function dt(n){return()=>n.scrollStrategies.reposition()}};let ft=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=l.$C({type:n});static#i=this.\u0275inj=l.G2t({providers:[I,_t],imports:[X.jI,A.jc,m.E9,m.E9]})}return n})()},1874:(it,Y,O)=>{O.d(Y,{A8:()=>S,I3:()=>H,aI:()=>U,jc:()=>j,lb:()=>F});var m=O(1201),k=O(7514);class A{attach(a){return this._attachedHost=a,a.attach(this)}detach(){let a=this._attachedHost;null!=a&&(this._attachedHost=null,a.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(a){this._attachedHost=a}}class S extends A{constructor(a,h,_,p,E){super(),this.component=a,this.viewContainerRef=h,this.injector=_,this.componentFactoryResolver=p,this.projectableNodes=E}}class L extends A{constructor(a,h,_,p){super(),this.templateRef=a,this.viewContainerRef=h,this.context=_,this.injector=p}get origin(){return this.templateRef.elementRef}attach(a,h=this.context){return this.context=h,super.attach(a)}detach(){return this.context=void 0,super.detach()}}class N extends A{constructor(a){super(),this.element=a instanceof m.aKT?a.nativeElement:a}}class F{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(a){return a instanceof S?(this._attachedPortal=a,this.attachComponentPortal(a)):a instanceof L?(this._attachedPortal=a,this.attachTemplatePortal(a)):this.attachDomPortal&&a instanceof N?(this._attachedPortal=a,this.attachDomPortal(a)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(a){this._disposeFn=a}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class U extends F{constructor(a,h,_,p,E){super(),this.outletElement=a,this._componentFactoryResolver=h,this._appRef=_,this._defaultInjector=p,this.attachDomPortal=b=>{const D=b.element,M=this._document.createComment("dom-portal");D.parentNode.insertBefore(M,D),this.outletElement.appendChild(D),this._attachedPortal=b,super.setDisposeFn(()=>{M.parentNode&&M.parentNode.replaceChild(D,M)})},this._document=E}attachComponentPortal(a){const _=(a.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(a.component);let p;return a.viewContainerRef?(p=a.viewContainerRef.createComponent(_,a.viewContainerRef.length,a.injector||a.viewContainerRef.injector,a.projectableNodes||void 0),this.setDisposeFn(()=>p.destroy())):(p=_.create(a.injector||this._defaultInjector||m.zZn.NULL),this._appRef.attachView(p.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(p.hostView),p.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(p)),this._attachedPortal=a,p}attachTemplatePortal(a){let h=a.viewContainerRef,_=h.createEmbeddedView(a.templateRef,a.context,{injector:a.injector});return _.rootNodes.forEach(p=>this.outletElement.appendChild(p)),_.detectChanges(),this.setDisposeFn(()=>{let p=h.indexOf(_);-1!==p&&h.remove(p)}),this._attachedPortal=a,_}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(a){return a.hostView.rootNodes[0]}}let H=(()=>{class y extends F{constructor(h,_,p){super(),this._componentFactoryResolver=h,this._viewContainerRef=_,this._isInitialized=!1,this.attached=new m.bkB,this.attachDomPortal=E=>{const b=E.element,D=this._document.createComment("dom-portal");E.setAttachedHost(this),b.parentNode.insertBefore(D,b),this._getRootNode().appendChild(b),this._attachedPortal=E,super.setDisposeFn(()=>{D.parentNode&&D.parentNode.replaceChild(b,D)})},this._document=p}get portal(){return this._attachedPortal}set portal(h){this.hasAttached()&&!h&&!this._isInitialized||(this.hasAttached()&&super.detach(),h&&super.attach(h),this._attachedPortal=h||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(h){h.setAttachedHost(this);const _=null!=h.viewContainerRef?h.viewContainerRef:this._viewContainerRef,E=(h.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(h.component),b=_.createComponent(E,_.length,h.injector||_.injector,h.projectableNodes||void 0);return _!==this._viewContainerRef&&this._getRootNode().appendChild(b.hostView.rootNodes[0]),super.setDisposeFn(()=>b.destroy()),this._attachedPortal=h,this._attachedRef=b,this.attached.emit(b),b}attachTemplatePortal(h){h.setAttachedHost(this);const _=this._viewContainerRef.createEmbeddedView(h.templateRef,h.context,{injector:h.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=h,this._attachedRef=_,this.attached.emit(_),_}_getRootNode(){const h=this._viewContainerRef.element.nativeElement;return h.nodeType===h.ELEMENT_NODE?h:h.parentNode}static#t=this.\u0275fac=function(_){return new(_||y)(m.rXU(m.OM3),m.rXU(m.c1b),m.rXU(k.qQ))};static#e=this.\u0275dir=m.FsC({type:y,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[m.Vt3]})}return y})(),j=(()=>{class y{static#t=this.\u0275fac=function(_){return new(_||y)};static#e=this.\u0275mod=m.$C({type:y});static#i=this.\u0275inj=m.G2t({})}return y})()}}]);