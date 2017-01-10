Page({
    data:{

    },
    onLoad:function(){
       
    },
    onReady:function(){
        var _this = this;
        wx.request({
          url: 'https://apis.baidu.com/showapi_open_bus/channel_news/search_news',
          header:{
              'apikey':'b1f1085ab345cf84d10749501027697f'
          },// 设置请求的 header
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          success: function(res){
            
            var newsFocusImgUrls = [];
            var newsList = [];

            var contestList = res.data.showapi_res_body.pagebean.contentlist;
            console.log(contestList);
            contestList.forEach(function(item,indexd,array){
              
              if (item.imageurls.length!=0){
                
                if (newsFocusImgUrls.length <= 5){
                  newsFocusImgUrls.push(item.imageurls[0].url);
                }
                newsList.push(item);
                
              }
            });
            console.log(newsFocusImgUrls);
            console.log(newsList);
           
            _this.setData({
                'newsFocusImgUrls':newsFocusImgUrls
            })
            _this.setData({
                'newsList':newsList
            })
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },
    showDetails:function(event){
      console.log(event);
      var data = JSON.stringify(event.currentTarget.dataset.content);
      wx.navigateTo({
        'url':'../news_details/news-details?newsDetails='+data,
        'success':function(){
          console.log("succeed");
        }
      })
    }
})