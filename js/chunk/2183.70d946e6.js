"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[2183],{2183:function(e,s,n){n.r(s);const l=n(14560).Z;s.default=l},14560:function(e,s,n){n.d(s,{Z:function(){return l.Z}});var l=n(13271)},13271:function(e,s,n){var l=n(73114),a=n(8228);const t=["src"],i={key:1,class:"mdc-image-list__image-aspect-container"},c=["src"],o="UiImageItem",r={cssClasses:{image:"mdc-image-list__image"}},m={name:o,customOptions:{name:o,UI_GLOBAL:a.Z,UI_IMAGE_ITEM:r}};s.Z=Object.assign(m,{props:{image:{type:[String,null],default:null},bgImage:{type:[String,null],default:null}},emits:[a.Z.EVENTS.CLICK],setup(e,s){let{emit:n}=s;const m=e,u=(0,l.getCurrentInstance)().parent,{handleClick:g}=(0,a.O)({emit:n}),C=(0,l.computed)((()=>({"background-image":`url(${m.bgImage})`})));return(0,l.onBeforeMount)((()=>{var e;null!==u&&void 0!==u&&null!==(e=u.exposed)&&void 0!==e&&e.isMasonry.value&&m.bgImage&&console.warn(`[${o}]: The 'bgImage' prop is not compatible with the masonry image list, you need to set the 'image' prop`)})),(s,n)=>((0,l.openBlock)(),(0,l.createElementBlock)("li",{class:"mdc-image-list__item",onClick:n[0]||(n[0]=function(){return(0,l.unref)(g)&&(0,l.unref)(g)(...arguments)})},[s.$parent.isMasonry?(0,l.renderSlot)(s.$slots,"image",{key:0,imageClass:r.cssClasses.image},(()=>[(0,l.createElementVNode)("img",{class:(0,l.normalizeClass)(r.cssClasses.image),src:e.image},null,10,t)])):((0,l.openBlock)(),(0,l.createElementBlock)("div",i,[(0,l.renderSlot)(s.$slots,"image",{imageClass:r.cssClasses.image},(()=>[e.bgImage?((0,l.openBlock)(),(0,l.createElementBlock)("div",{key:0,class:(0,l.normalizeClass)(r.cssClasses.image),style:(0,l.normalizeStyle)((0,l.unref)(C))},null,6)):((0,l.openBlock)(),(0,l.createElementBlock)("img",{key:1,class:(0,l.normalizeClass)(r.cssClasses.image),src:e.image},null,10,c))]))])),(0,l.renderSlot)(s.$slots,"default")]))}})},8228:function(e,s,n){n.d(s,{O:function(){return a}});const l={cssClasses:{icon:"material-icons"},EVENTS:{CLICK:"click"},getMaterialIconClass:function(){for(var e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return[l.cssClasses.icon,...s]}};function a(e){let{emit:s}=e;return{handleClick:function(e){s(l.EVENTS.CLICK,e)}}}s.Z=l}}]);