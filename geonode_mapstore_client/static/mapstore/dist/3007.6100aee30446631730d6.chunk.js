(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3007],{1550:(e,t,r)=>{"use strict";r.d(t,{pP:()=>o,TR:()=>i,N7:()=>a,mq:()=>u,uv:()=>c,Qy:()=>s,IL:()=>l,Li:()=>p,OW:()=>f,ZO:()=>y,Um:()=>d,TF:()=>m,Ls:()=>b,Ec:()=>O,Eu:()=>E,JJ:()=>g,nZ:()=>h,YD:()=>v,GI:()=>_,Jb:()=>P,Uh:()=>R,LP:()=>N,xy:()=>j,o6:()=>S,FP:()=>T,Mo:()=>C,sO:()=>w,Px:()=>A,hd:()=>L,BV:()=>k,SO:()=>U,H0:()=>I,$X:()=>D,ou:()=>x,NE:()=>M});var n=r(97395),o="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",a="CHANGE_MOUSE_POINTER",u="CHANGE_ZOOM_LVL",c="PAN_TO",s="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",p="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",y="CHANGE_MAP_STYLE",d="CHANGE_ROTATION",m="CREATION_ERROR_LAYER",b="UPDATE_VERSION",O="INIT_MAP",E="RESIZE_MAP",g="CHANGE_MAP_LIMITS",h="SET_MAP_RESOLUTIONS",v="REGISTER_EVENT_LISTENER",_="UNREGISTER_EVENT_LISTENER",P="MOUSE_MOVE",R="MOUSE_OUT";function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,n.vU)({title:"warning",message:"map.errorLoadingFont",values:e,position:"tc",autoDismiss:10})}function j(e,t,r){return{type:l,pos:e,zoom:t,crs:r}}function S(e,t,r,n,i,a,u,c){return{type:o,center:e,zoom:t,bbox:r,size:n,mapStateSource:i,projection:a,viewerOptions:u,resolution:c}}function T(e,t){return{type:i,point:e,layer:t}}function C(e){return{type:a,pointer:e}}function w(e,t){return{type:u,zoom:e,mapStateSource:t}}function A(e,t,r){return{type:s,extent:e,crs:t,maxZoom:r}}function L(e,t){return{type:y,style:e,mapStateSource:t}}function k(e){var t=e.restrictedExtent,r=e.crs,n=e.minZoom;return{type:g,restrictedExtent:t,crs:r,minZoom:n}}function U(e){return{type:h,resolutions:e}}var I=function(e,t){return{type:v,eventName:e,toolName:t}},D=function(e,t){return{type:_,eventName:e,toolName:t}},x=function(e){return{type:P,position:e}},M=function(){return{type:R}}},95797:(e,t,r)=>{"use strict";r.d(t,{DR:()=>n,S0:()=>o,u7:()=>i,lj:()=>a,yz:()=>u,lN:()=>c,zW:()=>s,Yx:()=>l,VN:()=>p,Hu:()=>f,VT:()=>y,RD:()=>d,Qq:()=>m,R1:()=>b,_T:()=>O,vO:()=>E,XO:()=>g,jG:()=>h,Xc:()=>v,gT:()=>_,rG:()=>P,t3:()=>R,Fs:()=>N,w_:()=>j,Lm:()=>S,rh:()=>T,rP:()=>C,IO:()=>w}),r(75875);var n="LAYER_SELECTED_FOR_SEARCH",o="FEATURE_TYPE_SELECTED",i="FEATURE_TYPE_LOADED",a="FEATURE_LOADED",u="FEATURE_LOADING",c="FEATURE_TYPE_ERROR",s="FEATURE_ERROR",l="QUERY_CREATE",p="QUERY:UPDATE_QUERY",f="QUERY_RESULT",y="QUERY_ERROR",d="RESET_QUERY",m="QUERY",b="INIT_QUERY_PANEL",O="QUERY:TOGGLE_SYNC_WMS",E="QUERY:TOGGLE_LAYER_FILTER";function g(){return{type:O}}function h(){return{type:E}}function v(){return{type:b}}function _(e,t){return{type:o,url:e,typeName:t}}function P(e,t){return{type:i,typeName:e,featureType:t}}function R(e,t){return{type:c,typeName:e,error:t}}function N(e){return{type:u,isLoading:e}}function j(e,t,r,n,o){return{type:f,searchUrl:t,filterObj:r,result:e,queryOptions:n,reason:o}}function S(e){return{type:y,error:e}}function T(e,t){return{type:p,updates:e,reason:t}}function C(e,t){return{type:l,searchUrl:e,filterObj:t}}function w(e,t,r,n){return{type:m,searchUrl:e,filterObj:t,queryOptions:r,reason:n}}},47310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(75875),o=r.n(n),i=r(72500),a=r.n(i),u=r(37295),c=r.n(u),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const l={geocode:function(e,t){var r=c()({q:e},s,t||{}),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=c()({lat:e.lat,lon:e.lng},t||{},s),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},7472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N});var n=r(37295),o=r.n(n),i=r(45697),a=r.n(i),u=r(24852),c=r.n(u),s=r(85294),l=r.n(s),p=r(72986),f=r.n(p),y=r(5346);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,r,n,i,a=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(n);if(i){var r=_(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function u(){var e;O(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return P(v(e=a.call.apply(a,[this].concat(r))),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(y.Z,{msgId:"loading"}),c().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),P(v(e),"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),P(v(e),"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),P(v(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=u,(r=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:b({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),r=this.props.draggable?c().createElement(l(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&E(t.prototype,r),u}(c().Component);P(R,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),P(R,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const N=R},55105:(e,t,r)=>{"use strict";r.d(t,{Nr:()=>p,ic:()=>f,Jz:()=>d,VM:()=>m,CF:()=>b});var n=r(20721),o=r.n(n),i=r(827),a=r(52259);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return e.maplayout&&e.maplayout.layout||{}},p=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=l(e);return r&&Object.keys(r).filter((function(e){return t[e]})).reduce((function(e,t){return c(c({},e),{},s({},t,r[t]))}),{})||{}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=l(e),n=!!o()(t.filter((function(e){return r[e.key]})).map((function(e){return"not"===e.type?r[e.key]!==e.value&&r[e.key]:r[e.key]===e.value})));return n},d=function(e){return y(e,[{key:"right",value:658}])},m=function(e){return y(e,[{key:"bottom",value:30,type:"not"}])},b=function(e){var t=(0,i.Od)(e),r=p(e);return r&&t&&t.size&&{left:(0,a.parseLayoutValue)(r.left,t.size.width),bottom:(0,a.parseLayoutValue)(r.bottom,t.size.height),right:(0,a.parseLayoutValue)(r.right,t.size.width),top:(0,a.parseLayoutValue)(r.top,t.size.height)}}},69842:(e,t,r)=>{"use strict";r.d(t,{qh:()=>y,GK:()=>d,Nl:()=>m,vE:()=>b,gC:()=>O,hI:()=>E,Vc:()=>g,BU:()=>h,Vx:()=>v,a8:()=>_,IM:()=>P,G$:()=>R});var n=r(57546),o=r.n(n),i=r(22222),a=r(75110),u=r(8316),c=r(86638),s=["title"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){return o()(e,"queryform.crossLayerFilter")},d=function(e){return((0,a.l2)(e)||[]).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,r=e.group;return"wms"===t&&"background"!==r})).map((function(t){var r=t.title;return p(p({},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,s)),{},{title:(0,c.MZ)((0,u.Pz)(e),r)})}))},m=function(e){return o()(e,"queryform.spatialField.geometry")},b=function(e){return o()(e,"queryform.spatialField")},O=(0,i.P1)((function(e){return o()(e,"queryform.attributePanelExpanded")}),(function(e){return o()(e,"queryform.spatialPanelExpanded")}),(function(e){return o()(e,"queryform.crossLayerExpanded")}),(function(e,t,r){return{attributePanelExpanded:e,spatialPanelExpanded:t,crossLayerExpanded:r}})),E=function(e){return o()(e,"layerFilter.persisted")},g=function(e){return o()(e,"layerFilter.applied")},h=function(e){return o()(e,"queryform.spatialField.method")},v=function(e){return o()(e,"queryform.maxFeaturesWPS")},_=function(e){return m(e)&&m(e).type||"Polygon"},P=function(e){return m(e)&&m(e).projection||"EPSG =4326"},R=function(e){return m(e)&&m(e).coordinates||[]}}}]);