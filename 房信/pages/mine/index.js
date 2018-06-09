//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    btnLoading: false,
    btnText: '授权登录',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    var that = this
    // // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              that.setData({ btnText: '已授权' })
              wx.showLoading({
                title: '登录中'
              })
            }
          })
        }
      },
      complete: function () {
        setTimeout(() => {
          wx.hideLoading()
        }, 3000)
        // setTimeout(() => {
        //   wx.reLaunch({
        //     url: '/pages/index/index'
        //   })
        // }, 6000)
      }
    })
  },
  bindGetUserInfo: function (e) {
    this.setData({ btnText: '已授权', btnLoading: true })
    if (e.detail.userInfo) {
      setTimeout(() => {
        wx.reLaunch({
          url: '/pages/index/index'
        })
      }, 1000)

    }
  }
})