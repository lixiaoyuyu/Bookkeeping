<!--  -->
<template>
  <div>
     <div id="expenditure">
     <icon :iconList="iconList" income= '2'></icon>
    </div>
  </div>
</template>

<script>
import icon from './icon'
export default {
  data () {
    return {
      iconList: this.$store.state.expenditureList
    }
  },
  components: {
    icon
  }
}

</script>
<style lang='less' scoped>
#expenditure {
  margin: 10px 5px 0 5px ;
}
</style>
