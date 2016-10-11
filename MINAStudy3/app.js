//app.js
App({
  //  生命周期方法
  //1.0 应用程序开始加载  启动成功 只触发一次
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  //2.0 应用程序显示  前台状态 触发 
  onShow: function () {
      console.log('App Show')
  },
  //3.0 应用程序进入后台  后台状态 触发 
  onHide: function () {
      console.log('App Hide')
    },
  //应用程序全局方法，可以在每个页面调用的方法
  getDataFromNet(url,callback){
//参照wx的API接口
// wx.request发起的是https请求。一个微信小程序，同时只能有5个网络请求连接。
// OBJECT参数说明：
// 参数名	类型	必填	说明
// url	String	是	开发者服务器接口地址
// data	Object、String	否	请求的参数
// header	Object	否	设置请求的 header , header 中不能设置 Referer
// method	String	否	默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
// success	Function	否	收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
// fail	Function	否	接口调用失败的回调函数
// complete	Function	否	接口调用结束的回调函数（调用成功、失败都会执行）
    wx.request({
        url,
        data:{},
        header:{'Content-Type':'application/json'},
        method:'GET',
        success(res){
          callback(null,res.data)
        },
        fail(e){
          callback(e)
        }
    })

  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})