var app = getApp()
const URL_SearchMovie = "https://api.douban.com/v2/movie/search"
var key = ""
Page({
  data:{
    title:"请输入要搜索的内容",
    movies:[],
    loading:false
  },
//   此处参考官方文档中 输入框的内容为e.detail.value
  
  search:function(e){
      if(!e.detail.value){
          return
      }else{
          this.setData({title:"拼命搜索中...",loading:true})
          console.log('搜索的的关键词：' + e.detail.value)
          var that = this
          // 调用app的全局方法时候 要把使用一个指针指向this
          app.getDataFromNet(URL_SearchMovie + '?q=' + e.detail.value,function(err,data){
              that.setData({title:data.title,movies:data.subjects,loading:false})
          })
      }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})