"use strict";(self.webpackChunkdemo_gsap_codebooth_python=self.webpackChunkdemo_gsap_codebooth_python||[]).push([[272],{272:function(e,n,i){i.r(n),i.d(n,{default:function(){return ie}});i(6046),i(4798),i(5406);var r=i(2292),t=i(1450),o=i(4200),a=i(5865),s=i(4942),u=i(1413),c=i(885),l=i(184),d=i(6807),f=i(3856),p=i(2791),h=i(2737),v=i(204),g=i(8401),y=function(e){var n;return[e.activeGroup,null===(n=e.groups[e.activeGroup])||void 0===n?void 0:n.activeFile]};function b(){var e=(0,v.tV)(),n=(0,h.oR)(e,y),i=(0,c.Z)(n,2),r=i[0],t=i[1],o=e.getState().groups[r],a=e.getState().recorder,b=(0,p.useCallback)((function(n){var i,r,t;null!==a&&void 0!==a&&null!==(i=a.manager)&&void 0!==i&&i.active&&a.capture(void 0,f.P1+n),e.setState((function(e){return{groups:(0,u.Z)((0,u.Z)({},e.groups),{},(0,s.Z)({},e.activeGroup,(0,u.Z)((0,u.Z)({},e.groups[e.activeGroup]),{},{activeFile:n})))}}));var o=e.getState(),c=null===(r=o.groups[o.activeGroup])||void 0===r||null===(t=r.files.find((function(e){return e.filename===n})))||void 0===t?void 0:t.view;c&&setTimeout((function(){return c.focus()}))}),[a]),w=(0,p.useMemo)((function(){return(0,d.nx)((function(e){b(e.currentTarget.textContent.trim())}))}),[b]);return(0,p.useEffect)((function(){for(var n={},i=function(i){n["Mod-".concat(i)]={key:"Mod-".concat(i),run:function(){var n=e.getState(),r=n.groups[n.activeGroup];return!(r.files.length<i)&&(b(r.files[i-1].filename),!0)}}},r=1;r<=9;++r)i(r);e.setState((function(e){return{classNames:e.classNames.concat("multifile"),shortcuts:(0,u.Z)((0,u.Z)({},e.shortcuts),n)}}))}),[]),o?(0,l.jsx)("div",{className:"lqv-file-tabs",role:"tablist",children:o.files.map((function(e){var n=e.filename;return(0,l.jsx)("button",(0,u.Z)((0,u.Z)({className:"lqv-filetype-".concat(x(n)),id:g.r.fileTab({filename:n,group:r}),"aria-controls":g.r.editorPanel({filename:n,group:r}),"aria-selected":t===n,role:"tab"},w),{},{children:n}),n)}))}):null}function x(e){return e.slice(e.lastIndexOf(".")+1)}var w=i(9072),m=i(9995),M=i(7762),S=i(2982),T=i(4925),k=i(4294),C=Symbol.for("@lqv/keymap");C in globalThis||(globalThis[C]=(0,p.createContext)(null));var j=globalThis[C];var _,A=i(5671),P=i(3144),L={Control:"Ctrl",Alt:"Alt",Shift:"Shift",Meta:"Meta"},V={},B=(0,M.Z)(["AltGraph","CapsLock","FnLock","NumLock","ScrollLock","SymbolLock","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","PageDown","PageUp","CrSel","EraseEof","ExSel","ContextMenu","ZoomIn","ZoomOut","BrightnessDown","BrightnessUp","LogOff","PowerOff","PrintScreen","WakeUp","AllCandidates","CodeInput","FinalMode","GroupFirst","GroupLast","GroupNext","GroupPrevious","ModeChange","NextCandidate","NonConvert","PreviousCandidate","SingleCandidate","HangulMode","HanjaMode","JunjaMode","HiraganaKatakana","KanaMode","KanjiMode","ZenkakuHanaku","AppSwitch","CameraFocus","EndCall","GoBack","GoHome","HeadsetHook","LastNumberRedial","MannerMode","VoiceDial","ChannelDown","ChannelUp","MediaFastForward","MediaPause","MediaPlay","MediaPlayPause","MediaRecord","MediaRewind","MediaStop","MediaTrackNext","MediaTrackPrevious","AudioBalanceLeft","AudioBalanceRight","AudioBassDown","AudioBassBoostDown","AudioBassBoostToggle","AudioBassBoostUp","AudioBassUp","AudioFaderFront","AudioFaderRear","AudioSurroundModeNext","AudioTrebleDown","AudioTrebleUp","AudioVolumeDown","AudioVolumeMute","AudioVolumeUp","MicrophoneToggle","MicrophoneVolumeDown","MicrophoneVolumeMute","MicrophoneVolumeUp","TV","TVAntennaCable","TVAudioDescription","TVAudioDescriptionMixDown","TVAudioDescriptionMixUp","TVContentsMenu","TVDataService","TVInput","TVMediaContext","TVNetwork","TVNumberEntry","TVPower","TVRadioService","TVSatellite","TVSatelliteBS","TVSatelliteCS","TVSatelliteToggle","TVTerrestrialAnalog","TVTerrestrialDigital","TVTimer","AVRInput","AVRPower","ClosedCaptionToggle","DisplaySwap","DVR","GuideNextDay","GuidePreviousDay","InstantReplay","ListProgram","LiveContent","MediaApps","MediaAudioTrack","MediaLast","MediaSkipBackward","MediaSkipForward","MediaStepBackward","MediaStepForward","MediaTopMenu","NavigateIn","NavigateNext","NavigateOut","NavigatePrevious","NextFavoriteChannel","NextUserProfile","OnDemand","PinPDown","PinPMove","PinPToggle","PinPUp","PlaySpeedDown","PlaySpeedReset","PlaySpeedUp","RandomToggle","RcLowBattery","RecordSpeedNext","RfBypass","ScanChannelsToggle","ScreenModeNext","SplitScreenToggle","STBInput","STBPower","VideoModeNext","ZoomToggle","SpeechCorrectionList","SpeechInputToggle","SpellCheck","MailForward","MailReply","MailSend","LaunchCalculator","LaunchCalendar","LaunchContacts","LaunchMail","LaunchMediaPlayer","LaunchMusicPlayer","LaunchMyComputer","LaunchPhone","LaunchScreenSaver","LaunchSpreadsheet","LaunchWebBrowser","LaunchWebCam","LaunchWordProcessor","BrowserBack","BrowserFavorites","BrowserForward","BrowserHome","BrowserRefresh","BrowserSearch","BrowserStop"]);try{for(B.s();!(_=B.n()).done;){var N=_.value;V[N.toLowerCase()]=N}}catch(re){B.e(re)}finally{B.f()}var Z=Object.keys(L).map((function(e){return L[e]})),R=["Backspace","Enter","Space","Tab"],D=function(){function e(){(0,A.Z)(this,e),this.__bindings={}}return(0,P.Z)(e,[{key:"bind",value:function(n,i){if(n.indexOf(",")>-1){var r,t=(0,M.Z)(n.split(","));try{for(t.s();!(r=t.n()).done;){var o=r.value;this.bind(o,i)}}catch(re){t.e(re)}finally{t.f()}}else n=e.normalize(n),this.__bindings.hasOwnProperty(n)||(this.__bindings[n]=[]),this.__bindings[n].push(i)}},{key:"unbind",value:function(n,i){if(n.indexOf(",")>-1){var r,t=(0,M.Z)(n.split(","));try{for(t.s();!(r=t.n()).done;){var o=r.value;this.unbind(o,i)}}catch(re){t.e(re)}finally{t.f()}}else{if(n=e.normalize(n),!this.__bindings.hasOwnProperty(n))throw new Error("".concat(n," is not bound"));var a,s=this.__bindings[n].indexOf(i);if(s<0)throw new Error("".concat(n," is not bound to ").concat(null!==(a=i.name)&&void 0!==a?a:"callback"));this.__bindings[n].splice(s,1),0===this.__bindings[n].length&&delete this.__bindings[n]}}},{key:"getKeys",value:function(){return Object.keys(this.__bindings)}},{key:"getHandlers",value:function(e){return this.__bindings.hasOwnProperty(e)?this.__bindings[e].slice():[]}},{key:"handle",value:function(n){var i=e.identify(n);if(this.__bindings[i]||this.__bindings["*"]){if(this.__bindings[i]){n.preventDefault();var r,t=(0,M.Z)(this.__bindings[i]);try{for(t.s();!(r=t.n()).done;){(0,r.value)(n)}}catch(re){t.e(re)}finally{t.f()}}if(this.__bindings["*"]){var o,a=(0,M.Z)(this.__bindings["*"]);try{for(a.s();!(o=a.n()).done;){(0,o.value)(n)}}catch(re){a.e(re)}finally{a.f()}}}}}],[{key:"identify",value:function(e){var n=[];for(var i in L)e.getModifierState(i)&&n.push(L[i]);return e.key in L||(e.code.startsWith("Digit")?n.push(e.code.slice(5)):e.code.startsWith("Key")?n.push(e.code.slice(3)):R.includes(e.code)?n.push(e.code):n.push(e.key)),n.join("+")}},{key:"normalize",value:function(e){return e.split("+").map((function(e){var n=e.toLowerCase();return""===e?"":V[n]?V[n]:e[0].toUpperCase()+n.slice(1)})).sort((function(e,n){return Z.includes(e)?Z.includes(n)?Z.indexOf(e)-Z.indexOf(n):-1:Z.includes(n)?1:function(e,n){if(e<n)return-1;if(e===n)return 0;return 1}(e,n)})).join("+")}}]),e}();function F(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.map((function(n){var i=U(n),r=new KeyboardEvent("keydown");return{key:n,run:function(){var n,t=e.getHandlers(i),o=(0,M.Z)(t);try{for(o.s();!(n=o.n()).done;){(0,n.value)(r)}}catch(re){o.e(re)}finally{o.f()}return!1}}}))}var O="MacIntel"===navigator.platform;function U(e){return e=(e=e.replace("Mod",O?"Meta":"Ctrl")).replace(/-/g,"+"),D.normalize(e)}var E=i(7065),G=i(5119),K=["captureKeys","extensions","group","passKeys"],H=function(e){var n=e.captureKeys,i=void 0===n?{"Mod-Enter":"run","Mod-K":"clear","Mod-L":"clear"}:n,r=e.extensions,t=void 0===r?[]:r,o=e.group,a=void 0===o?"default":o,s=e.passKeys,c=void 0===s?["Mod-Alt-2","Mod-Alt-3","Mod-Alt-4"]:s,d=(0,T.Z)(e,K),h=(0,v.tV)(),g=(0,p.useContext)(j),y=(0,p.useMemo)((function(){return g?[k.$f.of(F(g,c))].concat((0,S.Z)(t)):t}),[c]);return(0,p.useEffect)((function(){var n=h.getState(),r=n.groups[a].files.find((function(n){return n.filename===e.filename})).view;r.dispatch({effects:E.Nl.reconfigure([].concat((0,S.Z)(E.Nl.get(r.state)),[[n.recorder.extension(i)]]))}),function(e){var n=0;e:for(var i=0,r=Object.values(e.groups);i<r.length;i++){var t,o=r[i],a=(0,M.Z)(o.files);try{for(a.s();!(t=a.n()).done;){var s=t.value.view,u=E.Nl.get(s.state);if(u instanceof Array&&u.length>0&&++n>1)break e}}catch(re){a.e(re)}finally{a.f()}}if(n<2)return;if(e.recorder[I])return;var c=e.recorder.beginRecording.bind(e.recorder);e.recorder.beginRecording=function(){c.apply(void 0,arguments),e.recorder.capture(0,f.P1+e.getActiveFile().filename)},e.recorder[I]=!0}(n)}),[]),(0,l.jsx)(G.M,(0,u.Z)({content:e.content,extensions:y},d))},I=Symbol();var q=i(872),z=i(9493),W=i(8219),J=i(4107);function $(e){return e.map((function(e){return e[0]})).reduce((function(e,n){return e+n}),0)}var X=i(8884),Y=new J.Jc,Q=new J.hn;Q.requestRecording();var ee=new X.U;function ne(){var e=(0,p.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],t=(0,p.useState)(),o=(0,c.Z)(t,2),a=o[0],s=o[1];(0,p.useEffect)((function(){if(a){var e=function(e){return e.returnValue="You have recording data"};return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}}),[a]);var u=(0,p.useCallback)((function(){i?Y.endRecording().then((function(e){s(e)})):Y.beginRecording({audio:Q,coding:ee}),r(!i)}),[i]);return(0,l.jsxs)("div",{className:"lqv-recording",children:[(0,l.jsx)("h2",{children:"Recording"}),(0,l.jsxs)("button",{"aria-pressed":i,onClick:u,children:[(0,l.jsx)("svg",{"aria-hidden":"true",viewBox:"-2 -2 4 4",children:(0,l.jsx)("circle",{fill:i?"red":"#aaa",cx:"0",cy:"0",r:"1"})}),"Record"]}),a&&(0,l.jsxs)("output",{children:[(0,l.jsxs)("p",{children:["Duration: ",(0,l.jsx)("code",{children:$(a.coding)/1e3})]}),(0,l.jsxs)("p",{children:["Save this as ",(0,l.jsx)("code",{children:"public/audio.webm"}),":",(0,l.jsx)("a",{download:"audio.webm",href:URL.createObjectURL(a.audio),children:"Download Audio"})]}),(0,l.jsxs)("p",{children:["Copy this into ",(0,l.jsx)("code",{children:"public/recordings.json"}),":"]}),(0,l.jsx)("textarea",{readOnly:!0,value:JSON.stringify(a.coding)})]})]})}var ie=function(){return(0,l.jsx)("div",{className:"App",children:(0,l.jsxs)(a.AL,{recorder:ee,children:[(0,l.jsxs)("section",{className:"lqv-sidebar",children:[(0,l.jsx)("h2",{children:"Files"}),(0,l.jsx)(b,{}),(0,l.jsx)("h2",{children:"Code"}),(0,l.jsxs)(w.EK,{children:[(0,l.jsx)(w.zb,{}),(0,l.jsx)(w.UZ,{})]}),(0,l.jsx)(ne,{})]}),(0,l.jsx)(m.z,{filename:"untitled.py",children:(0,l.jsx)(H,{extensions:[(0,r.V)(),E.Xy,(0,t.nF)(o.$d)]})}),(0,l.jsx)(q.t,{min:.1,max:.3}),(0,l.jsx)(q.t,{dir:"ns",min:.04,max:.5}),(0,l.jsx)(W.Ug,{}),(0,l.jsx)(z.M,{})]})})}},6046:function(){},4798:function(){},5406:function(){}}]);
//# sourceMappingURL=272.fd69685f.chunk.js.map