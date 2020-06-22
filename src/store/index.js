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
    isIncomes: '',
    arr: [],
    incomeList: [{ type: 'icon-icon-', value: '餐饮' },
      { type: 'icon-gouwu', value: '购物' },
      { type: 'icon-riyongpin', value: '日用' },
      { type: 'icon-jiaotong', value: '交通' },
      { type: 'icon-shuiguo', value: '水果' },
      { type: 'icon-shucai', value: '蔬菜' },
      { type: 'icon-lingshi', value: '零食' },
      { type: 'icon-yundong', value: '运动' },
      { type: 'icon-yule', value: '娱乐' },
      { type: 'icon-qita', value: '其他' }
    ],
    expenditureList: [
      { type: 'icon-gongzi', value: '工资' },
      { type: 'icon-jianzhi', value: '兼职' },
      { type: 'icon-licai', value: '理财' },
      { type: 'icon-lijin', value: '礼金' },
      { type: 'icon-qita', value: '其他' }
    ]
  },
  mutations: {
    getS (state, n) {
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
        state.isFinish = false
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
      // 判断最后一位是否为运算符
      if (state.result.length > 1) {
        const index = state.transport.indexOf(state.result[state.result.length - 1]) > -1
        if (index) {
          const temp = [...state.result]
          temp.pop()
          state.result = temp.join()
        }
      }
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
          icon: state.incomeList[state.index],
          bZ: state.beiZhu,
          val: state.result,
          isIncome: true,
          date: new Date()
        })
      } else {
        state.arr.push({
          icon: state.expenditureList[state.index],
          bZ: state.beiZhu = '',
          val: state.result,
          isIncome: false,
          date: new Date()
        })
      }
      state.result = '0'
      state.beiZhu = ''
      state.isIncomes = ''
    },
    shanChu (state, n) {
      state.arr.splice(n, 1)
    }
  },
  actions: {
  },
  getters: {
    incomes (state) {
      let sum = 0.00
      state.arr.forEach(item => {
        if (item.isIncome) {
          sum += parseFloat(item.val)
        }
      })
      return sum.toFixed(2)
    },
    expenditures (state) {
      let sum = 0.00
      state.arr.forEach(item => {
        if (!item.isIncome) {
          sum += parseFloat(item.val)
        }
      })
      return sum.toFixed(2)
    }
  },
  modules: {
  }
})
