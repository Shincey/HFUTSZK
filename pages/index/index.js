//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

    section_id: ['section_mks', 'section_sx', 'section_mzt', 'section_jds'],
    section_color: ['white', 'white', 'white', 'white']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  onShareAppMessage: function () {
    
  },

  /**
   * 响应点击事件
   */
  on_click_section_mks: function (e) {
    app.globalData.selected_course = 0
    console.log(app.globalData)
    wx.navigateTo({
      url: 'select/select',
    })
  },
  on_click_section_sx: function (e) {
    app.globalData.selected_course = 1
    wx.navigateTo({
      url: 'select/select',
    })
  },
  on_click_section_mzt: function (e) {
    app.globalData.selected_course = 2
    wx.navigateTo({
      url: 'select/select',
    })
  },
  on_click_section_jds: function (e) {
    app.globalData.selected_course = 3
    wx.navigateTo({
      url: 'select/select',
    })
  },
  on_touch_section_start: function(e) {
    var index
    var arr = this.data.section_id
    switch (e.currentTarget.id) {
      case arr[0]:
        index = 0
        break
      case arr[1]:
        index = 1
        break
      case arr[2]:
        index = 2
        break
      case arr[3]:
        index = 3
        break
      default:
        return
    }
    var addr = 'section_color[' + index + ']'
    this.setData({
      [addr]: '#e2e2e2'
    })
  },
  on_touch_section_end: function(e) {
    var index
    var arr = this.data.section_id
    switch (e.currentTarget.id) {
      case arr[0]:
        index = 0
        break
      case arr[1]:
        index = 1
        break
      case arr[2]:
        index = 2
        break
      case arr[3]:
        index = 3
        break
      default:
        return
    }
    var addr = 'section_color[' + index + ']'
    this.setData({
      [addr]: 'white'
    })
  }
 })
