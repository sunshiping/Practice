<template>
  <div>
   图书列表
      <open-data type="userAvatarUrl"></open-data>
      <open-data type="userNickName"></open-data>
      <button open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">点击登录/注册</button>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  onLaunch () {
    console.log('111')
  },
  created () {
  },
  methods: {
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
