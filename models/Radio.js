var baseUrl="http://yiapi.xinli001.com/";  //?offset=0&limit=35
function http({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:baseUrl+url,
            data,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                reject(err)
            },
        });
    })
}
module.exports={
    getData:(offset)=>{
        return http({
            url:"fm/newfm-list.json",
            data:{
                offset
            }
        })
    }
}