<template>
  <div class="home-img-item">
    <img :src="goodsitem.show.img" alt="">
    <div class="home-img-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">￥{{goodsitem.price}}</span>
      <span class="sale">销量：{{goodsitem.sale}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeImgItem',
  components: {},
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }}
  }
}
</script>

<style scoped>
.home-img-item{
 position: relative;
 padding-bottom: 40px;/*给下面的文字留出显示的空间*/
 width: 48%;/*每行装两个图片*/
}
.home-img-item img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.home-img-info{
  position:absolute;
  font-size: 12px;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 5px;
  overflow: hidden;
}
.home-img-info p{
  overflow: hidden;
  white-space: nowrap;  /* 文字不换行 */
  text-overflow:ellipsis;/* 溢出显示... */
  margin-bottom: 3px;
}
.home-img-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
/* .home-img-info .sale::before {
  content: '';
  position: absolute;
  left: 75px;
  top: 16px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
} */
</style>
