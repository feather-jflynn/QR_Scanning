(this["webpackJsonpmobile-scanning"]=this["webpackJsonpmobile-scanning"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(12),n(4)),s=n.n(i),l=(n(13),n(1)),u=n.n(l),d=n(5),m=n(6),f=n.n(m);var h=function(){var e,t=window.innerHeight,n=window.innerWidth,c=Object(a.createRef)(),o=Object(a.createRef)(),i=function(){return requestAnimationFrame(s)};e=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{height:t,width:n,facingMode:"environment"}});case 3:a=e.sent,c.current.srcObject=a,c.current.onloadedmetadata=function(){c.current.play(),i()},e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),Object(a.useEffect)((function(){e()}),[e]);var s=function(){var e=o.current.getContext("2d");if(c.current.readyState===c.current.HAVE_ENOUGH_DATA){o.current.width=n,o.current.height=t,e.drawImage(c.current,0,0,n,t);var a=e.getImageData(0,0,n,t),r=f()(a.data,a.width,a.height,{inversionAttempts:"dontInvert"});r?l(r):i()}else i()},l=function(e){console.log(e)};return r.a.createElement("div",null,r.a.createElement("video",{ref:c}),r.a.createElement("canvas",{hidden:!0,ref:o}))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),r.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5034e7f1.chunk.js.map