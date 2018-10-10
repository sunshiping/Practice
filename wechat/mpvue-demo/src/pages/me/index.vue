<template>
  <div class="mine">
      <img v-if="userInfo" :src="userInfo.avatarUrl" alt="头像"/>
      <div v-if="userInfo" class="userName">{{ userInfo.nickName }}</div>
      <i-button v-if="!userInfo" type="primary" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">获取权限</i-button>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      userInfo: null
    }
  },
  created () {
  },
  onLoad () {
    console.log(2122)
  },
  mounted () {
    // 一进来看看用户是否授权过
    this.getSetting()
  },
  methods: {
    getSetting () {
      let _this = this
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            _this.userInfo = wx.getStorageSync('userInfo').userInfo
          } else {
            console.log('用户还未授权过')
          }
        }
      })
    },
    bindGetUserInfo (e) {
      let _this = this
      // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData) {
        // 用户按了允许授权按钮
        _this.userInfo = e.mp.detail.userInfo
        wx.setStorageSync('userInfo', e.mp.detail)
      } else {
        // 用户按了拒绝按钮
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .mine{
        padding-top: 30px;
        img{
            display: block;
            width: 260rpx;
            height: 260rpx;
            margin: 0 auto;
        }
        .userName{
            font-size: 32rpx;
            text-align: center;
            color: #ccac7c;
        }
    }
</style>
