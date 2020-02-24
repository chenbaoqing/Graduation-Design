var baseUrl="https://api.apiopen.top/";
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
    getData:(count)=>{
        return http({
            url:"getJoke",
            data:{
                count
            }
        })
    }
}