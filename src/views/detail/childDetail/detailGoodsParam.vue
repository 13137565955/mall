<template>
  <div v-if="Object.keys(GoodsParam).length!=0" class="detail-goods-params">
      <tr v-for="item in GoodsParam.sizes[0]" :key="item.id" class="goods-list">
        <td v-for="i in item" :key="i.id" class="goods-list-item">{{i}}</td>
      </tr>
       <tr v-for="item2 in GoodsParam.infos" :key="item2.id" class="goods-list">
        <td class="goods-list-item">{{item2.key}}</td>
        <td class="goods-list-item2">{{item2.value}}</td>
      </tr>
      <div v-show="GoodsParam.image" class="isimg"><img :src="GoodsParam.image" alt=""></div>
      
  </div>
</template>

<script>
export default {
  name: 'detailGoodsParam',
  components: {},
  props:{
    GoodsParam:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-goods-params{
  background-color: #fff;
  padding-top: 5px;
}
.goods-list{
  display: flex;
  margin-top: 20px;
  margin-left: 15px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f2f5f8;
  font-size: 14px;
  line-height: 14px;
  align-items: center;
}

.goods-list-item{ 
  flex: 1;
}

.goods-list-item2{
  flex: 2;
  color: #ff3b89;
}
.isimg img{
  width: 80%;
  margin: 5% 10%;
  /* height: 30px; */
}
.isimg {
  border-bottom: 5px solid #f2f5f8;
}
</style>
