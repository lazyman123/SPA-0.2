<template>
    <div class="list_contanier">
        <p class="iconfont">&#xe60a; <span>{{cartNum}}</span></p>
        <header v-on:click="hidMore()">
            <li v-link="{path:'/index/cate'}"><img src="/images/bar_back.png"></li>
            <li v-on:click="showHeaderList()">{{header}}<img src="/images/category_arrowdown.png" alt=""></li>
            <li><img src="/images/bar_search.png" alt=""></li>
            <div class="posi" v-if="isHeaderList">
                <ul>
                    <li v-for="hea in allHeadr" v-on:click="changList($index)" v-bind:class="$index == lightHeader?'active':''">{{hea}}</li>
                </ul>
            </div>
        </header>
        <div class="more" v-if="isMore">
            <div v-for="(count,cla) in allClass">
                <p>{{cla.title}}</p>
                <ul>
                    <li v-for="item in cla.items" v-bind:class="item.sort==lightMore?'active':''" v-on:click="changeLight(item.sort,item.name)">{{item.name}}</li>
                </ul>
            </div>
        </div>
        <div class="next" v-on:click="hidHeaderList()">
            <section id="index-scroll">
                <div class="left">
                    <p v-for="title in titles" v-on:click="switchLeftTitle($index,title)" v-bind:class="$index==lightIndex?'active':''">{{title}}</p>
                </div>
            </section>
            <div class="right">
                <div class="zuiTop">{{rightTopInner}}</div>
                <div class="rightTop">
                    <li v-for="classfy in classfys" v-on:click="changeLightClassfy($index,classfy)" v-bind:class="$index==lightClassfy?'active':''">
                        {{classfy}}
                    </li>
                    <li class="liLast" v-on:click="showMore()">更多></li>
                </div>
                <div class="rightNext" id="scroll" v-on:click="hidMore()">
                    <div>
                        <div class="rightContanier" v-for="title in titles" :id="title">
                            <div class="titleBar" v-if="$index!=0">{{title}}</div>
                            <div class="liContanier">
                                <li v-for="(num,good) in showGoodArr[$index]">
                                    <img :src="good.photo">
                                    <div class="nextRight">
                                        <div class="nextRightTop">
                                            <h2>{{good.product_name}}</h2>
                                            <h3>{{good.product_desc}}</h3>
                                        </div>
                                        <div class="nextRightBot">
                                            <p><i>￥</i>{{good.price}}<span>{{good.volume}}</span></p>
                                            <h4 v-on:click="addCart(good)">+</h4>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cookieUtil from "../utils/cookieUtil";
    var classArr = [];
    var allClassArr = [];
    var allGoodArr = [];
    var jiluNum;
    var hisScroll=null;
    var myScroll=null;
    var countArr=[];
    export default {
        data() {
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
                    cartNum:"0",    //加入购物车商品数目
                    allHeadr: ["水润一秋", "喂饱冰箱", "新鲜水果", "肉类禽蛋", "蔬菜水果", "水产海鲜", "零食饮品", "速食调料"]
                }
            },

            ready() {
              //购物车中数目
              this.cartNum = getCookieNumber();

                var that = this;
                var id = this.$route.params.id; //获取传过来的路由携带啊信息
                this.lightHeader = id;
                this.header = this.$route.params.title;
                changeLeftTitle(that, id);
                this.$http.get('/rest/classfy')
                    .then(
                        (res) => {
                            classArr = [];
                            this.allClass = res.data;
                            for (var i = 0; i < res.data.length; i++) {
                                for (var j = 0; j < res.data[i].items.length; j++) {
                                    allClassArr.push(res.data[i].items[j].name);
                                }
                            }
                            for (var i = 0; i < 5; i++) {
                                classArr.push(allClassArr[i]);
                            }
                            this.classfys = classArr;
                        }
                    );
            },

            methods: {
                changList(num) {    //点击隐藏的header的分类
                    var that = this;
                    this.header = this.allHeadr[num];
                    this.lightHeader = num;
                    changeLeftTitle(that, num);
                    this.isHeaderList = false;
                    this.lightIndex=0;
                },
                showHeaderList() { //是否显示headerList
                    if (this.isHeaderList == false) {
                        this.isHeaderList = true;
                    } else {
                        this.isHeaderList = false;
                    }
                },
                hidHeaderList() { //点击其他地方隐藏headerList
                    this.isHeaderList = false;
                },
                switchLeftTitle(num, str) { //点击左侧侧边栏
                    this.lightIndex = num;
                    this.rightTopInner = str
                    hisScroll.scrollToElement('#'+str,500);
                },
                changeLightClassfy(num, str) { //点击切换右侧分类
                    this.lightClassfy = num;
                    this.showGoodArr = fillterGood(str);
                },
                changeLight(strNum, str) { //点击更多里面的分类
                    this.showGoodArr = fillterGood(str);
                    var num = parseInt(strNum);
                    if (jiluNum != num) {
                        jiluNum = num;
                        this.lightMore = num;
                        var flag = false;
                        for (var i = 0; i < this.classfys.length; i++) {
                            if (this.classfys[i] == str) {    //判断页面里是否有点击的分类
                                flag = true;
                                this.lightClassfy = i;
                            }
                        }
                        if (flag == false) {
                            classArr.splice(4, 1); //变换classArr从而改变列表页的分类
                            classArr.splice(0, 0, allClassArr[num]);
                            this.classfys = classArr;
                            this.lightClassfy = 0;
                        }
                    }
                    this.isMore = false;
                },
                showMore() { //显示more
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
                hidMore() { //隐藏more
                    this.isMore = false;
                },
                addCart(obj1){
                  var arr=[];
                  var allCount=0;
                  var str = cookieUtil.getCookie('cart');
                  if(str == 'undefined' || str == ''){
                    obj1.count = 1;
                    var cartNum = parseInt(this.cartNum);
                    arr.push(obj1);
                    allCount=1;
                  }else {
                    var flag = false;
                    var arr1=JSON.parse(str);
                    for(var i=0;i<arr1.length;i++){
                      if(arr1[i].product_name == obj1.product_name){
                        arr1[i].count=parseInt(arr1[i].count)+1;
                        flag = true;
                      }
                      allCount+=parseInt(arr1[i].count);
                    }
                    if(flag == false){
                      obj1.count=1;
                      arr1.push(obj1);
                      allCount+=1;
                    }
                    arr = arr1;
                  }
                  this.cartNum = allCount;
                  console.log(arr);
                  cookieUtil.setcookie('cart',arr);
                }
            }
    }

    //左侧栏目更换和所有商品
    function changeLeftTitle(that, id) {
        allGoodArr = [];
        that.$http.get('/rest/list' + id)
            .then(
                (res) => {
                    var arr = [];
                    for (var i = 0; i < res.data.length; i++) {
                        arr.push(res.data[i].title);
                        allGoodArr.push(res.data[i].products);
                    }
                    //筛选出销量Top的所有商品
                    var goodArr = fillterGood('销量Top');
                    that.showGoodArr = goodArr;

                    that.titles = arr;
                    Vue.nextTick(function() {
                        myScroll = new IScroll('#index-scroll', {
                            probeType: 3,
                            mouseWheel: true,
                            click: true
                        });
                        hisScroll = new IScroll('#scroll', {
                            probeType: 3,
                            mouseWheel: true,
                            click: true
                        });
                        hisScroll.on('scroll',function(){   //滚动商品触发事件
                          var y=this.y;
                          var screenW = window.screen.width;
                          var goodH = 1.1*31.25*screenW/100;
                          var headerH=0.2*31.25*screenW/100;
                          for(var i=0;i<countArr.length;i++){
                            var preH=0;
                            var lastH=countArr[0]*goodH;
                            if(i>0){
                              for(var j=1;j<=i;j++){
                                //   if(j==0){
                                //     preH+=countArr[0]*goodH;
                                //     lastH=preH+headerH+countArr[1]*goodH;
                                // }else {
                                //
                                // }
                                preH+=countArr[j-1]*goodH+headerH;
                                lastH+=headerH+countArr[j]*goodH;
                              }
                          }
                            if(y>-lastH && y<-preH){
                              that.lightIndex = i;
                              that.rightTopInner = that.titles[i];
                              break;
                            }
                          }
                        });
                    });
                }
            )
    }

    //筛选商品
    function fillterGood(str) {
        countArr=[]
        var arr = [];
        for (var i = 0; i < allGoodArr.length; i++) {
            var arr1 = [];
            for (var j = 0; j < allGoodArr[i].length; j++) {
                if (allGoodArr[i][j].labels) {
                    for (var k = 0; k < allGoodArr[i][j].labels.length; k++) {
                        if (allGoodArr[i][j].labels[k].name == str) {
                            var obj = {
                                "photo": allGoodArr[i][j].photo,
                                "product_name": allGoodArr[i][j].product_name,
                                "price": allGoodArr[i][j].items[0].price,
                                "product_desc": allGoodArr[i][j].product_desc,
                                "volume": allGoodArr[i][j].items[0].volume
                            }
                            arr1.push(obj);
                            break;
                        }
                    }
                } else {
                    var obj = {
                        "photo": allGoodArr[i][j].photo,
                        "product_name": allGoodArr[i][j].product_name,
                        "price": allGoodArr[i][j].items[0].price,
                        "product_desc": allGoodArr[i][j].product_desc,
                        "volume": allGoodArr[i][j].items[0].volume
                    }
                    arr1.push(obj);
                }
            }
            countArr.push(arr1.length);
            arr.push(arr1);
        }
        return arr;
    }

    //拿cookie
    function getCookieNumber(){
      var allCount= 0;
      var str=cookieUtil.getCookie('cart');
      if(str == 'undefined' || str == ''){
        return 0;
      }else {
        var arr=JSON.parse(str);
        for(var i = 0;i < arr.length;i++){
          allCount+=parseInt(arr[i].count);
        }
        return allCount;
      }
    }
</script>
