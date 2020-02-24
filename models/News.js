var baseUrl= 'https://api.jisuapi.com/'; 
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
            url:"news/get",
            data:{
                appkey: '5dd70187f74e3baa',
                channel: /*[[${newsKeyword}]]*/ '',
                offset
            }
        })
    }
}