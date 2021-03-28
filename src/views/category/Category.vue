<template>
  <nav-bar class="nav">
    <template v-slot:center><div>分类</div></template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/NavBar'
  export default {
    name: "Category",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
.nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
