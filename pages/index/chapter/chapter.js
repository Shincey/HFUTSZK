
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: 0,
    prac: 0,
    mks: [0, 1, 2, 3, 4, 5, 6, 7],
    sx: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    mzt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    jds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      course: app.globalData.selected_course,
      prac: app.globalData.selected_prac
    })
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
  
  // },

  /**
   * 响应事件
   */

  on_click_btn_select_chapter: function(e) {
    app.globalData.selected_chapter = e.target.id
    if (app.globalData.selected_prac == 1) {
      wx.navigateTo({
        url: '../practice/practice'
      })
    } else {
      wx.navigateTo({
        url: '../browse/browse'
      })
    }
  }
})