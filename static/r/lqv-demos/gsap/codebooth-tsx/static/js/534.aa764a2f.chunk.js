(self.webpackChunkdemo_gsap_codebooth_html=self.webpackChunkdemo_gsap_codebooth_html||[]).push([[534],{5380:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=5380,e.exports=n},8817:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Z}});r(6046),r(4798),r(5406);var t=r(8948),i=r(1450),c=r(4200),s=r(480),o=r(5865),a=r(9072),u=r(9995),d=r(6882),l=r(872),f=r(5016),h=r(7814),p=r(252),v=r(885),x=r(4107),m=r(6251),g=r(8884),j=r(2791),b=r(184),w=new x.Jc,y=new x.hn;y.requestRecording();var R=new g.U;function N(){var e=(0,j.useState)(!1),n=(0,v.Z)(e,2),r=n[0],t=n[1],i=(0,j.useState)(),c=(0,v.Z)(i,2),s=c[0],o=c[1];(0,j.useEffect)((function(){if(s){var e=function(e){return e.returnValue="You have recording data"};return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}}),[s]);var a=(0,j.useCallback)((function(){r?w.endRecording().then((function(e){o(e)})):w.beginRecording({audio:y,coding:R}),t(!r)}),[r]);return(0,b.jsxs)("div",{className:"lqv-recording",children:[(0,b.jsx)("h2",{children:"Recording"}),(0,b.jsxs)("button",{"aria-pressed":r,onClick:a,children:[(0,b.jsx)("svg",{"aria-hidden":"true",viewBox:"-2 -2 4 4",children:(0,b.jsx)("circle",{fill:r?"red":"#aaa",cx:"0",cy:"0",r:"1"})}),"Record"]}),s&&(0,b.jsxs)("output",{children:[(0,b.jsxs)("p",{children:["Duration: ",(0,b.jsx)("code",{children:(0,m.k)(s.coding)/1e3})]}),(0,b.jsxs)("p",{children:["Save this as ",(0,b.jsx)("code",{children:"public/audio.webm"}),":",(0,b.jsx)("a",{download:"audio.webm",href:URL.createObjectURL(s.audio),children:"Download Audio"})]}),(0,b.jsxs)("p",{children:["Copy this into ",(0,b.jsx)("code",{children:"public/recordings.json"}),":"]}),(0,b.jsx)("textarea",{readOnly:!0,value:JSON.stringify(s.coding)})]})]})}var z=[s.Xy,(0,t.eJ)({jsx:!0,typescript:!0}),(0,i.nF)(c.$d)];var Z=function(){return(0,b.jsx)("div",{className:"App",children:(0,b.jsxs)(o.AL,{recorder:R,children:[(0,b.jsxs)("section",{className:"lqv-sidebar",children:[(0,b.jsx)("h2",{children:"Code"}),(0,b.jsxs)(a.EK,{children:[(0,b.jsx)(a.zb,{}),(0,b.jsx)(a.UZ,{})]}),(0,b.jsx)(N,{})]}),(0,b.jsx)(u.z,{filename:"index.tsx",children:(0,b.jsx)(d.W,{content:h.tP,extensions:z})}),(0,b.jsx)(l.t,{min:.1,max:.3}),(0,b.jsx)(f.G,{title:"Preview",children:(0,b.jsx)(p.M,{})})]})})}},252:function(e,n,r){"use strict";r.d(n,{M:function(){return u}});var t=r(7762),i=r(1610),c=r(204),s=r(2791),o=r(7814),a=r(184);function u(){var e=(0,c.tV)(),n=(0,s.useRef)();return(0,s.useEffect)((function(){function r(){var r=function(e){var n={};if(!e.groups[e.activeGroup])return n;var r,i=e.groups[e.activeGroup].files,c=(0,t.Z)(i);try{for(c.s();!(r=c.n()).done;){var s=r.value;n[s.filename]=s.view.state.doc.toString()}}catch(o){c.e(o)}finally{c.f()}return n}(e.getState());if("index.tsx"in r){var c=(0,o.KE)(r["index.tsx"]);try{var s=i.transform(c,{filename:"index.tsx",plugins:[["transform-modules-umd",{globals:{react:"React","react-dom":"ReactDOM"}}]],presets:["env","react","typescript"]}).code;console.log(s),n.current.srcdoc=(0,o.H9)(s)}catch(a){}}}return r(),e.subscribe((function(e){return e.run}),r)}),[e]),(0,a.jsx)("iframe",{className:"lqv-preview",ref:n,sandbox:"allow-popups allow-scripts",title:"TSX Preview"})}},5016:function(e,n,r){"use strict";r.d(n,{G:function(){return a}});var t=r(1413),i=r(2791),c=r(5916),s=r(6807),o=r(184);function a(e){var n=(0,i.useRef)(),r=(0,i.useRef)(),a=(0,i.useRef)({x:0,y:0}),u=(0,i.useMemo)((function(){return(0,s.dz)((function(e,n){var t=(0,c.uZ)(0,n.x-a.current.x,window.innerWidth-r.current.offsetWidth)/window.innerWidth,i=(0,c.uZ)(0,n.y-a.current.y,window.innerHeight-r.current.offsetHeight)/window.innerHeight;Object.assign(r.current.style,{left:"".concat(100*t,"%"),top:"".concat(100*i,"%")})}),(function(e,n){e.preventDefault();var t=r.current.getBoundingClientRect();a.current.x=n.x-t.left,a.current.y=n.y-t.top,document.body.classList.add("dragging")}),(function(){return document.body.classList.remove("dragging")}))}),[]),d=(0,i.useMemo)((function(){return(0,s.dz)((function(e,t){var i=t.dx,c=t.dy;e.preventDefault();var s=r.current.getBoundingClientRect(),o=s.height,a=s.width;n.current.includes("e")&&(a+=i),n.current.includes("s")&&(o+=c),Object.assign(r.current.style,{height:"".concat(o,"px"),width:"".concat(a,"px")})}),(function(e){n.current=e.target.className.match(/ui-resizable-([se]+)/)[1],document.body.classList.add("resizing")}),(function(){return document.body.classList.remove("resizing")}))}),[]);return(0,o.jsxs)("aside",{className:"popup",ref:r,children:[e.title&&(0,o.jsx)("header",(0,t.Z)((0,t.Z)({className:"draggable"},u),{},{children:e.title})),(0,o.jsx)("div",(0,t.Z)({className:"ui-resizable-handle ui-resizable-e"},d)),(0,o.jsx)("div",(0,t.Z)({className:"ui-resizable-handle ui-resizable-s"},d)),(0,o.jsx)("div",(0,t.Z)({className:"ui-resizable-handle ui-resizable-se"},d)),(0,o.jsx)("div",{className:"popup-content",children:e.children})]})}},7814:function(e,n,r){"use strict";r.d(n,{H9:function(){return u},KE:function(){return a},tP:function(){return o}});var t,i,c=r(168);function s(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];return function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];var c=[e[0]];return r.forEach((function(n,r){c.push(t[n],e[r+1])})),c.join("")}}var o="function Component() {\n  return <h1>Hello World!</h1>;\n}\n",a=s(t||(t=(0,c.Z)(["const {createRoot} = ReactDOM;\n\n",'\n\ncreateRoot(document.querySelector("main")).render(<Component />)'])),0),u=s(i||(i=(0,c.Z)(['<html>\n<body>\n  <main></main>\n  \n  <script crossorigin defer src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"><\/script>\n  <script crossorigin defer src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"><\/script>\n  <script defer>window.addEventListener("DOMContentLoaded", () => {',"});<\/script>\n</body>\n</html>"])),0)},6046:function(){},4798:function(){},5406:function(){}}]);
//# sourceMappingURL=534.aa764a2f.chunk.js.map