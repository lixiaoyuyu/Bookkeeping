<!--  -->
<template>
  <div>
    <div id="income">
     <icon :iconList="iconList"></icon>
      <!-- <div class="container">
        <div class="item">1</div>
        <div class="item">20.</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import icon from './icon'
export default {
  data () {
    return {
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
