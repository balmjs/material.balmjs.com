"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[384],{67287:function(e,n,t){const o=t(7514).Z;n.Z=o},7514:function(e,n,t){t.d(n,{Z:function(){return o.Z}});var o=t(57650)},57650:function(e,n,t){var o=t(73114),c=t(74269),s=t(8228),a=t(51493);const i={class:"mdc-dialog__container"},l={class:"mdc-dialog__surface"},r={key:0,class:"mdc-dialog__title"},u=["innerHTML"],d={class:"mdc-alert-dialog__message"},p={class:"mdc-dialog__actions"},m=(0,o.createElementVNode)("div",{class:"mdc-dialog__scrim"},null,-1),f={name:"MdcDialog",customOptions:{UI_GLOBAL:s.Z,UI_DIALOG:a.g}};n.Z=Object.assign(f,{props:{open:{type:Boolean,default:!1},options:{type:Object,default:()=>({})}},setup(e){const n=e,t=(0,o.reactive)({opening:!0,opened:!1,state:"",stateOutlined:!1}),{stateClassName:f,materialIcon:g}=(0,c.g)(t),b=(0,o.computed)((()=>["mdc-dialog",n.options.className,{"mdc-dialog--opening":t.opening,"mdc-dialog--open":t.opened}]));return(0,o.watch)((()=>n.open),(e=>{e?setTimeout((()=>{t.opened=!0,setTimeout((()=>{t.opening=!1}),150)}),150):(t.opening=!0,t.opened=!1)})),(0,o.onBeforeMount)((()=>{n.options.state&&(t.state=n.options.state,t.stateOutlined=n.options.stateOutlined)})),(n,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{class:(0,o.normalizeClass)((0,o.unref)(b))},[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",l,[e.options.title?((0,o.openBlock)(),(0,o.createElementBlock)("h2",r,(0,o.toDisplayString)(e.options.title),1)):(0,o.createCommentVNode)("",!0),e.options.raw?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:1,class:(0,o.normalizeClass)((0,o.unref)(a.g).cssClasses.content),innerHTML:e.options.message},null,10,u)):((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:2,class:(0,o.normalizeClass)((0,o.unref)(a.g).cssClasses.content)},[(0,o.unref)(g)?((0,o.openBlock)(),(0,o.createElementBlock)("i",{key:0,class:(0,o.normalizeClass)((0,o.unref)(s.Z).getMaterialIconClass([(0,o.unref)(f),"mdc-alert-dialog__icon"]))},(0,o.toDisplayString)((0,o.unref)(g)),3)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("span",d,(0,o.toDisplayString)(e.options.message),1)],2)),(0,o.createElementVNode)("footer",p,[(0,o.renderSlot)(n.$slots,"default")])])]),m],2))}})},51493:function(e,n,t){t.d(n,{g:function(){return o}});const o={contentComponentName:"UiDialogContent",cssClasses:{content:"mdc-dialog__content"},EVENTS:{CHANGE:"update:modelValue",CLOSE:"close",CONFIRM:"confirm"}}},8228:function(e,n,t){t.d(n,{O:function(){return c}});const o={cssClasses:{icon:"material-icons"},EVENTS:{CLICK:"click"},getMaterialIconClass:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return[o.cssClasses.icon,...n]}};function c(e){let{emit:n}=e;return{handleClick:function(e){n(o.EVENTS.CLICK,e)}}}n.Z=o},15846:function(e,n,t){var o=t(73114);const c="undefined"===typeof window?o.createSSRApp:o.createApp;n.Z=c},91139:function(e,n,t){t.d(n,{N:function(){return s},R:function(){return a}});var o=t(73114),c=t(57362);const s="balmui-alert-dialog";function a(e){let{app:n,el:t,constants:a,options:i,done:l,callback:r}=e;const u=(0,o.reactive)({open:!1,options:i});return(0,o.onMounted)((()=>(0,o.nextTick)((()=>u.open=!0)))),(0,o.onBeforeUnmount)((()=>(0,c.gw)(t))),{...(0,o.toRefs)(u),handleClick:function(e){u.open=!1,n.unmount(`#${a.id}`),"function"===typeof u.options.callback?u.options.callback(e):a.id===s?l():r(e)}}}},74269:function(e,n,t){t.d(n,{g:function(){return a}});var o=t(73114);const c=["success","info","warn","warning","error","help"],s={defaults:{success:"check_circle",info:"error",error:"cancel",help:"help"},outlined:{success:"check_circle_outline",info:"error_outline",error:"highlight_off",help:"help_outline"}};function a(e){const n=(0,o.computed)((()=>{let n=!1;if(c.includes(e.state))switch(e.state){case"success":n="success";break;case"info":case"help":n="info";break;case"warn":case"warning":n="warning";break;case"error":n="error"}return n})),t=(0,o.computed)((()=>{let t="";return n.value&&(t=`md-${n.value}-icon`,e.stateOutlined&&(t+="--outlined")),t})),a=(0,o.computed)((()=>{let n=!1;if(c.includes(e.state)){const t=e.stateOutlined?"outlined":"defaults";n=["info","warn","warning"].includes(e.state)?s[t].info:s[t][e.state]}return n}));return{stateType:n,stateClassName:t,materialIcon:a}}},384:function(e,n,t){t.r(n),t.d(n,{install:function(){return m},useAlert:function(){return g}});var o=t(15846),c=t(67287),s=t(91139),a=t(57362);const i={id:s.N},l={className:"",title:"",state:"",stateOutlined:!1,message:"",raw:!1,buttonText:"OK",callback:!1};let r,u=l;const d='<mdc-dialog class="mdc-alert-dialog" :open="open" :options="options">\n  <button type="button"\n    class="mdc-button mdc-button--raised mdc-alert-dialog__button"\n    data-mdc-dialog-button-default\n    @click="handleClick">\n    <span class="mdc-button__label" v-text="options.buttonText"></span>\n  </button>\n</mdc-dialog>';function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=(0,a.FW)(u,e);return new Promise((e=>{(function(e,n){const t=(0,a.f7)(i.id);return r=(0,o.Z)({name:"AlertDialog",components:{MdcDialog:c.Z},setup(){return(0,s.R)({app:r,el:t,constants:i,options:e,done:n})},template:d}),r})(n,e).mount(`#${i.id}`)}))}function m(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u=Object.assign({},l,n),e.config.globalProperties.$alert=p,e.provide("alert",p)}const f={install:m},g=()=>p;n.default=f},81780:function(e,n,t){function o(e){const n=document.createElement("div");return n.id=e,document.body.appendChild(n),n}function c(e){document.body.removeChild(e)}t.d(n,{w:function(){return o},y:function(){return c}})},57362:function(e,n,t){t.d(n,{FW:function(){return s},f7:function(){return a},gw:function(){return i}});var o=t(64160),c=t(81780);function s(e,n){let t=Object.assign({},e);return"string"===(0,o.Z)(n)?t.message=`${n}`:"object"===(0,o.Z)(n)&&(t=Object.assign({},t,n)),t}function a(e){return document.getElementById(e)||(0,c.w)(e)}function i(e){(0,c.y)(e)}},64160:function(e,n){const t=/(?:^\[object\s(.*?)\]$)/;n.Z=e=>Object.prototype.toString.call(e).replace(t,"$1").toLowerCase()}}]);