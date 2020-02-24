const http=require('../../models/Radio');
const audio=wx.getBackgroundAudioManager()
const{
  globalData
}=getApp()
Page({
  data: {
    offset:0,
    data:[],
    isPlay:false
  },
  onLoad:async function (options) {
    http.getData(this.data.offset).then(res=>{
      var data=res.data.data;
      this.setData({
        data
      })
      console.log(data)
    })
  },
  onReachBottom(){
    var offset=this.data.offset;
    offset+=35;
    http.getData(offset).then(res=>{
      var data=res.data.data;
      this.setData({
        offset,
        data:this.data.data.concat(data)
      })
    })
  },
  handlePlay(e){  
    var url=e.currentTarget.dataset.url
  if(this.data.isPlay){
    audio.pause();
    
    this.setData({
      isPlay:!this.data.isPlay
    })
  }else{
    audio.title = "n";
    audio.src = url;
    this.setData({
      isPlay:!this.data.isPlay
    })
  }
}
})