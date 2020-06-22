<!--  -->
<template>
  <div id="inRouter">
      <header>
          <router-link to="/income" class="routesLink">支出</router-link>
          <router-link to="/expenditure" class="routesLink" >收入</router-link>
          <router-link to = '/' class="iconfont icon-tuanduicankaoxian- quxiao routesLink"></router-link>
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
//  background-color: blue;
 line-height: 50px;
 text-align: center;
 border-bottom: 1px solid #ccc;
 font-size: 20px;
 font-weight: 700;
   .router-link-active {
     border-bottom: 2px solid aqua;
   }
   .routesLink {
     text-decoration: none;
     color: aqua;
   }
   :first-child {
       margin-right: 10px;
   }
   :last-child {
      margin-left: 10px;
   }
   .quxiao {
     position: relative;
     font-size: 30px;
      right: -30%;
      border: none;
      // top: 15px;
   }
}
</style>
