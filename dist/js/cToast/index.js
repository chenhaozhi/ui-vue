!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["ui-vue-h5"]=e():t["ui-vue-h5"]=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=52)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,s,i,a){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))},30:function(t,e){},52:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.fadeIn}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"c-alert-container",class:t.position},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showBg,expression:"showBg"}],staticClass:"alert-mask"}),t._v(" "),n("transition",{attrs:{name:t.translate}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"alert-box",class:["alert-shape-"+t.shape]},["square"==t.shape&&"info"!=t.type?n("em",{staticClass:"alert-type",class:["alert-type-"+t.type]}):t._e(),t._v(" "),n("div",{staticClass:"text"},[n("p",[t._v(t._s(t.text))])])])])],1)])};o._withStripped=!0;var r={name:"Alert",data:()=>({}),props:{show:{default:!1},text:{default:"loading"},type:{type:String,default:"info"},shape:{type:String,default:"square"},position:{default:"center"},showBg:{default:!1},delay:{default:1500},transition:{default:!0}},mounted(){},computed:{translate(){return this.transition?"top"===this.position?"translate-top":"middle"===this.position?"translate-middle":"bottom"===this.position?"translate-bottom":void 0:""},fadeIn(){return this.transition?"fadeIn":""}}},s=(n(76),n(0)),i=Object(s.a)(r,o,[],!1,null,null,null);i.options.__file="src/components/cToast/toast.vue";var a=i.exports;const u={install:function(t,e){document.getElementsByClassName("alert-container").length||(t.prototype.$toast=function(e){let n=new(t.extend(a)),o=n.$mount().$el;document.body.appendChild(o),"string"==typeof e?n.text=e:"object"==typeof e&&Object.assign(n,e),n.show=!0,setTimeout((function(){n.show=!1}),n.delay||1500)})}};e.default=u},76:function(t,e,n){"use strict";var o=n(30);n.n(o).a}})}));