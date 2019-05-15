const config = require('./config')
App({
  onLaunch: function () {
    const self = this;
    wx.checkSession({
      success() {
        // session_key 未过期，并且在本生命周期一直有效
        console.log('未过期')
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        //wx.login() // 重新登录
        self.getUserOpenId()
      }
    })
  },

  getUserOpenId(callback) {
    debugger
    const self = this
    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      self.login(function(res){
        console.log(res)
        callback(null, self.globalData.openid)
      })
    }
  },
  login(callback){
    wx.login({
      success(data) {
        wx.request({
          url: config.loginUrl,
          method: 'POST',
          header: {
            'content-type': 'application/json',
            'accept': 'application/json'
          },
          data: {
            code: data.code
          },
          success(res) {
            //console.log('拉取openid成功', res)
            self.globalData.openid = res.data.openid
            callback(null, self.globalData.openid)
          },
          fail(res) {
            //console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
            callback(res)
          }
        })
      },
      fail(err) {
        console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
        callback(err)
      }
    })
  },
  globalData: {
    openid:null,
    userInfo: null
  }
})