(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6113],{66113:(t,e,n)=>{"use strict";n.d(e,{$F:()=>E,eg:()=>I,Kg:()=>P,PR:()=>O,eK:()=>T,pu:()=>M,Lu:()=>S,W5:()=>w,TQ:()=>C,KR:()=>D,sY:()=>j,vv:()=>G,jq:()=>L,Tr:()=>U,w:()=>z,CK:()=>k,u5:()=>W,z7:()=>B,FW:()=>V,GC:()=>H,yL:()=>x,_O:()=>_,JM:()=>F,bU:()=>K,mm:()=>q,X6:()=>J});var r=n(57546),o=n.n(r),i=n(50542),c=n.n(i),u=n(46713),a=n.n(u),l=n(31476),s=n.n(l),d=n(83403),f=n.n(d),g=n(92579),y=n(74621),p=n(24684);function m(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=function(t){return function(e){return o()(e,(0,g.Ll)("geostory.currentStory.".concat(t),e),"")}},I=function(t){return o()(t,"geostory.isCollapsed",!1)},P=function(t){return o()(t,"geostory.currentStory")},O=function(t){return o()(t,"geostory.currentPage",{})},T=function(t){return o()(t,"geostory.mode")},M=function(t){return function(t){return o()(function(t){return o()(t,"geostory.resource")}(t),"canEdit",!1)}(t)||(0,y.qg)(t)},R=function(t){return o()(P(t),"sections",[])},S=function(t){return R(t).length>0},w=function(t){return o()(t,"geostory.isSettingsEnabled",!1)},C=function(t){var e=o()(P(t),"settings",{}),n=R(t).filter((function(t){return t.type===g.ID.IMMERSIVE})),r=e.checked||[],i=f()(r.map((function(t){return(0,g.Un)(n,t)})).filter((function(t){return t})));return b(b({},e),{},{expanded:i})},N=function(t){return o()(C(t),"checked",[]).reduce((function(t,e){return b(b({},t),{},A({},e,!0))}),{})},D=function(t){return!s()(o()(P(t),"settings",{}),function(t){return o()(t,"geostory.oldSettings",{})}(t))},j=function(t){return o()(t,"geostory.selectedCard","")},G=function(t){return function(e){return E("".concat(t,".resourceId"))(e)}},L=function(t){return o()(P(t),"resources",[])},U=function(t){return function(e){return c()(L(e),{id:t})}},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.withImmersiveSection,n=void 0!==e&&e,r=t.includeAlways,o=void 0===r||r;return function(t){var e=R(t),r=N(t);return e.reduce((function(t,e){if(e.type===g.ID.TITLE&&(o||r[e.id]))return[].concat(m(t),[e]);if(e.type===g.ID.PARAGRAPH&&(o||r[e.id]))return[].concat(m(t),[e]);if(e.type===g.ID.BANNER&&(o||r[e.id]))return[].concat(m(t),[e]);if(e.type===g.ID.IMMERSIVE){var i=e.contents&&e.contents.reduce((function(t,e){return o||r[e.id]?[].concat(m(t),[b(b({},e),{},{sectionId:t.id})]):t}),[])||[];return n?[].concat(m(t),[e],m(i)):[].concat(m(t),m(i))}return t}),[])}},k=function(t){return z({includeAlways:!0})(t).length},W=function(t){return a()(z({includeAlways:!0})(t),{id:O(t).columns&&O(t).columns[O(t).sectionId]?O(t).columns[O(t).sectionId]:O(t).sectionId||""})},B=function(t){return void 0!==o()(t,"geostory.focusedContent.target")},V=function(t){return o()(t,"geostory.focusedContent")},H=function(t){return E(o()(t,"geostory.focusedContent.path",""))(t)},x=function(t){return R(t).reduce((function(t,e){if(e.type===g.ID.IMMERSIVE){var n=e.contents&&e.contents.map((function(t){return{label:t.title||"",value:t.id}}))||[];return[].concat(m(t),[{label:e.title||"",value:e.id,children:n}])}return[].concat(m(t),[{label:e.title||"",value:e.id}])}),[])},X=function t(e,n){var r=n.contents,o=n.background;return n.resourceId===e||!(!o||o.resourceId!==e)||!!r&&!!c()(r,(function(n){return t(e,n)}))},_=function(t,e){return!!c()(R(t),(function(t){return X(e,t)}))},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,p.F)(t).includes("geostory/shared")},K=function(t){return o()(t,"geostory.updateUrlOnScroll",!1)},q=function(t){return o()(t,"geostory.currentStory.settings.theme.fontFamilies",[])},J=function(t){return o()(t,"geostory.mediaEditorSettings")}},24684:(t,e,n)=>{"use strict";n.d(e,{F:()=>i,y:()=>c});var r=n(57546),o=n.n(r),i=function(t){return o()(t,"router.location.pathname")||"/"},c=function(t){return o()(t,"router.location.search")||""}},92579:(t,e,n)=>{"use strict";n.d(e,{gg:()=>w,Ln:()=>C,ID:()=>N,bT:()=>D,tQ:()=>j,Tr:()=>G,nl:()=>L,ZX:()=>U,lg:()=>z,w:()=>k,cy:()=>W,lt:()=>B,M1:()=>V,kn:()=>x,oH:()=>X,Aq:()=>F,nq:()=>K,Ll:()=>q,ln:()=>J,Un:()=>Y,NC:()=>Z,t4:()=>$,NP:()=>Q,bm:()=>tt,_R:()=>et,Km:()=>nt,of:()=>rt});var r=n(57546),o=n.n(r),i=n(46713),c=n.n(i),u=n(4657),a=n.n(u),l=n(80643),s=n.n(l),d=n(55651),f=n.n(d),g=n(95671),y=n.n(g),p=n(2936),m=n.n(p),v=n(37153),h=n.n(v),b=n(33716),A=n.n(b),E=n(54432),I=n.n(E),P=n(23574),O=n.n(P),T=n(22138),M=n.n(T);function R(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var w="EMPTY_CONTENT",C={CASCADE:"cascade"},N={TITLE:"title",PARAGRAPH:"paragraph",IMMERSIVE:"immersive",BANNER:"banner"},D={TEXT:"text",MEDIA:"media",WEBPAGE:"webPage",COLUMN:"column"},j={MEDIA:"template-media",WEBPAGE:"template-web-page"},G={IMAGE:"image",MAP:"map",VIDEO:"video"},L={EDIT:"edit",VIEW:"view"},U={SHOW_SAVE:"save.show",LOADING:"loading"},z={StoryTypes:f()(C),SectionTypes:f()(N),MediaTypes:f()(G),Modes:f()(L)},k=function(t){var e=t.theme,n=void 0===e?{}:e,r=t.align,o=void 0===r?"center":r,i=t.size,c=void 0===i?"full":i,u=(null==n?void 0:n.value)||h()(n)&&n,a=u&&"custom"!==u&&h()(u)&&" ms-".concat(u)||"",l=" ms-align-".concat(o),s=" ms-size-".concat(c);return"".concat(a).concat(l).concat(s)},W=function(t){var e=t.theme,n=void 0===e?{}:e,r=t.storyTheme;if(""===n||""===(null==n?void 0:n.value))return A()(r)?r:{};var o=null==n?void 0:n.value,i=null==n?void 0:n[o];return A()(i)&&i||{}},B=function(t){return t.type===N.PARAGRAPH&&t&&s()(t.contents)&&t.contents.length&&s()(t.contents[0].contents)&&t.contents[0].contents.length&&t.contents[0].contents[0].type===D.MEDIA},V=function(t,e){var n=function(t){var e=t.split("?");return 2===e.length?e[0]:t}(t),r=document.getElementById(n);r&&r.scrollIntoView(e)},H={zoomControl:!0,mapInfoControl:!1,mapOptions:{scrollWheelZoom:!1,interactions:{mouseWheelZoom:!1,dragPan:!0}}},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m()({},H,t)},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m()({},t,e)},_=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:RegExp(e,"i");return!e||n.test(t)},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:RegExp(e,"i");return y()(t,(function(t){return _(t.data&&(t.data.title||t.data.name),e,n)||_(t.data&&t.data.description,e,n)}))},K=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t};switch(e){case N.TITLE:return{id:M()(),type:N.TITLE,title:n("geostory.builder.defaults.titleTitle"),cover:!1,contents:[{id:M()(),type:D.TEXT,html:"",size:"large",align:"center",theme:"",background:{fit:"cover",size:"full",align:"center"}}]};case N.BANNER:return{id:M()(),type:N.BANNER,title:n("geostory.builder.defaults.titleBanner"),cover:!1,contents:[{id:M()(),background:{fit:"cover",size:"full",align:"center"}}]};case N.PARAGRAPH:return{id:M()(),type:N.PARAGRAPH,title:n("geostory.builder.defaults.titleParagraph"),contents:[{id:M()(),type:D.COLUMN,size:"full",align:"center",contents:[{id:M()(),type:D.TEXT,html:""}]}]};case N.IMMERSIVE:return{id:M()(),type:N.IMMERSIVE,title:n("geostory.builder.defaults.titleImmersive"),contents:[t(D.COLUMN,n)]};case j.MEDIA:return{id:M()(),type:N.PARAGRAPH,title:n("geostory.builder.defaults.titleMedia"),contents:[{id:M()(),type:D.COLUMN,contents:[{id:M()(),type:D.MEDIA,size:"large",align:"center"}]}]};case j.WEBPAGE:return{id:M()(),type:N.PARAGRAPH,title:n("geostory.builder.defaults.titleWebPageSection"),contents:[{id:M()(),type:D.COLUMN,contents:[{id:M()(),type:D.WEBPAGE,size:"medium",align:"center"}]}]};case D.COLUMN:return{id:M()(),type:D.COLUMN,align:"left",size:"small",theme:"",title:n("geostory.builder.defaults.titleImmersiveContent"),contents:[{id:M()(),type:D.TEXT,html:""}],background:{fit:"cover",size:"full",align:"center"}};case D.TEXT:return{id:M()(),type:D.TEXT,title:n("geostory.builder.defaults.titleText"),html:""};case D.IMAGE:return{id:M()(),type:e,title:n("geostory.builder.defaults.titleMedia"),size:"full",align:"center"};case D.WEBPAGE:return{id:M()(),type:e,title:n("geostory.builder.defaults.titleWebPage"),size:"medium",align:"center"};case D.MEDIA:return{id:M()(),type:e,title:n("geostory.builder.defaults.titleUnknown"),size:"large",align:"center"};default:return{id:M()(),type:e,title:n("geostory.builder.defaults.titleUnknown"),size:"full",align:"center"}}},q=function(t,e){return a()(t).reduce((function(t,n){if(n&&0===n.indexOf("{")){var r=JSON.parse(n),i=o()(e,t),u=c()(i,r);return u>=0?[].concat(R(t),[u]):t}return[].concat(R(t),[n])}),[])},J=function(t,e){return a()(t).reduce((function(t,n){var r=t.path,i=t.flatPath;if(n&&0===n.indexOf("{")){var u=JSON.parse(n),a=o()(e,r),l=c()(a,u);if(l>=0){var s=a[l],d=s.id,f=s.type;return{path:[].concat(R(r),[l]),flatPath:[].concat(R(i),[{id:d,type:r[r.length-1],contentType:f}])}}return{path:r,flatPath:i}}return{path:[].concat(R(r),[n]),flatPath:i}}),{path:[],flatPath:[]})},Y=function(t,e){return t.reduce((function(t,n){return I()(n.contents.map((function(t){return t.id})),e)?n.id:t}),null)},Z=function(t){return t.type===N.PARAGRAPH&&!1!==t.editURL&&t&&s()(t.contents)&&t.contents.length&&s()(t.contents[0].contents)&&t.contents[0].contents.length&&t.contents[0].contents[0].type===D.WEBPAGE&&!1!==t.contents[0].contents[0].editURL},$=function(t,e){if(e)switch(t){case"small":return.4*e;case"medium":return.6*e;case"large":return.8*e;default:return e}return 0},Q=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,i="EMPTY";if(!e.includes(n))return null;var c=e.substring(e.indexOf(n)).split("/");return r&&n?c.length>1&&c[2]&&Number(c[0])===n?5===c.length?O()(t,"".concat(c[2],"/column/").concat(c[4]),"".concat(r)):O()(t,"".concat(c[2]),"".concat(r)):(e.includes("shared"),""!==c[1]?"".concat(t,"/section/").concat(r):"".concat(t,"section/").concat(r)):!r&&o&&h()(o)&&o!==i&&c.length>1?e.includes("shared")&&!c[2]?t:5===c.length?O()(t,"".concat(c[4]),"".concat(o)):"".concat(t,"/column/").concat(o):null},tt=function(t,e,n){var r={active:e,inactive:n,custom:{families:[],urls:[]}};return t.filter((function(t){return!!t.src})).forEach((function(t,e){r.custom.families[e]=t.family,r.custom.urls[e]=t.src})),r},et=function(t){return t.map((function(t){return t.family}))},nt=["inherit","Arial","Georgia","Impact","Tahoma","Times New Roman","Verdana"],rt=function(){return window.location.href.match("geostory-embedded")?"geostoryEmbedded":"geostory"}}}]);