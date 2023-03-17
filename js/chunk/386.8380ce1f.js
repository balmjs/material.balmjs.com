"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[386],{70386:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var o=a(73114);const d={class:"demo-wrapper"},l={class:"demo"},n={class:"demo-wrapper"},s={class:"demo"},i={class:"dessert"},c={class:"demo-wrapper"},r={class:"demo"};var h={metaInfo(){return{subtitle:"Data Table"}},data(){return{heroData:[],myData:[],thead1:["ID","Dessert (100g serving)","Calories","Fat (g)","Carbs (g)","Protein (g)"],tbody1:["id","dessert","calories","fat","carbs","protein"],thead2:[{value:"ID",sort:"asc",columnId:"id"},{slot:"th-dessert",class:"good",sort:"none",columnId:"dessert"},"Calories","Fat (g)","Carbs (g)","Protein (g)","Actions"],tbody2:["id",{slot:"dessert"},{field:"calories",numeric:!0},{field:"fat",fn:e=>e.fat.toFixed(1)},"carbs",{field:"protein",class:e=>e.protein>5?"red":"green"},{slot:"actions"}],tfoot:[{field:"id",fnName:"count"},null,{field:"calories",fnName:"sum",align:"right",class:"test"},{field:"fat",fnName:"avg"},{field:"carbs",fnName:"max"},{field:"protein",fnName:"min"}],thead3:["title1","title2","title3","title4","title5","title6","title7","title8","title9","title10","title11","title12"],tbody3:[{field:"a",width:80,fixed:"left"},{field:"b",width:100},{field:"c",width:100},{field:"c",width:100},{field:"c",width:100},{field:"c"},{field:"c"},{field:"c"},{field:"c"},{field:"c",width:100},{field:"b",width:100},{field:"b",width:80,fixed:"right"}],tfoot3:[{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9},{value:10},{value:11},{value:12}],data3:[],selectedRows:[1,2,4],selectedKey:"id",page:1,total:12}},async created(){let e=await this.$http.get("/data/table.json");this.heroData=e.slice(0,3),setTimeout((()=>{this.myData=e}),3e3),this.data3=[{a:"aaa",b:"bbb",c:"ContentContentContent",d:3,key:"1"},{a:"aaa",b:"bbb",c:"ContentContentContent",d:3,key:"2"},{a:"aaa",c:"ContentContentContent",d:2,key:"3"},{a:"aaa",c:"ContentContentContent",d:2,key:"4"},{a:"aaa",c:"ContentContentContent",d:2,key:"5"},{a:"aaa",c:"ContentContentContent",d:2,key:"6"},{a:"aaa",c:"ContentContentContent",d:2,key:"7"},{a:"aaa",c:"ContentContentContent",d:2,key:"8"},{a:"aaa",c:"ContentContentContent",d:2,key:"9"},{a:"aaa",b:"bbb",c:"ContentContentContent",d:3,key:"10"},{a:"aaa",b:"bbb",c:"ContentContentContent",d:3,key:"11"},{a:"aaa",b:"bbb",c:"ContentContentContent",d:3,key:"12"}]},methods:{show(e){console.log(e)},async onPage(e){let t=`/data/table${2===e?e:""}.json`;this.myData=await this.$http.get(t)}}};var u=(0,a(83744).Z)(h,[["render",function(e,t,a,h,u,C){const b=(0,o.resolveComponent)("ui-table"),f=(0,o.resolveComponent)("ui-snippet"),m=(0,o.resolveComponent)("ui-icon"),y=(0,o.resolveComponent)("ui-pagination"),w=(0,o.resolveComponent)("docs-page"),p=(0,o.resolveDirective)("tooltip");return(0,o.openBlock)(),(0,o.createBlock)(w,{name:"table","demo-count":"3"},{hero:(0,o.withCtx)((()=>[(0,o.createVNode)(b,{"row-checkbox":"",data:u.heroData,thead:u.thead1,tbody:u.tbody1},null,8,["data","thead","tbody"])])),default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("section",d,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.1 Default Usage",2),(0,o.createElementVNode)("div",l,[(0,o.createVNode)(b,{data:u.heroData,thead:u.thead1,tbody:u.tbody1},null,8,["data","thead","tbody"])]),(0,o.createVNode)(f,{code:e.$store.demos[1]},null,8,["code"])]),(0,o.createElementVNode)("section",n,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.2 Advanced Usage",2),(0,o.createElementVNode)("p",null," Selected rows: "+(0,o.toDisplayString)(u.selectedRows)+" ( Selected key: "+(0,o.toDisplayString)(u.selectedKey)+") ",1),(0,o.createElementVNode)("div",s,[(0,o.createVNode)(b,{modelValue:u.selectedRows,"onUpdate:modelValue":t[1]||(t[1]=e=>u.selectedRows=e),fullwidth:"","row-checkbox":"",data:u.myData,thead:u.thead2,tbody:u.tbody2,tfoot:u.tfoot,"selected-key":u.selectedKey,"show-progress":""},{"th-dessert":(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Dessert "),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)(m,{"aria-describedby":"th-cell-1"},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" error_outline ")])),_:1})),[[p,"100g serving"]])])),dessert:(0,o.withCtx)((e=>{let{data:t}=e;return[(0,o.createElementVNode)("div",i,(0,o.toDisplayString)(t.dessert),1)]})),actions:(0,o.withCtx)((e=>{let{data:t}=e;return[(0,o.createVNode)(m,{onClick:e=>C.show(t)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("description")])),_:2},1032,["onClick"]),(0,o.createVNode)(m,{onClick:e=>C.show(t)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("edit")])),_:2},1032,["onClick"]),(0,o.createVNode)(m,{onClick:e=>C.show(t)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("delete")])),_:2},1032,["onClick"])]})),default:(0,o.withCtx)((()=>[(0,o.createVNode)(y,{modelValue:u.page,"onUpdate:modelValue":[t[0]||(t[0]=e=>u.page=e),C.onPage],total:u.total,"show-total":""},null,8,["modelValue","total","onUpdate:modelValue"])])),_:1},8,["modelValue","data","thead","tbody","tfoot","selected-key"])]),(0,o.createVNode)(f,{code:e.$store.demos[2]},null,8,["code"])]),(0,o.createElementVNode)("section",c,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.3 Fixed Usage",2),(0,o.createElementVNode)("div",r,[(0,o.createVNode)(b,{data:u.data3,thead:u.thead3,tbody:u.tbody3,tfoot:u.tfoot3,"default-col-width":200,scroll:{y:300}},null,8,["data","thead","tbody","tfoot"])]),(0,o.createVNode)(f,{code:e.$store.demos[3]},null,8,["code"])])])),_:1})}]])}}]);