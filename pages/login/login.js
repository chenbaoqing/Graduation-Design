Page({
  data: {

  },
  onLoad: function (options) {

  },
  handleToggle(){
    wx.switchTab({
      url: '/pages/video/video',
    });
  }
})