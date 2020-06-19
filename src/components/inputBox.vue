<!--  -->
<template>
      <div>
        <div class="container">
             <div class="item item1">
                 <span>备注:</span>
                 <input type="text" placeholder="点击填写备注..." v-model="$store.state.beiZhu">
             </div>
             <div class="item item2">{{ $store.state.result}}</div>
             <div class="item" v-for="(current,index) in list" :key="index"
             @click="getResult" >{{current}}</div>
             <div class="item iconfont icon-shanchu" @click="clearRes"></div>
             <div class="item  active" v-if="$store.state.isFinish" @click="finish('1')">完成</div>
             <div class="item  active" @click="sum" v-else>=</div>
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      list: [7, 8, 9, 'AC', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0]
    }
  },

  methods: {
    getResult (e) {
      this.$store.commit('getS', e.target.innerHTML)
    },
    clearRes () {
      this.$store.commit('clearR')
    },
    sum () {
      this.$store.commit('sum')
    },
    finish (n) {
      this.$store.commit('finished', n)
      this.$router.push('/')
    }
  }
}

</script>
<style lang='less' scoped>
.container {
    width: 96%;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: repeat(5,20%);
     background-color: #FFCCCC;
     .item1 {
        grid-column-start: 1;
        grid-column-end: 3;
        justify-self:start;
        input {
            margin-left: 10px;
            border: none;
            outline: none;
            width: 80px;
            line-height: 1.5em;
            background-color: transparent;
        }
        span {
             margin-left: 5px;
            font-size: 16px;
        }
     }
     div.item2 {
        grid-column-start:3;
        grid-column-end: 5;
        justify-self:end;
        padding-right: 10px;
        font-size: 25px;
     }
     .item {
         text-align: center;
         font-size: 20px;
         line-height: 2em;
         cursor: pointer;
     }
     .active {
         background-color: yellow;
     }
}
</style>
