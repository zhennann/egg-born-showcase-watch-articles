webpackJsonp([4],[,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(65),r=(n.n(i),void 0);e.default={install:function(t,e){return r?console.error("already installed."):((r=t).prototype.$meta.eventHub.$on(r.prototype.$meta.constants.events.login,function(t){r.prototype.$meta.loginParams=t,r.prototype.$f7.loginScreen()}),r.prototype.$meta.eventHub.$on(r.prototype.$meta.constants.events.logout,function(){r.prototype.$meta.store.commit("auth/logout"),r.prototype.$f7.loginScreen()}),r.prototype.$meta.api.get("/api/aa/login/user/getAuth",{silent:!0}).then(function(t){t&&r.prototype.$meta.store.commit("auth/login",{user:t})}),e({routes:n(66).default,config:n(76).default,locales:n(77).default}))}}},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,n){t.exports=n.p+"static/img/github.ca1ef68de99bb1c21b54a2de9c2f5603.png"},,,,function(t,e,n){"use strict";var i=n(21);e.a=i.a},function(t,e,n){"use strict";var i=n(22),r=n.n(i),o=n(41),a=(n.n(o),n(42)),s=n.n(a),c=n(43),u=(n.n(c),n(45)),l=(n.n(u),n(46)),f=(n.n(l),n(47)),d=(n.n(f),n(48)),v=n(52),h=n(53),g=n(55),p=n(59),b=void 0;e.a={install:function(t,e){return b?console.error("already installed."):((b=t).use(s.a),b.prototype.$theme.material=!0,b.component("eb-load-more",g.a),r.a.__ebCustomInterceptorResponse={resolve:function(t){return t},reject:function(t){return!t.config.silent&&b.prototype.$f7.addNotification({message:t.message}),Promise.reject(t)}},r.a.onShowIndicator=function(){return b.prototype.$f7.showIndicator()},r.a.onHideIndicator=function(){return b.prototype.$f7.hideIndicator()},e({meta:{provider:"framework7"},store:Object(p.a)(b),axios:r.a,config:v.a,locales:h.a,options:{framework7:{routes:[],pushState:!0,pushStateSeparator:"#",animateNavBackIcon:!0,fastClicks:!1,materialRipple:!1,animatePages:!1,activeState:!0,cache:!0,cacheDuration:-1,notificationHold:3e3},components:{app:d.a}}}))}}},,,,,,,,,,,,,,,,,,,,,,function(t,e){},,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";var i=n(50),r=n(51),o=n(2)(i.a,r.a,!1,function(t){n(49)},"data-v-e2eab550",null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";var i=location.hash;""!==i&&"#"!==i&&history.replaceState(null,"",location.pathname+location.search),e.a={data:function(){var t=this;return{inits:{mainView:!1,view_2:!1,view_3:!1,view_login:!1},params:{domCache:!0,url:null,preroute:function(e,n){return t.onPreroute(e,n)}},tabhref:"",appContainerClass:!1}},methods:{onWebkitTransitionEnd:function(t){var e=this.$$(t.target);e.hasClass("toolbar-hidden")&&e.hide()},onPreroute:function(t,e){var n=this;if(e.isBack)2===t.history.length&&(this.$$(".viewsTabbar").show(),this.$nextTick(function(){n.$f7.showToolbar(".viewsTabbar")}),this.tabhref&&(this.$f7.showTab(this.tabhref),this.tabhref=""));else{!e.__init&&this.$f7.hideToolbar(".viewsTabbar");var i=this.$$(".viewsTabbar a.active").attr("href");"#mainView"!==i&&(this.tabhref=i,this.$f7.showTab("#mainView"))}return!0},onViewClick:function(t){var e=this;this.inits[t]||(this.inits[t]=!0,this.$nextTick(function(){e.$refs[t].onF7Init(e.$f7),e.$refs[t].f7View.router.load({url:e.$refs[t].$el.getAttribute("data-url"),reload:!0,__init:!0})&&e.$f7.closeModal()}))},onF7Init:function(){this.appContainerClass="android"!==this.$f7.device.os&&"ios"!==this.$f7.device.os}},mounted:function(){this.onViewClick("mainView"),this.onViewClick("view_login"),this.$store.commit("setHash",{hash:i})}}},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"app-container":t.appContainerClass},attrs:{id:"app"}},[n("f7-statusbar"),t._v(" "),n("f7-views",{attrs:{tabs:"","toolbar-through":"",theme:"bluegray"}},[n("f7-view",{ref:"mainView",attrs:{id:"mainView",tab:"","data-url":"/aa/wa/articles",active:"",main:"",init:t.inits.mainView,params:t.params}},[n("f7-pages")],1),t._v(" "),n("f7-view",{ref:"view_2",attrs:{id:"view_2",tab:"","data-url":"/aa/wa/mine",init:t.inits.view_2}},[n("f7-pages")],1),t._v(" "),n("f7-view",{ref:"view_3",attrs:{id:"view_3",tab:"","data-url":"/aa/login/profile",init:t.inits.view_3}},[n("f7-pages")],1),t._v(" "),n("f7-toolbar",{staticClass:"viewsTabbar",attrs:{tabbar:"",labels:"",bottom:""},nativeOn:{webkitTransitionEnd:function(e){t.onWebkitTransitionEnd(e)}}},[n("f7-link",{attrs:{href:"#mainView","tab-link":"",text:t.$text("Articles"),iconMaterial:"schedule",active:""}}),t._v(" "),n("f7-link",{attrs:{href:"#view_2","tab-link":"",text:t.$text("Mine"),iconMaterial:"event_note"},on:{click:function(e){t.onViewClick("view_2")}}}),t._v(" "),n("f7-link",{attrs:{href:"#view_3","tab-link":"",text:t.$text("Profile"),iconMaterial:"account_box"},on:{click:function(e){t.onViewClick("view_3")}}})],1)],1),t._v(" "),n("f7-login-screen",{attrs:{id:"demo-login-screen"}},[n("f7-view",{ref:"view_login",attrs:{"data-url":"/aa/login/login",init:t.inits.view_login,"navbar-through":""}},[n("f7-pages")],1)],1)],1)},staticRenderFns:[]};e.a=i},function(t,e,n){"use strict";e.a={module:{"aa-hello":{}}}},function(t,e,n){"use strict";e.a={"zh-cn":n(54).default}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={Articles:"文章",Mine:"我的",Profile:"个人信息","No data":"没有数据","No more data":"没有更多数据","Load error, try again":"加载失败，请重试"}},function(t,e,n){"use strict";var i=n(57),r=n(58),o=n(2)(i.a,r.a,!1,function(t){n(56)},null,null);e.a=o.exports},function(t,e){},function(t,e,n){"use strict";e.a={props:{autoInit:{type:Boolean,default:!0}},data:function(){return{finished:!1,doing:!1,index:0,error:!1}},created:function(){var t=this;this.autoInit&&this.$nextTick(function(){t.reload()})},computed:{none:function(){return!this.error&&!this.doing&&this.finished&&0==this.index},nomore:function(){return!this.error&&!this.doing&&this.finished&&this.index>0},retry:function(){return this.error}},methods:{reload:function(){var t=this;this.$emit("loadClear",function(){t.finished=!1,t.doing=!1,t.index=0,t.error=!1,t.loadMore()})},loadMore:function(){var t=this;this.finished||this.doing||(this.doing=!0,this.error=!1,this.$emit("loadMore",{index:this.index,done:function(e,n){e?(t.error=!0,t.doing=!1):(t.error=!1,t.doing=!1,t.index=n.index,t.finished=n.finished)}}))},onRetry:function(){this.loadMore()}}}},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.doing||t.none||t.nomore||t.retry?n("div",{staticClass:"eb-loadmore"},[t.doing?n("f7-preloader",{staticClass:"eb-preloader"}):t._e(),t._v(" "),t.none?n("div",[t._v(t._s(t.$text("No data")))]):t._e(),t._v(" "),t.nomore?n("div",[t._v(t._s(t.$text("No more data")))]):t._e(),t._v(" "),t.retry?n("div",[n("f7-button",{staticClass:"color-orange",attrs:{round:""},on:{click:t.onRetry}},[t._v(t._s(t.$text("Load error, try again")))])],1):t._e()],1):t._e()},staticRenderFns:[]};e.a=i},function(t,e,n){"use strict";e.a=function(t){return{state:{hash:""},mutations:{setHash:function(t,e){var n=e.hash;t.hash=n}}}}},,,function(t,e,n){function i(t){var e=r[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var r={"./egg-born-module-a-version/dist/front.css":[93,1]};i.keys=function(){return Object.keys(r)},i.id=62,t.exports=i},function(t,e,n){function i(t){var e=r[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var r={"./egg-born-module-a-version/dist/front.js":[94,2]};i.keys=function(){return Object.keys(r)},i.id=63,t.exports=i},function(t,e,n){function i(t){var e=r[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var r={"./aa-login-sync/front/src/main.js":[14],"./aa-wa/front/src/main.js":[95,0]};i.keys=function(){return Object.keys(r)},i.id=64,t.exports=i},function(t,e){},function(t,e,n){"use strict";function i(t){return n(67)("./"+t+".vue").default}Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{path:"login",component:i("login")},{path:"profile",component:i("profile")}]},function(t,e,n){function i(t){return n(r(t))}function r(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./login.vue":68,"./profile.vue":72};i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=67},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(70),r=n(71),o=n(2)(i.a,r.a,!1,function(t){n(69)},"data-v-427f0dfc",null);e.default=o.exports},function(t,e){},function(t,e,n){"use strict";e.a={data:function(){return{}},methods:{login:function(){location.assign("/api/aa/login/passport/github")}}}},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",{attrs:{"login-screen":""}},[i("f7-login-screen-title",[i("div",{staticClass:"me"},[i("div",[i("img",{attrs:{src:n(15)}})]),t._v(" "),i("div",{staticClass:"title1"},[t._v("EggBorn ShowCase")]),t._v(" "),i("div",{staticClass:"title2"},[t._v("Watch Articles")])])]),t._v(" "),i("div",{staticClass:"login"},[i("f7-button",{attrs:{fill:"",big:"",color:"bluegray"},on:{click:t.login}},[i("img",{attrs:{src:n(16)}}),t._v(" "),i("span",[t._v("Sign in with GitHub")])])],1)],1)},staticRenderFns:[]};e.a=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(74),r=n(75),o=n(2)(i.a,r.a,!1,function(t){n(73)},"data-v-007caaee",null);e.default=o.exports},function(t,e){},function(t,e,n){"use strict";var i=n(12);e.a={data:function(){return{}},computed:Object(i.b)({user:function(t){return t.auth.user},loggedIn:function(t){return t.auth.loggedIn}}),methods:{login:function(){this.$f7.loginScreen()},logout:function(){var t=this;this.$api.post("user/logout").then(function(){t.$store.commit("auth/logout")})}}}},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",{staticClass:"eb-toolbar-bottom",attrs:{"navbar-fixed":""}},[i("f7-navbar",[i("f7-nav-left",[i("img",{staticClass:"eb-logo",attrs:{src:n(15)}})]),t._v(" "),i("f7-nav-center",{attrs:{sliding:""}},[t._v(t._s(t.$text("Profile")))])],1),t._v(" "),i("f7-block",[i("div",{staticClass:"me"},[i("div",[i("img",{staticClass:"avatar avatar48",attrs:{src:t.user&&t.user.avatar}})]),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(t.user&&t.user.displayName))]),t._v(" "),t.loggedIn?t._e():i("div",{staticClass:"status"},[t._v(t._s(t.$text("Not LoggedIn")))]),t._v(" "),i("div",{staticClass:"login"},[t.loggedIn?t._e():i("f7-button",{attrs:{fill:"",big:"",color:"orange"},on:{click:t.login}},[t._v(t._s(t.$text("Sign In")))]),t._v(" "),t.loggedIn?i("f7-button",{attrs:{fill:"",big:"",color:"orange"},on:{click:t.logout}},[t._v(t._s(t.$text("Log Out")))]):t._e()],1)]),t._v(" "),i("f7-link",{staticClass:"external github-star",attrs:{target:"_system",href:"https://github.com/zhennann/egg-born-showcase-watch-articles"}},[i("img",{attrs:{src:n(16)}}),t._v(" "),i("span",[t._v("GitHub")])])],1)],1)},staticRenderFns:[]};e.a=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={"zh-cn":n(78).default}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={Profile:"个人信息","Not LoggedIn":"未登录","Sign In":"现在登录","Log Out":"退出登录"}},function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=79},function(t,e,n){function i(t){return n(r(t))}function r(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./aa-login-sync/front/src/main.js":14};i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=80},function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=81}],[96]);
//# sourceMappingURL=app.94ed15f741f46d7b8749.js.map