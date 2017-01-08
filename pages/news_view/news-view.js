Page({
    data:{

    },
    onLoad:function(){
       
    },
    onReady:function(){
        var _this = this;
        wx.request({
          url: 'https://apis.baidu.com/txapi/apple/apple',
          header:{
              'apikey':'b1f1085ab345cf84d10749501027697f'
          },
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            console.log(res)
            // console.log(res.data.showapi_res_body.pagebean.contentlist)
            // var data =res.data.showapi_res_body.pagebean.contentlist;
            // var newsFocusImgUrls = [];
            // for (var i = 0; i < 8;i++){
            //     // console.log(data[i].imageurls.length)
            //     if (!data[i].imageurls.length){
            //        // console.log(data[i].imageurls)
            //         // newsFocusImgUrls.push(data[i].imageurls[0].url);
            //     }
            // }
            //console.log(newsFocusImgUrls);
            
            // _this.setData({
            //     'newsFocusImgUrls':res.data.showapi_res_body.pagebean.contentlist
            // })
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})