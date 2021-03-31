<template>
  <div class="HomeImg">
    <home-img-item v-for="item in goods" :key="item.id" :goodsitem="item"></home-img-item>
  </div>
</template>
<script>
import HomeImgItem from './HomeImgItem.vue'
export default {
  name: 'HomeImg',
  components: {HomeImgItem},
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.HomeImg{
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;/*不够换行*/
  justify-content: space-evenly;
  background-color: #fff;
}
</style>
