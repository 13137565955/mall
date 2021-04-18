<template>
  <div>
    <div class="goodscontent">
      <div class="goodsone">
         <!-- title等内容 -->
        <div class="goodstitle">
          <span>{{Goods.title}}</span>   
        </div>
        <!-- 价格的展示 -->
        <div class="goodsprice">
          <span class="newPrice">{{Goods.newPrice}}</span>
          <s class="oldPrice">{{Goods.oldPrice}}</s>
          <span class="discount">{{Goods.discount}}</span>    
        </div>  
        <div class="goodscolumns">
            <span v-for="(item,index) in Goods.columns" :key="item.columns">{{Goods.columns[index]}}</span>
        </div> 
      </div>
      <div class="goodstwo">
        <div v-for="(item,index) in Goods.services" :key="item.services">
          <img :src="Goods.services[index].icon" alt="">
          <span>{{Goods.services[index].name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailTopGoods',
  components: {},
  props:{
    Goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goodscontent{
  margin-left: 10px;
   margin-right: 10px;
   background-color: #fff;
}
.goodsone{
  margin-top: 14px;
}
.newPrice{
  font-size:30px;
  color: #ff4d94;
  margin-right: 12px;
}
.oldPrice{
  font-size: 15px;
  color: #999;
  position: absolute;
}
.discount{
  font-size: 10px;
  color: red;
  position: absolute;
  margin-top: 20px;
  background-color: #ffcccc;
  padding: 2px;
  border-radius: 5px;
}
.goodsprice{
margin-bottom: 15px;
}
.goodstitle{
  color: #404040;
  margin-bottom: 15px;
}
.goodscolumns{
  font-size: 12px;
  margin-top: 10px;
  opacity: 0.7;
  display: flex;
  justify-content: space-between;
}
.goodstwo{
  margin-top:10px;
  padding: 14px 0;
  border-top: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
}
.goodstwo img{
  width: 10px;
  height: 10px;
}
.goodstwo span{
  font-size: 5px;
}
</style>
