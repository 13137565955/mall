<template>
  <div>
    <swiper>
      <swiper-item v-for="item in cbanners" :key="item.url">
        <a :href="item.link">
          <img :src="item.image">
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
  props:{
    cbanners:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>
