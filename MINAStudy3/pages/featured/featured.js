const app = getApp()
const URL_TopMovie = "https://api.douban.com/v2/movie/top250";

//控制页面的逻辑  类似于controller
Page({
    data:{
        title:"加载中...",
        movies:[],
        loading:true
    },
    //1.生命周期函数--监听页面加载
    onLoad(){
        console.log("推荐电影页面加载完成onLoad")
        var that = this
        app.getDataFromNet(URL_TopMovie,function(err,data){
            
            //更新数据
            if(err){
                //如果错误就打印日志 输出
                console.log(err)
                return;
            }else{
                //如果请求成功就重新设置 data内容，同事框架会自动渲染内容
                that.setData({title:data.title,movies:data.subjects,loading:false})
            }
        })
    },
    //2.页面显示
    onShow:function(){
        console.log("推荐电影页面显示onShow")
    },
    //3.页面渲染完成
    onReady:function(){
        console.log("推荐电影页面渲染完成onReady")
    },
    // 页面隐藏
    onHide:function(){
       console.log("推荐电影页面影藏onHide")
    },
    // 页面关闭
    onUnload:function(){
        console.log("推荐电影页面关闭onUnload")
    },
    //页面相关事件处理函数--监听用户下拉动作
    onPullDownRefreash:function(){
        console.log("推荐电影页面刷新onPullDownRefreash")
    },
    // 滑动到最底部触发  加载更多  但没找到api接口  所以就不实现了
    loadMore:function(){
        console.log("已经滑到最底部了")
    }
})