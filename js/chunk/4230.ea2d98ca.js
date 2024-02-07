"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[4230],{24230:function(e,t,l){l.r(t),l.d(t,{default:function(){return M}});var o=l(96064);const a={class:"hero-demo"},n={key:0},d={class:"hero-options"},i=(0,o.createElementVNode)("label",{for:"leading-icon"},"Leading icon",-1),c={key:1,class:"hero-option"},r=(0,o.createElementVNode)("label",{for:"default"},"Default",-1),s=(0,o.createElementVNode)("label",{for:"mini"},"Mini",-1),u={class:"demo-wrapper"},m={class:"demo"},V=(0,o.createElementVNode)("figcaption",null,"Standard",-1),f=(0,o.createElementVNode)("figcaption",null,"Mini",-1),p=(0,o.createElementVNode)("figcaption",null,[(0,o.createElementVNode)("div",null,"SVG")],-1),N=(0,o.createElementVNode)("figcaption",null,[(0,o.createElementVNode)("div",null,"SVG Mini")],-1),C={class:"demo-wrapper"},x={class:"demo"},E=(0,o.createElementVNode)("span",null,"Create",-1),h=(0,o.createElementVNode)("figcaption",null,"Extended (with icon)",-1),w=(0,o.createElementVNode)("span",null,"Create",-1),b=(0,o.createElementVNode)("figcaption",null,"Extended (followed by icon)",-1),v=(0,o.createElementVNode)("figcaption",null,"Extended (without icon)",-1),g={class:"demo-wrapper"},_={class:"fab-motion-container"},k=(0,o.createElementVNode)("div",{class:"fab-motion-container__view"},[(0,o.createElementVNode)("p",null,"View one (with FAB)")],-1),y=(0,o.createElementVNode)("p",null,"View two (without FAB)",-1),O={class:"demo-wrapper"},B={class:"demo"},z=(0,o.createElementVNode)("i",{class:"fa fa-flag fa-lg"},null,-1),T=(0,o.createElementVNode)("i",{class:"fa fa-smile-o fa-lg"},null,-1),I=(0,o.createElementVNode)("i",{class:"fa fa-camera-retro fa-lg"},null,-1),U=(0,o.createElementVNode)("i",{class:"fa fa-spinner fa-pulse fa-lg fa-fw"},null,-1);var $=l(19e3);const A=[{label:"Regular",value:0},{label:"Extended",value:1}],F=(0,o.reactive)({typeOption:0,fabOptions:{mini:0,leadingIcon:!1},exited:!1});var S={metaInfo(){return{subtitle:"Fab"}},setup(){return{balmUI:(0,$.yA)(),TypeOptions:A,...(0,o.toRefs)(F)}}};var M=(0,l(18152).c)(S,[["render",function(e,t,l,$,A,F){const S=(0,o.resolveComponent)("ui-icon"),M=(0,o.resolveComponent)("ui-fab"),G=(0,o.resolveComponent)("ui-select"),R=(0,o.resolveComponent)("ui-checkbox"),D=(0,o.resolveComponent)("ui-form-field"),H=(0,o.resolveComponent)("ui-radio"),L=(0,o.resolveComponent)("svg-logo"),j=(0,o.resolveComponent)("ui-snippet"),q=(0,o.resolveComponent)("ui-button"),J=(0,o.resolveComponent)("docs-page");return(0,o.openBlock)(),(0,o.createBlock)(J,{name:"fab","demo-count":"4"},{hero:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",a,[(0,o.createVNode)(M,{type:e.typeOption,mini:!!e.fabOptions.mini},(0,o.createSlots)({default:(0,o.withCtx)((()=>[e.typeOption?((0,o.openBlock)(),(0,o.createElementBlock)("span",n,"Button")):((0,o.openBlock)(),(0,o.createBlock)(S,{key:1},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("add")])),_:1}))])),_:2},[e.typeOption&&e.fabOptions.leadingIcon?{name:"before",fn:(0,o.withCtx)((e=>{let{iconClass:t}=e;return[(0,o.createVNode)(S,{class:(0,o.normalizeClass)(t)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("add")])),_:2},1032,["class"])]})),key:"0"}:void 0]),1032,["type","mini"])]),(0,o.createElementVNode)("div",d,[(0,o.createVNode)(G,{modelValue:e.typeOption,"onUpdate:modelValue":t[0]||(t[0]=t=>e.typeOption=t),class:"hero-option",options:$.TypeOptions},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Type ")])),_:1},8,["modelValue","options"]),e.typeOption?((0,o.openBlock)(),(0,o.createBlock)(D,{key:0,class:"hero-option"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(R,{modelValue:e.fabOptions.leadingIcon,"onUpdate:modelValue":t[1]||(t[1]=t=>e.fabOptions.leadingIcon=t),"input-id":"leading-icon",value:1},null,8,["modelValue"]),i])),_:1})):((0,o.openBlock)(),(0,o.createElementBlock)("div",c,[(0,o.createVNode)(D,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(H,{modelValue:e.fabOptions.mini,"onUpdate:modelValue":t[2]||(t[2]=t=>e.fabOptions.mini=t),"input-id":"default",value:0},null,8,["modelValue"]),r])),_:1}),(0,o.createVNode)(D,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(H,{modelValue:e.fabOptions.mini,"onUpdate:modelValue":t[3]||(t[3]=t=>e.fabOptions.mini=t),"input-id":"mini",value:1},null,8,["modelValue"]),s])),_:1})]))])])),default:(0,o.withCtx)((()=>[(0,o.createVNode)(M,{class:"demo-fixed-fab",icon:"mode_edit"}),(0,o.createElementVNode)("section",u,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.1 Regular FAB",2),(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("figure",null,[(0,o.createVNode)(M,{icon:"favorite_border"}),V]),(0,o.createElementVNode)("figure",null,[(0,o.createVNode)(M,{icon:"favorite_border",mini:""}),f]),(0,o.createElementVNode)("figure",null,[(0,o.createVNode)(M,null,{default:(0,o.withCtx)((e=>{let{iconClass:t}=e;return[(0,o.createVNode)(L,{class:(0,o.normalizeClass)(t)},null,8,["class"])]})),_:1}),p]),(0,o.createElementVNode)("figure",null,[(0,o.createVNode)(M,{mini:""},{default:(0,o.withCtx)((e=>{let{iconClass:t}=e;return[(0,o.createVNode)(L,{class:(0,o.normalizeClass)(t)},null,8,["class"])]})),_:1}),N])]),(0,o.createVNode)(j,{code:e.$store.demos[1]},null,8,["code"])]),(0,o.createElementVNode)("section",C,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.2 Extended FAB",2),(0,o.createElementVNode)("div",x,[(0,o.createElementVNode)("figure",null,[(0,o.createVNode)(M,{extended:""},{before:(0,o.withCtx)((e=>{let{iconClass:t}=e;return[(0,o.createVNode)(S,{class:(0,o.normalizeClass)(t)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("add")])),_:2},1032,["class"])]})),default:(0,o.withCtx)((()=>[E])),_:1}),h]),(0,o.createElementVNode)("figure",null,[(0,o.createVNode)(M,{extended:""},{after:(0,o.withCtx)((e=>{let{iconClass:t}=e;return[(0,o.createVNode)(S,{class:(0,o.normalizeClass)(t)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("add")])),_:2},1032,["class"])]})),default:(0,o.withCtx)((()=>[w])),_:1}),b]),(0,o.createElementVNode)("figure",null,[(0,o.createVNode)(M,{extended:""},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("Create")])),_:1}),v])]),(0,o.createVNode)(j,{code:e.$store.demos[2]},null,8,["code"])]),(0,o.createElementVNode)("section",g,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.3 Example of Enter and Exit Motions",2),(0,o.createElementVNode)("div",_,[k,(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["fab-motion-container__view",{"fab-motion-container__view--exited":!e.exited}])},[y,(0,o.createElementVNode)("p",null,[(0,o.createVNode)(q,{id:"enter-exit-back",disabled:!e.exited,onClick:t[4]||(t[4]=e=>$.balmUI.onHide("exited"))},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Go back ")])),_:1},8,["disabled"])])],2),(0,o.createVNode)(M,{id:"enter-exit-add",class:"demo-absolute-fab",icon:"add",exited:e.exited,onClick:t[5]||(t[5]=e=>$.balmUI.onShow("exited"))},null,8,["exited"])]),(0,o.createVNode)(j,{code:e.$store.demos[3]},null,8,["code"])]),(0,o.createElementVNode)("section",O,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.4 Custom FABs (Using font awesome)",2),(0,o.createElementVNode)("div",B,[(0,o.createVNode)(M,null,{default:(0,o.withCtx)((()=>[z])),_:1}),(0,o.createVNode)(M,null,{default:(0,o.withCtx)((()=>[T])),_:1}),(0,o.createVNode)(M,null,{default:(0,o.withCtx)((()=>[I])),_:1}),(0,o.createVNode)(M,null,{default:(0,o.withCtx)((()=>[U])),_:1})]),(0,o.createVNode)(j,{code:e.$store.demos[4]},null,8,["code"])])])),_:1})}]])}}]);