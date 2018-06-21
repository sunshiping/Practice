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
            },
            complete: function () {
              if (that.data.btnText == '已授权') {
                that.setData({
                  btnLoading: true
                })
              } else {
                that.setData({
                  btnLoading: false
                })
              }
              setTimeout(() => {
                wx.hideLoading()
              }, 3000)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    this.setData({ btnText: '已授权', btnLoading: true })
    // wx.showLoading({
    //   title: '登录中'
    // })
    if (e.detail.userInfo) {
      setTimeout(() => {
        wx.hideLoading()
        wx.reLaunch({
          url: '/pages/index/index'
        })
      }, 1000)

    }
  },
  upLoad: function (res) {
    wx.chooseImage({
      count: 1,
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res)
      }
    })
  },
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  onShareAppMessage: function (res) {
    console.log(res)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '个人中心',
      path: '/pages/list/list?type=house&id=1',
      desc:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',//描述
      imageUrl:'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
    }
  }
})