(self.webpackChunkdebug=self.webpackChunkdebug||[]).push([[3],{948:(e,n,t)=>{var i={"./locale":949,"./locale.js":949};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=948},61:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Mermaid:()=>o});var i=t(62),r=t.n(i);function a(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),r().initialize({startOnLoad:!1})}var n,t,i;return n=e,(t=[{key:"getElms",value:function(){return document.querySelectorAll(".mermaid")}},{key:"encode",value:function(e){var n="data:image/svg+xml;base64,".concat(btoa(e.innerHTML));e.innerHTML="",Object.assign(e.style,{visibility:"initial",background:"url(".concat(n,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",margin:"0 auto"})}},{key:"init",value:function(){this.getElms().forEach((function(e){Object.assign(e.style,{visibility:"initial"}),r().init()}))}},{key:"reload",value:function(){for(var e=this.getElms(),n=[],t=0;t<e.length;t++){var i=e[t],a=i.id,o=i.getAttribute("data-value");if(n.includes(a))return;n.push(a),i.style.background="",i.innerHTML=o,i.removeAttribute("data-processed"),r().init(),Object.assign(i.style,{visibility:"initial"})}}}])&&a(n.prototype,t),i&&a(n,i),e}()}}]);