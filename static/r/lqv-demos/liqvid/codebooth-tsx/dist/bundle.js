
${0}

createRoot(document.querySelector("main")).render(<Component />)`,km=Am`<html>
<body>
  <main></main>
  
  <script crossorigin defer src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
  <script crossorigin defer src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
  <script defer>window.addEventListener("DOMContentLoaded", () => {${0}});</script>
</body>
</html>`;var Pm=r(258);function Fm(){const r=lm(),n=(0,t.useRef)();return(0,t.useEffect)((()=>{function e(){const e=function(e){const t={};if(!e.groups[e.activeGroup])return t;const{files:r}=e.groups[e.activeGroup];for(const n of r)t[n.filename]=n.view.state.doc.toString();return t}(r.getState());if(!("index.tsx"in e))return;const t=Tm(e["index.tsx"]),a={filename:"index.tsx",plugins:[["transform-modules-umd",{globals:{react:"React","react-dom":"ReactDOM"}}]],presets:["env","react","typescript"]};try{const{code:e}=Pm.transform(t,a);console.log(e),n.current.srcdoc=km(e)}catch(s){}}return e(),r.subscribe((e=>e.run),e)}),[r]),(0,e.jsx)("iframe",{className:"lqv-preview",ref:n,sandbox:"allow-popups allow-scripts",title:"TSX Preview"})}function Im(){return(0,e.jsxs)(um,{children:[(0,e.jsx)(hm,Object.assign({id:"replay"},{children:(0,e.jsx)(Rm,{content:"function Component() {\n  return <h1>Hello World!</h1>;\n}\n",extensions:[am,Bp({jsx:!0,typescript:!0})],filename:"index.tsx",replay:(t="code",new Promise(((e,r)=>{if(Qp[t])return e(Qp[t]);const n=document.querySelector(`link[data-name="${t}"][rel='preload'][type='application/json']`);return n?fetch(n.href).then((e=>e.json())).then((r=>{Qp[t]=r,e(r)})).catch(r):r(`JSON record "${t}" not found`)})))})})),(0,e.jsx)(Dm,{}),(0,e.jsx)(Fm,{}),(0,e.jsxs)(Sm,{children:[(0,e.jsx)(jm,{}),(0,e.jsx)(Cm,{})]})]});var t}const _m=new Ge({duration:100860});console.log("asdf"),ze.render((0,e.jsx)((function(){return(0,e.jsxs)(Ne,Object.assign({playback:_m,thumbs:{path:"./thumbs/%s.jpeg"}},{children:[(0,e.jsxs)($e,{children:[(0,e.jsx)("source",{src:"./audio.mp4",type:"audio/mp4"}),(0,e.jsx)("source",{src:"./audio.webm",type:"audio/webm"})]}),(0,e.jsx)(Im,{})]}))}),{}),document.querySelector("main"))})()})();