(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PageHome"],{"0fd9":function(t,e,n){"use strict";n("4b85");var a=n("2b0e"),r=n("d9f7"),l=n("80d2");const s=["sm","md","lg","xl"],o=["start","end","center"];function i(t,e){return s.reduce((n,a)=>(n[t+Object(l["w"])(a)]=e(),n),{})}const c=t=>[...o,"baseline","stretch"].includes(t),u=i("align",()=>({type:String,default:null,validator:c})),d=t=>[...o,"space-between","space-around"].includes(t),f=i("justify",()=>({type:String,default:null,validator:d})),p=t=>[...o,"space-between","space-around","stretch"].includes(t),g=i("alignContent",()=>({type:String,default:null,validator:p})),v={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function h(t,e,n){let a=b[t];if(null!=n){if(e){const n=e.replace(t,"");a+="-"+n}return a+="-"+n,a.toLowerCase()}}const w=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:p},...g},render(t,{props:e,data:n,children:a}){let l="";for(const r in e)l+=String(e[r]);let s=w.get(l);if(!s){let t;for(t in s=[],v)v[t].forEach(n=>{const a=e[n],r=h(t,n,a);r&&s.push(r)});s.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),w.set(l,s)}return t(e.tag,Object(r["a"])(n,{staticClass:"row",class:s}),a)}})},"62ad":function(t,e,n){"use strict";n("4b85");var a=n("2b0e"),r=n("d9f7"),l=n("80d2");const s=["sm","md","lg","xl"],o=(()=>s.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),i=(()=>s.reduce((t,e)=>(t["offset"+Object(l["w"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>s.reduce((t,e)=>(t["order"+Object(l["w"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(o),offset:Object.keys(i),order:Object.keys(c)};function d(t,e,n){let a=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");a+="-"+n}return"col"!==t||""!==n&&!0!==n?(a+="-"+n,a.toLowerCase()):a.toLowerCase()}}const f=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:a,parent:l}){let s="";for(const r in e)s+=String(e[r]);let o=f.get(s);if(!o){let t;for(t in o=[],u)u[t].forEach(n=>{const a=e[n],r=d(t,n,a);r&&o.push(r)});const n=o.some(t=>t.startsWith("col-"));o.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(s,o)}return t(e.tag,Object(r["a"])(n,{class:o}),a)}})},"6b9f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("wrap",[n("header",{staticClass:"page-header"},[n("v-container",[n("header",{staticClass:"px-3"},[n("v-chip",{staticClass:"overline pr-4 mr-2",attrs:{small:""},on:{click:function(e){return t.goto("PageIntro")}}},[t._v(" ► Intro ")]),n("h1",{staticClass:"text-h4"},[t._v(" Home Screen ")])],1)])],1),n("v-container",[n("v-row",{attrs:{dense:"","align-content":"stretch"}},[n("v-col",{attrs:{cols:"12",md:"3"}},[n("walrus-card",{attrs:{disabled:!1,action:function(e){return t.goto("PageM0")}}},[n("p",[t._v("Module 0")]),n("div",{staticClass:"headline"},[t._v(" Guided Customer Assessment ")])])],1)],1),n("v-row",{attrs:{dense:"","align-content":"stretch"}},[n("v-col",{attrs:{cols:"12",md:"3"}},[n("walrus-card",{attrs:{disabled:!0}},[n("p",[t._v("Module 1A")]),n("div",{staticClass:"headline"},[t._v(" WHY? — Experience the Value of SAP S/4HANA ")])])],1),n("v-col",{attrs:{cols:"12",md:"3"}},[n("walrus-card",{attrs:{disabled:!0}},[n("p",[t._v("Module 1B")]),n("div",{staticClass:"headline"},[t._v(" WHY? - Review SAP´s Outside – In Point of View ")])])],1)],1)],1)],1)},r=[];let l=[],s={},o={},i={},c={},u={};i={...i,router(){return this.$router}},o={...o,goto(t){return this.$router.push(t)}};var d={name:"Home",props:l,components:s,methods:o,computed:i,watch:c,data(){return u}},f=d,p=n("2877"),g=n("6544"),v=n.n(g),b=n("cc20"),h=n("62ad"),w=n("a523"),y=n("0fd9"),m=Object(p["a"])(f,a,r,!1,null,null,null);e["default"]=m.exports;v()(m,{VChip:b["a"],VCol:h["a"],VContainer:w["a"],VRow:y["a"]})}}]);
//# sourceMappingURL=PageHome.js.map