import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
const index = () => import(/* webpackChunkName: "index" */ '../components/index')
const Details = () => import(/* webpackChunkName: "index" */ '../components/Details.vue')
// 记账页
const inRouter = () => import(/* webpackChunkName: "page" */ '../components/inRouter')
const income = () => import(/* webpackChunkName: "page" */ '../components/income')
const expenditure = () => import(/* webpackChunkName: "page" */ '../components/expenditure.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index,
    meta: { title: '首页' }
  },
  {
    path: '/inRouter',
    component: inRouter,
    children: [
      {
        path: '/',
        redirect: '/income'
      },
      {
        path: '/income',
        component: income,
        meta: { title: '支出' }
      },
      {
        path: '/expenditure',
        component: expenditure,
        meta: { title: '收入' }
      }
    ]
  },
  {
    path: '/Details/:id',
    component: Details,
    props: true,
    meta: { title: '详情' }
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  window.document.head.children[4].innerHTML = to.meta.title
  console.log(window.document.head.children[4].innerHTML)
  console.log(to)
  next()
})

export default router
