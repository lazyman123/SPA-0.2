import "../styles/usage/page/app.scss";


import cart from "./components/cart.vue";
import cate from "./components/cate.vue";
import discover from "./components/discover.vue";
import fruit from "./components/fruit.vue";
import index from "./components/index.vue";
import main from "./components/main.vue";
import detail from "./components/detail.vue";

import guide from "./components/guide.vue";

import list from "./components/list.vue";

// router
let router = new VueRouter();

import store from "./vuex/store";
let App = Vue.extend({
  store: store
});

router.map({
  '/': {
    component: guide
  },
  '/index': {
    component: index,
    subRoutes: {
      '/': {
        component: main
      },
      '/cate': {
        component: cate
      },
      '/discover': {
        component: discover
      },
      '/cart': {
        component: cart
      },
      '/fruit': {
        component: fruit
      }
    }
  },
  '/list/:id/:title':{
    name:'list',
    component:list
  }
  // ,
  //
  // '/detail/:id ': {
  //   name: 'detail',
  //   component: detail
  // }
});
router.start(App, 'body');
