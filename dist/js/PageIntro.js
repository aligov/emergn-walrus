(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PageIntro"],{"0fd9":function(t,e,n){"use strict";n("4b85");var a=n("2b0e"),r=n("d9f7"),l=n("80d2");const o=["sm","md","lg","xl"],s=["start","end","center"];function i(t,e){return o.reduce((n,a)=>(n[t+Object(l["w"])(a)]=e(),n),{})}const u=t=>[...s,"baseline","stretch"].includes(t),c=i("align",()=>({type:String,default:null,validator:u})),d=t=>[...s,"space-between","space-around"].includes(t),f=i("justify",()=>({type:String,default:null,validator:d})),g=t=>[...s,"space-between","space-around","stretch"].includes(t),p=i("alignContent",()=>({type:String,default:null,validator:g})),b={align:Object.keys(c),justify:Object.keys(f),alignContent:Object.keys(p)},y={align:"align",justify:"justify",alignContent:"align-content"};function h(t,e,n){let a=y[t];if(null!=n){if(e){const n=e.replace(t,"");a+="-"+n}return a+="-"+n,a.toLowerCase()}}const w=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:n,children:a}){let l="";for(const r in e)l+=String(e[r]);let o=w.get(l);if(!o){let t;for(t in o=[],b)b[t].forEach(n=>{const a=e[n],r=h(t,n,a);r&&o.push(r)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),w.set(l,o)}return t(e.tag,Object(r["a"])(n,{staticClass:"row",class:o}),a)}})},"62ad":function(t,e,n){"use strict";n("4b85");var a=n("2b0e"),r=n("d9f7"),l=n("80d2");const o=["sm","md","lg","xl"],s=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),i=(()=>o.reduce((t,e)=>(t["offset"+Object(l["w"])(e)]={type:[String,Number],default:null},t),{}))(),u=(()=>o.reduce((t,e)=>(t["order"+Object(l["w"])(e)]={type:[String,Number],default:null},t),{}))(),c={col:Object.keys(s),offset:Object.keys(i),order:Object.keys(u)};function d(t,e,n){let a=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");a+="-"+n}return"col"!==t||""!==n&&!0!==n?(a+="-"+n,a.toLowerCase()):a.toLowerCase()}}const f=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:a,parent:l}){let o="";for(const r in e)o+=String(e[r]);let s=f.get(o);if(!s){let t;for(t in s=[],c)c[t].forEach(n=>{const a=e[n],r=d(t,n,a);r&&s.push(r)});const n=s.some(t=>t.startsWith("col-"));s.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(o,s)}return t(e.tag,Object(r["a"])(n,{class:s}),a)}})},b14a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("wrap",[n("header",{staticClass:"page-header"},[n("v-container",[n("header",{staticClass:"px-3"},[n("h1",{staticClass:"text-h2"},[t._v(" SAP Value Starter ")])])])],1),n("section",[n("v-container",[n("v-row",{attrs:{dense:"","align-content":"stretch"}},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("walrus-card",{attrs:{disabled:!1,action:function(e){return t.goto("PageHome")}}},[n("div",{staticClass:"headline"},[t._v(" Enter with authorization ")])])],1)],1)],1)],1)])},r=[];let l=[],o={},s={},i={},u={},c={};i={...i,router(){return this.$router}},s={...s,goto(t){return this.$router.push(t)}};var d={name:"Intro",props:l,components:o,methods:s,computed:i,watch:u,data(){return c}},f=d,g=n("2877"),p=n("6544"),b=n.n(p),y=n("62ad"),h=n("a523"),w=n("0fd9"),v=Object(g["a"])(f,a,r,!1,null,null,null);e["default"]=v.exports;b()(v,{VCol:y["a"],VContainer:h["a"],VRow:w["a"]})}}]);
//# sourceMappingURL=PageIntro.js.map