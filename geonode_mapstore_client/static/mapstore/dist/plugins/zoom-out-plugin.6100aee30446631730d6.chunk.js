(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3476],{1550:(t,e,o)=>{"use strict";o.d(e,{pP:()=>r,TR:()=>i,N7:()=>c,mq:()=>s,uv:()=>p,Qy:()=>u,IL:()=>l,Li:()=>a,OW:()=>f,ZO:()=>m,Um:()=>y,TF:()=>b,Ls:()=>O,Ec:()=>h,Eu:()=>E,JJ:()=>d,nZ:()=>g,YD:()=>_,GI:()=>v,Jb:()=>P,Uh:()=>S,LP:()=>Z,xy:()=>T,o6:()=>N,FP:()=>j,Mo:()=>A,sO:()=>R,Px:()=>w,hd:()=>x,BV:()=>I,SO:()=>C,H0:()=>M,$X:()=>z,ou:()=>L,NE:()=>G});var n=o(97395),r="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",c="CHANGE_MOUSE_POINTER",s="CHANGE_ZOOM_LVL",p="PAN_TO",u="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",a="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",m="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",b="CREATION_ERROR_LAYER",O="UPDATE_VERSION",h="INIT_MAP",E="RESIZE_MAP",d="CHANGE_MAP_LIMITS",g="SET_MAP_RESOLUTIONS",_="REGISTER_EVENT_LISTENER",v="UNREGISTER_EVENT_LISTENER",P="MOUSE_MOVE",S="MOUSE_OUT";function Z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,n.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function T(t,e,o){return{type:l,pos:t,zoom:e,crs:o}}function N(t,e,o,n,i,c,s,p){return{type:r,center:t,zoom:e,bbox:o,size:n,mapStateSource:i,projection:c,viewerOptions:s,resolution:p}}function j(t,e){return{type:i,point:t,layer:e}}function A(t){return{type:c,pointer:t}}function R(t,e){return{type:s,zoom:t,mapStateSource:e}}function w(t,e,o){return{type:u,extent:t,crs:e,maxZoom:o}}function x(t,e){return{type:m,style:t,mapStateSource:e}}function I(t){var e=t.restrictedExtent,o=t.crs,n=t.minZoom;return{type:d,restrictedExtent:e,crs:o,minZoom:n}}function C(t){return{type:g,resolutions:t}}var M=function(t,e){return{type:_,eventName:t,toolName:e}},z=function(t,e){return{type:v,eventName:t,toolName:e}},L=function(t){return{type:P,position:t}},G=function(){return{type:S}}},9192:(t,e,o)=>{"use strict";o.d(e,{Z:()=>d});var n=o(45697),r=o.n(n),i=o(24852),c=o.n(i),s=o(38560),p=o(30294),u=o(50966);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(l,t);var e,o,n,r,i=(n=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(n);if(r){var o=O(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return y(this,t)});function l(){var t;a(this,l);for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return h(b(t=i.call.apply(i,[this].concat(o))),"addTooltip",(function(e){if(!t.props.tooltip)return e;var o=c().createElement(p.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return c().createElement(u.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:o},e)})),t}return e=l,(o=[{key:"render",value:function(){var t=this;return this.addTooltip(c().createElement(s.Z,{id:this.props.id,style:this.props.style,onClick:function(){return t.props.onZoom(t.props.currentZoom+t.props.step)},className:this.props.className,disabled:this.props.currentZoom+this.props.step>this.props.maxZoom||this.props.currentZoom+this.props.step<this.props.minZoom,bsStyle:this.props.bsStyle},this.props.glyphicon?c().createElement(p.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&f(e.prototype,o),l}(c().Component);h(E,"propTypes",{id:r().string,style:r().object,glyphicon:r().string,text:r().string,btnSize:r().oneOf(["large","small","xsmall"]),className:r().string,help:r().oneOfType([r().string,r().element]),step:r().number,currentZoom:r().number,minZoom:r().number,maxZoom:r().number,onZoom:r().func,tooltip:r().element,tooltipPlace:r().string,bsStyle:r().string}),h(E,"defaultProps",{id:"mapstore-zoom",className:"square-button",glyphicon:"plus",btnSize:"xsmall",tooltipPlace:"left",step:1,currentZoom:3,minZoom:0,maxZoom:28,onZoom:function(){},bsStyle:"default",style:{}});const d=E},50966:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(61365),r=o(30294);const i=(0,n.Z)(r.OverlayTrigger)},61365:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var n=o(24852),r=o.n(n),i=o(37275);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}const s=function(t){return function(e){return r().createElement(t,c({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},13573:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>E}),o(7594);var n=o(37295),r=o.n(n),i=o(24852),c=o.n(i),s=o(71703),p=o(22222),u=o(1550),l=o(9192),a=o(5346),f=o(827);function m(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?m(Object(o),!0).forEach((function(e){b(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function b(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var O=(0,p.P1)([f.Od,f._e],(function(t,e){return{currentZoom:t&&t.zoom,id:"zoomout-btn",step:-1,glyphicon:"minus",minZoom:e}})),h=(0,s.connect)(O,{onZoom:u.sO},(function(t,e,o){return y(y(y({},t),e),o)}))(l.Z);const E={ZoomOutPlugin:r()(h,{disablePluginIf:"{state('mapType') === 'cesium'}",Toolbar:{name:"ZoomOut",position:4,tooltip:"zoombuttons.zoomOutTooltip",help:c().createElement(a.Z,{msgId:"helptexts.zoomOut"}),tool:!0,priority:1}}),reducers:{}}},80374:(t,e,o)=>{(t.exports=o(9252)()).push([t.id,".msgapi #zoomin-btn, .msgapi #zoomout-btn {\n    z-index: 1;\n    position: relative;\n}\n",""])},7594:(t,e,o)=>{var n=o(80374);"string"==typeof n&&(n=[[t.id,n,""]]),o(14246)(n,{}),n.locals&&(t.exports=n.locals)}}]);