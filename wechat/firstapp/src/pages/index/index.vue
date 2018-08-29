<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
    <click-cunter :init-num="10" @clicknum="handleClickNum"/>
    <click-cunter :init-num="20" @clicknum="handleClickNum">
      <input type="checkbox" /> 禁用
    </click-cunter>
    <div>计算结果：{{count}}</div>
    <a href="/pages/test1/main" class="navlink">进入计数器页面</a>
  </div>
</template>

<script>
  import ClickCunter from '@/components/click-counter'
  import globalStore from '../../stores/global-store'
  export default {
    components: {
      ClickCunter
    },
    computed: {
      count () {
        return globalStore.state.count
      }
    },
    data () {
      return {
        msg: 'Hello',
        hellow: '1111'
      }
    },
    methods: {
      clickHandle () {
        this.msg = 'Clicked!!!!!'
      },
      handleClickNum (data) {
        console.log('>>>>>>>>>>', data.num)
      }
    }
  }
</script>

<style scoped>
  .message {
    color: red;
    padding: 10px;
    text-align: center;
  }
  .navlink{
    text-decoration: underline;
  }

</style>
