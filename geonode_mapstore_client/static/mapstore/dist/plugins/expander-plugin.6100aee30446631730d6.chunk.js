(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1205],{75140:(t,e,n)=>{"use strict";n.d(e,{Z:()=>B});var o=n(24852),r=n.n(o),i=n(45697),l=n.n(i),p=n(30294),c=n(50966),s=n(38560),u=n(37295),a=n.n(u);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(p,t);var e,n,o,i,l=(o=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(o);if(i){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function p(){var t;y(this,p);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return v(h(t=l.call.apply(l,[this].concat(n))),"getStyle",(function(){var e={cursor:t.props.disabled?"not-allowed":"pointer",margin:0,padding:0,display:"inline-block"};return t.props.image?a()(e,{overflow:"hidden"}):a()(e,{height:"48px",width:"48px",border:"1px solid grey",borderRadius:"4px",backgroundColor:"rgb(250, 250, 250)"}),a()(e,t.props.style),e})),t}return e=p,(n=[{key:"render",value:function(){return r().createElement("img",{className:this.props.className,id:this.props.id,title:this.props.tooltip,style:this.getStyle(),src:this.props.image,onClick:this.props.disabled?null:this.props.onClick})}}])&&d(e.prototype,n),p}(r().Component);v(O,"propTypes",{id:l().string,image:l().string,onClick:l().func,style:l().object,disabled:l().bool,tooltip:l().string,className:l().string}),v(O,"defaultProps",{disabled:!1,tooltip:null,className:void 0});const w=O;function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?x(t):e}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(u,t);var e,n,o,i,l=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(o);if(i){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _(this,t)});function u(){var t;k(this,u);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return T(x(t=l.call.apply(l,[this].concat(n))),"onClick",(function(){t.props.onClick(!t.props.pressed,t.props.options)})),T(x(t),"renderNormalButton",(function(){return r().createElement(s.Z,j({id:t.props.id},t.props.btnConfig,{onClick:t.onClick,bsStyle:t.props.pressed?t.props.pressedStyle:t.props.defaultStyle,style:t.props.style}),t.props.glyphicon?r().createElement(p.Glyphicon,{glyph:t.props.glyphicon}):null,t.props.glyphicon&&t.props.text&&!r().isValidElement(t.props.text)?" ":null,t.props.text,t.props.help)})),T(x(t),"renderImageButton",(function(){return r().createElement(w,{id:t.props.id,image:t.props.image,onClick:t.onClick,style:t.props.style})})),T(x(t),"addTooltip",(function(e){return r().createElement(c.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:t.props.tooltip},e)})),t}return e=u,(n=[{key:"render",value:function(){var t="normal"===this.props.btnType?this.renderNormalButton():this.renderImageButton();return this.props.tooltip?this.addTooltip(t):t}}])&&C(e.prototype,n),u}(r().Component);T(R,"propTypes",{id:l().string,btnConfig:l().object,options:l().object,text:l().oneOfType([l().string,l().element]),help:l().oneOfType([l().string,l().element]),glyphicon:l().string,pressed:l().bool,onClick:l().func,tooltip:l().element,tooltipPlace:l().string,style:l().object,btnType:l().oneOf(["normal","image"]),image:l().string,pressedStyle:l().string,defaultStyle:l().string}),T(R,"defaultProps",{onClick:function(){},options:{},pressed:!1,tooltipPlace:"top",style:{},btnType:"normal",pressedStyle:"primary",defaultStyle:"default"});const B=R},50966:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(61365),r=n(30294);const i=(0,o.Z)(r.OverlayTrigger)},61365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var o=n(24852),r=n.n(o),i=n(37275);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}const p=function(t){return function(e){return r().createElement(t,l({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},63277:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var o=n(24852),r=n.n(o),i=n(30294),l=n(37295),p=n.n(l),c=n(75140);const s={ExpanderPlugin:p()(c.Z,{Toolbar:{name:"expand",position:1e4,alwaysVisible:!0,tooltip:"expandtoolbar.tooltip",showWhen:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.items,n=void 0===e?[]:e;return n.filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"expand"!==!t.name&&!t.alwaysVisible})).length>1},icon:r().createElement(i.Glyphicon,{glyph:"option-horizontal"}),toggle:!0,toggleControl:"toolbar",toggleProperty:"expanded",priority:1}}),reducers:{}}}}]);