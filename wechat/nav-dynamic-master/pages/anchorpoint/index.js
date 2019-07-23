// pages/anchorpoint/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: '',
    top: 0,
    module:{
      tabScrollTop: '',
      block_1ScrollTop: '',
      block_2ScrollTop: '',
      block_3ScrollTop: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        that.setData({
          winHeight: calc
        });
      }
    });
    // 初始化自定义导航
    this.setNav();
    var query = wx.createSelectorQuery()
    query.select('#tab-con').boundingClientRect(function(res) {
      if (!res) {
        return false;
      }
      let module = that.data.module
      module.tabScrollTop = res.top - 60
      that.setData({
        module: module
      })
    }).exec()
    query.select('#block_1').boundingClientRect(function(res) {
      if (!res) {
        return false;
      }

      let module = that.data.module
      module.block_1ScrollTop = res.top
      that.setData({
        module: module
      })
    }).exec()
    query.select('#block_2').boundingClientRect(function(res) {
      if (!res) {
        return false;
      }

      let module = that.data.module
      module.block_2ScrollTop = res.top
      that.setData({
        module: module
      })
    
    }).exec()
    query.select('#block_3').boundingClientRect(function(res) {
      if (!res) {
        return false;
      }
      let module = that.data.module
      module.block_3ScrollTop = res.top
      that.setData({
        module: module
      })

    }).exec()
  },
  setNav() {
    this.selectComponent('#comp-nav-dynamic').setOptions({
      navBackgroundInit: '#000000', // 导航栏背景颜色-初始值
      navBackgroundRoll: '#ffffff', // 导航栏背景颜色-滚动值
      titleColorInit: '#ffffff', // 文本颜色-初始值 16进制
      titleColorRoll: '#000000', // 文本颜色-滚动值 16进制
      titleTextInit: ['商品', '详情', '评分'], // 标题文字-初始值
      titleTextRoll: ['商品', '详情', '评分'], // 标题文字-滚动值
      historyShow: true, // 历史图标是否显示
      scrollMin: 50, // 最小滚动间距，单位px
      scrollMax: 200, // 最大滚动间距，单位px
      homeShow: true, // home图标是否显示
      homeJudgeStack: false, // home图标显示是否判断页面栈
      homePath: '/pages/index/index', // home页面路径
      homeColorInit: 'white', // home图标颜色-初始值 white / black
      homeColorRoll: 'black', // home图标颜色-滚动值 white / black
    })
    this.setData({
      navHeight: this.selectComponent('#comp-nav-dynamic').getNavHeight(),
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  // 跳转路由
  navigation: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  onPageScroll: function(e) { // 获取滚动条当前位置
    this.selectComponent('#comp-nav-dynamic').scrollHandle(e.scrollTop);
  },
  parentTabSelect: function(e) {
    const type = e.detail.type;
    switch (type) {
      case 1:
        //操作1
        wx.pageScrollTo({
          scrollTop: this.data.module.block_2ScrollTop
        })
        break;
      case 2:
        //操作2
        wx.pageScrollTo({
          scrollTop: this.data.module.block_3ScrollTop
        })
        break;
      default:
        //默认操作
        wx.pageScrollTo({
          scrollTop: this.data.module.block_1ScrollTop
        })
        break;
    }
  }
})