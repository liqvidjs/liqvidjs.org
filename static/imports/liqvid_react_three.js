!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactThreeFiber"),require("Liqvid")):"function"==typeof define&&define.amd?define(["React","ReactThreeFiber","Liqvid"],t):"object"==typeof exports?exports.Liqvid_ReactThree=t(require("React"),require("ReactThreeFiber"),require("Liqvid")):e.Liqvid_ReactThree=t(e.React,e.ReactThreeFiber,e.Liqvid)}(self,((e,t,r)=>(()=>{"use strict";var n={830:(e,t,r)=>{var n=r(24),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,f=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(f=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:a.current}}t.jsx=u,t.jsxs=u},293:(e,t,r)=>{e.exports=r(830)},290:e=>{e.exports=r},24:t=>{t.exports=e},726:e=>{e.exports=t}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{i.r(s),i.d(s,{Canvas:()=>G});var e,t=i(293),r=[],n="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(e||(e={}));var o,a=function(e){return Object.freeze(e)},c=function(e,t){this.inlineSize=e,this.blockSize=t,a(this)},u=function(){function e(e,t,r,n){return this.x=e,this.y=t,this.width=r,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,a(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),f=function(e){return e instanceof SVGElement&&"getBBox"in e},d=function(e){if(f(e)){var t=e.getBBox(),r=t.width,n=t.height;return!r&&!n}var o=e,i=o.offsetWidth,s=o.offsetHeight;return!(i||s||e.getClientRects().length)},h=function(e){var t,r;if(e instanceof Element)return!0;var n=null===(r=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===r?void 0:r.defaultView;return!!(n&&e instanceof n.Element)},l="undefined"!=typeof window?window:{},v=new WeakMap,p=/auto|scroll/,b=/^tb|vertical/,g=/msie|trident/i.test(l.navigator&&l.navigator.userAgent),y=function(e){return parseFloat(e||"0")},x=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),new c((r?t:e)||0,(r?e:t)||0)},m=a({devicePixelContentBoxSize:x(),borderBoxSize:x(),contentBoxSize:x(),contentRect:new u(0,0,0,0)}),w=function(e,t){if(void 0===t&&(t=!1),v.has(e)&&!t)return v.get(e);if(d(e))return v.set(e,m),m;var r=getComputedStyle(e),n=f(e)&&e.ownerSVGElement&&e.getBBox(),o=!g&&"border-box"===r.boxSizing,i=b.test(r.writingMode||""),s=!n&&p.test(r.overflowY||""),c=!n&&p.test(r.overflowX||""),h=n?0:y(r.paddingTop),l=n?0:y(r.paddingRight),w=n?0:y(r.paddingBottom),E=n?0:y(r.paddingLeft),T=n?0:y(r.borderTopWidth),R=n?0:y(r.borderRightWidth),S=n?0:y(r.borderBottomWidth),O=E+l,z=h+w,B=(n?0:y(r.borderLeftWidth))+R,_=T+S,C=c?e.offsetHeight-_-e.clientHeight:0,k=s?e.offsetWidth-B-e.clientWidth:0,P=o?O+B:0,L=o?z+_:0,N=n?n.width:y(r.width)-P-k,q=n?n.height:y(r.height)-L-C,A=N+O+k+B,D=q+z+C+_,j=a({devicePixelContentBoxSize:x(Math.round(N*devicePixelRatio),Math.round(q*devicePixelRatio),i),borderBoxSize:x(A,D,i),contentBoxSize:x(N,q,i),contentRect:new u(E,h,N,q)});return v.set(e,j),j},E=function(t,r,n){var o=w(t,n),i=o.borderBoxSize,s=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(r){case e.DEVICE_PIXEL_CONTENT_BOX:return a;case e.BORDER_BOX:return i;default:return s}},T=function(e){var t=w(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=a([t.borderBoxSize]),this.contentBoxSize=a([t.contentBoxSize]),this.devicePixelContentBoxSize=a([t.devicePixelContentBoxSize])},R=function(e){if(d(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},S=function(){var e=1/0,t=[];r.forEach((function(r){if(0!==r.activeTargets.length){var n=[];r.activeTargets.forEach((function(t){var r=new T(t.target),o=R(t.target);n.push(r),t.lastReportedSize=E(t.target,t.observedBox),o<e&&(e=o)})),t.push((function(){r.callback.call(r.observer,n,r.observer)})),r.activeTargets.splice(0,r.activeTargets.length)}}));for(var n=0,o=t;n<o.length;n++){(0,o[n])()}return e},O=function(e){r.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(r){r.isActive()&&(R(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))}))}))},z=function(){var e,t=0;for(O(t);r.some((function(e){return e.activeTargets.length>0}));)t=S(),O(t);return r.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:n}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=n),window.dispatchEvent(e)),t>0},B=[],_=function(e){if(!o){var t=0,r=document.createTextNode("");new MutationObserver((function(){return B.splice(0).forEach((function(e){return e()}))})).observe(r,{characterData:!0}),o=function(){r.textContent=""+(t?t--:t++)}}B.push(e),o()},C=0,k={attributes:!0,characterData:!0,childList:!0,subtree:!0},P=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],L=function(e){return void 0===e&&(e=0),Date.now()+e},N=!1,q=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!N){N=!0;var r,n=L(e);r=function(){var r=!1;try{r=z()}finally{if(N=!1,e=n-L(),!C)return;r?t.run(1e3):e>0?t.run(e):t.start()}},_((function(){requestAnimationFrame(r)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,k)};document.body?t():l.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),P.forEach((function(t){return l.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),P.forEach((function(t){return l.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),A=function(e){!C&&e>0&&q.start(),!(C+=e)&&q.stop()},D=function(){function t(t,r){this.target=t,this.observedBox=r||e.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var e,t=E(this.target,this.observedBox,!0);return e=this.target,f(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},t}(),j=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},F=new WeakMap,M=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},I=function(){function e(){}return e.connect=function(e,t){var r=new j(e,t);F.set(e,r)},e.observe=function(e,t,n){var o=F.get(e),i=0===o.observationTargets.length;M(o.observationTargets,t)<0&&(i&&r.push(o),o.observationTargets.push(new D(t,n&&n.box)),A(1),q.schedule())},e.unobserve=function(e,t){var n=F.get(e),o=M(n.observationTargets,t),i=1===n.observationTargets.length;o>=0&&(i&&r.splice(r.indexOf(n),1),n.observationTargets.splice(o,1),A(-1))},e.disconnect=function(e){var t=this,r=F.get(e);r.observationTargets.slice().forEach((function(r){return t.unobserve(e,r.target)})),r.activeTargets.splice(0,r.activeTargets.length)},e}(),W=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");I.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!h(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");I.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!h(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");I.unobserve(this,e)},e.prototype.disconnect=function(){I.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}(),X=i(24);var V=i(726),U=i(290);function G(e){const r=function(...e){const t=X.useRef([]);return t.current=e.map((e=>X.useContext(e))),X.useMemo((()=>({children:r})=>e.reduceRight(((e,r,n)=>X.createElement(r.Provider,{value:t.current[n],children:e})),r)),[])}(U.Player.Context,U.PlaybackContext,U.KeymapContext);return(0,t.jsx)(V.Canvas,{resize:{polyfill:W},...e,children:(0,t.jsxs)(r,{children:[(0,t.jsx)(H,{...e}),e.children]})})}function H(e){const{gl:t}=(0,V.useThree)();return(0,X.useEffect)((()=>{const r=e["data-affords"]??"click keys(ArrowUp,ArrowDown,ArrowLeft,ArrowRight)";r&&t.domElement.setAttribute("data-affords",r),t.domElement.style.touchAction="none"}),[]),null}})(),s})()));