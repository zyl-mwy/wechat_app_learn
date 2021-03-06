// components/Tabs/Tabs.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    aaa:{
      type:String,
      value: ""
    },
    tabs_new:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs:[
      {
        id: 0,
        name: "首页",
        isActive: true
      },
      {
        id: 1,
        name: "原创",
        isActive: false
      },
      {
        id: 2,
        name: "分类",
        isActive: false
      },
      {
        id: 3,
        name: "关于",
        isActive: false
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  
  methods: {
    handleItemTap(e){
      //console.log("点击我试试");
      console.log(e);

      const {index} = e.currentTarget.dataset;

      let {tabs} = this.data;
      //let tabs=JSON.parse(JSON.stringify(this.data.tabs));
      //let tabs=this.data.tabs;

      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      //this.data.tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);

      this.setData({
        tabs
      })
      
    },

    handleItemTap_new(e){
      //console.log("点击我试试");
      console.log(e);

      const {index} = e.currentTarget.dataset;

      // let {tabs_new} = this.data;
      // //let tabs=JSON.parse(JSON.stringify(this.data.tabs));
      // //let tabs=this.data.tabs;

      // tabs_new.forEach((a,b)=>b===index?a.isActive=true:a.isActive=false);
      // //this.data.tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);

      // this.setData({
      //   tabs_new
      // })

      this.triggerEvent("itemChange",{index});
    }
  }
})
