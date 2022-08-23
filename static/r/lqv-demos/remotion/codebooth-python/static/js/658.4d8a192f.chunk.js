"use strict";(self.webpackChunkdemo_remotion_codebooth_python=self.webpackChunkdemo_remotion_codebooth_python||[]).push([[658],{9658:function(e,n,i){i.r(n),i.d(n,{default:function(){return J}});i(6046),i(4798),i(5406);var r=i(2292),o=i(1450),a=i(4200),t=i(5865),s=i(9072),d=i(9995),c=i(7762),u=i(1413),l=i(2982),f=i(4925),h=i(184),p=i(4294),g=i(2791),v=Symbol.for("@lqv/keymap");v in globalThis||(globalThis[v]=(0,g.createContext)(null));var y=globalThis[v];var w,M=i(3856),b=i(5671),x=i(3144),m={Control:"Ctrl",Alt:"Alt",Shift:"Shift",Meta:"Meta"},S={},k=(0,c.Z)(["AltGraph","CapsLock","FnLock","NumLock","ScrollLock","SymbolLock","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","PageDown","PageUp","CrSel","EraseEof","ExSel","ContextMenu","ZoomIn","ZoomOut","BrightnessDown","BrightnessUp","LogOff","PowerOff","PrintScreen","WakeUp","AllCandidates","CodeInput","FinalMode","GroupFirst","GroupLast","GroupNext","GroupPrevious","ModeChange","NextCandidate","NonConvert","PreviousCandidate","SingleCandidate","HangulMode","HanjaMode","JunjaMode","HiraganaKatakana","KanaMode","KanjiMode","ZenkakuHanaku","AppSwitch","CameraFocus","EndCall","GoBack","GoHome","HeadsetHook","LastNumberRedial","MannerMode","VoiceDial","ChannelDown","ChannelUp","MediaFastForward","MediaPause","MediaPlay","MediaPlayPause","MediaRecord","MediaRewind","MediaStop","MediaTrackNext","MediaTrackPrevious","AudioBalanceLeft","AudioBalanceRight","AudioBassDown","AudioBassBoostDown","AudioBassBoostToggle","AudioBassBoostUp","AudioBassUp","AudioFaderFront","AudioFaderRear","AudioSurroundModeNext","AudioTrebleDown","AudioTrebleUp","AudioVolumeDown","AudioVolumeMute","AudioVolumeUp","MicrophoneToggle","MicrophoneVolumeDown","MicrophoneVolumeMute","MicrophoneVolumeUp","TV","TVAntennaCable","TVAudioDescription","TVAudioDescriptionMixDown","TVAudioDescriptionMixUp","TVContentsMenu","TVDataService","TVInput","TVMediaContext","TVNetwork","TVNumberEntry","TVPower","TVRadioService","TVSatellite","TVSatelliteBS","TVSatelliteCS","TVSatelliteToggle","TVTerrestrialAnalog","TVTerrestrialDigital","TVTimer","AVRInput","AVRPower","ClosedCaptionToggle","DisplaySwap","DVR","GuideNextDay","GuidePreviousDay","InstantReplay","ListProgram","LiveContent","MediaApps","MediaAudioTrack","MediaLast","MediaSkipBackward","MediaSkipForward","MediaStepBackward","MediaStepForward","MediaTopMenu","NavigateIn","NavigateNext","NavigateOut","NavigatePrevious","NextFavoriteChannel","NextUserProfile","OnDemand","PinPDown","PinPMove","PinPToggle","PinPUp","PlaySpeedDown","PlaySpeedReset","PlaySpeedUp","RandomToggle","RcLowBattery","RecordSpeedNext","RfBypass","ScanChannelsToggle","ScreenModeNext","SplitScreenToggle","STBInput","STBPower","VideoModeNext","ZoomToggle","SpeechCorrectionList","SpeechInputToggle","SpellCheck","MailForward","MailReply","MailSend","LaunchCalculator","LaunchCalendar","LaunchContacts","LaunchMail","LaunchMediaPlayer","LaunchMusicPlayer","LaunchMyComputer","LaunchPhone","LaunchScreenSaver","LaunchSpreadsheet","LaunchWebBrowser","LaunchWebCam","LaunchWordProcessor","BrowserBack","BrowserFavorites","BrowserForward","BrowserHome","BrowserRefresh","BrowserSearch","BrowserStop"]);try{for(k.s();!(w=k.n()).done;){var T=w.value;S[T.toLowerCase()]=T}}catch($){k.e($)}finally{k.f()}var C=Object.keys(m).map((function(e){return m[e]})),_=["Backspace","Enter","Space","Tab"],A=function(){function e(){(0,b.Z)(this,e),this.__bindings={}}return(0,x.Z)(e,[{key:"bind",value:function(n,i){if(n.indexOf(",")>-1){var r,o=(0,c.Z)(n.split(","));try{for(o.s();!(r=o.n()).done;){var a=r.value;this.bind(a,i)}}catch($){o.e($)}finally{o.f()}}else n=e.normalize(n),this.__bindings.hasOwnProperty(n)||(this.__bindings[n]=[]),this.__bindings[n].push(i)}},{key:"unbind",value:function(n,i){if(n.indexOf(",")>-1){var r,o=(0,c.Z)(n.split(","));try{for(o.s();!(r=o.n()).done;){var a=r.value;this.unbind(a,i)}}catch($){o.e($)}finally{o.f()}}else{if(n=e.normalize(n),!this.__bindings.hasOwnProperty(n))throw new Error("".concat(n," is not bound"));var t,s=this.__bindings[n].indexOf(i);if(s<0)throw new Error("".concat(n," is not bound to ").concat(null!==(t=i.name)&&void 0!==t?t:"callback"));this.__bindings[n].splice(s,1),0===this.__bindings[n].length&&delete this.__bindings[n]}}},{key:"getKeys",value:function(){return Object.keys(this.__bindings)}},{key:"getHandlers",value:function(e){return this.__bindings.hasOwnProperty(e)?this.__bindings[e].slice():[]}},{key:"handle",value:function(n){var i=e.identify(n);if(this.__bindings[i]||this.__bindings["*"]){if(this.__bindings[i]){n.preventDefault();var r,o=(0,c.Z)(this.__bindings[i]);try{for(o.s();!(r=o.n()).done;){(0,r.value)(n)}}catch($){o.e($)}finally{o.f()}}if(this.__bindings["*"]){var a,t=(0,c.Z)(this.__bindings["*"]);try{for(t.s();!(a=t.n()).done;){(0,a.value)(n)}}catch($){t.e($)}finally{t.f()}}}}}],[{key:"identify",value:function(e){var n=[];for(var i in m)e.getModifierState(i)&&n.push(m[i]);return e.key in m||(e.code.startsWith("Digit")?n.push(e.code.slice(5)):e.code.startsWith("Key")?n.push(e.code.slice(3)):_.includes(e.code)?n.push(e.code):n.push(e.key)),n.join("+")}},{key:"normalize",value:function(e){return e.split("+").map((function(e){var n=e.toLowerCase();return""===e?"":S[n]?S[n]:e[0].toUpperCase()+n.slice(1)})).sort((function(e,n){return C.includes(e)?C.includes(n)?C.indexOf(e)-C.indexOf(n):-1:C.includes(n)?1:function(e,n){if(e<n)return-1;if(e===n)return 0;return 1}(e,n)})).join("+")}}]),e}();function j(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.map((function(n){var i=L(n),r=new KeyboardEvent("keydown");return{key:n,run:function(){var n,o=e.getHandlers(i),a=(0,c.Z)(o);try{for(a.s();!(n=a.n()).done;){(0,n.value)(r)}}catch($){a.e($)}finally{a.f()}return!1}}}))}var P="MacIntel"===navigator.platform;function L(e){return e=(e=e.replace("Mod",P?"Meta":"Ctrl")).replace(/-/g,"+"),A.normalize(e)}var V=i(7065),B=i(204),D=i(5119),N=["captureKeys","extensions","group","passKeys"],R=function(e){var n=e.captureKeys,i=void 0===n?{"Mod-Enter":"run","Mod-K":"clear","Mod-L":"clear"}:n,r=e.extensions,o=void 0===r?[]:r,a=e.group,t=void 0===a?"default":a,s=e.passKeys,d=void 0===s?["Mod-Alt-2","Mod-Alt-3","Mod-Alt-4"]:s,v=(0,f.Z)(e,N),w=(0,B.tV)(),b=(0,g.useContext)(y),x=(0,g.useMemo)((function(){return b?[p.$f.of(j(b,d))].concat((0,l.Z)(o)):o}),[d]);return(0,g.useEffect)((function(){var n=w.getState(),r=n.groups[t].files.find((function(n){return n.filename===e.filename})).view;r.dispatch({effects:V.Nl.reconfigure([].concat((0,l.Z)(V.Nl.get(r.state)),[[n.recorder.extension(i)]]))}),function(e){var n=0;e:for(var i=0,r=Object.values(e.groups);i<r.length;i++){var o,a=r[i],t=(0,c.Z)(a.files);try{for(t.s();!(o=t.n()).done;){var s=o.value.view,d=V.Nl.get(s.state);if(d instanceof Array&&d.length>0&&++n>1)break e}}catch($){t.e($)}finally{t.f()}}if(n<2)return;if(e.recorder[U])return;var u=e.recorder.beginRecording.bind(e.recorder);e.recorder.beginRecording=function(){u.apply(void 0,arguments),e.recorder.capture(0,M.P1+e.getActiveFile().filename)},e.recorder[U]=!0}(n)}),[]),(0,h.jsx)(D.M,(0,u.Z)({content:e.content,extensions:x},v))},U=Symbol();var Z=i(872),O=i(9493),F=i(8219),E=i(885),K=i(5475);function H(e){return e.map((function(e){return e[0]})).reduce((function(e,n){return e+n}),0)}var G=i(8884),I=new K.Jc,z=new K.hn;z.requestRecording();var W=new G.U;function q(){var e=(0,g.useState)(!1),n=(0,E.Z)(e,2),i=n[0],r=n[1],o=(0,g.useState)(),a=(0,E.Z)(o,2),t=a[0],s=a[1];(0,g.useEffect)((function(){if(t){var e=function(e){return e.returnValue="You have recording data"};return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}}),[t]);var d=(0,g.useCallback)((function(){i?I.endRecording().then((function(e){s(e)})):I.beginRecording({audio:z,coding:W}),r(!i)}),[i]);return(0,h.jsxs)("div",{className:"lqv-recording",children:[(0,h.jsx)("h2",{children:"Recording"}),(0,h.jsxs)("button",{"aria-pressed":i,onClick:d,children:[(0,h.jsx)("svg",{"aria-hidden":"true",viewBox:"-2 -2 4 4",children:(0,h.jsx)("circle",{fill:i?"red":"#aaa",cx:"0",cy:"0",r:"1"})}),"Record"]}),t&&(0,h.jsxs)("output",{children:[(0,h.jsxs)("p",{children:["Duration: ",(0,h.jsx)("code",{children:H(t.coding)/1e3})]}),(0,h.jsxs)("p",{children:["Save this as ",(0,h.jsx)("code",{children:"public/audio.webm"}),":",(0,h.jsx)("a",{download:"audio.webm",href:URL.createObjectURL(t.audio),children:"Download Audio"})]}),(0,h.jsxs)("p",{children:["Copy this into ",(0,h.jsx)("code",{children:"public/recordings.json"}),":"]}),(0,h.jsx)("textarea",{readOnly:!0,value:JSON.stringify(t.coding)})]})]})}var J=function(){return(0,h.jsx)("div",{className:"App",children:(0,h.jsxs)(t.AL,{recorder:W,children:[(0,h.jsxs)("section",{className:"lqv-sidebar",children:[(0,h.jsx)("h2",{children:"Code"}),(0,h.jsxs)(s.EK,{children:[(0,h.jsx)(s.zb,{}),(0,h.jsx)(s.UZ,{})]}),(0,h.jsx)(q,{})]}),(0,h.jsx)(d.z,{filename:"untitled.py",children:(0,h.jsx)(R,{extensions:[(0,r.V)(),V.Xy,(0,o.nF)(a.$d)]})}),(0,h.jsx)(Z.t,{min:.1,max:.3}),(0,h.jsx)(Z.t,{dir:"ns",min:.04,max:.5}),(0,h.jsx)(F.Ug,{}),(0,h.jsx)(O.M,{})]})})}},6046:function(){},4798:function(){},5406:function(){}}]);
//# sourceMappingURL=658.4d8a192f.chunk.js.map