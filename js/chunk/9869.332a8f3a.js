"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[9869],{9869:function(t,e,n){n.d(e,{Z:function(){return y}});var i=n(73114),s=n(70655),o=n(48315),r=n(82947),a=n(97790),c=n(85099),u={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},l={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"},d=function(t){function e(n){var i=t.call(this,(0,s.pi)((0,s.pi)({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return(0,s.ZT)(e,t),Object.defineProperty(e,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return u},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(u.OPEN),this.adapter.addClass(u.ANIMATE),this.runNextAnimationFrame((function(){t.adapter.addClass(u.OPENING)})),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(u.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(u.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(u.OPENING)||this.adapter.hasClass(u.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(u.CLOSING)},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.handleTransitionEnd=function(t){var e=u.OPENING,n=u.CLOSING,i=u.OPEN,s=u.ANIMATE,o=u.ROOT;this.isElement(t.target)&&this.adapter.elementHasClass(t.target,o)&&(this.isClosing()?(this.adapter.removeClass(i),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(s),this.adapter.removeClass(e),this.adapter.removeClass(n))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(c.K),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s.ZT)(e,t),e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(d);var m=d.cssClasses,f=d.strings,h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,s.ZT)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"open",{get:function(){return this.foundation.isOpen()},set:function(t){t?this.foundation.open():this.foundation.close()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"list",{get:function(){return this.innerList},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,e){void 0===t&&(t=function(t){return new r.i(t)}),void 0===e&&(e=function(t){return new a.e(t)});var n=this.root.querySelector(f.LIST_SELECTOR);n&&(this.innerList=e(n),this.innerList.wrapFocus=!0),this.focusTrapFactory=t},e.prototype.initialSyncWithDOM=function(){var t,e=this,n=m.MODAL,i=f.SCRIM_SELECTOR;this.scrim=this.root.parentNode.querySelector(i),this.scrim&&this.root.classList.contains(n)&&(this.handleScrimClick=function(){e.foundation.handleScrimClick()},this.scrim.addEventListener("click",this.handleScrimClick),this.focusTrap=(t=this.root,(0,this.focusTrapFactory)(t,{skipInitialFocus:!0}))),this.handleKeydown=function(t){e.foundation.handleKeydown(t)},this.handleTransitionEnd=function(t){e.foundation.handleTransitionEnd(t)},this.listen("keydown",this.handleKeydown),this.listen("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("transitionend",this.handleTransitionEnd),this.innerList&&this.innerList.destroy();var t=m.MODAL;this.scrim&&this.handleScrimClick&&this.root.classList.contains(t)&&(this.scrim.removeEventListener("click",this.handleScrimClick),this.open=!1)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){t.root.classList.add(e)},removeClass:function(e){t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},elementHasClass:function(t,e){return t.classList.contains(e)},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){var e=t.previousFocus;e&&e.focus&&t.root.contains(document.activeElement)&&e.focus()},focusActiveNavigationItem:function(){var e=t.root.querySelector(f.LIST_ITEM_ACTIVATED_SELECTOR);e&&e.focus()},notifyClose:function(){t.emit(f.CLOSE_EVENT,{},!0)},notifyOpen:function(){t.emit(f.OPEN_EVENT,{},!0)},trapFocus:function(){t.focusTrap.trapFocus()},releaseFocus:function(){t.focusTrap.releaseFocus()}},n=m.DISMISSIBLE,i=m.MODAL;if(this.root.classList.contains(n))return new d(e);if(this.root.classList.contains(i))return new p(e);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+n+" and "+i+".")},e}(o.B),E=n(69022);const C="UiDrawer",T={TYPES:{permanent:0,dismissible:1,modal:2},cssClasses:{root:"mdc-drawer-root",scrim:"mdc-drawer-scrim"},EVENTS:{NAV:"nav",CHANGE:"update:modelValue"}},v={name:C,customOptions:{UI_DRAWER:T}};var y=Object.assign(v,{props:{navId:{type:[String,null],default:null},modelValue:{type:Boolean,default:!1},type:{type:[String,Number],default:0},viewportHeight:{type:Boolean,default:!1}},emits:[T.EVENTS.NAV,T.EVENTS.CHANGE],setup(t,e){let{emit:n}=e;const s=t,o=(0,i.ref)(null),r=(0,i.reactive)({$drawer:null});let a=null;(0,i.computed)((()=>(0,E.Z)(s,T.TYPES,"permanent")));const c=(0,i.computed)((()=>(0,E.Z)(s,T.TYPES,"dismissible"))),u=(0,i.computed)((()=>(0,E.Z)(s,T.TYPES,"modal"))),d=(0,i.computed)((()=>({"mdc-drawer":!0,"mdc-drawer--dismissible":c.value,"mdc-drawer--modal":u.value})));function p(){if(u.value&&!a){a=document.createElement("div"),a.className=T.cssClasses.scrim,a.addEventListener("click",v);const t=o.value;t.parentNode.insertBefore(a,t.nextSibling)}}function m(){let t=!0;return r.$drawer.list&&r.$drawer.list.listElements.length||(t=!1,console.warn(`[${C}]: <ui-nav> or <ui-list> is required for <ui-drawer-content> in the drawer`)),t}function f(){const t=o.value;r.$drawer=new h(t),r.$drawer.listen(l.OPEN_EVENT,(()=>{n(T.EVENTS.NAV,!0)})),r.$drawer.listen(l.CLOSE_EVENT,v),s.navId&&document.getElementById(s.navId)&&(m(),document.getElementById(s.navId).addEventListener("click",(()=>{m()&&(r.$drawer.open=!r.$drawer.open)})),r.$drawer.open=s.modelValue)}function v(){n(T.EVENTS.NAV,!1),n(T.EVENTS.CHANGE,!1)}return(0,i.onMounted)((()=>{if(s.viewportHeight){o.value.parentNode.classList.add(T.cssClasses.root)}(c.value||u.value)&&(p(),f()),(0,i.watch)((()=>s.modelValue),(t=>{r.$drawer&&(r.$drawer.open=t)})),(0,i.watch)((()=>s.type),(()=>{(0,i.nextTick)((()=>{u.value&&(p(),r.$drawer||f())}))}))})),(t,e)=>((0,i.openBlock)(),(0,i.createElementBlock)("aside",{ref_key:"drawer",ref:o,class:(0,i.normalizeClass)((0,i.unref)(d))},[(0,i.renderSlot)(t.$slots,"default")],2))}})}}]);