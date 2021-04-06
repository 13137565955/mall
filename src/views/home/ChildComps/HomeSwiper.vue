<template>
  <div>
    <swiper>
      <swiper-item v-for="item in cbanners" :key="item.url">
        <a :href="item.link">
          <img :src="item.image" @load="imgload">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  components: {
     Swiper, 
     SwiperItem,
  },
  data() {
    return {
      isload:true
    }
  },
  props:{
    cbanners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imgload(){
      if(this.isload){
        // console.log('---');
      this.$emit('swiperImgUpload');
      this.isload= false;
      }     
    }
    
  },
}
</script>

<style scoped>
</style>
