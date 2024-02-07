"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[6404],{84044:function(e,t,n){n.d(t,{c:function(){return d}});var o=n(96064),i=n(21630),a=n(79328);const s=(0,o.createElementVNode)("span",{class:"mdc-button__ripple"},null,-1),r=(0,o.createElementVNode)("span",{class:"mdc-button__focus-ring"},null,-1),c=["textContent"],l={key:1,class:"mdc-button__label"},u={name:"MdcButton",customOptions:{UI_GLOBAL:i.c}};var m=Object.assign(u,{props:{outlined:{type:Boolean,default:!1},unelevated:{type:Boolean,default:!1},...a.A,noLabel:{type:Boolean,default:!1}},emits:[i.c.EVENTS.CLICK],setup(e,t){let{emit:n}=t;const u=e,{handleClick:m}=(0,i.s)({emit:n}),{materialIcon:d}=(0,a.W)(u),p=(0,o.computed)((()=>({"mdc-button":!0,"mdc-button--outlined":u.outlined,"mdc-button--unelevated":u.unelevated})));return(t,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("button",{type:"button",class:(0,o.normalizeClass)(p.value),onClick:n[0]||(n[0]=function(){return(0,o.unref)(m)&&(0,o.unref)(m)(...arguments)})},[s,r,(0,o.renderSlot)(t.$slots,"icon",{},(()=>[(0,o.unref)(d)?((0,o.openBlock)(),(0,o.createElementBlock)("i",{key:0,class:(0,o.normalizeClass)((0,o.unref)(i.c).getMaterialIconClass("mdc-button__icon")),"aria-hidden":"true",textContent:(0,o.toDisplayString)((0,o.unref)(d))},null,10,c)):(0,o.createCommentVNode)("",!0)])),e.noLabel?(0,o.renderSlot)(t.$slots,"default",{key:0}):((0,o.openBlock)(),(0,o.createElementBlock)("span",l,[(0,o.renderSlot)(t.$slots,"default")]))],2))}});var d=m},86404:function(e,t,n){n.d(t,{c:function(){return w}});var o=n(96064),i={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},a={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},s={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},r=s.ARIA_LIVE_DELAY_MS,c=a.ARIA_LIVE_LABEL_TEXT_ATTR;function l(e,t){void 0===t&&(t=e);var n=e.getAttribute("aria-live"),o=t.textContent.trim();if(o&&n){e.setAttribute("aria-live","off"),t.textContent="";var i=document.createElement("span");i.setAttribute("style","display: inline-block; width: 0; height: 1px;"),i.textContent="\xa0",t.appendChild(i),t.setAttribute(c,o),setTimeout((function(){e.setAttribute("aria-live",n),t.removeAttribute(c),t.textContent=o}),r)}}var u=n(81316),m=n(77448),d=n(14655),p=n(63688),f=i.OPENING,E=i.OPEN,T=i.CLOSING,h=a.REASON_ACTION,S=a.REASON_DISMISS,C=function(e){function t(n){var o=e.call(this,(0,u.C3)((0,u.C3)({},t.defaultAdapter),n))||this;return o.opened=!1,o.animationFrame=0,o.animationTimer=0,o.autoDismissTimer=0,o.autoDismissTimeoutMs=s.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,o.closeOnEscape=!0,o}return(0,u.ct)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return i},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(f),this.adapter.removeClass(E),this.adapter.removeClass(T)},t.prototype.open=function(){var e=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(T),this.adapter.addClass(f),this.adapter.announce(),this.runNextAnimationFrame((function(){e.adapter.addClass(E),e.animationTimer=setTimeout((function(){var t=e.getTimeoutMs();e.handleAnimationTimerEnd(),e.adapter.notifyOpened(),t!==s.INDETERMINATE&&(e.autoDismissTimer=setTimeout((function(){e.close(S)}),t))}),s.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},t.prototype.close=function(e){var t=this;void 0===e&&(e=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(e),this.adapter.addClass(i.CLOSING),this.adapter.removeClass(i.OPEN),this.adapter.removeClass(i.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout((function(){t.handleAnimationTimerEnd(),t.adapter.notifyClosed(e)}),s.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.opened},t.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},t.prototype.setTimeoutMs=function(e){var t=s.MIN_AUTO_DISMISS_TIMEOUT_MS,n=s.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(e===s.INDETERMINATE||e<=n&&e>=t))throw new Error("\n        timeoutMs must be an integer in the range "+t+"\u2013"+n+"\n        (or "+s.INDETERMINATE+" to disable), but got '"+e+"'");this.autoDismissTimeoutMs=e},t.prototype.getCloseOnEscape=function(){return this.closeOnEscape},t.prototype.setCloseOnEscape=function(e){this.closeOnEscape=e},t.prototype.handleKeyDown=function(e){("Escape"===e.key||27===e.keyCode)&&this.getCloseOnEscape()&&this.close(S)},t.prototype.handleActionButtonClick=function(e){this.close(h)},t.prototype.handleActionIconClick=function(e){this.close(S)},t.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(i.OPENING),this.adapter.removeClass(i.CLOSING)},t.prototype.runNextAnimationFrame=function(e){var t=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){t.animationFrame=0,clearTimeout(t.animationTimer),t.animationTimer=setTimeout(e,0)}))},t}(p.E),_=a.SURFACE_SELECTOR,O=a.LABEL_SELECTOR,b=a.ACTION_SELECTOR,A=a.DISMISS_SELECTOR,N=a.OPENING_EVENT,y=a.OPENED_EVENT,I=a.CLOSING_EVENT,M=a.CLOSED_EVENT,k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,u.ct)(t,e),t.attachTo=function(e){return new t(e)},t.prototype.initialize=function(e){void 0===e&&(e=function(){return l}),this.announce=e()},t.prototype.initialSyncWithDOM=function(){var e=this;this.surfaceEl=this.root.querySelector(_),this.labelEl=this.root.querySelector(O),this.actionEl=this.root.querySelector(b),this.handleKeyDown=function(t){e.foundation.handleKeyDown(t)},this.handleSurfaceClick=function(t){var n=t.target;e.isActionButton(n)?e.foundation.handleActionButtonClick(t):e.isActionIcon(n)&&e.foundation.handleActionIconClick(t)},this.registerKeyDownHandler(this.handleKeyDown),this.registerSurfaceClickHandler(this.handleSurfaceClick)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.deregisterKeyDownHandler(this.handleKeyDown),this.deregisterSurfaceClickHandler(this.handleSurfaceClick)},t.prototype.open=function(){this.foundation.open()},t.prototype.close=function(e){void 0===e&&(e=""),this.foundation.close(e)},t.prototype.getDefaultFoundation=function(){var e=this;return new C({addClass:function(t){e.root.classList.add(t)},announce:function(){e.announce(e.labelEl)},notifyClosed:function(t){return e.emit(M,t?{reason:t}:{})},notifyClosing:function(t){return e.emit(I,t?{reason:t}:{})},notifyOpened:function(){return e.emit(y,{})},notifyOpening:function(){return e.emit(N,{})},removeClass:function(t){return e.root.classList.remove(t)}})},Object.defineProperty(t.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(e){this.foundation.setTimeoutMs(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(e){this.foundation.setCloseOnEscape(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(e){this.labelEl.textContent=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(e){this.actionEl.textContent=e},enumerable:!1,configurable:!0}),t.prototype.registerKeyDownHandler=function(e){this.listen("keydown",e)},t.prototype.deregisterKeyDownHandler=function(e){this.unlisten("keydown",e)},t.prototype.registerSurfaceClickHandler=function(e){this.surfaceEl.addEventListener("click",e)},t.prototype.deregisterSurfaceClickHandler=function(e){this.surfaceEl.removeEventListener("click",e)},t.prototype.isActionButton=function(e){return Boolean((0,d.Yx)(e,b))},t.prototype.isActionIcon=function(e){return Boolean((0,d.Yx)(e,A))},t}(m.s),g=n(84044),v=n(21552);const D={class:"mdc-snackbar__surface",role:"status","aria-relevant":"additions"},L={class:"mdc-snackbar__label","aria-atomic":"false"},B={class:"mdc-snackbar__actions","aria-atomic":"true"},V="UiSnackbar",R={ACTION_TYPE:{ACTION_BUTTON:0,DISMISS_ICON:1},timeoutMs:{MIN:4e3,MAX:1e4,DEFAULTS:5e3},position:{TOP:"top",BOTTOM:"bottom",CENTER:"center"},EVENTS:{CHANGE:"update:modelValue",CLOSED:"closed"}},x={name:V,customOptions:{name:V,UI_SNACKBAR:R}};var w=Object.assign(x,{props:{actionType:{type:Number,default:R.ACTION_TYPE.ACTION_BUTTON},modelValue:{type:Boolean,default:!1},timeoutMs:{type:[Number,String],default:R.timeoutMs.DEFAULTS},message:{type:String,default:""},actionButtonText:{type:String,default:""},stacked:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},position:{type:String,default:R.position.BOTTOM}},emits:[R.EVENTS.CHANGE,R.EVENTS.CLOSED],setup(e,t){let{emit:n}=t;const i=e,s=(0,o.ref)(null),r=(0,o.reactive)({$snackbar:null}),c=(0,o.computed)((()=>["top","center"].includes(i.position)?`mdc-snackbar--${i.position}`:"")),l=(0,o.computed)((()=>s.value&&s.value.classList.contains("mdc-snackbar--open"))),u=(0,o.computed)((()=>[{"mdc-snackbar":!0,"mdc-snackbar--stacked":i.stacked,"mdc-snackbar--leading":i.leading,"mdc-snackbar--open":l.value},c.value])),m=(0,o.computed)((()=>i.actionType===R.ACTION_TYPE.DISMISS_ICON)),d=(0,o.computed)((()=>m.value?"mdc-snackbar__dismiss":"mdc-snackbar__action"));function p(e){e>=R.timeoutMs.MIN&&e<=R.timeoutMs.MAX?r.$snackbar.timeoutMs=e:console.warn(`[${V}]: The 'timeoutMs' prop must be between ${R.timeoutMs.MIN} and ${R.timeoutMs.MAX}`)}return(0,o.watch)((()=>i.modelValue),(e=>{e&&r.$snackbar.open()})),(0,o.watch)((()=>i.timeoutMs),(e=>{p(+e)})),(0,o.watch)((()=>i.message),(e=>{r.$snackbar.labelText=e})),(0,o.onMounted)((()=>{r.$snackbar=new k(s.value),i.timeoutMs!==R.timeoutMs.DEFAULTS&&p(+i.timeoutMs),i.message&&(r.$snackbar.labelText=i.message),r.$snackbar.listen(a.CLOSED_EVENT,(()=>{n(R.EVENTS.CHANGE,!1),n(R.EVENTS.CLOSED)}))})),(t,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{ref_key:"snackbar",ref:s,class:(0,o.normalizeClass)(u.value)},[(0,o.createElementVNode)("div",D,[(0,o.createElementVNode)("div",L,[(0,o.renderSlot)(t.$slots,"default",{},(()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.message),1)]))]),(0,o.createElementVNode)("div",B,[(0,o.renderSlot)(t.$slots,"action",{actionClass:d.value},(()=>[m.value?((0,o.openBlock)(),(0,o.createBlock)(v.c,{key:0,class:(0,o.normalizeClass)(d.value)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" close ")])),_:1},8,["class"])):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[e.actionButtonText?((0,o.openBlock)(),(0,o.createBlock)(g.c,{key:0,class:(0,o.normalizeClass)(d.value)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.actionButtonText),1)])),_:1},8,["class"])):(0,o.createCommentVNode)("",!0)],64))]))])])],2))}})}}]);