"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[3235],{17289:function(t,e,i){i.d(e,{Z:function(){return E}});var n=i(73114),o=i(92459),r=i(8228);const c=(0,n.createElementVNode)("div",{class:"mdc-chip__ripple"},null,-1),a={key:0,class:"mdc-chip__checkmark"},s=[(0,n.createElementVNode)("svg",{class:"mdc-chip__checkmark-svg",viewBox:"-2 -3 30 30"},[(0,n.createElementVNode)("path",{class:"mdc-chip__checkmark-path",fill:"none",stroke:"black",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})],-1)],l={role:"gridcell"},u=["role"],d={class:"mdc-chip__text"},h={key:0,role:"gridcell"},p={cssClasses:{icon:"mdc-chip__icon mdc-chip__icon--leading",removeIcon:"mdc-chip__icon mdc-chip__icon--trailing"},EVENTS:{REMOVE:"remove"}},f={name:"UiChip",customOptions:{UI_GLOBAL:r.Z,UI_CHIP:p}};var E=Object.assign(f,{props:{...o.U,selected:{type:Boolean,default:!1},deletable:{type:Boolean,default:!1}},emits:[r.Z.EVENTS.CLICK,p.EVENTS.REMOVE],setup(t,e){let{emit:i}=e;const f=t,E=(0,n.getCurrentInstance)().parent,C=(0,n.ref)(null),{materialIcon:I}=(0,o.J)(f),y=(0,n.computed)((()=>[r.Z.cssClasses.icon,p.cssClasses.icon,{"mdc-chip__icon--leading-hidden":f.selected}])),A=(0,n.computed)((()=>{var t,e;let i=null;return i=null!==E&&void 0!==E&&null!==(t=E.exposed)&&void 0!==t&&t.choiceChips.value?"radio":null!==E&&void 0!==E&&null!==(e=E.exposed)&&void 0!==e&&e.filterChips.value?"checkbox":"button",i}));function g(t){(0,n.nextTick)((()=>{var e;(null===E||void 0===E||null===(e=E.exposed)||void 0===e?void 0:e.choiceChips.value)&&(E.exposed.choiceChipId.value=C.value.id),i(r.Z.EVENTS.CLICK,t)}))}function m(t){i(p.EVENTS.REMOVE,t)}return(e,i)=>((0,n.openBlock)(),(0,n.createElementBlock)("div",{ref_key:"chip",ref:C,class:"mdc-chip",role:"row",onClick:g},[c,(0,n.renderSlot)(e.$slots,"before",{iconClass:p.cssClasses.icon},(()=>[(0,n.unref)(I)?((0,n.openBlock)(),(0,n.createElementBlock)("i",{key:0,class:(0,n.normalizeClass)((0,n.unref)(y))},(0,n.toDisplayString)((0,n.unref)(I)),3)):(0,n.createCommentVNode)("",!0)])),e.$parent.filterChips?((0,n.openBlock)(),(0,n.createElementBlock)("span",a,s)):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("span",l,[(0,n.createElementVNode)("span",{role:(0,n.unref)(A),class:"mdc-chip__primary-action"},[(0,n.createElementVNode)("span",d,[(0,n.renderSlot)(e.$slots,"default")])],8,u)]),(0,n.renderSlot)(e.$slots,"after",{iconClass:p.cssClasses.removeIcon},(()=>[e.$parent.inputChips||e.$parent.filterChips?((0,n.openBlock)(),(0,n.createElementBlock)("span",h,[t.deletable?((0,n.openBlock)(),(0,n.createElementBlock)("i",{key:0,class:(0,n.normalizeClass)((0,n.unref)(r.Z).getMaterialIconClass(p.cssClasses.removeIcon)),tabindex:"-1","data-mdc-deletable":"true",onClick:m}," cancel ",2)):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0)]))],512))}})},48375:function(t,e,i){i.d(e,{Z:function(){return G}});var n,o=i(73114),r=i(70655),c=i(48315),a=i(43800),s=i(74507);!function(t){t[t.UNSPECIFIED=0]="UNSPECIFIED",t[t.CLICK=1]="CLICK",t[t.BACKSPACE_KEY=2]="BACKSPACE_KEY",t[t.DELETE_KEY=3]="DELETE_KEY",t[t.SPACEBAR_KEY=4]="SPACEBAR_KEY",t[t.ENTER_KEY=5]="ENTER_KEY"}(n||(n={}));var l,u,d={ARIA_HIDDEN:"aria-hidden",INTERACTION_EVENT:"MDCChipTrailingAction:interaction",NAVIGATION_EVENT:"MDCChipTrailingAction:navigation",TAB_INDEX:"tabindex"},h=i(85099),p=i(1721),f=function(t){function e(i){return t.call(this,(0,r.pi)((0,r.pi)({},e.defaultAdapter),i))||this}return(0,r.ZT)(e,t),Object.defineProperty(e,"strings",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{focus:function(){},getAttribute:function(){return null},setAttribute:function(){},notifyInteraction:function(){},notifyNavigation:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(t){t.stopPropagation(),this.adapter.notifyInteraction(n.CLICK)},e.prototype.handleKeydown=function(t){t.stopPropagation();var e=(0,p.ku)(t);if(this.shouldNotifyInteractionFromKey(e)){var i=this.getTriggerFromKey(e);this.adapter.notifyInteraction(i)}else(0,p.tI)(t)&&this.adapter.notifyNavigation(e)},e.prototype.removeFocus=function(){this.adapter.setAttribute(d.TAB_INDEX,"-1")},e.prototype.focus=function(){this.adapter.setAttribute(d.TAB_INDEX,"0"),this.adapter.focus()},e.prototype.isNavigable=function(){return"true"!==this.adapter.getAttribute(d.ARIA_HIDDEN)},e.prototype.shouldNotifyInteractionFromKey=function(t){var e=t===p.Fn.ENTER||t===p.Fn.SPACEBAR,i=t===p.Fn.BACKSPACE||t===p.Fn.DELETE;return e||i},e.prototype.getTriggerFromKey=function(t){return t===p.Fn.SPACEBAR?n.SPACEBAR_KEY:t===p.Fn.ENTER?n.ENTER_KEY:t===p.Fn.DELETE?n.DELETE_KEY:t===p.Fn.BACKSPACE?n.BACKSPACE_KEY:n.UNSPECIFIED},e}(h.K),E=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,r.ZT)(e,t),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(t,e){return new a.F(t,e)});var e=a.F.createAdapter(this);this.rippleSurface=t(this.root,new s.l(e))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(e){t.foundation.handleClick(e)},this.handleKeydown=function(e){t.foundation.handleKeydown(e)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown)},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this;return new f({focus:function(){t.root.focus()},getAttribute:function(e){return t.root.getAttribute(e)},notifyInteraction:function(e){t.emit(d.INTERACTION_EVENT,{trigger:e},!0)},notifyNavigation:function(e){t.emit(d.NAVIGATION_EVENT,{key:e},!0)},setAttribute:function(e,i){t.safeSetAttribute(t.root,e,i)}})},e.prototype.isNavigable=function(){return this.foundation.isNavigable()},e.prototype.focus=function(){this.foundation.focus()},e.prototype.removeFocus=function(){this.foundation.removeFocus()},e}(c.B);!function(t){t.LEFT="left",t.RIGHT="right"}(l||(l={})),function(t){t.PRIMARY="primary",t.TRAILING="trailing",t.NONE="none"}(u||(u={}));var C={ADDED_ANNOUNCEMENT_ATTRIBUTE:"data-mdc-chip-added-announcement",ARIA_CHECKED:"aria-checked",ARROW_DOWN_KEY:"ArrowDown",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",ARROW_UP_KEY:"ArrowUp",BACKSPACE_KEY:"Backspace",CHECKMARK_SELECTOR:".mdc-chip__checkmark",DELETE_KEY:"Delete",END_KEY:"End",ENTER_KEY:"Enter",ENTRY_ANIMATION_NAME:"mdc-chip-entry",HOME_KEY:"Home",IE_ARROW_DOWN_KEY:"Down",IE_ARROW_LEFT_KEY:"Left",IE_ARROW_RIGHT_KEY:"Right",IE_ARROW_UP_KEY:"Up",IE_DELETE_KEY:"Del",INTERACTION_EVENT:"MDCChip:interaction",LEADING_ICON_SELECTOR:".mdc-chip__icon--leading",NAVIGATION_EVENT:"MDCChip:navigation",PRIMARY_ACTION_SELECTOR:".mdc-chip__primary-action",REMOVED_ANNOUNCEMENT_ATTRIBUTE:"data-mdc-chip-removed-announcement",REMOVAL_EVENT:"MDCChip:removal",SELECTION_EVENT:"MDCChip:selection",SPACEBAR_KEY:" ",TAB_INDEX:"tabindex",TRAILING_ACTION_SELECTOR:".mdc-chip-trailing-action",TRAILING_ICON_INTERACTION_EVENT:"MDCChip:trailingIconInteraction",TRAILING_ICON_SELECTOR:".mdc-chip__icon--trailing"},I={CHECKMARK:"mdc-chip__checkmark",CHIP_EXIT:"mdc-chip--exit",DELETABLE:"mdc-chip--deletable",EDITABLE:"mdc-chip--editable",EDITING:"mdc-chip--editing",HIDDEN_LEADING_ICON:"mdc-chip__icon--leading-hidden",LEADING_ICON:"mdc-chip__icon--leading",PRIMARY_ACTION:"mdc-chip__primary-action",PRIMARY_ACTION_FOCUSED:"mdc-chip--primary-action-focused",SELECTED:"mdc-chip--selected",TEXT:"mdc-chip__text",TRAILING_ACTION:"mdc-chip__trailing-action",TRAILING_ICON:"mdc-chip__icon--trailing"},y=new Set;y.add(C.ARROW_LEFT_KEY),y.add(C.ARROW_RIGHT_KEY),y.add(C.ARROW_DOWN_KEY),y.add(C.ARROW_UP_KEY),y.add(C.END_KEY),y.add(C.HOME_KEY),y.add(C.IE_ARROW_LEFT_KEY),y.add(C.IE_ARROW_RIGHT_KEY),y.add(C.IE_ARROW_DOWN_KEY),y.add(C.IE_ARROW_UP_KEY);var A=new Set;A.add(C.ARROW_UP_KEY),A.add(C.ARROW_DOWN_KEY),A.add(C.HOME_KEY),A.add(C.END_KEY),A.add(C.IE_ARROW_UP_KEY),A.add(C.IE_ARROW_DOWN_KEY);var g,m={bottom:0,height:0,left:0,right:0,top:0,width:0};!function(t){t[t.SHOULD_FOCUS=0]="SHOULD_FOCUS",t[t.SHOULD_NOT_FOCUS=1]="SHOULD_NOT_FOCUS"}(g||(g={}));var T,_=function(t){function e(i){var n=t.call(this,(0,r.pi)((0,r.pi)({},e.defaultAdapter),i))||this;return n.shouldRemoveOnTrailingIconClick=!0,n.shouldFocusPrimaryActionOnClick=!0,n}return(0,r.ZT)(e,t),Object.defineProperty(e,"strings",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassToLeadingIcon:function(){},eventTargetHasClass:function(){return!1},focusPrimaryAction:function(){},focusTrailingAction:function(){},getAttribute:function(){return null},getCheckmarkBoundingClientRect:function(){return m},getComputedStyleValue:function(){return""},getRootBoundingClientRect:function(){return m},hasClass:function(){return!1},hasLeadingIcon:function(){return!1},isRTL:function(){return!1},isTrailingActionNavigable:function(){return!1},notifyEditFinish:function(){},notifyEditStart:function(){},notifyInteraction:function(){},notifyNavigation:function(){},notifyRemoval:function(){},notifySelection:function(){},notifyTrailingIconInteraction:function(){},removeClass:function(){},removeClassFromLeadingIcon:function(){},removeTrailingActionFocus:function(){},setPrimaryActionAttr:function(){},setStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.isSelected=function(){return this.adapter.hasClass(I.SELECTED)},e.prototype.isEditable=function(){return this.adapter.hasClass(I.EDITABLE)},e.prototype.isEditing=function(){return this.adapter.hasClass(I.EDITING)},e.prototype.setSelected=function(t){this.setSelectedImpl(t),this.notifySelection(t)},e.prototype.setSelectedFromChipSet=function(t,e){this.setSelectedImpl(t),e&&this.notifyIgnoredSelection(t)},e.prototype.getShouldRemoveOnTrailingIconClick=function(){return this.shouldRemoveOnTrailingIconClick},e.prototype.setShouldRemoveOnTrailingIconClick=function(t){this.shouldRemoveOnTrailingIconClick=t},e.prototype.setShouldFocusPrimaryActionOnClick=function(t){this.shouldFocusPrimaryActionOnClick=t},e.prototype.getDimensions=function(){var t=this,e=function(){return t.adapter.getRootBoundingClientRect()};if(!this.adapter.hasLeadingIcon()){var i=t.adapter.getCheckmarkBoundingClientRect();if(i){var n=e();return{bottom:n.bottom,height:n.height,left:n.left,right:n.right,top:n.top,width:n.width+i.height}}}return e()},e.prototype.beginExit=function(){this.adapter.addClass(I.CHIP_EXIT)},e.prototype.handleClick=function(){this.adapter.notifyInteraction(),this.setPrimaryActionFocusable(this.getFocusBehavior())},e.prototype.handleDoubleClick=function(){this.isEditable()&&this.startEditing()},e.prototype.handleTransitionEnd=function(t){var e=this,i=this.adapter.eventTargetHasClass(t.target,I.CHIP_EXIT),n="width"===t.propertyName,o="opacity"===t.propertyName;if(i&&o){var r=this.adapter.getComputedStyleValue("width");requestAnimationFrame((function(){e.adapter.setStyleProperty("width",r),e.adapter.setStyleProperty("padding","0"),e.adapter.setStyleProperty("margin","0"),requestAnimationFrame((function(){e.adapter.setStyleProperty("width","0")}))}))}else{if(i&&n){this.removeFocus();var c=this.adapter.getAttribute(C.REMOVED_ANNOUNCEMENT_ATTRIBUTE);this.adapter.notifyRemoval(c)}if(o){var a=this.adapter.eventTargetHasClass(t.target,I.LEADING_ICON)&&this.adapter.hasClass(I.SELECTED),s=this.adapter.eventTargetHasClass(t.target,I.CHECKMARK)&&!this.adapter.hasClass(I.SELECTED);a?this.adapter.addClassToLeadingIcon(I.HIDDEN_LEADING_ICON):s&&this.adapter.removeClassFromLeadingIcon(I.HIDDEN_LEADING_ICON)}}},e.prototype.handleFocusIn=function(t){this.eventFromPrimaryAction(t)&&this.adapter.addClass(I.PRIMARY_ACTION_FOCUSED)},e.prototype.handleFocusOut=function(t){this.eventFromPrimaryAction(t)&&(this.isEditing()&&this.finishEditing(),this.adapter.removeClass(I.PRIMARY_ACTION_FOCUSED))},e.prototype.handleTrailingActionInteraction=function(){this.adapter.notifyTrailingIconInteraction(),this.removeChip()},e.prototype.handleKeydown=function(t){if(!this.isEditing())return this.isEditable()&&this.shouldStartEditing(t)&&(t.preventDefault(),this.startEditing()),this.shouldNotifyInteraction(t)?(this.adapter.notifyInteraction(),void this.setPrimaryActionFocusable(this.getFocusBehavior())):this.isDeleteAction(t)?(t.preventDefault(),void this.removeChip()):void(y.has(t.key)&&(t.preventDefault(),this.focusNextAction(t.key,u.PRIMARY)));this.shouldFinishEditing(t)&&(t.preventDefault(),this.finishEditing())},e.prototype.handleTrailingActionNavigation=function(t){this.focusNextAction(t.detail.key,u.TRAILING)},e.prototype.removeFocus=function(){this.adapter.setPrimaryActionAttr(C.TAB_INDEX,"-1"),this.adapter.removeTrailingActionFocus()},e.prototype.focusPrimaryAction=function(){this.setPrimaryActionFocusable(g.SHOULD_FOCUS)},e.prototype.focusTrailingAction=function(){if(this.adapter.isTrailingActionNavigable())return this.adapter.setPrimaryActionAttr(C.TAB_INDEX,"-1"),void this.adapter.focusTrailingAction();this.focusPrimaryAction()},e.prototype.setPrimaryActionFocusable=function(t){this.adapter.setPrimaryActionAttr(C.TAB_INDEX,"0"),t===g.SHOULD_FOCUS&&this.adapter.focusPrimaryAction(),this.adapter.removeTrailingActionFocus()},e.prototype.getFocusBehavior=function(){return this.shouldFocusPrimaryActionOnClick?g.SHOULD_FOCUS:g.SHOULD_NOT_FOCUS},e.prototype.focusNextAction=function(t,e){var i=this.adapter.isTrailingActionNavigable(),n=this.getDirection(t);!A.has(t)&&i?e!==u.PRIMARY||n!==l.RIGHT?e!==u.TRAILING||n!==l.LEFT?this.adapter.notifyNavigation(t,u.NONE):this.focusPrimaryAction():this.focusTrailingAction():this.adapter.notifyNavigation(t,e)},e.prototype.getDirection=function(t){var e=this.adapter.isRTL(),i=t===C.ARROW_LEFT_KEY||t===C.IE_ARROW_LEFT_KEY,n=t===C.ARROW_RIGHT_KEY||t===C.IE_ARROW_RIGHT_KEY;return!e&&i||e&&n?l.LEFT:l.RIGHT},e.prototype.removeChip=function(){this.shouldRemoveOnTrailingIconClick&&this.beginExit()},e.prototype.shouldStartEditing=function(t){return this.eventFromPrimaryAction(t)&&t.key===C.ENTER_KEY},e.prototype.shouldFinishEditing=function(t){return t.key===C.ENTER_KEY},e.prototype.shouldNotifyInteraction=function(t){return t.key===C.ENTER_KEY||t.key===C.SPACEBAR_KEY},e.prototype.isDeleteAction=function(t){return this.adapter.hasClass(I.DELETABLE)&&(t.key===C.BACKSPACE_KEY||t.key===C.DELETE_KEY||t.key===C.IE_DELETE_KEY)},e.prototype.setSelectedImpl=function(t){t?(this.adapter.addClass(I.SELECTED),this.adapter.setPrimaryActionAttr(C.ARIA_CHECKED,"true")):(this.adapter.removeClass(I.SELECTED),this.adapter.setPrimaryActionAttr(C.ARIA_CHECKED,"false"))},e.prototype.notifySelection=function(t){this.adapter.notifySelection(t,!1)},e.prototype.notifyIgnoredSelection=function(t){this.adapter.notifySelection(t,!0)},e.prototype.eventFromPrimaryAction=function(t){return this.adapter.eventTargetHasClass(t.target,I.PRIMARY_ACTION)},e.prototype.startEditing=function(){this.adapter.addClass(I.EDITING),this.adapter.notifyEditStart()},e.prototype.finishEditing=function(){this.adapter.removeClass(I.EDITING),this.adapter.notifyEditFinish()},e}(h.K),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,r.ZT)(e,t),Object.defineProperty(e.prototype,"selected",{get:function(){return this.foundation.isSelected()},set:function(t){this.foundation.setSelected(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldRemoveOnTrailingIconClick",{get:function(){return this.foundation.getShouldRemoveOnTrailingIconClick()},set:function(t){this.foundation.setShouldRemoveOnTrailingIconClick(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"setShouldFocusPrimaryActionOnClick",{set:function(t){this.foundation.setShouldFocusPrimaryActionOnClick(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.root.id},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e){var i=this;void 0===t&&(t=function(t,e){return new a.F(t,e)}),void 0===e&&(e=function(t){return new E(t)}),this.leadingIcon=this.root.querySelector(C.LEADING_ICON_SELECTOR),this.checkmark=this.root.querySelector(C.CHECKMARK_SELECTOR),this.primaryAction=this.root.querySelector(C.PRIMARY_ACTION_SELECTOR);var n=this.root.querySelector(C.TRAILING_ACTION_SELECTOR);n&&(this.trailingAction=e(n));var o=(0,r.pi)((0,r.pi)({},a.F.createAdapter(this)),{computeBoundingRect:function(){return i.foundation.getDimensions()}});this.rippleSurface=t(this.root,new s.l(o))},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTrailingActionInteraction=function(){t.foundation.handleTrailingActionInteraction()},this.handleTrailingActionNavigation=function(e){t.foundation.handleTrailingActionNavigation(e)},this.handleClick=function(){t.foundation.handleClick()},this.handleKeydown=function(e){t.foundation.handleKeydown(e)},this.handleTransitionEnd=function(e){t.foundation.handleTransitionEnd(e)},this.handleFocusIn=function(e){t.foundation.handleFocusIn(e)},this.handleFocusOut=function(e){t.foundation.handleFocusOut(e)},this.listen("transitionend",this.handleTransitionEnd),this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown),this.listen("focusin",this.handleFocusIn),this.listen("focusout",this.handleFocusOut),this.trailingAction&&(this.listen(d.INTERACTION_EVENT,this.handleTrailingActionInteraction),this.listen(d.NAVIGATION_EVENT,this.handleTrailingActionNavigation))},e.prototype.destroy=function(){this.rippleSurface.destroy(),this.unlisten("transitionend",this.handleTransitionEnd),this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.handleFocusIn),this.unlisten("focusout",this.handleFocusOut),this.trailingAction&&(this.unlisten(d.INTERACTION_EVENT,this.handleTrailingActionInteraction),this.unlisten(d.NAVIGATION_EVENT,this.handleTrailingActionNavigation)),t.prototype.destroy.call(this)},e.prototype.beginExit=function(){this.foundation.beginExit()},e.prototype.getDefaultFoundation=function(){var t=this;return new _({addClass:function(e){t.root.classList.add(e)},addClassToLeadingIcon:function(e){t.leadingIcon&&t.leadingIcon.classList.add(e)},eventTargetHasClass:function(t,e){return!!t&&t.classList.contains(e)},focusPrimaryAction:function(){t.primaryAction&&t.primaryAction.focus()},focusTrailingAction:function(){t.trailingAction&&t.trailingAction.focus()},getAttribute:function(e){return t.root.getAttribute(e)},getCheckmarkBoundingClientRect:function(){return t.checkmark?t.checkmark.getBoundingClientRect():null},getComputedStyleValue:function(e){return window.getComputedStyle(t.root).getPropertyValue(e)},getRootBoundingClientRect:function(){return t.root.getBoundingClientRect()},hasClass:function(e){return t.root.classList.contains(e)},hasLeadingIcon:function(){return!!t.leadingIcon},isRTL:function(){return"rtl"===window.getComputedStyle(t.root).getPropertyValue("direction")},isTrailingActionNavigable:function(){return!!t.trailingAction&&t.trailingAction.isNavigable()},notifyInteraction:function(){t.emit(C.INTERACTION_EVENT,{chipId:t.id},!0)},notifyNavigation:function(e,i){t.emit(C.NAVIGATION_EVENT,{chipId:t.id,key:e,source:i},!0)},notifyRemoval:function(e){t.emit(C.REMOVAL_EVENT,{chipId:t.id,removedAnnouncement:e},!0)},notifySelection:function(e,i){t.emit(C.SELECTION_EVENT,{chipId:t.id,selected:e,shouldIgnore:i},!0)},notifyTrailingIconInteraction:function(){t.emit(C.TRAILING_ICON_INTERACTION_EVENT,{chipId:t.id},!0)},notifyEditStart:function(){},notifyEditFinish:function(){},removeClass:function(e){t.root.classList.remove(e)},removeClassFromLeadingIcon:function(e){t.leadingIcon&&t.leadingIcon.classList.remove(e)},removeTrailingActionFocus:function(){t.trailingAction&&t.trailingAction.removeFocus()},setPrimaryActionAttr:function(e,i){t.primaryAction&&t.safeSetAttribute(t.primaryAction,e,i)},setStyleProperty:function(e,i){t.root.style.setProperty(e,i)}})},e.prototype.setSelectedFromChipSet=function(t,e){this.foundation.setSelectedFromChipSet(t,e)},e.prototype.focusPrimaryAction=function(){this.foundation.focusPrimaryAction()},e.prototype.focusTrailingAction=function(){this.foundation.focusTrailingAction()},e.prototype.removeFocus=function(){this.foundation.removeFocus()},e.prototype.remove=function(){var t=this.root.parentNode;null!==t&&t.removeChild(this.root)},e}(c.B);!function(t){t.POLITE="polite",t.ASSERTIVE="assertive"}(T||(T={}));var N=function(){function t(){this.liveRegions=new Map}return t.getInstance=function(){return t.instance||(t.instance=new t),t.instance},t.prototype.say=function(t,e){var i,n,o=null!==(i=null===e||void 0===e?void 0:e.priority)&&void 0!==i?i:T.POLITE,r=null!==(n=null===e||void 0===e?void 0:e.ownerDocument)&&void 0!==n?n:document,c=this.getLiveRegion(o,r);function a(){c.textContent="",r.removeEventListener("click",a)}c.textContent="",setTimeout((function(){c.textContent=t,r.addEventListener("click",a)}),1)},t.prototype.getLiveRegion=function(t,e){var i=this.liveRegions.get(e);i||(i=new Map,this.liveRegions.set(e,i));var n=i.get(t);if(n&&e.body.contains(n))return n;var o=this.createLiveRegion(t,e);return i.set(t,o),o},t.prototype.createLiveRegion=function(t,e){var i=e.createElement("div");return i.style.position="absolute",i.style.top="-9999px",i.style.left="-9999px",i.style.height="1px",i.style.overflow="hidden",i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live",t),i.setAttribute("data-mdc-dom-announce","true"),e.body.appendChild(i),i},t}(),R={CHIP_SELECTOR:".mdc-chip"},O={CHOICE:"mdc-chip-set--choice",FILTER:"mdc-chip-set--filter"},S=function(t){function e(i){var n=t.call(this,(0,r.pi)((0,r.pi)({},e.defaultAdapter),i))||this;return n.selectedChipIds=[],n}return(0,r.ZT)(e,t),Object.defineProperty(e,"strings",{get:function(){return R},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return O},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{announceMessage:function(){},focusChipPrimaryActionAtIndex:function(){},focusChipTrailingActionAtIndex:function(){},getChipListCount:function(){return-1},getIndexOfChipById:function(){return-1},hasClass:function(){return!1},isRTL:function(){return!1},removeChipAtIndex:function(){},removeFocusFromChipAtIndex:function(){},selectChipAtIndex:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedChipIds=function(){return this.selectedChipIds.slice()},e.prototype.select=function(t){this.selectImpl(t,!1)},e.prototype.handleChipInteraction=function(t){var e=t.chipId,i=this.adapter.getIndexOfChipById(e);this.removeFocusFromChipsExcept(i),(this.adapter.hasClass(O.CHOICE)||this.adapter.hasClass(O.FILTER))&&this.toggleSelect(e)},e.prototype.handleChipSelection=function(t){var e=t.chipId,i=t.selected;if(!t.shouldIgnore){var n=this.selectedChipIds.indexOf(e)>=0;i&&!n?this.select(e):!i&&n&&this.deselectImpl(e)}},e.prototype.handleChipRemoval=function(t){var e=t.chipId,i=t.removedAnnouncement;i&&this.adapter.announceMessage(i);var n=this.adapter.getIndexOfChipById(e);this.deselectAndNotifyClients(e),this.adapter.removeChipAtIndex(n);var o=this.adapter.getChipListCount()-1;if(!(o<0)){var r=Math.min(n,o);this.removeFocusFromChipsExcept(r),this.adapter.focusChipTrailingActionAtIndex(r)}},e.prototype.handleChipNavigation=function(t){var e=t.chipId,i=t.key,n=t.source,o=this.adapter.getChipListCount()-1,r=this.adapter.getIndexOfChipById(e);if(-1!==r&&y.has(i)){var c=this.adapter.isRTL(),a=i===C.ARROW_LEFT_KEY||i===C.IE_ARROW_LEFT_KEY,s=i===C.ARROW_RIGHT_KEY||i===C.IE_ARROW_RIGHT_KEY,l=i===C.ARROW_DOWN_KEY||i===C.IE_ARROW_DOWN_KEY,u=!c&&s||c&&a||l,d=i===C.HOME_KEY,h=i===C.END_KEY;u?r++:d?r=0:h?r=o:r--,r<0||r>o||(this.removeFocusFromChipsExcept(r),this.focusChipAction(r,i,n))}},e.prototype.focusChipAction=function(t,e,i){var n=A.has(e);if(n&&i===u.PRIMARY)this.adapter.focusChipPrimaryActionAtIndex(t);else if(n&&i===u.TRAILING)this.adapter.focusChipTrailingActionAtIndex(t);else{var o=this.getDirection(e);o!==l.LEFT?o!==l.RIGHT||this.adapter.focusChipPrimaryActionAtIndex(t):this.adapter.focusChipTrailingActionAtIndex(t)}},e.prototype.getDirection=function(t){var e=this.adapter.isRTL(),i=t===C.ARROW_LEFT_KEY||t===C.IE_ARROW_LEFT_KEY,n=t===C.ARROW_RIGHT_KEY||t===C.IE_ARROW_RIGHT_KEY;return!e&&i||e&&n?l.LEFT:l.RIGHT},e.prototype.deselectImpl=function(t,e){void 0===e&&(e=!1);var i=this.selectedChipIds.indexOf(t);if(i>=0){this.selectedChipIds.splice(i,1);var n=this.adapter.getIndexOfChipById(t);this.adapter.selectChipAtIndex(n,!1,e)}},e.prototype.deselectAndNotifyClients=function(t){this.deselectImpl(t,!0)},e.prototype.toggleSelect=function(t){this.selectedChipIds.indexOf(t)>=0?this.deselectAndNotifyClients(t):this.selectAndNotifyClients(t)},e.prototype.removeFocusFromChipsExcept=function(t){for(var e=this.adapter.getChipListCount(),i=0;i<e;i++)i!==t&&this.adapter.removeFocusFromChipAtIndex(i)},e.prototype.selectAndNotifyClients=function(t){this.selectImpl(t,!0)},e.prototype.selectImpl=function(t,e){if(!(this.selectedChipIds.indexOf(t)>=0)){if(this.adapter.hasClass(O.CHOICE)&&this.selectedChipIds.length>0){var i=this.selectedChipIds[0],n=this.adapter.getIndexOfChipById(i);this.selectedChipIds=[],this.adapter.selectChipAtIndex(n,!1,e)}this.selectedChipIds.push(t);var o=this.adapter.getIndexOfChipById(t);this.adapter.selectChipAtIndex(o,!0,e)}},e}(h.K),L=_.strings,F=L.INTERACTION_EVENT,b=L.SELECTION_EVENT,D=L.REMOVAL_EVENT,k=L.NAVIGATION_EVENT,P=S.strings.CHIP_SELECTOR,K=0,Y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,r.ZT)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"chips",{get:function(){return this.chipsList.slice()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedChipIds",{get:function(){return this.foundation.getSelectedChipIds()},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t){void 0===t&&(t=function(t){return new v(t)}),this.chipFactory=t,this.chipsList=this.instantiateChips(this.chipFactory)},e.prototype.initialSyncWithDOM=function(){var t,e,i=this;try{for(var n=(0,r.XA)(this.chipsList),o=n.next();!o.done;o=n.next()){var c=o.value;c.id&&c.selected&&this.foundation.select(c.id)}}catch(a){t={error:a}}finally{try{o&&!o.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.handleChipInteraction=function(t){i.foundation.handleChipInteraction(t.detail)},this.handleChipSelection=function(t){i.foundation.handleChipSelection(t.detail)},this.handleChipRemoval=function(t){i.foundation.handleChipRemoval(t.detail)},this.handleChipNavigation=function(t){i.foundation.handleChipNavigation(t.detail)},this.listen(F,this.handleChipInteraction),this.listen(b,this.handleChipSelection),this.listen(D,this.handleChipRemoval),this.listen(k,this.handleChipNavigation)},e.prototype.destroy=function(){var e,i;try{for(var n=(0,r.XA)(this.chipsList),o=n.next();!o.done;o=n.next()){o.value.destroy()}}catch(c){e={error:c}}finally{try{o&&!o.done&&(i=n.return)&&i.call(n)}finally{if(e)throw e.error}}this.unlisten(F,this.handleChipInteraction),this.unlisten(b,this.handleChipSelection),this.unlisten(D,this.handleChipRemoval),this.unlisten(k,this.handleChipNavigation),t.prototype.destroy.call(this)},e.prototype.addChip=function(t){t.id=t.id||"mdc-chip-"+ ++K,this.chipsList.push(this.chipFactory(t))},e.prototype.getDefaultFoundation=function(){var t=this;return new S({announceMessage:function(t){!function(t,e){N.getInstance().say(t,e)}(t)},focusChipPrimaryActionAtIndex:function(e){t.chipsList[e].focusPrimaryAction()},focusChipTrailingActionAtIndex:function(e){t.chipsList[e].focusTrailingAction()},getChipListCount:function(){return t.chips.length},getIndexOfChipById:function(e){return t.findChipIndex(e)},hasClass:function(e){return t.root.classList.contains(e)},isRTL:function(){return"rtl"===window.getComputedStyle(t.root).getPropertyValue("direction")},removeChipAtIndex:function(e){e>=0&&e<t.chips.length&&(t.chipsList[e].destroy(),t.chipsList[e].remove(),t.chipsList.splice(e,1))},removeFocusFromChipAtIndex:function(e){t.chipsList[e].removeFocus()},selectChipAtIndex:function(e,i,n){e>=0&&e<t.chips.length&&t.chipsList[e].setSelectedFromChipSet(i,n)}})},e.prototype.instantiateChips=function(t){return Array.from(this.root.querySelectorAll(P)).map((function(e){return e.id=e.id||"mdc-chip-"+ ++K,t(e)}))},e.prototype.findChipIndex=function(t){for(var e=0;e<this.chips.length;e++)if(this.chipsList[e].id===t)return e;return-1},e}(c.B),V=i(75802),x=i(69022),B=i(5993);const w="UiChips",H={TYPES:{action:0,input:1,choice:2,filter:3},EVENTS:{CHANGE:"update:modelValue"}},M={name:w,customOptions:{name:w,UI_CHIPS:H}};var G=Object.assign(M,{props:{type:{type:[String,Number],default:0},modelValue:{type:[String,Number,Array],default:-1},options:{type:Array,default:()=>[]},optionFormat:{type:Object,default:()=>B.A},items:{type:Array,default:()=>[]}},emits:[H.EVENTS.CHANGE],setup(t,e){let{expose:i,emit:n}=e;const r=t,c=(0,o.ref)(null),a=(0,o.reactive)({$chipSet:null,selectedValue:r.modelValue,currentOptions:r.options,chipsCount:r.items.length,choiceChipId:null}),{currentOptions:s,choiceChipId:l}=(0,o.toRefs)(a),u=(0,o.computed)((()=>(0,x.Z)(r,H.TYPES,"input"))),d=(0,o.computed)((()=>(0,x.Z)(r,H.TYPES,"choice"))),h=(0,o.computed)((()=>(0,x.Z)(r,H.TYPES,"filter"))),p=(0,o.computed)((()=>({"mdc-chip-set":!0,"mdc-chip-set--input":u.value,"mdc-chip-set--choice":d.value,"mdc-chip-set--filter":h.value})));function f(){a.$chipSet=new Y(c.value),a.$chipSet.chips.length?(!function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.$chipSet.chips;if(h.value){let e=[];a.currentOptions.length?a.currentOptions.forEach(((t,i)=>{Array.isArray(a.selectedValue)&&a.selectedValue.includes(t[r.optionFormat.value])&&e.push(i)})):e=a.selectedValue,t.forEach(((t,i)=>{!t.selected&&e.includes(i)&&(t.selected=!0)}))}else if(d.value){let e=-1;e=a.currentOptions.length?a.currentOptions.findIndex((t=>t[r.optionFormat.value]===a.selectedValue)):a.selectedValue,~e&&t[e]&&(t[e].selected=!0,a.choiceChipId=t[e].id)}}(),a.$chipSet.listen(C.SELECTION_EVENT,(t=>{let{detail:e}=t;d.value?function(t){let{chipId:e,selected:i}=t;if(e===a.choiceChipId)if(a.choiceChipId=null,i){const t=a.$chipSet.foundation.adapter.getIndexOfChipById(e),i=~t?a.currentOptions[t][r.optionFormat.value]:"";n(H.EVENTS.CHANGE,i)}else n(H.EVENTS.CHANGE,-1)}(e):h.value&&function(){let t=[];if(a.$chipSet.chips.forEach(((e,i)=>{e.selected&&t.push(i)})),a.currentOptions.length){const e=a.currentOptions.filter(((e,i)=>t.includes(i))).map((t=>t[r.optionFormat.value])),i=a.selectedValue,o=e;(i.length!==o.length||!i.every((t=>o.some((e=>t===e))))||!o.every((t=>i.some((e=>t===e)))))&&(a.selectedValue=e,n(H.EVENTS.CHANGE,e))}else n(H.EVENTS.CHANGE,t)}()}))):u.value||(a.$chipSet=null)}function E(){const t=a.chipsCount,e=r.items.length;if(e){const i=c.value;if(0===t)i.querySelectorAll(".mdc-chip").forEach((t=>{a.$chipSet.addChip(t)})),a.chipsCount=e;else if(e>t){let t=e-1,n=i.querySelectorAll(".mdc-chip")[t];a.$chipSet.addChip(n),a.chipsCount++}else e<t&&a.chipsCount--}else a.chipsCount=0}return(0,o.onBeforeMount)((()=>(0,B.C)(w,r.optionFormat))),(0,o.onMounted)((()=>{f(),(0,o.watch)((()=>r.modelValue),((t,e)=>{a.$chipSet&&JSON.stringify(t)!==JSON.stringify(e)&&(!function(t){if(h.value){let e=a.currentOptions.length?[]:t;a.currentOptions.length&&a.currentOptions.forEach(((i,n)=>{t.includes(i[r.optionFormat.value])&&e.push(n)})),a.$chipSet.chips.forEach(((t,i)=>{const n=e.includes(i);t.selected!==n&&(t.selected=n)}))}else if(d.value){const e=a.currentOptions.findIndex((e=>e[r.optionFormat.value]===t));~e&&(a.$chipSet.chips[e].selected=!0)}}(t),a.selectedValue=t)})),(0,o.watch)((()=>r.options),(t=>{(d.value||h.value)&&(a.currentOptions=[],(0,o.nextTick)((()=>{a.currentOptions=t,a.$chipSet&&(a.$chipSet.destroy(),a.$chipSet=null,f())})))}),{deep:!0}),(0,o.watch)((()=>r.items),(t=>{t.length>a.chipsCount?E(t.length):t.length<a.chipsCount&&a.chipsCount--}))})),(0,o.onUpdated)((()=>{(0,o.nextTick)((()=>{u.value?E():a.$chipSet||!d.value&&!h.value||f()}))})),i({inputChips:u,choiceChips:d,filterChips:h,choiceChipId:l}),(e,i)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{ref_key:"chips",ref:c,class:(0,o.normalizeClass)((0,o.unref)(p)),role:"grid"},[(0,o.renderSlot)(e.$slots,"default",{},(()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,o.unref)(s),((e,i)=>((0,o.openBlock)(),(0,o.createBlock)(V.default,{key:i},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e[t.optionFormat.label]),1)])),_:2},1024)))),128))]))],2))}})},5993:function(t,e,i){i.d(e,{A:function(){return n},C:function(){return o}});const n={label:"label",value:"value"},o=(t,e)=>{e.label&&e.value||console.error(`[${t}]: Invalid option format ({ label: string; value: string })`)}}}]);