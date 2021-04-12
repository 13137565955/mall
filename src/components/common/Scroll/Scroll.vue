<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
       <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Scroll',
  components: {},
  data() {
    return {
      scroll:null,
    }
  },
  props:{
    pullUpLoad:{
      type:Boolean,
      default(){
        return false
      }
    },
    probeType:{
      type:Number,
      default(){
        return 0
      }
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper,{
       click: true,
       observeDOM:true,
       observeImage:true,//bscroll滚动区域问题
       pullUpLoad: this.pullUpLoad,
       probeType: this.probeType
    })

    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        // console.log('加载更多函数');
        // this.scroll.refresh();
        this.$emit('pullingUp');
        // setTimeout(this.scroll.finishPullUp(),2000)  
      })
    }
    //监听滚动
    if(this.probeType ===2 || this.probeType ===3){
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('controlshow',position);
      })
    }
  },
  methods: {
    //返回顶部的位置是0，0时间是300ms
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      //刷新，可以再一次下拉滚动
      // this.scroll.refresh();
     this.scroll &&  this.scroll.finishPullUp();
    },
    getscrolly(){
      //得到滚动的高度y的值
      return this.scroll ? this.scroll.y : 0;
    }
  },
}
</script>

<style scoped>
</style>
