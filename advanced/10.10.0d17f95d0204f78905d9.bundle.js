(self.webpackChunkadvanced=self.webpackChunkadvanced||[]).push([[10],{986:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Sidebar:()=>p});var a=n(2),s=n(5),i=n(987),r=n(1007),c=n.n(r),l=n(956),o=n(33),d=void 0,h=window.location.href.split("#")[0],u=["twitter"],w="slide",x=function(e){return"".concat(e).padStart(2,"0")},p=(0,s.memo)((function(e){var t=e.isOpen,n=e.onStateChange,s=e.goTo,r=e.currentIndex,p=e.runPresentationMode,b=e.contents;return(0,a.jsxs)(i.slide,{isOpen:t,disableAutoFocus:!0,onStateChange:n,outerContainerId:"root",pageWrapId:"webslides",children:[(0,a.jsx)("div",{className:"sidebar-social",children:Array.isArray(u)&&u.map((function(e){return"twitter"===e?(0,a.jsx)("a",{rel:"noopener",target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(w," ").concat(h),"aria-label":"".concat(w," ").concat(h),children:(0,a.jsx)(l.FaTwitter,{})},"twitter"):"hatena"===e?(0,a.jsx)("a",{href:"http://b.hatena.ne.jp/entry/".concat(h),className:"fa fa-hatena"},"hatena"):void 0}))}),(0,a.jsx)("div",{className:"sidebar-control",children:window.slide&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.MdFirstPage,{onClick:function(){return s(0)},className:"sidebar-cursor"}),(0,a.jsx)("span",{children:"".concat(x(r+1)," / ").concat(x(window.slide.slides.length))}),(0,a.jsx)(o.MdLastPage,{onClick:function(){return s(window.slide.slides.length-1)},className:"sidebar-cursor"})]})}),(0,a.jsxs)("div",{className:"sidebar-tools",children:[(0,a.jsx)(o.MdFullscreen,{style:{width:26,height:26},onClick:function(){c().isEnabled&&c().toggle()},className:"sidebar-cursor"}),(0,a.jsx)(o.MdAirplay,{onClick:function(){return p()},style:{width:19,height:19,marginTop:1},className:"sidebar-cursor"}),d]}),0!==b.length&&(0,a.jsx)("ul",{className:"sidebar-contents",children:b.map((function(e,t){return(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#slide=".concat(e.index),children:e.title})},e.title)}))})]})}))}}]);