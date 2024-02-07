"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[2048,1388],{91388:function(e,l,t){t.r(l),t.d(l,{default:function(){return c}});var o=t(96064);const a=["for"],d=["for"],n=["for"];var i={model:{prop:"controls",event:"change"},props:{idPrefix:{type:String,default:"default"},modelValue:{type:Object,default(){return{}}}},emits:["update:modelValue"],data(){return{controls:this.modelValue}},watch:{modelValue(e){this.controls=e,this.$emit("update:modelValue",e)}}};var c=(0,t(18152).c)(i,[["render",function(e,l,t,i,c,s){const r=(0,o.resolveComponent)("ui-checkbox"),u=(0,o.resolveComponent)("ui-form-field"),m=(0,o.resolveComponent)("ui-form");return(0,o.openBlock)(),(0,o.createBlock)(m,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(u,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(r,{modelValue:c.controls.rtl,"onUpdate:modelValue":l[0]||(l[0]=e=>c.controls.rtl=e),"input-id":`${t.idPrefix}-rtl`},null,8,["modelValue","input-id"]),(0,o.createElementVNode)("label",{for:`${t.idPrefix}-rtl`},"RTL",8,a)])),_:1}),(0,o.createVNode)(u,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(r,{modelValue:c.controls.customColor,"onUpdate:modelValue":l[1]||(l[1]=e=>c.controls.customColor=e),"input-id":`${t.idPrefix}-alternate-colors`},null,8,["modelValue","input-id"]),(0,o.createElementVNode)("label",{for:`${t.idPrefix}-alternate-colors`},"Alternate Colors",8,d)])),_:1}),(0,o.createVNode)(u,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(r,{modelValue:c.controls.disabled,"onUpdate:modelValue":l[2]||(l[2]=e=>c.controls.disabled=e),"input-id":`${t.idPrefix}-disabled`},null,8,["modelValue","input-id"]),(0,o.createElementVNode)("label",{for:`${t.idPrefix}-disabled`},"Disabled",8,n)])),_:1})])),_:1})}]])},72048:function(e,l,t){t.r(l),t.d(l,{default:function(){return F}});var o=t(96064);const a={class:"hero-demo"},d={key:0},n={key:1},i={class:"hero-options"},c=(0,o.createElementVNode)("label",{for:"with-leading-icon"},"Leading Icon",-1),s=(0,o.createElementVNode)("label",{for:"with-helper-text"},"Helper Text",-1),r=(0,o.createElementVNode)("label",{for:"with-error-text"},"Error Text",-1),u={class:"demo-wrapper"},m={class:"demo"},p=["dir"],V={id:"currently-selected"},v={class:"button-container"},h={class:"demo-wrapper"},f={class:"demo"},b=["dir"],N={id:"currently-selected-outline"},C={class:"demo-wrapper"},x={class:"demo"},w={class:"demo-wrapper"},g={class:"demo"};var y=t(19e3),E=t(91388),k=[{label:"Bread, Cereal, Rice, and Pasta",value:"grains"},{label:"Vegetables",value:"vegetables",disabled:!0},{label:"Fruit",value:"fruit"},{label:"Milk, Yogurt, and Cheese",value:"dairy"},{label:"Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts",value:"meat"},{label:"Fats, Oils, and Sweets",value:"fats"}],O=[{value:1,label:"Beijing"},{value:2,label:"Shanghai"},{value:3,label:"Guangdong"}],_=[[],[{value:11,label:"Haidian"},{value:12,label:"Chao Yang"}],[{value:21,label:"Huangpu"},{value:22,label:"Xuhui"}],[{value:31,label:"Guangzhou"}]];const S=[{label:"Filled",value:0},{label:"Outlined",value:1}],T=[{label:"Leading icon",value:1},{label:"Helper text",value:2}],U=[{label:"Apple",value:11},{label:"Orange",value:22},{label:"Banana",value:33}],$=[{label:"Fruit Roll Ups",value:"fruit-roll-ups"},{label:"Candy (cotton)",value:"cotton-candy"},{label:"Vegetables",value:"vegetables"},{label:"Noodles",value:"noodles"}],P=[{label:"Meats",items:[{label:"Steak",value:"steak"},{label:"Hamburger",value:"hamburger"}]},{label:"Vegetables",items:[{label:"Beet",value:"beet"},{label:"Carrot",value:"carrot"}]}],D=(0,o.reactive)({typeOption:0,selectOption:[],selected:"",selected1:{value:"",index:-1},selected2:{value:"",index:-1},selected3:"fruit-roll-ups",selected4:"steak",options1:[],controls:{rtl:!1,customColor:!1,disabled:!1},formData:{province:"",city:""},provinces:[],cities:[]});var B={metaInfo(){return{subtitle:"Select"}},components:{UiSelectControls:E.default},setup(){const e=(0,y.yA)();return(0,o.onMounted)((()=>{setTimeout((()=>{D.options1=k,D.provinces=O}),1e3)})),{balmUI:e,TypeOptions:S,SelectOptions:T,options:U,options2:$,options3:P,...(0,o.toRefs)(D)}},methods:{onSelected(e,l){D[`selected${l}`].value=e.value,D[`selected${l}`].index=e.index},onClick(){this.balmUI.onChange("selected1.value","meat"),this.balmUI.onChange("selected1.index",4)},onChangeProvince(e){D.formData.province=e;let l=e||-1;D.cities=l>-1?_[l]:[],D.formData.city=D.cities.length?D.cities[0].value:""}}};var F=(0,t(18152).c)(B,[["render",function(e,l,t,y,E,k){const O=(0,o.resolveComponent)("ui-select-icon"),_=(0,o.resolveComponent)("ui-icon"),S=(0,o.resolveComponent)("ui-select"),T=(0,o.resolveComponent)("ui-select-helper"),U=(0,o.resolveComponent)("ui-checkbox"),$=(0,o.resolveComponent)("ui-form-field"),P=(0,o.resolveComponent)("ui-form"),D=(0,o.resolveComponent)("ui-select-controls"),B=(0,o.resolveComponent)("ui-button"),F=(0,o.resolveComponent)("ui-snippet"),z=(0,o.resolveComponent)("docs-page");return(0,o.openBlock)(),(0,o.createBlock)(z,{name:"select","demo-count":"4",apis:["select","select-helper","select-icon"]},{hero:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",a,[0===e.typeOption?((0,o.openBlock)(),(0,o.createElementBlock)("div",d,[(0,o.createVNode)(S,{id:"my-select",modelValue:e.selected,"onUpdate:modelValue":l[0]||(l[0]=l=>e.selected=l),options:y.options,"with-leading-icon":e.selectOption.includes(1),"helper-text-id":"my-select-helper"},(0,o.createSlots)({"dropdown-icon":(0,o.withCtx)((e=>{let{iconClass:l}=e;return[(0,o.createVNode)(_,{class:(0,o.normalizeClass)(l)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("keyboard_arrow_down")])),_:2},1032,["class"])]})),default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Pick a fruit ")])),_:2},[e.selectOption.includes(1)?{name:"icon",fn:(0,o.withCtx)((()=>[(0,o.createVNode)(O,null,{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("face")])),_:1})])),key:"0"}:void 0]),1032,["modelValue","options","with-leading-icon"]),(0,o.createVNode)(T,{id:"my-select-helper",visible:e.selectOption.includes(2),"valid-msg":e.selectOption.includes(3)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Helper text ")])),_:1},8,["visible","valid-msg"])])):(0,o.createCommentVNode)("",!0),1===e.typeOption?((0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createVNode)(S,{id:"my-select-outlined",modelValue:e.selected,"onUpdate:modelValue":l[1]||(l[1]=l=>e.selected=l),outlined:"",options:y.options,"with-leading-icon":e.selectOption.includes(1),"helper-text-id":"my-select-outlined-helper"},(0,o.createSlots)({default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Pick a fruit ")])),_:2},[e.selectOption.includes(1)?{name:"icon",fn:(0,o.withCtx)((()=>[(0,o.createVNode)(O,null,{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("face")])),_:1})])),key:"0"}:void 0]),1032,["modelValue","options","with-leading-icon"]),(0,o.createVNode)(T,{id:"my-select-outlined-helper",visible:e.selectOption.includes(2),"valid-msg":e.selectOption.includes(3)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Helper text ")])),_:1},8,["visible","valid-msg"])])):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",i,[(0,o.createVNode)(S,{modelValue:e.typeOption,"onUpdate:modelValue":l[2]||(l[2]=l=>e.typeOption=l),class:"hero-option",options:y.TypeOptions},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Type ")])),_:1},8,["modelValue","options"]),(0,o.createVNode)(P,{class:"hero-option"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)($,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(U,{modelValue:e.selectOption,"onUpdate:modelValue":l[3]||(l[3]=l=>e.selectOption=l),"input-id":"with-leading-icon",value:1},null,8,["modelValue"]),c])),_:1}),(0,o.createVNode)($,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(U,{modelValue:e.selectOption,"onUpdate:modelValue":l[4]||(l[4]=l=>e.selectOption=l),"input-id":"with-helper-text",value:2},null,8,["modelValue"]),s])),_:1}),(0,o.createVNode)($,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(U,{modelValue:e.selectOption,"onUpdate:modelValue":l[5]||(l[5]=l=>e.selectOption=l),"input-id":"with-error-text",value:3},null,8,["modelValue"]),r])),_:1})])),_:1})])])),default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("section",u,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.1 Fully-Featured JS Component",2),(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("div",{class:"example",dir:e.controls.rtl?"rtl":null},[(0,o.createVNode)(S,{id:"full-func-js-select",modelValue:e.selected1.value,"onUpdate:modelValue":l[6]||(l[6]=l=>e.selected1.value=l),options:e.options1,class:(0,o.normalizeClass)({"demo-select-custom-colors":e.controls.customColor}),disabled:e.controls.disabled,onSelected:l[7]||(l[7]=e=>k.onSelected(e,1))},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Food Group ")])),_:1},8,["modelValue","options","class","disabled"])],8,p),(0,o.createElementVNode)("p",null,[(0,o.createTextVNode)(" Currently selected: "),(0,o.createElementVNode)("span",V,(0,o.toDisplayString)(e.selected1.value?`${e.selected1.value} at index ${e.selected1.index}`:"(none)"),1)]),(0,o.createVNode)(D,{modelValue:e.controls,"onUpdate:modelValue":l[8]||(l[8]=l=>e.controls=l)},null,8,["modelValue"]),(0,o.createElementVNode)("div",v,[(0,o.createVNode)(B,{id:"set-value-meat-button",raised:"",onClick:k.onClick},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("Set Value to Meat")])),_:1},8,["onClick"])])]),(0,o.createVNode)(F,{code:e.$store.demos[1]},null,8,["code"])]),(0,o.createElementVNode)("section",h,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.2 Outlined Select",2),(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("div",{class:"example",dir:e.controls.rtl?"rtl":null},[(0,o.createVNode)(S,{id:"outlined-select",modelValue:e.selected1.value,"onUpdate:modelValue":l[9]||(l[9]=l=>e.selected1.value=l),outlined:"",options:e.options1,class:(0,o.normalizeClass)({"demo-select-custom-colors":e.controls.customColor}),disabled:e.controls.disabled,onSelected:l[10]||(l[10]=e=>k.onSelected(e,1))},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Food Group ")])),_:1},8,["modelValue","options","class","disabled"])],8,b),(0,o.createElementVNode)("p",null,[(0,o.createTextVNode)(" Currently selected: "),(0,o.createElementVNode)("span",N,(0,o.toDisplayString)(e.selected1.value?`${e.selected1.value} at index ${e.selected1.index}`:"(none)"),1)]),(0,o.createVNode)(D,{modelValue:e.controls,"onUpdate:modelValue":l[11]||(l[11]=l=>e.controls=l),"id-prefix":"outlined"},null,8,["modelValue"])]),(0,o.createVNode)(F,{code:e.$store.demos[2]},null,8,["code"])]),(0,o.createElementVNode)("section",C,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.3 Pre-selected option via HTML",2),(0,o.createElementVNode)("div",x,[(0,o.createVNode)(S,{id:"select-preselected",modelValue:e.selected3,"onUpdate:modelValue":l[12]||(l[12]=l=>e.selected3=l),options:y.options2},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Food Group ")])),_:1},8,["modelValue","options"])]),(0,o.createVNode)(F,{code:e.$store.demos[3]},null,8,["code"])]),(0,o.createElementVNode)("section",w,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.4 Custom Select",2),(0,o.createElementVNode)("div",g,[(0,o.createVNode)(S,{modelValue:e.formData.province,"onUpdate:modelValue":[l[13]||(l[13]=l=>e.formData.province=l),k.onChangeProvince],options:e.provinces,"default-label":"Province"},null,8,["modelValue","options","onUpdate:modelValue"]),(0,o.createVNode)(S,{modelValue:e.formData.city,"onUpdate:modelValue":l[14]||(l[14]=l=>e.formData.city=l),options:e.cities,"default-label":"City"},null,8,["modelValue","options"]),(0,o.createElementVNode)("p",null,"Province: "+(0,o.toDisplayString)(e.formData.province)+" - City: "+(0,o.toDisplayString)(e.formData.city),1)]),(0,o.createVNode)(F,{code:e.$store.demos[4]},null,8,["code"])])])),_:1})}]])}}]);