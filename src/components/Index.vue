<template>
  <div id="Index">
    <header>
      <h3>小宇记账</h3>
       <div class="felxbox">
         <div class="data item"><p>2019年</p><span>08月</span></div>
         <div class="income item"><p>收入</p><span>0.00</span></div>
         <div class="expenditure item"><p>支出</p><span>0.00</span></div>
      </div>
       </header>
    <footer>
    <a href="#" @click.prevent="inRouter"><span>+</span></a>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    inRouter () {
      this.$router.push('/inRouter')
    }
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
     padding:  5px 5px 0 5px;
    box-sizing: border-box;
    background-color: #CCFFFF;
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
      }
    }
  }
  footer {
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0;
    z-index: 2;
     a {
       text-decoration: none;
       display: block;
       margin: 0 auto;
       width: 50px;
       height: 50px;
       cursor: pointer;
       span {
            display: block;
            width: 100%;
            color: black;
            font-size: 50px;
            font-weight: 700;
            line-height: 50px;
            text-align: center;
            transform: translateY(-10px);
       }
     }
  }
}
</style>
