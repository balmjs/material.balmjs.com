"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[6676],{96676:function(t,e,r){r.d(e,{c:function(){return u}});var n=r(96064),o=(r(6304),r(36216)),l=(r(19424),r(16272),r(20432)),i=r(61992);const a={class:"mdc-tab-scroller__scroll-area"},c={class:"mdc-tab-scroller__scroll-content"},s={name:"UiTabScroller",customOptions:{UI_TAB_SCROLLER:i.Av}};var u=Object.assign(s,{props:{...l.w,scrollX:{type:Number,default:0}},emits:[i.Av.EVENTS.CHANGE],setup(t,e){let{expose:r,emit:l}=e;const s=t,u=(0,n.computed)((()=>{let t=["mdc-tab-scroller"];return i.Av.ALIGN.includes(s.align)&&t.push(`mdc-tab-scroller--align-${s.align}`),t.join(" ")})),h=(0,n.ref)(null),p=(0,n.reactive)({$tabScroller:null,scrollValue:s.scrollX});return(0,n.onMounted)((()=>{p.$tabScroller=new o.C(h.value),(0,n.watch)((()=>s.scrollX),(t=>{let e=+t;p.$tabScroller.scrollTo(e),p.scrollValue=e}))})),r({increment:function(){let t=+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0);p.$tabScroller.incrementScroll(t),p.scrollValue+=t,p.scrollValue<0&&(p.scrollValue=0),l(i.Av.EVENTS.CHANGE,p.scrollValue)}}),(t,e)=>((0,n.openBlock)(),(0,n.createElementBlock)("div",{ref_key:"tabScroller",ref:h,class:(0,n.normalizeClass)(u.value)},[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",c,[(0,n.renderSlot)(t.$slots,"default")])])],2))}})},36216:function(t,e,r){r.d(e,{C:function(){return s}});var n=r(81316),o=r(77448),l=r(53032),i=r(14655),a=r(16272),c=r(6304),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,n.ct)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area=this.root.querySelector(a.m.strings.AREA_SELECTOR),this.content=this.root.querySelector(a.m.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction=function(){t.foundation.handleInteraction()},this.handleTransitionEnd=function(e){t.foundation.handleTransitionEnd(e)},this.area.addEventListener("wheel",this.handleInteraction,(0,l.E)()),this.area.addEventListener("touchstart",this.handleInteraction,(0,l.E)()),this.area.addEventListener("pointerdown",this.handleInteraction,(0,l.E)()),this.area.addEventListener("mousedown",this.handleInteraction,(0,l.E)()),this.area.addEventListener("keydown",this.handleInteraction,(0,l.E)()),this.content.addEventListener("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.area.removeEventListener("wheel",this.handleInteraction,(0,l.E)()),this.area.removeEventListener("touchstart",this.handleInteraction,(0,l.E)()),this.area.removeEventListener("pointerdown",this.handleInteraction,(0,l.E)()),this.area.removeEventListener("mousedown",this.handleInteraction,(0,l.E)()),this.area.removeEventListener("keydown",this.handleInteraction,(0,l.E)()),this.content.removeEventListener("transitionend",this.handleTransitionEnd)},e.prototype.getDefaultFoundation=function(){var t=this,e={eventTargetMatchesSelector:function(t,e){return(0,i._u)(t,e)},addClass:function(e){t.root.classList.add(e)},removeClass:function(e){t.root.classList.remove(e)},addScrollAreaClass:function(e){t.area.classList.add(e)},setScrollAreaStyleProperty:function(e,r){t.area.style.setProperty(e,r)},setScrollContentStyleProperty:function(e,r){t.content.style.setProperty(e,r)},getScrollContentStyleValue:function(e){return window.getComputedStyle(t.content).getPropertyValue(e)},setScrollAreaScrollLeft:function(e){return t.area.scrollLeft=e},getScrollAreaScrollLeft:function(){return t.area.scrollLeft},getScrollContentOffsetWidth:function(){return t.content.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area.offsetWidth},computeScrollAreaClientRect:function(){return t.area.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return c.I(document)}};return new a.m(e)},e.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},e}(o.s)},19424:function(t,e,r){r.d(e,{k:function(){return n},s:function(){return o}});var n={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},o={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"}},16272:function(t,e,r){r.d(e,{m:function(){return u}});var n=r(81316),o=r(63688),l=r(19424),i=function(t){this.adapter=t},a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,n.ct)(e,t),e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),e=this.calculateScrollEdges().right;return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.calculateScrollEdges(),r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(e.right-t);return{finalScrollPosition:n,scrollDelta:n-r}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(e-t);return{finalScrollPosition:r,scrollDelta:r-e}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.left,t),e.right)},e}(i),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,n.ct)(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(t-e)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(-t);return{finalScrollPosition:r,scrollDelta:r-e}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(e-t);return{finalScrollPosition:r,scrollDelta:r-e}},e.prototype.getAnimatingScrollPosition=function(t,e){return t-e},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth();return{left:this.adapter.getScrollAreaOffsetWidth()-t,right:0}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.max(Math.min(e.right,t),e.left)},e}(i),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,n.ct)(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(t);return{finalScrollPosition:r,scrollDelta:e-r}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(e+t);return{finalScrollPosition:r,scrollDelta:e-r}},e.prototype.getAnimatingScrollPosition=function(t,e){return t+e},e.prototype.calculateScrollEdges=function(){return{left:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth(),right:0}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.right,t),e.left)},e}(i),u=function(t){function e(r){var o=t.call(this,(0,n.C3)((0,n.C3)({},e.defaultAdapter),r))||this;return o.isAnimating=!1,o}return(0,n.ct)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return l.k},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return l.s},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX();return this.adapter.getScrollAreaScrollLeft()-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var r=t.target;this.isAnimating&&this.adapter.eventTargetMatchesSelector(r,e.strings.CONTENT_SELECTOR)&&(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){0!==t&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(0!==t){var e=this.getIncrementScrollOperation(t);0!==e.scrollDelta&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition))}},e.prototype.scrollTo=function(t){this.isRTL()?this.scrollToImplRTL(t):this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if("none"===t)return 0;var e=/\((.+?)\)/.exec(t);if(!e)return 0;var r=e[1],o=(0,n.o5)(r.split(","),6),l=(o[0],o[1],o[2],o[3],o[4]);o[5];return parseFloat(l)},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.left,t),e.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.scrollToImpl=function(t){var e=this.getScrollPosition(),r=this.clampScrollValue(t),n=r-e;this.animate({finalScrollPosition:r,scrollDelta:n})},e.prototype.scrollToImplRTL=function(t){var e=this.getRTLScroller().scrollToRTL(t);this.animate(e)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var e=this.getScrollPosition(),r=t+e,n=this.clampScrollValue(r);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.animate=function(t){var r=this;0!==t.scrollDelta&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame((function(){r.adapter.addClass(e.cssClasses.ANIMATING),r.adapter.setScrollContentStyleProperty("transform","none")})),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),e=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var e=this.adapter.getScrollAreaScrollLeft();if(e<0)return this.adapter.setScrollAreaScrollLeft(t),new c(this.adapter);var r=this.adapter.computeScrollAreaClientRect(),n=this.adapter.computeScrollContentClientRect(),o=Math.round(n.right-r.right);return this.adapter.setScrollAreaScrollLeft(t),o===e?new s(this.adapter):new a(this.adapter)},e.prototype.isRTL=function(){return"rtl"===this.adapter.getScrollContentStyleValue("direction")},e}(o.E)},6304:function(t,e,r){r.d(e,{I:function(){return l}});var n,o=r(19424);function l(t,e){if(void 0===e&&(e=!0),e&&"undefined"!==typeof n)return n;var r=t.createElement("div");r.classList.add(o.k.SCROLL_TEST),t.body.appendChild(r);var l=r.offsetHeight-r.clientHeight;return t.body.removeChild(r),e&&(n=l),l}},61992:function(t,e,r){r.d(e,{Av:function(){return o},GC:function(){return i},cb:function(){return l},sT:function(){return n}});const n={EVENTS:{CHANGE:"update:modelValue"}},o={ALIGN:["start","center","end"],EVENTS:{CHANGE:"update:scrollX"}},l={UNDERLINE:"underline",ICON:"icon"},i={TYPES:{text:0,iconOnly:1,textWithIcon:2},cssClasses:{active:"mdc-tab--active",icon:"mdc-tab__icon"},idPrefix:"mdc-tab-"}},20432:function(t,e,r){r.d(e,{w:function(){return n}});const n={align:{type:String,default:"start"}}}}]);