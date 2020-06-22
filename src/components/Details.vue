 <!-- 详情页 -->
 <template>
   <div>
       <header>
           <div class="icon">
               <div><span class="iconfont" :class="obj.icon.type"></span></div>
               <p>{{obj.icon.value}}</p>
           </div>
         <span class="iconfont icon-tuanduicankaoxian- quxiao" @click="back"></span>
       </header>
       <div class="main">
           <p>类型<span>{{obj.isIncome ? '支出':'收入'}}</span></p>
           <p>金额<span>{{obj.val}}</span></p>
           <p>时间<span>{{obj.date | formatDate}}</span></p>
           <p v-if="obj.bZ">备注<span class="bz">{{obj.bZ}}</span></p>
           <p v-else>备注<span>{{obj.bZ}}</span></p>
           <div>
             <button @click="sahcnhu">删除</button>
           </div>
       </div>
    </div>
 </template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      obj: null
    }
  },
  methods: {
    back () {
      this.$router.push('/')
      this.obj = null
    },
    sahcnhu () {
      this.$store.state.arr.splice(this.id, 1)
      this.obj = null
      this.$router.push('/')
    }
  },
  created () {
    this.obj = this.$store.state.arr[this.id]
  }
}
</script>
<style lang='less' scoped>
header {
    height: 20vh;
    background-color: #666699;
    overflow: hidden;
    .icon {
     display: block;
     width: 80px;
     height: 80px;
     background-color: #fff;
     margin: 25px auto 0;
       border-radius: 50%;
     div {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 80px;
     }
    span {
      font-size: 35px;
      color:#666699;
    }
    p {
       line-height: 28px;
       font-size: 14px;
       text-align: center;
    }
    }
    .quxiao {
        font-size: 25px;
        position: absolute;
        top: 1%;
        right: 4%;
    }
}
.main {
   p{
      line-height: 60px !important;
      padding-left: 5%;
      color: #ccc;
      font-size: 16px;
      font-weight: 500;
      border-bottom: 1px solid #ccc;
      span {
         padding-left:18px;
         font-size: 20px;
         font-weight: 700;
         color: black;
      }
      .bz {
          display:block;
          width: 84%;
          padding-top: 14px;
           padding-bottom: 14px;
          line-height: 30px;
          margin: -60px 0 0 30px;
          word-break:break-all;
      }
   }
    div {
    display: flex;
     justify-content: flex-end;
      button {
        outline: none;
        border: none;
        width: 80px;
        height: 30px;
        background-color:#99CCFF;
        line-height: 30px;
        font-size: 16px;
        font-weight: 600;
        margin: 50px 16px 0 0
       }
    }
}
</style>
