(self.webpackChunkadvanced=self.webpackChunkadvanced||[]).push([[9],{984:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Sidebar:()=>p});var n=a(2),r=a(985),c=a(1005),i=a.n(c),l=a(83),s=a(31),o="https://github.com/hiroppy/fusuma.git",d="https://hiroppy.github.io/fusuma/advanced",u=["twitter"],m="slide",h=function(e){return"".concat(e).padStart(2,"0")},p=(0,n.memo)((function(e){var t=e.isOpen,a=e.onStateChange,c=e.goTo,p=e.currentIndex,b=e.runPresentationMode,f=e.contents;return n.createElement(r.slide,{isOpen:t,disableAutoFocus:!0,onStateChange:a,outerContainerId:"root",pageWrapId:"webslides"},n.createElement("div",{className:"sidebar-social"},Array.isArray(u)&&u.map((function(e){return"twitter"===e?n.createElement("a",{key:"twitter",rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(m," ").concat(d),"aria-label":"".concat(m," ").concat(d)},n.createElement(l.FaTwitter,null)):"hatena"===e?n.createElement("a",{key:"hatena",href:"http://b.hatena.ne.jp/entry/".concat(d),className:"fa fa-hatena"}):void 0}))),n.createElement("div",{className:"sidebar-control"},window.slide&&n.createElement(n.Fragment,null,n.createElement(s.MdFirstPage,{onClick:function(){return c(0)},className:"sidebar-cursor"}),n.createElement("span",null,"".concat(h(p+1)," / ").concat(h(window.slide.slides.length))),n.createElement(s.MdLastPage,{onClick:function(){return c(window.slide.slides.length-1)},className:"sidebar-cursor"}))),n.createElement("div",{className:"sidebar-tools"},n.createElement(s.MdFullscreen,{style:{width:26,height:26},onClick:function(){i().isEnabled&&i().toggle()},className:"sidebar-cursor"}),n.createElement(s.MdAirplay,{onClick:function(){return b()},style:{width:19,height:19,marginTop:1},className:"sidebar-cursor"}),n.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":"github"},n.createElement(l.FaGithub,{style:{width:20,height:20,marginTop:3,color:"#f5f5f5"}}))),0!==f.length&&n.createElement("ul",{className:"sidebar-contents"},f.map((function(e){return n.createElement("li",{key:e.title},n.createElement("a",{href:"#slide=".concat(e.index)},e.title))}))))}))}}]);