import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/Toast'
import Firstclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
//自己封装toast
Vue.use(toast);
//解决移动端300ms延迟
Firstclick.attach(document.body);
//图片懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/wanghan.png')
});

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
