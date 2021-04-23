<template>
  <div class="bottom-menu">
    <check-button class="select-all" @click.native="checkBtnClick"
    v-model="isSelectAll"></check-button>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click="calcClick">去计算({{totalproduce}})</span>
  </div>
</template>

<script>
  import checkButton from './checkButton'

	export default {
		name: "bottomBar",
    components: {
		  checkButton
    },
    computed: {
		  totalPrice() {
        const cartList = this.$store.state.cartList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      totalproduce(){
        const a = this.$store.state.cartList;
        return a.filter(item =>{
          return item.checked
        }).reduce((preValue, item)=>{
          return preValue + item.count
        },0)
      },
      isSelectAll() {
        return !this.$store.state.cartList.find(item => item.checked === false);
      }
    },
    methods: {
      checkBtnClick() {
        // 1.判断是否有未选中的按钮
        let isSelectAll = this.$store.state.cartList.find(item => !item.checked);

        // 2.有未选中的内容, 则全部选中
        if (isSelectAll) {
          this.$store.state.cartList.forEach(item => {
            item.checked = true;
          });
        } else {
          this.$store.state.cartList.forEach(item => {
            item.checked = false;
          });
        }
      },
      calcClick(){
          if(this.totalproduce <=0){
            this.$toast.show('请添加商品!!!');
          }else{
            const res = '支付成功：' +this.totalPrice+'元'
             this.$toast.show(res);
          }
      }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: absolute;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;

  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
