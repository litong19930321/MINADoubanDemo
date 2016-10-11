var app = getApp()
const URL_MovieDetail = "https://api.douban.com/v2/movie/subject/"
Page({
    data:{
        title:"",
        loading:true,
        movieDetail:{}
    },
    onLoad:function(param){
        console.log("参数中的title" + param.title)
        var that = this;
        app.getDataFromNet(URL_MovieDetail + param.id,function(err,data){
            if(err){
                console.log(err)
                return
            }else{
                that.setData({title:data.title,movieDetail:data,loading:false})
            }
        })
        // wx.setNavigationBarTitle({ title: param.title})
    },
    onShow:function(){
        
    },
    onReady:function(){
        wx.setNavigationBarTitle({title:this.data.title})
    }
})