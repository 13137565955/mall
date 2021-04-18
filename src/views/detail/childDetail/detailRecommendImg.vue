<template>
  <div>
    <div class="a">
      <div class="hotrecommend"> 
      热门推荐
    </div>
    </div>   
    <home-img :goods="detailRecommendImg"/>
  </div>
</template>

<script>
import HomeImg from 'components/content/HomeImg/HomeImg'
export default {
  name: 'detailRecommendImg',
  props:{
    detailRecommendImg:{
      type:Array
    }
  },
  components: {
      HomeImg,
  },
}
</script>

<style scoped>
.a{
  margin-top: 10px;
  border-top: 5px solid #f2f5f8;
}
.hotrecommend{
  margin: 15px 0 15px 10px;
  
}
</style>
