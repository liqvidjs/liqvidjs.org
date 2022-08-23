"use strict";(self.webpackChunkdemo_gsap_codebooth_html=self.webpackChunkdemo_gsap_codebooth_html||[]).push([[658],{9658:function(e,n,i){i.r(n),i.d(n,{default:function(){return X}});i(6046),i(4798),i(5406);var r=i(1450),t=i(4200),a=i(5865),o=i(7374),s=i(9072),c=i(9995),d=i(7762),u=i(1413),l=i(2982),h=i(4925),f=i(184),p=i(4294),g=i(2791),v=Symbol.for("@lqv/keymap");v in globalThis||(globalThis[v]=(0,g.createContext)(null));var y=globalThis[v];var b,x=i(3856),w=i(5671),m=i(3144),M={Control:"Ctrl",Alt:"Alt",Shift:"Shift",Meta:"Meta"},j={},S=(0,d.Z)(["AltGraph","CapsLock","FnLock","NumLock","ScrollLock","SymbolLock","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","PageDown","PageUp","CrSel","EraseEof","ExSel","ContextMenu","ZoomIn","ZoomOut","BrightnessDown","BrightnessUp","LogOff","PowerOff","PrintScreen","WakeUp","AllCandidates","CodeInput","FinalMode","GroupFirst","GroupLast","GroupNext","GroupPrevious","ModeChange","NextCandidate","NonConvert","PreviousCandidate","SingleCandidate","HangulMode","HanjaMode","JunjaMode","HiraganaKatakana","KanaMode","KanjiMode","ZenkakuHanaku","AppSwitch","CameraFocus","EndCall","GoBack","GoHome","HeadsetHook","LastNumberRedial","MannerMode","VoiceDial","ChannelDown","ChannelUp","MediaFastForward","MediaPause","MediaPlay","MediaPlayPause","MediaRecord","MediaRewind","MediaStop","MediaTrackNext","MediaTrackPrevious","AudioBalanceLeft","AudioBalanceRight","AudioBassDown","AudioBassBoostDown","AudioBassBoostToggle","AudioBassBoostUp","AudioBassUp","AudioFaderFront","AudioFaderRear","AudioSurroundModeNext","AudioTrebleDown","AudioTrebleUp","AudioVolumeDown","AudioVolumeMute","AudioVolumeUp","MicrophoneToggle","MicrophoneVolumeDown","MicrophoneVolumeMute","MicrophoneVolumeUp","TV","TVAntennaCable","TVAudioDescription","TVAudioDescriptionMixDown","TVAudioDescriptionMixUp","TVContentsMenu","TVDataService","TVInput","TVMediaContext","TVNetwork","TVNumberEntry","TVPower","TVRadioService","TVSatellite","TVSatelliteBS","TVSatelliteCS","TVSatelliteToggle","TVTerrestrialAnalog","TVTerrestrialDigital","TVTimer","AVRInput","AVRPower","ClosedCaptionToggle","DisplaySwap","DVR","GuideNextDay","GuidePreviousDay","InstantReplay","ListProgram","LiveContent","MediaApps","MediaAudioTrack","MediaLast","MediaSkipBackward","MediaSkipForward","MediaStepBackward","MediaStepForward","MediaTopMenu","NavigateIn","NavigateNext","NavigateOut","NavigatePrevious","NextFavoriteChannel","NextUserProfile","OnDemand","PinPDown","PinPMove","PinPToggle","PinPUp","PlaySpeedDown","PlaySpeedReset","PlaySpeedUp","RandomToggle","RcLowBattery","RecordSpeedNext","RfBypass","ScanChannelsToggle","ScreenModeNext","SplitScreenToggle","STBInput","STBPower","VideoModeNext","ZoomToggle","SpeechCorrectionList","SpeechInputToggle","SpellCheck","MailForward","MailReply","MailSend","LaunchCalculator","LaunchCalendar","LaunchContacts","LaunchMail","LaunchMediaPlayer","LaunchMusicPlayer","LaunchMyComputer","LaunchPhone","LaunchScreenSaver","LaunchSpreadsheet","LaunchWebBrowser","LaunchWebCam","LaunchWordProcessor","BrowserBack","BrowserFavorites","BrowserForward","BrowserHome","BrowserRefresh","BrowserSearch","BrowserStop"]);try{for(S.s();!(b=S.n()).done;){var k=b.value;j[k.toLowerCase()]=k}}catch(Y){S.e(Y)}finally{S.f()}var C=Object.keys(M).map((function(e){return M[e]})),T=["Backspace","Enter","Space","Tab"],_=function(){function e(){(0,w.Z)(this,e),this.__bindings={}}return(0,m.Z)(e,[{key:"bind",value:function(n,i){if(n.indexOf(",")>-1){var r,t=(0,d.Z)(n.split(","));try{for(t.s();!(r=t.n()).done;){var a=r.value;this.bind(a,i)}}catch(Y){t.e(Y)}finally{t.f()}}else n=e.normalize(n),this.__bindings.hasOwnProperty(n)||(this.__bindings[n]=[]),this.__bindings[n].push(i)}},{key:"unbind",value:function(n,i){if(n.indexOf(",")>-1){var r,t=(0,d.Z)(n.split(","));try{for(t.s();!(r=t.n()).done;){var a=r.value;this.unbind(a,i)}}catch(Y){t.e(Y)}finally{t.f()}}else{if(n=e.normalize(n),!this.__bindings.hasOwnProperty(n))throw new Error("".concat(n," is not bound"));var o,s=this.__bindings[n].indexOf(i);if(s<0)throw new Error("".concat(n," is not bound to ").concat(null!==(o=i.name)&&void 0!==o?o:"callback"));this.__bindings[n].splice(s,1),0===this.__bindings[n].length&&delete this.__bindings[n]}}},{key:"getKeys",value:function(){return Object.keys(this.__bindings)}},{key:"getHandlers",value:function(e){return this.__bindings.hasOwnProperty(e)?this.__bindings[e].slice():[]}},{key:"handle",value:function(n){var i=e.identify(n);if(this.__bindings[i]||this.__bindings["*"]){if(this.__bindings[i]){n.preventDefault();var r,t=(0,d.Z)(this.__bindings[i]);try{for(t.s();!(r=t.n()).done;){(0,r.value)(n)}}catch(Y){t.e(Y)}finally{t.f()}}if(this.__bindings["*"]){var a,o=(0,d.Z)(this.__bindings["*"]);try{for(o.s();!(a=o.n()).done;){(0,a.value)(n)}}catch(Y){o.e(Y)}finally{o.f()}}}}}],[{key:"identify",value:function(e){var n=[];for(var i in M)e.getModifierState(i)&&n.push(M[i]);return e.key in M||(e.code.startsWith("Digit")?n.push(e.code.slice(5)):e.code.startsWith("Key")?n.push(e.code.slice(3)):T.includes(e.code)?n.push(e.code):n.push(e.key)),n.join("+")}},{key:"normalize",value:function(e){return e.split("+").map((function(e){var n=e.toLowerCase();return""===e?"":j[n]?j[n]:e[0].toUpperCase()+n.slice(1)})).sort((function(e,n){return C.includes(e)?C.includes(n)?C.indexOf(e)-C.indexOf(n):-1:C.includes(n)?1:function(e,n){if(e<n)return-1;if(e===n)return 0;return 1}(e,n)})).join("+")}}]),e}();function A(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.map((function(n){var i=P(n),r=new KeyboardEvent("keydown");return{key:n,run:function(){var n,t=e.getHandlers(i),a=(0,d.Z)(t);try{for(a.s();!(n=a.n()).done;){(0,n.value)(r)}}catch(Y){a.e(Y)}finally{a.f()}return!1}}}))}var L="MacIntel"===navigator.platform;function P(e){return e=(e=e.replace("Mod",L?"Meta":"Ctrl")).replace(/-/g,"+"),_.normalize(e)}var N=i(480),B=i(204),V=i(5119),R=["captureKeys","extensions","group","passKeys"],D=function(e){var n=e.captureKeys,i=void 0===n?{"Mod-Enter":"run","Mod-K":"clear","Mod-L":"clear"}:n,r=e.extensions,t=void 0===r?[]:r,a=e.group,o=void 0===a?"default":a,s=e.passKeys,c=void 0===s?["Mod-Alt-2","Mod-Alt-3","Mod-Alt-4"]:s,v=(0,h.Z)(e,R),b=(0,B.tV)(),w=(0,g.useContext)(y),m=(0,g.useMemo)((function(){return w?[p.$f.of(A(w,c))].concat((0,l.Z)(t)):t}),[c]);return(0,g.useEffect)((function(){var n=b.getState(),r=n.groups[o].files.find((function(n){return n.filename===e.filename})).view;r.dispatch({effects:N.Nl.reconfigure([].concat((0,l.Z)(N.Nl.get(r.state)),[[n.recorder.extension(i)]]))}),function(e){var n=0;e:for(var i=0,r=Object.values(e.groups);i<r.length;i++){var t,a=r[i],o=(0,d.Z)(a.files);try{for(o.s();!(t=o.n()).done;){var s=t.value.view,c=N.Nl.get(s.state);if(c instanceof Array&&c.length>0&&++n>1)break e}}catch(Y){o.e(Y)}finally{o.f()}}if(n<2)return;if(e.recorder[Z])return;var u=e.recorder.beginRecording.bind(e.recorder);e.recorder.beginRecording=function(){u.apply(void 0,arguments),e.recorder.capture(0,x.P1+e.getActiveFile().filename)},e.recorder[Z]=!0}(n)}),[]),(0,f.jsx)(V.M,(0,u.Z)({content:e.content,extensions:m},v))},Z=Symbol();var O=i(872),U=i(9493),z=i(971),F=i(5016),E=i(7814),H=i(885),K=i(4107);function G(e){return e.map((function(e){return e[0]})).reduce((function(e,n){return e+n}),0)}var I=i(8884),W=new K.Jc,q=new K.hn;q.requestRecording();var J=new I.U;function Q(){var e=(0,g.useState)(!1),n=(0,H.Z)(e,2),i=n[0],r=n[1],t=(0,g.useState)(),a=(0,H.Z)(t,2),o=a[0],s=a[1];(0,g.useEffect)((function(){if(o){var e=function(e){return e.returnValue="You have recording data"};return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}}),[o]);var c=(0,g.useCallback)((function(){i?W.endRecording().then((function(e){s(e)})):W.beginRecording({audio:q,coding:J}),r(!i)}),[i]);return(0,f.jsxs)("div",{className:"lqv-recording",children:[(0,f.jsx)("h2",{children:"Recording"}),(0,f.jsxs)("button",{"aria-pressed":i,onClick:c,children:[(0,f.jsx)("svg",{"aria-hidden":"true",viewBox:"-2 -2 4 4",children:(0,f.jsx)("circle",{fill:i?"red":"#aaa",cx:"0",cy:"0",r:"1"})}),"Record"]}),o&&(0,f.jsxs)("output",{children:[(0,f.jsxs)("p",{children:["Duration: ",(0,f.jsx)("code",{children:G(o.coding)/1e3})]}),(0,f.jsxs)("p",{children:["Save this as ",(0,f.jsx)("code",{children:"public/audio.webm"}),":",(0,f.jsx)("a",{download:"audio.webm",href:URL.createObjectURL(o.audio),children:"Download Audio"})]}),(0,f.jsxs)("p",{children:["Copy this into ",(0,f.jsx)("code",{children:"public/recordings.json"}),":"]}),(0,f.jsx)("textarea",{readOnly:!0,value:JSON.stringify(o.coding)})]})]})}var $=(0,r.nF)(t.$d);var X=function(){return(0,f.jsx)("div",{className:"App",children:(0,f.jsxs)(a.AL,{recorder:J,children:[(0,f.jsxs)("section",{className:"lqv-sidebar",children:[(0,f.jsx)("h2",{children:"Files"}),(0,f.jsx)(o.a,{}),(0,f.jsx)("h2",{children:"Code"}),(0,f.jsxs)(s.EK,{children:[(0,f.jsx)(s.zb,{}),(0,f.jsx)(s.UZ,{})]}),(0,f.jsx)(Q,{})]}),Object.keys(E.Q).map((function(e){return(0,f.jsx)(c.z,{filename:e,children:(0,f.jsx)(D,{content:E.Q[e],extensions:[N.Xy,(0,z.q5)(e),$]})},e)})),(0,f.jsx)(O.t,{min:.1,max:.3}),(0,f.jsx)(O.t,{dir:"ns",min:.04,max:.5}),(0,f.jsx)(F.G,{title:"Preview",children:(0,f.jsx)(z.HP,{})}),(0,f.jsx)(U.M,{})]})})}},5016:function(e,n,i){i.d(n,{G:function(){return c}});var r=i(1413),t=i(2791),a=i(5916),o=i(6807),s=i(184);function c(e){var n=(0,t.useRef)(),i=(0,t.useRef)(),c=(0,t.useRef)({x:0,y:0}),d=(0,t.useMemo)((function(){return(0,o.dz)((function(e,n){var r=(0,a.uZ)(0,n.x-c.current.x,window.innerWidth-i.current.offsetWidth)/window.innerWidth,t=(0,a.uZ)(0,n.y-c.current.y,window.innerHeight-i.current.offsetHeight)/window.innerHeight;Object.assign(i.current.style,{left:"".concat(100*r,"%"),top:"".concat(100*t,"%")})}),(function(e,n){e.preventDefault();var r=i.current.getBoundingClientRect();c.current.x=n.x-r.left,c.current.y=n.y-r.top,document.body.classList.add("dragging")}),(function(){return document.body.classList.remove("dragging")}))}),[]),u=(0,t.useMemo)((function(){return(0,o.dz)((function(e,r){var t=r.dx,a=r.dy;e.preventDefault();var o=i.current.getBoundingClientRect(),s=o.height,c=o.width;n.current.includes("e")&&(c+=t),n.current.includes("s")&&(s+=a),Object.assign(i.current.style,{height:"".concat(s,"px"),width:"".concat(c,"px")})}),(function(e){n.current=e.target.className.match(/ui-resizable-([se]+)/)[1],document.body.classList.add("resizing")}),(function(){return document.body.classList.remove("resizing")}))}),[]);return(0,s.jsxs)("aside",{className:"popup",ref:i,children:[e.title&&(0,s.jsx)("header",(0,r.Z)((0,r.Z)({className:"draggable"},d),{},{children:e.title})),(0,s.jsx)("div",(0,r.Z)({className:"ui-resizable-handle ui-resizable-e"},u)),(0,s.jsx)("div",(0,r.Z)({className:"ui-resizable-handle ui-resizable-s"},u)),(0,s.jsx)("div",(0,r.Z)({className:"ui-resizable-handle ui-resizable-se"},u)),(0,s.jsx)("div",{className:"popup-content",children:e.children})]})}},7814:function(e,n,i){i.d(n,{Q:function(){return r}});var r={"index.html":'<html>\n<head>\n  <link href="style.css" rel="stylesheet"/>\n</head>\n<body>\n  <canvas></canvas>\n  <script src="script.js"><\/script>\n</body>\n</html>',"style.css":"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body, canvas {\n  height: 100%;\n  width: 100%;\n}\n","script.js":'const canvas = document.querySelector("canvas");\nconst ctx = canvas.getContext("2d");\n'}},6046:function(){},4798:function(){},5406:function(){}}]);
//# sourceMappingURL=658.2823ef92.chunk.js.map