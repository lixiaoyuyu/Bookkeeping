<template>
  <div id="app">
     <div class="img" v-if="flag">
          <img src="./assets/logo.png" alt="" title="扫描二维码访问">
     </div>
    <router-view v-else></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  created () {
    function IsPC () {
      var userAgentInfo = window.navigator.userAgent
      var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    }
    this.flag = IsPC()
    if (this.flag) {
      alert('请扫描二维码使用手机访问')
    }
  }
}

</script>
<style scoped>
.img {
  width: 30%;
  margin: 30% auto 0;
}
</style>
