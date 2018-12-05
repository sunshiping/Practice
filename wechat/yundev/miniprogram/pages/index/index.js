const db = wx.cloud.database()
const book = db.collection('mybook')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.cloud.callFunction({ name: "batchupdata", success: res => console.log(res) })  云函数更新数据
    this.getBookList()
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

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.getBookList()
    setTimeout(function() {
      wx.stopPullDownRefresh()
    }, 1500)
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
  lookInfo: function(event) {
    console.log(event)
    var bookId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../bookDetail/bookDetail?id=' + bookId
    })
  },
  getBookList: function() {
    var _this = this;
    db.collection('mybook').get({
      success: res => {
        // res.data 是包含以上定义的两条记录的数组
        this.setData({
          book_list: res.data
        })
      }
    })
  }
})