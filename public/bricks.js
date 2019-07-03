/* img-gallery v1.0.0 ©2019 Joel Ellis */!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.Bricks=t()}(window,function(){"use strict";var n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},t=function(t){var e=arguments.length>0&&void 0!==t?t:{},i=Object.create(null);function r(n,t){return i[n]=i[n]||[],i[n].push(t),this}function o(n,t){return t._once=!0,r(n,t),this}function u(n,t){var e=arguments.length>1&&void 0!==t&&t;return e?i[n].splice(i[n].indexOf(e),1):delete i[n],this}function c(n){for(var t=this,e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];var c=i[n]&&i[n].slice();return c&&c.forEach(function(e){e._once&&u(n,e),e.apply(t,r)}),this}return n({},e,{on:r,once:o,off:u,emit:c})};return function(n){var e=arguments.length>0&&void 0!==n?n:{},i=void 0,r=void 0,o=void 0,u=void 0,c=void 0,a=void 0,f=void 0,d=void 0,l=void 0,s=void 0,p=void 0,h=void 0,v=void 0,m=0===e.packed.indexOf("data-")?e.packed:"data-"+e.packed,y=e.sizes.slice().reverse(),g=!1!==e.position,w=e.container.nodeType?e.container:document.querySelector(e.container),x={all:function(){return E(w.children)},new:function(){return E(w.children).filter(function(n){return!n.hasAttribute(""+m)})}},O=[q,z,L],b=[_,B,F,H],A=t({pack:T,update:W,resize:C});return A;function k(n){n.forEach(function(n){return n()})}function E(n,t){return arguments.length>1&&void 0!==t||document,Array.prototype.slice.call(n)}function M(n){return Array.apply(null,Array(n)).map(function(){return 0})}function j(){return y.map(function(n){return n.mq&&window.matchMedia("(min-width: "+n.mq+")").matches}).indexOf(!0)}function q(){o=j()}function z(){u=-1===o?y[y.length-1]:y[o]}function L(){a=M(u.columns)}function _(){p=x[i?"new":"all"]()}function B(){0!==p.length&&(h=p.map(function(n){return n.clientWidth}),v=p.map(function(n){return n.clientHeight}))}function F(){p.forEach(function(n,t){c=a.indexOf(Math.min.apply(Math,a)),n.style.position="absolute",f=a[c]+"px",d=c*h[t]+c*u.gutter+"px",g?(n.style.top=f,n.style.left=d):n.style.transform="translate3d("+d+", "+f+", 0)",n.setAttribute(m,""),l=h[t],s=v[t],l&&s&&(a[c]+=s+u.gutter)})}function H(){w.style.position="relative",w.style.width=u.columns*l+(u.columns-1)*u.gutter+"px",w.style.height=Math.max.apply(Math,a)-u.gutter+"px"}function P(){r||(window.requestAnimationFrame(S),r=!0)}function S(){o!==j()&&(T(),A.emit("resize",u)),r=!1}function T(){return i=!1,k(O.concat(b)),A.emit("pack")}function W(){return i=!0,k(b),A.emit("update")}function C(n){var t=!(arguments.length>0&&void 0!==n)||n;return window[t?"addEventListener":"removeEventListener"]("resize",P),A}}});