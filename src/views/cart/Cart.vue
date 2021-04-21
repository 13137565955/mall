<template>
  <div>
    <nav-bar class="nav">
      <template v-slot:center><div>购物车(0)</div></template>  
    </nav-bar>
    <div v-for="item in $store.state.cartList" :key="item.iid"></div>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
export default {
  name: "Cart",
  components:{NavBar}
};
</script>

<style scoped>
.nav{
  background-color: var(--color-tint);
  color: #fff;
}
img{
  width: 100px;
  height: 100px;
}
</style>
