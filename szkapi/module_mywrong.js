
var app = getApp()
var common = require('../common/subject.js')

function get_wrong_subjects(course) {
  var wobj = wx.getStorageSync("wrong") || { "w-mks": [], "w-sx": [], "w-mzt": [], "w-jds": [] }
  var ret = []
  var aobj
  switch(course) {
    case 0: {
      aobj = wobj["w-mks"]
      break
    }
    case 1: {
      aobj = wobj["w-sx"]
      break
    }
    case 2: {
      aobj = wobj["w-mzt"]
      break
    }
    case 3: {
      aobj = wobj["w-jds"]
      break
    }
  }
  aobj.forEach(function(val) {
    var cpt_ind_array = val.split('-')
    var chapter = parseInt(cpt_ind_array[0])
    var index = parseInt(cpt_ind_array[1])
    var subject = common.get_subject_by_course_and_chapter_and_index(course, chapter, index)
    subject['c'] = chapter
    subject['i'] = index
    ret.push(subject)
  })

  return ret
}

function set_wrong_subject(course, chapter, index) {
  var wobj = wx.getStorageSync("wrong") || { "w-mks": [], "w-sx": [], "w-mzt": [], "w-jds": [] }
  var aobj
  switch (course) {
    case 0: {
      aobj = wobj["w-mks"]
      break
    }
    case 1: {
      aobj = wobj["w-sx"]
      break
    }
    case 2: {
      aobj = wobj["w-mzt"]
      break
    }
    case 3: {
      aobj = wobj["w-jds"]
      break
    }
  }
  var key_word = chapter + '-' + index
  var is_exist = false

  let x = aobj.filter(val => val == key_word)
  if (x.length != 0) {
    is_exist = true;
  }

  if (!is_exist) {
    aobj.push(key_word)
    wx.setStorageSync("wrong", wobj);
  }
}

function del_subject(course, chapter, index) {
  //
  var wobj = wx.getStorageSync("wrong") || { "w-mks": [], "w-sx": [], "w-mzt": [], "w-jds": [] }
  var aobj
  switch (course) {
    case 0: {
      aobj = wobj["w-mks"]
      break
    }
    case 1: {
      aobj = wobj["w-sx"]
      break
    }
    case 2: {
      aobj = wobj["w-mzt"]
      break
    }
    case 3: {
      aobj = wobj["w-jds"]
      break
    }
  }
  var key_word = chapter + '-' + index
  var is_exist = false
  let x = aobj.filter(val => val == key_word)
  if (x.length != 0) {
    is_exist = true;
  }
  if (is_exist) {
    var i = aobj.indexOf(key_word)
    aobj.splice(i, 1)
  }
  //aobj = aobj.filter(val => val != key_word)
  wx.setStorageSync("wrong", wobj);
}

module.exports.get_wrong_subjects = get_wrong_subjects
module.exports.set_wrong_subject = set_wrong_subject
module.exports.del_subject = del_subject