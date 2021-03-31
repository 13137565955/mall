<template>
  <div class="list">
    <div v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image">
      </a>
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  components: {},
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.list{
  display: flex;
  text-align: center;
  justify-content: space-around;
}
.list img{
  widows: 60px;
  height: 60px;
}
.title{
    font-size: 14px;
}
</style>
