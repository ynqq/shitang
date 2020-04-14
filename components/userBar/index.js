// components/botBar/index.js
Component({
  lifetimes: {
    attached() {
      wx.hideTabBar({

      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    showIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [{
        text: "首页",
        icon: "/static/img/shouye.png",
        selectIcon: "/static/img/shouye-active.png",
        path: "/pages/user/index/index"
      }, {
        text: "所有订单",
        icon: "/static/img/dingdan.png",
        selectIcon: "/static/img/dingdan-active.png",
        path: "/pages/user/order/index"
      },
      {
        text: "个人中心",
        icon: "/static/img/wode.png",
        selectIcon: "/static/img/wode-active.png",
        path: "/pages/user/my/index"
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changePage(e) {
      if (index == this.data.showIndex) {
        return
      }
      let index = e.currentTarget.dataset.index
      let path = this.data.list[index].path
      wx.switchTab({
        url: path,
      })
    }
  },
})