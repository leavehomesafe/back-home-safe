(this["webpackJsonpback-home-safe"]=this["webpackJsonpback-home-safe"]||[]).push([[0],{63:function(e,n,t){"use strict";t.r(n);var i,o,c,a,r,s,d,l,b,j,h,f,u,x,p,g,O,m,v,w,k,y,C,M,S,D,A,H,z,U,R,E,q,F,W,I,L,N,P,T,B,G,J,Z,_,K,V,Y,$,Q,X,ee=t(1),ne=t.n(ee),te=t(23),ie=t.n(te),oe=t(2),ce=t(9),ae=t(3),re=t(11),se=t(4),de=t(65),le=ae.b.button(i||(i=Object(oe.a)(["\n  display: block;\n  margin: auto;\n  margin-bottom: 16px;\n  font-size: 24px;\n  padding: 10px 0;\n  width: 80%;\n  border-radius: 48px;\n  flex-shrink: 0;\n\n  ","\n\n  border: 0;\n  outline: none;\n  ","\n\n  &:focus {\n    outline: none;\n    text-decoration: none;\n  }\n"])),(function(e){return e.disabled?"background-color: #D3D3D3;\n        color: #A1A1A1;\n        ":"\n        background-color: #fed426;\n      "}),(function(e){return e.shadowed?"box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);":""})),be=Object(ae.b)(le)(o||(o=Object(oe.a)(["\n  font-size: 16px;\n  padding: 12px 0;\n  width: 90%;\n"]))),je=ae.b.input(c||(c=Object(oe.a)(["\n  text-align: center;\n  font-size: 32px;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  margin: 10px 0;\n  color: #fed426;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  width: 100%;\n  padding: 0;\n\n  &:focus {\n    outline: none;\n  }\n"]))),he=t(0),fe=function(){var e=Object(ee.useState)(""),n=Object(ce.a)(e,2),t=n[0],i=n[1];return Object(he.jsxs)(ue,{children:[Object(he.jsxs)(xe,{children:[Object(he.jsx)(pe,{children:"\u6211\u60f3\u53bb"}),Object(he.jsx)(je,{value:t,onChange:function(e){return i(e.target.value)},placeholder:"\u8f38\u5165\u5730\u5740"})]}),Object(he.jsxs)(ge,{children:[Object(de.a)(t)?Object(he.jsx)(le,{disabled:!0,shadowed:!0,children:"\u8a71\u53bb\u5c31\u53bb!"}):Object(he.jsx)(re.b,{to:{pathname:"/confirm",search:"?place=".concat(t)},children:Object(he.jsx)(le,{shadowed:!0,children:"\u8a71\u53bb\u5c31\u53bb!"})}),Object(he.jsx)(Oe,{to:"/qr",children:"\u6383\u7784\u4e8c\u7dad\u78bc"})]})]})},ue=ae.b.div(a||(a=Object(oe.a)(["\n  width: 100%;\n  height: 100%;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n"]))),xe=ae.b.div(r||(r=Object(oe.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),pe=ae.b.div(s||(s=Object(oe.a)(["\n  color: #ffffff;\n  text-align: center;\n  font-size: 15px;\n"]))),ge=ae.b.div(d||(d=Object(oe.a)(["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  text-align: center;\n  color: #fff;\n  padding-bottom: 40px;\n"]))),Oe=Object(ae.b)(re.b)(l||(l=Object(oe.a)(["\n  color: #ffffff;\n"]))),me=t.p+"static/media/cross.d2bbc7f7.svg",ve=t.p+"static/media/tick.6d45b966.svg",we=t.p+"static/media/checkbox.7f6c2da0.svg",ke=t.p+"static/media/checkboxChecked.dad8859a.svg",ye=function(e){return("00"+String(e)).slice(-2)},Ce=t(15),Me=t.n(Ce),Se=t.p+"static/media/crossBlack.aafc0aee.svg",De=t.p+"static/media/greenTick.5e528318.svg",Ae=t(18),He=function(e){var n=e.isModalOpen,t=e.onCancel,i=e.onConfirm,o=e.selectedAutoLeaveHour,c=e.date,a=Object(ee.useState)(o),r=Object(ce.a)(a,2),s=r[0],d=r[1];Object(ee.useEffect)((function(){d(o)}),[d,o]);var l=Object(ee.useMemo)((function(){var e=new Date(c);return e.setHours(c.getHours()+s),{fromMonth:c.getMonth()+1,fromDay:c.getDate(),fromHour:c.getHours(),fromMinute:c.getMinutes(),toMonth:e.getMonth()+1,toDay:e.getDate(),toHour:e.getHours(),toMinute:e.getMinutes()}}),[c,s]),b=l.fromMonth,j=l.fromDay,h=l.fromHour,f=l.fromMinute,u=l.toMonth,x=l.toDay,p=l.toHour,g=l.toMinute;return Object(he.jsxs)(Me.a,{isOpen:n,onRequestClose:t,style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{outline:"none",border:"0",padding:"16px",borderRadius:"8px",width:"240px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"370px",overflow:"hidden"}},ariaHideApp:!1,onAfterOpen:function(){var e=document.querySelector("#scroll");e&&Object(Ae.a)(e)},children:[Object(he.jsx)(Ue,{children:Object(he.jsx)(ze,{src:Se,onClick:t})}),Object(he.jsx)(Re,{children:"\u8a2d\u7f5d\u81ea\u52d5\u96e2\u958b\u6642\u9593"}),Object(he.jsx)(Ee,{id:"scroll",children:Object(he.jsx)(qe,{children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(he.jsxs)(Fe,{onClick:function(){d(e)},children:["+ ",e,"\u5c0f\u6642",s===e&&Object(he.jsx)(Ie,{src:De})]},e)}))})}),Object(he.jsxs)(We,{children:[Object(he.jsxs)("div",{children:["\u65bc",ye(b),"-",ye(j)," ",ye(h),":",ye(f)," \u9032\u5165\u5834\u6240"]}),Object(he.jsxs)("div",{children:["\u65bc",ye(u),"-",ye(x)," ",ye(p),":",ye(g)," \u81ea\u52d5\u96e2\u958b"]})]}),Object(he.jsx)(be,{onClick:function(){i(s)},children:"\u78ba\u8a8d"})]})},ze=ae.b.img(b||(b=Object(oe.a)(["\n  height: 20px;\n"]))),Ue=ae.b.div(j||(j=Object(oe.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n"]))),Re=ae.b.h1(h||(h=Object(oe.a)(["\n  font-size: 20px;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 0;\n"]))),Ee=ae.b.div(f||(f=Object(oe.a)(["\n  overflow: auto;\n  height: 180px;\n  padding: 0 8px;\n"]))),qe=ae.b.ul(u||(u=Object(oe.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),Fe=ae.b.li(x||(x=Object(oe.a)(["\n  line-height: 40px;\n  border-bottom: 1px #eeeeee solid;\n  padding: 0 8px;\n"]))),We=ae.b.div(p||(p=Object(oe.a)(["\n  font-size: 12px;\n  text-align: center;\n  padding: 16px 0;\n"]))),Ie=ae.b.img(g||(g=Object(oe.a)(["\n  height: 32px;\n  position: relative;\n  float: right;\n  top: 4px;\n"]))),Le=function(e){var n=e.isModalOpen,t=e.onCancel,i=e.onLeaveNow,o=e.onLeaved;return Object(he.jsxs)(Me.a,{isOpen:n,onRequestClose:t,style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{outline:"none",border:"0",padding:"16px",borderRadius:"8px",width:"240px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"280px",overflow:"hidden"}},ariaHideApp:!1,children:[Object(he.jsx)(Pe,{children:Object(he.jsx)(Ne,{src:Se,onClick:t})}),Object(he.jsx)(Te,{children:"\u4f60\u73fe\u5728\u8981\u96e2\u958b\u55ce\uff1f"}),Object(he.jsx)(be,{onClick:i,children:"\u662f\u7684\uff0c\u6211\u73fe\u5728\u8981\u96e2\u958b"}),Object(he.jsx)(Be,{onClick:o,children:"\u6211\u73fe\u5df2\u7d93\u96e2\u958b\u4e86"})]})},Ne=ae.b.img(O||(O=Object(oe.a)(["\n  height: 20px;\n"]))),Pe=ae.b.div(m||(m=Object(oe.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n"]))),Te=ae.b.div(v||(v=Object(oe.a)(["\n  font-size: 20px;\n  text-align: center;\n  margin: 56px 0;\n"]))),Be=Object(ae.b)(be)(w||(w=Object(oe.a)(["\n  background-color: #12b188;\n  color: #fff;\n"]))),Ge=t(35),Je=t.n(Ge),Ze=(t(62),Object(ee.forwardRef)((function(e,n){return Object(ee.useImperativeHandle)(n,(function(){return{init:function(){var e=document.querySelector(".js-inline-picker");e&&new Je.a(e,{inline:!0,rows:2})}}})),Object(he.jsx)(_e,{children:Object(he.jsx)("div",{className:"js-inline-picker"})})}))),_e=ae.b.div(k||(k=Object(oe.a)(["\n  & .picker {\n    font-size: 12px;\n  }\n\n  & .picker-dialog {\n    border: 0;\n  }\n\n  & .picker-cell:before {\n    background-image: unset;\n  }\n\n  & .picker-cell:after {\n    background-image: unset;\n  }\n\n  & .picker-picked {\n    color: unset;\n    border-top: #12b188 1px solid;\n    border-bottom: #12b188 1px solid;\n  }\n\n  & .picker-cell {\n    padding: 0 4px;\n  }\n\n  & .picker-item {\n    padding: 3px 0px;\n  }\n\n  & .picker-cell + .picker-cell {\n    border: 0;\n  }\n"]))),Ke=function(e){var n=e.isModalOpen,t=e.onCancel,i=e.onConfirm,o=Object(ee.useRef)(null);return Object(he.jsxs)(Me.a,{isOpen:n,onRequestClose:t,style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{outline:"none",border:"0",padding:"16px",borderRadius:"8px",width:"240px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"280px",overflow:"hidden"}},ariaHideApp:!1,onAfterOpen:function(){o.current&&o.current.init()},children:[Object(he.jsx)(Ye,{children:Object(he.jsx)(Ve,{src:Se,onClick:t})}),Object(he.jsx)($e,{children:"\u4f60\u662f\u4ec0\u9ebc\u6642\u5019\u96e2\u958b\uff1f"}),Object(he.jsx)(Qe,{children:Object(he.jsx)(Ze,{ref:o})}),Object(he.jsx)(be,{onClick:i,children:"\u78ba\u8a8d"})]})},Ve=ae.b.img(y||(y=Object(oe.a)(["\n  height: 20px;\n"]))),Ye=ae.b.div(C||(C=Object(oe.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n"]))),$e=ae.b.div(M||(M=Object(oe.a)(["\n  font-size: 20px;\n  text-align: center;\n  margin-top: 24px;\n"]))),Qe=ae.b.div(S||(S=Object(oe.a)(["\n  border-bottom: 1px #eeeeee solid;\n  border-top: 1px #eeeeee solid;\n  padding: 32px 0;\n  margin: 16px 0;\n"]))),Xe=function(){var e=Object(se.g)(),n=Object(se.h)(),t=Object(ee.useState)(!1),i=Object(ce.a)(t,2),o=i[0],c=i[1],a=Object(ee.useState)(4),r=Object(ce.a)(a,2),s=r[0],d=r[1],l=Object(ee.useState)(!1),b=Object(ce.a)(l,2),j=b[0],h=b[1],f=Object(ee.useState)(!1),u=Object(ce.a)(f,2),x=u[0],p=u[1],g=Object(ee.useState)(!1),O=Object(ce.a)(g,2),m=O[0],v=O[1],w=Object(ee.useMemo)((function(){return new URLSearchParams(n.search).get("place")}),[n.search]);Object(ee.useEffect)((function(){w&&!Object(de.a)(w)||e.push("/")}),[e,w]);var k=Object(ee.useMemo)((function(){var e=new Date;return{date:e,year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes()}}),[]),y=k.date,C=k.year,M=k.month,S=k.day,D=k.hour,A=k.minute,H=function(){e.push("/")};return Object(he.jsxs)(he.Fragment,{children:[Object(he.jsxs)(en,{children:[Object(he.jsx)(nn,{children:Object(he.jsx)(re.b,{to:"/",children:Object(he.jsx)(on,{src:me})})}),Object(he.jsxs)(tn,{children:[Object(he.jsx)(sn,{children:"\u4f60\u5df2\u9032\u5165\u5834\u6240"}),w&&Object(he.jsx)(je,{value:w,readOnly:!0}),Object(he.jsx)(dn,{children:"".concat(C,"-").concat(ye(M),"-").concat(ye(S)," ").concat(ye(D),":").concat(ye(A))})]}),Object(he.jsx)(cn,{children:Object(he.jsx)(an,{children:Object(he.jsx)(rn,{src:ve})})}),Object(he.jsxs)(un,{children:[Object(he.jsxs)(ln,{children:[Object(he.jsxs)(bn,{children:[Object(he.jsx)(hn,{src:o?ke:we,onClick:function(){c((function(e){return!e}))}}),s,"\u5c0f\u6642\u5f8c\u81ea\u52d5\u96e2\u958b"]}),Object(he.jsx)(jn,{onClick:function(){h(!0)},children:"\u8b8a\u66f4"})]}),Object(he.jsx)(le,{shadowed:!0,onClick:function(){p(!0)},children:"\u96e2\u958b"}),Object(he.jsx)(fn,{children:'\u7576\u4f60\u96e2\u958b\u6642\u8acb\u7dca\u8a18\u6309"\u96e2\u958b"'})]})]}),Object(he.jsx)(He,{isModalOpen:j,onCancel:function(){h(!1)},onConfirm:function(e){d(e),h(!1)},selectedAutoLeaveHour:s,date:y}),Object(he.jsx)(Le,{isModalOpen:x,onCancel:function(){p(!1)},onLeaveNow:H,onLeaved:function(){p(!1),v(!0)}}),Object(he.jsx)(Ke,{isModalOpen:m,onCancel:function(){v(!1)},onConfirm:H})]})},en=ae.b.div(D||(D=Object(oe.a)(["\n  width: 100%;\n  height: 100%;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n"]))),nn=ae.b.div(A||(A=Object(oe.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-shrink: 0;\n"]))),tn=ae.b.div(H||(H=Object(oe.a)(["\n  flex-shrink: 0;\n  width: 100%;\n"]))),on=ae.b.img(z||(z=Object(oe.a)(["\n  height: 20px;\n  margin: 24px;\n"]))),cn=ae.b.div(U||(U=Object(oe.a)(["\n  height: 100%;\n  width: 100%;\n  text-align: center;\n"]))),an=ae.b.div(R||(R=Object(oe.a)(["\n  height: 100%;\n  max-height: 280px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),rn=ae.b.img(E||(E=Object(oe.a)(["\n  display: inline-block;\n  height: 100%;\n  max-height: 120px;\n"]))),sn=ae.b.div(q||(q=Object(oe.a)(["\n  color: #ffffff;\n  text-align: center;\n  font-size: 15px;\n  margin-top: 50px;\n"]))),dn=ae.b.div(F||(F=Object(oe.a)(["\n  color: #ffffff;\n  text-align: center;\n"]))),ln=ae.b.div(W||(W=Object(oe.a)(["\n  margin-bottom: 16px;\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n"]))),bn=ae.b.div(I||(I=Object(oe.a)(["\n  width: 100%;\n  text-align: left;\n  padding-left: 24px;\n  line-height: 32px;\n"]))),jn=ae.b.div(L||(L=Object(oe.a)(["\n  flex-shrink: 0;\n  padding-right: 24px;\n  line-height: 32px;\n"]))),hn=ae.b.img(N||(N=Object(oe.a)(["\n  height: 32px;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 8px;\n"]))),fn=ae.b.div(P||(P=Object(oe.a)(["\n  text-align: center;\n  padding-bottom: 40px;\n  flex-shrink: 0;\n"]))),un=ae.b.div(T||(T=Object(oe.a)(["\n  width: 100%;\n  flex-shrink: 0;\n"]))),xn=t.p+"static/media/back.7bf7a56f.svg",pn=t(64),gn=t.p+"static/media/qrOverlay.185cc3ea.svg",On=t(36),mn=t.n(On),vn=function(e){return"mediaDevices"in navigator||(navigator.mediaDevices={},navigator.mediaDevices.getUserMedia=function(e){var n=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return n?new Promise((function(t,i){n.call(navigator,e,t,i)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),navigator.mediaDevices.getUserMedia(e)},wn=function(e){var n=e.onDecode,t=Object(ee.useRef)(null),i=Object(ee.useRef)(null),o=Object(ee.useCallback)((function(){var e=i.current,c=t.current;if(e&&c&&c.readyState===c.HAVE_ENOUGH_DATA){var a=e.getContext("2d");if(!a)return;e.height=c.videoHeight,e.width=c.videoWidth,a.drawImage(c,0,0,e.width,e.height);var r=a.getImageData(0,0,e.width,e.height),s=mn()(r.data,r.width,r.height,{inversionAttempts:"dontInvert"});s&&n(s)}requestAnimationFrame(o)}),[t,i,n]);return Object(ee.useEffect)((function(){var e=t.current;e&&vn({video:{facingMode:"environment"}}).then((function(n){e&&(e.srcObject=n,e.play(),requestAnimationFrame(o))}))}),[o,t]),Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(kn,{ref:t,playsInline:!0}),Object(he.jsx)(yn,{ref:i})]})},kn=ae.b.video(B||(B=Object(oe.a)(["\n  /* Make video to at least 100% wide and tall */\n  min-width: 100%;\n  min-height: 100%;\n\n  /* Setting width & height to auto prevents the browser from stretching or squishing the video */\n  width: auto;\n  height: auto;\n\n  /* Center the video */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),yn=ae.b.canvas(G||(G=Object(oe.a)(["\n  display: none;\n"]))),Cn=function(){var e=Object(se.g)();return Object(he.jsxs)(he.Fragment,{children:[Object(he.jsxs)(Sn,{children:[Object(he.jsx)(re.b,{to:"/",children:Object(he.jsx)(Mn,{src:xn})}),"\u6383\u7784\u4e8c\u7dad\u78bc"]}),Object(he.jsx)(An,{}),Object(he.jsx)(Hn,{children:"\u6383\u7784\u4e8c\u7dad\u78bc"}),Object(he.jsx)(Dn,{children:Object(he.jsx)(wn,{onDecode:function(n){var t=n.data;if(t&&!Object(de.a)(t)){var i=function(e){if(!e.startsWith("HKEN:"))return"";var n=JSON.parse(window.atob(e.substring(14)));console.log(n);var t=n.nameZh?Object(pn.a)(n.nameZh):"",i=Object(de.a)(t)?n.nameEn:t;return decodeURIComponent(escape(i))}(t);Object(de.a)(i)||e.push({pathname:"/confirm",search:"?place=".concat(i)})}}})})]})},Mn=ae.b.img(J||(J=Object(oe.a)(["\n  height: 20px;\n  top: 14px;\n  left: 16px;\n  position: absolute;\n"]))),Sn=ae.b.div(Z||(Z=Object(oe.a)(["\n  width: 100%;\n  position: absolute;\n  z-index: 100;\n  color: #ffffff;\n  background-color: #12b188;\n  text-align: center;\n  line-height: 48px;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n"]))),Dn=ae.b.div(_||(_=Object(oe.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]))),An=ae.b.div(K||(K=Object(oe.a)(['\n  /* The image used */\n  background-image: url("','");\n\n  /* Full height */\n  height: 100%;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  z-index: 50;\n  position: relative;\n'])),gn),Hn=ae.b.div(V||(V=Object(oe.a)(["\n  position: absolute;\n  z-index: 51;\n  bottom: 25%;\n  width: 100%;\n  text-align: center;\n  color: #ffffff;\n  font-size: 16px;\n"]))),zn=t.p+"static/media/plus.abd4712a.svg",Un=function(){return Object(he.jsxs)(Rn,{children:[Object(he.jsx)(En,{src:zn}),Object(he.jsx)("div",{children:"\u65b0\u589e\u81f3\u4e3b\u756b\u9762\u5148\u5566"}),Object(he.jsx)("div",{children:"\u5514\u4fc2\u9ede\u4f3c\u500bApp"}),Object(he.jsxs)(qn,{children:[Object(he.jsx)("div",{children:"IOS"}),Object(he.jsx)("div",{children:"\u7528Safari\u958b=>\u5206\u4eab=>\u65b0\u589e\u81f3\u4e3b\u756b\u9762"}),Object(he.jsx)("div",{children:"Android"}),Object(he.jsx)("div",{children:"\u7528Chrome\u958b=>\u53f3\u4e0a\u9078\u9805=>\u65b0\u589e\u81f3\u4e3b\u756b\u9762/\u5b89\u88dd\u61c9\u7528\u7a0b\u5f0f"})]})]})},Rn=ae.b.div(Y||(Y=Object(oe.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  vertical-align: middle;\n  flex-direction: column;\n  text-align: center;\n  color: #fff;\n"]))),En=ae.b.img($||($=Object(oe.a)(["\n  width: 100px;\n  margin: 0 auto 32px auto;\n"]))),qn=ae.b.div(Q||(Q=Object(oe.a)(["\n  font-size: 12px;\n  margin-top: 24px;\n"]))),Fn=t(27);var Wn=function(){var e=Object(ee.useState)(!1),n=Object(ce.a)(e,2),t=n[0],i=n[1];return Object(ee.useEffect)((function(){i(window.matchMedia("(display-mode: standalone)").matches||/\bmode=standalone\b/.test(window.location.hash)||"localhost"===window.location.hostname),console.log(Fn.a.browserDetails.browser,Fn.a.browserDetails.version)}),[]),Object(ee.useEffect)((function(){var e=document.querySelector("#root");e&&Object(Ae.a)(e)}),[]),Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(In,{}),t?Object(he.jsx)(re.a,{basename:"/",children:Object(he.jsxs)(se.d,{children:[Object(he.jsx)(se.b,{exact:!0,path:"/",children:Object(he.jsx)(fe,{})}),Object(he.jsx)(se.b,{exact:!0,path:"/qr",children:Object(he.jsx)(Cn,{})}),Object(he.jsx)(se.b,{exact:!0,path:"/confirm",children:Object(he.jsx)(Xe,{})}),Object(he.jsx)(se.a,{to:"/"})]})}):Object(he.jsx)(Un,{})]})},In=Object(ae.a)(X||(X=Object(oe.a)(["\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color:#12b188;\n  width: 100%;\n  height: 100%;\n}\n\n\n#root {\n  width: 100%;\n  height: 100%;\n}\n\na {\n  text-decoration: none;\n}\n"]))),Ln=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Nn(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}ie.a.render(Object(he.jsx)(ne.a.StrictMode,{children:Object(he.jsx)(Wn,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/back-home-safe",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/back-home-safe","/service-worker.js");Ln?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Nn(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Nn(n,e)}))}}()}},[[63,1,2]]]);
//# sourceMappingURL=main.df84d3fd.chunk.js.map