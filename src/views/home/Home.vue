<template>
  <div id="home">
     <nav-bar class="nav">
      <template v-slot:center><div>购物街</div></template>
     </nav-bar>
    <option-card  :opationcard="['流行','新款','精选']" v-show="this.tabcontrolshow"
        @optioncard ="optioncard1" ref="tabcontrol1" class="toptabshow"
    ></option-card>
     <scroll class="content" ref="scroll" 
     :pull-up-load="true"
     @pullingUp="pullingUp" 
     :probe-type="3" 
     @controlshow='controlshow'>
        <home-swiper :cbanners="banners" @swiperImgUpload="swiperImgUpload"></home-swiper>
        <list :recommends="recommends"></list>
        <midimg></midimg>
        <option-card  :opationcard="['流行','新款','精选']"
        @optioncard ="optioncard1" ref="tabcontrol2" 
        ></option-card>
        <!-- 传值注意 goods['pop'].list-->
        <home-img :goods="showimg"/>  
     </scroll>   
     <top-img @click.native="btntopimg" v-show="isShowBackTop"/>
  </div>
</template>
<script>
//公共的
import NavBar from 'components/common/NavBar';
import OptionCard from 'components/content/TabControl/OptionCard.vue'
import HomeImg from 'components/content/HomeImg/HomeImg'
import Scroll from 'components/common/Scroll/Scroll.vue'
import TopImg from 'components/content/TopImg/TopImg.vue'

//子组件的
import HomeSwiper from './ChildComps/HomeSwiper.vue';
import List from "./ChildComps/List.vue"
import midimg from './ChildComps/midimg.vue'

//Axios的gethomeimgitem
import {getHomeMultidata,getHomeImgdata} from 'network/home';

  export default {
    name: "Home",
    components:{
      NavBar,
      OptionCard,
      HomeImg,
      Scroll,
      TopImg,
      HomeSwiper,
      List,
      midimg,
    },
    data() {
      return {
        banners:[],
        recommends:[],
        opationcard:[],
        goods:{
          'pop':{page: 0,list:[],},
          'new':{page:0,list:[],},
          'sell':{page:0,list:[],}
        },
        currentType:'pop',
        isShowBackTop: false,
        tabcontrol:0,
        tabcontrolshow: false,
        saveY:0
      }
    },
    created(){
      this.getHomeMultidata();
      this.getHomeImgdata('pop');
      this.getHomeImgdata('new');
      this.getHomeImgdata('sell');
    },
    mounted() {
      
    },
    destroyed() {
      console.log("--");
    },
    //回来
    activated() {
      //刷新一次
      this.$refs.scroll.scroll.refresh();
      this.$refs.scroll.scrollTo(0,this.saveY,1);
    },
    //出去
    deactivated() {
      this.saveY = this.$refs.scroll.getscrolly();
      // console.log(this.saveY);
    }, 
    methods: {
      /**事件监听相关方法 */
      //选项卡的吸顶
      swiperImgUpload(){
        //获取组件的offserTop要用$el来获取
        this.tabcontrol = this.$refs.tabcontrol2.$el.offsetTop;
        // console.log(this.tabcontrol);
      },
      //选项卡的切换 同时切换图片
      optioncard1(index){
        // console.log(index);
        switch(index){
            case 0:
              this.currentType = 'pop'; break;
            case 1:
              this.currentType = 'new'; break;
            case 2:
              this.currentType = 'sell'; break;
        }
        this.$refs.tabcontrol1.currentIndex = index;
        this.$refs.tabcontrol2.currentIndex = index;
       
      },
      //点击返回顶部
      btntopimg(){
          this.$refs.scroll.scrollTo(0,0);
      },
        //返回顶部是否隐藏(监听滑动来设置)
      controlshow(position){
       this.isShowBackTop = (-position.y) > 1000
      //  console.log(position);
       this.tabcontrolshow = (-position.y) > this.tabcontrol
      },
      //下拉加载更多
      pullingUp(){
        // console.log('aaaa');
        this.getHomeImgdata(this.currentType);
      },
      /* 网路请求相关 */
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list;  
        this.recommends = res.data.recommend.list;   
      })
      },
      //请求图片
      getHomeImgdata(type){
       let pages = this.goods[type].page +1;
        getHomeImgdata(type,pages).then(res=>{         
          // console.log(res.data.list);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page +=1;
          //完成上拉加载更多
          this.$refs.scroll.finishPullUp();
        })
      }
    },
    computed:{
      showimg(){
       return  this.goods[this.currentType].list
      }
    }
  }

</script>

<style scoped>
.content{
  /* height: calc(100% -93px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
#home{
  /* padding-top: 43px; */
  height: 100vh;
  position: relative;
}
.toptabshow{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}
.nav{
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */
  z-index: 9;
}
</style>
