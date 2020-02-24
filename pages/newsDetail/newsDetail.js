const http=require('../../models/News');
Page({
  data: {
    data:[]
  }, 
  onLoad:async function (options) {
    http.getData().then(res=>{
      var data=res.data.result.list;
      this.setData({
        data
      })
    })
  },
})