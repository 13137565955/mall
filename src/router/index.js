import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  meta: {
    title: '首页'
  },
  component: () => import('../views/home/Home')
}, {
  path: '/cart',
  meta: {
    title: '购物车'
  },
  component: () => import('../views/cart/Cart')
}, {
  path: '/category',
  meta: {
    title: '分类'
  },
  component: () => import('../views/category/Category')
}, {
  path: '/profile',
  meta: {
    title: '我的'
  },
  component: () => import('../views/profile/Profile')
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//标题 全局守卫
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title;
  // document.title = to.meta.title
  //console.log(to);
  // console.log('++++');
  next()
})
export default router
