Page({
    data:{

    },
    onLoad:function(option){
        console.log("jinlai")
        console.log(option)
        console.log(typeof option.newsDetails)
        
        var data=JSON.parse(option.newsDetails)
        this.setData({
            'details':data
        });
    }
})