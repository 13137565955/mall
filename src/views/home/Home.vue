<template>
  <div id="home">
    <nav-bar class="nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
    <home-swiper :cbanners="banners"></home-swiper>
    <list :recommends="recommends"></list>
    <midimg></midimg>
    <option-card class="tabcontrol-item" :opationcard="['流行','新款','精选']"
    @optioncard ="optioncard1"
    ></option-card>
    <!-- 传值注意 goods['pop'].list-->
    <home-img :goods="showimg"/>
  </div>
</template>
<script>
//公共的
import NavBar from 'components/common/NavBar';
import OptionCard from 'components/content/TabControl/OptionCard.vue'
import HomeImg from 'components/content/HomeImg/HomeImg'

//子组件的
import HomeSwiper from './ChildComps/HomeSwiper.vue';
import List from "./ChildComps/List.vue"
import midimg from './ChildComps/midimg.vue'

//Axios的
import {getHomeMultidata,getHomeImgdata} from 'network/home';

  export default {
    name: "Home",
    components:{
      NavBar,
      OptionCard,
      HomeImg,
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
        currentType:'pop'
      }
    },
    created(){
      this.getHomeMultidata();
      this.getHomeImgdata('pop');
      this.getHomeImgdata('new');
      this.getHomeImgdata('sell');
    },
    methods: {
      /**事件监听相关方法 */
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
      },
      /* 网路请求相关 */
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list;  
        this.recommends = res.data.recommend.list;   
      })
      },
      getHomeImgdata(type){
       let pages = this.goods[type].page +1;
        getHomeImgdata(type,pages).then(res=>{         
          // console.log(res.data.list);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page +=1;
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
#home{
  padding-top: 43px;
}
.nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tabcontrol-item{
  position: sticky;
  top:43px;
  z-index: 1;
}
</style>
