<template>
  <div id="home">
    <nav-bar class="nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
    <home-swiper :cbanners="banners"></home-swiper>
    <list :recommends="recommends"></list>
    <midimg></midimg>
     <option-card class="tabcontrol-item" :opationcard="['流行','新款','精选']"></option-card>
    <ul>
      <li>1</li>
       <li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li>
          <li>1</li>
       <li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li>
          <li>1</li>
       <li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li>
          <li>1</li>
       <li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li><li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li>
          <li>1</li>
       <li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li>
          <li>1</li>
       <li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li><li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li>
          <li>1</li>
       <li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li>
          <li>1</li>
       <li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li>
          
    </ul>  
  </div>
</template>
<script>
//公共的
import NavBar from 'components/common/NavBar';
import OptionCard from 'components/content/TabControl/OptionCard.vue'

//子组件的
import HomeSwiper from './ChildComps/HomeSwiper.vue';
import List from "./ChildComps/List.vue"
import midimg from './ChildComps/midimg.vue'

//Axios的
import {getHomeMultidata} from 'network/home';

  export default {
    name: "Home",
    components:{
      NavBar,
      OptionCard,
      HomeSwiper,
      List,
      midimg,
    },
    data() {
      return {
        banners:[],
        recommends:[],
        opationcard:[]
      }
    },
    created(){
      getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list;   
        this.recommends = res.data.recommend.list;   
      })
    }
  }

</script>

<style scoped>
#home{
  padding-top: 44px;
}
.nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tabcontrol-item{
  position: sticky;
  top:45px;
}
</style>
