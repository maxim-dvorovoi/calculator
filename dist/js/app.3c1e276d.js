(function(t){function n(n){for(var i,u,o=n[0],c=n[1],a=n[2],l=0,f=[];l<o.length;l++)u=o[l],r[u]&&f.push(r[u][0]),r[u]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);h&&h(n);while(f.length)f.shift()();return s.push.apply(s,a||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,o=1;o<e.length;o++){var c=e[o];0!==r[c]&&(i=!1)}i&&(s.splice(n--,1),t=u(u.s=e[0]))}return t}var i={},r={app:0},s=[];function u(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=i,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)u.d(e,i,function(n){return t[n]}.bind(null,i));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/calculator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var a=0;a<o.length;a++)n(o[a]);var h=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("64a9"),r=e.n(i);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"calculator"},[e("div",{ref:"results",staticClass:"results"},[e("div",{class:"action "+(t.expression?"show":"")},[t._v("\n        "+t._s(t.expression)+"\n      ")]),t._v("\n      "+t._s(t.enter)+"\n    ")]),e("div",{ref:"symbols",staticClass:"symbols"},[e("div",{staticClass:"row"},[e("div",{on:{click:function(n){return t.setCurrentAction("√")}}},[t._v("√")]),e("div",{on:{click:function(n){return t.setCurrentAction("+/-")}}},[t._v("+/-")]),e("div",{on:{click:function(n){return t.setCurrentAction("%")}}},[t._v("%")]),e("div",{staticClass:"backWhite",on:{click:function(n){return t.setAction("/")}}},[t._v("/")])]),e("div",{staticClass:"row"},[e("div",{on:{click:function(n){return t.setNumber("7")}}},[t._v("7")]),e("div",{on:{click:function(n){return t.setNumber("8")}}},[t._v("8")]),e("div",{on:{click:function(n){return t.setNumber("9")}}},[t._v("9")]),e("div",{staticClass:"backWhite",on:{click:function(n){return t.setAction("*")}}},[t._v("*")])]),e("div",{staticClass:"row"},[e("div",{on:{click:function(n){return t.setNumber("4")}}},[t._v("4")]),e("div",{on:{click:function(n){return t.setNumber("5")}}},[t._v("5")]),e("div",{on:{click:function(n){return t.setNumber("6")}}},[t._v("6")]),e("div",{staticClass:"backWhite",on:{click:function(n){return t.setAction("-")}}},[t._v("-")])]),e("div",{staticClass:"row"},[e("div",{on:{click:function(n){return t.setNumber("1")}}},[t._v("1")]),e("div",{on:{click:function(n){return t.setNumber("2")}}},[t._v("2")]),e("div",{on:{click:function(n){return t.setNumber("3")}}},[t._v("3")]),e("div",{staticClass:"backWhite",on:{click:function(n){return t.setAction("+")}}},[t._v("+")])]),e("div",{staticClass:"row"},[e("div",{on:{click:function(n){return t.reset()}}},[t._v("AC")]),e("div",{on:{click:function(n){return t.setNumber("0")}}},[t._v("0")]),e("div",{on:{click:function(n){return t.setNumber(".")}}},[t._v(".")]),e("div",{staticClass:"backOrange",on:{click:function(n){return t.setAction("=")}}},[t._v("=")])])])])])},s=[],u=(e("ac6a"),e("4917"),e("96cf"),e("3b8d")),o=(e("6b54"),{name:"app",data:function(){return{number1:0,number2:0,result:0,action:null,actionMap:["/","*","-","+","="]}},computed:{expression:function(){if(this.action)return this.round(this.number1)+" "+this.action},enter:function(){var t=this.result||this.number2||this.number1||0,n=t.toString().slice(-1);return t="."===n||"0"===n?t:this.round(t),t}},methods:{round:function(t){return Math.round(1e7*t)/1e7},setAction:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.number2){t.next=4;break}return t.next=3,this.setMathAction(this.action);case 3:this.number2=0;case 4:if("="!==n){t.next=8;break}return this.result=this.number1,this.action=null,t.abrupt("return");case 8:this.action=n;case 9:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),setCurrentAction:function(t){return this.result?(this.result=this.setMathAction(t,this.result),void(this.number1=this.result)):this.number2?this.number2=this.setMathAction(t,this.number2):this.number1?this.number1=this.setMathAction(t,this.number1):void 0},setNumber:function(t){var n="."===t;if(this.action&&(this.result=0),!n&&this.result&&(this.number1=0),!n||!this.isHasDot(this.result)){this.result=0;var e="number"+(this.action?2:1);this[e].length>8||n&&this.isHasDot(this[e])||"0"===this[e]&&"0"===t||(0!=this[e]||n||this.isHasDot(this[e])?this[e]+=t:this[e]=t)}},isHasDot:function(t){return t.toString().match(/\./)},reset:function(){this.action=null,this.number1=0,this.number2=0,this.result=0},setMathAction:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"√"===t?Math.sqrt(n):"+/-"===t?-n:"%"===t?n/100:"+"===t?this.number1=+this.number1+ +this.number2:"-"===t?this.number1=this.number1-this.number2:"*"===t?this.number1=this.number1*this.number2:"/"===t?this.number1=+this.number2?this.number1/this.number2:0:void 0},keyPress:function(t){var n="Enter"===t.key?"=":t.key;isNaN(+n)&&"."!==n||this.setNumber(n),-1!==this.actionMap.indexOf(n)&&this.setAction(n)},onResize:function(){if(window.innerWidth>500){if(!this.$refs.symbols.childNodes[0].childNodes[0].style.height)return;return this.setBtnHeigth("")}var t=this.$refs.symbols.childNodes[0].childNodes.length+1,n=(window.innerHeight-this.$refs.results.offsetHeight)/t+"px";this.setBtnHeigth(n)},setBtnHeigth:function(t){this.$refs.symbols.childNodes.forEach(function(n){n.childNodes.forEach(function(n){n.style.height=t})})}},mounted:function(){this.onResize(),window.addEventListener("keydown",this.keyPress),window.addEventListener("resize",this.onResize)}}),c=o,a=(e("034f"),e("2877")),h=Object(a["a"])(c,r,s,!1,null,null,null),l=h.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,n,e){}});
//# sourceMappingURL=app.3c1e276d.js.map