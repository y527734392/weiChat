//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World12',
    userInfo: {},
    albumsInfo: {},
    songsInfo: {},
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    console.log (options)
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    
    var $this = this;
    wx.request({
      url: 'http://y.baidu.com/app/user/home?from=3&artist_id='+options.id,
      data: {
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.data)
        
          $this.setData({
            userInfo:res.data.data.user_info,
            albumsInfo:res.data.data.albums,
            songsInfo:res.data.data.songs
          });
          wx.setNavigationBarTitle({
            title: res.data.data.user_info.un
          })
      }
    })
    console.log (that)
    
    // var xhr = new XMLHttpRequest;
    // xhr.open('GET','http://y.baidu.com/app/album/info?from=3&album_id=79863');
    // xhr.send();
    // xhr.onload = function(){
    //   if (xhr.status == 200){
    //     var res = xhr.responseText;
    //     console.log(res);
    //   }
    // }
  }
})
