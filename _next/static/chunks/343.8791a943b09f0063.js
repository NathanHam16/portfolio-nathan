(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[343],{7460:function(e,n,t){"use strict";t.r(n),t.d(n,{Armor:function(){return M}});var r=t(7568),a=t(1799),i=t(9396),o=t(9534),u=t(828),c=t(4051),s=t.n(c),f=t(5893),l="/portfolio-nathan/_next/static/media/volkihar-cube-nx.6150c9af.jpg",d="/portfolio-nathan/_next/static/media/volkihar-cube-ny.f2c25620.jpg",v="/portfolio-nathan/_next/static/media/volkihar-cube-nz.094dd0b3.jpg",p="/portfolio-nathan/_next/static/media/volkihar-cube-px.cb007f0e.jpg",h="/portfolio-nathan/_next/static/media/volkihar-cube-py.46d12f37.jpg",m="/portfolio-nathan/_next/static/media/volkihar-cube-pz.e7c6feeb.jpg",y=t.p+"static/media/volkihar-knight.d62f417b.glb",w=t(7206),x=t(3994),b=t(7260),g=t(6240),_=t(7378),k=t(4529),C=t(7294),j=t(9477);const S=Math.PI/180;Math.PI;var E=t(2362),P=t(3142),R=t(3934),z=t.n(R),L={stiffness:40,damping:20,mass:1.5},M=function(e){var n=e.showDelay,t=void 0===n?0:n,c=e.cameraPosition,R=void 0===c?{x:0,y:0,z:6}:c,M=e.className,N=e.alt,Z=(0,o.Z)(e,["showDelay","cameraPosition","className","alt"]),A=(0,C.useState)(!1),O=A[0],T=A[1],q=(0,C.useState)(!1),D=q[0],F=q[1],J=(0,C.useState)(!1),H=J[0],I=J[1],W=(0,C.useRef)(),B=(0,C.useRef)(),U=(0,C.useRef)(),Y=(0,C.useRef)(),G=(0,C.useRef)(),K=(0,C.useRef)(),V=(0,C.useRef)(),X=(0,k.NM)(W,!1,{threshold:.4}),Q=(0,g.J)(),$=(0,_.q)(0,L),ee=(0,_.q)(0,L);(0,C.useEffect)((function(){var e=W.current,n=e.clientWidth,t=e.clientHeight;K.current=new j.CP7({canvas:B.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),K.current.setPixelRatio(2),K.current.setSize(n,t),K.current.outputEncoding=j.knz,K.current.physicallyCorrectLights=!0,K.current.toneMapping=j.LY2,U.current=new j.cPb(36,n/t,.1,100),U.current.position.set(R.x,R.y,R.z),G.current=new j.xsS;var a=new j.cBK;Y.current=new j.ZAu,G.current.add(Y.current);var i=new j.anP(K.current);i.compileCubemapShader();var o=new j.Ox3(16777215,3.2),c=new j.Ox3(16777215,1),f=new j.Ox3(16777215,1);o.position.set(1,.1,2),c.position.set(-1,.1,8),f.position.set(-2,2,-3),V.current=[f,o,c],V.current.forEach((function(e){return G.current.add(e)}));var w=function(){var e=(0,r.Z)(s().mark((function e(){var n,t,o,c,f,w;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=P.Zf.loadAsync(y),t=a.loadAsync([l,d,v,p,h,m]),e.t0=u.Z,e.next=5,Promise.all([n,t]);case 5:return e.t1=e.sent,o=(0,e.t0)(e.t1,2),c=o[0],f=o[1],Y.current.add(c.scene),c.scene.rotation.y=180*S,c.scene.position.y=-1.6,w=i.fromCubemap(f).texture,G.current.environment=w,i.dispose(),e.next=17,K.current.initTexture(G.current.environment);case 17:Y.current.traverse(function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.material){e.next=3;break}return e.next=3,K.current.initTexture(n.material);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),T(!0),ne();case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,C.startTransition)((function(){w(),setTimeout((function(){I(!0)}),1e3)}));var x=$.onChange((function(e){Y.current.rotation.x=e,ne()})),b=ee.onChange((function(e){Y.current.rotation.y=e,ne()}));return function(){(0,P.Ji)(V.current),(0,P.in)(G.current),(0,P.e8)(K.current),x(),b()}}),[]);var ne=(0,C.useCallback)((function(){K.current.render(G.current,U.current)}),[]);return(0,C.useEffect)((function(){var e=function(e){var n=window.innerWidth,t=window.innerHeight,r=(e.clientX-n/2)/n,a=(e.clientY-t/2)/t;$.set(a/2),ee.set(r/2)};return X&&F(!0),X&&!Q&&window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[X,Q,$,ee]),(0,C.useEffect)((function(){var e=function(){if(W.current){var e=W.current,n=e.clientWidth,t=e.clientHeight;K.current.setSize(n,t),U.current.aspect=n/t,U.current.updateProjectionMatrix(),ne()}};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[ne]),(0,f.jsxs)("div",(0,i.Z)((0,a.Z)({className:(0,E.Sh)(z().armor,M),ref:W,role:"img","aria-label":N},Z),{children:[(0,f.jsx)(b.u,{unmount:!0,in:!O&&H,timeout:(0,E.zG)(x.T.base.durationL),children:function(e){return(0,f.jsx)(w.a,{className:z().loader,"data-visible":e})}}),(0,f.jsx)("canvas",{className:z().canvas,ref:B,"data-loaded":O&&D,style:(0,E.Fh)({delay:(0,E.aU)(t)})})]}))}},3142:function(e,n,t){"use strict";t.d(n,{Et:function(){return s},Ji:function(){return v},Zf:function(){return c},e8:function(){return d},in:function(){return f},x2:function(){return p}});var r=t(9477),a=t(4976),i=t(7607);r.CtF.enabled=!0;var o=new a._,u=new i.E;o.setDecoderPath("/draco/"),u.setDRACOLoader(o);var c=u,s=new r.dpR,f=function(e){null===e||void 0===e||e.traverse((function(e){if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)l(e.material);else{var n=!0,t=!1,r=void 0;try{for(var a,i=e.material[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var o=a.value;l(o)}}catch(u){t=!0,r=u}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}}}))},l=function(e){e.dispose();var n=!0,t=!1,r=void 0;try{for(var a,i=Object.keys(e)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var o,u,c,s=e[a.value];if(s&&"object"===typeof s&&"minFilter"in s)s.dispose(),null===(o=s.source)||void 0===o||null===(u=o.data)||void 0===u||null===(c=u.close)||void 0===c||c.call(u)}}catch(f){t=!0,r=f}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}},d=function(e){e.dispose(),e=null},v=function(e){var n=!0,t=!1,r=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var o=a.value;o.parent.remove(o)}}catch(u){t=!0,r=u}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}},p=function(e,n){var t;return n.traverse((function(n){n.name===e&&(t=n)})),t}},3934:function(e){e.exports={armor:"Armor_armor__npq42",loader:"Armor_loader___wk2y",canvas:"Armor_canvas__Oe927"}},7378:function(e,n,t){"use strict";t.d(n,{q:function(){return l}});var r=t(655),a=t(7294),i=t(754),o=t(406),u=t(3234),c=t(6014),s=t(6681);var f=t(8868);function l(e,n){void 0===n&&(n={});var t=(0,a.useContext)(c._).isStatic,l=(0,a.useRef)(null),d=function(e){var n=(0,s.h)((function(){return(0,u.B)(e)}));if((0,a.useContext)(c._).isStatic){var t=(0,r.CR)((0,a.useState)(e),2)[1];(0,a.useEffect)((function(){return n.onChange(t)}),[])}return n}((0,o.i)(e)?e.get():e);return(0,a.useMemo)((function(){return d.attach((function(e,a){return t?a(e):(l.current&&l.current.stop(),l.current=(0,i.j)((0,r.pi)((0,r.pi)({from:d.get(),to:e,velocity:d.getVelocity()},n),{onUpdate:a})),d.get())}))}),[JSON.stringify(n)]),function(e,n){(0,f.L)((function(){if((0,o.i)(e))return e.onChange(n)}),[n])}(e,(function(e){return d.set(parseFloat(e))})),d}}}]);