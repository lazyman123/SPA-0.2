<template>
  <div class="index_header">
    <!-- <span><img src="/images/abc_spinner_mtrl_am_alpha.9.png" alt=""></span> -->
    <span>上海<img src="/images/abc_spinner_mtrl_am_alpha.9.png" alt=""></span>
    <div class="inputbox">
      <img src="/images/search.png" alt="" />
      <input type="text" placeholder="金奇异果">
      </div>
  </div>
  <div class="m-box">
    <div class="m-container" id="m-container">
      <div class="swiper-container" id="swiper1" v-bind:style="swiperstyle">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-bind:style="swiperstyle" v-for="l in banner">
            <img v-bind:src="l.photo" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <div class="fastinfo">
        <div class="fast_left">
          <span>天天快报</span>
        </div>
        <div class="fast_right">
          <div class="swiper-container" id="swiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="fa in fastinfo">
                <div> {{fa.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="navbox">
        <ul>
          <li v-for="item in nav">
            <img v-bind:src="item.photo" alt="">
            <span>{{item.title}}</span>
          </li>
        </ul>
        <ul>
          <li v-for="item in nav1">
            <img v-bind:src="item.photo" alt="">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
      <div class="huodong">
        <img v-bind:src="hd.photo" alt="" />
      </div>
      <div class="huodong1">
        <img v-for="item in hd1 " v-bind:src="item.photo" v-bind:class="['h-img'+($index+1)]" alt="" />
      </div>
      <div class="news_box">
        <div class="news_product">
          <div class="news_title">{{nptitle.title}}</div>
          <div class="swiper-container" id="swiper3">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in np">
                <div class="news_pro">
                  <img v-bind:src="item.photo" alt="" />
                  <ul class="news_info">
                    <li class="pro_title">{{item.title}}</li>
                    <li class="pro_desc">{{item.desc}}</li>
                    <li class="pro_sale"><span>￥</span><b>{{item.current_price}}</b> / <i>{{item.volume}}</i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buybox">
        <div class="buy">
          <div class="buy_title">{{buytitle.title}}</div>
          <div class="buy1">
            <img v-bind:src="buy1.photo" alt="" />
            <ul class="news_info">
              <li class="pro_title">{{buy1.title}}</li>
              <li class="pro_desc">{{buy1.desc}}</li>
              <li class="tag"><span>{{buy1.banner_tag}} </span></li>
              <li class="pro_sale"><span>￥</span><b>{{buy1.current_price}}</b> / <i>{{buy1.volume}}</i></li>
            </ul>
          </div>
          <div class="swiper-container" id="swiper4">
            <div class="swiper-wrapper">
              <template v-for="item in buy">
                <div class="swiper-slide" v-if="$index<buy.length-1">
                  <div class="buy_pro">
                    <img v-bind:src="item.photo" alt="" />
                    <ul class="buy_info">
                      <li class="buy_title"><span>{{item.banner_tag}}</span></li>
                      <li class="buy_desc">{{item.title}}</li>
                      <li class="buy_sale"><span>￥</span><b>{{item.current_price}}</b>/<i>{{item.volume}}</i></li>
                    </ul>
                  </div>
                </div>
              </template>
            </div>

          </div>
        </div>
      </div>
      <div class="jingxuanbox">
        <div class="jingxuan">
          <div class="jxtitle">{{jxtitle.title}}</div>
          <template v-for="items in jx">
            <img class="jximg" v-bind:src="items[0].photo">
            <div class="swiper-container" id="swiper{{$index+5}}">
              <div class="swiper-wrapper">
                <template v-for="item in items">
                  <div class="swiper-slide" v-if="$index>0 && $index < items.length-1">
                    <div class="buy_pro">
                      <img v-bind:src="item.photo" alt="" />
                      <ul class="buy_info">
                        <li class="buy_desc">{{item.title}}</li>
                        <li class="buy_sale"><span>￥</span><b>{{item.current_price}}</b>/<i>{{item.volume}}</i></li>
                      </ul>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="tuijian">
         <div class="tjtitle">{{tjtitle.title}}</div>
         <template v-for="item in tj">
           <div class="tjgoods">
             <img v-bind:src="item.photo" alt="">
             <ul>
                <li class="tjdesc">{{item.desc}}</li>
                <li class="tjgoodstitle">{{item.title}}</li>
                <li class="tjtag" v-if="item.banner_tag!=''"><span >{{item.banner_tag}}</span></li>
                <li class="tjsale"><span>￥</span> <b>{{item.current_price}}</b> / <i>{{item.volume}}</i></li>
             </ul>
           </div>
         </template>
      </div>
    </div>
  </div>
</template>


<script>
  import commonUtil from "../utils/common.util.js";
  import {
    tabChanger
  } from '../vuex/actions';
  import {
    getTabindex
  } from '../vuex/getters';

  var mySwiper = null,
    mySwiper1 = null,
    mySwiper2 = null,
    mySwiper3 = null,
    Iscroll = null;

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
        swiperstyle: {
          height: 0
        },
        list: [],
        banner: [],
        curIndex: 0,
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
      }
    },
    ready() {
      this.change(0);
      var that = this;
      this.initScroll();
      this.listenIscroll();
      this.$http.get('/rest/index')
        .then((res) => {
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
          // console.log(that.jx);

          console.log(that.fastinfo);

          // console.log(res.data.data[0].data.mainBanners[0].content);
          that.$nextTick(function() {
            commonUtil.isAllLoaded(".swiper-slide", function() {
              that.swiperstyle.height = $($("#swiper1 img")[0]).height();
              mySwiper = new Swiper("#swiper1", {
                speed: 600,
                autoplay: 2500,
                loop: true,
                pagination: ".swiper-pagination",
                paginationClickable: true
              });
              mySwiper1 = new Swiper("#swiper2", {
                speed: 600,
                // autoplay: 2500,
                loop: true,
                direction: 'vertical',

                onlyExternal: true,

                onlyExternal:true,

                paginationClickable: true
              });
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
          setTimeout(function() {
            Iscroll.refresh();
          }, 1500);
        });

    },
    computed: {
      tagClass: function(str) {
        //  console.log(str);
      }
    },
    methods: {
      listenIscroll: function() {
        Iscroll.on("scroll", function() {
          //禁止啦出顶部
          if(this.y>0){
            this.scrollTo(0,0);
          }
          console.log(this.y);

        });
      },
      initScroll: function() {
        Iscroll = new IScroll('.m-box', {
          click: true,
          probeType: 3

        });
      },
      initSwiper: function(seleted) {
        mySwiper3 = new Swiper(seleted, {
          speed: 600,
          slidesPerView: 3,
          freeMode: true,
          resistanceRatio: 0 //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        });
        return mySwiper3;
      }
    }
  }
</script>
