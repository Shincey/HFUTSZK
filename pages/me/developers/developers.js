// pages/me/developers/developers.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dep_a_qq: '420594855',
    dep_a_email: 'taoxinzhi@aliyun.com',
    dep_b_qq: '841010857',
    dep_b_email: '841010857@qq.com',
    hep_a_blog: 'www.netcan666.com'
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
   * 响应事件
   */
  on_long_press_developer_a: function(e) {
    var qq = this.data.dep_a_qq
    var email = this.data.dep_a_email
    wx.showActionSheet({
      itemList: ['复制QQ', '复制Email'],
      success: function (res) {
        console.log(res)
        if (res.tapIndex == 0) {
          wx.setClipboardData({
            data: qq,
            success: function (rr) {
              wx.showToast({
                title: '复制成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
        } else if (res.tapIndex == 1) {
          wx.setClipboardData({
            data: email,
            success: function (rr) {
              wx.showToast({
                title: '复制成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
        }
      }
    })
  },

  on_long_press_developer_b: function(e) {
    var qq = this.data.dep_b_qq
    var email = this.data.dep_b_email
    wx.showActionSheet({
      itemList: ['复制QQ', '复制Email'],
      success: function (res) {

        if (res.tapIndex == 0) {
          wx.setClipboardData({
            data: qq,
            success: function (rr) {
              wx.showToast({
                title: '复制成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
        } else if (res.tapIndex == 1) {
          wx.setClipboardData({
            data: email,
            success: function (rr) {
              wx.showToast({
                title: '复制成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
        }
      }
    })
  },

  on_long_press_helper_a: function(e) {
    var blog = this.data.hep_a_blog
    wx.showActionSheet({
      itemList: ['复制网址'],
      success: function (res) {
        if (res.tapIndex == 0) {
          wx.setClipboardData({
            data: blog,
            success: function (rr) {
              wx.showToast({
                title: '复制成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
        } 
      }
    })
  }
})