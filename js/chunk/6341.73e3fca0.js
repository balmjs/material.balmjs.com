"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[6341],{6341:function(e,l,t){t.r(l),t.d(l,{default:function(){return u}});var o=t(73114);const r=["for"],d=["for"],a=["for"];var n={model:{prop:"controls",event:"change"},props:{idPrefix:{type:String,default:"default"},modelValue:{type:Object,default(){return{}}}},emits:["update:modelValue"],data(){return{controls:this.modelValue}},watch:{modelValue(e){this.controls=e,this.$emit("update:modelValue",e)}}};var u=(0,t(83744).Z)(n,[["render",function(e,l,t,n,u,i){const c=(0,o.resolveComponent)("ui-checkbox"),s=(0,o.resolveComponent)("ui-form-field"),f=(0,o.resolveComponent)("ui-form");return(0,o.openBlock)(),(0,o.createBlock)(f,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(s,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{modelValue:u.controls.rtl,"onUpdate:modelValue":l[0]||(l[0]=e=>u.controls.rtl=e),"input-id":`${t.idPrefix}-rtl`},null,8,["modelValue","input-id"]),(0,o.createElementVNode)("label",{for:`${t.idPrefix}-rtl`},"RTL",8,r)])),_:1}),(0,o.createVNode)(s,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{modelValue:u.controls.customColor,"onUpdate:modelValue":l[1]||(l[1]=e=>u.controls.customColor=e),"input-id":`${t.idPrefix}-alternate-colors`},null,8,["modelValue","input-id"]),(0,o.createElementVNode)("label",{for:`${t.idPrefix}-alternate-colors`},"Alternate Colors",8,d)])),_:1}),(0,o.createVNode)(s,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{modelValue:u.controls.disabled,"onUpdate:modelValue":l[2]||(l[2]=e=>u.controls.disabled=e),"input-id":`${t.idPrefix}-disabled`},null,8,["modelValue","input-id"]),(0,o.createElementVNode)("label",{for:`${t.idPrefix}-disabled`},"Disabled",8,a)])),_:1})])),_:1})}]])}}]);