// pages/test_2/test_2.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "wenyi", "//": "定义字符串",
    num: 10000, "//": "定义数字",
    isGirl: false, "//": "定义布尔类型",
    isChecked: false,
    person: {
      age: 74,
      height: 145,
      weight: 200,
      name: "富婆"
    },

    list:[
      {
        id:0,
        name:"猪八戒"
      },
      {
        id:1,
        name:"天蓬元帅"
      },
      {
        id:2,
        name:"悟能"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    msg: "wenyi"
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})