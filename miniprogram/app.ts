// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },

  onLaunch(){
    console.log("onLaunch");

    
  },

  onShow(){
    console.log("onShow");
  },

  onHide(){
    console.log("onHide");
  },

  onError(err){
    console.log("onError");
    console.log(err);
  },

  onPageNotFound(){
    console.log("onPageNotFound");

    wx.navigateTo({
      url: '/pages/test_7/test_7'
    })
  }
})