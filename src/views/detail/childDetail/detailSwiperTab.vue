<template>
  <div>
    <swiper class="topimgswiper">
      <swiper-item v-for="item in TopImgSwiper" :key="item.url">
        <a :href="item">
          <img :src="item">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'detailSwiperTab',
  components: {
     Swiper, 
     SwiperItem,
  },
  props:{
    TopImgSwiper:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {},
}
</script>

<style scoped>
.topimgswiper{
  height: 300px;
  overflow: hidden;
}

</style>
