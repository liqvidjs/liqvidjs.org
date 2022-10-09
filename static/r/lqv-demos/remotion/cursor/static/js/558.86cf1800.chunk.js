/*! For license information please see 558.86cf1800.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdemo_remotion_cursor=self.webpackChunkdemo_remotion_cursor||[]).push([[558],{7465:function(e){var t,n="object"===typeof Reflect?Reflect:null,r=n&&"function"===typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"===typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!==e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"===typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}v(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&v(e,"error",t,n)}(e,i,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function u(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function s(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function c(e,t,n,r){var i,o,a,c;if(u(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount;else if("function"===typeof a?a=o[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=s(e))>0&&a.length>i&&!a.warned){a.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=a.length,c=f,console&&console.warn&&console.warn(c)}return e}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}function h(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"===typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):d(i,i.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function d(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function v(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return s(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=a,u}var s=o[e];if(void 0===s)return!1;if("function"===typeof s)r(s,this,t);else{var c=s.length,f=d(s,c);for(n=0;n<c;++n)r(f[n],this,t)}return!0},o.prototype.addListener=function(e,t){return c(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return c(this,e,t,!0)},o.prototype.once=function(e,t){return u(t),this.on(e,l(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,l(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,a;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return h(this,e,!0)},o.prototype.rawListeners=function(e){return h(this,e,!1)},o.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},7326:function(e,t,n){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},5671:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return i}})},7762:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(8192);function i(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw a}}}}},1129:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1120);var i=n(1002),o=n(7326);function a(e,t){if(t&&("object"===(0,i.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,r.Z)(e);if(t){var o=(0,r.Z)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a(this,n)}}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1120:function(e,t,n){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},9340:function(e,t,n){function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}n.d(t,{Z:function(){return i}})},885:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(8192);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){u=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1002:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return r}})},8192:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}n.d(t,{Z:function(){return i}})},5475:function(e,t,n){n.d(t,{Jc:function(){return v},Dn:function(){return R},nN:function(){return E}});var r=n(184),i=(n(2791),n(1002));function o(){o=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",u=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof p?t:p,o=Object.create(i.prototype),a=new E(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return j()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var h={};function p(){}function d(){}function v(){}var y={};c(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(_([])));g&&g!==t&&n.call(g,a)&&(y=g);var w=v.prototype=p.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,u,s){var c=l(e[o],e,a);if("throw"!==c.type){var f=c.arg,h=f.value;return h&&"object"==(0,i.Z)(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,u,s)}),(function(e){r("throw",e,u,s)})):t.resolve(h).then((function(e){f.value=e,u(f)}),(function(e){return r("throw",e,u,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=v,c(w,"constructor",v),c(v,"constructor",d),d.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(k.prototype),c(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new k(f(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(w),c(w,s,"Generator"),c(w,a,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;R(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var a=n(885);function u(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){u(o,r,i,a,s,"next",e)}function s(e){u(o,r,i,a,s,"throw",e)}a(void 0)}))}}var c=n(5671),f=n(3144),l=n(7326),h=n(9340),p=n(1129),d=n(5916),v=function(e){(0,h.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.call(this)).captureData={},e.setMaxListeners(0),e.paused=!1,e.active=!1,(0,d.ak)((0,l.Z)(e),["beginRecording","endRecording","pauseRecording","resumeRecording","capture"]),e}return(0,f.Z)(n,[{key:"beginRecording",value:function(e){var t=this;this.plugins=e,this.pauseTime=0,this.intransigentRecorder=void 0;var n=function(e){var n=t.plugins[e];if(n.provide({push:function(n){return t.capture(e,n)},manager:t}),t.captureData[e]=[],n.intransigent){if(t.intransigentRecorder)throw new Error("At most one intransigent recorder is allowed");t.intransigentRecorder=n}};for(var r in this.plugins)n(r);for(var i in this.baseTime=performance.now(),this.plugins)this.plugins[i].beginRecording();this.paused=!1,this.active=!0,this.emit("start")}},{key:"capture",value:function(e,t){this.captureData[e].push(t),this.emit("capture",e,t)}},{key:"endRecording",value:function(){var e=s(o().mark((function e(){var t,n,r,i,u,s,c,f,l,h,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.getTime(),this.duration=t,n={},r=0,i=0,this.intransigentRecorder&&(u=this.intransigentRecorder.endRecording()),e.t0=o().keys(this.plugins);case 6:if((e.t1=e.t0()).done){e.next=13;break}if(s=e.t1.value,this.plugins[s]!==this.intransigentRecorder){e.next=10;break}return e.abrupt("continue",6);case 10:this.plugins[s].endRecording(),e.next=6;break;case 13:if(!this.intransigentRecorder){e.next=31;break}return e.prev=14,e.next=17,u;case 17:c=e.sent,f=(0,a.Z)(c,2),l=f[0],h=f[1],r=l,i=h-t,this.duration=this.duration+i-r,e.next=31;break;case 26:e.prev=26,e.t2=e.catch(14),r=0,i=0,console.error(e.t2);case 31:for(p in this.plugins)n[p]=this.plugins[p].finalizeRecording(this.captureData[p],r,i),this.emit("finalize",p,n[p]);return this.active=!1,this.emit("finalize",void 0,void 0),e.abrupt("return",n);case 35:case"end":return e.stop()}}),e,this,[[14,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"getTime",value:function(){return performance.now()-this.baseTime-this.pauseTime}},{key:"pauseRecording",value:function(){for(var e in this.lastPauseTime=performance.now(),this.plugins)this.plugins[e].pauseRecording();this.paused=!0,this.emit("pause")}},{key:"resumeRecording",value:function(){for(var e in this.pauseTime+=performance.now()-this.lastPauseTime,this.plugins)this.plugins[e].resumeRecording();this.paused=!1,this.emit("resume")}}]),n}(n(7465).EventEmitter);navigator.platform;var y=1e3,m=6e4,g=36e5,w=864e5;new RegExp("^"+"(?:(\\d+):)?".repeat(3)+"(\\d+)(?:\\.(\\d+))?$");function b(e){if(e<0)return"\u2212"+b(-e);for(var t=Math.floor(e/w),n=Math.floor(e/g%24),r=Math.floor(e/m%60),i=Math.floor(e/y%60),o=!0,a="",u=0,s=[t,n,r];u<s.length;u++){var c=s[u];o?0!==c&&(o=!1,a+=c.toString()+":"):a+=c.toString().padStart(2,"0")+":"}return o&&(a+="0:"),a+=i.toString().padStart(2,"0")}function k(e){if(e<0)return"\u2212"+k(-e);var t=Math.floor(e%1e3);return 0===t?b(e):b(e)+"."+String(t).padStart(3,"0").replace(/0+$/,"")}var x=function(){function e(){(0,c.Z)(this,e),this.intransigent=!1}return(0,f.Z)(e,[{key:"beginRecording",value:function(){}},{key:"pauseRecording",value:function(){}},{key:"resumeRecording",value:function(){}},{key:"endRecording",value:function(){}},{key:"finalizeRecording",value:function(e){return e}},{key:"provide",value:function(e){var t=e.push,n=e.manager;this.push=t,this.manager=n}},{key:"getUpdate",value:function(e,t){}}]),e}();(0,r.jsx)("text",{fill:"#FFF",fontFamily:"Helvetica",fontSize:"75",textAnchor:"middle",x:"50",y:"75",children:"M"}),new(function(e){(0,h.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;return(0,c.Z)(this,n),e=t.call(this),(0,d.ak)((0,l.Z)(e),["onMarkerUpdate"]),e}return(0,f.Z)(n,[{key:"beginRecording",value:function(){this.lastTime=0,this.script.on("markerupdate",this.onMarkerUpdate)}},{key:"endRecording",value:function(){this.script.off("markerupdate",this.onMarkerUpdate),this.captureMarker(this.script.markerName)}},{key:"finalizeRecording",value:function(e,t,n){return e[0][1]-=t,e[e.length-1][1]+=n,e.map((function(e){return[e[0],k(e[1])]}))}},{key:"onMarkerUpdate",value:function(e){this.manager.paused||this.captureMarker(this.script.markers[e][0])}},{key:"captureMarker",value:function(e){var t=this.manager.getTime();this.push([e,t-this.lastTime]),this.lastTime=t}}]),n}(x));(0,r.jsx)("g",{transform:"scale(0.126261032057) translate(164.575)",children:(0,r.jsxs)("g",{stroke:"#FFF",transform:"translate(-140.62 -173.21)",children:[(0,r.jsx)("path",{d:"m568.57 620.93c0 116.77-94.66 211.43-211.43 211.43s-211.43-94.66-211.43-211.43v-0.00001",fillOpacity:"0",transform:"translate(14.904)",strokeLinecap:"round",strokeWidth:"20"}),(0,r.jsx)("path",{d:"m568.57 620.93c0 116.77-94.66 211.43-211.43 211.43s-211.43-94.66-211.43-211.43v-0.00001",fillOpacity:"0",transform:"translate(14.904)",strokeLinecap:"round",strokeWidth:"40"}),(0,r.jsx)("path",{d:"m372.05 832.36v114.29",strokeWidth:"30",fill:"none"}),(0,r.jsx)("path",{fill:"#FFF",d:"m197.14 920.93c0.00001-18.935 59.482-34.286 132.86-34.286 73.375 0 132.86 15.35 132.86 34.286z",transform:"translate(42.047 34.286)",strokeLinecap:"round",strokeWidth:"20"}),(0,r.jsx)("path",{fill:"#FFF",strokeWidth:"21.455",strokeLinecap:"round",d:"m372.06 183.94c-77.019-0.00001-139.47 62.45-139.47 139.47v289.62c0 77.019 62.45 139.47 139.47 139.47 77.019 0 139.44-62.45 139.44-139.47v-289.62c0-77.02-62.42-139.47-139.44-139.47z"})]})});var L=function(e){(0,h.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).requested=!1,e.intransigent=!0,e}return(0,f.Z)(n,[{key:"beginRecording",value:function(){var e=this;if(!this.stream)throw new Error("Navigator stream not available");this.promise=new Promise(function(){var t=s(o().mark((function t(n,r){var i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.mediaRecorder=new MediaRecorder(e.stream,{mimeType:"audio/webm"}),e.mediaRecorder.addEventListener("dataavailable",(function(t){e.push(t.data)})),e.mediaRecorder.addEventListener("start",(function(){i=e.manager.getTime()})),e.mediaRecorder.addEventListener("stop",(function(){n([i,e.manager.getTime()])})),e.mediaRecorder.start();case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"pauseRecording",value:function(){this.mediaRecorder.pause()}},{key:"resumeRecording",value:function(){this.mediaRecorder.resume()}},{key:"endRecording",value:function(){var e=s(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mediaRecorder.stop(),e.abrupt("return",this.promise);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"finalizeRecording",value:function(e){return new Blob(e,{type:"audio/webm"})}},{key:"requestRecording",value:function(){var e=this;if(!this.requested){var t=function(){var n=s(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return window.removeEventListener("click",t),n.prev=1,n.next=4,navigator.mediaDevices.getUserMedia({audio:!0});case 4:e.stream=n.sent,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log("no recording allowed");case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();window.addEventListener("click",t),this.requested=!0}}}]),n}(x);new L;var R=function(e){(0,h.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.call(this)).duration=0,e}return(0,f.Z)(n,[{key:"beginRecording",value:function(){this.duration=0}},{key:"finalizeRecording",value:function(e){return E(e)}},{key:"capture",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.manager.getTime(),t=arguments.length>1?arguments[1]:void 0;this.duration,this.push([e-this.duration,t]),this.duration=e}}]),n}(x);function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;switch(typeof e){case"object":return e instanceof Array?e.map((function(e){return E(e,t)})):Object.fromEntries(Object.keys(e).map((function(n){return[n,E(e[n],t)]})));case"number":return parseFloat(e.toFixed(t));default:return e}}(0,r.jsx)("path",{fill:"#FFF",d:"M35.113 14.703a4.558 4.558 0 0 0-4.568 4.568v2.338h-11.29A13.146 13.146 0 0 0 6.082 34.787v37.018a13.142 13.142 0 0 0 13.173 13.172H80.74a13.147 13.147 0 0 0 13.178-13.172V34.787A13.146 13.146 0 0 0 80.74 21.61H69.455v-2.338a4.558 4.558 0 0 0-4.568-4.568H35.113ZM50 31.196c12.18 0 22.103 9.917 22.103 22.097 0 12.18-9.923 22.103-22.103 22.103-12.181 0-22.103-9.923-22.103-22.103 0-12.18 9.922-22.097 22.103-22.097Zm-30.073.835a4.59 4.59 0 0 1 4.59 4.59h.006a4.59 4.59 0 1 1-4.595-4.59ZM50 35.536a17.721 17.721 0 0 0-17.757 17.757A17.722 17.722 0 0 0 50 71.05a17.723 17.723 0 0 0 17.757-17.757A17.722 17.722 0 0 0 50 35.536Z"});var _=function(e){(0,h.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).requested=!1,e.intransigent=!0,e}return(0,f.Z)(n,[{key:"beginRecording",value:function(){var e=this;if(!this.stream)throw new Error("Navigator stream not available");this.promise=new Promise(function(){var t=s(o().mark((function t(n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.mediaRecorder=new MediaRecorder(e.stream,{mimeType:"video/webm"}),e.mediaRecorder.addEventListener("dataavailable",(function(t){e.push(t.data)})),e.mediaRecorder.addEventListener("start",(function(){r=e.manager.getTime()})),e.mediaRecorder.addEventListener("stop",(function(){n([r,e.manager.getTime()])})),e.mediaRecorder.start();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"pauseRecording",value:function(){this.mediaRecorder.pause()}},{key:"resumeRecording",value:function(){this.mediaRecorder.resume()}},{key:"endRecording",value:function(){var e=s(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mediaRecorder.stop(),e.abrupt("return",this.promise);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"finalizeRecording",value:function(e){return new Blob(e,{type:"video/webm"})}},{key:"requestRecording",value:function(){var e=this;if(!this.requested){var t=function(){var n=s(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return window.removeEventListener("click",t),n.prev=1,n.next=4,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 4:e.stream=n.sent,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log("no recording allowed");case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();window.addEventListener("click",t)}}}]),n}(x);new _},5916:function(e,t,n){n.d(t,{ak:function(){return i}});var r=n(7762);function i(e,t){var n,i=(0,r.Z)(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;e[o]=e[o].bind(e)}}catch(a){i.e(a)}finally{i.f()}}},6251:function(e,t,n){function r(e){return e.map((function(e){return e[0]})).reduce((function(e,t){return e+t}),0)}n.d(t,{k:function(){return r}})},9324:function(e,t,n){n.d(t,{T:function(){return v}});var r=n(5671),i=n(3144),o=n(7326),a=n(1120);function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=(0,a.Z)(e)););return e}function s(){return s="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=u(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},s.apply(this,arguments)}var c=n(9340),f=n(1129),l=n(4942),h=n(184),p=n(5475),d=n(5916),v=function(e){(0,c.Z)(n,e);var t=(0,f.Z)(n);function n(){var e;return(0,r.Z)(this,n),e=t.call(this),(0,l.Z)((0,o.Z)(e),"target",document.body),(0,d.ak)((0,o.Z)(e),["captureMouse"]),e}return(0,i.Z)(n,[{key:"beginRecording",value:function(){s((0,a.Z)(n.prototype),"beginRecording",this).call(this),document.body.addEventListener("mousemove",this.captureMouse)}},{key:"endRecording",value:function(){document.body.removeEventListener("mousemove",this.captureMouse)}},{key:"captureMouse",value:function(e){var t=this.manager.getTime();if(!this.manager.paused){var n=this.target.getBoundingClientRect(),r=n.left,i=n.top,o=n.height,a=n.width;this.capture(t,[(e.pageX-r)/a*100,(e.pageY-i)/o*100])}}},{key:"finalizeRecording",value:function(e){return(0,p.nN)(e,4)}}]),n}(p.Dn);(0,h.jsxs)("g",{children:[(0,h.jsx)("line",{x1:"0",x2:"100",y1:"50",y2:"50",stroke:"#FFF"}),(0,h.jsx)("line",{x1:"50",x2:"50",y1:"0",y2:"100",stroke:"#FFF"})]}),new v}}]);
//# sourceMappingURL=558.86cf1800.chunk.js.map