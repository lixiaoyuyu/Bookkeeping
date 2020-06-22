import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/fontIcon/iconfont.css'

Vue.config.productionTip = false

Vue.filter('formatDate', function (val) {
  if (val) {
    const y = val.getFullYear()
    const m = (val.getMonth() + 1).toString().padStart(2, '0')
    const d = val.getDate().toString().padStart(2, '0')
    const h = val.getHours().toString().padStart(2, '0')
    const min = val.getMinutes().toString().padStart(2, '0')
    const s = val.getSeconds().toString().padStart(2, '0')
    return `${y}年${m}月${d}日 ${h}:${min}:${s}`
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
