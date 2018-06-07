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
    grids: [
      {
        name: "二手房",
        url: '/pages/list/list'
      },
      {
        name: "新房",
        url: '2222222'
      },
      {
        name: "租房",
        url: '33333'
      },
      {
        name: "优惠",
        url: '33333'
      }
    ]
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
