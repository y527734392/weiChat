//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    artistList: {},

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据

    var $this = this;
    wx.request({
      url: 'http://y.baidu.com/app/indie/artistlist?desc=1&genre=1&orderby=0&page=0&size=20',
      data: {
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.data)
        
          $this.setData({
            artistList:res.data.data.list,
          })
      }
    })
  }
})
