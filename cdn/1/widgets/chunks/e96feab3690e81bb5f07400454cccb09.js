/*! For license information please see e96feab3690e81bb5f07400454cccb09.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[15306],{15306:(t,e,n)=>{n.r(e),n.d(e,{calcite_tile:()=>l});var i=n(30396),r=n(39591),o=n(9615),a=n(32544);const c="content-start",s="content-end",l=class{constructor(t){(0,i.r)(this,t),this.active=!1,this.description=void 0,this.disabled=!1,this.embed=!1,this.focused=!1,this.heading=void 0,this.hidden=!1,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1}connectedCallback(){(0,r.c)(this)}disconnectedCallback(){(0,r.d)(this)}componentDidRender(){(0,a.u)(this)}renderTile(){const{icon:t,el:e,heading:n,description:r,iconFlipRtl:a}=this,l=n&&t&&!r,d=l?{height:"64px",width:"64px"}:void 0;return(0,i.h)("div",{class:{container:!0,"large-visual":l}},t&&(0,i.h)("div",{class:"icon"},(0,i.h)("calcite-icon",{flipRtl:a,icon:t,scale:"l",style:d})),(0,i.h)("div",{class:"content-container"},(0,o.g)(e,c)?(0,i.h)("div",{class:"content-slot-container"},(0,i.h)("slot",{name:c})):null,(0,i.h)("div",{class:"content"},n&&(0,i.h)("div",{class:"heading"},n),r&&(0,i.h)("div",{class:"description"},r)),(0,o.g)(e,s)?(0,i.h)("div",{class:"content-slot-container"},(0,i.h)("slot",{name:s})):null))}render(){return(0,i.h)(i.F,null,this.href?(0,i.h)("calcite-link",{disabled:this.disabled,href:this.href},this.renderTile()):this.renderTile())}get el(){return(0,i.g)(this)}};l.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{box-sizing:border-box;display:inline-block;-webkit-user-select:none;user-select:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .container{pointer-events:none;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:0.5rem}:host .content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;gap:0.5rem;inline-size:10%}:host .content-container{display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;padding:0px;color:var(--calcite-ui-text-2);outline-color:transparent}:host .content-slot-container{display:flex;align-items:center;background-color:var(--calcite-ui-foreground-1)}:host .content-slot-container:first-child{padding-inline:0 0.75rem}:host .content-slot-container:last-child{padding-inline:0.75rem 0}:host .heading{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .large-visual{align-items:center;text-align:center;min-block-size:12rem}:host .large-visual .icon{display:flex;justify-content:center;align-self:flex-end}:host .large-visual .content-container{align-self:center}:host .description{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host(:not([embed])){padding:0.75rem;box-shadow:0 0 0 1px var(--calcite-ui-border-2)}:host(:not([embed])[href]:hover){cursor:pointer;box-shadow:0 0 0 2px var(--calcite-ui-brand)}:host(:not([embed])[href]:active){box-shadow:0 0 0 3px var(--calcite-ui-brand)}:host([icon][heading]:not([description]):not([embed])){padding:0px}:host([icon][heading]:not([description])) .icon{display:flex;justify-content:center}:host([icon][heading]:not([description])) .large-visual{text-align:center}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}"},39591:(t,e,n)=>{n.d(e,{c:()=>s,d:()=>l});var i=n(30396),r=n(77041);const o=new Set;let a;const c={childList:!0};function s(t){a||(a=(0,r.c)("mutation",d)),a.observe(t.el,c)}function l(t){o.delete(t.el),d(a.takeRecords()),a.disconnect();for(const[t]of o.entries())a.observe(t,c)}function d(t){t.forEach((({target:t})=>{(0,i.f)(t)}))}},9615:(t,e,n)=>{n.d(e,{a:()=>v,b:()=>d,c:()=>p,d:()=>z,e:()=>l,f:()=>u,g:()=>w,h:()=>y,i:()=>D,j:()=>x,k:()=>c,l:()=>a,m:()=>C,n:()=>s,o:()=>S,p:()=>$,q:()=>m,r:()=>E,s:()=>R,t:()=>_,u:()=>h});var i=n(96440),r=n(31964),o=n(90770);const a={getShadowRoot:!0};function c(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,r.g)()}`:""}function s(t){return Array.isArray(t)?t:Array.from(t)}function l(t){const e=p(t,`.${o.C.darkMode}, .${o.C.lightMode}`);return e?.classList.contains("calcite-mode-dark")?"dark":"light"}function d(t){const e=p(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function u(t,e,n){const i=`[${e}]`,r=t.closest(i);return r?r.getAttribute(e):n}function h(t){return t.getRootNode()}function f(t){return t.host||null}function m(t,{selector:e,id:n}){return function t(i){if(!i)return null;i.assignedSlot&&(i=i.assignedSlot);const r=h(i),o=n?"getElementById"in r?r.getElementById(n):null:e?r.querySelector(e):null,a=f(r);return o||(a?t(a):null)}(t)}function p(t,e){return function t(n){return n?n.closest(e)||t(f(h(n))):null}(t)}function g(t,e){return b(t,e)}function b(t,e){if(!t)return;const n=e(t);if(void 0!==n)return n;const{parentNode:i}=t;return b(i instanceof ShadowRoot?i.host:i,e)}function v(t,e){return!!g(e,(e=>e===t||void 0))}async function y(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function x(t){((0,i.t)(t,a)[0]||t).focus()}const k=":not([slot])";function w(t,e,n){e&&!Array.isArray(e)&&"string"!=typeof e&&(n=e,e=null);const i=e?Array.isArray(e)?e.map((t=>`[slot="${t}"]`)).join(","):`[slot="${e}"]`:k;return n?.all?function(t,e,n){let i=e===k?A(t,k):Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter((e=>e.parentElement===t)),i=n?.matches?i.filter((t=>t?.matches(n.matches))):i;const r=n?.selector;return r?i.map((t=>Array.from(t.querySelectorAll(r)))).reduce(((t,e)=>[...t,...e]),[]).filter((t=>!!t)):i}(t,i,n):function(t,e,n){let i=e===k?A(t,k)[0]||null:t.querySelector(e);i=n&&!1===n.direct||i?.parentElement===t?i:null,i=n?.matches?i?.matches(n.matches)?i:null:i;const r=n?.selector;return r?i?.querySelector(r):i}(t,i,n)}function A(t,e){return t?Array.from(t.children||[]).filter((t=>t?.matches(e))):[]}function E(t,e){return Array.from(t.children).filter((t=>t.matches(e)))}function z(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function S(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function _(t){return Boolean(t).toString()}function R(t){return!!C(t).length}function C(t){return t.target.assignedElements({flatten:!0})}function D(t){return!(!t.isPrimary||0!==t.button)}const $=(t,e,n)=>{const i=t.indexOf(e),r=0===i,o=i===t.length-1;let a;switch(n="previous"===n&&r?"last":"next"===n&&o?"first":n){case"first":a=t[0];break;case"last":a=t[t.length-1];break;case"next":a=t[i+1]||t[0];break;case"previous":a=t[i-1]||t[t.length-1]}return y(a),a}},31964:(t,e,n)=>{n.d(e,{g:()=>i});const i=()=>[2,1,1,1,3].map((t=>{let e="";for(let n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")},32544:(t,e,n)=>{function i(){}function r(t,e=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=i);t.el.click=HTMLElement.prototype.click,"function"==typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}n.d(e,{u:()=>r})},77041:(t,e,n)=>{function i(t,e,n){const i=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new i(e,n)}n.d(e,{c:()=>i})}}]);