<template>
  <div>
    <detail-top-nav />
    <detail-swiper :TopImgSwiper="TopImgSwiper"/>
  </div>
</template>

<script>
//网络相关
import {getDetaildata} from 'network/detail'
//自组件相关
import detailSwiper from './childDetail/detailSwiperTab.vue'
import detailTopNav from './childDetail/detailTopNav.vue'
export default {
  name: 'detail',
  components: {
    getDetaildata,
    detailSwiper,
    detailTopNav,
    },
  data() {
    return {
      iid:null,
      TopImgSwiper:[],
    }
  },
  methods: {
    getDetaildata(){
       getDetaildata(this.iid).then(res =>{
        //  console.log(res.result.itemInfo.topImages);
         this.TopImgSwiper = res.result.itemInfo.topImages;
       })
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetaildata();
  },
}

</script>

<style scoped>
</style>
