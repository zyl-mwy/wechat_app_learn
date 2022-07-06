// pages/test_3/test_3.ts

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },

  //输入框的input事件的执行逻辑
  test(e){
    console.log(e.detail.value);
    this.setData({
      num: e.detail.value
    })
  },

  handletap(e){
    //console.log(e);
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + operation
    })
  }
})