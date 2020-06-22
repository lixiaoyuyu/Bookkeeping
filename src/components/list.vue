<!-- 列表 -->
<template>
<div>
     <div class="main" v-if="list">
       <ul>
           <li v-for="(current, index) in list" :key='index' @click="see(index)">
               <span > <span class="iconfont" :class="current.icon.type"> </span> </span>
               <span class="val">{{current.icon.value}}</span>
               <span class="money">{{current.isIncome ? '-'+current.val : current.val }}</span>
           </li>
        </ul>
     </div>
     <div class="main" v-else>
      暂无记录
     </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      list: this.$store.state.arr
    }
  },

  methods: {
    see (index) {
      this.$router.push({ path: `/Details/${index}` })
    }
  }
}

</script>
<style lang='less' scoped>
.main {
    // margin:131px  0 0;
    ul {
      li {
          height: 50px;
          border-top: 1px solid #ccc;
          list-style: none;
          line-height: 50px;
          padding: 0 5px;
          display: grid;
          grid-template-columns: 15%  15% 70% ;
          grid-template-rows: 100%;
          align-items: center;
          span:first-child {
             place-self: center center;
             border-radius: 50%;
            margin-top: 5px;
          }
          span.iconfont {
              font-size: 30px;
              padding: 5px;
              background-color: yellow;
          }
          span.val {
              justify-self: center;
              font-weight: 600;
          }
          span.money {
              justify-self: end;
              padding-right: 15px;
              font-weight: 600;
          }
          &.active {
            background-color:#666699;
          }
      }
      >:last-child {
          border-bottom: 1px solid #ccc;
      }
    }
}
</style>
