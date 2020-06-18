import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index'
import inRouter from '../components/inRouter'
import income from '../components/income'
import expenditure from '../components/expenditure'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index
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
        component: income
      },
      {
        path: '/expenditure',
        component: expenditure
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
