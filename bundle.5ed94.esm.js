!function(e){function t(t){for(var n,r,o=t[0],u=t[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(a&&a(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1,3:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({2:"route-home",3:"route-profile"}[e]||e)+".chunk."+{2:"e6c71",3:"62c75"}[e]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(p=l[c]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(a===i||a===u))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var p;if((a=(p=s[c]).getAttribute("data-href"))===i||a===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=u,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(e){return n.p+""+({2:"route-home",3:"route-profile"}[e]||e)+".chunk."+{2:"c92b5",3:"5cb12"}[e]+".esm.js"}(e);var a=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var a=l;n(n.s="mdyV")}({GFNa:function(){},QfWi:function(e,t,n){"use strict";function r(e){function t(){o.Component.call(this),n||(this.componentWillMount=()=>{e(e=>{n=e&&e.default||e,this.setState({})})},this.shouldComponentUpdate=()=>null!=n),this.render=e=>{if(n)return Object(o.h)(n,e);const t=(this.__P||this._parentDom).lastChild;return t&&Object(o.h)(t.localName,{dangerouslySetInnerHTML:s})}}let n;return t.preload=e,(t.prototype=new o.Component).constructor=t,t}n.r(t);n("GFNa");var o=n("hosL"),i=n("Y3FI"),u=n("ox/y"),l=n("ySiU"),c=n.n(l);var a=()=>Object(o.h)("header",{class:c.a.header},Object(o.h)("h1",null,"Preact App"),Object(o.h)("nav",null,Object(o.h)(u.Link,{activeClassName:c.a.active,href:"/"},"Home"),Object(o.h)(u.Link,{activeClassName:c.a.active,href:"/profile"},"Me"),Object(o.h)(u.Link,{activeClassName:c.a.active,href:"/profile/john"},"John")));const s={};var p=r((function(e){n.e(2).then(function(){e(n("+1Jk"))}.bind(null,n)).catch(n.oe)})),f=r((function(e){n.e(3).then(function(){e(n("BM80"))}.bind(null,n)).catch(n.oe)}));t.default=class extends o.Component{constructor(...e){super(...e),this.handleRoute=e=>{this.currentUrl=e.url}}render(){return Object(o.h)("div",{id:"app"},Object(o.h)(a,null),Object(o.h)(i.Router,{onChange:this.handleRoute},Object(o.h)(p,{path:"/"}),Object(o.h)(f,{path:"/profile/",user:"me"}),Object(o.h)(f,{path:"/profile/:user"})))}}},Y3FI:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var s=c[a].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=l(e.replace(o,"")),t=l(t||"");for(var p=Math.max(e.length,t.length),f=0;f<p;f++)if(t[f]&&":"===t[f].charAt(0)){var _=t[f].replace(/(^:|[+*?]+$)/g,""),h=(t[f].match(/[+*?]+$/)||v)[0]||"",d=~h.indexOf("+"),y=~h.indexOf("*"),m=e[f]||"";if(!m&&!y&&(h.indexOf("?")<0||d)){r=!1;break}if(u[_]=decodeURIComponent(m),d||y){u[_]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function u(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,l(t).map(c).join(""));var t}(e),e.props}function l(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function c(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function a(){var e;return""+((e=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(e.search||"")}function s(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=g.length;t--;)if(g[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),m&&m[t]?m[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),p(e)}function p(e){for(var t=!1,n=0;n<g.length;n++)!0===g[n].routeTo(e)&&(t=!0);for(var r=b.length;r--;)b[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(t)}}function _(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return f(e.currentTarget||e.target||this),h(e)}function h(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function d(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(f(t))return h(e)}}while(t=t.parentNode)}}n.r(t),n.d(t,"subscribers",(function(){return b})),n.d(t,"getCurrentUrl",(function(){return a})),n.d(t,"route",(function(){return s})),n.d(t,"Router",(function(){return O})),n.d(t,"Route",(function(){return w})),n.d(t,"Link",(function(){return x})),n.d(t,"exec",(function(){return o}));var y=n("hosL"),v={},m=null,g=[],b=[],k={},C=!1,O=function(e){function t(t){e.call(this,t),t.history&&(m=t.history),this.state={url:t.url||a()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){p(a())})),addEventListener("click",d)),C=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(y.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){g.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;m&&(this.unlisten=m.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(u).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var u={url:t,matches:i};return r(u,i),delete u.ref,delete u.key,Object(y.cloneElement)(e,u)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(y.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},t}(y.Component),x=function(e){return Object(y.createElement)("a",r({onClick:_},e))},w=function(e){return Object(y.createElement)(e.component,e)};O.subscribers=b,O.getCurrentUrl=a,O.route=s,O.Router=O,O.Route=w,O.Link=x,O.exec=o,t.default=O},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o=arguments,i={};for(r in t)"key"!==r&&"ref"!==r&&(i[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return u(e,i,t&&t.key,t&&t.ref,null)}function u(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),L.vnode&&L.vnode(i),i}function l(){return{current:null}}function c(e){return e.children}function a(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function p(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return p(e)}}function f(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!_.__r++||M!==L.debounceRendering)&&((M=L.debounceRendering)||T)(_)}function _(){for(var e;_.__r=N.length;)e=N.sort((function(e,t){return e.__v.__b-t.__v.__b})),N=[],e.some((function(e){var t,n,o,i,u,l,c;e.__d&&(l=(u=(t=e).__v).__e,(c=t.__P)&&(n=[],(o=r({},u)).__v=o,i=k(c,u,o,t.__n,void 0!==c.ownerSVGElement,null,n,null==l?s(u):l),C(n,u),i!=l&&p(u)))}))}function h(e,t,n,r,i,l,a,p,f,_){var h,d,v,m,g,b,C,O=r&&r.__k||W,j=O.length;for(f==I&&(f=null!=a?a[0]:j?s(r,0):null),n.__k=[],h=0;h<t.length;h++)if(null!=(m=n.__k[h]=null==(m=t[h])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(c,{children:m},null,null,null):null!=m.__e||null!=m.__c?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=O[h])||v&&m.key==v.key&&m.type===v.type)O[h]=void 0;else for(d=0;d<j;d++){if((v=O[d])&&m.key==v.key&&m.type===v.type){O[d]=void 0;break}v=null}g=k(e,m,v=v||I,i,l,a,p,f,_),(d=m.ref)&&v.ref!=d&&(C||(C=[]),v.ref&&C.push(v.ref,null,m),C.push(d,m.__c||g,m)),null!=g?(null==b&&(b=g),f=y(e,m,v,O,a,g,f),"option"==n.type?e.value="":"function"==typeof n.type&&(n.__d=f)):f&&v.__e==f&&f.parentNode!=e&&(f=s(v))}if(n.__e=b,null!=a&&"function"!=typeof n.type)for(h=a.length;h--;)null!=a[h]&&o(a[h]);for(h=j;h--;)null!=O[h]&&w(O[h],O[h]);if(C)for(h=0;h<C.length;h++)x(C[h],C[++h],C[++h])}function d(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?W.concat.apply([],e.map(d)):[e]}function y(e,t,n,r,o,i,u){var l,c,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(o==n||i!=u||null==i.parentNode)e:if(null==u||u.parentNode!==e)e.appendChild(i),l=null;else{for(c=u,a=0;(c=c.nextSibling)&&a<r.length;a+=2)if(c==i)break e;e.insertBefore(i,u),l=u}return void 0!==l?l:i.nextSibling}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===F.test(t)?n+"px":null==n?"":n}function m(e,t,n,r,o){var i,u,l,c,a;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(c in r)n&&c in n||v(i,c,"");if(n)for(a in n)r&&n[a]===r[a]||v(i,a,n[a])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),l=t.toLowerCase(),t=(l in e?l:t).slice(2),n?(r||e.addEventListener(t,g,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,g,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function g(e){this.l[e.type](L.event?L.event(e):e)}function b(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&b(o,t,n),t=y(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function k(e,t,n,o,i,u,l,s,p){var f,_,d,y,v,m,g,k,C,x,w,S=t.type;if(void 0!==t.constructor)return null;(f=L.__b)&&f(t);try{e:if("function"==typeof S){if(k=t.props,C=(f=S.contextType)&&o[f.__c],x=f?C?C.props.value:f.__:o,n.__c?g=(_=t.__c=n.__c).__=_.__E:("prototype"in S&&S.prototype.render?t.__c=_=new S(k,x):(t.__c=_=new a(k,x),_.constructor=S,_.render=j),C&&C.sub(_),_.props=k,_.state||(_.state={}),_.context=x,_.__n=o,d=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=S.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=r({},_.__s)),r(_.__s,S.getDerivedStateFromProps(k,_.__s))),y=_.props,v=_.state,d)null==S.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==S.getDerivedStateFromProps&&k!==y&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(k,x),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(k,_.__s,x)||t.__v===n.__v){_.props=k,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,_.__h.length&&l.push(_),b(t,s,e);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(k,_.__s,x),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(y,v,m)}))}_.context=x,_.props=k,_.state=_.__s,(f=L.__r)&&f(t),_.__d=!1,_.__v=t,_.__P=e,f=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=r(r({},o),_.getChildContext())),d||null==_.getSnapshotBeforeUpdate||(m=_.getSnapshotBeforeUpdate(y,v)),w=null!=f&&f.type==c&&null==f.key?f.props.children:f,h(e,Array.isArray(w)?w:[w],t,n,o,i,u,l,s,p),_.base=t.__e,_.__h.length&&l.push(_),g&&(_.__E=_.__=null),_.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=O(n.__e,t,n,o,i,u,l,p);(f=L.diffed)&&f(t)}catch(e){t.__v=null,L.__e(e,t,n)}return t.__e}function C(e,t){L.__c&&L.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){L.__e(e,t.__v)}}))}function O(e,t,n,r,o,i,u,l){var c,a,s,p,f,_=n.props,d=t.props;if(o="svg"===t.type||o,null!=i)for(c=0;c<i.length;c++)if(null!=(a=i[c])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,i[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,d.is&&{is:d.is}),i=null,l=!1}if(null===t.type)_!==d&&e.data!=d&&(e.data=d);else{if(null!=i&&(i=W.slice.call(e.childNodes)),s=(_=n.props||I).dangerouslySetInnerHTML,p=d.dangerouslySetInnerHTML,!l){if(null!=i)for(_={},f=0;f<e.attributes.length;f++)_[e.attributes[f].name]=e.attributes[f].value;(p||s)&&(p&&s&&p.__html==s.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||m(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||m(e,i,t[i],n[i],r)})(e,d,_,o,l),p?t.__k=[]:(c=t.props.children,h(e,Array.isArray(c)?c:[c],t,n,r,"foreignObject"!==t.type&&o,i,u,I,l)),l||("value"in d&&void 0!==(c=d.value)&&c!==e.value&&m(e,"value",c,_.value,!1),"checked"in d&&void 0!==(c=d.checked)&&c!==e.checked&&m(e,"checked",c,_.checked,!1))}return e}function x(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){L.__e(e,n)}}function w(e,t,n){var r,i,u;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||x(r,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&w(r[u],t,n);null!=i&&o(i)}function j(e,t,n){return this.constructor(e,n)}function S(e,t,n){var r,o,u;L.__&&L.__(e,t),o=(r=n===R)?null:n&&n.__k||t.__k,e=i(c,null,[e]),u=[],k(t,(r?t:n||t).__k=e,o||I,I,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:t.childNodes.length?W.slice.call(t.childNodes):null,u,n||I,r),C(u,e)}function P(e,t){S(e,t,R)}function U(e,t){var n,o;for(o in t=r(r({},e.props),t),arguments.length>2&&(t.children=W.slice.call(arguments,2)),n={},t)"key"!==o&&"ref"!==o&&(n[o]=t[o]);return u(e.type,n,t.key||e.key,t.ref||e.ref,null)}function A(e){var t={},n={__c:"__cC"+D++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(e){o.props.value!==e.value&&r.some((function(t){t.context=e.value,f(t)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}n.r(t),n.d(t,"render",(function(){return S})),n.d(t,"hydrate",(function(){return P})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return c})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return E})),n.d(t,"Component",(function(){return a})),n.d(t,"cloneElement",(function(){return U})),n.d(t,"createContext",(function(){return A})),n.d(t,"toChildArray",(function(){return d})),n.d(t,"__u",(function(){return w})),n.d(t,"options",(function(){return L}));var L,E,N,T,M,R,D,I={},W=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return f(n.__E=n)}catch(t){e=t}throw e}},E=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},a.prototype.render=c,N=[],T="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_.__r=0,R=I,D=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,l=e=>e&&e.default?e.default:e;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let t=l(n("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const a=r.url?"/"===(s=r.url)[s.length-1]?s:s+"/":"";var s;const p=u&&a===location.pathname;e=(p?u:i)(o(t,{CLI_DATA:{preRenderData:r}}),document.body,e)})()}},"ox/y":function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("hosL"),u=n("Y3FI"),l=t.Match=function(e){function t(){for(var t,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return t=n=r(this,e.call.apply(e,[this].concat(i))),n.update=function(e){n.nextUrl=e,n.setState({})},r(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){u.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,u.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children({url:t,path:n,matches:!1!==(0,u.exec)(n,e.path,{})})},t}(i.Component),c=function(e){var t=e.activeClassName,n=e.path,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(e){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,e.matches&&t].filter(Boolean).join(" ")}))}))};t.Link=c,t.default=l,l.Link=c},ySiU:function(e){e.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=bundle.5ed94.esm.js.map