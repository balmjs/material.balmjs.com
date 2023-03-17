"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[3500],{33500:function(e,t,o){o.r(t),o.d(t,{default:function(){return x}});var a=o(73114);const c={class:"demo-wrapper"},l={class:"demo"},n={class:"demo"},r={class:"demo"},i={class:"demo"},s={class:"example"},d={class:"example"},m={class:"example"};var u={props:{code:{type:Array,default(){return[]}}},data(){return{tabs:[{text:"Favorites",icon:"favorite",indicator:"crop_square"},{text:"Recents",icon:"phone",indicator:"panorama_fish_eye"},{text:"Nearby",icon:"near_me",indicator:"change_history"}]}}};const p=(0,o(83744).Z)(u,[["render",function(e,t,o,u,p,x){const k=(0,a.resolveComponent)("ui-tab"),h=(0,a.resolveComponent)("ui-tab-bar"),N=(0,a.resolveComponent)("ui-snippet"),V=(0,a.resolveComponent)("ui-tab-indicator");return(0,a.openBlock)(),(0,a.createElementBlock)("section",c,[(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("headline6"))},"1.1 Tabs",2),(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("subtitle1"))},"Text Label",2),(0,a.createElementVNode)("div",l,[(0,a.createVNode)(h,null,{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(p.tabs,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(k,{key:t},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.text),1)])),_:2},1024)))),128))])),_:1})]),(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("subtitle1"))},"Icon",2),(0,a.createElementVNode)("div",n,[(0,a.createVNode)(h,null,{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(p.tabs,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(k,{key:t,type:"iconOnly",icon:e.icon},null,8,["icon"])))),128))])),_:1})]),(0,a.createVNode)(N,{code:e.$store.demos[1]},null,8,["code"]),(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("subtitle1"))},"Text Label and Icon",2),(0,a.createElementVNode)("div",r,[(0,a.createVNode)(h,{type:"textWithIcon"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(p.tabs,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(k,{key:t,type:"textWithIcon",icon:e.icon},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.text),1)])),_:2},1032,["icon"])))),128))])),_:1})]),(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("subtitle1"))},"Stacked Text Label and Icon",2),(0,a.createElementVNode)("div",i,[(0,a.createVNode)(h,{type:"textWithIcon"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(p.tabs,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(k,{key:t,type:"textWithIcon",icon:e.icon,stacked:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.text),1)])),_:2},1032,["icon"])))),128))])),_:1})]),(0,a.createVNode)(N,{code:e.$store.demos[2]},null,8,["code"]),(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("subtitle1"))},"Text Label Width-Matching Indicator",2),(0,a.createElementVNode)("div",s,[(0,a.createVNode)(h,null,{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(p.tabs,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(k,{key:t,"content-indicator":""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.text),1)])),_:2},1024)))),128))])),_:1})]),(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("subtitle1"))},"Text Label with Icon Indicator",2),(0,a.createElementVNode)("div",d,[(0,a.createVNode)(h,null,{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(p.tabs,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(k,{key:t},{indicator:(0,a.withCtx)((()=>[(0,a.createVNode)(V,{type:"icon"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.indicator),1)])),_:2},1024)])),default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.text)+" ",1)])),_:2},1024)))),128))])),_:1})]),(0,a.createVNode)(N,{code:e.$store.demos[3]},null,8,["code"]),(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("subtitle1"))},"Customization",2),(0,a.createElementVNode)("div",m,[(0,a.createVNode)(h,{class:"custom-demo"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(p.tabs,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)(k,{key:t,class:"demo-tab custom-tab",type:"textWithIcon",icon:e.icon,stacked:"","content-indicator":""},{indicator:(0,a.withCtx)((()=>[(0,a.createVNode)(V,{class:"custom-tab-indicator"})])),default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.text)+" ",1)])),_:2},1032,["icon"])))),128))])),_:1})]),(0,a.createVNode)(N,{code:e.$store.demos[4]},null,8,["code"])])}]]);var x=p}}]);