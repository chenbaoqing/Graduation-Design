const http=require('../../models/News');
Page({
  data: {
    offset:0,
    data:[]
  }, 
  onLoad:async function (options) {
    http.getData(this.data.offset).then(res=>{
      var data=res.data.result.list;
      console.log(res) 
      this.setData({
        data
      }) 
    })
  },
  onReachBottom(){
    var offset=this.data.offset;
    offset+=35;
    http.getData(offset).then(res=>{
      var data=res.data.result.list;
      this.setData({
        offset,
        data:this.data.data.concat(data)
      })
    })
  },
  handleClick(event){
    wx.navigateTo({
      url: '/pages/newsDetail/newsDetail',
    })  
  }
})