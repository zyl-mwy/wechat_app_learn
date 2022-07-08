// pages/test_15/test_15.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs_new:[
      {
        id: 0,
        name: "首页_1",
        isActive: true
      },
      {
        id: 1,
        name: "原创_1",
        isActive: false
      },
      {
        id: 2,
        name: "分类_1",
        isActive: false
      },
      {
        id: 3,
        name: "关于_1",
        isActive: false
      }
    ]
  },

  handleItemChange(e){
    console.log(e);
    const {index} = e.detail;
    console.log(index);

    let {tabs_new} = this.data;
    
    tabs_new.forEach((a, b) => b === index ? a.isActive = true : a.isActive = false);
      //this.data.tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);

    this.setData({
      tabs_new
    });
    
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