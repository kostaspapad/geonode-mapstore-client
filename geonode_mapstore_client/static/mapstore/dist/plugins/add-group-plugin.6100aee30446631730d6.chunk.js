(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9252],{80416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>a,ih:()=>l,OX:()=>i,sb:()=>s,K$:()=>c,k7:()=>u,cX:()=>p,x9:()=>d,vs:()=>f,oE:()=>m,Po:()=>y,qv:()=>b,cI:()=>E,g6:()=>h,I4:()=>g,l$:()=>v,Xv:()=>O,k3:()=>R,CQ:()=>N,R8:()=>S,HN:()=>A,sH:()=>_,c7:()=>C,_7:()=>P,eF:()=>T,O6:()=>w,ED:()=>L,RP:()=>k,sF:()=>D,VP:()=>j,He:()=>I,vO:()=>Y,WO:()=>x,bh:()=>z,pV:()=>G,MK:()=>F,ZF:()=>Z,tV:()=>H,Dv:()=>M,Yz:()=>U,kI:()=>V,XG:()=>W,A4:()=>X,Rp:()=>B,ct:()=>K,oh:()=>$,$h:()=>q,ud:()=>Q,Qr:()=>J,LR:()=>ee,nN:()=>te,UG:()=>ne,F5:()=>re,c9:()=>oe,Jh:()=>ae,Xy:()=>le});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",a="CHANGE_GROUP_PROPERTIES",l="TOGGLE_NODE",i="SORT_NODE",s="REMOVE_NODE",c="UPDATE_NODE",u="MOVE_NODE",p="LAYER_LOADING",d="LAYER_LOAD",f="LAYER_ERROR",m="ADD_LAYER",y="ADD_GROUP",b="REMOVE_LAYER",E="SHOW_SETTINGS",h="HIDE_SETTINGS",g="UPDATE_SETTINGS",v="REFRESH_LAYERS",O="LAYERS:UPDATE_LAYERS_DIMENSION",R="LAYERS_REFRESHED",N="LAYERS_REFRESH_ERROR",S="LAYERS:BROWSE_DATA",A="LAYERS:DOWNLOAD",_="LAYERS:CLEAR_LAYERS",C="LAYERS:SELECT_NODE",P="LAYERS:FILTER_LAYERS",T="LAYERS:SHOW_LAYER_METADATA",w="LAYERS:HIDE_LAYER_METADATA",L="LAYERS:UPDATE_SETTINGS_PARAMS";function k(e,t,n){return{type:E,node:e,nodeType:t,options:n}}function D(){return{type:h}}function j(e){return{type:g,options:e}}function I(e,t){return{type:r,newProperties:t,layer:e}}function Y(e,t){return{type:o,layer:e,params:t}}function x(e,t){return{type:a,newProperties:t,group:e}}function z(e,t,n){return{type:l,node:e,nodeType:t,status:!n}}function G(e){return{type:"CONTEXT_NODE",node:e}}function F(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:i,node:e,order:t,sortLayers:n}}function Z(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:s,node:e,nodeType:t,removeEmpty:n}}function H(e,t,n){return{type:c,node:e,nodeType:t,options:n}}function M(e,t,n){return{type:u,node:e,groupId:t,index:n}}function U(e){return{type:p,layerId:e}}function V(e,t){return{type:d,layerId:e,error:t}}function W(e,t,n){return{type:f,layerId:e,tilesCount:t,tilesErrorCount:n}}function X(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:m,layer:e,foreground:t}}function B(e,t,n){return{type:y,group:e,parent:t,options:n}}function K(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function $(e){return{type:R,layers:e}}function q(e,t){return{type:N,layers:e,error:t}}function Q(e,t,n,r){return{type:O,dimension:e,value:t,options:n,layers:r}}function J(e){return{type:S,layer:e}}function ee(e){return{type:A,layer:e}}function te(){return{type:_}}function ne(e,t,n){return{type:C,id:e,nodeType:t,ctrlKey:n}}function re(e){return{type:P,text:e}}function oe(e,t){return{type:T,metadataRecord:e,maskLoading:t}}function ae(){return{type:w}}function le(e,t){return{type:L,newParams:e,update:t}}},7472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var r=n(37295),o=n.n(r),a=n(45697),l=n.n(a),i=n(24852),s=n.n(i),c=n(85294),u=n.n(c),p=n(72986),d=n.n(p),f=n(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,r,a,l=(r=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(a){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function i(){var e;E(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return N(O(e=l.call.apply(l,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?s().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},s().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},s().createElement(f.Z,{msgId:"loading"}),s().createElement(d(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),N(O(e),"renderRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),N(O(e),"hasRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),N(O(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=i,(n=[{key:"render",value:function(){var e=this,t=s().createElement("div",{id:this.props.id,style:b({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},s().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),s().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?s().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):s().createElement("span",null)),n=this.props.draggable?s().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?s().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&h(t.prototype,n),i}(s().Component);N(S,"propTypes",{id:l().string.isRequired,style:l().object,backgroundStyle:l().object,className:l().string,maskLoading:l().bool,containerClassName:l().string,headerClassName:l().string,bodyClassName:l().string,footerClassName:l().string,onClickOut:l().func,modal:l().bool,start:l().object,draggable:l().bool,bounds:l().oneOfType([l().string,l().object])}),N(S,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const A=S},75480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(24852),o=n.n(r);const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,n=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:n,className:"mapstore-inline-loader"})}},94745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(24852),o=n.n(r),a=n(30294),l=n(7472),i=n(80717),s=n(67076),c=n(19081),u=n.n(c),p=n(75480),d={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},f={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const m=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,s=e.loadingText,c=e.onClose,m=void 0===c?function(){}:c,y=e.title,b=void 0===y?"":y,E=e.clickOutEnabled,h=void 0===E||E,g=e.showClose,v=void 0===g||g,O=e.disabledClose,R=void 0!==O&&O,N=e.showFullscreen,S=void 0!==N&&N,A=e.fullscreenType,_=void 0===A?"full":A,C=e.buttons,P=void 0===C?[]:C,T=e.size,w=void 0===T?"":T,L=e.bodyClassName,k=void 0===L?"":L,D=e.children,j=e.draggable,I=void 0!==j&&j,Y=e.fullscreenState,x=e.onFullscreen,z=e.fade,G=void 0!==z&&z,F=e.fitContent,Z=e.modalClassName,H=void 0===Z?"":Z,M=e.dialogClassName,U=void 0===M?"":M,V=e.enableFooter,W=void 0===V||V,X=d[w]||"",B=S&&"expanded"===Y&&f.className[_]||"",K=n?o().createElement("div",{className:"modal-fixed ".concat(H," ")+(I?"ms-draggable":"")},o().createElement(l.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?m:function(){},containerClassName:"ms-resizable-modal",draggable:I,modal:!0,className:"modal-dialog modal-content"+X+B+U+(F?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},b),S&&f.className[_]&&o().createElement(a.Glyphicon,{className:"ms-header-btn",onClick:function(){return x("expanded"===Y?"collapsed":"expanded")},glyph:f.glyph[Y][_]}),v&&m&&o().createElement(a.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:m,disabled:R}))),o().createElement("div",{role:"body",className:k},D),W&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(p.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?s:null),o().createElement(i.Z,{buttons:P})))):null;return G?o().createElement(u(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},K):K}))},50514:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var r=n(24852),o=n.n(r),a=n(45697),l=n.n(a),i=n(71703),s=n(57546),c=n.n(s),u=n(99534),p=n(94745),d=n(5346),f=n(30294),m=n(82904),y=n(80416),b=n(22843);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,n,r,a,l=(r=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(a){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function i(){var e;h(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return S(R(e=l.call.apply(l,[this].concat(n))),"state",{groupName:""}),S(R(e),"changeName",(function(t){e.setState({groupName:t.target.value})})),S(R(e),"isValid",(function(e){return""!==e})),e}return t=i,(n=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.enabled&&!this.props.enabled&&this.setState({groupName:""})}},{key:"render",value:function(){var e=this;return o().createElement(u.Z,null,o().createElement(p.Z,{size:"xs",clickOutEnabled:!1,showClose:!1,title:o().createElement(d.Z,{msgId:"toc.addGroup"}),show:this.props.enabled,buttons:[{text:o().createElement(d.Z,{msgId:"cancel"}),onClick:function(){e.props.onClose()}},{bsStyle:"primary",disabled:!this.isValid(this.state.groupName),text:o().createElement(d.Z,{msgId:"addgroup.addbtn"}),onClick:function(){e.props.onAdd(e.state.groupName,e.props.parent),e.props.onClose()}}]},o().createElement("div",{id:"mapstore-add-toc-group"},o().createElement(f.FormGroup,null,o().createElement("label",{htmlFor:"groupName"},o().createElement(d.Z,{msgId:"addgroup.groupName"})),o().createElement(f.FormControl,{name:"groupName",onChange:this.changeName,value:this.state.groupName})))))}}])&&g(t.prototype,n),i}(r.Component);S(A,"propTypes",{enabled:l().bool,parent:l().string,onClose:l().func,onAdd:l().func}),S(A,"defaultProps",{enabled:!1,parent:null,onClose:function(){},onAdd:function(){}});var _=(0,i.connect)((function(e){return{enabled:c()(e,"controls.addgroup.enabled",!1),parent:c()(e,"controls.addgroup.parent",null)}}),{onClose:m.pu.bind(null,"addgroup","enabled",!1,"parent",null),onAdd:y.Rp})(A);const C=(0,b.rx)("AddGroup",{component:_,containers:{TOC:{doNotHide:!0,name:"AddGroup"}}})}}]);