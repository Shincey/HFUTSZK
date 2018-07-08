// pages/index/browse/browse.js

var app = getApp()

var common = require('../../../common/subject.js')
var module_mycollection = require('../../../szkapi/module_mycollection.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjects_array: [],
    offset: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      subjects_array: [].concat(common.get_subjects_by_course_and_chapter(app.globalData.selected_course, app.globalData.selected_chapter))
    })
    console.log(this.data.subjects_array)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {
  
  // }

  on_long_press_subject: function (e) {
    var index = e.currentTarget.dataset["i"]
    console.log(index)
    wx.showActionSheet({
      itemList: ['收藏本题'],
      success: function (res) {
        if (res.tapIndex == 0) {
          module_mycollection.set_collection_subject(app.globalData.selected_course, app.globalData.selected_chapter, parseInt(index))
          wx.showToast({
            title: '收藏成功',
            icon: 'success',
            duration: 2000
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  }
})