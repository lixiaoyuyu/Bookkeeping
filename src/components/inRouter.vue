<!--  -->
<template>
  <div id="inRouter">
      <header>
          <router-link to="/income">支出</router-link>
          <router-link to="/expenditure">收入</router-link>
      </header>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {}
}

</script>
<style lang='less' scoped>
#inRouter {
  width: 100vw;
  height: 100vh;
}
header {
 height: 50px;
 background-color: blue;
 line-height: 50px;
 text-align: center;
   :first-child {
       margin-right: 10px;
       text-decoration: none;
   }
   :last-child {
      margin-left: 10px;
      text-decoration: none;
   }
}
</style>
