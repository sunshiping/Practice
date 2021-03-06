const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    db.collection('mybook').doc(options.id).get({
      success: res => {
        // res.data 包含该记录的数据
        console.log(res.data)
        this.setData({
          book: res.data
        })
      },
      fail:err => {
        console.error(err)
      }
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
  updata: function(event) {
    console.log(event.currentTarget.dataset.id)
    db.collection('mybook').doc(event.currentTarget.dataset.id).update({
      data: {
        title: '精通CSS（第6版）'
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
  del: function(event) {
    db.collection('mybook').doc(event.currentTarget.dataset.id).remove({
      success: function (res) {
        console.log(res)
      }
    })
  }
})