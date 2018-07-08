// me.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    section_id: ['my_wrongs', 'my_collections', 'manual', 'contact', 'developers', 'donate'],
    section_color: ['white', 'white', 'white', 'white', 'white', 'white'],

    qr_url: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
   * 获取用户信息
   */
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 响应点击事件
   */
  on_click_my_wrongs: function (e) {
    app.globalData.selected_w_or_c = 0;
    wx.navigateTo({
      url: 'select_course/select_course'
    })

  },

  on_click_my_collections: function(e) {
    app.globalData.selected_w_or_c = 1;
    wx.navigateTo({
      url: 'select_course/select_course'
    })
  },

  on_click_manual: function(e) {
    wx.navigateTo({
      url: 'manual/manual'
    })
  },

  on_click_contact: function(e) {
    wx.navigateTo({
      url: 'contact/contact'
    })
  },

  on_click_developers: function(e) {
    wx.navigateTo({
      url: 'developers/developers'
    })
  },

  on_click_donate: function(e) {
    wx.navigateTo({
      url: 'donate/donate'
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
      case arr[4]:
        index = 4
        break
      case arr[5]:
        index = 5
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
        index=0
        break
      case arr[1]:
        index=1
        break
      case arr[2]:
        index = 2
        break
      case arr[3]:
        index = 3
        break
      case arr[4]:
        index = 4
        break
      case arr[5]:
        index = 5
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