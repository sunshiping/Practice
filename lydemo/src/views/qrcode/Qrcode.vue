<template>
    <div class="home">
        扫码页面

        <Footer/>
    </div>
</template>

<script>
  import Footer from '../layout/Footer'
  import {Tabbar, TabbarItem, Group, Cell} from 'vux'

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
<style lang="scss">

</style>
