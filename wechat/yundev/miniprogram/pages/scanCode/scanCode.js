// pages/scanCode/scanCode.js
const db = wx.cloud.database()
const book = db.collection('mybook')
import Notify from '../../vant/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  scancode: function(event) {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: res => {
        const isbn = res.result
        console.log(isbn)
        db.collection('mybook').where({
          isbn13: isbn
        }).get({
          success: function(res) {
            if (res.data.length > 0) {
              console.log('已存在')
              Notify('该图书已存在')
            } else {
              wx.cloud.callFunction({
                // 要调用的云函数名称
                name: 'bookinfo',
                // 传递给云函数的参数
                data: {
                  isbn: isbn
                },
                success: res => {
                  // output: res.result === 3
                  var bookInfo = JSON.parse(res.result)
                  console.log(bookInfo)
                  db.collection('mybook').add({
                      // data 字段表示需新增的 JSON 数据
                      data: bookInfo
                    })
                    .then(res => {
                      console.log(res)
                    })
                },
                fail: err => {
                  // handle err
                  console.log(err)
                }
              })
            }
          }
        })
      },
      fail: error => {
        console.log(error)
      }
    })
  }
})