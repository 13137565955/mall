<template>
  <div>
    <detail-top-nav/>
    <Scroll class="content">    
      <detail-swiper :TopImgSwiper="TopImgSwiper"/>
      <detail-top-goods :Goods="Goods"/>
       <detail-top-shopinfo :Shop="Shop"/>
    </Scroll>   
  </div>
</template>

<script>
//网络相关
import {getDetaildata,Goods,Shop} from 'network/detail'
//子组件相关
import detailSwiper from './childDetail/detailSwiperTab.vue'
import detailTopNav from './childDetail/detailTopNav.vue'
import detailTopGoods from './childDetail/detailTopGoods.vue'
import detailTopShopinfo from './childDetail/detailTopShopinfo.vue'
//公共组件
import Scroll from 'components/common/Scroll/Scroll.vue'
export default {
  name: 'detail',
  components: {
    detailSwiper,
    detailTopNav,
    detailTopGoods,
    detailTopShopinfo,
    Scroll,
    },
  data() {
    return {
      iid:null,
      TopImgSwiper:[],
      Goods:{},
      Shop:{},
    }
  },
  methods: {
    getDetaildata(){
       //保存传入的id
        this.iid = this.$route.params.iid;
       getDetaildata(this.iid).then(res =>{
        console.log(res.result);
        //获取图片的轮播效果
        this.TopImgSwiper = res.result.itemInfo.topImages;
        //获取标题价格等描述
        this.Goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
        // console.log(this.Goods.title);
        //获取商铺信息
        this.Shop = new Shop(res.result.shopInfo);
       })
    }
  },
  created() {
   
    //根据id调用函数请求详细数据
    this.getDetaildata();
  },
}

</script>

<style scoped>
.content{
  position: absolute;
  top: 44px;
  bottom: 60px;
}
</style>
