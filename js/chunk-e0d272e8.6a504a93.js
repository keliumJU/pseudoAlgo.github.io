(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0d272e8"],{"191a":function(e,t,r){},"1b81":function(e,t,r){"use strict";r("191a")},"1f15":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"cht1",attrs:{flat:""}},[r("v-toolbar-title",[e._v(e._s(e.nameTable))]),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),r("v-spacer"),[r("Exceloper",{attrs:{numsAle:e.desserts,nameFile:e.namefile}})]],2)]},proxy:!0},{key:"item.num",fn:function(t){var a=t.item;return[r("v-chip",{attrs:{color:e.getColor(a.num),dark:""}},[e._v(" "+e._s(a.num)+" ")])]}}],null,!0)})},n=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:e.exportExcel}},[e._v(" Exportar ")])],1)},s=[],o=r("1146"),i=r.n(o),u={name:"excel-import-export",props:{numsAle:{type:Array,default:function(){return[]}},nameFile:{type:String,default:"nums-ale"}},methods:{exportExcel:function(){for(var e=[],t=0;t<this.numsAle.length;t++)e.push({num:String(this.numsAle[t].num)});var r=i.a.utils.json_to_sheet(e),a={SheetNames:["jsonWorkSheet"],Sheets:{jsonWorkSheet:r}};i.a.writeFile(a,this.nameFile+".xlsx")}}},c=u,m=r("2877"),f=Object(m["a"])(c,l,s,!1,null,null,null),v=f.exports,d={props:{desserts:{type:Array,default:function(){return[]}},namefile:{type:String,default:"numerosPseudoAlgo"},headers:{type:Array,default:function(){return[]}},nameTable:{type:String,default:"numerosPseudoAlgo"}},components:{Exceloper:v},data:function(){return{}},methods:{getColor:function(e){return e=Math.random,console.log(e),"green"}}},p=d,h=Object(m["a"])(p,a,n,!1,null,"72f2a482",null);t["a"]=h.exports},"43df":function(e,t,r){},"90d7":function(e,t,r){var a=r("23e7"),n=Math.log,l=Math.LN2;a({target:"Math",stat:!0},{log2:function(e){return n(e)/l}})},"95fe":function(e,t,r){"use strict";r("43df")},"9a9d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("LinealAlgo",{staticClass:"back-degree",attrs:{msg:"Welcome to Lineal Algorithm"}})],1)},n=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-container",[r("v-row",[r("v-col"),r("v-col",[r("h1",{staticClass:"my-font"},[e._v(e._s(e.msg))])]),r("v-col")],1),r("v-row",{staticClass:"justify-center pa-10 properties-head"},[r("v-col",[r("v-card",{staticClass:"pa-0"},[r("v-card-title",{staticClass:"justify-center"},[e._v("Ingresa los valores para el algoritmo lineal")]),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{label:"X0",rules:e.X0Rules,"error-count":"2",required:""},model:{value:e.valX0,callback:function(t){e.valX0=t},expression:"valX0"}}),r("v-text-field",{attrs:{label:"A",rules:e.ARules,"error-count":"3",required:""},model:{value:e.valA,callback:function(t){e.valA=t},expression:"valA"}}),r("v-text-field",{attrs:{label:"M",rules:e.MRules,"error-count":"3",required:""},model:{value:e.valM,callback:function(t){e.valM=t},expression:"valM"}}),r("v-text-field",{attrs:{label:"C",rules:e.CRules,"error-count":"3",required:""},model:{value:e.valC,callback:function(t){e.valC=t},expression:"valC"}})],1)],1),r("v-card-actions",[r("v-btn",{attrs:{color:"primary"},on:{click:e.linealAlgorithm}},[e._v(" Go ")])],1)],1)],1),r("v-col",[r("Propiedades",{attrs:{itemsp:e.items}})],1),r("v-col",[r("Propiedades",{attrs:{itemsp:e.items}})],1)],1),r("v-row",[r("v-col",{staticClass:"rounded-md pa-4 ma-2"},[r("TablaDim",{attrs:{desserts:e.items,headers:e.headers,namefile:"linealAlgo",nameTable:"Algoritmo Lineal"}})],1)],1)],1)],1)},s=[],o=(r("99af"),r("90d7"),r("b680"),r("c35a"),r("a9e3"),r("9de9")),i=r("1f15"),u={name:"LinealAlgo",components:{Propiedades:o["a"],TablaDim:i["a"]},props:{msg:String},data:function(){var e=this;return{X0Rules:[function(e){return!!e||"X0 Es requerido"},function(e){return/^\d+$/.test(e)||"Debe ser un numero entero"}],ARules:[function(e){return!!e||"A Es requerido"},function(t){return e.despejarK(t)},function(e){return/^\d+$/.test(e)||"Debe ser un numero entero"}],MRules:[function(e){return!!e||"M Es requerido"},function(t){return e.despejarM(t)},function(e){return/^\d+$/.test(e)||"Debe ser un numero entero"}],CRules:[function(e){return!!e||"C Es requerido"},function(t){return e.relativePrime(t)},function(e){return/^\d+$/.test(e)||"Debe ser un numero entero"}],valX0:0,valA:0,valC:0,valM:0,headers:[{text:"N~",align:"start",value:"Xn"},{text:"(aXn+c)mod(m)",value:"formula"},{text:"Numero Aleatorio",value:"num"}],items:[{Xn:0,formula:0,num:0},{Xn:0,formula:0,num:0},{Xn:0,formula:0,num:0},{Xn:0,formula:0,num:0},{Xn:0,formula:0,num:0},{Xn:0,formula:0,num:0},{Xn:0,formula:0,num:0},{Xn:0,formula:0,num:0},{Xn:0,formula:0,num:0},{Xn:0,formula:0,num:0},{Xn:0,formula:0,num:0}]}},methods:{despejarK:function(e){var t=(e-1)/4;return t%1==0||'"'.concat(e,'" no se cumple en a=1+4k')},relativePrime:function(e){for(var t=[],r=1;r<e;r++)e%r==0&&t.push(r);for(var a=1;a<this.valM;a++)this.valM%a==0&&t.push(a);for(var n={},l=0;l<t.length;l++)if(n[t[l]]){if(n[t[l]]+=1,n[t[l]]>1&&1!=t[l])return'"'.concat(e,'" no es relativamente primo a "').concat(this.valM,'"')}else n[t[l]]=1;return!0},despejarM:function(e){e=parseInt(this.valM);var t=Math.log2(e);if(t%1==0){var r=Math.pow(2,t);if(r==e)return!0}return'"'.concat(e,'" no se cumple en m=2^g')},fillArray:function(e){for(var t=0;t<e-10;t++)this.items.push({Xn:0,formula:0,num:0})},financial:function(e){return Number.parseFloat(e).toFixed(3)},linealAlgorithm:function(){this.valX0=parseInt(this.valX0),this.valA=parseInt(this.valA),this.valC=parseInt(this.valC),this.valM=parseInt(this.valM),this.valM>10&&this.fillArray(this.valM),this.items[0].formula=this.valX0;for(var e=1;e<=this.valM;e++){this.items[e].Xn=e;var t=(this.valA*this.items[e-1].formula+this.valC)%this.valM;this.items[e].formula=t,this.items[e].num=this.financial(this.items[e].formula/(this.valM-1))}}}},c=u,m=(r("95fe"),r("2877")),f=Object(m["a"])(c,l,s,!1,null,"75759196",null),v=f.exports,d={name:"Lineal",components:{LinealAlgo:v}},p=d,h=(r("1b81"),Object(m["a"])(p,a,n,!1,null,"857a7ef6",null));t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-e0d272e8.6a504a93.js.map