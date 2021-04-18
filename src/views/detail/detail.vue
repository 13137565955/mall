<template>
    <div id="detali">
      <detail-top-nav @itemClick="itemClick" ref="topnav"/>
      <Scroll class="content" ref="scroll" 
     :probe-type="3" 
     @controlshow='controlshow'>    
        <detail-swiper :TopImgSwiper="TopImgSwiper"/>
        <detail-top-goods :Goods="Goods"/>
        <detail-top-shopinfo :Shop="Shop"/>
        <sku-info-img :detailInfo="skuInfoImg"/>
        <!-- 参数 -->
        <detail-goods-param :GoodsParam="GoodsParam" ref="param"/>
        <!-- 评论 -->
        <detailpingjia :detailpingjia="detailpingjia" ref="comment"/>
        <detail-recommend-img :detailRecommendImg="recommend" ref="recommend"/>
      </Scroll> 
      <detail-bottom />
      <top-img class="weizhi" @click.native="btntopimg" v-show="isShowBackTop"/>   
    </div>  
</template>

<script>
//网络相关
import {getDetaildata,Goods,Shop,GoodsParam,detailRecommend} from 'network/detail'
//子组件相关
import detailSwiper from './childDetail/detailSwiperTab.vue'
import detailTopNav from './childDetail/detailTopNav.vue'
import detailTopGoods from './childDetail/detailTopGoods.vue'
import detailTopShopinfo from './childDetail/detailTopShopinfo.vue'
import skuInfoImg from './childDetail/skuInfoImg.vue'
import detailGoodsParam from './childDetail/detailGoodsParam.vue'
import detailpingjia from './childDetail/detailpingjia.vue'
import detailRecommendImg from './childDetail/detailRecommendImg.vue'
import detailBottom from './childDetail/detailBottom.vue'
//公共组件
import Scroll from 'components/common/Scroll/Scroll.vue'
import TopImg from 'components/content/TopImg/TopImg.vue'

export default {
  name: 'detail',
  components: {
    detailSwiper,
    detailTopNav,
    detailTopGoods,
    detailTopShopinfo,
    skuInfoImg,
    detailGoodsParam,
    detailpingjia,
    detailRecommendImg,
    detailBottom,
    Scroll,
    TopImg,
    },
  data() {
    return {
      iid:null,
      TopImgSwiper:[],
      Goods:{},
      Shop:{},
      skuInfoImg:{},
      GoodsParam:{},
      detailpingjia:{},
      isShowBackTop: false,
      recommend:[],
      itemjump:[],
      currentIndex:0,
    }
  },
  methods: {
    //点击导航中的选项返回固定位置
    itemClick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.itemjump[index],300)
    },
    controlshow(position){
      const pos = -position.y;
      //显示返回顶部图片
      this.isShowBackTop = pos > 1000
      //移动位置导航每个项变红
      for(let i=0;i<this.itemjump.length;i++){
        if(this.currentIndex != i &&((i < this.itemjump.length-1 && pos >= this.itemjump[i] && pos<this.itemjump[i+1])||(i === this.itemjump.length-1 && pos>this.itemjump[i]))){
          // console.log(i);
          this.currentIndex = i;
          this.$refs.topnav.currentIndex = this.currentIndex;
       }
      }
       
      },
    //点击返回顶部
    btntopimg(){
          this.$refs.scroll.scrollTo(0,0);
          // this.isShowBackTop = (-position.y) > 1000
      },
    getDetaildata(){
       //保存传入的id
        this.iid = this.$route.params.iid;
        //请求数据
        getDetaildata(this.iid).then(res =>{
        // console.log(res.result);
        //获取图片的轮播效果
        this.TopImgSwiper = res.result.itemInfo.topImages;
        //获取标题价格等描述
        this.Goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
        // console.log(this.Goods.title);
        //获取商铺信息
        this.Shop = new Shop(res.result.shopInfo);
        //获取商品展示的图片
        this.skuInfoImg = res.result.detailInfo;
        // console.log(this.skuInfoImg);
        //获取尺码和衣服详情
        this.GoodsParam = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
        // console.log(this.GoodsParam);
        //用户评价
        this.detailpingjia = res.result.rate;
       })
    },
    //推荐商品的数据获取
    detailRecommend(){
      detailRecommend().then(res =>{
        this.recommend = res.data.list;
        //  console.log(this.recommend);
      })
    }
  },
  created() {
      //根据id调用函数请求详细数据
      this.getDetaildata();
      //推荐商品数据
      this.detailRecommend();
    },
  updated() {
      this.itemjump = [];
      //把导航四个位置传入到数组中去
      this.itemjump.push(this.$refs.topnav.$el.offsetTop);
        this.itemjump.push(this.$refs.param.$el.offsetTop);
      this.itemjump.push(this.$refs.comment.$el.offsetTop);
      this.itemjump.push(this.$refs.recommend.$el.offsetTop);   
      // console.log(this.itemjump[1]);
  },
}

</script>

<style scoped>
#detali{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 53px);
}
/* .weizhi{
  position: fixed;
  bottom: 5px;
  right: 20px;
} */
</style>
