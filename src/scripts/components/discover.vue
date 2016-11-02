<template>
  发现...
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
      this.change(2);
    }
  }
</script>
