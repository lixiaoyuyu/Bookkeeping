<!--  -->
<template>
    <div>
      <div class="container" v-if="List">
            <div class="item " v-for="(current,index) in List"  :key="index">
                <span @click.stop="active(index, $event)" class="iconfont" :class="current.type" ></span>
                 <p class="cm">{{current.value}}</p>
            </div>
      </div>
       <div v-else>
               暂无内容
          </div>
      <footer v-show="isShow">
        <inputBox></inputBox>
      </footer>
    </div>
</template>

<script>
import inputBox from './inputBox'
export default {
  props: ['iconList', 'income'],
  data () {
    return {
      List: this.iconList,
      activeList: '',
      eTarget: '',
      isShow: false
    }
  },
  methods: {
    active (index, e) {
      if (this.activeList && this.eTarget) {
        this.eTarget.classList.remove('active')
      }
      this.$store.state.index = index
      this.$store.state.isIncomes = this.income
      console.log(this.$store.state.index)
      e.target.classList.add('active')
      this.isShow = true
      this.activeList = e.target.classList
      this.eTarget = e.target
    }
  },
  components: {
    inputBox
  }
}

</script>
<style lang='less' scoped>
.container {
     height: 100%;
     display: flex;
    //  border: 1px solid black;
     flex-wrap: wrap;
    .item {
      width: 25%;
      height: 100px;
      text-align: center;
      line-height: 80px;
      font-size: 25px;
    //   cursor: pointer;
      span {
          font-size: 40px;
          background-color: #ccc;
          border-radius: 50%;
          padding: 5px;
          cursor: pointer;
      }
       p{
          font-size: 14px;
          margin: 0;
           padding: 0;
          margin-top: -40px;
          height: 16px;
      }
    }
    span.active {
        background-color: yellow;
    }
}
footer{
  width: 100vw;
  position: fixed;
  bottom: 5px;

}
 </style>
