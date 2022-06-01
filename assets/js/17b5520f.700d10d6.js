"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1382],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2670:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={id:"CrosshairMode",title:"Enumeration: CrosshairMode",sidebar_label:"CrosshairMode",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,u={unversionedId:"api/enums/CrosshairMode",id:"version-3.8/api/enums/CrosshairMode",title:"Enumeration: CrosshairMode",description:"Represents the crosshair mode.",source:"@site/versioned_docs/version-3.8/api/enums/CrosshairMode.md",sourceDirName:"api/enums",slug:"/api/enums/CrosshairMode",permalink:"/lightweight-charts/docs/api/enums/CrosshairMode",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"CrosshairMode",title:"Enumeration: CrosshairMode",sidebar_label:"CrosshairMode",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},c={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Normal",id:"normal",level:3},{value:"Magnet",id:"magnet",level:3}],m={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents the crosshair mode."),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"normal"},"Normal"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Normal")),(0,i.kt)("p",null,"This mode allows crosshair to move freely on the chart."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"magnet"},"Magnet"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Magnet")),(0,i.kt)("p",null,"This mode sticks crosshair's horizontal line to the price value of a single-value series or to the close price of OHLC-based series."))}d.isMDXComponent=!0}}]);