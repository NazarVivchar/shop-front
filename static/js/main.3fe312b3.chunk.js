(window["webpackJsonpshop-front"]=window["webpackJsonpshop-front"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),o=(n(86),n(138)),c=n(67),i=n(0),l=n.n(i),s=(n(92),n(30)),u=n(17),p=n(58),d=n(59),f=n(68),h=n(139),g=n(113),w=n(148),O=n(64),m=n.n(O),b=n(140),y=n(141),E=n(142),v=n(62),j=n.n(v),D=n(40),k=n(60),C=n.n(k);var S=function(e){var t=C()();return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{container:!0,justify:"center",alignItems:"center",style:{height:"100px",background:t.palette.primary.dark}},l.a.createElement(D.a,{variant:"h2",color:"secondary",align:"center"},"Placeholder")),l.a.createElement(b.a,{position:"sticky",style:{top:0}},l.a.createElement(y.a,null,l.a.createElement(E.a,{color:"inherit",onClick:e.handleDrawerOpen},l.a.createElement(j.a,null)),l.a.createElement(D.a,{variant:"h5"},"Singularity"))))},P=n(10),T=n(149),x=n(145),A=n(146),G=n(147),I=n(63),R=n.n(I),W=n(144),L=n(143),_=n(31);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(P.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=Object(L.a)((function(e){return{drawerHeader:N({padding:"0 ".concat(e.spacing(1),"px")},e.mixins.toolbar)}}));var H=function(e){var t=Object(_.a)();return l.a.createElement(T.a,{anchor:"left",width:"240px",open:e.isDrawerOpened,onClose:e.handleDrawerClose},l.a.createElement(h.a,{container:!0,className:B().drawerHeader,alignItems:"center",justify:"flex-end"},l.a.createElement(E.a,{onClick:e.handleDrawerClose},l.a.createElement(R.a,null))),l.a.createElement(W.a,null),l.a.createElement("div",{style:{width:"240px"}},l.a.createElement(x.a,null,[1,2,3,4,5].map((function(e){return l.a.createElement(A.a,{button:!0,key:e,style:{padding:"".concat(t.spacing(2),"px \n                    ").concat(t.spacing(4),"px")}},l.a.createElement(G.a,{primary:"Link ".concat(e)}))})))))},J=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleDrawerOpen=function(){n.setState({isDrawerOpened:!0})},n.handleDrawerClose=function(){n.setState({isDrawerOpened:!1})},n.handleOutsideDrawerClick=function(){n.state.isDrawerOpened&&n.handleDrawerClose()},n.state={isDrawerOpened:!1},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.theme;return l.a.createElement("div",{style:{background:e.palette.background.light}},l.a.createElement(H,{isDrawerOpened:this.state.isDrawerOpened,handleDrawerClose:this.handleDrawerClose}),l.a.createElement(h.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",onClick:this.handleOutsideDrawerClick},l.a.createElement(S,{handleDrawerOpen:this.handleDrawerOpen}),l.a.createElement(w.a,{style:{marginTop:e.spacing(4)}},l.a.createElement(g.a,null,l.a.createElement("div",{style:{height:"1000px"}})))))}}]),t}(i.Component),F=m()(J);var M=function(){return l.a.createElement(F,null)},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=n(43),K=n.n(z),Q=n(44),V=n.n(Q),X=K()({palette:V()({primary:{main:"#101d23"},secondary:{main:"#00e5ff"},background:{light:"rgba(21,48,56,0.16)"},contrastThreshold:5,tonalOffset:.3}),spacing:8}),Y=n(24),Z=n(65),ee=n(66),te={GET_CATEGORIES:"[CATEGORIES] Trying to get categories",GET_CATEGORIES_SUCCESS:"[CATEGORIES] Successfully got all categories"};function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(P.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae={categories:[],isLoading:!0};function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te.GET_CATEGORIES:return re({},e,{isLoading:!0});case te.GET_CATEGORIES_SUCCESS:return re({},e,{categories:t.payload,isLoading:!1});default:return e}}var ce=Object(Y.combineReducers)({categoriesData:oe,productsData:oe}),ie=Object(Y.createStore)(ce,Object(Z.composeWithDevTools)(Object(Y.applyMiddleware)(ee.a)));a.a.render(l.a.createElement(c.a,{store:ie},l.a.createElement(o.a,{theme:X},l.a.createElement(M,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/simple-shop",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/simple-shop","/service-worker.js");$?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()},81:function(e,t,n){e.exports=n(108)},86:function(e,t,n){},92:function(e,t,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.3fe312b3.chunk.js.map