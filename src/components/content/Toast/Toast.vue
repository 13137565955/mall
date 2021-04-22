<template>
  <div class="toast" v-show="isshow">
    <span  @click="showtoast">添加物品成功</span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  components: {},
  props:{
    isshow:Boolean
  },
  methods: {
    showtoast(){
      // this.isshow = true;
      // setTimeout(function(){
      //   this.isshow = false;
      // },1000)
    }
  },
}
</script>

<style scoped>
.toast{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 9;
  width: 150px;
  height: 40px;
   text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
}
.toast span{
  font-size: 14px;
  line-height: 40px;
  color: white;
}
</style>
