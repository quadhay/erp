(this.webpackJsonperp=this.webpackJsonperp||[]).push([[3],{284:function(e,t,a){},285:function(e,t,a){var n,r;window,e.exports=(n=a(0),r=a(6),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(n).default}}),e.exports=t.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=o(a(2)),i=o(a(3)),c=a(4);function o(e){return e&&e.__esModule?e:{default:e}}var s=[],u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleKeyboardEvent=a.handleKeyboardEvent.bind(a),a.registerExclusiveHandler=a.registerExclusiveHandler.bind(a),a.deregisterExclusiveHandler=a.deregisterExclusiveHandler.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),r(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyboardEvent,!1),document.addEventListener("keyup",this.handleKeyboardEvent,!1),document.addEventListener("keypress",this.handleKeyboardEvent,!1);var e=this.props,t=e.isExclusive,a=e.isDisabled;t&&!a&&this.registerExclusiveHandler()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyboardEvent,!1),document.removeEventListener("keyup",this.handleKeyboardEvent,!1),document.removeEventListener("keypress",this.handleKeyboardEvent,!1),this.deregisterExclusiveHandler()}},{key:"componentDidUpdate",value:function(e){var t=e.isExclusive,a=e.isDisabled;(this.props.isExclusive!==t||this.props.isDisabled!==a)&&(this.props.isExclusive&&!this.props.isDisabled?this.registerExclusiveHandler():this.deregisterExclusiveHandler())}},{key:"registerExclusiveHandler",value:function(){this.deregisterExclusiveHandler(),s.unshift(this)}},{key:"deregisterExclusiveHandler",value:function(){var e=this;s.includes(this)&&(s=s.filter((function(t){return t!==e})))}},{key:"handleKeyboardEvent",value:function(e){var t=this.props,a=t.isDisabled,n=t.handleKeys,r=t.onKeyEvent,l=t.handleEventType,i=t.children,o=t.handleFocusableElements;if(a)return!1;if(l!==e.type)return!1;if(s.length>0&&s[0]!==this)return!1;var u=e.target===document.body||o,d=this.childrenContainer&&this.childrenContainer.contains(e.target);if(!(i?d:u))return!1;var m=(0,c.findMatchedKey)(e,n);return!!m&&(r(m,e),!0)}},{key:"render",value:function(){var e=this,a=this.props.children,r=Object.assign({},this.props),i=!0,c=!1,o=void 0;try{for(var s,u=Object.keys(t.propTypes)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0)delete r[s.value]}catch(e){c=!0,o=e}finally{try{!i&&u.return&&u.return()}finally{if(c)throw o}}return a?l.default.createElement("span",n({ref:function(t){e.childrenContainer=t}},r),a):null}}]),t}();t.default=u,u.propTypes={handleKeys:i.default.array,handleEventType:i.default.oneOf(["keydown","keyup","keypress"]),handleFocusableElements:i.default.bool,onKeyEvent:i.default.func,isDisabled:i.default.bool,isExclusive:i.default.bool,children:i.default.any},u.defaultProps={handleKeys:[],handleFocusableElements:!1,handleEventType:"keydown",onKeyEvent:function(){return null}},e.exports=t.default},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0}),t.matchKeyEvent=p,t.findMatchedKey=function(e,t){var a=t.map((function(e){var t=e.toLowerCase();return m[t]||[e]})).reduce((function(e,t){return e.concat(t)}),[]).find((function(t){return p(e,t)}));return!a&&t.includes("all")&&(a="other"),a};var r={backspace:[8],del:[46],delete:[46],ins:[45],insert:[45],tab:[9],enter:[13],return:[13],esc:[27],space:[32],pageup:[33],pagedown:[34],end:[35],home:[36],left:[37],up:[38],right:[39],down:[40],shift:[16],ctrl:[17],alt:[18],cap:[20],num:[144],clear:[12],meta:[91],";":[186,59],"=":[187,61],",":[188,44],"-":[189,45,173,109],minus:[189,45,173,109],".":[190,110],"/":[191,111],"`":[192],"[":[219],"\\":[220],"]":[221],"*":[106],"+":[107],plus:[107],"'":[222],quote:[222]},l=Object.keys(r).reduce((function(e,t){return Object.assign(e,n({},t.toUpperCase(),r[t]))}),{}),i="0123456789".split("").reduce((function(e,t,a){return Object.assign(e,n({},t,[a+48,a+96]))}),{}),c="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((function(e,t,a){return Object.assign(e,n({},t.toLowerCase(),[a+65]),n({},t,[a+65]))}),{}),o="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19".split(",").reduce((function(e,t,a){return Object.assign(e,n({},"f"+t,[a+112]))}),{}),s={control:"ctrl",ctrl:"ctrl",shift:"shift",meta:"meta",cmd:"meta",command:"meta",option:"alt",alt:"alt"},u=t.AllKeys=Object.assign({},r,l,i,c,o),d=Object.assign({},i,c),m={all:Object.keys(u),alphanumeric:Object.keys(d),numeric:Object.keys(i),alphabetic:Object.keys(c),function:Object.keys(o)};function p(e,t){var a=e.which||e.keyCode,n=e.type,r=Object.keys(s).filter((function(t){return e[t+"Key"]})).sort(),l=t.toLowerCase().trim(),i="+"===l?["+"]:l.split(/\s?\+\s?/),c=i.pop(),o=u[c],d=i;if("keypress"===n)return t==String.fromCharCode(a).toLowerCase();if(0===d.length&&0===r.length)return o.indexOf(a)>=0;if(d.length>0&&r.length>0){var m=d.map((function(e){return s[e]})).sort(),p=m.length===r.length&&m.every((function(e,t){return r[t]===e}));return o.indexOf(a)>=0&&p}return 0==d.length&&1===r.length&&c===r[0]}}]))},288:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(0),l=a.n(r),i=a(18),c=a.n(i),o=a(11),s=a(17),u=function(e){var t=e.show;return l.a.createElement("span",{id:"show-sidebar",className:"btn btn-sm btn-dark",onClick:t},l.a.createElement("i",null,l.a.createElement(s.a,{icon:"bars"})))},d=Object(n.b)(null,(function(e){return{show:function(){return e(o.a.toggleSidebar())}}}))(u),m=a(33),p=function(e){return l.a.createElement("div",{className:"sidebar-item sidebar-search"},l.a.createElement("div",null,l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control search-menu",placeholder:"Search..."}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},l.a.createElement("i",{"aria-hidden":"true"},l.a.createElement(s.a,{icon:"search"})))))))},f=function(e){var t=e.hide;return l.a.createElement("div",{id:"close-sidebar",onClick:t},l.a.createElement("i",null,l.a.createElement(s.a,{icon:"times"})))},b=a(14),E=a(111),g=function(e){var t=e.id,a=e.path,n=e.icon,r=e.label,i=e.badge,o=e.children,u=e.hasSubMenu,d=e.subMenuVisible,p=Object(E.a)(e,["id","path","icon","label","badge","children","hasSubMenu","subMenuVisible"]);if(p.header)return l.a.createElement("li",{className:"header-menu"},l.a.createElement("span",null,r));var f=p.isChild&&!u?l.a.createElement(s.a,{icon:n}):l.a.createElement("i",null,l.a.createElement(s.a,{icon:n})),b=p.isChild&&!u?r:l.a.createElement("span",{className:"menu-text"},r),g=i?l.a.createElement("span",{className:"badge badge-pill "+i.bgColor},i.text):null;return u?(o.map((function(e){return e.isChild=!0})),l.a.createElement("li",{className:c()("sidebar-dropdown",{expand:d})},l.a.createElement(m.b,{to:a,onClick:function(e){return p.toggleSubMenu(t,p.parentID,e)}},f,b,g,l.a.createElement(s.a,{icon:"angle-right"})),l.a.createElement("div",{className:"sidebar-submenu "+(d?"expanded":"collapsed")},l.a.createElement("ul",null,l.a.createElement(y,{data:o,parentID:t,activateMe:p.activateMe,activeItem:p.activeItem,toggleSubMenu:p.toggleSubMenu,expandedItem:p.expandedItem,expandedItemParent:p.expandedItemParent,location:p.location}))))):l.a.createElement("li",null,l.a.createElement(m.c,{to:a,onClick:function(){p.activateMe(t)}},f,b,g))};g.defaultProps={path:"/",icon:["far","circle"],toggleSubMenu:null};var v=g,h=function(e){var t=e.data,a=e.activeItem,n=e.activateMe,r=e.expandedItem,i=e.expandedItemParent,c=e.toggleSubMenu,o=e.parentID,s=e.location;return t.length>0?t.map((function(e){var t=e.id,u=e.path,d=e.icon,m=e.label,p=e.badge,f=e.children,b=e.isChild,E=e.header;return l.a.createElement(v,{key:t,id:t,header:E,label:m,path:u,icon:d,badge:p,children:f,isChild:b,active:u===s.pathname,activateMe:n,hasSubMenu:void 0!==f,subMenuVisible:r===t||i===t,expandedItem:r,expandedItemParent:i,toggleSubMenu:c,activeItem:a,parentID:o,location:s})})):null};h.defaultProps={parentID:null};var y=h,N=Object(b.f)((function(e){var t=e.list,a=e.activeItem,n=e.activateMe,r=e.expandedItem,i=e.expandedItemParent,c=e.toggleSubMenu,o=e.location;return l.a.createElement("div",{className:"sidebar-item sidebar-menu"},l.a.createElement("ul",null,l.a.createElement(y,{data:t,activeItem:a,activateMe:n,expandedItem:r,expandedItemParent:i,toggleSubMenu:c,location:o})))})),x=o.a.activateMe,w=o.a.toggleSubMenu,O=Object(n.b)((function(e){return{activeItem:e.UI.activeItem,expandedItem:e.UI.expandedItem,expandedItemParent:e.UI.expandedItemParent}}),(function(e){return{activateMe:function(t){e(x(t))},toggleSubMenu:function(t,a,n){void 0!==n&&n.preventDefault(),e(w(t,a))}}}))(N),I=a(92),S=function(e){return l.a.createElement(b.a,{exact:e.exact,path:e.path,render:function(t){return l.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})},j=(a(284),function(){return l.a.createElement("div",{className:"page-not-found flex-center position-ref",style:{height:"100%"}},l.a.createElement("div",{className:"code"},"404"),l.a.createElement("div",{className:"message",style:{padding:"10px"}},"Not Found"))}),k=function(e){var t=e.fontSize,a=e.contentBox,n=e.hideSidebar;return l.a.createElement("main",{className:"page-content",style:{fontSize:t}},l.a.createElement("div",{id:"overlay",className:"overlay",onClick:n}),l.a.createElement("div",{className:"container-fluid pt-3",style:{height:"inherit"}},l.a.createElement("div",{className:"content-area",style:a?{backgroundColor:"#fff",padding:"20px 10px",borderRadius:"1px",boxShadow:"rgba(156, 156, 156, 0.75) 3px 3px 10px 0"}:null},l.a.createElement(b.c,null,I.a.map((function(e){return l.a.createElement(S,Object.assign({key:e.id},e))})),l.a.createElement(b.a,{component:j})))))},M=a(20),P=a(285),C=a.n(P),_=a(276),K=function(e){var t=["150%","125%","100%"].map((function(t){return l.a.createElement(_.a.Item,{as:"button",key:t,onClick:function(){return e.event(t)}},t)}));return l.a.createElement(_.a,null,l.a.createElement(_.a.Toggle,{as:"a",id:"changeFontSizeDropdown",bsPrefix:"cb0001"},l.a.createElement(s.a,{icon:"text-height"})),l.a.createElement(_.a.Menu,null,t))},D=function(e){var t=e.togglePinSidebar,a=e.changeFontSize,n=Object(r.useState)(!1),i=Object(M.a)(n,2),c=i[0],o=i[1];Object(r.useEffect)((function(){document.addEventListener("fullscreenchange",(function(){return o(!c)}))}));return l.a.createElement("div",{className:"rightbar-wrapper"},l.a.createElement("div",{className:"rightbar-content d-flex flex-column align-items-center h-100"},l.a.createElement("div",{className:"h-50 d-flex flex-column  justify-content-start"},l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"cb0001","data-toggle":"tooltip","data-placement":"left",title:"Back to home"},l.a.createElement(s.a,{icon:"home"}))),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"cb0001","data-toggle":"tooltip","data-placement":"left",title:"Pin sidebar",onClick:t},l.a.createElement(s.a,{icon:"thumbtack"}))),l.a.createElement(C.a,{handleKeys:["ctrl+q","alt+b"],onKeyEvent:function(e,a){return t()}}),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"cb0001","data-toggle":"tooltip","data-placement":"left",title:"Search"},l.a.createElement(s.a,{icon:"search"})))),l.a.createElement("div",{className:"h-50 d-flex flex-column justify-content-end"},l.a.createElement(K,{event:a}),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"cb0001","data-toggle":"tooltip","data-placement":"left",title:"Fullscreen mode",onClick:function(){c?document.exitFullscreen():document.getElementById("app").requestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}},l.a.createElement(s.a,{icon:c?"compress":"expand"}))),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"cb0001","data-toggle":"tooltip","data-placement":"left",title:"Scroll to top",onClick:function(){return document.getElementsByClassName("page-content")[0].scrollTo({top:0,behavior:"smooth"})}},l.a.createElement(s.a,{icon:"arrow-up"}))))))},L=function(e){var t=e.toggleSidebar,a=e.user,n=e.signOut;return l.a.createElement("nav",{className:"main-header navbar navbar-expand "},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("span",{className:"nav-link","data-widget":"pushmenu",onClick:t},l.a.createElement(s.a,{icon:"bars"})))),l.a.createElement("form",{className:"form-inline mr-5"},l.a.createElement("div",{className:"input-group input-group-sm"},l.a.createElement("input",{type:"search",className:"form-control search-content",placeholder:"Search..."}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{type:"submit",className:"btn input-group-text"},l.a.createElement(s.a,{icon:"search"}))))),l.a.createElement(_.a,null,l.a.createElement(_.a.Toggle,{variant:"secondary",bsPrefix:"d-none"},l.a.createElement(s.a,{icon:"user-alt"})," ",l.a.createElement("span",{className:"d-none d-sm-inline-block"},a.email)),l.a.createElement(_.a.Toggle,{as:"a",bsPrefix:"profile",id:"profileDropdown",title:"Profile","data-toggle":"tooltip","data-placement":"bottom"},l.a.createElement(s.a,{icon:"user-alt"})),l.a.createElement(_.a.Menu,null,l.a.createElement(_.a.Item,{to:"/documentation"},l.a.createElement(s.a,{icon:"book"})," Documentation"),l.a.createElement(_.a.Item,{to:"/settings"},l.a.createElement(s.a,{icon:"cog"})," Settings"),l.a.createElement(_.a.Item,{as:"button",onClick:n},l.a.createElement(s.a,{icon:"power-off"})," Logout"))))},T=function(e){return l.a.createElement(_.a,null,l.a.createElement(_.a.Toggle,{as:"a",id:"notificationsDropdown",bsPrefix:"no-toggle"},l.a.createElement("i",null,l.a.createElement(s.a,{icon:"bell"})),l.a.createElement("span",{className:"badge badge-pill badge-warning notification"},"3")),l.a.createElement(_.a.Menu,{className:"notifications"},l.a.createElement("div",{className:"notifications-header"},l.a.createElement("i",{className:"mr-1"},l.a.createElement(s.a,{icon:"bell"})),"Notifications"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item",href:"/"},l.a.createElement("div",{className:"notification-content"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"text-success border border-success"},l.a.createElement(s.a,{icon:"check"}))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"notification-detail"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo"),l.a.createElement("div",{className:"notification-time"},"6 minutes ago")))),l.a.createElement("a",{className:"dropdown-item",href:"/"},l.a.createElement("div",{className:"notification-content"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"text-info border border-info"},l.a.createElement(s.a,{icon:"exclamation"}))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"notification-detail"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo"),l.a.createElement("div",{className:"notification-time"},"Today")))),l.a.createElement("a",{className:"dropdown-item",href:"/"},l.a.createElement("div",{className:"notification-content"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"text-warning border border-warning"},l.a.createElement(s.a,{icon:"exclamation-triangle"}))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"notification-detail"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo"),l.a.createElement("div",{className:"notification-time"},"Yesterday")))),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item text-center",href:"/"},"View all notifications")))},H=function(e){return l.a.createElement(_.a,null,l.a.createElement(_.a.Toggle,{as:"a",id:"messageDropdown",bsPrefix:"no-toggle"},l.a.createElement("i",null,l.a.createElement(s.a,{icon:"envelope"})),l.a.createElement("span",{className:"badge badge-pill badge-success notification"},"7")),l.a.createElement(_.a.Menu,{className:"messages"},l.a.createElement("div",{className:"messages-header"},l.a.createElement("i",{className:"mr-1"},l.a.createElement(s.a,{icon:"envelope"})),"Messages"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item",href:"/"},l.a.createElement("div",{className:"message-content"},l.a.createElement("div",{className:"pic"},l.a.createElement("img",{src:"images/user.jpg",alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"message-title"},l.a.createElement("strong",null," Jhon doe")),l.a.createElement("div",{className:"message-detail"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo")))),l.a.createElement("a",{className:"dropdown-item",href:"/"},l.a.createElement("div",{className:"message-content"},l.a.createElement("div",{className:"pic"},l.a.createElement("img",{src:"images/user.jpg",alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"message-title"},l.a.createElement("strong",null," Jhon doe")),l.a.createElement("div",{className:"message-detail"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo")))),l.a.createElement("a",{className:"dropdown-item",href:"/"},l.a.createElement("div",{className:"message-content"},l.a.createElement("div",{className:"pic"},l.a.createElement("img",{src:"images/user.jpg",alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"message-title"},l.a.createElement("strong",null," Jhon doe")),l.a.createElement("div",{className:"message-detail"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo")))),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item text-center",href:"/"},"View all messages")))},B=function(){return l.a.createElement(_.a,null,l.a.createElement(_.a.Toggle,{as:"a",id:"settingsDropdown",bsPrefix:"no-toggle"},l.a.createElement("i",null,l.a.createElement(s.a,{icon:"cog"})),l.a.createElement("span",{className:"badge-sonar"})),l.a.createElement(_.a.Menu,null,l.a.createElement(m.b,{to:"/myprofile",className:"dropdown-item"},"My profile"),l.a.createElement(m.b,{to:"help",className:"dropdown-item"},"Help"),l.a.createElement(m.b,{to:"/settings",className:"dropdown-item"},"Setting")))},U=function(e){var t=e.signOut;return l.a.createElement("div",null,l.a.createElement("i",{onClick:t,className:"icon text-danger"},l.a.createElement(s.a,{icon:"power-off"})))},F=function(){return l.a.createElement("div",{className:"pinned-footer"},l.a.createElement("i",null,l.a.createElement(s.a,{icon:"ellipsis-h"})))},R=function(){return l.a.createElement("div",{className:"sidebar-footer"},l.a.createElement(T,null),l.a.createElement(H,null),l.a.createElement(B,null),l.a.createElement(U,null),l.a.createElement(F,null))},V=a(55),z=function(e){var t=e.toggleSidebar,a=e.hoverEvent;return l.a.createElement("nav",{id:"sidebar",className:"sidebar-wrapper",onMouseEnter:a,onMouseLeave:a},l.a.createElement("div",{className:"sidebar-content"},l.a.createElement("div",{className:"sidebar-item sidebar-brand"},l.a.createElement(m.b,{to:"/"},V.a.name),l.a.createElement(f,{hide:t})),l.a.createElement(p,null),l.a.createElement(O,{list:V.b})),l.a.createElement(R,null))},J=o.a.toggleSidebar,A=o.a.sidebarHover,q=Object(n.b)(null,(function(e){return{toggleSidebar:function(){return e(J())},hoverEvent:function(){return e(A())}}}))(z),W=Object(n.b)((function(e){return{fontSize:e.UI.fontSize,contentBox:e.UI.contentBox}}),(function(e){return{hideSidebar:function(){return e(o.a.toggleSidebar())}}}))(k),Y=Object(n.b)(null,(function(e){return{togglePinSidebar:function(){return e(o.a.togglePinSidebar())},changeFontSize:function(t){return e(o.a.changeFontSize(t))}}}))(D),G=a(24),Q=Object(n.b)((function(e){return{id:{expanded:e.UI.expandedItem,active:e.UI.activeItem},user:e.auth.user}}),(function(e){return{toggleSidebar:function(){return e(o.a.toggleSidebar())},signOut:function(){G.d.logout(),e(o.d.logout())}}}))(L),X=function(e){var t=e.sidebarVisible,a=e.pinSidebar,n=e.mainHeader,r=e.sidebarBg,i=e.sidebarBgImg,o=e.sidebarMouseEnter,s=e.displayRightPane,u=e.borderRadius,m=e.theme,p=c()("page-wrapper",m,i,{"page-header":n},{toggled:t},{rightbar:s},{pinned:a},{"sidebar-bg":r},{"border-radius-on":u},{"sidebar-hovered":o});return l.a.createElement("div",{className:p},l.a.createElement(d,null),l.a.createElement(q,null),l.a.createElement(Q,null),l.a.createElement(W,null),l.a.createElement(Y,null))};X.defaultProps={sidebarVisible:!0,pinSidebar:!1,mainHeader:!0,sidebarBg:!0,sidebarBgImg:"bg1",sidebarMouseEnter:!1,displayRightPane:!0,borderRadius:!1,theme:"default-theme"};var Z=X;t.default=Object(n.b)((function(e){return{sidebarVisible:e.UI.sidebarVisible,pinSidebar:e.UI.pinSidebar,sidebarMouseEnter:e.UI.sidebarMouseEnter,mainHeader:e.settings.mainHeader,sidebarBg:e.settings.sidebarBg,sidebarBgImg:e.settings.sidebarBgImg,displayRightPane:e.settings.rightPanel,borderRadius:e.settings.borderRadius,theme:e.settings.theme}}))(Z)}}]);
//# sourceMappingURL=3.b6ab4683.chunk.js.map