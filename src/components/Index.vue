<template>
  <div id="Index">
    <header>
       <h3>小宇记账</h3>
       <div class="felxbox">
         <div class="data item"><p>{{today | years }}年</p><span>{{today | months}}月</span></div>
         <div class="income item"><p>收入</p><span>{{$store.getters.expenditures}}</span></div>
         <div class="expenditure item"><p>支出</p><span>{{$store.getters.incomes}}</span></div>
        </div>
       </header>
       <mains></mains>
    <footer>
    <a href="#" @click.prevent="inRouter"><span>+</span></a>
    </footer>
  </div>
</template>
<script>
import mains from './list'
export default {
  data: function () {
    return {
      today: new Date()
    }
  },
  filters: {
    years: function (val) {
      return val.getFullYear()
    },
    months: function (val) {
      return (val.getMonth() + 1).toString().padStart(2, '0')
    }
  },
  methods: {
    inRouter () {
      this.$router.push('/inRouter')
    }
  },
  components: {
    mains
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#Index {
 width: 100vw;
 height: 100vh;
}
#Index {
  box-sizing: border-box;
  header {
    width: 100%;
    height: 130px;
    position: sticky;
    top: 0;
     padding:  5px 5px 0 5px;
    box-sizing: border-box;
    background-color: #666699;
     h3 {
       height: 60px;
       line-height: 40px;
      text-align: center;
      }
    .felxbox {
      display: grid;
      height: 60px;
      grid-template-columns: 30% 35% 35%;
      .data,.income,.expenditure {
        p {
          height: 30px;
          line-height: 30px;
          color: #ccc;
        }
         span {
            font-size: 18px;
            font-weight: 600;
          }
      }
    }
  }
  footer {
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0;
    z-index: 2;
    background-color: #fff;
    overflow: hidden;
     a {
       text-decoration: none;
       display: block;
       margin: 0 auto;
       width: 50px;
       height: 50px;
       span {
            display: block;
            width: 100%;
            color: #666699;
            font-size: 60px;
            font-weight: 700;
            line-height: 50px;
            text-align: center;
            text-shadow: 5px 4px 7px;
            transform: translateY(-11px);
            cursor: pointer;
       }
     }
  }
}
</style>
