<template>
  <div id="icon">
     <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  components: {},
}
</script>
<style scoped>
#icon {
  z-index: 1;
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.15);
}
</style>
