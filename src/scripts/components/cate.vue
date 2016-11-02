<template>
  <div class="cate_contanier">
    <ul>
      <li v-for = "list in lists" v-link = "{name:'list',params:{id:$index,title:list.name}}">
        <img :src="list.photo" alt="">
      </li>
    </ul>
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
    data(){
      return {
        lists:[]
      }
    },
    ready() {
      this.change(1);
      var that = this;
      this.$http.get('/rest/cate')
      .then(
        (res) => {
          that.lists = res.data.data;
        }
      );
    }
  }
</script>
