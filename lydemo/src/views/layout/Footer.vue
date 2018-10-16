<template>
    <div class="footer">
        <tabbar>
            <tabbar-item :selected="routerName === 'record'" link="/">
                <img slot="icon" src="../../assets/images/record.png">
                <img slot="icon-active" src="../../assets/images/record-active.png">
                <span slot="label">使用记录</span>
            </tabbar-item>
            <tabbar-item :selected="routerName === 'qrcode'" link="/qrcode">
                <img slot="icon" src="../../assets/images/qrcode.png">
                <img slot="icon-active" src="../../assets/images/qrcode-active.png">
                <span slot="label">扫一扫</span>
            </tabbar-item>
            <tabbar-item :selected="routerName === 'mine'" link="/mine">
                <img slot="icon" src="../../assets/images/my.png">
                <img slot="icon-active" src="../../assets/images/my-active.png">
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
  import {Tabbar, TabbarItem, Group, Cell} from 'vux'

  export default {
    name: 'home',
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    data(){
      return {
        routerName:''
      }
    },
    created: function () {
      this.routerName = this.$route.name
    },
  }
</script>
<style lang="scss">

</style>
