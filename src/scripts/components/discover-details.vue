<template>
  <div class="a">
  <header id="dd-header">
    <div class="dd-u1" v-link="{'path':'/index/discover'}"><img class="u-i1" src="/images/search_back.png" alt=""></div>
    <div class="dd-u2">{{detailInfos.name}}</div>
    <div class="dd-u3"><img class="u-i1" src="/images/bar_more.png" alt=""></div>
  </header>
  <section class="dd-container">

    <div class="quyu">

      <div class="dd-title">
        {{detailInfos.title}}
      </div>
      <div class="dd-content">
        {{{detailInfos.content}}}
      </div>
      <div class="dd-img">
        <img v-bind:src="detailInfos.image1">
      </div>
      <div class="dd-content">
        {{{detailInfos.content2}}}
      </div>
      <div class="dd-img">
        <img v-bind:src="detailInfos.image2">
      </div>
      <div class="dd-img">
        <img v-bind:src="detailInfos.image3">
      </div>
      <div class="dd-content">
      {{{detailInfos.content3}}}
      </div>
      <div class="dd-img">
        <img v-bind:src="detailInfos.image1">
      </div>
      <div class="dd-img">
        <img v-bind:src="detailInfos.image4">
      </div>
      <div class="dd-content2">
        {{{detailInfos.content4}}}
      </div>
      <div class="dd-content">
      {{{detailInfos.content5}}}
      </div>
      <div class="dd-imgEnd">
        <img class="dds-end" v-bind:src="detailInfos.image5">
      </div>
      <div class="dd-end">
        {{{detailInfos.end}}}
      </div>
    </div>

  </section>
  <div class="dd-imgEnd2">
    <img class="ddss-end" v-bind:src="detailInfos.image6">
  </div>
  </div>
</template>

<style>
.a{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
  .bai{
    width: 100%;
    height: .4rem;
  }
  .dd-title{
    margin: .1rem;
    font-size: .16rem;
    font-weight: bold;
  }
  .dd-container{
    width: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .u-i1{
    width: .2rem;
    height: .2rem;
  }
  .ddss-end{
    width: 100%;
    height: .4rem;
  }
  .dd-end p{
    font-size: .14rem;
    margin-bottom: .1rem;
    color:black;
  }
    #dd-header{
      width: 100%;
      display: flex;
      background-color: white;
      height: .4rem;
      font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
      box-shadow: 3px 3px 3px #eee;
      font-size:.16rem;
      line-height: .36rem;
      justify-content: center;
      align-items: center;
      border-bottom:.01rem solid #ddd;
    }
      #dd-header .dd-u1{
        flex:1;
        padding-left:.08rem;
      }
      #dd-header .dd-u2{
        flex: 6;
        text-align: center;
        color: green;
        padding-right: .2rem;
      }
      #dd-header .d-u3{
        flex: 1;
      }
      img{
        width: 100%;
        height: 100%;
      }
      .dds-end{
        width: 100%;
        height: .12rem;
      }
    .dd-img{
      width: 100%;
      height: 2rem;
      padding: .14rem;

    }
    p{
      text-align: center;
      color: orange;
      font-size:.12rem;
      margin-top:.16rem;
    }

</style>
<script>
  var myScroll;
  export default{
    data(){
      return{
        detailInfos:{}
      }
    },
    ready(){
      let that=this;
      this.$http.get('./rest/discover_details')
      .then((res)=>{
        //this.shuju=res.data.data.baike;
      for(var i=0;i<res.data.data.baike.length;i++){
        if(res.data.data.baike[i].id==this.$route.params.id){
          var detailInfos=res.data.data.baike[i];
          console.log(res.data.data.baike[i].id);
          this.detailInfos =detailInfos;
        }
      }
      setTimeout(function(){
        var myScroll = new IScroll(".dd-container", {
          mouseWheel: true,
          scrollType:3,
          scrollX:true,
          click:true
          });
      },1000)

      });
    }
  }
</script>
