Page({
  data: {
    clientHeight: 0,
    arr: [],
    arrHight: [],
    productArr: [
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB1DX3hIpXXXXXIaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i6/TB1SIYrLXXXXXaAXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB11yxeNVXXXXbwXFXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i3/TB1ndJiQFXXXXctaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i4/TB1BYGDLpXXXXbuXXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i2/TB1_9GoMVXXXXXmaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i2/TB1cSZZNFXXXXaKaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i4/TB1MwqbLpXXXXaEXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i8/TB1RVS_QpXXXXXBXXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i5/TB1xEJiLXXXXXcxaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i6/TB1DSuHJVXXXXXmXXXXwu0bFXXX.png_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i5/TB1aMNyLpXXXXa2XXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i8/TB1JRHEQpXXXXXwXVXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i7/TB1qKEuQpXXXXXYXXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i7/TB1TlOfQFXXXXX2XXXXwu0bFXXX.png_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB1SKu.QpXXXXbDXVXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i2/TB17gJ3OXXXXXcrXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i8/TB1um5GQpXXXXbiaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB1pxCTQpXXXXa2apXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i6/TB1zksMNVXXXXaRapXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i4/TB1nbrcOXXXXXXEXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i4/TB1CI_NQpXXXXXaXVXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i2/TB18vTdQFXXXXXlXpXXwu0bFXXX.png_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i7/TB1doDVQpXXXXcRaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB17LgBNFXXXXaSXVXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i6/TB1fVJJQFXXXXcyXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i3/TB1wnBTKFXXXXcQXXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB1DX3hIpXXXXXIaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i6/TB1SIYrLXXXXXaAXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB11yxeNVXXXXbwXFXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i3/TB1ndJiQFXXXXctaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i4/TB1BYGDLpXXXXbuXXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i2/TB1_9GoMVXXXXXmaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i2/TB1cSZZNFXXXXaKaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i4/TB1MwqbLpXXXXaEXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i8/TB1RVS_QpXXXXXBXXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i5/TB1xEJiLXXXXXcxaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i6/TB1DSuHJVXXXXXmXXXXwu0bFXXX.png_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i5/TB1aMNyLpXXXXa2XXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i8/TB1JRHEQpXXXXXwXVXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i7/TB1qKEuQpXXXXXYXXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i7/TB1TlOfQFXXXXX2XXXXwu0bFXXX.png_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB1SKu.QpXXXXbDXVXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i2/TB17gJ3OXXXXXcrXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i8/TB1um5GQpXXXXbiaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB1pxCTQpXXXXa2apXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i6/TB1zksMNVXXXXaRapXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i4/TB1nbrcOXXXXXXEXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i4/TB1CI_NQpXXXXXaXVXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i2/TB18vTdQFXXXXXlXpXXwu0bFXXX.png_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i7/TB1doDVQpXXXXcRaXXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB17LgBNFXXXXaSXVXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i6/TB1fVJJQFXXXXcyXpXXSutbFXXX.jpg_240x240xz.jpg", Title: 'wechat', RmbPrice: '2000' }],
    productArrNew: [
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg", Title: '新wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg", Title: '新wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg", Title: '新wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i1/TB1DX3hIpXXXXXIaXXXSutbFXXX.jpg_240x240xz.jpg", Title: '新wechat', RmbPrice: '2000' },
      { src: "https://gtd.alicdn.com/sns_logo/i6/TB1SIYrLXXXXXaAXpXXSutbFXXX.jpg_240x240xz.jpg", Title: '新wechat', RmbPrice: '2000' }]
  },
  onLoad: function () {
    var that = this;
    wx.setNavigationBarTitle({
      title: '房源列表'
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    })
    var arr = [];
    var length = Array.from(this.data.productArr).length;
    var isD = length % 2 == 0 ? true : false;
    var arrHight = [];
    for (var i = 0; i < length; i++) {
      if (i <= 5) {
        arr[i] = true;
      } else {
        arr[i] = false;
      }

      arrHight[i] = Math.floor(i / 2) * (320 / 750) * 520;
    }
    that.setData({
      arr: arr,
      productArr: Array.from(this.data.productArr),
      arrHight: arrHight
    })
  },
  upper() {
    this.onPullDownRefresh()
  },
  //下拉刷新
  onPullDownRefresh: function () {
    var that = this;
    wx.showNavigationBarLoading() //在标题栏中显示加载
    //模拟加载
    setTimeout(function () {
      var list = that.data.productArr.push(that.data.productArrNew)
      that.setData({
        productArr: list
      })
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 3500);
  },
  lower: function () {
    var that = this;
    var searchList = [];
    console.log('上拉加载')
    searchList = that.data.productArr.concat(that.data.productArrNew)
    that.setData({
      productArr: searchList
    })

  },

  scroll: function (e) {
    var seeHeight = this.data.clientHeight; //可见区域高度
    var arrHight = this.data.arrHight;
    var event = e;
    var scrollTop = event.detail.scrollTop;
    var arr = this.data.arr;
    for (var i = 0; i < this.data.productArr.length; i++) {
      if (arrHight[i] < scrollTop + 750) {
        if (arr[i] == false) {
          arr[i] = true;
          // arr[i*2]   arr[i*2+1] 
        }
        //n = i + 1;
      }
      //arr[i] = true;
    }
    this.setData({
      arr: arr
    })
  }

})