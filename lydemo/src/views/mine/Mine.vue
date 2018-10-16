<template>
    <div class="home">
        <img alt="Vue logo" src="../../assets/logo.png">
        <group>
            <cell is-link title="Simple" link="/component/tabbar-simple"></cell>
            <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
        </group>
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
