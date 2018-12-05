<template>
  <div class="mine">
      <img v-if="userInfo" :src="userInfo.avatarUrl" alt="头像"/>
      <div v-if="userInfo" class="userName">{{ userInfo.nickName }}</div>
      <YearProgress></YearProgress>
      <i-button v-if="!userInfo" type="primary" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="login">获取权限</i-button>
      <i-row>
          <i-col span="12" i-class="col-class"><i-button v-if="userInfo" type="error" @click="scanBook">添加图书</i-button></i-col>
          <i-col span="12" i-class="col-class"><i-button v-if="userInfo" type="success" @click="meUpload">我的贡献</i-button></i-col>
      </i-row>
  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import { showToast, post } from '@/utils/index'
import YearProgress from '@/components/YearProgress'
import config from '@/config'
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
    // console.log('created', 1111)
  },
  onLoad () {
    // console.log('onLoad', 2222)
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
            // console.log('用户还未授权过')
          }
        }
      })
    },
    bindGetUserInfo (e) {
      let _this = this
      console.log(e.mp.detail.rawData)
      debugger
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
    },
    login () {
      let user = wx.getStorageSync('userinfo')
      const self = this
      if (!user) {
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function (userinfo) {
            qcloud.request({
              url: config.userUrl,
              login: true,
              success (userRes) {
                wx.setStorageSync('userinfo', userRes.data.data)
                self.userinfo = userRes.data.data
              }
            })
          }

        })
      }
    },
    meUpload () {
      // 跳转到我的贡献
      wx.navigateTo({
        url: `/pages/dedicate/main`
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
