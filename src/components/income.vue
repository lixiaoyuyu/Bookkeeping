<!--  -->
<template>
  <div>
    <div id="income">
     <icon :iconList="iconList" income='1'></icon>
    </div>
  </div>
</template>

<script>
import icon from './icon'
export default {
  data () {
    return {
      iconList: this.$store.state.incomeList
    }
  },
  methods: {},
  components: {
    icon
  }

}

</script>
<style lang='less' scoped>
#income {
  margin: 10px 5px 0 5px ;
}
 </style>
