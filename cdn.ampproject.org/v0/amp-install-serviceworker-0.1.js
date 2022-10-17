;
(self.AMP=self.AMP||[]).push({m:0,v:"2209142312000",n:"amp-install-serviceworker",ev:"0.1",l:!0,f:function(t,r){!function(){function r(t,n){return(r=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,n)}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}Array.isArray;var o=Object.prototype;function u(t,r){void 0===r&&(r=t.hasAttribute("hidden")),r?t.removeAttribute("hidden"):t.setAttribute("hidden","")}o.hasOwnProperty,o.toString;var c=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function a(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return r}}function f(t){var r=(t||self).location;return function(t){var r,n=Object.create(null);if(!t)return n;for(;r=c.exec(t);){var e=a(r[1],r[1]),i=r[2]?a(r[2].replace(/\+/g," "),r[2]):"";n[e]=i}return n}(r.originalHash||r.hash)}var s="";function l(t){var r;return s||(s=(null===(r=t.AMP_CONFIG)||void 0===r?void 0:r.v)||"01".concat("2209142312000")),s}function h(t,r){var n=r||f(t);return["1","actions","amp","amp4ads","amp4email"].includes(n.development)||!!t.AMP_DEV_MODE}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v=self.__AMP_LOG;function d(t){return v.user||(v.user=p()),function(t,r){return r&&r.ownerDocument.defaultView!=t}(v.user.win,t)?v.userForEmbed||(v.userForEmbed=p()):v.user}function p(t){return function(t,r){throw new Error("failed to call initLogConstructor")}()}function m(t,r,n,e,i,o,u,c,a,f,s){return t}function b(t,r,n,e,i,o,u,c,a,f,s){return d().assert(t,r,n,e,i,o,u,c,a,f,s)}function y(t,r){return g(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),r)}function w(t){return t.nodeType?(n=t,r=(n.ownerDocument||n).defaultView,y(r,"ampdoc")).getAmpDoc(t):t;var r,n}function k(t){var r=w(t);return r.isSingleDoc()?r.win:r}function g(t,r){m(S(t,r));var n=function(t){var r=t.__AMP_SERVICES;return r||(r=t.__AMP_SERVICES={}),r}(t)[r];return n.obj||(m(n.ctor),m(n.context),n.obj=new n.ctor(n.context),m(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function S(t,r){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[r];return!(!n||!n.ctor)}var R,j=function(t){return"url",S(r=k(w(t)),"url")?g(r,"url"):null;var r};function I(t){var r=t.indexOf("#");return-1==r?t:t.substring(0,r)}new Set(["c","v","a","ad"]);var O=function(){return self.AMP.config.urls}(),E="amp-install-serviceworker",A=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}(a,t);var e,o,c=(e=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=n(e);if(o){var u=n(this).constructor;t=Reflect.construct(r,arguments,u)}else t=r.apply(this,arguments);return i(this,t)});function a(t){var r,n;return(r=c.call(this,t)).cR=null,r.aR=null,r.fR=(n=r.win,y(n,"platform")).isSafari(),r}var s=a.prototype;return s.buildCallback=function(){var t=this,r=this.win;if("serviceWorker"in r.navigator){var n=this.mO(),e=this.element.getAttribute("src");if(n.assertHttpsUrl(e,this.element),!n.isProxyOrigin(e)&&!n.isProxyOrigin(r.location.href)||this.fR)n.parse(r.location.href).origin==n.parse(e).origin?this.sR().then((function(){return function(t,r,n){var e={};return n.hasAttribute("data-scope")&&(e.scope=n.getAttribute("data-scope")),t.navigator.serviceWorker.register(r,e).then((function(r){(function(t){var r=self;return r.__AMP_MODE?r.__AMP_MODE:r.__AMP_MODE=function(t){return{localDev:!1,development:h(t,f(t)),esm:!1,test:!1,rtvVersion:l(t),ssrReady:!1}}(r)})().development&&d().info(E,"ServiceWorker registration successful with scope: ",r.scope);var e=r.installing;return e?e.addEventListener("statechange",(function(e){"activated"===e.target.state&&C(r,t,n)})):r.active&&C(r,t,n),r}),(function(t){d().error(E,"ServiceWorker registration failed:",t)}))}(t.win,e,t.element)})):this.user().error(E,"Did not install ServiceWorker because it does not match the current origin: "+e);else{var i=this.element.getAttribute("data-iframe-src");if(i){n.assertHttpsUrl(i,this.element);var o=n.parse(i).origin,u=function(t,r){return g(k(w(t)),"documentInfo")}(this.element).get(),c=n.parse(u.sourceUrl),a=n.parse(u.canonicalUrl);b(o==c.origin||o==a.origin,"data-iframe-src (%s) should be a URL on the same origin as the source (%s) or canonical URL (%s) of the AMP-document.",o,c.origin,a.origin),this.cR=i,this.sR().then((function(){return t.lR()}))}}(n.isProxyOrigin(e)||n.isProxyOrigin(r.location.href))&&this.fR&&this.user().error(E,"Did not install ServiceWorker because of safari double keyring caching as it will not have any effect")}else this.hR()},s.sR=function(){return Promise.all([this.loadPromise(this.win),this.getAmpDoc().whenFirstVisible()])},s.lR=function(){var t=this;return this.mutateElement((function(){u(t.element,!1);var r=t.win.document.createElement("iframe");r.setAttribute("sandbox","allow-same-origin allow-scripts"),r.src=t.cR,t.element.appendChild(r)}))},s.hR=function(){if(this.getAmpDoc().isSingleDoc()){var t=this.getAmpDoc(),r=this.win,n=this.mO(),e=n.parse(r.location.href),i=this.element.getAttribute("data-no-service-worker-fallback-url-match"),o=this.element.getAttribute("data-no-service-worker-fallback-shell-url");if(i||o){var u;b(i&&o,'Both, "%s" and "%s" must be specified for url-rewrite',"data-no-service-worker-fallback-url-match","data-no-service-worker-fallback-shell-url"),o=I(o);try{u=new RegExp(i)}catch(t){throw d().createError('Invalid "data-no-service-worker-fallback-url-match" expression',t)}b(n.getSourceOrigin(e)==n.parse(o).origin,'Shell source origin "%s" must be the same as source origin "%s"',o,e.href),this.aR=new x(t,u,o,this.element),n.isSecure(o)&&this.vR(o)}}},s.vR=function(t){var r=this;return this.sR().then((function(){r.mutateElement((function(){return r.dR(t)}))}))},s.dR=function(t){var r=this.win.document.createElement("iframe");r.id="i-amphtml-shell-preload",r.setAttribute("src",t+"#preload"),u(r,!1),r.setAttribute("sandbox","allow-scripts allow-same-origin"),this.loadPromise(r).then((function(){var t,n;null===(n=(t=r).parentElement)||void 0===n||n.removeChild(t)})),this.element.appendChild(r)},s.mO=function(){return j(this.element)},a}(t.BaseElement),x=function(){function t(t,r,n,e){this.win=t.win,this.pR=r,this.mR=n,this.fA=j(e),this.bR=this.fA.parse(n),function(t,r,n,e){!function(t,r,n,e){var i=t,o=n,u=function(){if(void 0!==R)return R;R=!1;try{var t={get capture(){return R=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return R}();i.addEventListener("click",(function(t){try{return o(t)}catch(t){var r,n;throw null===(r=(n=self).__AMP_REPORT_ERROR)||void 0===r||r.call(n,t),t}}),!!u&&e)}(t,0,n,void 0)}(t.getRootNode(),0,this.Du.bind(this))}return t.prototype.Du=function(t){if(!t.defaultPrevented){var r,n=(r=t.target).closest?r.closest("A"):function(t,r,n){var e;for(e=t;e&&void 0!==e;e=e.parentElement)if(r(e))return e;return null}(r,(function(t){return function(t,r){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,"A")}(t)}));if(n&&n.href){var e=this.fA.parse(n.href);if(e.origin==this.bR.origin&&e.pathname!=this.bR.pathname&&this.pR.test(e.href)&&!n.getAttribute("i-amphtml-orig-href")){var i=this.win;I(e.href)!=I(i.location.href)&&(n.setAttribute("i-amphtml-orig-href",n.href),n.href=this.mR+"#href="+encodeURIComponent("".concat(e.pathname).concat(e.search).concat(e.hash)))}}}},t}();function C(t,r,n){!function(t,r){if("performance"in t){var n=t.performance.getEntriesByType("resource").filter((function(t){return"script"===t.initiatorType&&t.name.startsWith(O.cdn)})).map((function(t){return t.name})),e=r.active;e.postMessage&&e.postMessage(JSON.stringify({"type":"AMP__FIRST-VISIT-CACHING","payload":n}))}}(r,t),n.hasAttribute("data-prefetch")&&function(t,r){var n,e=r.document,i=[].map.call(e.querySelectorAll("a[data-rel=prefetch]"),(function(t){return t.href}));if((n=e.createElement("link")).relList&&n.relList.supports&&n.relList.supports("prefetch"))i.forEach((function(t){var r=e.createElement("link");r.setAttribute("rel","prefetch"),r.setAttribute("href",t),e.head.appendChild(r)}));else{var o=t.active;o.postMessage&&o.postMessage(JSON.stringify({"type":"AMP__LINK-PREFETCH","payload":i}))}}(t,r)}t.registerElement(E,A)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-install-serviceworker-0.1.js.map