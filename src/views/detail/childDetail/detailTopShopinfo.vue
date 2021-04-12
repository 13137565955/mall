<template>
  <div class="top-shopinfo">
    <div class="shopinfo-one">
      <div class="shop-item">
        <img :src="Shop.logo" alt="">
        <span>{{Shop.name}}</span>
      </div>      
    </div>
    <div class="shopinfo-two">
      <div class="shopinfo-two-item-left">
        <span>
          <div class="item-cont">{{realVal}}万</div>
          <div class="item-title">总销量</div> 
        </span>
        <span>
          <div class="item-cont">{{Shop.goodsCount}}</div>  
          <div class="item-title">全部宝贝</div>   
        </span>        
      </div>
      <div class="shopinfo-two-item-right">
        <div v-for="item in Shop.score" :key="item.shop">
          <span>{{item.name}}</span>
          <span  class="green aa" :class="{'red': item.isBetter}">
            <span>{{item.score}}</span>
            <span class="pingjia-right">{{item.isBetter ? '高': '低'}}</span> 
          </span>        
        </div>
      </div>         
    </div>
    <div class="shopbutton">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: 'detailTopShopinfo',
  components: {},
  data() {
    return {
      realVal:0,
    }
  },
  methods: {
    // 截取当前数据到小数点后1位
    sellsFilter() {
      // console.log(this.realVal);
      if(this.Shop.sells > 10000){
        const res = this.Shop.sells / 10000;
        const realVal = parseFloat(res).toFixed(1);
        this.realVal =realVal;
      }
       this.pingjia = this.Shop.score.isBetter;
    },
  },
  updated() {
    this.sellsFilter();
  },
  props:{
    Shop:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.top-shopinfo{
    border-top: 6px solid #f2f2f2;
    border-bottom: 6px solid #f2f2f2;
}
.shopinfo-one{
  margin-top: 20px;
}
.shopinfo-one img{
  width: 15%;
  border-radius: 50%;
}
.shop-item{
  position: relative;
}
.shop-item span{
  position: absolute;
  top: 30%;
  margin-left: 10px;
}
.shopinfo-two{
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}
.shopinfo-two-item-left{
  display: flex;
  padding-right: 10px;
  border-right: 2px solid #f2f2f2;
  justify-content: space-between;
}
.shopinfo-two-item-left span{
  margin-left: 15px;
}
.shopinfo-two-item-left div{
  text-align: center;
}
.item-cont{
  font-size: 20px;
  color: black;
  margin-bottom: 5px;
}
.item-title{
  font-size: 10px;
}
.green{
  color: green;
}
.red{
  color: red;
}
.aa{
  margin-left: 10px;
  font-size: 14px;
}
.shopinfo-two-item-right{
  font-size: 15px;
}
.pingjia-right{
  margin-left: 10px;
  float: right;
}
.shopbutton{
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    margin-left: 25%;
    margin-bottom: 15px;
}
</style>
