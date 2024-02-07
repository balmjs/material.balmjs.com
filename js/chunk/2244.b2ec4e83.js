"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[2244],{92244:function(e,l,t){t.r(l),t.d(l,{default:function(){return x}});var o=t(96064);const a={style:"padding: 10px"},n=(0,o.createElementVNode)("label",null,"Textfield",-1),r=(0,o.createElementVNode)("label",null,"Autocomplete",-1),u=(0,o.createElementVNode)("label",null,"Editor",-1),i=(0,o.createElementVNode)("label",null,"Select",-1),d=(0,o.createElementVNode)("label",null,"Checkbox",-1),c=["for"],m=(0,o.createElementVNode)("label",null,"Radio",-1),s=["for"],p=(0,o.createElementVNode)("label",null,"Segmented",-1),V=(0,o.createElementVNode)("label",null,"Chips",-1),C=(0,o.createElementVNode)("label",null,"File",-1),N=(0,o.createElementVNode)("label",null,"Datepicker",-1),f=(0,o.createElementVNode)("label",null,"Rangepicker",-1),v=(0,o.createElementVNode)("label",null,"Switch",-1),h=(0,o.createElementVNode)("label",null,"Slider",-1),b=!1;var x={__name:"composition",setup(e){const l=(0,o.ref)(null),t=["ActionScript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang","Fortran","Groovy","Haskell","Java","JavaScript","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"],x=[{label:"A",value:1},{label:"B",value:2},{label:"C",value:3},{label:"D",value:4}],w=[{icon:"favorite"},{text:"Sample Text"},{icon:"favorite",text:"Sample Text"}],k=(0,o.reactive)({value:"",value2:"",keywords:"",open:!1,radioValue:0}),{value:E,value2:_,keywords:g,open:S,radioValue:y}=(0,o.toRefs)(k);return(0,o.onMounted)((()=>{console.log(l.value),setTimeout((()=>{k.open=!0}))})),(e,k)=>{const E=(0,o.resolveComponent)("ui-textfield"),_=(0,o.resolveComponent)("ui-form-field"),S=(0,o.resolveComponent)("ui-autocomplete"),B=(0,o.resolveComponent)("ui-editor"),A=(0,o.resolveComponent)("ui-select"),F=(0,o.resolveComponent)("ui-checkbox"),P=(0,o.resolveComponent)("ui-radio"),R=(0,o.resolveComponent)("ui-segmented-buttons"),$=(0,o.resolveComponent)("ui-chips"),D=(0,o.resolveComponent)("ui-file"),I=(0,o.resolveComponent)("ui-datepicker"),L=(0,o.resolveComponent)("ui-rangepicker"),T=(0,o.resolveComponent)("ui-switch"),z=(0,o.resolveComponent)("ui-slider"),H=(0,o.resolveComponent)("ui-form");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("div",(0,o.mergeProps)({ref_key:"root",ref:l},e.$attrs),"Composition API",16),(0,o.createElementVNode)("div",a,[(0,o.createVNode)(H,{type:"|","item-margin-bottom":"20"},{default:(0,o.withCtx)((e=>{let{itemClass:l,subitemClass:a,actionClass:H}=e;return[(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[n,(0,o.createVNode)(E,{fullwidth:b})])),_:1}),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[r,(0,o.createVNode)(S,{modelValue:(0,o.unref)(g),"onUpdate:modelValue":k[0]||(k[0]=e=>(0,o.isRef)(g)?g.value=e:null),source:t,fullwidth:b},null,8,["modelValue"])])),_:1}),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[u,(0,o.createVNode)(B,{fullwidth:b})])),_:1}),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[i,(0,o.createVNode)(A,{options:x,fullwidth:b})])),_:1}),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[d,(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(a)},[((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(4,(e=>(0,o.createVNode)(_,{key:e},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(F,{"input-id":`checkbox-${e}`},null,8,["input-id"]),(0,o.createElementVNode)("label",{for:`checkbox-${e}`},"Item"+(0,o.toDisplayString)(e),9,c)])),_:2},1024))),64))],2)])),_:2},1024),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[m,(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(a)},[((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(4,(e=>(0,o.createVNode)(_,{key:e},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(P,{modelValue:(0,o.unref)(y),"onUpdate:modelValue":k[1]||(k[1]=e=>(0,o.isRef)(y)?y.value=e:null),"input-id":`radio-${e}`,value:e},null,8,["modelValue","input-id","value"]),(0,o.createElementVNode)("label",{for:`radio-${e}`},"Item"+(0,o.toDisplayString)(e),9,s)])),_:2},1024))),64))],2)])),_:2},1024),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[p,(0,o.createVNode)(R,{items:w})])),_:1}),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[V,(0,o.createVNode)($,{type:"choice",options:x})])),_:1}),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[C,(0,o.createVNode)(D)])),_:1}),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[N,(0,o.createVNode)(I)])),_:1}),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[f,(0,o.createVNode)(L)])),_:1}),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[v,(0,o.createVNode)(T)])),_:1}),(0,o.createVNode)(_,null,{default:(0,o.withCtx)((()=>[h,(0,o.createVNode)(z)])),_:1})]})),_:1})])],64)}}}}}]);