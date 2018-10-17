<template>
    <div class="notFind">
        <div class="box">
            <img alt="Vue logo" src="../../assets/404.png">
        </div>
        <Footer/>
    </div>
</template>

<script>
  import Footer from '../layout/Footer'
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'

  export default {
    name: 'home',
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      Footer
    }
  }
</script>
<style lang="scss" scoped>
    .box {
        padding-top:60px;
        text-align: center;
    }
</style>

