<template>
  <div>
   <nav-bar class="nav">
    <template v-slot:center><div>购物车(0)</div></template>
  </nav-bar>
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
</style>
