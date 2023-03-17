"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[2179],{42179:function(e,t,o){o.r(t),o.d(t,{default:function(){return E}});var a=o(73114);const l={class:"demo-wrapper"},d={class:"demo"},c={class:"demo-wrapper"},n={class:"demo"},r=(0,a.createElementVNode)("i",{class:"fa fa-calendar"},null,-1),m=(0,a.createElementVNode)("i",{class:"fa fa-close"},null,-1),s={class:"demo-wrapper"},i={class:"demo"},u={class:"demo-wrapper"},V={class:"demo"},p={class:"demo-wrapper"},g={class:"demo"},h={class:"demo-wrapper"},f={class:"demo"};var N={metaInfo(){return{subtitle:"Date Picker"}},data(){return{date:"",config1:{defaultDate:"today"},date1:"",config2:{enableTime:!0,dateFormat:"Y-m-d H:i"},date2:"",config3:{mode:"multiple"},date3:["2017-11-05","2017-11-15","2017-11-25"],config4:{mode:"range"},date4:["2017-11-10","2017-11-20"],config5:{mode:"month"},date5:"July 2020",monthOptions:{shorthand:!0,dateFormat:"m.y",altFormat:"F Y"},date6:"13:20",config6:{mode:"time"}}},mounted(){let e=new Date,t=e.getFullYear(),o=e.getMonth()+1,a=e.getDate();setTimeout((()=>{this.date=`${t}-${o}-${a}`}),1e3)}};var E=(0,o(83744).Z)(N,[["render",function(e,t,o,N,E,C){const w=(0,a.resolveComponent)("ui-datepicker"),$=(0,a.resolveComponent)("ui-snippet"),k=(0,a.resolveComponent)("router-link"),v=(0,a.resolveComponent)("docs-page");return(0,a.openBlock)(),(0,a.createBlock)(v,{name:"datepicker","demo-count":"6","without-css":""},{hero:(0,a.withCtx)((()=>[(0,a.createVNode)(w,{modelValue:E.date,"onUpdate:modelValue":t[0]||(t[0]=e=>E.date=e),placeholder:"Select Date.."},null,8,["modelValue"])])),default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("section",l,[(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("headline6"))},"1.1 Basic + default icon",2),(0,a.createElementVNode)("div",d,[(0,a.createVNode)(w,{modelValue:E.date1,"onUpdate:modelValue":t[1]||(t[1]=e=>E.date1=e),config:E.config1,placeholder:"Select Date..",toggle:"",clear:""},null,8,["modelValue","config"])]),(0,a.createVNode)($,{code:e.$store.demos[1]},null,8,["code"])]),(0,a.createElementVNode)("section",c,[(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("headline6"))},"2. DateTime + custom icon",2),(0,a.createElementVNode)("div",n,[(0,a.createVNode)(w,{modelValue:E.date2,"onUpdate:modelValue":t[2]||(t[2]=e=>E.date2=e),config:E.config2,placeholder:"Select Datetime..",toggle:"",clear:""},{toggle:(0,a.withCtx)((()=>[r])),clear:(0,a.withCtx)((()=>[m])),_:1},8,["modelValue","config"])]),(0,a.createVNode)($,{code:e.$store.demos[2]},null,8,["code"])]),(0,a.createElementVNode)("section",s,[(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("headline6"))},"3. Selecting multiple dates",2),(0,a.createElementVNode)("div",i,[(0,a.createVNode)(w,{modelValue:E.date3,"onUpdate:modelValue":t[3]||(t[3]=e=>E.date3=e),config:E.config3,placeholder:"Select Multi Date.."},null,8,["modelValue","config"])]),(0,a.createVNode)($,{code:e.$store.demos[3]},null,8,["code"])]),(0,a.createElementVNode)("section",u,[(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("headline6"))},[(0,a.createTextVNode)(" 4. Simple range calendar (Customized rangepicker: "),(0,a.createVNode)(k,{to:{name:"selection.rangepicker"}},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("<ui-rangepicker>")])),_:1},8,["to"]),(0,a.createTextVNode)(") ")],2),(0,a.createElementVNode)("div",V,[(0,a.createVNode)(w,{modelValue:E.date4,"onUpdate:modelValue":t[4]||(t[4]=e=>E.date4=e),config:E.config4,placeholder:"Select Date Range.."},null,8,["modelValue","config"])]),(0,a.createVNode)($,{code:e.$store.demos[4]},null,8,["code"])]),(0,a.createElementVNode)("section",p,[(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("headline6"))},"5. Month select",2),(0,a.createElementVNode)("div",g,[(0,a.createVNode)(w,{modelValue:E.date5,"onUpdate:modelValue":t[5]||(t[5]=e=>E.date5=e),config:E.config5,"month-options":E.monthOptions,placeholder:"Select Month.."},null,8,["modelValue","config","month-options"])]),(0,a.createVNode)($,{code:e.$store.demos[5]},null,8,["code"])]),(0,a.createElementVNode)("section",h,[(0,a.createElementVNode)("h6",{class:(0,a.normalizeClass)(e.$tt("headline6"))},"6. Time picker",2),(0,a.createElementVNode)("div",f,[(0,a.createVNode)(w,{modelValue:E.date6,"onUpdate:modelValue":t[6]||(t[6]=e=>E.date6=e),config:E.config6,placeholder:"Select Time.."},null,8,["modelValue","config"])]),(0,a.createVNode)($,{code:e.$store.demos[6]},null,8,["code"])])])),_:1})}]])}}]);