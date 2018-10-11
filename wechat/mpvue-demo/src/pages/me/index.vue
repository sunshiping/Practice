<template>
  <div class="mine">
      <img v-if="userInfo" :src="userInfo.avatarUrl" alt="头像"/>
      <div v-if="userInfo" class="userName">{{ userInfo.nickName }}</div>
      <YearProgress></YearProgress>
      <i-button v-if="!userInfo" type="primary" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">获取权限</i-button>
      <i-button v-if="userInfo" type="error" @click="scanBook">添加图书</i-button>
  </div>
</template>

<script>
import { showToast, post } from '@/utils/index'
import YearProgress from '@/components/YearProgress'
export default {
  components: {
    YearProgress
  },
  data () {
    return {
      userInfo: null,
      openId: null
    }
  },
  created () {
    console.log('created', 1111)
  },
  onLoad () {
    console.log('onLoad', 2222)
  },
  mounted () {
    // 一进来看看用户是否授权过
    this.getSetting()
    this.openId = wx.getStorageSync('jscode').openid
  },
  methods: {
    async addBook (isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openid: this.openId
      })
      if (res.title) {
        showToast(`添加成功`, 'success')
      }
    },
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
    },
    scanBook () {
      let _this = this
      wx.scanCode({
        onlyFromCamera: true,
        success: function (res) {
          if (res.result) {
            _this.addBook(res.result)
          }
        }
      })
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
