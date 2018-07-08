// pages/index/practice/practice.js

var app = getApp()

var common = require('../../../common/subject.js')

var module_mywrong =  require('../../../szkapi/module_mywrong.js')
var module_mycollection = require('../../../szkapi/module_mycollection.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    qIndex: 0,
    qTotal: 0,
    qEntity: [],
    qType: -1,
    showNext: 1,
    showPre: 0,
    hasChoosed: 0,
    u_answer: "",
    showAnswer: 0,
    t_answer: 0,
    brush: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let qE = common.get_subjects_by_course_and_chapter(app.globalData.selected_course, app.globalData.selected_chapter)

    let currRecord = app.globalData.selected_course + "-" + app.globalData.selected_chapter;
    this.setData({
      qTotal: qE.length,
      qIndex: wx.getStorageSync(currRecord) || 0,
      qEntity: qE
    })

    this.setData({
      showPre: this.data.qIndex <= 0 ? 0 : 1,
      showNext: this.data.qIndex >= this.data.qTotal - 1 ? 0 : 1,
    })

    this.setData({
      brush: true
    })
  },

  nextQ: function () {
    //this.data.qIndex++;
    this.setData({
      qIndex: this.data.qIndex + 1,
      hasChoosed: 0,
      showAnswer: 0,
      u_answer: "",
      
    })
    this.setData({
      showNext: this.data.qIndex >= this.data.qTotal - 1 ? 0 : 1,
      showPre: this.data.qIndex <= 0 ? 0 : 1
    })

    this.setData({
      brush: true
    })
  },

  preQ: function() {
    this.setData({
      qIndex: this.data.qIndex - 1,
      hasChoosed: 0,
      showAnswer: 0,
      u_answer: ""
    })
    this.setData({
      showPre: this.data.qIndex <= 0 ? 0 : 1,
      showNext: this.data.qIndex >= this.data.qTotal - 1 ? 0 : 1,
    })

    this.setData({
      brush: true
    })
  },

  submit: function (e) {
    let tmp_answer = e.target.dataset["answer"];
    let u_answer = this.data.u_answer
    let indxQ = this.data.qIndex;
    let currQ = this.data.qEntity[indxQ];
    let t_type = currQ._type;
    let t_answer = currQ._answer;

    if (t_type == 3) {
      u_answer = u_answer.split(',');
      if (u_answer.indexOf(tmp_answer) == -1) {
        u_answer.push(tmp_answer);
        u_answer = u_answer.filter(n => n != '');
        u_answer.sort();
        u_answer = u_answer.join();
      } else {
        u_answer = u_answer.filter(n => n != tmp_answer);
        u_answer = u_answer.join()
      }
      this.setData({
        u_answer: u_answer,
        hasChoosed: 1
      });
    } else {
      u_answer = tmp_answer;
      if (u_answer == t_answer) {
        if (this.data.qIndex < this.data.qTotal - 1) {
          this.nextQ();
        } else {
          wx.showModal({
            title: '提示',
            content: '已经是最后一题了',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        // this.setData({
        //   qIndex: this.data.qIndex + 1,
        //   showAnswer: 0,
        //   hasChoosed: 0
        // });
      } else {
        module_mywrong.set_wrong_subject(app.globalData.selected_course, app.globalData.selected_chapter, this.data.qIndex)
        if (t_type == 1) {
          u_answer = (u_answer == 0 ? '错' : '对');
          t_answer = (t_answer == 0 ? '错' : '对');
        }
        this.setData({
          hasChoosed: 1,
          u_answer: u_answer,
          t_answer: t_answer,
          showAnswer: 1
        });
      }
    }
  },

  multiSubmit: function () {
    console.log("Hello");
    let u_answer = this.data.u_answer;
    let indxQ = this.data.qIndex;
    let currQ = this.data.qEntity[indxQ];
    let t_answer = currQ._answer;
    t_answer = t_answer.split('');
    t_answer = t_answer.join(',');
//    console.log(t_answer + "-" + u_answer);

    if (t_answer == u_answer) {
      this.setData({
        qIndex: this.data.qIndex + 1,
        hasChoosed: 0,
        showAnswer: 0,
        u_answer: ""
      });
    } else {
      module_mywrong.set_wrong_subject(app.globalData.selected_course, app.globalData.selected_chapter, this.data.qIndex)
      this.setData({
        hasChoosed: 1,
        u_answer: u_answer,
        t_answer: t_answer,
        showAnswer: 1
      });
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
    let currRecord = app.globalData.selected_course + "-" + app.globalData.selected_chapter;
    let index = this.data.qIndex;
    wx.setStorageSync(currRecord, index);
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

  on_long_press_page: function(e) {
    var index = this.data.qIndex
    wx.showActionSheet({
      itemList: ['收藏本题'],
      success: function (res) {
        if (res.tapIndex == 0) {
          module_mycollection.set_collection_subject(app.globalData.selected_course, app.globalData.selected_chapter, index)
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
