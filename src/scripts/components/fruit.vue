<template>
  <div>我的果园</div>
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
    data(){
      return {}
    },
    ready() {
      this.change(4);
    }
  }
</script>
