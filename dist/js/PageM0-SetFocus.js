(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PageM0-SetFocus"],{"0fd9":function(t,e,n){"use strict";n("4b85");var a=n("2b0e"),r=n("d9f7"),l=n("80d2");const s=["sm","md","lg","xl"],o=["start","end","center"];function i(t,e){return s.reduce((n,a)=>(n[t+Object(l["w"])(a)]=e(),n),{})}const c=t=>[...o,"baseline","stretch"].includes(t),u=i("align",()=>({type:String,default:null,validator:c})),d=t=>[...o,"space-between","space-around"].includes(t),f=i("justify",()=>({type:String,default:null,validator:d})),g=t=>[...o,"space-between","space-around","stretch"].includes(t),p=i("alignContent",()=>({type:String,default:null,validator:g})),v={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(p)},b={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,n){let a=b[t];if(null!=n){if(e){const n=e.replace(t,"");a+="-"+n}return a+="-"+n,a.toLowerCase()}}const h=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:n,children:a}){let l="";for(const r in e)l+=String(e[r]);let s=h.get(l);if(!s){let t;for(t in s=[],v)v[t].forEach(n=>{const a=e[n],r=m(t,n,a);r&&s.push(r)});s.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),h.set(l,s)}return t(e.tag,Object(r["a"])(n,{staticClass:"row",class:s}),a)}})},"62ad":function(t,e,n){"use strict";n("4b85");var a=n("2b0e"),r=n("d9f7"),l=n("80d2");const s=["sm","md","lg","xl"],o=(()=>s.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),i=(()=>s.reduce((t,e)=>(t["offset"+Object(l["w"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>s.reduce((t,e)=>(t["order"+Object(l["w"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(o),offset:Object.keys(i),order:Object.keys(c)};function d(t,e,n){let a=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");a+="-"+n}return"col"!==t||""!==n&&!0!==n?(a+="-"+n,a.toLowerCase()):a.toLowerCase()}}const f=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:a,parent:l}){let s="";for(const r in e)s+=String(e[r]);let o=f.get(s);if(!o){let t;for(t in o=[],u)u[t].forEach(n=>{const a=e[n],r=d(t,n,a);r&&o.push(r)});const n=o.some(t=>t.startsWith("col-"));o.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(s,o)}return t(e.tag,Object(r["a"])(n,{class:o}),a)}})},"68bd":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("wrap",[n("header",{staticClass:"page-header"},[n("v-container",[n("header",{staticClass:"px-3"},[n("v-chip",{staticClass:"overline pr-4 mr-2",attrs:{small:""},on:{click:function(e){return t.goto("PageIntro")}}},[t._v(" ► Intro ")]),n("v-chip",{staticClass:"overline pr-4 mr-2",attrs:{small:""},on:{click:function(e){return t.goto("PageHome")}}},[t._v(" ► Home ")]),n("v-chip",{staticClass:"overline pr-4 mr-2",attrs:{small:""},on:{click:function(e){return t.goto("PageM0")}}},[t._v(" ► Guided Customer Assessment ")]),n("h1",{staticClass:"text-h4"},[t._v(" 1/3 Set Focus for Value Starter Engagement ")]),n("p",{staticClass:"subtitle"},[t._v("Define priorities")])],1)])],1),n("section",[n("v-container",[n("debug",{staticClass:"pa-3"},[t._v(" [...form] ")])],1)],1),n("section",[n("v-container",[n("v-row",{attrs:{dense:"","align-content":"stretch"}},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("walrus-card",{attrs:{disabled:!1,action:function(e){return t.goto("PageM0-FinancialData")}}},[n("p",[t._v("Next")]),n("div",{staticClass:"headline"},[t._v(" Confirm financial data for the Benefit case ")])])],1)],1)],1)],1)])},r=[];let l=[],s={},o={},i={},c={},u={};i={...i,router(){return this.$router}},o={...o,goto(t){return this.$router.push(t)}};var d={name:"Module-0-1",props:l,components:s,methods:o,computed:i,watch:c,data(){return u}},f=d,g=n("2877"),p=n("6544"),v=n.n(p),b=n("cc20"),m=n("62ad"),h=n("a523"),y=n("0fd9"),w=Object(g["a"])(f,a,r,!1,null,null,null);e["default"]=w.exports;v()(w,{VChip:b["a"],VCol:m["a"],VContainer:h["a"],VRow:y["a"]})}}]);
//# sourceMappingURL=PageM0-SetFocus.js.map