(function(t){function n(n){for(var i,o,u=n[0],c=n[1],a=n[2],l=0,f=[];l<u.length;l++)o=u[l],r[o]&&f.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);h&&h(n);while(f.length)f.shift()();return s.push.apply(s,a||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,u=1;u<e.length;u++){var c=e[u];0!==r[c]&&(i=!1)}i&&(s.splice(n--,1),t=o(o.s=e[0]))}return t}var i={},r={app:0},s=[];function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/calculator/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var a=0;a<u.length;a++)n(u[a]);var h=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("64a9"),r=e.n(i);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"calculator"},[e("div",{ref:"results",staticClass:"results",style:t.enterSize},[e("div",{class:"action "+(t.expression?"show":""),style:t.actionSize},[t._v("\n        "+t._s(t.expression)+"\n      ")]),t._v("\n      "+t._s(t.enter)+"\n    ")]),e("div",{ref:"symbols",staticClass:"symbols noselect"},[e("div",{staticClass:"row"},[e("div",{staticClass:"backGray",on:{click:function(n){return t.setCurrentAction("√")}}},[t._v("√")]),e("div",{staticClass:"backGray",on:{click:function(n){return t.setCurrentAction("+/-")}}},[t._v("+/-")]),e("div",{staticClass:"backGray",on:{click:function(n){return t.setCurrentAction("%")}}},[t._v("%")]),e("div",{staticClass:"backWhite",on:{click:function(n){return t.setAction("/")}}},[t._v("/")])]),e("div",{staticClass:"row"},[e("div",{on:{click:function(n){return t.setNumber("7")}}},[t._v("7")]),e("div",{on:{click:function(n){return t.setNumber("8")}}},[t._v("8")]),e("div",{on:{click:function(n){return t.setNumber("9")}}},[t._v("9")]),e("div",{staticClass:"backWhite",on:{click:function(n){return t.setAction("*")}}},[t._v("*")])]),e("div",{staticClass:"row"},[e("div",{on:{click:function(n){return t.setNumber("4")}}},[t._v("4")]),e("div",{on:{click:function(n){return t.setNumber("5")}}},[t._v("5")]),e("div",{on:{click:function(n){return t.setNumber("6")}}},[t._v("6")]),e("div",{staticClass:"backWhite",on:{click:function(n){return t.setAction("-")}}},[t._v("-")])]),e("div",{staticClass:"row"},[e("div",{on:{click:function(n){return t.setNumber("1")}}},[t._v("1")]),e("div",{on:{click:function(n){return t.setNumber("2")}}},[t._v("2")]),e("div",{on:{click:function(n){return t.setNumber("3")}}},[t._v("3")]),e("div",{staticClass:"backWhite",on:{click:function(n){return t.setAction("+")}}},[t._v("+")])]),e("div",{staticClass:"row"},[e("div",{on:{click:function(n){return t.reset()}}},[t._v("AC")]),e("div",{on:{click:function(n){return t.setNumber("0")}}},[t._v("0")]),e("div",{on:{click:function(n){return t.setNumber(".")}}},[t._v(".")]),e("div",{staticClass:"backOrange",on:{click:function(n){return t.setAction("=")}}},[t._v("=")])])])])])},s=[],o=(e("ac6a"),e("4917"),e("96cf"),e("3b8d")),u=(e("6b54"),{name:"app",data:function(){return{number1:0,number2:0,result:0,oldAction:null,actionMap:["/","*","-","+","="],numbersMap:["0","1","2","3","4","5","6","7","8","9","."]}},computed:{expression:function(){return this.oldAction?this.round(this.number1)+" "+this.oldAction:""},enter:function(){var t=this.result||this.number2||this.number1||0,n=t.toString().slice(-1);return t="."===n||"0"===n?t:this.round(t),t},enterSize:function(){var t={},n=this.enter.toString().length;return n>9&&(t.fontSize="45px"),n>13&&(t.fontSize="35px"),n>18&&(t.fontSize="30px"),n>21&&(t.fontSize="25px"),t},actionSize:function(){var t={},n=this.expression.toString().length;return n>20&&(t.fontSize="22px"),t}},methods:{round:function(t){return Math.round(1e7*t)/1e7},setAction:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.number1!==1/0&&this.number2!==1/0){t.next=2;break}return t.abrupt("return",this.reset());case 2:if(!this.number2){t.next=7;break}return t.next=5,this.setMathAction(this.oldAction);case 5:t.next=13;break;case 7:if(!this.number1||this.oldAction!==n&&"="!==n){t.next=13;break}return this.number2=this.number1,t.next=11,this.setMathAction(this.oldAction);case 11:this.number2=this.number1,this.result=0;case 13:this.number2=0,this.oldAction=n,"="===n&&(this.result=this.number1,this.oldAction=null);case 16:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),setCurrentAction:function(t){return this.result?this.number1=this.result=this.setMathAction(t,this.result):this.number2?this.number2=this.setMathAction(t,this.number2):this.number1&&!this.oldAction?this.number1=this.setMathAction(t,this.number1):this.number1&&this.oldAction?this.number2=this.setMathAction(t,this.number1):void 0},setNumber:function(t){var n="."===t;if(this.oldAction&&(this.result=0),!n&&this.result&&(this.number1=0),!n||!this.isHasDot(this.result)){this.result=0;var e="number"+(this.oldAction?2:1);this[e].length>12||n&&this.isHasDot(this[e])||"0"===this[e]&&"0"===t||(0!=this[e]||n||this.isHasDot(this[e])?this[e]+=t:this[e]=t)}},isHasDot:function(t){return t.toString().match(/\./)},reset:function(){this.oldAction=null,this.number1=0,this.number2=0,this.result=0},setMathAction:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"√"===t?Math.sqrt(n):"+/-"===t?-n:"%"===t?n/100:"+"===t?this.number1=+this.number1+ +this.number2:"-"===t?this.number1=this.number1-this.number2:"*"===t?this.number1=this.number1*this.number2:"/"===t?this.number1=+this.number2?this.number1/this.number2:0:void 0},keyPress:function(t){if(t&&t.key){var n="Enter"===t.key?"=":t.key;-1!==this.numbersMap.indexOf(n)&&this.setNumber(n),-1!==this.actionMap.indexOf(n)&&this.setAction(n)}},onResize:function(){if(window.innerWidth>500){if(!this.$refs.symbols.childNodes[0].childNodes[0].style.height)return;return this.setBtnHeight("")}var t=this.$refs.symbols.childNodes[0].childNodes.length+1,n=(window.innerHeight-this.$refs.results.offsetHeight)/t+"px";this.setBtnHeight(n)},setBtnHeight:function(t){this.$refs.symbols.childNodes.forEach(function(n){n.childNodes.forEach(function(n){n.style.height=t,n.style.lineHeight=t})})}},mounted:function(){this.onResize(),window.addEventListener("keydown",this.keyPress),window.addEventListener("resize",this.onResize)}}),c=u,a=(e("034f"),e("2877")),h=Object(a["a"])(c,r,s,!1,null,null,null),l=h.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,n,e){}});
//# sourceMappingURL=app.e10db059.js.map