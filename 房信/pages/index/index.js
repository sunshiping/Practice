
Page({
  data: {
    background: ['http://7xsuhd.com1.z0.glb.clouddn.com/house_146770749014.jpg', 'http://7xsuhd.com1.z0.glb.clouddn.com/house_146770749014.jpg', 'http://7xsuhd.com1.z0.glb.clouddn.com/house_146770749014.jpg'],
    indicatorDots: false, //指示点
    vertical: false,
    autoplay: true, //自动播放
    circular: true, //衔接滑动
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    num: 1,
    grids: [{
        name: "二手房",
        url: '/pages/list/list?type=house&id=1',
        img:'./../../images/icon-1.png'
      },
      {
        name: "新房",
        url: '/pages/list/list?type=new',
        img: './../../images/icon-2.png'
      },
      {
        name: "租房",
        url: '/pages/list/list?type=rent',
        img: './../../images/icon-3.png'
      },
      // {
      //   name: "优惠",
      //   url: '/pages/list/list?type=favourable',
      //   img: './../../images/icon-1.png'
      // }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('666')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  changeProperty: function(e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  changeType: function(e) {
    console.log(e);
    this.setData({
      num: e.target.dataset.num
    })
    if (this.data.num == 1) {
      console.log('二手房')
    } else {
      console.log('租房')
    }
  },
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '首页',
      path: '/page/user?id=123'
    }
  }
})