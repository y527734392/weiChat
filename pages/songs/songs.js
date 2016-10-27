var dataUrl='http://zhangmenshiting.baidu.com/data2/music/06121632f2871a61fa8929e0b07da125/268562970/268562970.mp3?xcode=e88ed581af1db2e79614b4474386abae'
Page({
  data: {
    playing: true,
    playTime: 0,
    formatedPlayTime: '00:00:00',
    dataUrl:'',
    songsInfo:''
  },
  onLoad: function (data) {
    console.log('Load');
    console.log(data);
    var that = this;

    wx.request({
      url: 'http://y.baidu.com/app/song/info?from=3&song_id='+ data.songid,
      data: {
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.data)

        that.setData({
          playing: false,
          playTime: 0,
          formatedPlayTime: '00:00:00',
          songsInfo:res.data.data,
          //albumsInfo:res.data.data.albums,
          //songsInfo:res.data.data.songs
        });
        /*wx.setNavigationBarTitle({
          title: res.data.data.title
        })*/
      }
    })
  },
  play: function (res) {
    var that = this
    wx.playBackgroundAudio({
     dataUrl: res.currentTarget.dataset.url,
     title: res.currentTarget.dataset.title,
     coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000000Jhxf24CFL06.jpg?max_age=2592000',
     complete: function (res) {
       that.setData({
         playing: true
       })
     }
    })
    this._enableInterval()
  },
  seek: function (e) {
    clearInterval(this.updateInterval)
    var that = this
    wx.seekBackgroundAudio({
      position: e.detail.value,
      complete: function () {
        // 实际会延迟两秒左右才跳过去
        setTimeout(function () {
          that._enableInterval()
        }, 20)
      }
    })
  },
  pause: function () {
    var that = this
    wx.pauseBackgroundAudio({
      success: function () {
        that.setData({
          playing: false
        })
      }
    })
  },
  stop: function () {
    var that = this
    wx.stopBackgroundAudio({
      success: function (res) {
        that.setData({
          playing: false,
          playTime: 0,
          formatedPlayTime: 0
        })
      }
    })
  },
  _enableInterval: function () {
    var that = this
    update()
    this.updateInterval = setInterval(update, 500)
    function update() {
      wx.getBackgroundAudioPlayerState({
        success: function (res) {
          that.setData({
            playTime: res.currentPosition,
            formatedPlayTime: res.currentPosition + 1
          })
        }
      })
    }
  },
  onUnload: function () {
    clearInterval(this.updateInterval)
  }
})
