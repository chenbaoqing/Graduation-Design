const http=require('../../models/Video');
Page({
  data: {
    count:0,
    result:[]
  },
  onLoad:async function (options) {
    http.getData(this.data.count).then(res=>{
      var result=res.data.result;
      this.setData({
        result
      })
    })
  },
  onReachBottom(){
    var count=this.data.count;
    count+=20;
    http.getData(count).then(res=>{
      var result=res.data.result;
      this.setData({
        count,
        result:this.data.result.concat(result)
      })
    })
  },
})