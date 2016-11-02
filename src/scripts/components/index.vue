<template>
  <div>
    <div class="index-container"  transition="goto">
        <router-view></router-view>
    </div>
    <footer id="footer">
        <ul>
            <li
              v-bind:class="curIndex == $index ? 'active' : ''"
              v-on:click="changPage($index)"
              v-for="tab in tablist"
              v-link="{path: tab.path}">
                <i class="iconfont icon">{{{tab.icon}}}</i>
                <b>{{tab.name}}</b>
            </li>
        </ul>
    </footer>
  </div>
</template>

<script>
  import { tabChanger } from '../vuex/actions';
  import { getTabindex } from '../vuex/getters';

  export default {
    vuex: {
      getters: {
        //getIndex
        curIndex: getTabindex
      },
      actions: {
        change: tabChanger
      }
    },
    data() {
      return {
        tablist: [
          {path: '/index', icon: '&#xe64a;', name: '首页'},
          {path: '/index/cate', icon: '&#xe606;', name: '分类'},
          {path: '/index/discover', icon: '&#xe602;', name: '发现'},
          {path: '/index/cart', icon: '&#xe601;', name: '购物车'},
          {path: '/index/fruit', icon: '&#xe653;', name: '我的'}
        ]
      }
    },

    methods: {
      changPage(i) {
        this.change(i);
      }
    }
  }
</script>
