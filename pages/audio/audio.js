//index.js
//获取应用实例
var app = getApp()
Page({
  onLoad: function () {
    console.log('Load audio')
  },
  data: {
    poster: '',
    name: '123',
    author: '456',
    src: 'http://219.238.2.177/m10.music.126.net/20161021004709/ba84dd961bb968855098e778718656ac/ymusic/7dde/6cd6/f70c/ed63b30bd1d66b4010a0d7eb7e2a23e1.mp3?wshc_tag=0&wsts_tag=5808ef31&wsid_tag=e8314b3&wsiphost=ipdbm',
  },
  audioPlay: function () {
    this.setData({
      action: {
        method: 'play'
      }
    })
  },
  audioPause: function () {
    this.setData({
      action: {
        method: 'pause'
      }
    })
  },
  audioPlaybackRateSpeedUp: function () {
    this.setData({
      action: {
        method: 'setPlaybackRate',
        data: 2
      }
    })
  },
  audioPlaybackRateNormal: function () {
    this.setData({
      action: {
        method: 'setPlaybackRate',
        data: 1
      }
    })
  },
  audioPlaybackRateSlowDown: function () {
    this.setData({
      action: {
        method: 'setPlaybackRate',
        data: 0.5
      }
    })
  },
  audio14: function () {
    this.setData({
      action: {
        method: 'setCurrentTime',
        data: 14
      }
    })
  },
  audioStart: function () {
    this.setData({
      action: {
        method: 'setCurrentTime',
        data: 0
      }
    })
  }

  // getBackgroundAudioPlayerState({
  //   success: function(res) {
  //       console.log(res)
  //   }
  // })

})
