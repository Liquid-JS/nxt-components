"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4645],{4645:(Dn,pe,d)=>{d.d(pe,{Wl:()=>T,Fj:()=>w,Oe:()=>fe,NI:()=>tt,oH:()=>rt,u5:()=>Cn,Cf:()=>u,JU:()=>f,JJ:()=>It,On:()=>et,YN:()=>te,UX:()=>Vn,EJ:()=>H,kI:()=>Se,Kr:()=>ne});var o=d(8371),ct=d(4565),ge=d(210),me=d(8764),_e=d(2711),ye=d(5749),ve=d(8767),Ce=d(3972),Ve=d(4590),Ae=d(6683),be=d(7478);let dt=(()=>{var e;class t{constructor(n,s){this._renderer=n,this._elementRef=s,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(n,s){this._renderer.setProperty(this._elementRef.nativeElement,n,s)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(o.Qsj),o.Y36(o.SBq))},e.\u0275dir=o.lG2({type:e}),t})(),y=(()=>{var e;class t extends dt{}return(e=t).\u0275fac=function(){let r;return function(s){return(r||(r=o.n5z(e)))(s||e)}}(),e.\u0275dir=o.lG2({type:e,features:[o.qOj]}),t})();const f=new o.OlP("NgValueAccessor"),Me={provide:f,useExisting:(0,o.Gpc)(()=>T),multi:!0};let T=(()=>{var e;class t extends y{writeValue(n){this.setProperty("checked",n)}}return(e=t).\u0275fac=function(){let r;return function(s){return(r||(r=o.n5z(e)))(s||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,s){1&n&&o.NdJ("change",function(a){return s.onChange(a.target.checked)})("blur",function(){return s.onTouched()})},features:[o._Bn([Me]),o.qOj]}),t})();const Ee={provide:f,useExisting:(0,o.Gpc)(()=>w),multi:!0},we=new o.OlP("CompositionEventMode");let w=(()=>{var e;class t extends dt{constructor(n,s,i){super(n,s),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Oe(){const e=(0,ct.q)()?(0,ct.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(we,8))},e.\u0275dir=o.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,s){1&n&&o.NdJ("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[o._Bn([Ee]),o.qOj]}),t})();function p(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function ht(e){return null!=e&&"number"==typeof e.length}const u=new o.OlP("NgValidators"),g=new o.OlP("NgAsyncValidators"),Fe=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Se{static min(t){return function ft(e){return t=>{if(p(t.value)||p(e))return null;const r=parseFloat(t.value);return!isNaN(r)&&r<e?{min:{min:e,actual:t.value}}:null}}(t)}static max(t){return function pt(e){return t=>{if(p(t.value)||p(e))return null;const r=parseFloat(t.value);return!isNaN(r)&&r>e?{max:{max:e,actual:t.value}}:null}}(t)}static required(t){return function gt(e){return p(e.value)?{required:!0}:null}(t)}static requiredTrue(t){return function mt(e){return!0===e.value?null:{required:!0}}(t)}static email(t){return function _t(e){return p(e.value)||Fe.test(e.value)?null:{email:!0}}(t)}static minLength(t){return function yt(e){return t=>p(t.value)||!ht(t.value)?null:t.value.length<e?{minlength:{requiredLength:e,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function vt(e){return t=>ht(t.value)&&t.value.length>e?{maxlength:{requiredLength:e,actualLength:t.value.length}}:null}(t)}static pattern(t){return function Ct(e){if(!e)return F;let t,r;return"string"==typeof e?(r="","^"!==e.charAt(0)&&(r+="^"),r+=e,"$"!==e.charAt(e.length-1)&&(r+="$"),t=new RegExp(r)):(r=e.toString(),t=e),n=>{if(p(n.value))return null;const s=n.value;return t.test(s)?null:{pattern:{requiredPattern:r,actualValue:s}}}}(t)}static nullValidator(t){return null}static compose(t){return Et(t)}static composeAsync(t){return Ot(t)}}function F(e){return null}function Vt(e){return null!=e}function At(e){return(0,o.QGY)(e)?(0,ge.D)(e):e}function Dt(e){let t={};return e.forEach(r=>{t=null!=r?{...t,...r}:t}),0===Object.keys(t).length?null:t}function bt(e,t){return t.map(r=>r(e))}function Mt(e){return e.map(t=>function Ne(e){return!e.validate}(t)?t:r=>t.validate(r))}function Et(e){if(!e)return null;const t=e.filter(Vt);return 0==t.length?null:function(r){return Dt(bt(r,t))}}function U(e){return null!=e?Et(Mt(e)):null}function Ot(e){if(!e)return null;const t=e.filter(Vt);return 0==t.length?null:function(r){return function De(...e){const t=(0,ve.jO)(e),{args:r,keys:n}=(0,_e.D)(e),s=new me.y(i=>{const{length:a}=r;if(!a)return void i.complete();const l=new Array(a);let h=a,V=a;for(let _=0;_<a;_++){let ut=!1;(0,ye.Xf)(r[_]).subscribe((0,Ce.x)(i,An=>{ut||(ut=!0,V--),l[_]=An},()=>h--,void 0,()=>{(!h||!ut)&&(V||i.next(n?(0,Ae.n)(n,l):l),i.complete())}))}});return t?s.pipe((0,Ve.Z)(t)):s}(bt(r,t).map(At)).pipe((0,be.U)(Dt))}}function j(e){return null!=e?Ot(Mt(e)):null}function wt(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function Ft(e){return e._rawValidators}function St(e){return e._rawAsyncValidators}function R(e){return e?Array.isArray(e)?e:[e]:[]}function S(e,t){return Array.isArray(e)?e.includes(t):e===t}function Nt(e,t){const r=R(t);return R(e).forEach(s=>{S(r,s)||r.push(s)}),r}function Gt(e,t){return R(t).filter(r=>!S(e,r))}class xt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=U(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=j(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,r){return!!this.control&&this.control.hasError(t,r)}getError(t,r){return this.control?this.control.getError(t,r):null}}class c extends xt{get formDirective(){return null}get path(){return null}}class m extends xt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Bt{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let It=(()=>{var e;class t extends Bt{constructor(n){super(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(m,2))},e.\u0275dir=o.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,s){2&n&&o.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[o.qOj]}),t})();const D="VALID",G="INVALID",A="PENDING",b="DISABLED";function q(e){return(x(e)?e.validators:e)||null}function W(e,t){return(x(t)?t.asyncValidators:e)||null}function x(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class ${constructor(t,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===G}get pending(){return this.status==A}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Nt(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Nt(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Gt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Gt(t,this._rawAsyncValidators))}hasValidator(t){return S(this._rawValidators,t)}hasAsyncValidator(t){return S(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=A,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=b,this.errors=null,this._forEachChild(n=>{n.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=D,this._forEachChild(n=>{n.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===A)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;const r=At(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,r={}){this.errors=t,this._updateControlsErrors(!1!==r.emitEvent)}get(t){let r=t;return null==r||(Array.isArray(r)||(r=r.split(".")),0===r.length)?null:r.reduce((n,s)=>n&&n._find(s),this)}getError(t,r){const n=r?this.get(r):this;return n&&n.errors?n.errors[t]:null}hasError(t,r){return!!this.getError(t,r)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(G)?G:D}_anyControlsHaveStatus(t){return this._anyControls(r=>r.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){x(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function ke(e){return Array.isArray(e)?U(e):e||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Pe(e){return Array.isArray(e)?j(e):e||null}(this._rawAsyncValidators)}}const v=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>M}),M="always";function E(e,t,r=M){(function J(e,t){const r=Ft(e);null!==t.validator?e.setValidators(wt(r,t.validator)):"function"==typeof r&&e.setValidators([r]);const n=St(e);null!==t.asyncValidator?e.setAsyncValidators(wt(n,t.asyncValidator)):"function"==typeof n&&e.setAsyncValidators([n]);const s=()=>e.updateValueAndValidity();k(t._rawValidators,s),k(t._rawAsyncValidators,s)})(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||"always"===r)&&t.valueAccessor.setDisabledState?.(e.disabled),function Ue(e,t){t.valueAccessor.registerOnChange(r=>{e._pendingValue=r,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Tt(e,t)})}(e,t),function Re(e,t){const r=(n,s)=>{t.valueAccessor.writeValue(n),s&&t.viewToModelUpdate(n)};e.registerOnChange(r),t._registerOnDestroy(()=>{e._unregisterOnChange(r)})}(e,t),function je(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Tt(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function Te(e,t){if(t.valueAccessor.setDisabledState){const r=n=>{t.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(r),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(r)})}}(e,t)}function I(e,t,r=!0){const n=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n)),function P(e,t){let r=!1;if(null!==e){if(null!==t.validator){const s=Ft(e);if(Array.isArray(s)&&s.length>0){const i=s.filter(a=>a!==t.validator);i.length!==s.length&&(r=!0,e.setValidators(i))}}if(null!==t.asyncValidator){const s=St(e);if(Array.isArray(s)&&s.length>0){const i=s.filter(a=>a!==t.asyncValidator);i.length!==s.length&&(r=!0,e.setAsyncValidators(i))}}}const n=()=>{};return k(t._rawValidators,n),k(t._rawAsyncValidators,n),r}(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function k(e,t){e.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(t)})}function Tt(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Q(e,t){if(!e.hasOwnProperty("model"))return!1;const r=e.model;return!!r.isFirstChange()||!Object.is(t,r.currentValue)}function X(e,t){if(!t)return null;let r,n,s;return Array.isArray(t),t.forEach(i=>{i.constructor===w?r=i:function qe(e){return Object.getPrototypeOf(e.constructor)===y}(i)?n=i:s=i}),s||n||r||null}function Rt(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}function Lt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const tt=class extends ${constructor(t=null,r,n){super(q(r),W(n,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),x(r)&&(r.nonNullable||r.initialValueIsDefault)&&(this.defaultValue=Lt(t)?t.value:t)}setValue(t,r={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==r.emitModelToViewChange&&this._onChange.forEach(n=>n(this.value,!1!==r.emitViewToModelChange)),this.updateValueAndValidity(r)}patchValue(t,r={}){this.setValue(t,r)}reset(t=this.defaultValue,r={}){this._applyFormState(t),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Rt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Rt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Lt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},Ze={provide:m,useExisting:(0,o.Gpc)(()=>et)},Wt=(()=>Promise.resolve())();let et=(()=>{var e;class t extends m{constructor(n,s,i,a,l,h){super(),this._changeDetectorRef=l,this.callSetDisabledState=h,this.control=new tt,this._registered=!1,this.name="",this.update=new o.vpe,this._parent=n,this._setValidators(s),this._setAsyncValidators(i),this.valueAccessor=X(0,a)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){const s=n.name.previousValue;this.formDirective.removeControl({name:s,path:this._getPath(s)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Q(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){E(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(n){Wt.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){const s=n.isDisabled.currentValue,i=0!==s&&(0,o.VuI)(s);Wt.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?function B(e,t){return[...t.path,e]}(n,this._parent):[n]}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(c,9),o.Y36(u,10),o.Y36(g,10),o.Y36(f,10),o.Y36(o.sBO,8),o.Y36(v,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Ze]),o.qOj,o.TTD]}),t})(),zt=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),t})();const nt=new o.OlP("NgModelWithFormControlWarning"),nn={provide:m,useExisting:(0,o.Gpc)(()=>rt)};let rt=(()=>{var e;class t extends m{set isDisabled(n){}constructor(n,s,i,a,l){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=l,this.update=new o.vpe,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(s),this.valueAccessor=X(0,i)}ngOnChanges(n){if(this._isControlChanged(n)){const s=n.form.previousValue;s&&I(s,this,!1),E(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Q(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&I(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return(e=t)._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(o.Y36(u,10),o.Y36(g,10),o.Y36(f,10),o.Y36(nt,8),o.Y36(v,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[o._Bn([nn]),o.qOj,o.TTD]}),t})();const ln={provide:f,useExisting:(0,o.Gpc)(()=>H),multi:!0};function Kt(e,t){return null==e?`${t}`:(t&&"object"==typeof t&&(t="Object"),`${e}: ${t}`.slice(0,50))}let H=(()=>{var e;class t extends y{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(n){this._compareWith=n}writeValue(n){this.value=n;const i=Kt(this._getOptionId(n),n);this.setProperty("value",i)}registerOnChange(n){this.onChange=s=>{this.value=this._getOptionValue(s),n(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(n){for(const s of this._optionMap.keys())if(this._compareWith(this._optionMap.get(s),n))return s;return null}_getOptionValue(n){const s=function un(e){return e.split(":")[0]}(n);return this._optionMap.has(s)?this._optionMap.get(s):n}}return(e=t).\u0275fac=function(){let r;return function(s){return(r||(r=o.n5z(e)))(s||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,s){1&n&&o.NdJ("change",function(a){return s.onChange(a.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[o._Bn([ln]),o.qOj]}),t})(),te=(()=>{var e;class t{constructor(n,s,i){this._element=n,this._renderer=s,this._select=i,this._select&&(this.id=this._select._registerOption())}set ngValue(n){null!=this._select&&(this._select._optionMap.set(this.id,n),this._setElementValue(Kt(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._setElementValue(n),this._select&&this._select.writeValue(this._select.value)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(H,9))},e.\u0275dir=o.lG2({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})();const cn={provide:f,useExisting:(0,o.Gpc)(()=>at),multi:!0};function ee(e,t){return null==e?`${t}`:("string"==typeof t&&(t=`'${t}'`),t&&"object"==typeof t&&(t="Object"),`${e}: ${t}`.slice(0,50))}let at=(()=>{var e;class t extends y{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(n){this._compareWith=n}writeValue(n){let s;if(this.value=n,Array.isArray(n)){const i=n.map(a=>this._getOptionId(a));s=(a,l)=>{a._setSelected(i.indexOf(l.toString())>-1)}}else s=(i,a)=>{i._setSelected(!1)};this._optionMap.forEach(s)}registerOnChange(n){this.onChange=s=>{const i=[],a=s.selectedOptions;if(void 0!==a){const l=a;for(let h=0;h<l.length;h++){const _=this._getOptionValue(l[h].value);i.push(_)}}else{const l=s.options;for(let h=0;h<l.length;h++){const V=l[h];if(V.selected){const _=this._getOptionValue(V.value);i.push(_)}}}this.value=i,n(i)}}_registerOption(n){const s=(this._idCounter++).toString();return this._optionMap.set(s,n),s}_getOptionId(n){for(const s of this._optionMap.keys())if(this._compareWith(this._optionMap.get(s)._value,n))return s;return null}_getOptionValue(n){const s=function dn(e){return e.split(":")[0]}(n);return this._optionMap.has(s)?this._optionMap.get(s)._value:n}}return(e=t).\u0275fac=function(){let r;return function(s){return(r||(r=o.n5z(e)))(s||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,s){1&n&&o.NdJ("change",function(a){return s.onChange(a.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[o._Bn([cn]),o.qOj]}),t})(),ne=(()=>{var e;class t{constructor(n,s,i){this._element=n,this._renderer=s,this._select=i,this._select&&(this.id=this._select._registerOption(this))}set ngValue(n){null!=this._select&&(this._value=n,this._setElementValue(ee(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._select?(this._value=n,this._setElementValue(ee(this.id,n)),this._select.writeValue(this._select.value)):this._setElementValue(n)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}_setSelected(n){this._renderer.setProperty(this._element.nativeElement,"selected",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(at,9))},e.\u0275dir=o.lG2({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})(),he=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[zt]}),t})();class fe extends ${constructor(t,r,n){super(q(r),W(n,r)),this.controls=t,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,r={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}insert(t,r,n={}){this.controls.splice(t,0,r),this._registerControl(r),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,r={}){let n=this._adjustIndex(t);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:r.emitEvent})}setControl(t,r,n={}){let s=this._adjustIndex(t);s<0&&(s=0),this.controls[s]&&this.controls[s]._registerOnCollectionChange(()=>{}),this.controls.splice(s,1),r&&(this.controls.splice(s,0,r),this._registerControl(r)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,r={}){(function Ht(e,t,r){e._forEachChild((n,s)=>{if(void 0===r[s])throw new o.vHH(1002,"")})})(this,0,t),t.forEach((n,s)=>{(function Pt(e,t,r){const n=e.controls;if(!(t?Object.keys(n):n).length)throw new o.vHH(1e3,"");if(!n[r])throw new o.vHH(1001,"")})(this,!1,s),this.at(s).setValue(n,{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(t,r={}){null!=t&&(t.forEach((n,s)=>{this.at(s)&&this.at(s).patchValue(n,{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(t=[],r={}){this._forEachChild((n,s)=>{n.reset(t[s],{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(r=>r._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((r,n)=>!!n._syncPendingControls()||r,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((r,n)=>{t(r,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(r=>r.enabled&&t(r))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}}let Cn=(()=>{var e;class t{static withConfig(n){return{ngModule:t,providers:[{provide:v,useValue:n.callSetDisabledState??M}]}}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[he]}),t})(),Vn=(()=>{var e;class t{static withConfig(n){return{ngModule:t,providers:[{provide:nt,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:v,useValue:n.callSetDisabledState??M}]}}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[he]}),t})()}}]);