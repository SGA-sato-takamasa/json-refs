!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.JsonRefs=e()}}(function(){var e;return function r(e,t,n){function o(a,u){if(!t[a]){if(!e[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var s=t[a]={exports:{}};e[a][0].call(s.exports,function(r){var t=e[a][1][r];return o(t?t:r)},s,s.exports,r,e,t,n)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,r,t){(function(t){"use strict";function n(e){var r;return d(e,"Array")?(r=[],e.forEach(function(e,t){r[t]=n(e)})):d(e,"Object")?(r={},Object.keys(e).forEach(function(t){r[t]=n(e[t])})):r=e,r}function o(e,r){function t(e){return d(e,"Undefined")||""===e?[]:e.split("/")}function n(e){".."===e?o.pop():o.push(e)}var o=[];return t(e).concat(t(r)).forEach(n),0===o.length?"":o.join("/")}function i(e,r){function t(e){Object.keys(e).forEach(function(r){n[r]=e[r]})}var n={};return t(N.parse(e||"")),t(N.parse(r||"")),0===Object.keys(n).length?void 0:N.stringify(n)}function a(e,r){d(e,"String")&&(e=_(e)),d(r,"String")&&(r=_(r));var t,n,a=I.parse(d(r,"Undefined")?"":r);return"absolute"===a.reference||"uri"===a.reference?n=a:(t=d(e,"Undefined")?void 0:I.parse(e),d(t,"Undefined")?n=a:(n=t,n.path=I.normalize(o(t.path,a.path)),n.query=i(t.query,a.query))),n.fragment=void 0,I.serialize(n)}function u(e,r){var t=v(e),n={},o=D(y(e));return Object.keys(r).forEach(function(e){var i=r[e];t(i,P(e))===!0&&e.indexOf(o)>-1&&(n[e]=i)}),n}function c(e,r){var t=[],n=e;return r.slice(0,r.length-1).forEach(function(e){e in n&&(n=n[e],t.push(n))}),t}function f(e,r,t,o,i){var u=Promise.resolve(),c=O(e,r);return Object.keys(c).forEach(function(e){var s,p,h=c[e],l=P(e);H.indexOf(h.type)>-1&&(s=a(r.relativeBase,h.uri),p=t.indexOf(s),-1===p?u=u.then(function(){var e=o.concat(l),a=n(r);return delete a.subDocPath,a.relativeBase=s.substring(0,s.lastIndexOf("/")),S(h.uri,r).then(function(r){return r.location=s,h.uriDetails.fragment?(r.refs={},i[D(e)]=r,r):(Object.keys(r.refs).forEach(function(t){r.refs[t].parentLocation=D(e)}),i[D(e)]=r,f(r.value,a,t.concat(s),e,i))})}):(t.slice(p).forEach(function(e){Object.keys(i).forEach(function(r){var t=i[r];t.location===e&&(t.circular=!0)})}),i[D(o)].refs[e].circular=!0))}),u=u.then(function(){return 0===o.length&&Object.keys(i).forEach(function(e){var r=i[e];Object.keys(r.refs).forEach(function(t){var n=D(P(e).concat(P(t))),o=c[n];d(o,"Undefined")&&(c[n]=r.refs[t])}),c[e].value=r.value,r.circular&&(c[e].circular=!0)}),c})}function s(e,r,t){var n=e;try{r.forEach(function(e){if(!(e in n))throw Error("JSON Pointer points to missing location: "+D(r));n=n[e]})}catch(o){if(t!==!0)throw o;n=void 0}return n}function p(e){return Object.keys(e).filter(function(e){return"$ref"!==e})}function h(e,r){var t=q[e],o=Promise.resolve(),i=n(r.loaderOptions||{});return d(t,"Undefined")?(d(i.processContent,"Undefined")&&(i.processContent=function(e,r){r(void 0,JSON.parse(e.text))}),o=R.load(e,i),o=o.then(function(r){return q[e]={value:r},r})["catch"](function(r){throw q[e]={error:r},r})):o=o.then(function(){return t.value}),o=o.then(function(e){return n(e)})}function l(e,r){var t=!0;try{if(!d(e,"Object"))throw new Error("obj is not an Object");if(!d(e.$ref,"String"))throw new Error("obj.$ref is not a String")}catch(n){if(r)throw n;t=!1}return t}function d(e,r){return"Undefined"===r?"undefined"==typeof e:Object.prototype.toString.call(e)==="[object "+r+"]"}function v(e){var r;return r=d(e.filter,"Array")||d(e.filter,"String")?function(r){var t=d(e.filter,"String")?[e.filter]:e.filter;return t.indexOf(r.type)>-1}:d(e.filter,"Function")?e.filter:function(){return!0}}function y(e){var r=[];return d(e.subDocPath,"Array")?r=e.subDocPath:d(e.subDocPath,"String")&&(r=P(e.subDocPath)),r}function g(e,r,t){s(e,r.slice(0,r.length-1))[r[r.length-1]]=t}function m(e,r,t,n){function o(r,o){t.push(o),m(e,r,t,n),t.pop()}var i=!0;d(n,"Function")&&(i=n(e,r,t)),-1===e.indexOf(r)&&(e.push(r),i!==!1&&(d(r,"Array")?r.forEach(function(e,r){o(e,r.toString())}):d(r,"Object")&&Object.keys(r).forEach(function(e){o(r[e],e)}))),e.pop()}function E(e){if(!d(e,"Undefined")){if(!d(e,"Object"))throw new TypeError("options must be an Object");if(!(d(e.subDocPath,"Undefined")||d(e.subDocPath,"Array")||A(e.subDocPath)))throw new TypeError("options.subDocPath must be an Array of path segments or a valid JSON Pointer");if(!(d(e.filter,"Undefined")||d(e.filter,"Array")||d(e.filter,"Function")||d(e.filter,"String")))throw new TypeError("options.filter must be an Array, a Function of a String")}}function C(){q={}}function w(e){if(!d(e,"Array"))throw new TypeError("path must be an array");return e.map(function(e){return d(e,"String")||(e=JSON.stringify(e)),e.replace(/~1/g,"/").replace(/~0/g,"~")})}function b(e){if(!d(e,"Array"))throw new TypeError("path must be an array");return e.map(function(e){return d(e,"String")||(e=JSON.stringify(e)),e.replace(/~/g,"~0").replace(/\//g,"~1")})}function O(e,r){var t,n,o=[],i=e,a={};if(!d(e,"Array")&&!d(e,"Object"))throw new TypeError("obj must be an Array or an Object");return d(r,"Undefined")&&(r={}),E(r),t=y(r),n=v(r),t.length>0&&(o=c(e,t),i=s(e,t)),m(o,i,t,function(e,r,t){var o,i=!0;return l(r)&&(o=x(r),"invalid"!==o.type&&(n(o,t)===!0&&(a[D(t)]=o),p(r).length>0&&(i=!1))),i}),a}function S(e,r){var t=Promise.resolve();return t=t.then(function(){var t;if(!d(e,"String"))throw new TypeError("location must be a string");return d(r,"Undefined")&&(r={}),E(r),t=n(r),e=a(r.relativeBase,e),t.relativeBase=e.substring(0,e.lastIndexOf("/")),h(e,t)}).then(function(t){var o,i=n(q[e]);return d(i.refs,"Undefined")&&(o=n(r),delete o.filter,delete o.subDocPath,q[e].refs=O(t,o),i.refs=u(r,q[e].refs)),i})}function x(e){var r,t,n,o={def:e};try{if(l(e,!0)){if(r=e.$ref,n=L[r],d(n,"Undefined")&&(n=L[r]=I.parse(r)),o.uri=r,o.uriDetails=n,d(n.error,"Undefined"))switch(n.reference){case"absolute":case"uri":o.type="remote";break;case"same-document":o.type="local";break;default:o.type=n.reference}else o.error=o.uriDetails.error,o.type="invalid";t=p(e),t.length>0&&(o.warning="Extra JSON Reference properties will be ignored: "+t.join(", "))}else o.type="invalid"}catch(i){o.error=i.message,o.type="invalid"}return o}function A(e,r){var t,n=!0;try{if(!d(e,"String"))throw new Error("ptr is not a String");if(""!==e){if(t=e.charAt(0),-1===["#","/"].indexOf(t))throw new Error("ptr must start with a / or #/");if("#"===t&&"#"!==e&&"/"!==e.charAt(1))throw new Error("ptr must start with a / or #/");if(e.match(F))throw new Error("ptr has invalid token(s)")}}catch(o){if(r===!0)throw o;n=!1}return n}function j(e,r){return l(e,r)&&"invalid"!==x(e,r).type}function P(e){if(!A(e))throw new Error("ptr must be a JSON Pointer");var r=e.split("/");return r.shift(),w(r)}function D(e,r){if(!d(e,"Array"))throw new Error("path must be an Array");return(r!==!1?"#":"")+(e.length>0?"/":"")+b(e).join("/")}function T(e,r){var t=Promise.resolve();return t=t.then(function(){if(!d(e,"Array")&&!d(e,"Object"))throw new TypeError("obj must be an Array or an Object");d(r,"Undefined")&&(r={}),E(r)}).then(function(){return f(e,r,[],[],{})}).then(function(r){var t=n(e),o=[];return Object.keys(r).forEach(function(e){var n,o=r[e];if(H.indexOf(o.type)>-1)if(d(o.error,"Undefined")&&"invalid"!==o.type)try{n=s(o.value||{},o.uriDetails.fragment?P(o.uriDetails.fragment):[]),g(t,P(e),n),d(o.value,"Undefined")?o.circular&&(o.value={}):o.value=n}catch(i){o.error=i.message,o.missing=!0}else o.missing=!0}),Object.keys(r).forEach(function(e){var n,i=r[e],a=i.parentLocation;if(d(a,"Undefined")||-1!==o.indexOf(e)||o.push(e),-1===H.indexOf(i.type)&&"invalid"!==i.type)if(d(i.error,"Undefined")){e.indexOf(i.uri)>-1?(i.circular=!0,n={}):d(a,"Undefined")||(n=s(s(t,P(a)),i.uriDetails.fragment?P(i.uriDetails.fragment):[],!0));try{d(n,"Undefined")&&(n=s(t,i.uriDetails.fragment?P(i.uriDetails.fragment):[])),g(t,P(e),n),i.value=n}catch(u){i.error=u,i.missing=!0}}else i.missing=!0}),o.forEach(function(e){delete r[e].parentLocation}),{refs:r,resolved:t}})}function U(e,r){var t=Promise.resolve();return t=t.then(function(){var t;if(!d(e,"String"))throw new TypeError("location must be a string");return d(r,"Undefined")&&(r={}),E(r),t=n(r),e=a(r.relativeBase,e),t.relativeBase=e.substring(0,e.lastIndexOf("/")),h(e,t)}).then(function(e){return T(e,r).then(function(r){return{refs:r.refs,resolved:r.resolved,value:e}})})}var R="undefined"!=typeof window?window.PathLoader:"undefined"!=typeof t?t.PathLoader:null,N=e("querystring"),_=e("slash"),I=e("uri-js"),F=/~(?:[^01]|$)/g,q={},H=["relative","remote"],L={};"undefined"==typeof Promise&&e("native-promise-only"),r.exports.clearCache=C,r.exports.decodePath=w,r.exports.encodePath=b,r.exports.findRefs=O,r.exports.findRefsAt=S,r.exports.getRefDetails=x,r.exports.isPtr=A,r.exports.isRef=j,r.exports.pathFromPtr=P,r.exports.pathToPtr=D,r.exports.resolveRefs=T,r.exports.resolveRefsAt=U}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"native-promise-only":2,querystring:5,slash:6,"uri-js":12}],2:[function(r,t,n){(function(r){!function(r,n,o){n[r]=n[r]||o(),"undefined"!=typeof t&&t.exports?t.exports=n[r]:"function"==typeof e&&e.amd&&e(function(){return n[r]})}("Promise","undefined"!=typeof r?r:this,function(){"use strict";function e(e,r){h.add(e,r),p||(p=d(h.drain))}function r(e){var r,t=typeof e;return null==e||"object"!=t&&"function"!=t||(r=e.then),"function"==typeof r?r:!1}function t(){for(var e=0;e<this.chain.length;e++)n(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function n(e,t,n){var o,i;try{t===!1?n.reject(e.msg):(o=t===!0?e.msg:t.call(void 0,e.msg),o===n.promise?n.reject(TypeError("Promise-chain cycle")):(i=r(o))?i.call(o,n.resolve,n.reject):n.resolve(o))}catch(a){n.reject(a)}}function o(n){var a,c=this;if(!c.triggered){c.triggered=!0,c.def&&(c=c.def);try{(a=r(n))?e(function(){var e=new u(c);try{a.call(n,function(){o.apply(e,arguments)},function(){i.apply(e,arguments)})}catch(r){i.call(e,r)}}):(c.msg=n,c.state=1,c.chain.length>0&&e(t,c))}catch(f){i.call(new u(c),f)}}}function i(r){var n=this;n.triggered||(n.triggered=!0,n.def&&(n=n.def),n.msg=r,n.state=2,n.chain.length>0&&e(t,n))}function a(e,r,t,n){for(var o=0;o<r.length;o++)!function(o){e.resolve(r[o]).then(function(e){t(o,e)},n)}(o)}function u(e){this.def=e,this.triggered=!1}function c(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function f(r){if("function"!=typeof r)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var n=new c(this);this.then=function(r,o){var i={success:"function"==typeof r?r:!0,failure:"function"==typeof o?o:!1};return i.promise=new this.constructor(function(e,r){if("function"!=typeof e||"function"!=typeof r)throw TypeError("Not a function");i.resolve=e,i.reject=r}),n.chain.push(i),0!==n.state&&e(t,n),i.promise},this["catch"]=function(e){return this.then(void 0,e)};try{r.call(void 0,function(e){o.call(n,e)},function(e){i.call(n,e)})}catch(a){i.call(n,a)}}var s,p,h,l=Object.prototype.toString,d="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),s=function(e,r,t,n){return Object.defineProperty(e,r,{value:t,writable:!0,configurable:n!==!1})}}catch(v){s=function(e,r,t){return e[r]=t,e}}h=function(){function e(e,r){this.fn=e,this.self=r,this.next=void 0}var r,t,n;return{add:function(o,i){n=new e(o,i),t?t.next=n:r=n,t=n,n=void 0},drain:function(){var e=r;for(r=t=p=void 0;e;)e.fn.call(e.self),e=e.next}}}();var y=s({},"constructor",f,!1);return f.prototype=y,s(y,"__NPO__",0,!1),s(f,"resolve",function(e){var r=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new r(function(r,t){if("function"!=typeof r||"function"!=typeof t)throw TypeError("Not a function");r(e)})}),s(f,"reject",function(e){return new this(function(r,t){if("function"!=typeof r||"function"!=typeof t)throw TypeError("Not a function");t(e)})}),s(f,"all",function(e){var r=this;return"[object Array]"!=l.call(e)?r.reject(TypeError("Not an array")):0===e.length?r.resolve([]):new r(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");var o=e.length,i=Array(o),u=0;a(r,e,function(e,r){i[e]=r,++u===o&&t(i)},n)})}),s(f,"race",function(e){var r=this;return"[object Array]"!=l.call(e)?r.reject(TypeError("Not an array")):new r(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");a(r,e,function(e,r){t(r)},n)})}),f})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,r,t){"use strict";function n(e,r){return Object.prototype.hasOwnProperty.call(e,r)}r.exports=function(e,r,t,i){r=r||"&",t=t||"=";var a={};if("string"!=typeof e||0===e.length)return a;var u=/\+/g;e=e.split(r);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var f=e.length;c>0&&f>c&&(f=c);for(var s=0;f>s;++s){var p,h,l,d,v=e[s].replace(u,"%20"),y=v.indexOf(t);y>=0?(p=v.substr(0,y),h=v.substr(y+1)):(p=v,h=""),l=decodeURIComponent(p),d=decodeURIComponent(h),n(a,l)?o(a[l])?a[l].push(d):a[l]=[a[l],d]:a[l]=d}return a};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],4:[function(e,r,t){"use strict";function n(e,r){if(e.map)return e.map(r);for(var t=[],n=0;n<e.length;n++)t.push(r(e[n],n));return t}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};r.exports=function(e,r,t,u){return r=r||"&",t=t||"=",null===e&&(e=void 0),"object"==typeof e?n(a(e),function(a){var u=encodeURIComponent(o(a))+t;return i(e[a])?n(e[a],function(e){return u+encodeURIComponent(o(e))}).join(r):u+encodeURIComponent(o(e[a]))}).join(r):u?encodeURIComponent(o(u))+t+encodeURIComponent(o(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=Object.keys||function(e){var r=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}},{}],5:[function(e,r,t){"use strict";t.decode=t.parse=e("./decode"),t.encode=t.stringify=e("./encode")},{"./decode":3,"./encode":4}],6:[function(e,r,t){"use strict";r.exports=function(e){var r=/^\\\\\?\\/.test(e),t=/[^\x00-\x80]+/.test(e);return r||t?e:e.replace(/\\/g,"/")}},{}],7:[function(e,r,t){var n=function(){function e(e){throw new RangeError(x[e])}function r(e,r){for(var t=e.length,n=[];t--;)n[t]=r(e[t]);return n}function t(e,t){var n=e.split("@"),o="";n.length>1&&(o=n[0]+"@",e=n[1]),e=e.replace(S,".");var i=e.split("."),a=r(i,t).join(".");return o+a}function n(e){for(var r,t,n=[],o=0,i=e.length;i>o;)r=e.charCodeAt(o++),r>=55296&&56319>=r&&i>o?(t=e.charCodeAt(o++),56320==(64512&t)?n.push(((1023&r)<<10)+(1023&t)+65536):(n.push(r),o--)):n.push(r);return n}function o(e){return r(e,function(e){var r="";return e>65535&&(e-=65536,r+=P(e>>>10&1023|55296),e=56320|1023&e),r+=P(e)}).join("")}function i(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:d}function a(e,r){return e+22+75*(26>e)-((0!=r)<<5)}function u(e,r,t){var n=0;for(e=t?j(e/m):e>>1,e+=j(e/r);e>A*y>>1;n+=d)e=j(e/A);return j(n+(A+1)*e/(e+g))}function c(r){var t,n,a,c,f,s,p,h,g,m,b=[],O=r.length,S=0,x=C,A=E;for(n=r.lastIndexOf(w),0>n&&(n=0),a=0;n>a;++a)r.charCodeAt(a)>=128&&e("not-basic"),b.push(r.charCodeAt(a));for(c=n>0?n+1:0;O>c;){for(f=S,s=1,p=d;c>=O&&e("invalid-input"),h=i(r.charCodeAt(c++)),(h>=d||h>j((l-S)/s))&&e("overflow"),S+=h*s,g=A>=p?v:p>=A+y?y:p-A,!(g>h);p+=d)m=d-g,s>j(l/m)&&e("overflow"),s*=m;t=b.length+1,A=u(S-f,t,0==f),j(S/t)>l-x&&e("overflow"),x+=j(S/t),S%=t,b.splice(S++,0,x)}return o(b)}function f(r){var t,o,i,c,f,s,p,h,g,m,b,O,S,x,A,D=[];for(r=n(r),O=r.length,t=C,o=0,f=E,s=0;O>s;++s)b=r[s],128>b&&D.push(P(b));for(i=c=D.length,c&&D.push(w);O>i;){for(p=l,s=0;O>s;++s)b=r[s],b>=t&&p>b&&(p=b);for(S=i+1,p-t>j((l-o)/S)&&e("overflow"),o+=(p-t)*S,t=p,s=0;O>s;++s)if(b=r[s],t>b&&++o>l&&e("overflow"),b==t){for(h=o,g=d;m=f>=g?v:g>=f+y?y:g-f,!(m>h);g+=d)A=h-m,x=d-m,D.push(P(a(m+A%x,0))),h=j(A/x);D.push(P(a(h,0))),f=u(o,S,i==c),o=0,++i}++o,++t}return D.join("")}function s(e){return t(e,function(e){return b.test(e)?c(e.slice(4).toLowerCase()):e})}function p(e){return t(e,function(e){return O.test(e)?"xn--"+f(e):e})}var h,l=2147483647,d=36,v=1,y=26,g=38,m=700,E=72,C=128,w="-",b=/^xn--/,O=/[^\x20-\x7E]/,S=/[\x2E\u3002\uFF0E\uFF61]/g,x={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},A=d-v,j=Math.floor,P=String.fromCharCode;return h={version:"1.3.2",ucs2:{decode:n,encode:o},decode:c,encode:f,toASCII:p,toUnicode:s}}();"undefined"==typeof COMPILED&&"undefined"!=typeof r&&(r.exports=n)},{}],8:[function(e,r,t){e("./schemes/http"),e("./schemes/urn"),e("./schemes/mailto")},{"./schemes/http":9,"./schemes/mailto":10,"./schemes/urn":11}],9:[function(e,r,t){if("undefined"==typeof COMPILED&&"undefined"==typeof n&&"function"==typeof e)var n=e("../uri");n.SCHEMES.http=n.SCHEMES.https={domainHost:!0,parse:function(e,r){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e},serialize:function(e,r){return(e.port===("https"!==String(e.scheme).toLowerCase()?80:443)||""===e.port)&&(e.port=void 0),e.path||(e.path="/"),e}}},{"../uri":12}],10:[function(e,r,t){if("undefined"==typeof COMPILED&&"undefined"==typeof n&&"function"==typeof e)var n=e("../uri"),o=e("../punycode");!function(){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];if(e.length>1){e[0]=e[0].slice(0,-1);for(var t=e.length-1,n=1;t>n;++n)e[n]=e[n].slice(1,-1);return e[t]=e[t].slice(1),e.join("")}return e[0]}function r(e){return"(?:"+e+")"}function t(e){return e.toUpperCase()}function i(e){var r=n.pctDecChars(e);return r.match(U)?r:e}function a(e){return void 0!==e&&null!==e?e instanceof Array&&!e.callee?e:"number"!=typeof e.length||e.split||e.setInterval||e.call?[e]:Array.prototype.slice.call(e):[]}var u={},c=n.IRI_SUPPORT,f="[A-Za-z0-9\\-\\.\\_\\~"+(c?"\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF":"")+"]",s="[0-9A-Fa-f]",p=r(r("%[EFef]"+s+"%"+s+s+"%"+s+s)+"|"+r("%[89A-Fa-f]"+s+"%"+s+s)+"|"+r("%"+s+s)),h="[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",l="[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",d=e(l,'[\\"\\\\]'),v=r(h+"+"+r("\\."+h+"+")+"*"),y=r("\\\\"+d),g=r(l+"|"+y),m=r('\\"'+g+'*\\"'),E="[\\x21-\\x5A\\x5E-\\x7E]",C="[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",w=r(f+"|"+p+"|"+C),b=r(v+"|\\["+E+"*\\]"),O=r(v+"|"+m),S=r(O+"\\@"+b),x=r(S+r("\\,"+S)+"*"),A=r(w+"*"),j=A,P=r(A+"\\="+j),D=r(P+r("\\&"+P)+"*"),T=r("\\?"+D),U=(n.VALIDATE_SUPPORT&&new RegExp("^mailto\\:"+x+"?"+T+"?$"),new RegExp(f,"g")),R=new RegExp(p,"g"),N=new RegExp(e("[^]",h,"[\\.]",'[\\"]',d),"g"),_=new RegExp(e("[^]",h,"[\\.]","[\\[]",E,"[\\]]"),"g"),I=new RegExp(e("[^]",f,C),"g"),F=I,q=n.VALIDATE_SUPPORT&&new RegExp("^"+x+"$"),H=n.VALIDATE_SUPPORT&&new RegExp("^"+D+"$");n.SCHEMES.mailto={parse:function(e,r){n.VALIDATE_SUPPORT&&!e.error&&(e.path&&!q.test(e.path)?e.error="Email address is not valid":e.query&&!H.test(e.query)&&(e.error="Header fields are invalid"));var t=e.to=e.path?e.path.split(","):[];if(e.path=void 0,e.query){for(var i=!1,a={},u=e.query.split("&"),c=0,f=u.length;f>c;++c){var s=u[c].split("=");switch(s[0]){case"to":for(var p=s[1].split(","),h=0,l=p.length;l>h;++h)t.push(p[h]);break;case"subject":e.subject=n.unescapeComponent(s[1],r);break;case"body":e.body=n.unescapeComponent(s[1],r);break;default:i=!0,a[n.unescapeComponent(s[0],r)]=n.unescapeComponent(s[1],r)}}i&&(e.headers=a)}e.query=void 0;for(var c=0,f=t.length;f>c;++c){var d=t[c].split("@");if(d[0]=n.unescapeComponent(d[0]),"undefined"==typeof o||r.unicodeSupport)d[1]=n.unescapeComponent(d[1],r).toLowerCase();else try{d[1]=o.toASCII(n.unescapeComponent(d[1],r).toLowerCase())}catch(v){e.error=e.error||"Email address's domain name can not be converted to ASCII via punycode: "+v}t[c]=d.join("@")}return e},serialize:function(e,r){var c=a(e.to);if(c){for(var f=0,s=c.length;s>f;++f){var p=String(c[f]),h=p.lastIndexOf("@"),l=p.slice(0,h),d=p.slice(h+1);if(l=l.replace(R,i).replace(R,t).replace(N,n.pctEncChar),"undefined"!=typeof o)try{d=r.iri?o.toUnicode(d):o.toASCII(n.unescapeComponent(d,r).toLowerCase())}catch(v){e.error=e.error||"Email address's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+v}else d=d.replace(R,i).toLowerCase().replace(R,t).replace(_,n.pctEncChar);c[f]=l+"@"+d}e.path=c.join(",")}var y=e.headers=e.headers||{};e.subject&&(y.subject=e.subject),e.body&&(y.body=e.body);var g=[];for(var m in y)y[m]!==u[m]&&g.push(m.replace(R,i).replace(R,t).replace(I,n.pctEncChar)+"="+y[m].replace(R,i).replace(R,t).replace(F,n.pctEncChar));return g.length&&(e.query=g.join("&")),e}}}()},{"../punycode":7,"../uri":12}],11:[function(e,r,t){if("undefined"==typeof COMPILED&&"undefined"==typeof n&&"function"==typeof e)var n=e("../uri");!function(){var e=n.pctEncChar,r="(?:[0-9A-Za-z][0-9A-Za-z\\-]{1,31})",t="(?:\\%[0-9A-Fa-f]{2})",o="[0-9A-Za-z\\(\\)\\+\\,\\-\\.\\:\\=\\@\\;\\$\\_\\!\\*\\'\\/\\?\\#]",i="(?:(?:"+t+"|"+o+")+)",a=new RegExp("^urn\\:("+r+")$"),u=new RegExp("^("+r+")\\:("+i+")$"),c=/^([^\:]+)\:(.*)/,f=/[\x00-\x20\\\"\&\<\>\[\]\^\`\{\|\}\~\x7F-\xFF]/g,s=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;n.SCHEMES.urn={parse:function(e,r){var t,o,i=e.path.match(u);return i||(r.tolerant||(e.error=e.error||"URN is not strictly valid."),i=e.path.match(c)),i?(t="urn:"+i[1].toLowerCase(),o=n.SCHEMES[t],o||(o=n.SCHEMES[t]={parse:function(e,r){return e},serialize:n.SCHEMES.urn.serialize}),e.scheme=t,e.path=i[2],e=o.parse(e,r)):e.error=e.error||"URN can not be parsed.",e},serialize:function(r,t){var n,o=r.scheme||t.scheme;if(o&&"urn"!==o){var n=o.match(a);n||(n=["urn:"+o,o]),r.scheme="urn",r.path=n[1]+":"+(r.path?r.path.replace(f,e):"")}return r}},n.SCHEMES["urn:uuid"]={parse:function(e,r){return r.tolerant||e.path&&e.path.match(s)||(e.error=e.error||"UUID is not valid."),e},serialize:function(e,r){return r.tolerant||e.path&&e.path.match(s)?e.path=(e.path||"").toLowerCase():e.scheme=void 0,n.SCHEMES.urn.serialize(e,r)}}}()},{"../uri":12}],12:[function(e,r,t){var n=!1,o=!0,i=!0,a=function(){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];if(e.length>1){e[0]=e[0].slice(0,-1);for(var t=e.length-1,n=1;t>n;++n)e[n]=e[n].slice(1,-1);return e[t]=e[t].slice(1),e.join("")}return e[0]}function r(e){return"(?:"+e+")"}function t(t){var n="[A-Za-z]",o="[0-9]",a=e(o,"[A-Fa-f]"),u=r(r("%[EFef]"+a+"%"+a+a+"%"+a+a)+"|"+r("%[89A-Fa-f]"+a+"%"+a+a)+"|"+r("%"+a+a)),c="[\\:\\/\\?\\#\\[\\]\\@]",f="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",s=e(c,f),p=t?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]",h=t?"[\\uE000-\\uF8FF]":"[]",l=e(n,o,"[\\-\\.\\_\\~]",p),d=r(n+e(n,o,"[\\+\\-\\.]")+"*"),v=r(r(u+"|"+e(l,f,"[\\:]"))+"*"),y=r(r("25[0-5]")+"|"+r("2[0-4]"+o)+"|"+r("1"+o+o)+"|"+r("[1-9]"+o)+"|"+o),g=r(y+"\\."+y+"\\."+y+"\\."+y),m=r(a+"{1,4}"),E=(r(r(m+"\\:"+m)+"|"+g),r(e(l,f,"[\\:]")+"+")),C=r("v"+a+"+\\."+e(l,f,"[\\:]")+"+"),w=r("\\["+r(E+"|"+C)+"\\]"),b=r(r(u+"|"+e(l,f))+"*"),O=r(w+"|"+g+"(?!"+b+")|"+b),S=r(o+"*"),x=r(r(v+"@")+"?"+O+r("\\:"+S)+"?"),A=r(u+"|"+e(l,f,"[\\:\\@]")),j=r(A+"*"),P=r(A+"+"),D=r(r(u+"|"+e(l,f,"[\\@]"))+"+"),T=r(r("\\/"+j)+"*"),U=r("\\/"+r(P+T)+"?"),R=r(D+T),N=r(P+T),_="(?!"+A+")",I=(r(T+"|"+U+"|"+R+"|"+N+"|"+_),r(r(A+"|"+e("[\\/\\?]",h))+"*")),F=r(r(A+"|[\\/\\?]")+"*"),q=r(r("\\/\\/"+x+T)+"|"+U+"|"+N+"|"+_),H=r(d+"\\:"+q+r("\\?"+I)+"?"+r("\\#"+F)+"?"),L=r(r("\\/\\/"+x+T)+"|"+U+"|"+R+"|"+_),$=r(L+r("\\?"+I)+"?"+r("\\#"+F)+"?"),M=(r(H+"|"+$),r(d+"\\:"+q+r("\\?"+I)+"?"),"^("+d+")\\:"+r(r("\\/\\/("+r("("+v+")@")+"?("+O+")"+r("\\:("+S+")")+"?)")+"?("+T+"|"+U+"|"+N+"|"+_+")")+r("\\?("+I+")")+"?"+r("\\#("+F+")")+"?$"),k="^(){0}"+r(r("\\/\\/("+r("("+v+")@")+"?("+O+")"+r("\\:("+S+")")+"?)")+"?("+T+"|"+U+"|"+R+"|"+_+")")+r("\\?("+I+")")+"?"+r("\\#("+F+")")+"?$";"^("+d+")\\:"+r(r("\\/\\/("+r("("+v+")@")+"?("+O+")"+r("\\:("+S+")")+"?)")+"?("+T+"|"+U+"|"+N+"|"+_+")")+r("\\?("+I+")")+"?$","^"+r("\\#("+F+")")+"?$","^"+r("("+v+")@")+"?("+O+")"+r("\\:("+S+")")+"?$";return{URI_REF:i&&new RegExp("("+M+")|("+k+")"),NOT_SCHEME:new RegExp(e("[^]",n,o,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(e("[^\\%\\:]",l,f),"g"),NOT_HOST:new RegExp(e("[^\\%]",l,f),"g"),NOT_PATH:new RegExp(e("[^\\%\\/\\:\\@]",l,f),"g"),NOT_PATH_NOSCHEME:new RegExp(e("[^\\%\\/\\@]",l,f),"g"),NOT_QUERY:new RegExp(e("[^\\%]",l,f,"[\\:\\@\\/\\?]",h),"g"),NOT_FRAGMENT:new RegExp(e("[^\\%]",l,f,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(e("[^]",l,f),"g"),UNRESERVED:new RegExp(l,"g"),OTHER_CHARS:new RegExp(e("[^\\%]",l,s),"g"),PCT_ENCODED:new RegExp(u,"g")}}function n(e){var r,t=e.charCodeAt(0);return r=16>t?"%0"+t.toString(16).toUpperCase():128>t?"%"+t.toString(16).toUpperCase():2048>t?"%"+(t>>6|192).toString(16).toUpperCase()+"%"+(63&t|128).toString(16).toUpperCase():"%"+(t>>12|224).toString(16).toUpperCase()+"%"+(t>>6&63|128).toString(16).toUpperCase()+"%"+(63&t|128).toString(16).toUpperCase()}function a(e){for(var r,t,n,o="",i=0,a=e.length;a>i;)r=parseInt(e.substr(i+1,2),16),128>r?(o+=String.fromCharCode(r),i+=3):r>=194&&224>r?(a-i>=6?(t=parseInt(e.substr(i+4,2),16),o+=String.fromCharCode((31&r)<<6|63&t)):o+=e.substr(i,6),i+=6):r>=224?(a-i>=9?(t=parseInt(e.substr(i+4,2),16),n=parseInt(e.substr(i+7,2),16),o+=String.fromCharCode((15&r)<<12|(63&t)<<6|63&n)):o+=e.substr(i,9),i+=9):(o+=e.substr(i,3),i+=3);return o}function c(e){return void 0===e?"undefined":null===e?"null":Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()}function f(e){return e.toUpperCase()}function s(e,r){function t(e){var t=a(e);return t.match(r.UNRESERVED)?t:e}return e.scheme&&(e.scheme=String(e.scheme).replace(r.PCT_ENCODED,t).toLowerCase().replace(r.NOT_SCHEME,"")),void 0!==e.userinfo&&(e.userinfo=String(e.userinfo).replace(r.PCT_ENCODED,t).replace(r.NOT_USERINFO,n).replace(r.PCT_ENCODED,f)),void 0!==e.host&&(e.host=String(e.host).replace(r.PCT_ENCODED,t).toLowerCase().replace(r.NOT_HOST,n).replace(r.PCT_ENCODED,f)),void 0!==e.path&&(e.path=String(e.path).replace(r.PCT_ENCODED,t).replace(e.scheme?r.NOT_PATH:r.NOT_PATH_NOSCHEME,n).replace(r.PCT_ENCODED,f)),void 0!==e.query&&(e.query=String(e.query).replace(r.PCT_ENCODED,t).replace(r.NOT_QUERY,n).replace(r.PCT_ENCODED,f)),void 0!==e.fragment&&(e.fragment=String(e.fragment).replace(r.PCT_ENCODED,t).replace(r.NOT_FRAGMENT,n).replace(r.PCT_ENCODED,f)),e}function p(e,r){void 0===r&&(r={});var t,n,c=o&&r.iri!==!1?b:w,f=!1,p={};if("suffix"===r.reference&&(e=(r.scheme?r.scheme+":":"")+"//"+e),i?(t=e.match(c.URI_REF),t&&(t=t[1]?t.slice(1,10):t.slice(10,19)),t||(f=!0,r.tolerant||(p.error=p.error||"URI is not strictly valid."),t=e.match(O))):t=e.match(O),t){if(P?(p.scheme=t[1],p.userinfo=t[3],p.host=t[4],p.port=parseInt(t[5],10),p.path=t[6]||"",p.query=t[7],p.fragment=t[8],isNaN(p.port)&&(p.port=t[5])):(p.scheme=t[1]||void 0,p.userinfo=-1!==e.indexOf("@")?t[3]:void 0,p.host=-1!==e.indexOf("//")?t[4]:void 0,p.port=parseInt(t[5],10),p.path=t[6]||"",p.query=-1!==e.indexOf("?")?t[7]:void 0,p.fragment=-1!==e.indexOf("#")?t[8]:void 0,isNaN(p.port)&&(p.port=e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?t[4]:void 0)),void 0!==p.scheme||void 0!==p.userinfo||void 0!==p.host||void 0!==p.port||p.path||void 0!==p.query?void 0===p.scheme?p.reference="relative":void 0===p.fragment?p.reference="absolute":p.reference="uri":p.reference="same-document",r.reference&&"suffix"!==r.reference&&r.reference!==p.reference&&(p.error=p.error||"URI is not a "+r.reference+" reference."),n=D[(r.scheme||p.scheme||"").toLowerCase()],!o||"undefined"==typeof u||r.unicodeSupport||n&&n.unicodeSupport)s(p,c);else{if(p.host&&(r.domainHost||n&&n.domainHost))try{p.host=u.toASCII(p.host.replace(c.PCT_ENCODED,a).toLowerCase())}catch(h){p.error=p.error||"Host's domain name can not be converted to ASCII via punycode: "+h}s(p,w)}n&&n.parse&&n.parse(p,r)}else f=!0,p.error=p.error||"URI can not be parsed.";return p}function h(e,r){var t=[];return void 0!==e.userinfo&&(t.push(e.userinfo),t.push("@")),void 0!==e.host&&t.push(e.host),"number"==typeof e.port&&(t.push(":"),t.push(e.port.toString(10))),t.length?t.join(""):void 0}function l(e){for(var r,t=[];e.length;)e.match(S)?e=e.replace(S,""):e.match(x)?e=e.replace(x,"/"):e.match(A)?(e=e.replace(A,"/"),t.pop()):"."===e||".."===e?e="":(r=e.match(j)[0],e=e.slice(r.length),t.push(r));return t.join("")}function d(e,r){void 0===r&&(r={});var t,n,i,c=o&&r.iri?b:w,f=[];if(t=D[(r.scheme||e.scheme||"").toLowerCase()],t&&t.serialize&&t.serialize(e,r),o&&"undefined"!=typeof u&&e.host&&(r.domainHost||t&&t.domainHost))try{e.host=r.iri?u.toUnicode(e.host):u.toASCII(e.host.replace(c.PCT_ENCODED,a).toLowerCase())}catch(p){e.error=e.error||"Host's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+p}return s(e,c),"suffix"!==r.reference&&e.scheme&&(f.push(e.scheme),f.push(":")),n=h(e,r),void 0!==n&&("suffix"!==r.reference&&f.push("//"),f.push(n),e.path&&"/"!==e.path.charAt(0)&&f.push("/")),void 0!==e.path&&(i=e.path,r.absolutePath||t&&t.absolutePath||(i=l(i)),void 0===n&&(i=i.replace(/^\/\//,"/%2F")),f.push(i)),void 0!==e.query&&(f.push("?"),f.push(e.query)),void 0!==e.fragment&&(f.push("#"),f.push(e.fragment)),f.join("")}function v(e,r,t,n){void 0===t&&(t={});var o={};return n||(e=p(d(e,t),t),r=p(d(r,t),t)),t=t||{},!t.tolerant&&r.scheme?(o.scheme=r.scheme,o.userinfo=r.userinfo,o.host=r.host,o.port=r.port,o.path=l(r.path),o.query=r.query):(void 0!==r.userinfo||void 0!==r.host||void 0!==r.port?(o.userinfo=r.userinfo,o.host=r.host,o.port=r.port,o.path=l(r.path),o.query=r.query):(r.path?("/"===r.path.charAt(0)?o.path=l(r.path):(void 0===e.userinfo&&void 0===e.host&&void 0===e.port||e.path?e.path?o.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+r.path:o.path=r.path:o.path="/"+r.path,o.path=l(o.path)),o.query=r.query):(o.path=e.path,void 0!==r.query?o.query=r.query:o.query=e.query),o.userinfo=e.userinfo,o.host=e.host,o.port=e.port),o.scheme=e.scheme),o.fragment=r.fragment,o}function y(e,r,t){return d(v(p(e,t),p(r,t),t,!0),t)}function g(e,r){return"string"==typeof e?e=d(p(e,r),r):"object"===c(e)&&(e=p(d(e,r),r)),e}function m(e,r,t){return"string"==typeof e?e=d(p(e,t),t):"object"===c(e)&&(e=d(e,t)),"string"==typeof r?r=d(p(r,t),t):"object"===c(r)&&(r=d(r,t)),e===r}function E(e,r){return e&&e.toString().replace(o&&r&&r.iri?b.ESCAPE:w.ESCAPE,n)}function C(e,r){return e&&e.toString().replace(o&&r&&r.iri?b.PCT_ENCODED:w.PCT_ENCODED,a)}var w=t(!1),b=o?t(!0):void 0,O=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?([^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n)*))?/i,S=/^\.\.?\//,x=/^\/\.(\/|$)/,A=/^\/\.\.(\/|$)/,j=/^\/?(?:.|\n)*?(?=\/|$)/,P=void 0==="".match(/(){0}/)[1],D={};return{IRI_SUPPORT:o,VALIDATE_SUPPORT:i,pctEncChar:n,pctDecChars:a,SCHEMES:D,parse:p,_recomposeAuthority:h,removeDotSegments:l,serialize:d,resolveComponents:v,resolve:y,normalize:g,equal:m,escapeComponent:E,unescapeComponent:C}}();if(!n&&"undefined"!=typeof r&&"function"==typeof e){var u=e("./punycode");r.exports=a,e("./schemes")}},{"./punycode":7,"./schemes":8}]},{},[1])(1)});