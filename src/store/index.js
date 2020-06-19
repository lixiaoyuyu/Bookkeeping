import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: '0',
    beiZhu: '',
    transport: ['+', '-', '*'],
    isPoint: false,
    isJjCc: false,
    isStart: false,
    isHasJj: false,
    isFinish: true,
    index: -1,
    arr: [],
    iconList: [{ type: 'icon-icon-', value: '餐饮' },
      { type: 'icon-gouwu', value: '购物' },
      { type: 'icon-riyongpin', value: '日用' },
      { type: 'icon-jiaotong', value: '交通' },
      { type: 'icon-shuiguo', value: '水果' },
      { type: 'icon-shucai', value: '蔬菜' },
      { type: 'icon-lingshi', value: '零食' },
      { type: 'icon-yundong', value: '运动' },
      { type: 'icon-yule', value: '娱乐' }
    ]
  },
  mutations: {
    getS (state, n) {
      state.isFinish = false
      const index = state.transport.indexOf(n) > -1
      // 判断一开始是否是.
      if (state.result === '0' && !index) {
        if (n === '.') {
          state.result += '' + n
          state.isPoint = true
        } else {
          state.result = '' + n
        }
        state.isStart = true
        return
      }
      // 输入的是数字
      if (!index) {
        if (n === '.' && state.isPoint) {
          return
        }
        if (n === '.' && state.isJjCc) {
          state.isPoint = true
          state.isJjCc = true
        } else {
          state.isJjCc = false
        }
        if (state.isHasJj && n === '.') {
          state.result += ''
        } else {
          state.result += '' + n
          state.isHasJj = false
          state.isPoint = false
        }
      }
      if (index && !state.isJjCc) {
        state.result += '' + n
        state.isPoint = false
        state.isJjCc = true
        state.isHasJj = true
      }
    },
    clearR (state) {
      state.result = '0'
      state.isPoint = false
      state.isJjCc = false
      state.isStart = false
      state.isHasJj = false
      state.isFinish = true
    },
    sum (state) {
      function s (n) {
        const fn = Function
        return fn('return ' + n)()
      }
      state.result = s(state.result)
      state.isFinish = true
    },
    finished (state, n) {
      if (n === '1') {
        state.arr.push({
          icon: state.iconList[state.index],
          bZ: state.beiZhu = '',
          val: state.result,
          isIncome: true
        })
      } else {
        state.arr.push({
          icon: state.iconList[state.index],
          bZ: state.beiZhu = '',
          val: state.result,
          isIncome: false
        })
      }
      state.result = '0'
    }
  },
  actions: {
  },
  modules: {
  }
})
