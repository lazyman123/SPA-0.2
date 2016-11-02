<template>
  <div class="cart-box">
    <div class="goods_header">
      <span class="goods_title">购物车</span>
      <div class="goods_edit" v-on:click="Edit">{{edit}}</div>
    </div>
    <div class="nogoodsbox" v-if="!havegoods">
      <div class="nogoods">
        <div class="title">您的购物车还是空的!</div>
        <div class="yous">有种淡淡的忧伤</div>
        <div class="go_index" v-link="{path:'/index'}">去首页逛逛</div>
      </div>
    </div>
    <div class="goodsbox" v-if="havegoods">
      <div class="boxheader">
        <span class="goodsqingdan">商品清单</span>
        <span class="blank"></span>
        <span class="goods_weight">总重约为0.60kg</span>
      </div>
      <div class="goodscontent">
        <template v-for="item in Productarr">
          <div v-bind:class="[$index==(Productarr.length-1)?'':'notlast']" class="goods_info">
            <!-- icon-iconweixuanzhonganniu -->
            <!-- icon-selected -->
            <div class="goods1 iconfont" v-bind:class="[select[$index]?'selected':'noselect']"><span v-on:click="isSelect($index)" v-bind:class="[select[$index]?'icon-selected':'icon-iconweixuanzhonganniu']"></span> </div>
            <div class="goods_detail">
              <img v-bind:src="item.photo" alt="">
              <ul>
                <li class="goods_name">{{item.product_name}}</li>
                <li class="goods_volume">{{item.volume}}</li>
                <li class="goods_sale"><span>￥</span><i>{{item.price.substring(-1,item.price.length-3)}}</i><b>{{item.price.substring(item.price.length-3)}}</b></li>
              </ul>
            </div>
            <div class="goods_countbox">
              <div class="goods_volume1">{{item.volume}}</div>
              <div class="goods_count"><span class="goods_sub" v-on:click="subCount($index)"><i>-</i></span><span id="goods_count">{{item.count}}</span><span class="goods_add" v-on:click="addCount($index)"><i>+</i></span></div>
            </div>
          </div>

        </template>
      </div>
      <div class="pay">
        <div v-bind:class="['selectall','iconfont',allselect ? 'selected' : 'noselect']"><span v-bind:class="[allselect?'icon-selected':'icon-iconweixuanzhonganniu']"></span><span class="goodsnocolor">全选</span> </div>
        <div class="total">
          <span class="delcart" v-if="edit=='完成'" v-on:click="delCookie">清空购物车</span>
          <span v-else><span>￥</span><b>0.00</b></span>
        </div>
        <div v-on:click="del" class="paybutton" v-bind:class="[totalCount>0?'havegoodsselect':'']">
          {{operate}}
          <span v-if="totalCount>0">({{totalCount}})</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import cookieUtil from "../utils/cookieUtil.js";
  import {
    tabChanger
  } from '../vuex/actions';
  import {
    getTabindex
  } from '../vuex/getters';

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
        havegoods: false,
        allselect: false,
        select: [],
        Productarr: [],
        totalCount: 0,
        edit: "编辑",
        operate:"结算"
      }
    },
    ready() {
      this.change(3);

      this.initData();
      this.$watch("Productarr",function (val) {
        console.log(val);
         if(val.length==0){
           this.havegoods = false;
         }else {
           this.havegoodsselect = true;
         }
      })
    },
    methods: {
      setcookie(name, Productarr) {
        var cookie = cookieUtil.getCookie("cart");
        var str = JSON.stringify(Productarr);
        cookieUtil.setcookie("cart", str, 30);
      },
      isSelect(index) {
        var arr = this.select;
        var total = 0;
        // console.log(index);
        if (this.select[index] == true) {
          arr[index] = false;
          arr = [].concat(arr);
          this.select = arr;
        } else {
          this.select[index] = true;
          arr = [].concat(arr);
          this.select = arr;
          // console.log(this.select);
        }
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == true) {
            total += this.Productarr[i].count;
          }
        }
        this.totalCount = total;
      },
      initSelect(arr) {
        var select = [];
        for (var i = 0; i < arr.length; i++) {
          select[i] = false;
        }
        if(arr.length>0){
        this.select = select;
        }
      },
      Edit() {
        if (this.edit == "编辑") {
          this.edit = "完成";
          this.operate = "删除"
        }else if(this.edit=="完成"){
          this.edit = "编辑";
          this.operate = "结算"
        }
      },
      del(){
        if(this.operate=="删除"){
            var arr = this.select;
            var flag = false;
            console.log(arr);
            var arr1= this.Productarr;
            for (var i = 0; i < arr1.length; i++) {
              if (arr[i] == true) {
                 arr1.splice(i,1);
                 arr.splice(i,1);
                 console.log(arr[i]);
                 if(arr1.length>0){
                   i--;
                 }
                 flag=true;
              }
            }
            if(flag){
              this.initSelect(arr1);
              console.log(arr1);
              this.Productarr = [].concat(arr1);
              cookieUtil.setcookie("cart",this.Productarr);
            }
        }
      },
      subCount(index){
         var arr = this.Productarr;
         if(arr[index].count>1){
           arr[index].count--;
           this.Productarr = [].concat(arr);
            cookieUtil.setcookie("cart",this.Productarr);
         }
      },
      addCount(index){
        var arr = this.Productarr;
        arr[index].count++;
        this.Productarr = [].concat(arr);
          cookieUtil.setcookie("cart",this.Productarr);
      },
      delCookie(){
        cookieUtil.removeCookie("cart");
        this.initData();
      },
      initData(){
        var cookie = cookieUtil.getCookie("cart");
        var productarr = [];
        if(cookie.length>0 && cookie!="undefined"){
           productarr = JSON.parse(cookie);
        }
        this.Productarr = productarr;
        this.initSelect(productarr);
        if(this.Productarr.length>0){
          this.havegoods=true;
        }
      }
    }

  }
</script>
