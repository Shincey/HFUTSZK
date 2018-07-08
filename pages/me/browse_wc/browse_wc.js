// pages/index/browse/browse.js

var app = getApp()
var common = require('../../../common/subject.js')
var module_myworng = require('../../../szkapi/module_mywrong.js')
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
    if (app.globalData.selected_w_or_c == 0) {
      wx.setNavigationBarTitle({
        title: '我的错题'
      })
      this.setData({
        subjects_array: [].concat(module_myworng.get_wrong_subjects(app.globalData.selected_course))
      })
    } else if (app.globalData.selected_w_or_c == 1) {
      wx.setNavigationBarTitle({
        title: '我的收藏'
      })
      this.setData({
        subjects_array: [].concat(module_mycollection.get_collection_subjects(app.globalData.selected_course))
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

  on_click_btn_del: function(e) {
    var chapter = e.currentTarget.dataset["chapter"]
    var index = e.currentTarget.dataset["index"]
    var that = this
    wx.showModal({
      title: '提示',
      content: '确定删除此题吗？',
      success: function (res) {
        if (res.confirm) {
          if (app.globalData.selected_w_or_c == 0) {
            module_myworng.del_subject(app.globalData.selected_course, parseInt(chapter), parseInt(index))
            that.setData({
              subjects_array: [].concat(module_myworng.get_wrong_subjects(app.globalData.selected_course))
            })
          } else if (app.globalData.selected_w_or_c == 1) {
            module_mycollection.del_subject(app.globalData.selected_course, parseInt(chapter), parseInt(index))
            that.setData({
              subjects_array: [].concat(module_mycollection.get_collection_subjects(app.globalData.selected_course))
            })
          }
        } else if (res.cancel) {
        }
      }
    })
  },

  on_long_press_subject: function(e) {


    var chapter = e.currentTarget.dataset["chapter"]
    var index = e.currentTarget.dataset["index"]
    var that = this
    console.log(e)
    console.log(chapter)
    console.log(index)

    wx.showActionSheet({
      itemList: ['删除此题'],
      success: function (res) {
        if (res.tapIndex == 0) {
          wx.showModal({
            title: '提示',
            content: '确定删除此题吗？',
            success: function (res) {
              if (res.confirm) {
                if (app.globalData.selected_w_or_c == 0) {
                  module_myworng.del_subject(app.globalData.selected_course, parseInt(chapter), parseInt(index))
                  that.setData({
                    subjects_array: [].concat(module_myworng.get_wrong_subjects(app.globalData.selected_course))
                  })
                } else if (app.globalData.selected_w_or_c == 1) {
                  module_mycollection.del_subject(app.globalData.selected_course, parseInt(chapter), parseInt(index))
                  that.setData({
                    subjects_array: [].concat(module_mycollection.get_collection_subjects(app.globalData.selected_course))
                  })
                }
              } else if (res.cancel) {
              }
            }
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })

  }
})