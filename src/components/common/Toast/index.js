import Toast from 'components/common/Toast/Toast.vue'
const obj = {}

obj.install = function (Vue) {
  // console.log('aa', Vue);
  //创建组件构造器
  const toastContrustor = Vue.extend(Toast);
  //new 的方式  根骨组件构造器 创建一个对象
  const toast = new toastContrustor();
  //将组件对象 手动挂载到某个元素上
  toast.$mount(document.createElement('div'));
  //toast.$el 对应的就是div
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
}

export default obj
