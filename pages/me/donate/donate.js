
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
   * 点击事件
   */
  on_long_tap_wepay: function(e) {
    wx.showActionSheet({
      itemList: ['保存图片'],
      success: function(res) {
        if (res.tapIndex == 0) {
          console.log("save image...")
          wx.getImageInfo({
            src: '../../../images/public/wepay.png',
            success: function(res) {
            console.log(res)
            wx.saveImageToPhotosAlbum({
              filePath: res.path,
                success() {
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 2000
                  })
                }
              })
            }
          })
        }
      }
    })
  },
  on_long_tap_alipay: function(e) {
    wx.showActionSheet({
      itemList: ['保存图片'],
      success: function (res) {
        if (res.tapIndex == 0) {
          console.log("save image...")
          wx.getImageInfo({
            src: '../../../images/public/alipay.png',
            success: function (res) {
              console.log(res)
              wx.saveImageToPhotosAlbum({
                filePath: res.path,
                success() {
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 2000
                  })
                }
              })
            }
          })
        }
      }
    })
  },
  on_long_tap_aliaccount: function(e) {
    wx.showActionSheet({
      itemList: ['复制支付宝账号'],
      success: function(res) {
        wx.setClipboardData({
          data: 'taoxinzhi420594855@qq.com',
          success: function(rr) {
            wx.showToast({
              title: '复制成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  }
})