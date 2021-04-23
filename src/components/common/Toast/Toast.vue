<template>
  <div class="toast" v-show="isshow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  components: {},
  // props:{
  //   isshow:Boolean,
  //   message:String
  // },
  data() {
    return {
      message:'',
      isshow:false
    }
  },
  methods: {
    show(message,duration =1000){
      this.isshow = true;
      this.message = message;
      setTimeout(()=>{
            this.isshow = false;
            this.message = '';
          },duration)
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
  width: 200px;
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
