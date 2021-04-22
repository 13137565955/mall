<template>
  <div id="car">
    <nav-bar class="nav">
      <template v-slot:center><div>购物车({{topcartcount}})</div></template>  
    </nav-bar>
      <scroll class="content">
        <cart-list1 :cartList="cartList"/>
       </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll/Scroll.vue'

import NavBar from 'components/common/NavBar'
import bottomBar from './childCart/bottomBar.vue'
import cartList1 from './childCart/cartList1.vue'

export default {
  name: "Cart",
  components:{Scroll,NavBar,bottomBar,cartList1},
  computed:{
    topcartcount(){
      return this.$store.state.cartList.length;
    },
    cartList(){
      return this.$store.state.cartList
    }
  },
};
</script>

<style scoped>
.nav{
  background-color: var(--color-tint);
  color: #fff;
}

.content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 93px;
    left: 0px;
    right: 0px;
}
</style>
