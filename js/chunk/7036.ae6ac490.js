"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[7036],{37036:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var s=r(73114);const o={class:"demo-wrapper"},n={class:"demo"},a={class:"demo-wrapper"},l={class:"demo"};var i={metaInfo(){return{subtitle:"Spinner"}},data(){return{progress:0,timer:null}},mounted(){this.setProgress()},methods:{setProgress(){this.timer=setInterval((()=>{1===this.progress?(clearInterval(this.timer),this.progress=0,this.setProgress()):(this.progress+=.1,this.progress=+this.progress.toFixed(2))}),1e3)}}};var c=(0,r(83744).Z)(i,[["render",function(e,t,r,i,c,d){const p=(0,s.resolveComponent)("ui-spinner"),m=(0,s.resolveComponent)("ui-snippet"),u=(0,s.resolveComponent)("docs-page");return(0,s.openBlock)(),(0,s.createBlock)(u,{name:"spinner","demo-count":"2"},{hero:(0,s.withCtx)((()=>[(0,s.createVNode)(p,{active:"","four-colored":""})])),default:(0,s.withCtx)((()=>[(0,s.createElementVNode)("section",o,[(0,s.createElementVNode)("h6",{class:(0,s.normalizeClass)(e.$tt("headline6"))},"1.1 Indeterminate",2),(0,s.createElementVNode)("div",n,[(0,s.createVNode)(p,{active:""})]),(0,s.createVNode)(m,{code:e.$store.demos[1]},null,8,["code"])]),(0,s.createElementVNode)("section",a,[(0,s.createElementVNode)("h6",{class:(0,s.normalizeClass)(e.$tt("headline6"))},"1.2 Determinate",2),(0,s.createElementVNode)("div",l,[(0,s.createVNode)(p,{progress:c.progress},{default:(0,s.withCtx)((()=>[(0,s.createTextVNode)((0,s.toDisplayString)(c.progress),1)])),_:1},8,["progress"]),(0,s.createElementVNode)("p",null,"Progress: "+(0,s.toDisplayString)(c.progress),1)]),(0,s.createVNode)(m,{code:e.$store.demos[2]},null,8,["code"])])])),_:1})}]])}}]);