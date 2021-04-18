<template>
  <div v-if="Object.keys(detailpingjia).length!=0" class="commen">
      <div class="pingjia">
        <div>用户评价</div>
        <div>更多 ></div>
      </div>
      <div>
      <div class="img">
          <img :src="detailpingjia.list[0].user.avatar" alt="">
          <span>{{detailpingjia.list[0].user.uname}}</span>
          </div>
      </div>
      <div class="pinglun">
        <div>{{detailpingjia.list[0].content}}</div>
          <div class="pl-item">
            <span>{{detailpingjia.list[0].created | showDate}}</span>
            <span>{{detailpingjia.list[0].style}}</span>
          </div>
      </div>
      <div class="info-imgs">
          <img :src="item" v-for="item in detailpingjia.list[0].images" :key="item">
        </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";
export default {
  name: 'detailpingjia',
  components: {},
  props:{
    detailpingjia:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters: {
		  showDate: function (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd  ')
      }
    }
}
</script>

<style scoped>
.commen{
  margin-top: 30px;
  margin-left: 10px;
  background-color: #fff;
}
.pingjia{
  padding-top: 15px ;
  padding-bottom: 5px;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  border-bottom: 2px solid #f2f5f8;
}
.img{
  display: flex;
  align-items: center;
}
.img img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.img span{
  margin-left: 10px;
}
.pinglun{
  margin-top: 5px;
  margin-left: 5px;
}
.pl-item{
  margin-top: 5px;
  font-size: 14px;
  opacity: 0.7;
}
.info-imgs {
    margin-top: 10px;
  }
.info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>
