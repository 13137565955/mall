<template>
  <div class="icon-item" @click="itemclick">
    <div v-if="isactive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="activestyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  components: {},
  methods: {
    itemclick(){
       this.$router.push(this.path).catch((err) => {});
    }
  },
   computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) != -1;    
    },
    activestyle() {
      return this.isactive ? { color: this.activeColor } : {};
    },
  },
  props:{
    path:String,
    activeColor: {
      tyle: String,
      default: "red",
    },
  }
}
</script>

<style scoped>
.icon-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.icon-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
