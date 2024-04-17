/*! For license information please see 9cf011f82953523bd68f6f27109c4b77.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[20086],{20086:(t,e,r)=>{r.r(e),r.d(e,{arcgis_sketch_features:()=>s});var n=r(28384),i=r(66716),o=r(62727);r(18869),r(81068);const s=class{constructor(t){(0,n.r)(this,t),this.arcgisSketchFeaturesAddSketch=(0,n.c)(this,"arcgisSketchFeaturesAddSketch",7),this.arcgisSketchFeaturesEditFeature=(0,n.c)(this,"arcgisSketchFeaturesEditFeature",7),this.graphicChange=[],this.graphicUpdate=[],this.pickListItem=(t,e)=>{var r;return(0,n.h)("calcite-list-item",{key:e,label:(null===(r=null==t?void 0:t.attributes)||void 0===r?void 0:r.title)||this.getStringFromType(t)},(0,n.h)("div",{slot:"content-start",id:`image-${e}`}),this.showEditFeature?(0,n.h)("calcite-action",{slot:"actions-end",text:this.strings.edit,title:this.strings.edit,scale:"s",icon:"pencil",onClick:()=>{this.arcgisSketchFeaturesEditFeature.emit({layer:this.layer,feature:t})}}):null)},this.layer=void 0,this.showAddSketch=!0,this.showEditFeature=!0,this.open=!0,this.graphics=void 0}async componentWillLoad(){[this.strings,this.currentLanguage]=await(0,o.g)(this.hostElement),await this.loadAllModules(),this.combineMapNotessGraphics()}componentDidLoad(){this.watchForChangesToMapNotesLayer()}async componentDidRender(){var t,e,r;for(let n=0;n<this.graphics.length;n++){const i=this.hostElement.shadowRoot.getElementById(`image-${n}`);i.textContent="",this.symbolUtils.renderPreviewHTML(this.graphics[n].symbol,Object.assign({node:i,scale:!0,maxSize:20,size:{width:20,height:"polyline"===this.graphics[n].geometry.type?6:20}},"text"===(null===(t=this.graphics[n].symbol)||void 0===t?void 0:t.type)&&{overrideText:(null===(r=null===(e=this.graphics[n].symbol)||void 0===e?void 0:e.text)||void 0===r?void 0:r[0])||"A"}))}}disconnectedCallback(){this.graphicChange.forEach((t=>{null==t||t.remove()})),this.graphicUpdate.forEach((t=>{null==t||t.remove()}))}async setFocus(){this.addSketchButton.setFocus()}async loadAllModules(){[this.reactiveUtils,this.symbolUtils]=await(0,i.l)(["esri/core/reactiveUtils","esri/symbols/support/symbolUtils"])}watchForChangesToMapNotesLayer(){for(const t of[this.layer.pointLayer,this.layer.polylineLayer,this.layer.polygonLayer,this.layer.textLayer]){const e=this.reactiveUtils.on((()=>t.graphics),"change",(()=>{this.combineMapNotessGraphics()}));this.graphicChange.push(e);const r=this.reactiveUtils.on((()=>t),"graphic-update",(()=>{this.combineMapNotessGraphics()}));this.graphicUpdate.push(r)}}combineMapNotessGraphics(){this.graphics=[...this.layer.pointLayer.graphics,...this.layer.polylineLayer.graphics,...this.layer.polygonLayer.graphics,...this.layer.textLayer.graphics]}getStringFromType(t){var e,r;switch(null===(e=null==t?void 0:t.geometry)||void 0===e?void 0:e.type){case"point":return"text"===(null===(r=null==t?void 0:t.symbol)||void 0===r?void 0:r.type)?this.strings.text:this.strings.point;case"polyline":return this.strings.line;case"polygon":return this.strings.polygon;default:return this.strings.point}}render(){return(0,n.h)(n.H,null,(0,n.h)("calcite-block",{heading:this.strings.sketches,open:this.open,collapsible:!0},(0,n.h)("calcite-list",null,this.graphics.map(((t,e)=>this.pickListItem(t,e)))),this.showAddSketch?(0,n.h)("calcite-button",{ref:t=>this.addSketchButton=t,iconStart:"pencil-mark",appearance:"transparent",width:"full",onClick:()=>{this.arcgisSketchFeaturesAddSketch.emit({layer:this.layer})}},this.strings.addSketch):null))}get hostElement(){return(0,n.d)(this)}}},81068:(t,e,r)=>{r.d(e,{C:()=>a,a:()=>u,f:()=>c,g:()=>s,l:()=>o});var n=r(66716),i=r(18869);const o=new Map([["ar","ar"],["bg","bg"],["bs","bs"],["ca","ca"],["cs","cs"],["da","da"],["de","de"],["el","el"],["en","en"],["es","es"],["et","et"],["fi","fi"],["fr","fr"],["he","he"],["hr","hr"],["hu","hu"],["id","id"],["it","it"],["ja","ja"],["ko","ko"],["lt","lt"],["lv","lv"],["nb","nb"],["nl","nl"],["pl","pl"],["pt-br","pt-BR"],["pt-pt","pt-PT"],["ro","ro"],["ru","ru"],["sk","sk"],["sl","sl"],["sr","sr"],["sv","sv"],["th","th"],["tr","tr"],["uk","uk"],["vi","vi"],["zh-cn","zh-CN"],["zh-hk","zh-HK"],["zh-tw","zh-TW"]]);function s(t){return function(t,e,r){const n=(0,i.c)(t,"[dir]");return n?n.getAttribute("dir"):"ltr"}(t)}const a={rtl:"arcgis--rtl"};async function c(t,e){const{api:r,type:i,places:o}=e||{};if(4===r){const[e]=await(0,n.l)(["esri/intl"]),r=e.convertNumberFormatToIntlOptions({places:o,style:i,digitSeparator:!0});return e.formatNumber(t,Object.assign(Object.assign({},r),{style:i}))}const[s]=await(0,n.l)(["dojo/number"]);return s.format(t,{type:i,places:o,pattern:null==e?void 0:e.pattern})}const l={};function u(t){const e=document.documentElement.lang;return l[e]||(l[e]=new Intl.DateTimeFormat(document.documentElement.lang,{year:"numeric",month:"short",day:"numeric"})),l[e].format(t)}},66716:(t,e,r)=>{r.d(e,{a:()=>n,c:()=>o,e:()=>s,g:()=>i,l:()=>a});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function o(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}var s=o((function(t,e){!function(t){var e={Promise:"undefined"!=typeof window?window.Promise:void 0},r="4.24",n="next";function i(t){if(t.toLowerCase()===n)return n;var e=t&&t.match(/^(\d)\.(\d+)/);return e&&{major:parseInt(e[1],10),minor:parseInt(e[2],10)}}function o(t){return void 0===t&&(t=r),"https://js.arcgis.com/".concat(t,"/")}function s(t){return!t||i(t)?function(t){void 0===t&&(t=r);var e=o(t),s=i(t);if(s!==n&&3===s.major){var a=s.minor<=10?"js/":"";return"".concat(e).concat(a,"esri/css/esri.css")}return"".concat(e,"esri/themes/light/main.css")}(t):t}function a(t,e){var r=s(t),n=function(t){return document.querySelector('link[href*="'.concat(t,'"]'))}(r);return n||function(t,e){if(e){var r=document.querySelector(e);r.parentNode.insertBefore(t,r)}else document.head.appendChild(t)}(n=function(t){var e=document.createElement("link");return e.rel="stylesheet",e.href=t,e}(r),e),n}var c={};function l(t,e,r){var n;r&&(n=function(t,e){var r=function(n){e(n.error||new Error("There was an error attempting to load ".concat(t.src))),t.removeEventListener("error",r,!1)};return t.addEventListener("error",r,!1),r}(t,r));var i=function(){e(t),t.removeEventListener("load",i,!1),n&&t.removeEventListener("error",n,!1)};t.addEventListener("load",i,!1)}function u(){return document.querySelector("script[data-esri-loader]")}function h(){var t=window.require;return t&&t.on}function d(t){void 0===t&&(t={});var r={};[c,t].forEach((function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])}));var n=r.version,i=r.url||o(n);return new e.Promise((function(t,e){var o=u();if(o){var s=o.getAttribute("src");s!==i?e(new Error("The ArcGIS API for JavaScript is already loaded (".concat(s,")."))):h()?t(o):l(o,t,e)}else if(h())e(new Error("The ArcGIS API for JavaScript is already loaded."));else{var c=r.css;c&&a(!0===c?n:c,r.insertCssBefore),l(o=function(t){var e=document.createElement("script");return e.type="text/javascript",e.src=t,e.setAttribute("data-esri-loader","loading"),e}(i),(function(){o.setAttribute("data-esri-loader","loaded"),t(o)}),e),document.body.appendChild(o)}}))}function p(t){return new e.Promise((function(e,r){var n=window.require.on("error",r);window.require(t,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];n.remove(),e(t)}))}))}t.utils=e,t.loadModules=function(t,e){if(void 0===e&&(e={}),h())return p(t);var r=u(),n=r&&r.getAttribute("src");return!e.url&&n&&(e.url=n),d(e).then((function(){return p(t)}))},t.getScript=u,t.isLoaded=h,t.loadScript=d,t.setDefaultOptions=function(t){void 0===t&&(t={}),c=t},t.loadCss=a,Object.defineProperty(t,"__esModule",{value:!0})}(e)}));const a=async(t,e)=>(await s.loadModules(t,e)).map((t=>t.__esModule&&t.default?t.default:t))},62727:(t,e,r)=>{r.d(e,{a:()=>s,g:()=>l});var n=r(18869),i=r(81068),o=r(28384);function s(t){var e,r,o;const s=null!==(e=(0,n.c)(t,"[lang]"))&&void 0!==e?e:null===(o=null===(r=t.shadowRoot)||void 0===r?void 0:r.ownerDocument)||void 0===o?void 0:o.documentElement,a=((null==s?void 0:s.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return i.l.has(a)?i.l.get(a):i.l.has(a.slice(0,2))?i.l.get(a.slice(0,2)):"en"}const a={};function c(t,e){const r=`${t}${e}`;return a[r]||(a[r]=function(t,e){return new Promise(((r,n)=>{fetch((0,o.a)(`../arcgis-app-assets/i18n/${t}.i18n.${e}.json`)).then((t=>{t.ok?r(t.json()):n()}),(()=>n()))}))}(t,e)),a[r]}async function l(t,e){const r=e||t.tagName.toLowerCase(),o=s(t),a=function(t){var e,r,o;const s=null!==(e=(0,n.c)(t,"[lang]"))&&void 0!==e?e:null===(o=null===(r=t.shadowRoot)||void 0===r?void 0:r.ownerDocument)||void 0===o?void 0:o.documentElement,a=((null==s?void 0:s.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return i.l.has(a)?i.l.get(a):i.l.has(a.slice(0,2))?a:"en"}(t);let l;try{l=await c(r,o)}catch(t){console.warn(`no locale for ${r} (${o}) loading default locale en.`),l=await c(r,"en")}return[l,o,a]}}}]);