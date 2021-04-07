<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <img class="back" @click="backClick" src="~assets/img/common/back.svg">
      </template>     
      <template v-slot:center>
        <div class ="top" >
          <span v-for="(item,index) in topList" :key="item.id"
          @click="ishowclick(index)" :class="{isshow: index === currentIndex}"
          >{{item}}</span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
export default {
  name: 'detailTopNav',
  components: {NavBar},
  data() {
    return {
      topList:['商品','参数','评论','推荐'],
      currentIndex:0,
    }
  },
  methods: {
    backClick(){
      this.$router.push('/home');
    },
    ishowclick(index){
      this.currentIndex = index;
    }
  },
}
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.back{
  margin-top: 10px;
  margin-left: 10px;
}
.isshow{
  color: red;
}
</style>
