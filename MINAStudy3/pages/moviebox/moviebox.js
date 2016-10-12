var app = getApp()
const URL_Moviebox = "https://api.douban.com/v2/movie/us_box"

Page({
  data:{
    title:"拼命加载中...",
    date:"",
    movies:[],
    loading:true
  },
  onLoad:function(){
    var that = this;
    app.getDataFromNet(URL_Moviebox,function(err,data){
        that.setData({title:data.title,date:"("+ data.date +")",movies:data.subjects,loading:false})
    })
  },
  onShow:function(){
    // 页面显示
  },
  onReady:function(){
    // 页面渲染完成
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})

