"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[4736,2396],{54736:function(e,t,o){o.r(t),o.d(t,{default:function(){return T}});var a=o(96064);const l={class:"hero-demo"},d={class:"hero-options"},r={class:"hero-option hero-options"},c=(0,a.createElementVNode)("label",{for:"card-media"},"Media",-1),s=(0,a.createElementVNode)("label",{for:"card-supporting-text"},"Supporting text",-1),n=(0,a.createElementVNode)("label",{for:"card-buttons"},"Buttons",-1),i={class:"demo-wrapper"},m={class:"demo"},u={class:"demo-card-article"},p={class:"demo-wrapper"},N={class:"demo"},C={class:"demo-wrapper"},V={class:"demo"},h={class:"demo-card__music-row"},x={class:"demo-card__music-info"},_=(0,a.createElementVNode)("div",{class:"demo-card__music-artist"},"Under the Grave",-1),v=(0,a.createElementVNode)("div",{class:"demo-card__music-year"},"(2016)",-1);var g=o(22396);const f=[{label:"Elevated",value:0},{label:"Outlined",value:1}],b=(0,a.reactive)({typeOption:0,cardOptions:{media:!1,supportingText:!1,buttons:!1}}),w=[{title:"Copper on the rise",content:"Copper price soars amid global market optimism and increased demand."},{title:"U.S. tech startups rebound",content:"Favorable business conditions have allowed startups to secure more fundraising deals compared to last year."},{title:"Asia's clean energy ambitions",content:"China plans to invest billions of dollars for the development of over 300 clean energy projects in Southeast Asia."}],y={on:"favorite",off:"favorite_border"},I={on:"bookmark",off:"bookmark_border"};var M={metaInfo(){return{subtitle:"Card"}},setup(){return{cardMedia:g,TypeOptions:f,...(0,a.toRefs)(b),list:w,icon1:y,icon2:I}}};var T=(0,o(18152).c)(M,[["render",function(e,t,o,g,f,b){const w=(0,a.resolveComponent)("ui-card-media"),y=(0,a.resolveComponent)("ui-card-text"),I=(0,a.resolveComponent)("ui-card-content"),M=(0,a.resolveComponent)("ui-button"),T=(0,a.resolveComponent)("ui-card-actions"),E=(0,a.resolveComponent)("ui-card"),k=(0,a.resolveComponent)("ui-select"),z=(0,a.resolveComponent)("ui-checkbox"),j=(0,a.resolveComponent)("ui-form-field"),D=(0,a.resolveComponent)("ui-list-divider"),O=(0,a.resolveComponent)("ui-icon"),$=(0,a.resolveComponent)("ui-snippet"),B=(0,a.resolveComponent)("ui-card-media-content"),L=(0,a.resolveComponent)("ui-icon-button"),S=(0,a.resolveComponent)("ui-card-icons"),P=(0,a.resolveComponent)("ui-card-buttons"),Z=(0,a.resolveComponent)("docs-page"),U=(0,a.resolveDirective)("ripple");return(0,a.openBlock)(),(0,a.createBlock)(Z,{name:"card",apis:["ui-card","card","card-content","card-media","card-media-content","card-text","card-actions","card-buttons","card-icons"],"demo-count":"3"},{hero:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",l,[(0,a.createVNode)(E,{outlined:1===e.typeOption,class:"demo-card"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(I,null,{default:(0,a.withCtx)((()=>[e.cardOptions.media?((0,a.openBlock)(),(0,a.createBlock)(w,{key:0,rectangle:"",style:(0,a.normalizeStyle)(`background-image:url('${g.cardMedia}')`)},null,8,["style"])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(y,null,{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)(e.$tt("headline6"))},"Card title",2),(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)([e.$tt("subtitle2"),e.$theme.getTextClass("secondary",e.$store.theme)])}," Secondary text ",2)])),_:1}),e.cardOptions.supportingText?((0,a.openBlock)(),(0,a.createBlock)(y,{key:1},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)([e.$tt("subtitle2"),e.$theme.getTextClass("secondary",e.$store.theme)])}," Greyhound divisively hello coldly wonderfully marginally far upon excluding. ",2)])),_:1})):(0,a.createCommentVNode)("",!0)])),_:1}),e.cardOptions.buttons?((0,a.openBlock)(),(0,a.createBlock)(T,{key:0},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(M,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("Action1")])),_:1}),(0,a.createVNode)(M,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("Action2")])),_:1})])),_:1})):(0,a.createCommentVNode)("",!0)])),_:1},8,["outlined"])]),(0,a.createElementVNode)("div",d,[(0,a.createVNode)(k,{modelValue:e.typeOption,"onUpdate:modelValue":t[0]||(t[0]=t=>e.typeOption=t),class:"hero-option",options:g.TypeOptions},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)(" Type ")])),_:1},8,["modelValue","options"]),(0,a.createElementVNode)("div",r,[(0,a.createVNode)(j,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{modelValue:e.cardOptions.media,"onUpdate:modelValue":t[1]||(t[1]=t=>e.cardOptions.media=t),"input-id":"card-media",value:1},null,8,["modelValue"]),c])),_:1}),(0,a.createVNode)(j,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{modelValue:e.cardOptions.supportingText,"onUpdate:modelValue":t[2]||(t[2]=t=>e.cardOptions.supportingText=t),"input-id":"card-supporting-text",value:1},null,8,["modelValue"]),s])),_:1}),(0,a.createVNode)(j,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{modelValue:e.cardOptions.buttons,"onUpdate:modelValue":t[3]||(t[3]=t=>e.cardOptions.buttons=t),"input-id":"card-buttons",value:1},null,8,["modelValue"]),n])),_:1})])])])),default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("section",i,[(0,a.createElementVNode)("div",m,[(0,a.createVNode)(E,{outlined:"",class:"demo-card"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)([e.$tt("subtitle2"),e.$theme.getTextClass("secondary",e.$store.theme),"demo-card-article-group-heading"])}," Headlines ",2),(0,a.createVNode)(D),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(g.list,((t,o)=>((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:`item${o}`},[(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createElementBlock)("a",u,[(0,a.createElementVNode)("h2",{class:(0,a.normalizeClass)([e.$tt("headline5"),"demo-card-article__title"])},(0,a.toDisplayString)(t.title),3),(0,a.createElementVNode)("p",{class:(0,a.normalizeClass)([e.$theme.getTextClass("secondary",e.$store.theme),"demo-card-article__snippet"])},(0,a.toDisplayString)(t.content),3)])),[[U]]),(0,a.createVNode)(D)],64)))),128)),(0,a.createVNode)(T,{"full-bleed":""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(M,{class:"demo-card-action"},{after:(0,a.withCtx)((()=>[(0,a.createVNode)(O,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("arrow_forward")])),_:1})])),default:(0,a.withCtx)((()=>[(0,a.createTextVNode)(" All Business Headlines ")])),_:1})])),_:1})])),_:1})]),(0,a.createVNode)($,{code:e.$store.demos[1]},null,8,["code"])]),(0,a.createElementVNode)("section",p,[(0,a.createElementVNode)("div",N,[(0,a.createVNode)(E,{class:"demo-card demo-card--photo"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(I,{class:"demo-card__primary-action"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(w,{square:"",class:"demo-card__media"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(B,{class:"demo-card__media-content--with-title"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)([e.$tt("subtitle2"),"demo-card__media-title"])}," Vacation Photos ",2)])),_:1})])),_:1})])),_:1}),(0,a.createVNode)(T,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(S,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(L,{class:(0,a.normalizeClass)(e.$theme.getTextClass("icon",e.$store.theme)),toggle:g.icon1},null,8,["class","toggle"]),(0,a.createVNode)(L,{class:(0,a.normalizeClass)(e.$theme.getTextClass("icon",e.$store.theme)),toggle:g.icon2},null,8,["class","toggle"]),(0,a.createVNode)(L,{class:(0,a.normalizeClass)(e.$theme.getTextClass("icon",e.$store.theme)),icon:"share"},null,8,["class"])])),_:1})])),_:1})])),_:1})]),(0,a.createVNode)($,{code:e.$store.demos[2]},null,8,["code"])]),(0,a.createElementVNode)("section",C,[(0,a.createElementVNode)("div",V,[(0,a.createVNode)(E,{class:"demo-card demo-card--music"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(I,{class:"demo-card__primary-action"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",h,[(0,a.createVNode)(w,{square:"",class:"demo-card__media demo-card__media--music"}),(0,a.createElementVNode)("div",x,[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)([e.$tt("headline5"),"demo-card__music-title"])}," Rozes ",2),_,v])])])),_:1}),(0,a.createVNode)(D),(0,a.createVNode)(T,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(P,{class:"demo-card__action-buttons--text-only"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("Rate this album")])),_:1}),(0,a.createVNode)(S,null,{default:(0,a.withCtx)((()=>[((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(5,(t=>(0,a.createVNode)(O,{key:t,class:(0,a.normalizeClass)([e.$theme.getTextClass("icon",e.$store.theme),"demo-card__action-icon--star"]),title:`${t} star${t>1?"s":""}`},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("star_border")])),_:2},1032,["class","title"]))),64))])),_:1})])),_:1})])),_:1})]),(0,a.createVNode)($,{code:e.$store.demos[3]},null,8,["code"])])])),_:1})}]])},22396:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQ0IiBoZWlnaHQ9IjE5NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0tMSAwaDM0NHYxOTRILTF6Ii8+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iI0JEQkRCRCIgeGxpbms6aHJlZj0iI2EiLz48ZyBtYXNrPSJ1cmwoI2IpIj48cGF0aCBkPSJNMTczLjY1IDY5LjIzOEwxOTguMTM4IDI3IDI0OCAxMTIuODc4aC00OS4zYy4wMDguMzQ4LjAxMS42OTcuMDExIDEuMDQ2IDAgMjguOTE1LTIzLjQ0IDUyLjM1Ni01Mi4zNTUgNTIuMzU2QzExNy40NCAxNjYuMjggOTQgMTQyLjg0IDk0IDExMy45MjRjMC0yOC45MTUgMjMuNDQtNTIuMzU1IDUyLjM1Ni01Mi4zNTUgMTAgMCAxOS4zNDcgMi44MDQgMjcuMjk0IDcuNjY5em0wIDBsLTI1LjMgNDMuNjRoNTAuMzVjLS4zNjEtMTguNDc4LTEwLjI5Ni0zNC42MS0yNS4wNS00My42NHoiIGZpbGw9IiM3NTc1NzUiLz48L2c+PC9nPjwvc3ZnPg=="}}]);