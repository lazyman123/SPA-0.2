/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _cart = __webpack_require__(2);
	
	var _cart2 = _interopRequireDefault(_cart);
	
	var _cate = __webpack_require__(7);
	
	var _cate2 = _interopRequireDefault(_cate);
	
	var _discover = __webpack_require__(10);
	
	var _discover2 = _interopRequireDefault(_discover);
	
	var _fruit = __webpack_require__(13);
	
	var _fruit2 = _interopRequireDefault(_fruit);
	
	var _index = __webpack_require__(16);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(19);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _detail = __webpack_require__(23);
	
	var _detail2 = _interopRequireDefault(_detail);
	
<<<<<<< HEAD
	var _guide = __webpack_require__(25);
	
	var _guide2 = _interopRequireDefault(_guide);
=======
	var _list = __webpack_require__(25);
	
	var _list2 = _interopRequireDefault(_list);
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	
	var _store = __webpack_require__(28);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// router
	var router = new VueRouter();
	
	var App = Vue.extend({
	  store: _store2.default
	});
	
	router.map({
	  '/': {
	    component: _guide2.default
	  },
	  '/index': {
	    component: _index2.default,
	    subRoutes: {
	      '/': {
	        component: _main2.default
	      },
	      '/cate': {
	        component: _cate2.default
	      },
	      '/discover': {
	        component: _discover2.default
	      },
	      '/cart': {
	        component: _cart2.default
	      },
	      '/fruit': {
	        component: _fruit2.default
	      }
	    }
	  },
	  '/list/:id/:title': {
	    name: 'list',
	    component: _list2.default
	  }
	  // ,
	  //
	  // '/detail/:id ': {
	  //   name: 'detail',
	  //   component: detail
	  // }
	});
	router.start(App, 'body');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(3)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\cart.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5bdca608/cart.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(4);
	
	var _getters = __webpack_require__(5);
	
	// <template>
	//   购物车...
	// </template>
	//
	// <script>
	exports.default = {
	  vuex: {
	    getters: {
	      //getIndex
	      curIndex: _getters.getTabindex
	    },
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {};
<<<<<<< HEAD
	  },
	  ready: function ready() {
	    this.change(3);
=======
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tabChanger = exports.tabChanger = function tabChanger(_ref, tabIndex) {
	  var dispatch = _ref.dispatch,
	      state = _ref.state;
	
	  dispatch('CHANGETAB', tabIndex);
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getTabindex = exports.getTabindex = function getTabindex(state) {
	  return state.tabIndex;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n购物车...\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\cate.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5e72f6b7/cate.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(4);
	
	var _getters = __webpack_require__(5);
	
	// <template>
<<<<<<< HEAD
	//   分类...
=======
	//   <div class="cate_contanier">
	//     <ul>
	//       <li v-for = "list in lists" v-link = "{name:'list',params:{id:$index,title:list.name}}">
	//         <img :src="list.photo" alt="">
	//       </li>
	//     </ul>
	//   </div>
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	// </template>
	//
	// <script>
	exports.default = {
	  vuex: {
	    getters: {
	      //getIndex
	      curIndex: _getters.getTabindex
	    },
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
<<<<<<< HEAD
	    return {};
	  },
	  ready: function ready() {
	    this.change(1);
=======
	    return {
	      lists: []
	    };
	  },
	  ready: function ready() {
	    this.change(1);
	    var that = this;
	    this.$http.get('/rest/cate').then(function (res) {
	      that.lists = res.data.data;
	    });
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"cate_contanier\">\n  <ul>\n    <li v-for = \"list in lists\" v-link = \"{name:'list',params:{id:$index,title:list.name}}\">\n      <img :src=\"list.photo\" alt=\"\">\n    </li>\n  </ul>\n</div>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\discover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-41cc6e51/discover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(4);
	
	var _getters = __webpack_require__(5);
	
	// <template>
	//   发现...
	// </template>
	//
	// <script>
	exports.default = {
	  vuex: {
	    getters: {
	      //getIndex
	      curIndex: _getters.getTabindex
	    },
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  ready: function ready() {
	    this.change(2);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n发现...\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\fruit.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-52207e5c/fruit.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(4);
	
	var _getters = __webpack_require__(5);
	
	// <template>
	//   我的果园...
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    getters: {
	      //getIndex
	      curIndex: _getters.getTabindex
	    },
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  ready: function ready() {
	    this.change(4);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n我的果园...\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(17)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-34f7b7cc/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(4);
	
	var _getters = __webpack_require__(5);
	
	// <template>
	//   <div>
	//     <div class="index-container"  transition="goto">
	//         <router-view></router-view>
	//     </div>
	//     <footer id="footer">
	//         <ul>
	//             <li
	//               v-bind:class="curIndex == $index ? 'active' : ''"
	//               v-on:click="changPage($index)"
	//               v-for="tab in tablist"
	//               v-link="{path: tab.path}">
	//                 <i class="iconfont icon">{{{tab.icon}}}</i>
	//                 <b>{{tab.name}}</b>
	//             </li>
	//         </ul>
	//     </footer>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  vuex: {
	    getters: {
	      //getIndex
	      curIndex: _getters.getTabindex
	    },
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {
	      tablist: [{ path: '/index', icon: '&#xe64a;', name: '首页' }, { path: '/index/cate', icon: '&#xe606;', name: '分类' }, { path: '/index/discover', icon: '&#xe602;', name: '发现' }, { path: '/index/cart', icon: '&#xe601;', name: '购物车' }, { path: '/index/fruit', icon: '&#xe653;', name: '我的' }]
	    };
	  },
	
	
	  methods: {
	    changPage: function changPage(i) {
	      this.change(i);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 18 */
/***/ function(module, exports) {

<<<<<<< HEAD
	module.exports = "\n<div>\n  <div class=\"index-container\"  transition=\"goto\">\n      <router-view></router-view>\n  </div>\n  <footer id=\"footer\">\n      <ul>\n          <li\n            v-bind:class=\"curIndex == $index ? 'active' : ''\"\n            v-on:click=\"changPage($index)\"\n            v-for=\"tab in tablist\"\n            v-link=\"{path: tab.path}\">\n              <i class=\"iconfont icon\">{{{tab.icon}}}</i>\n              <b>{{tab.name}}</b>\n          </li>\n      </ul>\n  </footer>\n</div>\n";
=======
	module.exports = "\n<div>\n  <div class=\"index-container\">\n      <router-view></router-view>\n  </div>\n  <footer id=\"footer\">\n      <ul>\n          <li\n            v-bind:class=\"curIndex == $index ? 'active' : ''\"\n            v-on:click=\"changPage($index)\"\n            v-for=\"tab in tablist\"\n            v-link=\"{path: tab.path}\">\n              <i class=\"iconfont icon\">{{{tab.icon}}}</i>\n              <b>{{tab.name}}</b>\n          </li>\n      </ul>\n  </footer>\n</div>\n";
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5af83c21/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _commonUtil = __webpack_require__(21);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _actions = __webpack_require__(4);
	
	var _getters = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mySwiper = null,
<<<<<<< HEAD
	    mySwiper1 = null,
	    mySwiper2 = null,
	    mySwiper3 = null,
	    Iscroll = null; // <template>
	//   <div class="index_header">
	//     <span>上海</span>
	//     <input type="text" placeholder="金奇异果">
	//   </div>
	//   <div class="m-box">
	//     <div class="m-container" id="m-container">
	//       <div class="swiper-container" id="swiper1" v-bind:style="swiperstyle">
	//         <div class="swiper-wrapper">
	//           <div class="swiper-slide" v-bind:style="swiperstyle" v-for="l in banner">
	//             <img v-bind:src="l.photo" alt="">
	//           </div>
	//         </div>
	//         <div class="swiper-pagination"></div>
	//       </div>
	//
	//       <div class="fastinfo">
	//         <div class="fast_left">
	//           <span>天天快报</span>
	//         </div>
	//         <div class="fast_right">
	//           <div class="swiper-container" id="swiper2">
	//             <div class="swiper-wrapper">
	//               <div class="swiper-slide" v-for="fa in fastinfo">
	//                 <div> {{fa.title}}</div>
	//               </div>
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//
	//       <div class="navbox">
	//         <ul>
	//           <li v-for="item in nav">
	//             <img v-bind:src="item.photo" alt="">
	//             <span>{{item.title}}</span>
	//           </li>
	//         </ul>
	//         <ul>
	//           <li v-for="item in nav1">
	//             <img v-bind:src="item.photo" alt="">
	//             <span>{{item.title}}</span>
	//           </li>
	//         </ul>
	//       </div>
	//       <div class="huodong">
	//         <img v-bind:src="hd.photo" alt="" />
	//       </div>
	//       <div class="huodong1">
	//         <img v-for="item in hd1 " v-bind:src="item.photo" v-bind:class="['h-img'+($index+1)]" alt="" />
	//       </div>
	//       <div class="news_box">
	//         <div class="news_product">
	//           <div class="news_title">{{nptitle.title}}</div>
	//           <div class="swiper-container" id="swiper3">
	//             <div class="swiper-wrapper">
	//               <div class="swiper-slide" v-for="item in np">
	//                 <div class="news_pro">
	//                   <img v-bind:src="item.photo" alt="" />
	//                   <ul class="news_info">
	//                     <li class="pro_title">{{item.title}}</li>
	//                     <li class="pro_desc">{{item.desc}}</li>
	//                     <li class="pro_sale"><span>￥</span><b>{{item.current_price}}</b> / <i>{{item.volume}}</i></li>
	//                   </ul>
	//                 </div>
	//               </div>
=======
	    mySwiper1 = null; // <template>
	//   <div class="m-container">
	//     <div class="swiper-container" id="swiper1" v-bind:style="swiperstyle">
	//       <div class="swiper-wrapper">
	//         <div class="swiper-slide" v-bind:style="swiperstyle" v-for="l in banner">
	//           <img v-bind:src="l.photo" alt="">
	//         </div>
	//       </div>
	//       <div class="swiper-pagination"></div>
	//     </div>
	//
	//     <div class="fastinfo">
	//       <div class="fast_left">
	//         <span>天天快报</span>
	//       </div>
	//       <div class="fast_right">
	//         <div class="swiper-container" id="swiper2">
	//           <div class="swiper-wrapper">
	//             <div class="swiper-slide" v-bind:style="swiperstyle"  v-for="fa in fastinfo">
	//               <div> {{fa.title}}</div>
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	//             </div>
	//           </div>
	//         </div>
	//       </div>
<<<<<<< HEAD
	//       <div class="buybox">
	//         <div class="buy">
	//           <div class="buy_title">{{buytitle.title}}</div>
	//           <div class="buy1">
	//             <img v-bind:src="buy1.photo" alt="" />
	//             <ul class="news_info">
	//               <li class="pro_title">{{buy1.title}}</li>
	//               <li class="pro_desc">{{buy1.desc}}</li>
	//               <li class="tag"><span>{{buy1.banner_tag}} </span></li>
	//               <li class="pro_sale"><span>￥</span><b>{{buy1.current_price}}</b> / <i>{{buy1.volume}}</i></li>
	//             </ul>
	//           </div>
	//           <div class="swiper-container" id="swiper4">
	//             <div class="swiper-wrapper">
	//               <template v-for="item in buy">
	//                 <div class="swiper-slide" v-if="$index<buy.length-1">
	//                   <div class="buy_pro">
	//                     <img v-bind:src="item.photo" alt="" />
	//                     <ul class="buy_info">
	//                       <li class="buy_title"><span>{{item.banner_tag}}</span></li>
	//                       <li class="buy_desc">{{item.title}}</li>
	//                       <li class="buy_sale"><span>￥</span><b>{{item.current_price}}</b>/<i>{{item.volume}}</i></li>
	//                     </ul>
	//                   </div>
	//                 </div>
	//               </template>
	//             </div>
	//
	//           </div>
	//         </div>
	//       </div>
	//       <div class="jingxuanbox">
	//         <div class="jingxuan">
	//           <div class="jxtitle">{{jxtitle.title}}</div>
	//           <template v-for="items in jx">
	//             <img class="jximg" v-bind:src="items[0].photo">
	//             <div class="swiper-container" id="swiper{{$index+5}}">
	//               <div class="swiper-wrapper">
	//                 <template v-for="item in items">
	//                   <div class="swiper-slide" v-if="$index>0 && $index < items.length-1">
	//                     <div class="buy_pro">
	//                       <img v-bind:src="item.photo" alt="" />
	//                       <ul class="buy_info">
	//                         <li class="buy_desc">{{item.title}}</li>
	//                         <li class="buy_sale"><span>￥</span><b>{{item.current_price}}</b>/<i>{{item.volume}}</i></li>
	//                       </ul>
	//                     </div>
	//                   </div>
	//                 </template>
	//               </div>
	//             </div>
	//           </template>
	//         </div>
	//       </div>
	//       <div class="tuijian">
	//          <div class="tjtitle">{{tjtitle.title}}</div>
	//          <template v-for="item in tj">
	//            <div class="tjgoods">
	//              <img v-bind:src="item.photo" alt="">
	//              <ul>
	//                 <li class="tjdesc">{{item.desc}}</li>
	//                 <li class="tjgoodstitle">{{item.title}}</li>
	//                 <li class="tjtag" v-if="item.banner_tag!=''"><span >{{item.banner_tag}}</span></li>
	//                 <li class="tjsale"><span>￥</span> <b>{{item.current_price}}</b> / <i>{{item.volume}}</i></li>
	//              </ul>
	//            </div>
	//          </template>
	//       </div>
	//     </div>
	//   </div>
=======
	//     </div>
	//   </div>
	//
	//
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	// </template>
	//
	//
	// <script>
	exports.default = {
	  vuex: {
	    getters: {
	      //getIndex
	      curIndex: _getters.getTabindex
	    },
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {
	      swiperstyle: {
	        height: 0
	      },
	      list: [],
	      banner: [],
	      curIndex: 0,
<<<<<<< HEAD
	      fastinfo: [],
	      nav: [],
	      nav1: [],
	      hd: {},
	      hd1: {},
	      nptitle: {},
	      np: [],
	      buytitle: {},
	      buy1: {},
	      buy: [],
	      jxtitle: {},
	      jx: [],
	      tjtitle: {},
	      tj: []
=======
	      fastinfo: []
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	    };
	  },
	  ready: function ready() {
	    this.change(0);
	    var that = this;
<<<<<<< HEAD
	    this.initScroll();
	    this.listenIscroll();
	    this.$http.get('/rest/index').then(function (res) {
	      that.banner = res.data.data.mainBanners[0].content;
	      that.fastinfo = res.data.data.mainBanners[1].content;
	      that.nav = res.data.data.mainBanners[2].content;
	      that.nav1 = res.data.data.mainBanners[3].content;
	      that.hd = res.data.data.mainBanners[4].content[0];
	      that.hd1 = res.data.data.mainBanners[5].content;
	      that.nptitle = res.data.data.mainBanners[6].content[0];
	      that.np = res.data.data.mainBanners[7].content;
	      that.buytitle = res.data.data.mainBanners[8].content[0];
	      that.buy1 = res.data.data.mainBanners[9].content[0];
	      that.buy = res.data.data.mainBanners[10].content;
	      that.jxtitle = res.data.data.mainBanners[11].content[0];
	      that.jx = [res.data.data.mainBanners[12].content, res.data.data.mainBanners[13].content, res.data.data.mainBanners[14].content, res.data.data.mainBanners[15].content, res.data.data.mainBanners[16].content, res.data.data.mainBanners[17].content];
	      that.tjtitle = res.data.data.mainBanners[22].content[0];
	      that.tj = res.data.data.mainBanners[23].content;
	      console.log(that.jx);
=======
	    this.$http.get('/rest/index').then(function (res) {
	      that.banner = res.data.data.mainBanners[0].content;
	      that.fastinfo = res.data.data.mainBanners[1].content;
	      console.log(that.fastinfo);
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	      // console.log(res.data.data[0].data.mainBanners[0].content);
	      that.$nextTick(function () {
	        _commonUtil2.default.isAllLoaded(".swiper-slide", function () {
	          that.swiperstyle.height = $($("img")[0]).height();
	          mySwiper = new Swiper("#swiper1", {
	            speed: 600,
	            autoplay: 2500,
	            loop: true,
	            pagination: ".swiper-pagination",
	            paginationClickable: true
	          });
	          mySwiper1 = new Swiper("#swiper2", {
	            speed: 600,
<<<<<<< HEAD
	            autoplay: 2500,
=======
	            // autoplay: 2500,
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	            loop: true,
	            direction: 'vertical',
	            onlyExternal: true,
	            paginationClickable: true
	          });
<<<<<<< HEAD
	          mySwiper2 = new Swiper("#swiper3", {
	            speed: 600,
	            freeMode: true,
	            resistanceRatio: 0 //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
	          });
	          // mySwiper3 = new Swiper("#swiper4", {
	          //   speed: 600,
	          //   slidesPerView: 3,
	          //   freeMode: true,
	          //   resistanceRatio: 0 //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
	          // });
	          that.initSwiper("#swiper4");
	          that.initSwiper("#swiper5");
	          that.initSwiper("#swiper6");
	          that.initSwiper("#swiper7");
	          that.initSwiper("#swiper8");
	          that.initSwiper("#swiper9");
	          that.initSwiper("#swiper10");
	        });
	      });
	      setTimeout(function () {
	        Iscroll.refresh();
	      }, 900);
	    });
	  },
	
	  computed: {
	    tagClass: function tagClass(str) {
	      console.log(str);
	    }
	  },
	  methods: {
	    listenIscroll: function listenIscroll() {
	      Iscroll.on("scroll", function () {
	        console.log(this.y);
	      });
	    },
	    initScroll: function initScroll() {
	      Iscroll = new IScroll('.m-box', {
	        click: true,
	        probeType: 3
	
	      });
	    },
	    initSwiper: function initSwiper(seleted) {
	      mySwiper3 = new Swiper(seleted, {
	        speed: 600,
	        slidesPerView: 3,
	        freeMode: true,
	        resistanceRatio: 0 //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
	      });
	      return mySwiper3;
	    }
=======
	        });
	      });
	    });
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var commonUtil = {
	    isAllLoaded: function isAllLoaded(scope, cb) {
	        var t_img; // 定时器
	        var isLoad = true; // 控制变量
	
	        // 判断图片加载状况，加载完成后回调
	        return isImgLoad(cb);
	
	        // 判断图片加载的函数
	        function isImgLoad(callback) {
	            // 查找所有图片，迭代处理
	            $(scope).find('img').each(function () {
	                // 找到为0就将isLoad设为false，并退出each
	                if (this.height === 0) {
	                    isLoad = false;
	                    return false;
	                }
	            });
	            // 为true，没有发现为0的。加载完毕
	            if (isLoad) {
	                clearTimeout(t_img); // 清除定时器
	                // 回调函数
	                callback();
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	    dirScroll: function dirScroll() {
	        var that = this;
	        // 自定义指令
	        Vue.directive('scroll', function (value) {
	            if (value) {
	                that.isAllLoaded('#index-scroll', function () {
	                    new IScroll(value);
	                });
	            }
	        });
	    }
	};
	
	exports.default = commonUtil;

/***/ },
/* 22 */
/***/ function(module, exports) {

<<<<<<< HEAD
	module.exports = "\n<div class=\"index_header\">\n  <span>上海</span>\n  <input type=\"text\" placeholder=\"金奇异果\">\n</div>\n<div class=\"m-box\">\n  <div class=\"m-container\" id=\"m-container\">\n    <div class=\"swiper-container\" id=\"swiper1\" v-bind:style=\"swiperstyle\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\" v-bind:style=\"swiperstyle\" v-for=\"l in banner\">\n          <img v-bind:src=\"l.photo\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"swiper-pagination\"></div>\n    </div>\n\n    <div class=\"fastinfo\">\n      <div class=\"fast_left\">\n        <span>天天快报</span>\n      </div>\n      <div class=\"fast_right\">\n        <div class=\"swiper-container\" id=\"swiper2\">\n          <div class=\"swiper-wrapper\">\n            <div class=\"swiper-slide\" v-for=\"fa in fastinfo\">\n              <div> {{fa.title}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"navbox\">\n      <ul>\n        <li v-for=\"item in nav\">\n          <img v-bind:src=\"item.photo\" alt=\"\">\n          <span>{{item.title}}</span>\n        </li>\n      </ul>\n      <ul>\n        <li v-for=\"item in nav1\">\n          <img v-bind:src=\"item.photo\" alt=\"\">\n          <span>{{item.title}}</span>\n        </li>\n      </ul>\n    </div>\n    <div class=\"huodong\">\n      <img v-bind:src=\"hd.photo\" alt=\"\" />\n    </div>\n    <div class=\"huodong1\">\n      <img v-for=\"item in hd1 \" v-bind:src=\"item.photo\" v-bind:class=\"['h-img'+($index+1)]\" alt=\"\" />\n    </div>\n    <div class=\"news_box\">\n      <div class=\"news_product\">\n        <div class=\"news_title\">{{nptitle.title}}</div>\n        <div class=\"swiper-container\" id=\"swiper3\">\n          <div class=\"swiper-wrapper\">\n            <div class=\"swiper-slide\" v-for=\"item in np\">\n              <div class=\"news_pro\">\n                <img v-bind:src=\"item.photo\" alt=\"\" />\n                <ul class=\"news_info\">\n                  <li class=\"pro_title\">{{item.title}}</li>\n                  <li class=\"pro_desc\">{{item.desc}}</li>\n                  <li class=\"pro_sale\"><span>￥</span><b>{{item.current_price}}</b> / <i>{{item.volume}}</i></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"buybox\">\n      <div class=\"buy\">\n        <div class=\"buy_title\">{{buytitle.title}}</div>\n        <div class=\"buy1\">\n          <img v-bind:src=\"buy1.photo\" alt=\"\" />\n          <ul class=\"news_info\">\n            <li class=\"pro_title\">{{buy1.title}}</li>\n            <li class=\"pro_desc\">{{buy1.desc}}</li>\n            <li class=\"tag\"><span>{{buy1.banner_tag}} </span></li>\n            <li class=\"pro_sale\"><span>￥</span><b>{{buy1.current_price}}</b> / <i>{{buy1.volume}}</i></li>\n          </ul>\n        </div>\n        <div class=\"swiper-container\" id=\"swiper4\">\n          <div class=\"swiper-wrapper\">\n            <template v-for=\"item in buy\">\n              <div class=\"swiper-slide\" v-if=\"$index<buy.length-1\">\n                <div class=\"buy_pro\">\n                  <img v-bind:src=\"item.photo\" alt=\"\" />\n                  <ul class=\"buy_info\">\n                    <li class=\"buy_title\"><span>{{item.banner_tag}}</span></li>\n                    <li class=\"buy_desc\">{{item.title}}</li>\n                    <li class=\"buy_sale\"><span>￥</span><b>{{item.current_price}}</b>/<i>{{item.volume}}</i></li>\n                  </ul>\n                </div>\n              </div>\n            </template>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"jingxuanbox\">\n      <div class=\"jingxuan\">\n        <div class=\"jxtitle\">{{jxtitle.title}}</div>\n        <template v-for=\"items in jx\">\n          <img class=\"jximg\" v-bind:src=\"items[0].photo\">\n          <div class=\"swiper-container\" id=\"swiper{{$index+5}}\">\n            <div class=\"swiper-wrapper\">\n              <template v-for=\"item in items\">\n                <div class=\"swiper-slide\" v-if=\"$index>0 && $index < items.length-1\">\n                  <div class=\"buy_pro\">\n                    <img v-bind:src=\"item.photo\" alt=\"\" />\n                    <ul class=\"buy_info\">\n                      <li class=\"buy_desc\">{{item.title}}</li>\n                      <li class=\"buy_sale\"><span>￥</span><b>{{item.current_price}}</b>/<i>{{item.volume}}</i></li>\n                    </ul>\n                  </div>\n                </div>\n              </template>\n            </div>\n          </div>\n        </template>\n      </div>\n    </div>\n    <div class=\"tuijian\">\n       <div class=\"tjtitle\">{{tjtitle.title}}</div>\n       <template v-for=\"item in tj\">\n         <div class=\"tjgoods\">\n           <img v-bind:src=\"item.photo\" alt=\"\">\n           <ul>\n              <li class=\"tjdesc\">{{item.desc}}</li>\n              <li class=\"tjgoodstitle\">{{item.title}}</li>\n              <li class=\"tjtag\" v-if=\"item.banner_tag!=''\"><span >{{item.banner_tag}}</span></li>\n              <li class=\"tjsale\"><span>￥</span> <b>{{item.current_price}}</b> / <i>{{item.volume}}</i></li>\n           </ul>\n         </div>\n       </template>\n    </div>\n  </div>\n</div>\n";
=======
	module.exports = "\n<div class=\"m-container\">\n  <div class=\"swiper-container\" id=\"swiper1\" v-bind:style=\"swiperstyle\">\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" v-bind:style=\"swiperstyle\" v-for=\"l in banner\">\n        <img v-bind:src=\"l.photo\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"swiper-pagination\"></div>\n  </div>\n\n  <div class=\"fastinfo\">\n    <div class=\"fast_left\">\n      <span>天天快报</span>\n    </div>\n    <div class=\"fast_right\">\n      <div class=\"swiper-container\" id=\"swiper2\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\" v-bind:style=\"swiperstyle\"  v-for=\"fa in fastinfo\">\n            <div> {{fa.title}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n";
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-63536eb9/detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n详情页...\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(26)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
<<<<<<< HEAD
	  console.warn("[vue-loader] src\\scripts\\components\\guide.vue: named exports in *.vue files are ignored.")}
=======
	  console.warn("[vue-loader] src\\scripts\\components\\list.vue: named exports in *.vue files are ignored.")}
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
<<<<<<< HEAD
	  var id = "_v-cc3bdd78/guide.vue"
=======
	  var id = "_v-a8a426f4/list.vue"
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
<<<<<<< HEAD
	  value: true
	});
	// <template>
	//   <div class="m-guide">
	//     <div class="swiper-container" id="guide-swiper">
	//       <div class="swiper-wrapper">
	//         <div class="swiper-slide" v-for="img in imgList">
	//           <img v-if="$index==3" v-link="{path: '/index'}" :src="img" />
	//           <img v-else :src="img" />
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      imgList: ["/images/guide1.jpg", "/images/guide2.jpg", "/images/guide3.jpg", "/images/guide4.jpg"]
	    };
	  },
	  ready: function ready() {
	    new Swiper('#guide-swiper');
	  }
	};
=======
	    value: true
	});
	// <template>
	//     <div class="list_contanier">
	//         <header v-on:click="hidMore()">
	//             <li v-link="{path:'/index/cate'}"><img src="/images/bar_back.png"></li>
	//             <li v-on:click="showHeaderList()">{{header}}<img src="/images/category_arrowdown.png" alt=""></li>
	//             <li><img src="/images/bar_search.png" alt=""></li>
	//             <div class="posi" v-if="isHeaderList">
	//                 <ul>
	//                     <li v-for="hea in allHeadr" v-on:click="changList($index)" v-bind:class="$index == lightHeader?'active':''">{{hea}}</li>
	//                 </ul>
	//             </div>
	//         </header>
	//         <div class="more" v-if="isMore">
	//           <div v-for="(count,cla) in allClass">
	//             <p>{{cla.title}}</p>
	//             <ul>
	//               <li v-for="item in cla.items" v-bind:class="item.sort==lightMore?'active':''" v-on:click="changeLight(item.sort)">{{item.name}}</li>
	//             </ul>
	//           </div>
	//         </div>
	//         <div class="next" v-on:click="hidHeaderList()">
	//             <section id="index-scroll">
	//                 <div class="left">
	//                     <p v-for="title in titles" v-on:click="switchLeftTitle($index,title)" v-bind:class="$index==lightIndex?'active':''">{{title}}</p>
	//                 </div>
	//             </section>
	//             <div class="right">
	//                 <div class="zuiTop">{{rightTopInner}}</div>
	//                 <div class="rightTop">
	//                       <li  v-for="classfy in classfys" v-on:click="changeLightClassfy($index)" v-bind:class="$index==lightClassfy?'active':''">
	//                           {{classfy}}
	//                       </li>
	//                     <li class="liLast" v-on:click="showMore()">更多></li>
	//                 </div>
	//                 <div class="rightNext" id="scroll" v-on:click="hidMore()">
	//                   <div>
	//                     <div class="rightContanier" v-for="title in titles">
	//                       <div class="titleBar" v-if="$index!=0">{{title}}</div>
	//                       <div class="liContanier">
	//                         <li>
	//                           <img src="">
	//                           <div class="nextRight">
	//                             <div class="nextRightTop">
	//                               <h2>新疆阿大声道</h2>
	//                               <h3>阿斯达死哦的婆家苏东坡阿萨德</h3>
	//                             </div>
	//                             <div class="nextRightBot">
	//                               <p><i>￥</i>39.90<span>12个</span></p>
	//                               <h4>+</h4>
	//                             </div>
	//                           </div>
	//                         </li>
	//                       </div>
	//                     </div>
	//                   </div>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	var classArr = [];
	var allClassArr = [];
	var allGoodArr = [];
	exports.default = {
	    data: function data() {
	        return {
	            titles: [], //左侧分类类别
	            lightIndex: 0, //左侧高亮
	            lightClassfy: 0, //右边分类高亮
	            allClass: [], //点击more后显示的所有分类信息
	            header: "", //header里面的信息
	            lightHeader: 0, //隐藏的header的高亮
	            classfys: [], //显示在右侧的分类
	            isHeaderList: false, //heade分类是否显示
	            isMore: false, //more是否显示
	            lightMore: "0", //more里面的高亮
	            rightTopInner: "推荐", //右侧上面显示的内容
	            showGoodArr: [], //右下方显示的所有商品
	            allHeadr: ["水润一秋", "喂饱冰箱", "新鲜水果", "肉类禽蛋", "蔬菜水果", "水产海鲜", "零食饮品", "速食调料"]
	        };
	    },
	    ready: function ready() {
	        var _this = this;
	
	        var that = this;
	        var id = this.$route.params.id; //获取传过来的路由携带啊信息
	        this.lightHeader = id;
	        this.header = this.$route.params.title;
	        changeLeftTitle(that, id);
	        this.$http.get('/rest/classfy').then(function (res) {
	            classArr = [];
	            _this.allClass = res.data;
	            for (var i = 0; i < res.data.length; i++) {
	                for (var j = 0; j < res.data[i].items.length; j++) {
	                    allClassArr.push(res.data[i].items[j].name);
	                }
	            }
	            for (var i = 0; i < 5; i++) {
	                classArr.push(allClassArr[i]);
	            }
	            _this.classfys = classArr;
	        });
	    },
	
	
	    methods: {
	        changList: function changList(num) {
	            var that = this;
	            this.header = this.allHeadr[num];
	            this.lightHeader = num;
	            changeLeftTitle(that, num);
	            this.isHeaderList = false;
	        },
	        showHeaderList: function showHeaderList() {
	            //是否显示headerList
	            if (this.isHeaderList == false) {
	                this.isHeaderList = true;
	            } else {
	                this.isHeaderList = false;
	            }
	        },
	        hidHeaderList: function hidHeaderList() {
	            //点击其他地方隐藏headerList
	            this.isHeaderList = false;
	        },
	        switchLeftTitle: function switchLeftTitle(num, str) {
	            //点击左侧侧边栏
	            this.lightIndex = num;
	            this.rightTopInner = str;
	        },
	        changeLightClassfy: function changeLightClassfy(num) {
	            //点击切换右侧分类
	            this.lightClassfy = num;
	        },
	        changeLight: function changeLight(strNum) {
	            //点击更多里面的分类
	            var num = parseInt(strNum);
	            this.lightMore = num;
	            if (num <= 4) {
	                this.lightClassfy = num;
	            } else {
	                classArr.splice(4, 1); //变换classArr从而改变列表页的分类
	                classArr.splice(0, 0, allClassArr[num]);
	                this.classfys = classArr;
	                this.lightClassfy = 0;
	            }
	            this.isMore = false;
	        },
	        showMore: function showMore() {
	            //显示more
	            this.isMore = true;
	            var str = this.classfys[this.lightClassfy];
	            var obj = this.allClass;
	            var flag = false;
	            for (var i = 0; i < obj.length; i++) {
	                for (var j = 0; j < obj[i].items.length; j++) {
	                    if (obj[i].items[j].name == str) {
	                        this.lightMore = obj[i].items[j].sort;
	                        flag = true;
	                        break;
	                    }
	                }
	                if (flag == true) break;
	            }
	        },
	        hidMore: function hidMore() {
	            //隐藏more
	            this.isMore = false;
	        }
	    }
	};
	
	//左侧栏目更换
	
	function changeLeftTitle(that, id) {
	    that.$http.get('/rest/list' + id).then(function (res) {
	        var arr = [];
	        for (var i = 0; i < res.data.length; i++) {
	            arr.push(res.data[i].title);
	            allGoodArr.push(res.data[i].products);
	        }
	        that.titles = arr;
	        Vue.nextTick(function () {
	            var myScroll = new IScroll('#index-scroll', {
	                probeType: 3,
	                mouseWheel: true,
	                click: true
	            });
	            var hisScroll = new IScroll('#scroll', {
	                probeType: 3,
	                mouseWheel: true,
	                click: true
	            });
	        });
	    });
	}
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599
	// </script>

	/* generated by vue-loader */

/***/ },
/* 27 */
/***/ function(module, exports) {

<<<<<<< HEAD
	module.exports = "\n<div class=\"m-guide\">\n  <div class=\"swiper-container\" id=\"guide-swiper\">\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" v-for=\"img in imgList\">\n        <img v-if=\"$index==3\" v-link=\"{path: '/index'}\" :src=\"img\" />\n        <img v-else :src=\"img\" />\n      </div>\n    </div>\n  </div>\n</div>\n";
=======
	module.exports = "\n<div class=\"list_contanier\">\n    <header v-on:click=\"hidMore()\">\n        <li v-link=\"{path:'/index/cate'}\"><img src=\"/images/bar_back.png\"></li>\n        <li v-on:click=\"showHeaderList()\">{{header}}<img src=\"/images/category_arrowdown.png\" alt=\"\"></li>\n        <li><img src=\"/images/bar_search.png\" alt=\"\"></li>\n        <div class=\"posi\" v-if=\"isHeaderList\">\n            <ul>\n                <li v-for=\"hea in allHeadr\" v-on:click=\"changList($index)\" v-bind:class=\"$index == lightHeader?'active':''\">{{hea}}</li>\n            </ul>\n        </div>\n    </header>\n    <div class=\"more\" v-if=\"isMore\">\n      <div v-for=\"(count,cla) in allClass\">\n        <p>{{cla.title}}</p>\n        <ul>\n          <li v-for=\"item in cla.items\" v-bind:class=\"item.sort==lightMore?'active':''\" v-on:click=\"changeLight(item.sort)\">{{item.name}}</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"next\" v-on:click=\"hidHeaderList()\">\n        <section id=\"index-scroll\">\n            <div class=\"left\">\n                <p v-for=\"title in titles\" v-on:click=\"switchLeftTitle($index,title)\" v-bind:class=\"$index==lightIndex?'active':''\">{{title}}</p>\n            </div>\n        </section>\n        <div class=\"right\">\n            <div class=\"zuiTop\">{{rightTopInner}}</div>\n            <div class=\"rightTop\">\n                  <li  v-for=\"classfy in classfys\" v-on:click=\"changeLightClassfy($index)\" v-bind:class=\"$index==lightClassfy?'active':''\">\n                      {{classfy}}\n                  </li>\n                <li class=\"liLast\" v-on:click=\"showMore()\">更多></li>\n            </div>\n            <div class=\"rightNext\" id=\"scroll\" v-on:click=\"hidMore()\">\n              <div>\n                <div class=\"rightContanier\" v-for=\"title in titles\">\n                  <div class=\"titleBar\" v-if=\"$index!=0\">{{title}}</div>\n                  <div class=\"liContanier\">\n                    <li>\n                      <img src=\"xxxHTMLLINKxxx0.16617417684756220.28503408120013773xxx\">\n                      <div class=\"nextRight\">\n                        <div class=\"nextRightTop\">\n                          <h2>新疆阿大声道</h2>\n                          <h3>阿斯达死哦的婆家苏东坡阿萨德</h3>\n                        </div>\n                        <div class=\"nextRightBot\">\n                          <p><i>￥</i>39.90<span>12个</span></p>\n                          <h4>+</h4>\n                        </div>\n                      </div>\n                    </li>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
>>>>>>> daa3275db43c940ddc5825f4448e29916861e599

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = {
	  tabIndex: 0
	};
	
	var mutations = {
	  CHANGETAB: function CHANGETAB(state, currentTabindex) {
	    state.tabIndex = currentTabindex;
	  }
	};
	
	exports.default = new Vuex.Store({
	  state: state,
	  mutations: mutations
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map