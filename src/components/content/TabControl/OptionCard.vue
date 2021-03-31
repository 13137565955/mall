<template>
  <div class="back"> 
    <div class="card">
      <div class="card-item" v-for="(item,index) in opationcard" 
      :key="item" @click="itemclick(index)" :class="{active: index === currentIndex}">
        <span>{{item}}</span>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionCard',
  components: {},
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemclick(index){
      this.currentIndex = index;
      this.$emit('optioncard',index);
      // console.log(index);
    }
  },
  props:{
    opationcard:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.back{
  padding: 6px;
  background-color: white;
}
.card {
  display: flex;
  justify-content: space-around;
}
.card-item{
  text-align: center;
}
.active{
  color: red;
}
.active span{
 padding: 5px;
 border-bottom: red 3px solid;
}
</style>
