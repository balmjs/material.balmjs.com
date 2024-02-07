"use strict";(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[2660],{12660:function(e,t,l){l.r(t),l.d(t,{default:function(){return g}});var o=l(96064);const a={class:"demo-wrapper"},s={class:"demo"},n={class:"demo-wrapper"},i={class:"demo"},c={class:"inner"},r={class:"name"},d={class:"demo-wrapper"},m={class:"demo"},p={class:"inner"},u={class:"actions"},h={key:"add",class:"item add-btn"},f={class:"inner"};var C=l(19e3),N={metaInfo(){return{subtitle:"File"}},setup(){return{balmUI:(0,C.yA)()}},data(){return{files1:[],files2:[],files3:[],limit:5,postUrl:"https://jsonplaceholder.typicode.com/posts"}},methods:{setBg(e){let{previewSrc:t}=e;return t?{backgroundImage:`url(${t})`}:{}},onChange(e){e.length>this.limit-this.files3.length?this.$toast(`Image Limit: ${this.limit}`):e.forEach((e=>{e.uploaded=!1,this.files3.push(e)}))},async upload(e){try{await this.$http.post(this.postUrl,{file:e.sourceFile});e.uploaded=!0,console.log(`${e.name} is uploaded`)}catch(t){}},uploadAllFiles(){this.files3.length?this.files3.forEach((e=>{this.upload(e)})):this.$toast("No files")},remove(e){this.files3.splice(e,1)}}};const V=(0,l(18152).c)(N,[["render",function(e,t,l,C,N,V){const g=(0,o.resolveComponent)("ui-file"),k=(0,o.resolveComponent)("ui-snippet"),v=(0,o.resolveComponent)("ui-fab"),w=(0,o.resolveComponent)("ui-icon"),E=(0,o.resolveComponent)("ui-button"),B=(0,o.resolveComponent)("docs-page");return(0,o.openBlock)(),(0,o.createBlock)(B,{name:"file","demo-count":"3","without-css":""},{hero:(0,o.withCtx)((()=>[(0,o.createVNode)(g)])),default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("section",a,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.1 Default Usage",2),(0,o.createElementVNode)("div",s,[(0,o.createVNode)(g,{accept:"image/*",onChange:t[0]||(t[0]=e=>C.balmUI.onChange("files1",e))}),(0,o.createElementVNode)("p",null,"Files: "+(0,o.toDisplayString)(N.files1),1)]),(0,o.createVNode)(k,{code:e.$store.demos[1]},null,8,["code"])]),(0,o.createElementVNode)("section",n,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.2 Multiple + Preview",2),(0,o.createElementVNode)("div",i,[(0,o.createVNode)(g,{accept:"image/*",multiple:"",preview:"",onChange:t[1]||(t[1]=e=>C.balmUI.onChange("files2",e))}),(0,o.createVNode)(o.TransitionGroup,{class:"preview-list",name:"list",tag:"ul"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(N.files2,(e=>((0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.tmpId,class:"item"},[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("span",{class:"preview",style:(0,o.normalizeStyle)(V.setBg(e))},null,4),(0,o.createElementVNode)("span",r,(0,o.toDisplayString)(e.name),1)])])))),128))])),_:1})]),(0,o.createVNode)(k,{code:e.$store.demos[2]},null,8,["code"])]),(0,o.createElementVNode)("section",d,[(0,o.createElementVNode)("h6",{class:(0,o.normalizeClass)(e.$tt("headline6"))},"1.3 Classics Upload",2),(0,o.createElementVNode)("div",m,[(0,o.createVNode)(o.TransitionGroup,{class:"preview-list",name:"list",tag:"ul"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(N.files3,((e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.tmpId,class:"item"},[(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("span",{class:"preview",style:(0,o.normalizeStyle)(V.setBg(e))},null,4),(0,o.createElementVNode)("span",u,[e.uploaded?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)(v,{key:0,icon:"file_upload",mini:"",onClick:t=>V.upload(e)},null,8,["onClick"])),(0,o.createVNode)(v,{icon:"delete",mini:"",onClick:e=>V.remove(t)},null,8,["onClick"])])])])))),128)),N.files3.length<N.limit?((0,o.openBlock)(),(0,o.createElementBlock)("li",h,[(0,o.createElementVNode)("div",f,[(0,o.createVNode)(g,{accept:"image/*",multiple:"",preview:"",onChange:V.onChange},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(w,{class:"add-icon"},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("add")])),_:1})])),_:1},8,["onChange"])])])):(0,o.createCommentVNode)("",!0)])),_:1}),(0,o.createVNode)(E,{raised:"",onClick:V.uploadAllFiles},{before:(0,o.withCtx)((e=>{let{iconClass:t}=e;return[(0,o.createVNode)(w,{class:(0,o.normalizeClass)(t)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("file_upload")])),_:2},1032,["class"])]})),default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" Upload All ")])),_:1},8,["onClick"])]),(0,o.createVNode)(k,{code:e.$store.demos[3]},null,8,["code"])])])),_:1})}]]);var g=V}}]);